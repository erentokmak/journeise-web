import { useState } from 'react'
import { getSession, signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useMutation, useLazyQuery } from '@apollo/client'
import moment from 'moment'

import { Button } from '@/ui/button'
import { cn } from '@/lib/utils'
import { Label } from '@/ui/label'
import { Input } from '@/ui/input'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/ui/card'
import { useIsMobile } from '@/hooks/Responsive'
import { useToast } from '@/hooks/use-toast'
import { TermsAndPrivacy } from '@/components/auth/terms-and-privacy'
import { validateSignInForm } from '@/utils/validations/auth'
import { CREATE_CUSTOMER, UPDATE_CUSTOMER_QUICKESTA_INFO } from '@/graphql/mutations/customer'
import { GET_CUSTOMER_BY_EMAIL_AND_PHONE } from '@/graphql/queries/customer'
import { formatPhoneNumber } from '@/utils/formatters/phone'

// Form hata tipleri
interface ISignInFormErrors {
  email?: string
  password?: string
}

export default function SignIn() {
  const router = useRouter()
  const { toast } = useToast()
  const isMobile = useIsMobile()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState<ISignInFormErrors>({})
  const { data: session } = useSession()

  // GraphQL mutations ve queries
  const [createCustomer] = useMutation(CREATE_CUSTOMER)
  const [updateCustomerQuickestaInfo] = useMutation(UPDATE_CUSTOMER_QUICKESTA_INFO)
  const [getCustomerByEmailAndPhone] = useLazyQuery(GET_CUSTOMER_BY_EMAIL_AND_PHONE)

  const isAddMode =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('mode') === 'add'

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit(e as any)
    }
  }

  /**
   * Kullanıcının Journeise customer tablosunda kaydı var mı kontrol eder
   * @param email - Kullanıcı email adresi
   * @param phone - Kullanıcı telefon numarası
   * @returns Customer kaydı varsa true, yoksa false
   */
  const checkCustomerExists = async (email: string, phone: string) => {
    try {
      const { data } = await getCustomerByEmailAndPhone({
        variables: {
          email,
          phone
        }
      })
      return data?.customers?.length > 0
    } catch (error) {
      console.error("Müşteri kontrolü hatası:", error)
      return false
    }
  }

  /**
   * Yeni müşteri kaydı oluşturur
   * @param userData - Kullanıcı bilgileri (name, email, phone, quickestaUserId)
   */
  const createNewCustomer = async (userData: { name: string, email: string, phone: string, quickestaUserId: string }) => {
    try {
      const { name, email, phone, quickestaUserId } = userData

      const newCustomerResult = await createCustomer({
        variables: {
          input: {
            business_id: 1,
            full_name: name,
            phone,
            email,
            quickesta_user_id: quickestaUserId,
            is_quickesta_user: true,
            created_at: moment().add(3, 'hours').toISOString(),
          }
        }
      })

      // Eğer quickesta_user_id veya is_quickesta_user alanları doğru şekilde atanmadıysa güncelle
      if (newCustomerResult.data && newCustomerResult.data.insert_customers_one) {
        const customerId = newCustomerResult.data.insert_customers_one.id

        if (!newCustomerResult.data.insert_customers_one.quickesta_user_id ||
          !newCustomerResult.data.insert_customers_one.is_quickesta_user) {
          try {
            const updateResult = await updateCustomerQuickestaInfo({
              variables: {
                customer_id: customerId,
                quickesta_user_id: quickestaUserId
              }
            })
          } catch (updateError) {
            console.error("Müşteri güncelleme hatası:", updateError)
          }
        }
      }
    } catch (error) {
      console.error("Müşteri oluşturma hatası:", error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validation = validateSignInForm(formData)
    if (!validation.isValid) {
      toast({
        variant: 'destructive',
        title: 'Form hatası',
        description: validation.error,
      })
      return
    }

    setIsLoading(true)
    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      })

      if (result?.error) {
        toast({
          title: 'Hata',
          description: 'E-posta veya şifre hatalı',
          variant: 'destructive',
        })
        return
      }
      // Get the latest session data
      const session = await getSession()
      if (!session?.user) {
        toast({
          title: 'Hata',
          description: 'Kullanıcı bilgileri alınamadı',
          variant: 'destructive',
        })
        return
      }

      // Kullanıcı bilgilerini al
      const { name, email, phoneNumber, id: quickestaUserId } = session.user

      // Telefon numarasını formatla
      const formattedPhone = formatPhoneNumber(phoneNumber, 90) // Varsayılan olarak Türkiye kodu

      // Kullanıcının Journeise customer tablosunda kaydı var mı kontrol et
      const customerExists = await checkCustomerExists(email, formattedPhone)

      // Eğer customer kaydı yoksa oluştur
      if (!customerExists && quickestaUserId) {
        await createNewCustomer({
          name,
          email,
          phone: formattedPhone,
          quickestaUserId
        })
      }

      if (isAddMode) {
        router.push('/')
      } else {
        router.push('/')
      }
    } catch (error) {
      toast({
        title: 'Hata',
        description: 'Bir hata oluştu. Lütfen tekrar deneyin.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-2">
        <Label htmlFor="email">E-posta</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="ornek@mail.com"
          value={formData.email}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          required
          className={cn(errors.email && 'border-red-500')}
        />
        {errors.email && (
          <span className="text-xs text-red-500">{errors.email}</span>
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="password">Şifre</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          required
          className={cn(errors.password && 'border-red-500')}
        />
        {errors.password && (
          <span className="text-xs text-red-500">{errors.password}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading
            ? 'Giriş yapılıyor...'
            : isAddMode
              ? 'Hesap Ekle'
              : 'Giriş Yap'}
        </Button>

        {isAddMode && (
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => router.push('/')}
          >
            Vazgeç
          </Button>
        )}
      </div>

      {!isMobile && !isAddMode && (
        <div className="text-center text-sm">
          Hesabınız yok mu?{' '}
          <Link href="/auth/sign-up" className="underline underline-offset-4">
            Kayıt Ol
          </Link>
        </div>
      )}
    </form>
  )

  if (isMobile) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
        <div className="w-full max-w-sm">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-xl font-bold">
                {isAddMode ? 'Hesap Ekle' : "JOURNEISE'a Giriş Yapın"}
              </h1>
              {!isAddMode && (
                <div className="text-center text-sm">
                  Hesabınız yok mu?{' '}
                  <Link
                    href="/auth/sign-up"
                    className="underline underline-offset-4"
                  >
                    Kayıt Ol
                  </Link>
                </div>
              )}
            </div>

            {renderForm()}

            <TermsAndPrivacy />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <Image
            src="/assets/images/brand-images/quickestaiconwhite.png"
            alt="Quickesta"
            width={24}
            height={24}
            className="rounded-md bg-primary p-1"
          />
          <span>Quickesta</span>
        </div>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">
              {isAddMode ? 'Hesap Ekle' : 'Giriş Yapın'}
            </CardTitle>
            <CardDescription>
              {isAddMode
                ? 'Yeni bir hesap eklemek için giriş yapın'
                : 'Bilgilerinizi girerek giriş yapın'}
            </CardDescription>
          </CardHeader>
          <CardContent>{renderForm()}</CardContent>
        </Card>
        <TermsAndPrivacy />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {},
  }
}

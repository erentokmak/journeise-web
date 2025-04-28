import { Button } from '@/ui/button'
import { Input } from '@/ui/input'
import { Textarea } from '@/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card'

export function ContactForm() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>İletişim Formu</CardTitle>
        <CardDescription>
          Bizimle iletişime geçmek için aşağıdaki formu doldurun.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Adınız Soyadınız
            </label>
            <Input id="name" placeholder="Adınız Soyadınız" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              E-posta Adresiniz
            </label>
            <Input id="email" type="email" placeholder="ornek@email.com" />
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Konu
            </label>
            <Input id="subject" placeholder="Mesajınızın konusu" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Mesajınız
            </label>
            <Textarea
              id="message"
              placeholder="Mesajınızı buraya yazın..."
              className="min-h-[150px]"
            />
          </div>
          <Button type="submit" className="w-full">
            Gönder
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 
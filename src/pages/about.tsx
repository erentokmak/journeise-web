import Image from 'next/image'
import Head from 'next/head'
import { Card, CardContent } from '@/ui/card'
import { Separator } from '@/ui/separator'
import { Globe, Award, Users, Clock } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Hakkımızda | Journeise</title>
        <meta name="description" content="Journeise - Profesyonel Vize Danışmanlığı. Uzman kadromuz ile vize başvurunuzu güvenle yapın." />
        <meta name="keywords" content="vize danışmanlığı, schengen vizesi, amerika vizesi, ingiltere vizesi, vize başvurusu, journeise" />
        <meta property="og:title" content="Hakkımızda | Journeise" />
        <meta property="og:description" content="Journeise - Profesyonel Vize Danışmanlığı. Uzman kadromuz ile vize başvurunuzu güvenle yapın." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://journeise.com/about" />
        <meta property="og:image" content="https://journeise.com/assets/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hakkımızda | Journeise" />
        <meta name="twitter:description" content="Journeise - Profesyonel Vize Danışmanlığı. Uzman kadromuz ile vize başvurunuzu güvenle yapın." />
        <meta name="twitter:image" content="https://journeise.com/assets/images/og-image.jpg" />
        <link rel="canonical" href="https://journeise.com/about" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Hakkımızda</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[400px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                alt="Journeise Ofis"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Journeise Vize Danışmanlığı</h2>
              <p className="text-muted-foreground">
                2010 yılından bu yana, binlerce başarılı vize başvurusu ile müşterilerimizin hayallerini gerçeğe dönüştürüyoruz. Deneyimli kadromuz ve güncel vize prosedürleri bilgimiz ile sizlere en iyi hizmeti sunuyoruz.
              </p>
              <Separator />
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Misyonumuz</h3>
                <p>
                  Müşterilerimizin vize başvuru süreçlerini en güvenilir ve hızlı şekilde yönetmek, onların hayallerindeki ülkelere ulaşmalarını sağlamak için çalışıyoruz.
                </p>
                <p>
                  Her başvurunun kendine özgü olduğuna inanıyor ve her müşterimize özel çözümler sunuyoruz. Başarı oranımızı sürekli artırmak için sürekli kendimizi geliştiriyor ve güncel vize prosedürlerini takip ediyoruz.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Geniş Ülke Ağı</h3>
                  <p className="text-muted-foreground">Tüm dünya ülkelerine vize başvurusu</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Yüksek Başarı</h3>
                  <p className="text-muted-foreground">%95'in üzerinde başarı oranı</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Uzman Kadro</h3>
                  <p className="text-muted-foreground">Deneyimli vize danışmanları</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Clock className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Hızlı Süreç</h3>
                  <p className="text-muted-foreground">Minimum bekleme süresi</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Vize İşlemleri Nasıl İşliyor?</h2>
            <ol className="list-decimal ml-6 space-y-2 text-lg">
              <li><b>Başvuru:</b> Bizimle iletişime geçerek başvurunuzu basit bir şekilde gerçekleştirin.</li>
              <li><b>Evrak Teslimi:</b> Sizden istenilen evrakları eksiksiz bir şekilde deneyimli personellerimize teslim edin.</li>
              <li><b>Konsolosluk İşlemleri:</b> Resmi kurumlarda ki tüm süreçleri sizin adınıza yönetelim ve sizi bilgilendirelim.</li>
              <li><b>Hayallerinize Ulaşın:</b> Tüm bu sürecin sonunda hızlı ve yüksek başarı oranı ile vizenizi teslim edelim.</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  )
} 
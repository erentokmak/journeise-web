import { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent } from '@/ui/card'
import { Separator } from '@/ui/separator'

export const metadata: Metadata = {
  title: 'Hakkımızda | 1Barbers',
  description: 'Cömert Paşa Sebebci - Profesyonel MMA Dövüşçüsü ve Kuştepe\'nin Yerli Berberi',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Hakkımda</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative h-[400px] w-full">
            <Image
              src="/assets/images/barber-images/1.jpg"
              alt="Cömert Paşa Sebebci"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Cömert Paşa Sebebci</h2>
            <p className="text-muted-foreground">
              07.05.2005, Kuştepe doğumluyum. Profesyonel MMA dövüşçüsü ve Kuştepe'nin yerli berberiyim.
            </p>
            <Separator />
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Yolculuğum</h3>
              <p>
                Berberlik kariyerime Kuştepe'de başladım ve kısa sürede kendime özgü tarzımı yarattım. 
                "1" lakabımla tanınan bu tarz, hem işimi yaparken kendi yolumu bulmamı sağladı hem de 
                geniş bir kitleye ulaşmama yardımcı oldu.
              </p>
              <p>
                Şu anda profesyonel MMA dövüşçüsü olarak kariyerime odaklanıyorum. Spor tutkum ve 
                disiplinli çalışma anlayışım, hem ringde hem de hayatın her alanında başarıya ulaşmamı 
                sağlıyor.
              </p>
            </div>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-4">Felsefem</h3>
            <p className="text-muted-foreground">
              "Küçüklüğümden beri kendimi hep Batı kültürüne hakim hissettim. Bu kültür, 
              basketboldan dinlediğim müziğe kadar her şeyde bana ilham verdi. Şimdi de MMA 
              ile bu yolculuğuma devam ediyorum. Amacım, hem ringde hem de hayatta kendimi 
              sürekli geliştirmek ve insanlara ilham kaynağı olmak."
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-medium mb-2">Kuştepe Kökeni</h4>
              <p className="text-sm text-muted-foreground">
                Kuştepe'nin yerli bir parçası olarak, buradaki kültürü ve değerleri 
                her zaman taşıyorum.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-medium mb-2">MMA Kariyeri</h4>
              <p className="text-sm text-muted-foreground">
                Profesyonel MMA dövüşçüsü olarak, sürekli kendimi geliştiriyor ve 
                yeni hedefler için çalışıyorum.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-medium mb-2">Gelecek Hedefler</h4>
              <p className="text-sm text-muted-foreground">
                Hem spor kariyerimde hem de kişisel gelişimimde sürekli ilerlemeye 
                ve yeni başarılara ulaşmaya odaklanıyorum.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 
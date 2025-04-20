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
              07.05.2005 doğumluyum, Kuştepe'de büyüdüm. Çocukluğumdan beri öğrendiğim en önemli şey, dua eder ve çaba gösterirsen Rabbim sana her zaman bir yol açar. O yolda yürüyüp yürümemek ise senin kararındır.
            </p>
            <Separator />
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Yolculuğum</h3>
              <p>
                Hayatımda aşık olduğum tek şey MMA. Bu spor beni ben yapan, karakterimi inşa eden, hayallerimi besleyen şey. Allah'ın izniyle bayrağımı en onurlu şekilde taşımak benim görevim, sorumluluğum ve ekmek kapım.
              </p>
              <p>
                Aynı zamanda 1Barbers çatısı altında kendi berber dükkanımda çalışıyor, aileme destek olmaya devam ediyorum. Daha yolun çok başındayım, öğrenilecek çok şey var. Ama bu yoldayım ve pes etmeye hiç niyetim yok.
              </p>
            </div>
          </div>
        </div>

        <Card className="mb-12">
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
      </div>
    </div>
  )
} 
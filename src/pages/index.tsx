import { Button } from "@/ui/button";
import { BARBERS, GALLERY_IMAGES } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/assets/images/gallery-images/1.jpg"
          alt="1Barbers"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="mb-6 text-7xl font-bold text-white">1BARBERS</h1>
          <p className="mb-8 text-2xl text-white/90">Tarzını Yeniden Keşfet</p>
          <Link href="/reservation">
            <Button variant="outline" size="lg" className="text-lg group">
              Hemen Rezervasyon Yap
              <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">Hizmetlerimiz</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-lg bg-card p-6 transition-all hover:bg-card/80">
              <h3 className="mb-4 text-2xl font-semibold">Saç Kesimi</h3>
              <p className="mb-4 text-muted-foreground">
                Modern ve klasik kesim teknikleriyle, yüz hatlarınıza en uygun saç stilini buluyoruz.
              </p>
              <p className="text-lg font-semibold">150 TL</p>
            </div>
            <div className="group rounded-lg bg-card p-6 transition-all hover:bg-card/80">
              <h3 className="mb-4 text-2xl font-semibold">Sakal Kesimi</h3>
              <p className="mb-4 text-muted-foreground">
                Profesyonel sakal şekillendirme ve bakım hizmetiyle kendine güvenini artır.
              </p>
              <p className="text-lg font-semibold">100 TL</p>
            </div>
            <div className="group rounded-lg bg-card p-6 transition-all hover:bg-card/80">
              <h3 className="mb-4 text-2xl font-semibold">Saç & Sakal Kombo</h3>
              <p className="mb-4 text-muted-foreground">
                Komple bakım paketi ile tamamen yenilenmiş bir görünüme kavuş.
              </p>
              <p className="text-lg font-semibold">200 TL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Barbers Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">Ustalarımız</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BARBERS.map((barber) => (
              <div
                key={barber.id}
                className="group overflow-hidden rounded-lg bg-card transition-all hover:bg-card/80"
              >
                <div className="relative mb-4 h-80 w-full overflow-hidden">
                  <Image
                    src={barber.image}
                    alt={barber.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-semibold">{barber.name}</h3>
                  <p className="text-muted-foreground">
                    {barber.experience} Yıl Deneyim
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">Galeri</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {GALLERY_IMAGES.map((image) => (
              <div key={image.id} className="group relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/gallery">
              <Button variant="outline" size="lg" className="text-lg group">
                Tüm Galeriyi Gör
                <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-12 text-4xl font-bold">İletişim</h2>
          <div className="mx-auto max-w-2xl space-y-6">
            <div>
              <h3 className="mb-2 text-xl font-semibold">Adres</h3>
              <p className="text-lg text-muted-foreground">
                Örnek Mahallesi, Örnek Sokak No:1, İstanbul
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Telefon</h3>
              <p className="text-lg text-muted-foreground">+90 555 555 55 55</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Email</h3>
              <p className="text-lg text-muted-foreground">info@1barbers.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

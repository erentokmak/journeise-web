import { Button } from "@/ui/button";
import { BARBERS, GALLERY_IMAGES } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/assets/images/gallery-images/1.jpg"
          alt="1Barbers"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="mb-6 text-6xl font-bold">1Barbers</h1>
          <p className="mb-8 text-xl">Profesyonel Saç & Sakal Bakımı</p>
          <Link href="/reservation">
            <Button variant="outline" size="lg" className="text-lg">
              Hemen Rezervasyon Yap
            </Button>
          </Link>
        </div>
      </section>

      {/* Barbers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">Ustalarımız</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BARBERS.map((barber) => (
              <div
                key={barber.id}
                className="overflow-hidden rounded-lg bg-zinc-900 p-4"
              >
                <div className="relative mb-4 h-64 w-full">
                  <Image
                    src={barber.image}
                    alt={barber.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{barber.name}</h3>
                <p className="text-gray-400">{barber.experience} Yıl Deneyim</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-zinc-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">Galeri</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {GALLERY_IMAGES.map((image) => (
              <div key={image.id} className="relative h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-12 text-4xl font-bold">İletişim</h2>
          <div className="space-y-4">
            <p className="text-xl">
              Adres: Örnek Mahallesi, Örnek Sokak No:1, İstanbul
            </p>
            <p className="text-xl">Telefon: +90 555 555 55 55</p>
            <p className="text-xl">Email: info@1barbers.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}

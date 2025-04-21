import { GALLERY_IMAGES } from "@/constants/data";
import Image from "next/image";
import { Card, CardContent } from "@/ui/card";
import Head from "next/head";

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Galeri | 1Barbers</title>
        <meta name="description" content="1Barbers'ın profesyonel ekibinin elinden çıkan en iyi saç kesimi ve sakal tıraşı örneklerini keşfedin." />
        <meta name="keywords" content="berber galeri, saç kesimi örnekleri, sakal tıraşı örnekleri, 1barbers, berber çalışmaları" />
        <meta property="og:title" content="Galeri | 1Barbers" />
        <meta property="og:description" content="1Barbers'ın profesyonel ekibinin elinden çıkan en iyi saç kesimi ve sakal tıraşı örneklerini keşfedin." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://1barbers.com/gallery" />
        <meta property="og:image" content="https://1barbers.com/assets/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Galeri | 1Barbers" />
        <meta name="twitter:description" content="1Barbers'ın profesyonel ekibinin elinden çıkan en iyi saç kesimi ve sakal tıraşı örneklerini keşfedin." />
        <meta name="twitter:image" content="https://1barbers.com/assets/images/og-image.jpg" />
        <link rel="canonical" href="https://1barbers.com/gallery" />
      </Head>
      <main className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-4 py-12">
          <h1 className="mb-12 text-center text-5xl font-bold">Galeri</h1>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            Profesyonel ekibimizin elinden çıkan en iyi çalışmalarımızı keşfedin.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {GALLERY_IMAGES.map((image) => (
              <Card key={image.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="group relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                      <p className="text-lg font-medium text-white">{image.alt}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
} 
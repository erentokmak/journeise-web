import Image from "next/image";
import { Card, CardContent } from "@/ui/card";
import Head from "next/head";
import { Globe, Building, Plane, FileText } from "lucide-react";

const VISA_TYPES = [
  {
    id: 1,
    title: "Schengen Vizesi",
    description: "Avrupa'nın 26 ülkesine serbestçe seyahat edin",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Amerika Vizesi",
    description: "B1/B2 vizesi ile Amerika'da hayallerinizi gerçekleştirin",
    icon: Building,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "İngiltere Vizesi",
    description: "İngiltere'de eğitim ve iş fırsatlarını değerlendirin",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Diğer Vizeler",
    description: "Tüm dünya ülkelerine vize başvurusu yapıyoruz",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
  }
];

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Vize Türleri | Journeise</title>
        <meta name="description" content="Journeise ile tüm vize türleri için profesyonel danışmanlık hizmeti alın. Schengen, Amerika, İngiltere ve daha fazlası." />
        <meta name="keywords" content="vize türleri, schengen vizesi, amerika vizesi, ingiltere vizesi, vize danışmanlığı, journeise" />
        <meta property="og:title" content="Vize Türleri | Journeise" />
        <meta property="og:description" content="Journeise ile tüm vize türleri için profesyonel danışmanlık hizmeti alın. Schengen, Amerika, İngiltere ve daha fazlası." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://journeise.com/gallery" />
        <meta property="og:image" content="https://journeise.com/assets/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vize Türleri | Journeise" />
        <meta name="twitter:description" content="Journeise ile tüm vize türleri için profesyonel danışmanlık hizmeti alın. Schengen, Amerika, İngiltere ve daha fazlası." />
        <meta name="twitter:image" content="https://journeise.com/assets/images/og-image.jpg" />
        <link rel="canonical" href="https://journeise.com/gallery" />
      </Head>
      <main className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-4 py-12">
          <h1 className="mb-12 text-center text-5xl font-bold">Vize Türleri</h1>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            Sunduğumuz vize danışmanlığı hizmetlerimizi keşfedin.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {VISA_TYPES.map((visa) => (
              <Card key={visa.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={visa.image}
                        alt={visa.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <visa.icon className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">{visa.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{visa.description}</p>
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
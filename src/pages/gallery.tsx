import { GALLERY_IMAGES } from "@/constants/data";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-12 text-center text-5xl font-bold">Galeri</h1>
        <p className="mb-12 text-center text-lg text-muted-foreground">
          Profesyonel ekibimizin elinden çıkan en iyi çalışmalarımızı keşfedin.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {GALLERY_IMAGES.map((image) => (
            <div key={image.id} className="group relative aspect-square">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-lg font-medium text-white">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 
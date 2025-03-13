import { GALLERY_IMAGES } from "@/constants/data";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black py-12 text-white">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center text-4xl font-bold">Galeri</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {GALLERY_IMAGES.map((image) => (
            <div key={image.id} className="group relative aspect-square">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 
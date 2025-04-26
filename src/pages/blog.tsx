import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const BLOGS = [
  {
    slug: "rusya-vizesi-hakkinda-bilmeniz-gerekenler",
    title: "Rusya Vizesi Hakkında Bilmeniz Gerekenler",
    summary: "Türkiye – Rusya arasında gelişen ilişkiler iki ülke arasındaki trafiğin arttırmaya devam ediyor...",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80"
  },
  {
    slug: "kanada-vizesi-hakkinda-en-guncel-bilgiler",
    title: "Kanada Vizesi Hakkında En Güncel Bilgiler",
    summary: "Kanada, en çok ziyaret edilen ülkeler arasındaki yerini koruyor. Korona virüsü sonrası sınır...",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80"
  },
  {
    slug: "ingiltere-vize-basvurulari-basladi-mi",
    title: "İngiltere Vize Başvuruları Başladı mı?",
    summary: "Virüs süreci yurt dışı seyahatleri konusunda belirsizlik yaratırken normalleşme sürecine girilmesiyle...",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
  },
  {
    slug: "abd-vizesine-korona-engeli-bitiyor-mu",
    title: "ABD Vizesine Korona Engeli Bitiyor mu?",
    summary: "Korona önlemleri kapsamında sınırlarını kapayan ülkeler, normalleşme dönemine girilmesiyle...",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Journeise</title>
      </Head>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((blog, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow bg-white dark:bg-background flex flex-col">
              <div className="relative h-40 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-muted-foreground mb-4 flex-1">{blog.summary}</p>
                <Link href={`/blog/${blog.slug}`}>
                  <span className="inline-block mt-auto text-primary hover:underline font-medium">Detayları Gör</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
} 
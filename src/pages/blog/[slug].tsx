import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

const BLOGS = [
  {
    slug: "rusya-vizesi-hakkinda-bilmeniz-gerekenler",
    title: "Rusya Vizesi Hakkında Bilmeniz Gerekenler",
    content: "Rusya vizesi başvurusu için gerekli belgeler, başvuru süreci ve dikkat edilmesi gerekenler hakkında detaylı bilgi...",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "kanada-vizesi-hakkinda-en-guncel-bilgiler",
    title: "Kanada Vizesi Hakkında En Güncel Bilgiler",
    content: "Kanada vizesi başvurusu için güncel süreçler, evraklar ve başvuru ipuçları...",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "ingiltere-vize-basvurulari-basladi-mi",
    title: "İngiltere Vize Başvuruları Başladı mı?",
    content: "İngiltere vizesi başvurularında son durum, başvuru adımları ve dikkat edilmesi gerekenler...",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "abd-vizesine-korona-engeli-bitiyor-mu",
    title: "ABD Vizesine Korona Engeli Bitiyor mu?",
    content: "ABD vizesi başvurularında pandemi sonrası gelişmeler ve yeni uygulamalar...",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
  },
];

export default function BlogDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const blog = BLOGS.find((b) => b.slug === slug);

  if (!blog) {
    return <div className="container mx-auto px-4 py-12">Blog bulunamadı.</div>;
  }

  return (
    <>
      <Head>
        <title>{blog.title} | Journeise</title>
      </Head>
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">{blog.title}</h1>
          <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
            <Image src={blog.image} alt={blog.title} fill className="object-cover" />
          </div>
          <div className="prose dark:prose-invert max-w-none">
            <p>{blog.content}</p>
          </div>
        </div>
      </main>
    </>
  );
} 
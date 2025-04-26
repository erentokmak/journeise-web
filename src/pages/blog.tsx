import Head from "next/head";

const BLOGS = [
  {
    title: "Rusya Vizesi Hakkında Bilmeniz Gerekenler",
    summary: "Türkiye – Rusya arasında gelişen ilişkiler iki ülke arasındaki trafiğin arttırmaya devam ediyor...",
  },
  {
    title: "Kanada Vizesi Hakkında En Güncel Bilgiler",
    summary: "Kanada, en çok ziyaret edilen ülkeler arasındaki yerini koruyor. Korona virüsü sonrası sınır...",
  },
  {
    title: "İngiltere Vize Başvuruları Başladı mı?",
    summary: "Virüs süreci yurt dışı seyahatleri konusunda belirsizlik yaratırken normalleşme sürecine girilmesiyle...",
  },
  {
    title: "ABD Vizesine Korona Engeli Bitiyor mu?",
    summary: "Korona önlemleri kapsamında sınırlarını kapayan ülkeler, normalleşme dönemine girilmesiyle...",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOGS.map((blog, i) => (
            <div key={i} className="p-6 border rounded-lg bg-white dark:bg-background shadow">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-muted-foreground">{blog.summary}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
} 
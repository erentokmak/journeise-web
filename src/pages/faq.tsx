import Head from "next/head";

const FAQS = [
  {
    question: "Vize nedir?",
    answer: "Vize, yurt dışına seyahat etme planı bulunan kişilerin, gitmek istediği ülkenin talep ediyor olması durumunda ilgili kurumlardan alması gereken izin belgesidir.",
  },
  {
    question: "Vize başvurusu nasıl yapılır?",
    answer: "Başvurular direkt olarak konsolosluklara, konsoloslukların resmi olarak yetkilendirdiği kurumlara yapılabilir.",
  },
  {
    question: "Schengen vizesi nedir?",
    answer: "Schengen vizesi, Schengen Bölgesi'ne üye devletlerden herhangi birine seyahat edenlerin seyahat başına turizm veya iş amaçlı 90 güne kadar kalmasına izin veren kısa süreli bir vizedir.",
  },
  {
    question: "Neden vize danışmanlık hizmeti almalıyım?",
    answer: "Vize başvurusu önemli bir işlemdir ve başvurunuzu riske atmak yerine bu konuda uzman olan deneyimli ekibimize güvenebilirsiniz.",
  },
];

export default function FAQ() {
  return (
    <>
      <Head>
        <title>Sık Sorulan Sorular | Journeise</title>
      </Head>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Sık Sorulan Sorular</h1>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <details key={i} className="p-4 border rounded-lg bg-white dark:bg-background shadow">
              <summary className="font-semibold cursor-pointer">{faq.question}</summary>
              <p className="mt-2 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </main>
    </>
  );
} 
import Head from "next/head";

const COUNTRIES = [
  "Amerika", "Almanya", "İngiltere", "Fransa", "Rusya", "Kanada", "Yunanistan", "Hollanda", "Avustralya", "Belçika", "Bulgaristan", "İsviçre"
];

export default function Countries() {
  return (
    <>
      <Head>
        <title>Vize Hizmeti Verilen Ülkeler | Journeise</title>
      </Head>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Vize Hizmeti Verdiğimiz Başlıca Ülkeler</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {COUNTRIES.map((country, i) => (
            <div key={i} className="p-6 border rounded-lg bg-white dark:bg-background shadow text-center font-semibold">
              {country}
            </div>
          ))}
        </div>
      </main>
    </>
  );
} 
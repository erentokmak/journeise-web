import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>İletişim | Journeise</title>
      </Head>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">İletişim</h1>
        <div className="space-y-4 text-lg">
          <div>
            <b>Adres:</b> Sıraselviler Caddesi Cengaver Han No:3 Daire:3 34437 Beyoğlu/İstanbul
          </div>
          <div>
            <b>Email:</b> <a href="mailto:taksimvize@gmail.com" className="text-primary underline">taksimvize@gmail.com</a>
          </div>
          <div>
            <b>Telefon:</b> <a href="tel:02122432636" className="text-primary underline">0212 243 26 36</a> / <a href="tel:02122454252" className="text-primary underline">0212 245 42 52</a>
          </div>
          <div>
            <b>Fax:</b> 0212 243 16 63
          </div>
        </div>
      </main>
    </>
  );
} 
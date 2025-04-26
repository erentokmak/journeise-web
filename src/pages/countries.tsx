import Head from "next/head";
import Image from "next/image";

const COUNTRIES = [
  { name: "Amerika", image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" },
  { name: "Almanya", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" },
  { name: "İngiltere", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" },
  { name: "Fransa", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80" },
  { name: "Rusya", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80" },
  { name: "Kanada", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80" },
  { name: "Yunanistan", image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80" },
  { name: "Hollanda", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80" },
  { name: "Avustralya", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80" },
  { name: "Belçika", image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80" },
  { name: "Bulgaristan", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80" },
  { name: "İsviçre", image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80" }
];

export default function Countries() {
  return (
    <>
      <Head>
        <title>Vize Hizmeti Verdiğimiz Ülkeler | Journeise</title>
      </Head>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Vize Hizmeti Verdiğimiz Başlıca Ülkeler</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {COUNTRIES.map((country, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow bg-white dark:bg-background">
              <div className="relative h-40 w-full">
                <Image
                  src={country.image}
                  alt={country.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">{country.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
} 
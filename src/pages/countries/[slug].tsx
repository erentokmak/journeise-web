import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/ui/button";
import { Card, CardContent } from "@/ui/card";
import { COUNTRIES } from "@/constants/countries";
import { ArrowLeft, Check, Globe, Clock, Calendar, FileText, MapPin, Building, Plane } from "lucide-react";
import { motion } from "framer-motion";

export default function CountryDetail() {
  const router = useRouter();
  const { slug } = router.query;
  
  // Convert slug back to country name format
  const countryName = slug 
    ? (slug as string).split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    : '';
  
  const country = COUNTRIES.find(c => 
    c.name.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!country) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">Ülke Bulunamadı</h1>
          <p className="text-muted-foreground mb-8">
            Aradığınız ülke bilgisi bulunamadı. Lütfen geçerli bir ülke seçin.
          </p>
          <Link href="/countries">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ülkelere Dön
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{country.name} Vizesi | Journeise</title>
        <meta name="description" content={`${country.name} vizesi hakkında detaylı bilgi. Vize başvuru süreci, gerekli belgeler ve daha fazlası.`} />
      </Head>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] w-full">
          <div className="absolute inset-0">
            <Image
              src={country.imageUrl}
              alt={country.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link href="/countries">
                  <Button variant="outline" className="mb-4 bg-background/80 backdrop-blur-sm">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Ülkelere Dön
                  </Button>
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{country.name}</h1>
                <p className="text-xl text-white/90 max-w-3xl">{country.description}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-card rounded-lg shadow-md p-6 mb-8"
                >
                  <h2 className="text-2xl font-bold mb-4">Ülke Hakkında</h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-muted-foreground mb-4">
                      {country.description}
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">Öne Çıkan Özellikler</h3>
                    <ul className="space-y-2">
                      {country.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-card rounded-lg shadow-md p-6 mb-8"
                >
                  <h2 className="text-2xl font-bold mb-4">Vize Bilgileri</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-primary mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold">İşlem Süresi</h3>
                        <p className="text-muted-foreground">{country.visaInfo.processingTime}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="h-6 w-6 text-primary mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold">Geçerlilik</h3>
                        <p className="text-muted-foreground">{country.visaInfo.validity}</p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Gerekli Belgeler</h3>
                  <ul className="space-y-2">
                    {country.visaInfo.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <FileText className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-card rounded-lg shadow-md p-6"
                >
                  <h2 className="text-2xl font-bold mb-4">Öne Çıkan Yerler</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {country.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start">
                        <MapPin className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-card rounded-lg shadow-md p-6 sticky top-24"
                >
                  <h2 className="text-xl font-bold mb-4">Vize Başvurusu</h2>
                  <p className="text-muted-foreground mb-6">
                    {country.name} vizesi için hemen başvurun. Uzman ekibimiz size yardımcı olacaktır.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full mb-4">
                      İletişime Geç
                    </Button>
                  </Link>
                  <Link href="/reservation">
                    <Button variant="outline" className="w-full">
                      Randevu Al
                    </Button>
                  </Link>
                  
                  <div className="mt-8 pt-6 border-t">
                    <h3 className="font-semibold mb-3">Diğer Popüler Vizeler</h3>
                    <div className="space-y-3">
                      {COUNTRIES.filter(c => c.name !== country.name).slice(0, 3).map((otherCountry, index) => (
                        <Link 
                          key={index} 
                          href={`/countries/${otherCountry.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center p-2 rounded-md hover:bg-muted transition-colors"
                        >
                          <div className="relative h-10 w-10 rounded-md overflow-hidden mr-3">
                            <Image
                              src={otherCountry.imageUrl}
                              alt={otherCountry.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="font-medium">{otherCountry.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 
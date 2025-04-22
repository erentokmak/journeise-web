import { Button } from "@/ui/button";
import { BARBERS, GALLERY_IMAGES } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { MoveRight, Scissors, Clock, Star, Award, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);

  return (
    <>
      <Head>
        <title>1Barbers | Profesyonel Berber Hizmetleri</title>
        <meta name="description" content="1Barbers ile profesyonel berber hizmetleri alın. Kuştepe'nin en iyi berberleri ile tanışın, online randevu alın." />
        <meta name="keywords" content="berber, kuaför, saç kesimi, sakal tıraşı, online randevu, 1barbers, kuştepe berber" />
        <meta property="og:title" content="1Barbers | Profesyonel Berber Hizmetleri" />
        <meta property="og:description" content="1Barbers ile profesyonel berber hizmetleri alın. Kuştepe'nin en iyi berberleri ile tanışın, online randevu alın." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://1barbers.com" />
        <meta property="og:image" content="https://1barbers.com/assets/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="1Barbers | Profesyonel Berber Hizmetleri" />
        <meta name="twitter:description" content="1Barbers ile profesyonel berber hizmetleri alın. Kuştepe'nin en iyi berberleri ile tanışın, online randevu alın." />
        <meta name="twitter:image" content="https://1barbers.com/assets/images/og-image.jpg" />
        <link rel="canonical" href="https://1barbers.com" />
      </Head>
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30">
          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-7xl font-bold text-primary mb-4 tracking-tight"
                >
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-3xl text-foreground/90 mb-8 leading-relaxed"
                >
                  Tekrardan Hoşgeldin,
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link href="/reservation">
                    <Button
                      size="lg"
                      className="text-lg group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 px-8"
                    >
                      Hemen Rezervasyon Yap
                      <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="relative h-[500px] w-full rounded-lg overflow-hidden"
              >
                <Image
                  src="/assets/images/gallery-images/4.jpg"
                  alt="1Barbers Dükkan"
                  className="object-cover"
                  priority
                  width={1000} 
                  height={1000}
                />
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="w-6 h-10 border-2 border-primary/20 rounded-full p-1">
              <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mx-auto" />
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow"
              >
                <Scissors className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Profesyonel Hizmet</h3>
                <p className="text-muted-foreground">En son trendler ve klasik kesim teknikleri</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow"
              >
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Hızlı Servis</h3>
                <p className="text-muted-foreground">Minimum bekleme süresi, maksimum memnuniyet</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow"
              >
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Kaliteli Hizmet</h3>
                <p className="text-muted-foreground">Uzman kadro ve steril ortam</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MMA Career Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">MMA Kariyeri</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                Profesyonel MMA dövüşçüsü olarak kariyerime odaklanıyorum. Spor tutkum ve disiplinli çalışma anlayışım, hem ringde hem de hayatın her alanında başarıya ulaşmamı sağlıyor.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src="/assets/images/barber-images/1.JPG"
                  alt="Cömert Paşa Sebebci - MMA Dövüşçüsü"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Profesyonel MMA Dövüşçüsü</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  Hayatımda aşık olduğum tek şey MMA. Bu spor beni ben yapan, karakterimi inşa eden, hayallerimi besleyen şey. Allah'ın izniyle bayrağımı en onurlu şekilde taşımak benim görevim, sorumluluğum ve ekmek kapım.
                </p>
                <p className="text-muted-foreground text-lg">
                  Aynı zamanda 1Barbers çatısı altında kendi berber dükkanımda çalışıyor, aileme destek olmaya devam ediyorum. Daha yolun çok başındayım, öğrenilecek çok şey var. Ama bu yoldayım ve pes etmeye hiç niyetim yok.
                </p>
                <p className="text-muted-foreground text-lg">
                  – Cömert Paşa Sebebci
                </p>
                <Link href="/about">
                  <Button className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                    Daha Fazla Bilgi
                    <MoveRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Hizmetlerimiz</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                Modern ve klasik kesim teknikleriyle, yüz hatlarınıza en uygun saç stilini buluyoruz.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="group rounded-lg bg-card p-6 transition-all hover:bg-card/80 border border-primary/10 shadow-lg hover:shadow-xl">
                  <h3 className="mb-4 text-2xl font-semibold">Saç & Sakal Kesimi</h3>
                  <p className="mb-4 text-muted-foreground">
                    Komple bakım paketi ile tamamen yenilenmiş bir görünüme kavuş.
                  </p>
                  <p className="text-lg font-semibold text-primary">1000 TL</p>
                  <Link href="/reservation">
                    <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                      Randevu Al
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Barbers Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Ustalarımız</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                Deneyimli ve uzman kadromuzla sizlere en iyi hizmeti sunuyoruz.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {BARBERS.map((barber, index) => (
                <motion.div
                  key={barber.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`group overflow-hidden rounded-lg bg-card transition-all hover:bg-card/80 border ${selectedBarber === barber.id.toString()
                      ? "border-primary shadow-xl"
                      : "border-primary/10 shadow-lg hover:shadow-xl"
                      }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedBarber(barber.id.toString())}
                  >
                    <div className="relative mb-4 h-80 w-full overflow-hidden">
                      <Image
                        src={barber.image}
                        alt={barber.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {selectedBarber === barber.id.toString() && (
                        <div className="absolute inset-0 bg-primary/10" />
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-2xl font-semibold">{barber.name}</h3>
                      <p className="text-muted-foreground flex items-center">
                        <Award className="h-4 w-4 mr-2 text-primary" />
                        {barber.experience} Yıl Deneyim
                      </p>
                      <Link href={`/reservation?barber=${barber.id}`}>
                        <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                          Randevu Al
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Galeri</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                Çalışmalarımızdan örnekler ve müşteri memnuniyeti.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {GALLERY_IMAGES.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary" className="bg-background/10 backdrop-blur-sm hover:bg-background/20">
                        Detayları Gör
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/gallery">
                <Button size="lg" className="text-lg group bg-primary hover:bg-primary/90 text-primary-foreground">
                  Tüm Galeriyi Gör
                  <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">İletişim</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                Bize ulaşın ve randevu alın.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">Adres</h3>
                <p className="text-muted-foreground">
                  Küçük Piyale, Fişekhane Deresi Cd. No:19, 34440 Beyoğlu/İstanbul
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                <p className="text-muted-foreground">+90 530 239 40 05 Sadece WhatsApp Üzerinden Ulaşınız</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">info@1barbers.com</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

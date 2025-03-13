import { Button } from "@/ui/button";
import { BARBERS, GALLERY_IMAGES } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, Scissors, Clock, Star, Award } from "lucide-react";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Arka plan deseni */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        </div>

        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/gallery-images/1.jpg"
            alt="1Barbers"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <AnimatedText
            text="1BARBERS"
            className="text-8xl font-bold text-white mb-6"
            delay={0.2}
          />
          <AnimatedText
            text="Tarzını Yeniden Keşfet"
            className="text-3xl text-white/90 mb-8"
            delay={0.4}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/reservation">
              <Button 
                size="lg" 
                className="text-lg group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
              >
                Hemen Rezervasyon Yap
                <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full mx-auto" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection className="text-center p-6 rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow">
              <Scissors className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Profesyonel Hizmet</h3>
              <p className="text-muted-foreground">En son trendler ve klasik kesim teknikleri</p>
            </AnimatedSection>
            <AnimatedSection className="text-center p-6 rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow" delay={0.2}>
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hızlı Servis</h3>
              <p className="text-muted-foreground">Minimum bekleme süresi, maksimum memnuniyet</p>
            </AnimatedSection>
            <AnimatedSection className="text-center p-6 rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow" delay={0.4}>
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Kaliteli Hizmet</h3>
              <p className="text-muted-foreground">Uzman kadro ve steril ortam</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Hizmetlerimiz</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Modern ve klasik kesim teknikleriyle, yüz hatlarınıza en uygun saç stilini buluyoruz.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection>
              <div className="group rounded-lg bg-card p-6 transition-all hover:bg-card/80 border border-primary/10 shadow-lg hover:shadow-xl">
                <h3 className="mb-4 text-2xl font-semibold">Saç Kesimi</h3>
                <p className="mb-4 text-muted-foreground">
                  Modern ve klasik kesim teknikleriyle, yüz hatlarınıza en uygun saç stilini buluyoruz.
                </p>
                <p className="text-lg font-semibold text-primary">150 TL</p>
                <Link href="/reservation">
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                    Randevu Al
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="group rounded-lg bg-card p-6 transition-all hover:bg-card/80 border border-primary/10 shadow-lg hover:shadow-xl">
                <h3 className="mb-4 text-2xl font-semibold">Sakal Kesimi</h3>
                <p className="mb-4 text-muted-foreground">
                  Profesyonel sakal şekillendirme ve bakım hizmetiyle kendine güvenini artır.
                </p>
                <p className="text-lg font-semibold text-primary">100 TL</p>
                <Link href="/reservation">
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                    Randevu Al
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="group rounded-lg bg-card p-6 transition-all hover:bg-card/80 border border-primary/10 shadow-lg hover:shadow-xl">
                <h3 className="mb-4 text-2xl font-semibold">Saç & Sakal Kombo</h3>
                <p className="mb-4 text-muted-foreground">
                  Komple bakım paketi ile tamamen yenilenmiş bir görünüme kavuş.
                </p>
                <p className="text-lg font-semibold text-primary">200 TL</p>
                <Link href="/reservation">
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                    Randevu Al
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Barbers Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ustalarımız</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Deneyimli ve uzman kadromuzla sizlere en iyi hizmeti sunuyoruz.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BARBERS.map((barber, index) => (
              <AnimatedSection key={barber.id} delay={index * 0.2}>
                <div className="group overflow-hidden rounded-lg bg-card transition-all hover:bg-card/80 border border-primary/10 shadow-lg hover:shadow-xl">
                  <div className="relative mb-4 h-80 w-full overflow-hidden">
                    <Image
                      src={barber.image}
                      alt={barber.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-2xl font-semibold">{barber.name}</h3>
                    <p className="text-muted-foreground flex items-center">
                      <Award className="h-4 w-4 mr-2 text-primary" />
                      {barber.experience} Yıl Deneyim
                    </p>
                    <Link href="/reservation">
                      <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                        Randevu Al
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Galeri</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Çalışmalarımızdan örnekler ve müşteri memnuniyeti.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {GALLERY_IMAGES.map((image, index) => (
              <AnimatedSection key={image.id} delay={index * 0.1}>
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
              </AnimatedSection>
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">İletişim</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bize ulaşın ve randevu alın.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <AnimatedSection className="text-center p-6 rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Adres</h3>
              <p className="text-muted-foreground">
                Örnek Mahallesi, Örnek Sokak No:1, İstanbul
              </p>
            </AnimatedSection>
            <AnimatedSection className="text-center p-6 rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow" delay={0.2}>
              <h3 className="text-xl font-semibold mb-2">Telefon</h3>
              <p className="text-muted-foreground">+90 555 555 55 55</p>
            </AnimatedSection>
            <AnimatedSection className="text-center p-6 rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow" delay={0.4}>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@1barbers.com</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}

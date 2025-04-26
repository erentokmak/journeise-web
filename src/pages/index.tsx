import { Button } from "@/ui/button";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { MoveRight, Globe, Clock, Star, Award, Trophy, Plane, Building, FileText, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { Card, CardContent } from "@/ui/card";

export default function Home() {
  const { data: session } = useSession();

  // Günün saatine göre selamlama mesajı oluştur
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return 'Günaydın';
    } else if (hour >= 12 && hour < 18) {
      return 'İyi günler';
    } else {
      return 'İyi akşamlar';
    }
  };

  const FEATURES = [
    {
      title: "Profesyonel Danışmanlık",
      description: "Uzman kadromuz ile vize başvurunuzu güvenle yapın",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Hızlı Başvuru",
      description: "Vize başvurunuzu hızlı ve kolay bir şekilde yapın",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "7/24 Destek",
      description: "Vize süreciniz boyunca yanınızdayız",
      icon: Clock,
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const SERVICES = [
    {
      title: "Schengen Vizesi",
      description: "Avrupa'nın 26 ülkesine serbestçe seyahat edin",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop"
    },
    {
      title: "Amerika Vizesi",
      description: "B1/B2 vizesi ile Amerika'da hayallerinizi gerçekleştirin",
      icon: Building,
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "İngiltere Vizesi",
      description: "İngiltere'de eğitim ve iş fırsatlarını değerlendirin",
      icon: Plane,
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Diğer Vizeler",
      description: "Tüm dünya ülkelerine vize başvurusu yapıyoruz",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <Head>
        <title>Journeise | Profesyonel Vize Danışmanlığı</title>
        <meta name="description" content="Journeise ile profesyonel vize danışmanlığı hizmetleri alın. Uzman kadromuz ile vize başvurunuzu güvenle yapın." />
        <meta name="keywords" content="vize, vize danışmanlığı, schengen vizesi, amerika vizesi, ingiltere vizesi, vize başvurusu" />
        <meta property="og:title" content="Journeise | Profesyonel Vize Danışmanlığı" />
        <meta property="og:description" content="Journeise ile profesyonel vize danışmanlığı hizmetleri alın. Uzman kadromuz ile vize başvurunuzu güvenle yapın." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://journeise.com" />
        <meta property="og:image" content="https://journeise.com/assets/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Journeise | Profesyonel Vize Danışmanlığı" />
        <meta name="twitter:description" content="Journeise ile profesyonel vize danışmanlığı hizmetleri alın. Uzman kadromuz ile vize başvurunuzu güvenle yapın." />
        <meta name="twitter:image" content="https://journeise.com/assets/images/og-image.jpg" />
        <link rel="canonical" href="https://journeise.com" />
      </Head>
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* <Image
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            /> */}
            <div className="absolute inset-0 bg-white dark:bg-background" />
          </div>
          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold text-primary tracking-tight"
                >
                  {session?.user ? (
                    <>
                      {getGreeting()}, {session.user.name}
                    </>
                  ) : (
                    <></>
                  )}
                </motion.h1>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-3xl text-foreground/90 mb-8 leading-relaxed"
                >
                  {session?.user ? (
                    'Hayalinizdeki Ülkeye Yolculuk Başlıyor'
                  ) : (
                    'Hayalinizdeki Ülkeye Yolculuk Başlıyor'
                  )}
                </motion.h3>
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
                      Hemen Başvuru Yap
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
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                  alt="Journeise Vize Danışmanlığı"
                  className="object-cover"
                  priority
                  fill
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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {FEATURES.map((feature, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <feature.icon className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Destinations Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Popüler Destinasyonlar</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                En çok tercih edilen ülkelere vize başvurusu yapıyoruz. Uzman kadromuz ile başvurunuzu güvenle yapın.
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
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop"
                  alt="Popüler Destinasyonlar"
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
                  <Plane className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Schengen Vizesi</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  Avrupa'nın kapılarını aralayın. Schengen vizesi ile 26 Avrupa ülkesine serbestçe seyahat edin.
                </p>
                <div className="flex items-center gap-2">
                  <Building className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Amerika Vizesi</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  Amerika'da hayallerinizi gerçekleştirin. B1/B2 vizesi ile turistik ve iş seyahatleri yapın.
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
        <section className="py-20 bg-background">
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
                Tüm vize türleri için profesyonel danışmanlık ve başvuru hizmetleri sunuyoruz.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((service, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <service.icon className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

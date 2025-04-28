import { Button } from "@/ui/button";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { MoveRight, Globe, Clock, Star, Award, Trophy, Plane, Building, FileText, Shield, Zap, Check, Truck, Users, FileCheck, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { Card, CardContent } from "@/ui/card";
import { Input } from "@/ui/input";
import { COUNTRIES } from "@/constants/countries";
import { useRouter } from "next/router";

// Animasyonlu gradient için CSS
const gradientAnimation = `
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
  
  @keyframes gradientAnimationReverse {
    0% {
      background-position: 100% 100%;
    }
    50% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
  }
  
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradientAnimation 15s ease infinite;
  }
  
  .animate-gradient-reverse {
    background-size: 200% 200%;
    animation: gradientAnimationReverse 20s ease infinite;
  }
  
  @keyframes float {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(10px, -10px) rotate(5deg);
    }
    50% {
      transform: translate(0, -20px) rotate(0deg);
    }
    75% {
      transform: translate(-10px, -10px) rotate(-5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.6;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 0.6;
    }
  }
  
  @keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
  }
`;

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof COUNTRIES>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

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

  // Arama sonuçlarını filtrele
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = COUNTRIES.filter(country =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchQuery]);

  // Dışarı tıklandığında sonuçları gizle
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/countries?search=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push('/countries');
    }
  };

  const handleCountryClick = (countryName: string) => {
    const slug = countryName.toLowerCase().replace(/\s+/g, '-');
    router.push(`/countries/${slug}`);
    setShowResults(false);
    setSearchQuery('');
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

  const COUNTRY_INFO = [
    {
      name: "Türkiye",
      description: "Türkiye'nin önemli özellikleri ve detayları",
      details: ["Türkiye'nin başkentini Ankara'dır", "Türkiye'nin en büyük şehri İstanbul'dur", "Türkiye'nin en büyük deniz kıyısı Marmara Denizi'dir"]
    },
    {
      name: "Almanya",
      description: "Almanya'nın önemli özellikleri ve detayları",
      details: ["Almanya'nın başkentini Berlin'dir", "Almanya'nın en büyük şehri Münih'dir", "Almanya'nın en büyük deniz kıyısı Büyük Britanya Denizi'dir"]
    },
    {
      name: "İtalya",
      description: "İtalya'nın önemli özellikleri ve detayları",
      details: ["İtalya'nın başkentini Roma'dır", "İtalya'nın en büyük şehri Milano'dur", "İtalya'nın en büyük deniz kıyısı Tırmızı Denizi'dir"]
    }
  ];

  // Popüler ülkeler
  const POPULAR_COUNTRIES = COUNTRIES.slice(0, 6);

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
        <style>{gradientAnimation}</style>
      </Head>
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero Section with Search */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Hareketli, blur'lu daireler */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <motion.div
              className="absolute top-[-15%] left-[-15%] w-[600px] h-[600px] rounded-[60%_40%_30%_70%] bg-[#b8c0ff] opacity-70 blur-3xl"
              animate={{
                x: [0, 100, 50, 0],
                y: [0, 50, 100, 0],
                scale: [1, 1.2, 1.1, 1],
                borderRadius: [
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "30% 60% 70% 40% / 50% 60% 30% 60%",
                  "40% 50% 60% 30% / 40% 50% 60% 30%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%"
                ]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.3, 0.6, 1]
              }}
            />
            <motion.div
              className="absolute top-[10%] right-[-10%] w-[550px] h-[550px] rounded-[40%_60%_70%_30%] bg-[#f7d1ba] opacity-70 blur-3xl"
              animate={{
                x: [0, -80, -40, 0],
                y: [0, -60, -100, 0],
                scale: [1, 1.15, 1.05, 1],
                borderRadius: [
                  "40% 60% 70% 30% / 40% 50% 60% 30%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "30% 60% 70% 40% / 50% 60% 30% 60%",
                  "40% 60% 70% 30% / 40% 50% 60% 30%"
                ]
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.3, 0.6, 1]
              }}
            />
            <motion.div
              className="absolute bottom-[-15%] left-[10%] w-[500px] h-[500px] rounded-[50%_50%_40%_60%] bg-[#e7c6ff] opacity-70 blur-3xl"
              animate={{
                x: [0, 60, 30, 0],
                y: [0, -80, -40, 0],
                scale: [1, 1.1, 1.2, 1],
                borderRadius: [
                  "50% 50% 40% 60% / 50% 40% 60% 50%",
                  "40% 60% 70% 30% / 40% 50% 60% 30%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "50% 50% 40% 60% / 50% 40% 60% 50%"
                ]
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.3, 0.6, 1]
              }}
            />
            <motion.div
              className="absolute bottom-[-10%] right-[5%] w-[550px] h-[550px] rounded-[30%_70%_50%_50%] bg-[#c8ffd4] opacity-60 blur-3xl"
              animate={{
                x: [0, -70, -30, 0],
                y: [0, 60, 90, 0],
                scale: [1, 1.15, 1.05, 1],
                borderRadius: [
                  "30% 70% 50% 50% / 30% 50% 50% 70%",
                  "50% 50% 40% 60% / 50% 40% 60% 50%",
                  "40% 60% 70% 30% / 40% 50% 60% 30%",
                  "30% 70% 50% 50% / 30% 50% 50% 70%"
                ]
              }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.3, 0.6, 1]
              }}
            />
            <motion.div
              className="absolute top-[40%] left-[30%] w-[450px] h-[450px] rounded-[70%_30%_50%_50%] bg-[#a8d8ff] opacity-60 blur-3xl"
              animate={{
                x: [0, 40, -20, 0],
                y: [0, -50, 30, 0],
                scale: [1, 1.1, 1.05, 1],
                borderRadius: [
                  "70% 30% 50% 50% / 70% 50% 50% 30%",
                  "50% 50% 40% 60% / 50% 40% 60% 50%",
                  "30% 70% 50% 50% / 30% 50% 50% 70%",
                  "70% 30% 50% 50% / 70% 50% 50% 30%"
                ]
              }}
              transition={{
                duration: 27,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.3, 0.6, 1]
              }}
            />
          </div>
          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4"
              >
                {session?.user ? (
                  <>
                    {getGreeting()}, {session.user.name}
                  </>
                ) : (
                  'Hayalinizdeki Ülkeye Yolculuk Başlıyor'
                )}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-foreground/90 mb-8 leading-relaxed"
              >
                Nereye gitmek istiyorsunuz? Size en uygun destinasyonu seçin ve vize başvurunuzu hemen yapın.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="max-w-2xl mx-auto"
              >
                <form onSubmit={handleSearch} className="relative">
                  <div className="relative" ref={searchRef}>
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Ülke ara..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 py-6 text-lg h-auto rounded-full shadow-lg bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary/50"
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                    >
                      Ara
                    </Button>

                    {/* Arama Sonuçları */}
                    {showResults && searchResults.length > 0 && (
                      <div className="absolute z-50 w-full mt-2 bg-background/95 backdrop-blur-sm border border-primary/20 rounded-lg shadow-xl max-h-80 overflow-y-auto">
                        {searchResults.map((country, index) => (
                          <div
                            key={index}
                            className="p-3 hover:bg-muted cursor-pointer flex items-center gap-3 border-b border-primary/10 last:border-0"
                            onClick={() => handleCountryClick(country.name)}
                          >
                            <div className="relative h-10 w-10 rounded-md overflow-hidden flex-shrink-0">
                              <Image
                                src={country.imageUrl}
                                alt={country.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="text-left">
                              <h3 className="font-medium text-foreground">{country.name}</h3>
                              <p className="text-sm text-muted-foreground line-clamp-1">{country.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8"
              >
                <Link href="/countries">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg group bg-background/80 backdrop-blur-sm hover:bg-background/90 text-foreground shadow-lg px-8"
                  >
                    Tüm Ülkeleri Keşfet
                    <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </div>
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
            <div className="w-6 h-10 border-2 border-primary/20 rounded-full p-1">
              <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mx-auto" />
            </div>
          </motion.div>
        </section>

        {/* Recommendations Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Karar Veremediyseniz Önerilerimiz</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed mb-8">
                Popüler destinasyonlarımızı keşfedin ve size en uygun ülkeyi seçin.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {POPULAR_COUNTRIES.map((country, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/countries/${country.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="relative group rounded-3xl overflow-hidden h-80 cursor-pointer transition-transform hover:scale-[1.02]">
                      <Image
                        src={country.imageUrl}
                        alt={country.name}
                        fill
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      {/* İçerik */}
                      <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-start z-10">
                        <div className="flex items-center mb-2">
                          <h3 className="text-2xl font-semibold text-white drop-shadow-2xl" style={{ textShadow: '0 4px 24px rgba(0,0,0,0.95), 0 1.5px 0 rgb(0, 0, 0)' }}>{country.name}</h3>
                        </div>
                        <p className="text-white/90 text-base mb-3 line-clamp-2 drop-shadow-2xl" style={{ textShadow: '0 4px 24px rgba(0,0,0,0.95), 0 1.5px 0 rgba(0,0,0,0.7)' }}>{country.description}</p>
                        <span className="text-sm font-medium text-primary-foreground bg-primary/80 rounded-full px-4 py-1 mt-2 shadow-lg">Detaylı Bilgiler</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Where do you want to go? Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Nereye Gitmek İstiyorsun?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed mb-8">
                Hayalinizdeki ülkeye giden yolda size yardımcı olmak için buradayız.
              </p>
              <Link href="/countries">
                <Button size="lg" variant="outline" className="group">
                  Tüm Ülkeleri Keşfet
                  <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {COUNTRY_INFO.slice(0, 3).map((country, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{country.name}</h3>
                    <p className="text-muted-foreground mb-4">{country.description}</p>
                    <ul className="space-y-2">
                      {country.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Visa Consultancy Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Neden Vize Danışmanlık Hizmeti Almalısınız?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                İstanbul'da bulunan ofisimizde tüm vize işlemleriniz için bilgi alabileceğiniz uzman kadromuzla ziyaretinizi bekliyoruz.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Evraklarınızı Ücretsiz Alıyoruz</h3>
                  </div>
                  <p className="text-muted-foreground">
                    İstanbul'da ikamet ediyorsanız evraklarınızı moto kurye ile ücretsiz teslim alıyoruz.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Konsolosluk Kuyruğunda Beklemeyin</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Sizin adınıza tüm prosedürlerle biz ilgileniyoruz. Siz sadece hayallerinize yaklaşmanın mutluluğunu yaşayın.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Uzman Ekibimiz Hizmetinizde</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Uzman ekibimiz tüm koşullarda yanınızda ve işlemleri sizin adınıza yürütüyor.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Tüm Ülkelere Vize Alıyoruz</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Gitmek istediğiniz tüm ülkeler için size yardımcı olmak için buradayız.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <FileCheck className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Az Evrak, Yüksek Başarı</h3>
                  </div>
                  <p className="text-muted-foreground">
                    En az evrakla en doğru başvuruyu yapmanızı sağlıyoruz.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Güvenilir Hizmet</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Lütfen unutmayın ki vize başvurusu önemli bir işlemdir ve başvurunuzu riske atmak yerine bu konuda uzman olan deneyimli ekibimize güvenebilirsiniz.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
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

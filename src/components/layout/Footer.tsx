import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card";
import { Button } from "@/ui/button";

// Animasyon varyantları
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export function Footer() {
  return (
    <motion.footer 
      className="border-t bg-background relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Arka plan deseni */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo ve Açıklama */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="relative">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                1BARBERS
              </h3>
              <div className="absolute -bottom-2 left-0 h-1 w-16 bg-primary rounded-full" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Profesyonel berberlik hizmetleri için doğru adres. Modern ve klasik kesim teknikleriyle, yüz hatlarınıza en uygun saç stilini buluyoruz.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Youtube, href: "https://youtube.com", label: "YouTube" }
              ].map((social, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <Link 
                      href={social.href} 
                      target="_blank" 
                      className="group relative p-2 rounded-full bg-muted/50 hover:bg-primary/10 transition-all duration-300"
                    >
                      <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {social.label}
                      </span>
                    </Link>
                  </HoverCardTrigger>
                </HoverCard>
              ))}
            </div>
          </motion.div>

          {/* Hızlı Bağlantılar */}
          <motion.div
            variants={itemVariants}
          >
            <h4 className="mb-6 text-lg font-semibold relative inline-block">
              Hızlı Bağlantılar
              <div className="absolute -bottom-2 left-0 h-0.5 w-full bg-primary/20 rounded-full" />
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/reservation", label: "Rezervasyon" },
                { href: "/services", label: "Hizmetler" },
                { href: "/barbers", label: "Berberler" },
                { href: "/gallery", label: "Galeri" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    href={link.href} 
                    className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* İletişim */}
          <motion.div
            variants={itemVariants}
          >
            <h4 className="mb-6 text-lg font-semibold relative inline-block">
              İletişim
              <div className="absolute -bottom-2 left-0 h-0.5 w-full bg-primary/20 rounded-full" />
            </h4>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: "Örnek Mahallesi, Örnek Sokak No:1, İstanbul" },
                { icon: Phone, text: "+90 555 555 55 55" },
                { icon: Mail, text: "info@1barbers.com" }
              ].map((contact, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <contact.icon className="mt-1 h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    {contact.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Çalışma Saatleri */}
          <motion.div
            variants={itemVariants}
          >
            <h4 className="mb-6 text-lg font-semibold relative inline-block">
              Çalışma Saatleri
              <div className="absolute -bottom-2 left-0 h-0.5 w-full bg-primary/20 rounded-full" />
            </h4>
            <ul className="space-y-4">
              {[
                { day: "Hafta İçi", hours: "10:00 - 22:00" },
                { day: "Cumartesi", hours: "10:00 - 22:00" },
                { day: "Pazar", hours: "Kapalı" }
              ].map((schedule, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Clock className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm font-medium group-hover:text-primary transition-colors">{schedule.day}</p>
                    <p className="text-sm text-muted-foreground">{schedule.hours}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Alt Bilgi */}
        <motion.div 
          className="mt-16 border-t pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} 1Barbers. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="/privacy" 
                className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Gizlilik Politikası
                <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link 
                href="/terms" 
                className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Kullanım Koşulları
                <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
} 
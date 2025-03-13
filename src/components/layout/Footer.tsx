import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo ve Açıklama */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">1BARBERS</h3>
            <p className="text-sm text-muted-foreground">
              Profesyonel berberlik hizmetleri için doğru adres. Modern ve klasik kesim teknikleriyle, yüz hatlarınıza en uygun saç stilini buluyoruz.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://youtube.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Hızlı Bağlantılar */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Rezervasyon
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/barbers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Berberler
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Galeri
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Örnek Mahallesi, Örnek Sokak No:1, İstanbul
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">+90 555 555 55 55</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">info@1barbers.com</span>
              </li>
            </ul>
          </div>

          {/* Çalışma Saatleri */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Çalışma Saatleri</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Hafta İçi</p>
                  <p className="text-sm text-muted-foreground">10:00 - 22:00</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Cumartesi</p>
                  <p className="text-sm text-muted-foreground">10:00 - 22:00</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Pazar</p>
                  <p className="text-sm text-muted-foreground">Kapalı</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} 1Barbers. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
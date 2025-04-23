import Link from "next/link";
import { Button } from "@/ui/button";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            1BARBERS
          </Link>

          <nav className="hidden space-x-6 md:flex">
            <Link href="/" className="text-foreground/80 hover:text-foreground">
              Ana Sayfa
            </Link>
            <Link href="/gallery" className="text-foreground/80 hover:text-foreground">
              Galeri
            </Link>
            <Link href="/reservation" className="text-foreground/80 hover:text-foreground">
              Rezervasyon
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-foreground">
              Hakkımızda
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Link href="/auth/sign-in">
              <Button>Giriş Yap</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 
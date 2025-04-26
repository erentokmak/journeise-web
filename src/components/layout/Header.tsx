import Link from "next/link";
import Image from "next/image";
import { Button } from "@/ui/button";
import { ModeToggle } from "./mode-toggle";
import { useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/ui/avatar";
import { signOut } from "next-auth/react";
import { LogOut, User, Home, Calendar, Settings } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const { data: session } = useSession();
  const { theme } = useTheme();

  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: "/" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="relative h-10 w-40">
            <Image
              src={theme === "dark" ? "/assets/images/brand-images/journeise-white.png" : "/assets/images/brand-images/journeise-black.png"}
              alt="Journeise"
              fill
              className="object-contain"
              priority
            />
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

            {session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-9 w-9 cursor-pointer bg-primary text-primary-foreground justify-center items-center">
                      <User className="h-5 w-5 " />
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{session.user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">{session.user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="#" className="flex w-full cursor-pointer items-center">
                      <Home className="mr-2 h-4 w-4" />
                      <span>Ana Sayfa</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="#" className="flex w-full cursor-pointer items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>Hesabım</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="#" className="flex w-full cursor-pointer items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Randevularım</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="#" className="flex w-full cursor-pointer items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Ayarlar</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-red-500 focus:text-red-500">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Çıkış Yap</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/auth/sign-in">
                <Button>Giriş Yap</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 
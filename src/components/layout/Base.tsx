import React from 'react'
import { ThemeProvider } from './theme-provider'
import Link from 'next/link'
import Header from './Header'

interface BaseProps {
  children: React.ReactNode
}

const Base: React.FC<BaseProps> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="pt-16">{children}</div>
        <footer className="border-t py-8 mt-auto">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4 space-y-2">
              <p className="text-lg">Çalışma Saatleri</p>
              <p>Hafta İçi: 10:00 - 22:00</p>
              <p>Cumartesi: 10:00 - 22:00</p>
              <p>Pazar: Kapalı</p>
            </div>
            <div className="mb-4">
              <p className="text-lg">İletişim</p>
              <p>+90 555 555 55 55</p>
              <p>info@1barbers.com</p>
            </div>
            <div className="text-sm text-muted-foreground">
              <Link href="https://quickesta.com" target="_blank" className="hover:text-primary transition-colors">
                This website made by Quickesta
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default Base

import React from 'react'
import { ThemeProvider } from './theme-provider'
import Header from './Header'
import { Footer } from './Footer'

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
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Base

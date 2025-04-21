'use client'

import Head from 'next/head'
import Link from 'next/link'
import { Button } from '@/ui/button'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Sayfa Bulunamadı | 1Barbers</title>
        <meta name="description" content="Aradığınız sayfa bulunamadı. 1Barbers ana sayfasına dönün." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://1barbers.com/404" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Sayfa Bulunamadı</h1>
        <p className="text-muted-foreground mb-8">Aradığınız sayfa bulunamadı veya taşınmış olabilir.</p>
        <Button asChild>
          <Link href="/">Ana Sayfaya Dön</Link>
        </Button>
      </div>
    </>
  )
}

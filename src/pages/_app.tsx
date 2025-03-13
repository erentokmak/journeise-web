import '@/styles/globals.css'
import { Base } from '@/components/layout'
import { Toaster } from '@/ui/toaster'

// Types
type AppProps = {
  Component: React.ComponentType<any>
  pageProps: any
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Base>
      <Component {...pageProps} />
      <Toaster />
    </Base>
  )
}

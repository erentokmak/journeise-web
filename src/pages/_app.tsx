import '@/styles/globals.css'
import { Base } from '@/components/layout'
import { Toaster } from '@/ui/toaster'
import { ApolloProvider } from '@apollo/client'
import client from '@/lib/apollo-client'

// Types
type AppProps = {
  Component: React.ComponentType<any>
  pageProps: any
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Base>
        <Component {...pageProps} />
        <Toaster />
      </Base>
    </ApolloProvider>
  )
}

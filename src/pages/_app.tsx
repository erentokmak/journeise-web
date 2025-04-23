import '@/styles/globals.css'
import { Base, Main } from '@/components/layout'
import { Toaster } from '@/ui/toaster'
import { ApolloProvider } from '@apollo/client'
import client from '@/lib/apollo-client'
import { useRouter } from 'next/router'
import { SessionProvider, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { ThemeProvider } from 'next-themes'

// Types
type AppProps = {
  Component: React.ComponentType<any>
  pageProps: any
}

// Constants
const PUBLIC_PATHS = [
  '/auth/sign-in',
  '/auth/forgot-password',
  '/auth/sign-up',
] as const

// App Content Component
function AppContent({ Component, pageProps }: AppProps) {
  const { data: session, status } = useSession()
  const router = useRouter()

  const isPublicPath = PUBLIC_PATHS.includes(
    router?.pathname as (typeof PUBLIC_PATHS)[number],
  )
  const isAddAccountMode = router?.query?.mode === 'add'

  // Auth redirect effect
  useEffect(() => {
    if (status === 'loading') return


    // Allow access to sign-in page in add account mode even when logged in
    if (isAddAccountMode && router?.pathname === '/auth/sign-in') {
      return
    }

    // Normal auth flow
    if (session?.user && isPublicPath && !isAddAccountMode) {
      router?.push('/')
      return
    }

    // Only redirect to sign-in if there are no accounts
    if (!session?.user && !isPublicPath) {
      router?.push('/auth/sign-in')
    }
  }, [session, status, router, isPublicPath, isAddAccountMode])

  if (status === 'loading') return null

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <ApolloProvider client={client}>
        {session ? (
          <Base>
            <Main>
              <Component {...pageProps} />
            </Main>
          </Base>
        ) : (
          <Component {...pageProps} />
        )}
        <Toaster />
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Base>
        <SessionProvider session={pageProps.session}>
          <AppContent Component={Component} pageProps={pageProps} />
        </SessionProvider>
        <Toaster />
      </Base>
    </ApolloProvider>
  )
}

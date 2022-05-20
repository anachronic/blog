import type { AppProps } from 'next/app'
import { HelmetProvider } from 'react-helmet-async'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <Component {...pageProps} />
    </HelmetProvider>
  )
}

export default MyApp

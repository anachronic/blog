import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HelmetProvider } from 'react-helmet-async'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <Component {...pageProps} />
    </HelmetProvider>
  )
}

export default MyApp

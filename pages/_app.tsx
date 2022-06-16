import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import MobileMenu from '../components/Menu'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <div className='bg-gradient-to-b from-[#141E30] to-secondary'>
       <Header/>
       <MobileMenu/>
       <Component {...pageProps} />
    </div>
  )
}

export default MyApp

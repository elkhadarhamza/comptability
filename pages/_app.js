import '../styles/globals.css'
import { AppContextProvider } from './components/AppContext'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

import { AppProps } from 'next/app'
import '../styles/global.css'

const App = ({
  Component,
  pageProps
}: AppProps) => {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

export default App
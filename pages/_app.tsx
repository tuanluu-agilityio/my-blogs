import { AppProps } from 'next/app'
import { ReactNode } from 'react';
import { NextPage } from "next";
import '../styles/global.css'

// Fix error getLayout: https://dev.to/ofilipowicz/next-js-per-page-layouts-and-typescript-lh5
type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

const App = ({
  Component,
  pageProps
}: Props) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)
  return getLayout(<Component {...pageProps} />)
}

export default App
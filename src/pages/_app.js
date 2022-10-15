import '../styles/globals.css'
import Head from 'next/head'
import { wrapper, store } from '../store/store'
import { Provider } from 'react-redux'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
          />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default wrapper.withRedux(MyApp)

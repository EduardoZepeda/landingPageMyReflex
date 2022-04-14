import '../styles.css'
import Layout from '../components/Layout'
import FacebookPixel from '../components/FacebookPixel'
import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'

function App ({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel='preconnect' href='https://connect.facebook.net' crossorigin />
        <link rel='dns-prefetch' href='https://connect.facebook.net' />
      </Head>
      <FacebookPixel />
      <Component {...pageProps} />
    </Layout>
  )
}
export default App

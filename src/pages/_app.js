import 'normalize.css/normalize.css'
import '../styles/index.css'

export const reportWebVitals = metric => {
  console.log(metric)
}

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

export default MyApp

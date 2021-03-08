import 'normalize.css/normalize.css'
import { appWithTranslation } from 'next-i18next'
import '../styles/index.css'

// export const reportWebVitals = metric => {
//   console.log(metric)
// }

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

export default appWithTranslation(MyApp)

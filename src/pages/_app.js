import 'normalize.css/normalize.css'
import { Provider } from 'next-auth/client'
import '../styles/index.css'
import config from '../config'

const { analytics } = config

export const reportWebVitals = ({ name, value, id }) => {
  if (analytics.enabled && !!window.dataLayer) {
    window.dataLayer.push({
      event: 'Vital Reported',
      'vital.name': name,
      'vital.value': value,
      'vital.id': id,
    })
  }
}

console.log(
  `Hi there! Since you appear to be interested in the code of this website, why don't you go ahead and check out https://github.com/janpaul/elidon-website ? That saves you some time ;-)`
)

const MyApp = ({ Component, pageProps }) => (
  <Provider session={pageProps.session}>
    <Component {...pageProps} />
  </Provider>
)

export default MyApp

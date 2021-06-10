import 'normalize.css/normalize.css'
import 'animate.css/animate.css'
import '../styles/index.css'
import Config from '../config.ts'

const { analytics } = Config

export const reportWebVitals = metric => {
  if (analytics.enabled && !!window.dataLayer) {
    window.dataLayer.push({
      event: 'Vital Reported',
      'vital.name': metric.name,
      'vital.value': metric.value,
      'vital.id': metric.id,
    })
  }
}

console.log(
  `Hi there! Since you appear to be interested in the code of this website, why don't you go ahead and check out https://github.com/janpaul/elidon-website ? That saves you some time ;-)`
)

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

export default MyApp

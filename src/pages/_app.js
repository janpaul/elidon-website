import 'normalize.css/normalize.css'
import 'animate.css/animate.css'
import '../styles/index.css'
import Config from '../config.json'

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

let baseStyles = [
  'color: #bf616a',
  'background-color: #2e3440',
  'padding: 1rem 4px',
  'border-radius: 2px',
  'font-size: 18px',
].join(';')

console.log(
  `%cHi there! Since you appear to be interested in the code of this website, why don't you go ahead and check out https://github.com/janpaul/elidon-website ? That saves you some time ;-)`,
  baseStyles
)

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

export default MyApp

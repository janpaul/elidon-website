import React from 'react'
import { Layout, Avatar } from '../components'
import {
  TwitterIcon,
  GithubIcon,
  HeyIcon,
  SignalIcon,
  RedditIcon,
  InstagramIcon,
  WhatsappIcon,
} from '../components/icons'
import contact from '../contact'
import config from '../config'
import styles from '../styles/home.module.css'
import { whatsappLink, signalLink, emailLink } from '../lib/social'

const {
  features: { prefersSignal },
} = config
const {
  social: { twitter, github, instagram, reddit },
} = contact
const iconSize = 48

const Home = () => {
  const socialApps = [
    <a href={signalLink()} key="signal">
      <SignalIcon width={iconSize} height={iconSize} className={styles.icon} />
    </a>,
    <a href={whatsappLink()} key="whatsapp">
      <WhatsappIcon width={iconSize} height={iconSize} className={styles.icon} />
    </a>,
  ]
  return (
    <Layout url="https://elidon.net/" title="janpaul.home()">
      <section className="content centered">
        <code>janpaul.home()</code>
        <h3 className="title">
          Hi! My name is <em title={`Given name: "Jan Paul", last name: "Stegeman".`}>Jan Paul</em> and I&apos;m a{' '}
          <em title={`Mostly because I'm always working on new things to do.`}>creative</em>,{' '}
          <em title={`One can read this as "smart-ass".`}>smart</em> and{' '}
          <em title={`Some people call this ADHD but I don't.`}>hyperactive</em> guy who writes{' '}
          <em title={`Yes. Well. Almost always bug free ;-)`}>amazing</em> software.
        </h3>
        <div className={styles.social}>
          {prefersSignal ? socialApps : socialApps.reverse()}
          <a href={`https://github.com/${github}`} target="_blank" rel="noreferrer noopener">
            <GithubIcon width={iconSize} height={iconSize} className={styles.icon} />
          </a>
          <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noreferrer noopener">
            <TwitterIcon width={iconSize} height={iconSize} className={styles.icon} />
          </a>
          <a href={emailLink()}>
            <HeyIcon width={iconSize} height={iconSize} className={styles.icon} />
          </a>
          <a href={`https://reddit.com/u/${reddit}`} target="_blank" rel="noreferrer noopener">
            <RedditIcon width={iconSize} height={iconSize} className={styles.icon} />
          </a>
          <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noreferrer noopener">
            <InstagramIcon width={iconSize} height={iconSize} className={styles.icon} />
          </a>
        </div>
        <small className={styles.disclaimer}>There are many ways to reach me. But please don&apos;t call me.</small>
        <div>
          <Avatar />
        </div>
      </section>
    </Layout>
  )
}

export default Home

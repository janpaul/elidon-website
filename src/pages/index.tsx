import React, { useEffect } from 'react'
import { Layout, MetaHeader, Avatar } from '../components'
import {
  TwitterIcon,
  GithubIcon,
  HeyIcon,
  SignalIcon,
  RedditIcon,
  InstagramIcon,
  WhatsappIcon,
} from '../components/icons'
import Contact from '../contact'
import styles from '../styles/home.module.css'

const {
  phone,
  email,
  social: { twitter, github, instagram, reddit },
} = Contact
const size = 48
const Home = () => {
  useEffect(() => {
    const _touch = async () => {
      const response = await fetch('/api/touch')
      return await response.json()
    }
    _touch()
      .then(data => console.log({ data })) // don't do anything (yet) with this data
      .catch(() => {}) // totally ignore when failed
  }, [])
  return (
    <Layout>
      <MetaHeader url="https://elidon.net/" title="janpaul.home()" />
      <section className="content centered">
        <code>janpaul.home();</code>
        <h3 className="title">
          Hi! My name is <em title={`Given name: "Jan Paul", last name: "Stegeman".`}>Jan Paul</em> and I&apos;m a{' '}
          <em title={`Mostly because I'm always working on new things to do.`}>creative</em>,{' '}
          <em title={`One can read this is "smart-ass".`}>smart</em> and{' '}
          <em title={`Some people call this ADHD but I don't.`}>hyperactive</em> guy who writes{' '}
          <em title={`Yes. Well. Almost always bug free ;-)`}>amazing</em> software.
        </h3>
        <div className={styles.social}>
          <a href={`https://wa.me/${phone.replace('+', '')}`}>
            <WhatsappIcon width={size} height={size} className={styles.icon} />
          </a>
          <a href={`sgnl://${phone}`}>
            <SignalIcon width={size} height={size} className={styles.icon} />
          </a>
          <a href={`https://github.com/${github}`} target="_blank" rel="noreferrer noopener">
            <GithubIcon width={size} height={size} className={styles.icon} />
          </a>
          <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noreferrer noopener">
            <TwitterIcon width={size} height={size} className={styles.icon} />
          </a>
          <a href={`mailto:${email}`}>
            <HeyIcon width={size} height={size} className={styles.icon} />
          </a>
          <a href={`https://reddit.com/u/${reddit}`} target="_blank" rel="noreferrer noopener">
            <RedditIcon width={size} height={size} className={styles.icon} />
          </a>
          <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noreferrer noopener">
            <InstagramIcon width={size} height={size} className={styles.icon} />
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

import React from 'react'
import { Layout, MetaHeader, Avatar } from '../components'
import { TwitterIcon, GithubIcon, HeyIcon, SignalIcon, RedditIcon, InstagramIcon } from '../components/icons'
import Contact from '../contact'
import styles from '../styles/home.module.css'

const {
  phone,
  email,
  social: { twitter, github, instagram, reddit },
} = Contact

const Home = () => (
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
        <a href={`https://github.com/${github}`} target="_blank" rel="noreferrer noopener">
          <GithubIcon width={48} height={48} className={styles.icon} />
        </a>
        <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noreferrer noopener">
          <TwitterIcon width={48} height={48} className={styles.icon} />
        </a>
        <a href={`mailto:${email}`}>
          <HeyIcon width={48} height={48} className={styles.icon} />
        </a>
        <a href={`sgnl://${phone}`}>
          <SignalIcon width={48} height={48} className={styles.icon} />
        </a>
        <a href={`https://reddit.com/u/${reddit}`} target="_blank" rel="noreferrer noopener">
          <RedditIcon width={48} height={48} className={styles.icon} />
        </a>
        <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noreferrer noopener">
          <InstagramIcon width={48} height={48} className={styles.icon} />
        </a>
      </div>
      <div>
        <Avatar />
      </div>
    </section>
  </Layout>
)

export default Home

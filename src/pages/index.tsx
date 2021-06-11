import React from 'react'
import classNames from 'classnames'
import { Twitter, Github, Hey, Reddit, Instagram, Signal } from '@icons-pack/react-simple-icons'
import { Layout, MetaHeader } from '../components'
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
        Hi! My name is <em title={`Given name: "Jan Paul", last name: "Stegeman".`}>Jan Paul</em> and I'm a{' '}
        <em title={`Mostly because I'm always working on new things to do.`}>creative</em>,{' '}
        <em title={`One can read this is "smart-ass".`}>smart</em> and{' '}
        <em title={`Some people call this ADHD but I don't.`}>hyperactive</em> guy who writes{' '}
        <em title={`Yes. Well. Almost always bug free ;-)`}>amazing</em> software.
      </h3>
      <div className={styles.social}>
        <a href={`https://github.com/${github}`} target="_blank" rel="noreferrer noopener">
          <Github className={styles.icon} />
        </a>
        <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noreferrer noopener">
          <Twitter className={styles.icon} />
        </a>
        <a href={`mailto:${email}`}>
          <Hey className={styles.icon} />
        </a>
        <a href={`sgnl://${phone}`}>
          <Signal className={styles.icon} />
        </a>
        <a href={`https://reddit.com/u/${reddit}`} target="_blank" rel="noreferrer noopener">
          <Reddit className={styles.icon} />
        </a>
        <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noreferrer noopener">
          <Instagram className={styles.icon} />
        </a>
      </div>
      <div>
        <img src={'/images/jp2.webp'} alt="Jan Paul" className={styles.avatar} />
      </div>
    </section>
  </Layout>
)

export default Home

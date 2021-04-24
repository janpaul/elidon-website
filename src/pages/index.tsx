import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Github, Hey, Reddit, Instagram, Signal } from '@icons-pack/react-simple-icons'
import { Layout, MetaHeader } from '../components'
import Contact from '../contact.json'
import styles from './index.module.css'

const {
  phone,
  email,
  social: { twitter, github, instagram, reddit },
} = Contact

const Home = () => (
  <Layout>
    <MetaHeader url="https://elidon.net/" />
    <section className="content centered">
      <code>elidon.visit();</code>
      <h3 className="title">
        Hi! My name is Jan Paul and I'm a <em>creative</em>, <em>smart</em> and <em>hyperactive</em> guy who writes
        amazing software.
      </h3>
      <div className={styles.social}>
        <a href={`mailto:${email}`}>
          <Hey className={styles.icon} />
        </a>
        <a href={`sgnl://${phone}`}>
          <Signal className={styles.icon} />
        </a>
        <a href={`https://twitter.com/${twitter}`}>
          <Twitter className={styles.icon} />
        </a>
        <a href={`https://github.com/${github}`}>
          <Github className={styles.icon} />
        </a>
        <a href={`https://reddit.com/u/${reddit}`}>
          <Reddit className={styles.icon} />
        </a>
        <a href={`https://instagram.com/${instagram}`}>
          <Instagram className={styles.icon} />
        </a>
      </div>
      <div className={`animate__animated animate__fadeIn animate__slower ${styles.avatar}`}>
        <Image src={`/images/jp2.jpg`} alt="my avatar" width={256} height={256} />
      </div>
      <Link href="/about">Read more &raquo;</Link>
    </section>
  </Layout>
)

export default Home

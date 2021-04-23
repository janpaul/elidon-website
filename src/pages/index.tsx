import React from 'react'
import { Twitter, Github, Hey, Reddit, Instagram, Signal } from '@icons-pack/react-simple-icons'
import { Layout, MetaHeader } from '../components'
import Contact from '../contact.json'
import styles from './index.module.css'

const {
  company,
  address,
  phone,
  email,
  social: { twitter, github, instagram, reddit },
} = Contact

const Home = () => (
  <Layout>
    <MetaHeader url="https://elidon.net/" />
    <section className={styles.wrapper}>
      <section className={styles.header}>
        <div className={styles.nametag}>
          <span>Jan</span>
          <span>Paul</span>
          <span>Stegeman</span>
        </div>
        <div className={styles.contact}>
          <span>{company}</span>
          <span>
            {address.street} {address.number}
          </span>
          <span>{address.zipcode}</span>
          <span>{address.place}</span>
          <span>{address.country}</span>
          <span>
            <a href={`sgnl://${phone}`}>{phone}</a>
          </span>
          <span>
            <a href={`mailto:${email}`}>{email}</a>
          </span>
        </div>
      </section>
      <section className={styles.content}>
        <h3 className={styles.title}>Hi! My name is Jan Paul and I write software.</h3>
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
      </section>
    </section>
  </Layout>
)

export default Home

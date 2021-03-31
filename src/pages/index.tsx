import React from 'react'
import { Layout, Title, Subtitle, Avatar, Social } from '../components'
import Contact from '../contact.json'
import styles from './index.module.css'

const { address, phone, email } = Contact

const Home = () => {
  return (
    <Layout>
      <section className={styles.wrapper}>
        <Title>Jan Paul</Title>
        <Avatar />
        <section className={styles.section}>
          {address.street} {address.number} / {address.zipcode} {address.place} / {address.country}
        </section>
        <section className={styles.section}>
          <a
            href={`https://w3w.co/${address.w3w}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Take me to What3Words"
          >
            <div className={styles.centeredLink}>
              <img src={'/w3w_Symbol_RGB_Red.svg'} alt="what3words logo" className={styles.what3words} />
              <span>{address.w3w}</span>
            </div>
          </a>
        </section>
        <section className={styles.section}>
          <span>
            <a href={`mailto:${email}`}>{email}</a>
          </span>
          &nbsp;/&nbsp;
          <span>
            <a href={`sgnl://${phone}`} className={styles.icon}>
              {phone}
            </a>{' '}
            <sub>(Please don't call me, I probably won't answer)</sub>
          </span>
        </section>
        <Subtitle>Full-stack software engineer based in (and around) Amsterdam.</Subtitle>
        <Social />
      </section>
    </Layout>
  )
}

export default Home

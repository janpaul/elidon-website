import React from 'react'
import { Layout, Title, Subtitle, Avatar, Social, MetaHeader } from '../components'
import Contact from '../contact.json'
import styles from './index.module.css'

const { address, phone, email } = Contact

const Home = () => {
  return (
    <Layout>
      <MetaHeader url="https://elidon.net/" />
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
        <p className={styles.bodyText}>
          My name is Jan Paul. Together with my lovely wife Roos Koenen (and way too many kids) I live in{' '}
          <a href="https://www.iamsterdam.com/en">Amsterdam</a>. I practice the martial art{' '}
          <a href="http://www.worldtaekwondo.org/index.html">taekwondo</a> rather fanatically, and I run 5km per day
          although I will never really do that just for fun. I’m trained as an{' '}
          <a href="https://en.wikipedia.org/wiki/General_Dynamics_F-16_Fighting_Falcon">F-16</a> fighter pilot but at
          some point I made the switch to my other hobby - writing software. My main passion is on optimising code and
          this is why most of my clients are in the web, gaming & media space - any company that needs highly performant
          software. For the geeks among you, I prefer the programming languages{' '}
          <a href="https://javascript.info">Javascript</a> (<a href="https://reactjs.org">React</a>),{' '}
          <a href="https://en.wikipedia.org/wiki/C%2B%2B">C++</a> and <a href="https://rust-lang.org">Rust</a>. Apart
          from my software activities, I’m also responsible for the hiring process at companies within &quot;my&quot;
          comfort zone (media, mostly), setting up development teams and making sure said teams are able to do their
          jobs, without too many distractions.
        </p>
        <Social />
      </section>
    </Layout>
  )
}

export default Home

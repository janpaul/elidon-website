import { Layout, MetaHeader } from '../components'
import styles from './about.module.css'
import Link from 'next/link'
import React from 'react'

const AboutPage = () => (
  <Layout>
    <MetaHeader url="https://elidon.net/about" />
    <div className={styles.wrapper}>
      <h3 className={styles.title}>About me.</h3>
      <p className={styles.bodyText}>
        My name is Jan Paul. Together with my lovely wife Roos (and way too many kids) I live in{' '}
        <a href="https://www.iamsterdam.com/en">Amsterdam</a>. I practice the martial art{' '}
        <a href="http://www.worldtaekwondo.org/index.html">taekwondo</a> rather fanatically, and I run 5km per day
        although I will never really do that just for fun. I’m trained as an{' '}
        <a href="https://en.wikipedia.org/wiki/General_Dynamics_F-16_Fighting_Falcon">F-16</a> fighter pilot but at some
        point I made the switch to my other hobby - writing software. I've been doing that since I was eight years old.
        My main passion is on optimising code and this is why most of my clients are in the web, gaming & media space -
        any company that's in need of highly performant software. For the geeks among you, I prefer the programming
        languages <a href="https://javascript.info">Javascript</a> (<a href="https://reactjs.org">React</a>),{' '}
        <a href="https://en.wikipedia.org/wiki/C%2B%2B">C++</a> and <a href="https://rust-lang.org">Rust</a>. Apart from
        my software activities, I’m also responsible for the hiring process at companies within &quot;my&quot; comfort
        zone (media, mostly), setting up development teams and making sure said teams are able to do their jobs, without
        too many distractions.
      </p>
      <Link href="/">&laquo; Back home</Link>
    </div>
  </Layout>
)

export default AboutPage

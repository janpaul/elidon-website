import React from 'react'
import { Layout, MetaHeader } from '../../components'
import {
  ReactIcon,
  SvelteIcon,
  NextJsIcon,
  CppIcon,
  RustIcon,
  JavascriptIcon,
  TypescriptIcon,
} from '../../components/icons'
import styles from '../../styles/about.module.css'

const urls = {
  amsterdam: 'https://www.iamsterdam.com/en',
  taekwondo: 'https://www.worldtaekwondo.org/index.html',
  f16: 'https://en.wikipedia.org/wiki/General_Dynamics_F-16_Fighting_Falcon',
  javascript: 'https://javascript.info',
  typescript: 'https://www.typescriptlang.org',
  react: 'https://reactjs.org',
  svelte: 'https://svelte.dev',
  nextjs: 'https://nextjs.org',
  cpp: 'https://en.wikipedia.org/wiki/C%2B%2B',
  rust: 'https://rust-lang.org',
  arm: 'https://en.wikipedia.org/wiki/ARM_architecture',
  motorola: 'https://en.wikipedia.org/wiki/Motorola_68000_series',
}
const AboutPage = () => (
  <Layout>
    <MetaHeader url="https://elidon.net/about" title="janpaul.about()" />
    <section className="content centered">
      <code>janpaul.about();</code>
      <p className={styles.paragraph}>
        My name is Jan Paul. I live and work in <a href={`${urls.amsterdam}`}>Amsterdam</a>. I practice the martial art{' '}
        <a href={`${urls.taekwondo}`}>taekwondo</a> rather fanatically and I run 5km per day although I will never
        really do that just for fun. I’m trained as an <a href={`${urls.f16}`}>F-16</a> fighter pilot but at some point
        I made the switch to my other hobby - writing software. I've been doing that since I was eight years old.
      </p>
      <p className={styles.paragraph}>
        My main passion is on optimizing code and this is why most of my clients are in the web, gaming & media space -
        any company that's in need of highly performant software.
      </p>
      <p className={styles.paragraph}>
        For the geeks among you, I prefer the programming languages <JavascriptIcon />
        <a href={`${urls.javascript}`}>JavaScript</a>, <TypescriptIcon />
        <a href={`${urls.typescript}`}>Typescript</a> with the <ReactIcon />
        <a href={`${urls.react}`}>React</a>, <SvelteIcon />
        <a href={`${urls.svelte}`}>Svelte</a> and <NextJsIcon />
        <a href={`${urls.nextjs}`}>NextJS</a> frameworks please. I'm also pretty fluent in <CppIcon />
        <a href={`${urls.cpp}`}>C++</a> and <RustIcon />
        <a href={`${urls.rust}`}>Rust</a> and, out of sheer programming pleasure, <a href={`${urls.arm}`}>ARM</a> and{' '}
        <a href={`${urls.motorola}`}>Motorola 680x0</a> assembly.
      </p>
      <p className={styles.paragraph}>
        Apart from my software activities, I’m also responsible for the hiring process at companies within my comfort
        zone (media and science, mostly), setting up development teams and making sure said teams are able to do their
        jobs, without too many distractions.
      </p>
    </section>
  </Layout>
)
export default AboutPage

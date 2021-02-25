import Head from 'next/head'
import { Layout, Title, Subtitle, Avatar, Social } from '../components'
import styles from './index.module.css'

const Home = () => (
  <Layout>
    <Head>
      <title>Jan Paul</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section className={styles.wrapper}>
      <Title>Jan Paul Stegeman</Title>
      <Avatar />
      <Subtitle>
        Freelance full-stack software engineer based in (and around) Amsterdam.
      </Subtitle>
      <Social />
    </section>
  </Layout>
)

export default Home

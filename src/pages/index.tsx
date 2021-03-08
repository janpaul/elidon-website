import Head from 'next/head'
import { Goodreads, Googlemaps } from '@icons-pack/react-simple-icons'

import { Layout, Title, Subtitle, Avatar, Social } from '../components'
import { address } from '../contact.json'
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
      <section>
        {address.street} {address.number} / {address.zipcode} {address.place} / {address.country}
      </section>
      <section>
        <a
          href={`https://maps.apple.com/?daddr=${address.place}+${address.street}+${address.number}&dirflg=d`}
          target="_blank"
          title="Show the address in Apple Maps"
        >
          <Googlemaps /> Take me there!
        </a>
      </section>
      <Subtitle>Freelance full-stack software engineer based in (and around) Amsterdam.</Subtitle>
      <Social />
    </section>
  </Layout>
)

export default Home

import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import { Googlemaps } from '@icons-pack/react-simple-icons'

import { Layout, Title, Subtitle, Avatar, Social } from '../components'
import { address } from '../contact.json'
import styles from './index.module.css'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
const Home = () => {
  const { t } = useTranslation('common')
  return (
    <Layout>
      <Head>
        <title>{t('title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.wrapper}>
        <Title>{t('home.title')}</Title>
        <Avatar />
        <section>
          {address.street} {address.number} / {address.zipcode} {address.place} / {address.country}
        </section>
        <section>
          <a
            href={`https://w3w.co/${t('home.map.what3words')}`}
            target="_blank"
            rel="noopener noreferrer"
            title={t('home.map.title')}
          >
            <Googlemaps /> {t('home.map.what3words')}
          </a>
        </section>
        <Subtitle>{t('home.subtitle')}</Subtitle>
        <Social />
      </section>
    </Layout>
  )
}

export default Home

import React from 'react'
import { Layout } from '../components'
import styles from '../styles/404.module.css'

const FourOhForPage = () => {
  return (
    <Layout>
      <section className="content centered">
        <h1 className="title">404 - Page Not Found</h1>
        <img src={`/images/panda.webp`} className={styles.panda} alt="a stupid panda" />
      </section>
    </Layout>
  )
}

export default FourOhForPage

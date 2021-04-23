import { Layout } from '../components'
import styles from './404.module.css'
import React from 'react'

const FourOhForPage = () => {
  return (
    <Layout>
      <section className="content centered">
        <h1 className="title">404 - Page Not Found</h1>
        <img src={`/images/panda.png`} className={styles.panda} alt="a stupid panda" />
      </section>
    </Layout>
  )
}

export default FourOhForPage

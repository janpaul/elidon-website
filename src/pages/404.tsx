import React from 'react'
import Image from 'next/image'
import { Layout } from '../components'
import styles from '../styles/404.module.css'
import panda from '../../public/images/panda.webp'

const FourOhForPage = () => {
  return (
    <Layout>
      <section className="content centered">
        <h1 className="title">404 - Page Not Found</h1>
        <Image src={panda} className={styles.panda} alt="a stupid panda" placeholder="blur" />
      </section>
    </Layout>
  )
}

export default FourOhForPage

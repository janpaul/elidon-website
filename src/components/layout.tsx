import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { NextDotJs, ReactJs, Vercel } from '@icons-pack/react-simple-icons'

import styles from './layout.module.css'

const FOOTER_ICON_SIZE = 12

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Jan Paul</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#2e3440" />
      </Head>
      <section className={styles.wrapper}>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <span>&copy; 1974 - {new Date().getFullYear()}</span>,{' '}
          <span>
            powered by{' '}
            <a href="https://reactjs.org" className={styles.iconLink}>
              <ReactJs size={FOOTER_ICON_SIZE} />
            </a>
            <a href="https://nextjs.org" className={styles.iconLink}>
              <NextDotJs size={FOOTER_ICON_SIZE} />
            </a>
            <a href="https://vercel.com" className={styles.iconLink}>
              <Vercel size={FOOTER_ICON_SIZE} />
            </a>
          </span>
        </footer>
      </section>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

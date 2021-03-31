import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { NextDotJs, ReactJs, Vercel } from '@icons-pack/react-simple-icons'

import { description, title, keywords, image } from '../config.json'
import { social } from '../contact.json'
import styles from './layout.module.css'

const FOOTER_ICON_SIZE = 12

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#2e3440" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.sort().join(' ')} />
        <meta name="author" content="janpaul@hey.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={`@${social.twitter}`} />
        <meta name="twitter:author" content={`@${social.twitter}`} />
        <meta name="og:title" content={title} />
        <meta name="og:site_name" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://elidon.net" />
        <meta name="og:site_name" content="https://elidon.net" />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta name="og:locale" content="en_EN" />
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

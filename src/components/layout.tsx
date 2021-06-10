import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'

import Config from '../config'
import Contact from '../contact'
import styles from './layout.module.css'

const { address, phone, email, social } = Contact
const { description, title, keywords, image, analytics } = Config

interface Props {
  children: ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={'/favicon.ico'} />
        <link rel="apple-touch-icon" sizes="180x180" href={'/icons/apple-touch-icon.png'} />
        <link rel="icon" type="image/png" sizes="32x32" href={'/icons/favicon-32x32.png'} />
        <link rel="icon" type="image/png" sizes="16x16" href={'/icons/favicon-16x16.png'} />
        <link rel="mask-icon" href={'/icons/safari-pinned-tab.svg'} color="#5bbad5" />
        <meta name="theme-color" content="#2e3440" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.sort().join(' ')} />
        <meta name="author" content="janpaul@hey.com" />
        {/* start OpenGraph */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={`@${social.twitter}`} />
        <meta name="twitter:author" content={`@${social.twitter}`} />
        <meta name="og:title" content={title} />1
        <meta name="og:site_name" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://elidon.net" />
        <meta name="og:site_name" content="https://elidon.net" />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta name="og:locale" content="en_EN" />
        {/* end OpenGraph */}
        {/* start Google Analytics */}
        {analytics.enabled && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${analytics.id}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${analytics.id}', {
                      page_path: window.location.pathname,
                    });
                  `,
              }}
            />
          </>
        )}
        {/* end Google Analytics */}
      </Head>
      <section className={styles.wrapper}>
        <section className={styles.header}>
          <div className={styles.nametag}>
            <span>Jan</span>
            <span>Paul</span>
            <span>Stegeman</span>
          </div>
          <div className={styles.contact}>
            <span>
              {address.street} {address.number}
            </span>
            <span>{address.zipcode}</span>
            <span>{address.place}</span>
            <span>{address.country}</span>
            <span>
              <a href={`sgnl://${phone}`}>{phone}</a>
            </span>
            <span>
              <a href={`mailto:${email}`}>{email}</a>
            </span>
          </div>
        </section>
        <main className={styles.main}>
          <nav className={styles.navigation}>
            <Link href="/">.home()</Link>
            <Link href="/about">.about()</Link>
          </nav>
          {children}
          <div className={styles.filler} />
        </main>
      </section>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

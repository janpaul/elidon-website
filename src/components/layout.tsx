import React from 'react'
import PropTypes from 'prop-types'
import { NextDotJs, ReactJs, Vercel } from '@icons-pack/react-simple-icons'
import styles from './layout.module.css'

const FOOTER_ICON_SIZE = 12

const Layout = ({ children }) => {
  return (
    <section className={styles.wrapper}>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <span>&copy; 1974 - {new Date().getFullYear()} elidon consultancy</span>,{' '}
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
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

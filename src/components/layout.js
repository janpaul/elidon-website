import React from 'react'
import PropTypes from 'prop-types'
import styles from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>this is the header</header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>&copy; 2021 elidon consultancy</footer>
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

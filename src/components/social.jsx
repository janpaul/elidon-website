import React from 'react'
import {
  Twitter,
  Github,
  Hey,
  Reddit,
  Instagram,
  Signal,
} from '@icons-pack/react-simple-icons'
import contact from '../contact.json'
import styles from './social.module.css'

const ICON_SIZE = 32

const Social = () => (
  <section className={styles.wrapper}>
    <a href={`mailto:${contact.email}`} className={styles.icon}>
      <Hey size={ICON_SIZE} />
    </a>
    <a href={`sgnl://${contact.phone}`} className={styles.icon}>
      <Signal size={ICON_SIZE} />
    </a>
    <a href={`https://twitter.com/${contact.twitter}`} className={styles.icon}>
      <Twitter size={ICON_SIZE} />
    </a>
    <a href={`https://github.com/${contact.github}`} className={styles.icon}>
      <Github size={ICON_SIZE} />
    </a>
    <a href={`https://reddit.com/u/${contact.reddit}`} className={styles.icon}>
      <Reddit size={ICON_SIZE} />
    </a>
    <a
      href={`https://instagram.com/${contact.instagram}`}
      className={styles.icon}
    >
      <Instagram size={ICON_SIZE} />
    </a>
  </section>
)
export default Social

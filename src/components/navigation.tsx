import React from 'react'
import Link from 'next/link'
import styles from '../styles/navigation.module.css'

import Config from '../config'
const {
  features: { clients, cv },
} = Config
const Navigation = () => (
  <nav className={styles.navigation}>
    <Link href="/">
      <a>.home(🏡)</a>
    </Link>
    <Link href={'/about'}>
      <a>.about(❓)</a>
    </Link>
    {clients && <Link href={'/clients'}>.clients()</Link>}
    {cv && (
      <Link href={'/cv'}>
        <a>.cv(📄)</a>
      </Link>
    )}
  </nav>
)
export default Navigation

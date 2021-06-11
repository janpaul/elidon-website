import Link from 'next/link'
import React from 'react'
import styles from '../styles/navigation.module.css'

import Config from '../config'

const {
  features: { clients, cv },
} = Config
const Navigation = () => (
  <nav className={styles.navigation}>
    <Link href="/">.home()</Link>
    <Link href={'/about'}>.about()</Link>
    {clients && <Link href={'/clients'}>.clients()</Link>}
    {cv && (
      <a href={'/cv.pdf'} download="cv jan paul stegeman.pdf">
        .cv()
      </a>
    )}
  </nav>
)
export default Navigation

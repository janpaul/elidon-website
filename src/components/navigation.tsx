import React from 'react'
import Link from 'next/link'
import { DownloadCloud, Home, HelpCircle } from 'react-feather'
import styles from '../styles/navigation.module.css'

import Config from '../config'

const {
  features: { clients, cv },
} = Config
const Navigation = () => (
  <nav className={styles.navigation}>
    <Link href="/">
      <a>
        .home(
        <Home size={16} />)
      </a>
    </Link>
    <Link href={'/about'}>
      <a>
        .about(
        <HelpCircle size={16} />)
      </a>
    </Link>
    {clients && <Link href={'/clients'}>.clients()</Link>}
    {cv && (
      <a href={'/cv.pdf'} download="cv jan paul stegeman.pdf">
        .cv(
        <DownloadCloud size={16} />)
      </a>
    )}
  </nav>
)
export default Navigation

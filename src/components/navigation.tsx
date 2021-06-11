import React from 'react'
import Link from 'next/link'
import { DownloadCloud, Home, HelpCircle } from 'react-feather'
import styles from '../styles/navigation.module.css'

import Config from '../config'
const iconSize = 16
const {
  features: { clients, cv },
} = Config
const Navigation = () => (
  <nav className={styles.navigation}>
    <Link href="/">
      <a>
        .home(
        <Home size={iconSize} />)
      </a>
    </Link>
    <Link href={'/about'}>
      <a>
        .about(
        <HelpCircle size={iconSize} />)
      </a>
    </Link>
    {clients && <Link href={'/clients'}>.clients()</Link>}
    {cv && (
      <a href={'/cv.pdf'} download="cv jan paul stegeman.pdf">
        .cv(
        <DownloadCloud size={iconSize} />)
      </a>
    )}
  </nav>
)
export default Navigation

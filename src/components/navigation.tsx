import React from 'react'
import Link from 'next/link'
import styles from '../styles/navigation.module.css'
import Config from '../config'
import { DownloadIcon, HomeIcon, BulbIcon } from './icons'

const {
  features: { clients, cv },
} = Config
const Navigation = () => (
  <nav className={styles.navigation}>
    <Link href="/">
      <a>
        .home(
        <HomeIcon />)
      </a>
    </Link>
    <Link href={'/about'}>
      <a>
        .about(
        <BulbIcon />)
      </a>
    </Link>
    {clients && <Link href={'/clients'}>.clients()</Link>}
    {cv && (
      <Link href={'/cv'}>
        <a>
          .cv(
          <DownloadIcon />)
        </a>
      </Link>
    )}
  </nav>
)
export default Navigation

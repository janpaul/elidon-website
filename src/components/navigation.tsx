import React from 'react'
import Link from 'next/link'
import styles from '../styles/navigation.module.css'
import Config from '../config'
import { DownloadIcon, HomeIcon, AboutIcon, GpgIcon } from './icons'

const {
  features: { clients, cv, gpg },
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
        <AboutIcon />)
      </a>
    </Link>
    {clients && (
      <Link href={'/clients'}>
        <a>.clients()</a>
      </Link>
    )}
    {gpg && (
      <Link href={'/gpg'}>
        <a>
          .gpg(
          <GpgIcon />)
        </a>
      </Link>
    )}
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

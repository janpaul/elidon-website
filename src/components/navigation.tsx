import React from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from '../styles/navigation.module.css'
import Config from '../config'
import { DownloadIcon, HomeIcon, AboutIcon, GpgIcon, LoginIcon, LogoutIcon } from './icons'
import { Button } from '.'
import { useIsMaybeMobile } from '../hooks'

const {
  features: { clients, cv, gpg },
} = Config
const Navigation = () => {
  const maybeMobile = useIsMaybeMobile()
  const [session] = useSession()
  return (
    <nav className={styles.navigation}>
      <Link href="/" passHref>
        <a>
          {maybeMobile ? (
            <HomeIcon width={24} height={24} />
          ) : (
            <>
              .home(
              <HomeIcon />)
            </>
          )}
        </a>
      </Link>
      <Link href={'/about'} passHref>
        <a>
          {maybeMobile ? (
            <AboutIcon width={24} height={24} />
          ) : (
            <>
              .about(
              <AboutIcon />)
            </>
          )}
        </a>
      </Link>
      {clients && (
        <Link href={'/clients'} passHref>
          <a>.clients()</a>
        </Link>
      )}
      {gpg && (
        <Link href={'/gpg'} passHref>
          <a>
            {maybeMobile ? (
              <GpgIcon width={24} height={24} />
            ) : (
              <>
                .gpg(
                <GpgIcon />)
              </>
            )}
          </a>
        </Link>
      )}
      {cv && (
        <Link href={'/cv'} passHref>
          <a>
            {maybeMobile ? (
              <DownloadIcon width={24} height={24} />
            ) : (
              <>
                .cv(
                <DownloadIcon />)
              </>
            )}
          </a>
        </Link>
      )}
      {session ? (
        <Button onClick={() => signOut()}>
          <LogoutIcon />
        </Button>
      ) : (
        <Button onClick={() => signIn()}>
          <LoginIcon />
        </Button>
      )}
    </nav>
  )
}
export default Navigation

import styles from './header.module.css'
import Link from 'next/link'
import React from 'react'

const Header = () => (
  <ul className={styles.list}>
    <li>
      <Link href="/en">en</Link>
    </li>
    <li>
      <Link href="/nl">nl</Link>
    </li>
  </ul>
)
export default Header

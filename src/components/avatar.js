import React from 'react'
import Image from 'next/image'
import styles from './avatar.module.css'

const Avatar = () => {
  return (
    <figure className={styles.figure}>
      <Image src="/jp2.png" alt="picture of me" width={256} height={256} className={styles.image} />
    </figure>
  )
}

export default Avatar

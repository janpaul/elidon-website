import Image from 'next/image'
import React from 'react'
import styles from '../styles/avatar.module.css'

const Avatar = () => (
  <Image src={'/images/jp2.webp'} alt="Jan Paul" className={styles.avatar} width={256} height={256} />
)

export default Avatar

import Image from 'next/image'
import React from 'react'
import styles from '../styles/avatar.module.css'
import jp from '../../public/images/jp2.webp'

const Avatar = () => (
  <Image src={jp} alt="Jan Paul" className={styles.avatar} placeholder="blur" width={256} height={256} />
)

export default Avatar

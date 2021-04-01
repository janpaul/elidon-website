import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './avatar.module.css'
import config from '../config.json'

const { avatarInterval, avatarImages } = config

const AvatarImageComponents = [...avatarImages].map(image => (
  <Image src={`/images/${image}`} alt="my avatar" width={256} height={256} className={styles.image} />
))
interface Props {
  onAvatarChange?: Function
}

const Avatar = ({ onAvatarChange }: Props) => {
  const [image, setImage] = useState(AvatarImageComponents[0])
  const updateWithRandomImage = () => {
    setImage(AvatarImageComponents[Math.floor(Math.random() * AvatarImageComponents.length)])
    if (!!onAvatarChange) onAvatarChange()
  }
  useEffect(() => {
    updateWithRandomImage()
    const timeout = setInterval(() => updateWithRandomImage(), avatarInterval * 1000)
    return () => clearInterval(timeout)
  }, [])
  return (
    <figure className={styles.figure} onClick={() => updateWithRandomImage()}>
      {image}
    </figure>
  )
}

export default Avatar

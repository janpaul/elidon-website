import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './avatar.module.css'
import config from '../config.json'

const { avatarInterval } = config

const AvatarImages = [
  'jp.jpg',
  'jp2.jpg',
  'jp3.jpg',
  'jp4.jpg',
  'roos+jp.jpg',
  'roos+jp2.jpg',
  'roos+jp3.jpg',
].map(image => <Image src={`/images/${image}`} alt="my avatar" width={256} height={256} className={styles.image} />)
interface Props {
  onAvatarChange?: Function
}

const Avatar = ({ onAvatarChange }: Props) => {
  const [image, setImage] = useState(AvatarImages[0])
  const updateWithRandomImage = () => {
    setImage(AvatarImages[Math.floor(Math.random() * AvatarImages.length)])
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

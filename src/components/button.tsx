import { MouseEventHandler, ReactNode } from 'react'
import styles from '../styles/button.module.css'

type Props = {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
  title?: string
}
const Button = ({ children, onClick, title }: Props) => (
  <button onClick={onClick} className={styles.button} title={title}>
    {children}
  </button>
)

export default Button

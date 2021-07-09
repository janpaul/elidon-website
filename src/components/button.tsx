import { MouseEventHandler, ReactNode } from 'react'
import styles from '../styles/button.module.css'

type Props = {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}
const Button = ({ children, onClick }: Props) => (
  <button onClick={onClick} className={styles.button}>
    {children}
  </button>
)

export default Button

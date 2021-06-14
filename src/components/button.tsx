import { MouseEventHandler, ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}
const Button = ({ children, onClick }: Props) => <button onClick={onClick}>{children}</button>

export default Button

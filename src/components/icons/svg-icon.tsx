import { IconProps } from './types'

type BaseProps = { children: any } & IconProps

const SvgIcon = ({ children, ...props }: BaseProps) => {
  const { width = 16, height = 16, className } = props
  return (
    <svg
      className={className}
      role="img"
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}
export default SvgIcon

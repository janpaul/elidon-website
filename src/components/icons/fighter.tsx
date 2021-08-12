import { IconProps } from './types'
import SvgIcon from './svg-icon'

export const FighterIcon = ({ ...props }: IconProps) => (
  <SvgIcon {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.513 1.96a1.374 1.374 0 011.499-.21l19.335 9.215a1.146 1.146 0 010 2.07L3.012 22.25a1.374 1.374 0 01-1.947-1.46L2.49 12 1.065 3.21a1.374 1.374 0 01.448-1.25zm2.375 10.79l-1.304 8.042L21.031 12 2.584 3.208l1.304 8.042h7.362a.75.75 0 010 1.5H3.888z"
    />
  </SvgIcon>
)
export default FighterIcon

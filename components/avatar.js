import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const StyledFigure = styled.figure`
  width: var(--avatar-size);
  height: var(--avatar-size);
`
const StyledImage = styled(Image)`
  border-radius: calc(var(--avatar-size) / 2);
  width: var(--avatar-size);
  height: var(--avatar-size);
  filter: grayscale(100%);
  @media screen and (prefers-color-scheme: light) {
    transform: scaleX(-1);
  }
`

const Avatar = () => {
  return (
    <StyledFigure>
      <StyledImage src="/jp.png" alt="picture of me" width={256} height={256} />
    </StyledFigure>
  )
}

export default Avatar

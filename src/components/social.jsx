import React from 'react'
import styled from 'styled-components'
import {
  Twitter,
  Github,
  Hey,
  Reddit,
  Instagram,
  Signal,
} from '@icons-pack/react-simple-icons'
import contact from '../../contact.json'

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
`
const StyledIconLink = styled.a`
  color: var(--linkcolor);
  margin: calc(2 * var(--padding));
`
const ICON_SIZE = 32

const Social = () => (
  <Wrapper>
    <StyledIconLink href={`mailto:${contact.email}`}>
      <Hey size={ICON_SIZE} />
    </StyledIconLink>
    <StyledIconLink href={`sgnl://${contact.phone}`}>
      <Signal size={ICON_SIZE} />
    </StyledIconLink>
    <StyledIconLink href={`https://twitter.com/${contact.twitter}`}>
      <Twitter size={ICON_SIZE} />
    </StyledIconLink>
    <StyledIconLink href={`https://github.com/${contact.github}`}>
      <Github size={ICON_SIZE} />
    </StyledIconLink>
    <StyledIconLink href={`https://reddit.com/u/${contact.reddit}`}>
      <Reddit size={ICON_SIZE} />
    </StyledIconLink>
    <StyledIconLink href={`https://instagram.com/${contact.instagram}`}>
      <Instagram size={ICON_SIZE} />
    </StyledIconLink>
  </Wrapper>
)
export default Social

import styled from 'styled-components'

const StyledSubtitle = styled.h3`
  font-weight: lighter;
  font-size: 2rem;
  background-color: var(--nord1);
  padding: var(--title-padding) 0;
  @media screen and (prefers-color-scheme: light) {
    background-color: var(--nord5);
    color: var(--nord3);
  }
`

export default StyledSubtitle

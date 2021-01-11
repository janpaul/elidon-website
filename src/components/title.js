import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-size: 3rem;
  font-weight: lighter;
  background-color: var(--nord1);
  padding: var(--title-padding) 0;
  margin: 0;
  @media screen and (prefers-color-scheme: light) {
    background-color: var(--nord5);
    color: var(--nord3);
  }
`

export default StyledTitle

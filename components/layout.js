import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
`
const Header = styled.header`
  flex-grow: 0;
  display: none;
`
const Main = styled.main`
  flex-grow: 1;
  justify-content: left;
  width: 100vw;
`
const Footer = styled.footer`
  flex-grow: 0;
  font-size: 1rem;
  padding-bottom: var(--padding);
  text-align: center;
  @media screen and (orientation: portrait) {
    padding-bottom: var(--mobile-bottom-padding);
  }
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header>this is the header</Header>
      <Main>{children}</Main>
      <Footer>&copy; 2021 elidon consultancy</Footer>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

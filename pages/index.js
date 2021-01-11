import Head from 'next/head'
import styled from 'styled-components'
import { Layout, Title, Subtitle, Avatar, Social } from '../components'
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
const Home = () => (
  <Layout>
    <Head>
      <title>Jan Paul</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Wrapper>
      <Title>Jan Paul Stegeman</Title>
      <Avatar />
      <Subtitle>
        Freelance full-stack software engineer based in (and around) Amsterdam.
      </Subtitle>
      <Social />
    </Wrapper>
  </Layout>
)

export default Home

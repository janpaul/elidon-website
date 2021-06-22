import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async context => {
  const { remoteAddress, localAddress } = context.req.socket
  console.log(context.req.socket.remoteAddress) //see if you have those headers
  console.log(context.req.socket.localAddress) //see if you have those headers
  return {
    props: {
      remoteAddress,
      localAddress,
    },
  }
}

const TestPage = ({ remoteAddress, localAddress }) => {
  return (
    <div>
      <dl>
        <dt>remote</dt>
        <dd>{remoteAddress}</dd>
        <dt>local</dt>
        <dd>{localAddress}</dd>
      </dl>
    </div>
  )
}

export default TestPage

import { Layout, Title, Avatar } from '../components'
import styles from './index.module.css'

const FourOhForPage = () => {
  return (
    <Layout>
      <section className={styles.wrapper}>
        <Title>404 - Page Not Found</Title>
        <Avatar />
      </section>
    </Layout>
  )
}

export default FourOhForPage

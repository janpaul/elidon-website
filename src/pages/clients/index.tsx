import React from 'react'
import styles from './clients.module.css'
import { Layout, MetaHeader } from '../../components'

type CompanyProps = {
  name: string
  logo: string
}
const CompanyItem = ({ name, logo }: CompanyProps) => (
  <div className={styles.item}>
    <img src={logo} alt={name} className={styles.logo} title={name} />
  </div>
)
const ClientsPage = () => (
  <Layout>
    <MetaHeader url="https://elidon.net/clients" title="janpaul.clients()" />
    <section className="content centered">
      <code>janpaul.clients();</code>
      <div className={styles.list}>
        <CompanyItem name="DHL Parcel" logo={`/logos/dhl.webp`} />
        <CompanyItem name="Elsevier" logo={`/logos/elsevier.webp`} />
        <CompanyItem name="Tommy Hilfiger" logo={`/logos/tommy-hilfiger.webp`} />
        <CompanyItem name="Tom Tom" logo={`/logos/tomtom.webp`} />
        <CompanyItem name="Rabobank" logo={`/logos/rabobank.webp`} />
        <CompanyItem name="PornHub" logo={`/logos/pornhub.webp`} />
        <CompanyItem name="ING" logo={`/logos/ing.webp`} />
        <CompanyItem name="European Patent Office" logo={`/logos/epo.webp`} />
        <CompanyItem name="Essent / Powerhouse" logo={`/logos/essent.webp`} />
        <CompanyItem name="LBi / Lost Boys" logo={`/logos/lbi.webp`} />
        <CompanyItem name="Tele2" logo={`/logos/tele2.webp`} />
        <CompanyItem name="Alliander" logo={`/logos/liander.webp`} />
        <CompanyItem name="Achmea" logo={`/logos/achmea.webp`} />
      </div>
    </section>
  </Layout>
)

export default ClientsPage

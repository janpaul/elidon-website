import React from 'react'
import Image from 'next/image'
import styles from '../styles/clients.module.css'
import { Layout } from '../components'

type CompanyProps = {
  name: string
  logo: string
  width?: number
  height?: number
}
const CompanyItem = ({ name, logo, width = 128, height = 128 }: CompanyProps) => (
  <div className={styles.item}>
    <Image src={logo} alt={name} className={styles.logo} title={name} width={width} height={height} />
  </div>
)
const ClientsPage = () => (
  <Layout url="https://elidon.net/clients" title="janpaul.clients()">
    <section className="content centered">
      <code>janpaul.clients()</code>
      <div className={styles.list}>
        <CompanyItem name="DHL Parcel" logo={`/logos/dhl.webp`} height={28} />
        <CompanyItem name="Elsevier" logo={`/logos/elsevier.webp`} height={141} />
        <CompanyItem name="Tommy Hilfiger" logo={`/logos/tommy-hilfiger.webp`} />
        <CompanyItem name="Tom Tom" logo={`/logos/tomtom.webp`} height={33} />
        <CompanyItem name="Rabobank" logo={`/logos/rabobank.webp`} height={153} />
        <CompanyItem name="PornHub" logo={`/logos/pornhub.webp`} height={86} />
        <CompanyItem name="ING" logo={`/logos/ing.webp`} height={83} />
        <CompanyItem name="European Patent Office" logo={`/logos/epo.webp`} height={128} />
        <CompanyItem name="Essent / Powerhouse" logo={`/logos/essent.webp`} height={39} />
        <CompanyItem name="LBi / Lost Boys" logo={`/logos/lbi.webp`} height={67} />
        <CompanyItem name="Tele2" logo={`/logos/tele2.webp`} height={65} />
        <CompanyItem name="Alliander" logo={`/logos/liander.webp`} height={94} />
        <CompanyItem name="Achmea" logo={`/logos/achmea.webp`} />
      </div>
    </section>
  </Layout>
)

export default ClientsPage

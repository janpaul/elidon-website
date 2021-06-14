import React from 'react'
import Image from 'next/image'
import { Layout, MetaHeader } from '../../components'

const ClientsPage = () => (
  <Layout>
    <MetaHeader url="https://elidon.net/gallery" title="janpaul.gallery()" />
    <section className="content centered">
      <code>janpaul.gallery();</code>
    </section>
  </Layout>
)

export default ClientsPage

import React from 'react'
import { Layout, MetaHeader } from '../../components'
import { GpgIcon } from '../../components/icons'

const GpgPage = () => (
  <Layout>
    <MetaHeader url="https://elidon.net/gpg" title="janpaul.gpg()" />
    <section className="content centered">
      <code>janpaul.gpg();</code>
      <p>
        <a href={'public.pgp'} download="janpaul@hey.com-public.pgp">
          Download <GpgIcon width={32} height={32} />
        </a>
      </p>
    </section>
  </Layout>
)

export default GpgPage

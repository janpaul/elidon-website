import React from 'react'

import { Layout, MetaHeader } from '../../components'

const CvPage = () => (
  <Layout>
    <MetaHeader url="https://elidon.net/cv" title="janpaul.cv()" />
    <section className="content centered">
      <a href={'/cv.pdf'} download="cv jan paul stegeman.pdf">
        Download ☁️
      </a>
    </section>
  </Layout>
)

export default CvPage

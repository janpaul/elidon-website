import React from 'react'
import { Layout, MetaHeader } from '../../components'
import { DownloadIcon } from '../../components/icons'

const CvPage = () => (
  <Layout>
    <MetaHeader url="https://elidon.net/cv" title="janpaul.cv()" />
    <section className="content centered">
      <a href={'/cv.pdf'} download="cv jan paul stegeman.pdf">
        Download <DownloadIcon width={32} height={32} />
      </a>
    </section>
  </Layout>
)

export default CvPage

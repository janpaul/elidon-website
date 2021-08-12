import React from 'react'
import { Layout } from '../components'
import { DownloadIcon } from '../components/icons'

const CvPage = () => (
  <Layout url="https://elidon.net/cv" title="janpaul.cv()">
    <section className="content centered">
      <code>janpaul.cv();</code>
      <p>
        <a href={'/cv.pdf'} download="cv jan paul stegeman.pdf">
          Download <DownloadIcon width={32} height={32} />
        </a>
      </p>
    </section>
  </Layout>
)

export default CvPage

import React, { useState, useEffect } from 'react'
import { Layout, Button } from '../../components'
import { GpgIcon } from '../../components/icons'

// make sure this *always* matches /public/public.pgp
const publicKey = `
-----BEGIN PGP PUBLIC KEY BLOCK-----

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
/imb
=W9Zl
-----END PGP PUBLIC KEY BLOCK-----
`

const GpgPage = () => {
  const [hasClipboard, setHasClipboard] = useState<boolean>(false)
  const [gpgUrl, setGpgUrl] = useState<string>()
  useEffect(() => {
    setHasClipboard(!!navigator.clipboard)
  }, [])
  useEffect(() => {
    const buffer = new Blob([publicKey])
    const url = URL.createObjectURL(buffer)
    setGpgUrl(url)
  }, [])
  return (
    <Layout url="https://elidon.net/gpg" title="janpaul.gpg()">
      <section className="content centered">
        <code>janpaul.gpg();</code>
        {gpgUrl && (
          <p>
            <a href={gpgUrl} download="janpaul@hey.com-public.pgp">
              Download <GpgIcon width={32} height={32} />
            </a>
          </p>
        )}
        {hasClipboard && (
          <Button
            onClick={() => {
              navigator.clipboard &&
                navigator.clipboard.writeText(publicKey).then(() => alert('GPG key copied to clipboard'))
            }}
          >
            Copy to clipboard
          </Button>
        )}
      </section>
    </Layout>
  )
}

export default GpgPage

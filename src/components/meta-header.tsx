import React from 'react'
import Head from 'next/head'
import Config from '../config'

const { title: pageTitle, description: pageDescription } = Config

interface Props {
  url: string
  title?: string
  description?: string
  ogType?: 'website' | 'image'
}

const MetaHeader = ({ title = pageTitle, description = pageDescription, url, ogType = 'website' }: Props) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="og:description" content={description} />
    <meta name="og:url" content={url} />
    <meta name="og:type" content={ogType} />
  </Head>
)

export default MetaHeader

import Head from 'next/head'
import Config from '../config'
import React from 'react'

const { title: pageTitle, description: pageDescription } = Config

type OpenGraphType = 'website' | 'image'
interface MetaHeaderType {
  url: string
  title?: string
  description?: string
  ogType?: OpenGraphType
}

const MetaHeader = ({ title = pageTitle, description = pageDescription, url, ogType = 'website' }: MetaHeaderType) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="og:description" content={description} />
    <meta name="og:url" content={url} />
    <meta name="og:type" content={ogType} />
  </Head>
)

export default MetaHeader

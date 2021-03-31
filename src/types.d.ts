interface AnalyticsType {
  enabled: boolean
  id: string
}

declare module 'config.json' {
  const description: string
  const title: string
  const keywords: string[]
  const image: string
  const analytics: AnalyticsType
}

interface SocialType {
  twitter: string
  github: string
  reddit: string
  instagram: string
}
interface AddressType {
  street: string
  number: string
  zipcode: string
  place: string
  country: string
  w3w?: string
}
declare module 'contact.json' {
  const name: string
  const email: string
  const phone: string
  const social: SocialType
  const address: AddressType
}

declare interface AnalyticsType {
  enabled: boolean
  id: string
}
declare interface SocialType {
  twitter: string
  github: string
  reddit: string
  instagram: string
}
declare interface AddressType {
  street: string
  number: number
  zipcode: string
  place: string
  country: string
}
export declare interface ContactType {
  name: string
  email: string
  phone: string
  social: SocialType
  address: AddressType
}
export declare interface ConfigurationType {
  description: string
  title: string
  keywords: string[]
  image: string
  analytics: AnalyticsType
}

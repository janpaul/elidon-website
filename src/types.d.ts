declare interface AnalyticsType {
  enabled: boolean
  id: string
}
/* these are the only valid options for my account name ;-) */
export declare type AccountNameType = 'janpaul' | 'janpaul74'
declare interface SocialType {
  twitter: AccountNameType
  github: AccountNameType
  reddit: AccountNameType
  instagram: AccountNameType
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
declare interface FeaturesType {
  clients: boolean
  gpg: boolean
  cv: boolean
  authentication: boolean
}
export declare interface ConfigurationType {
  description: string
  title: string
  keywords: string[]
  image: string
  analytics: AnalyticsType
  features: FeaturesType
  prefersSignal: boolean
}

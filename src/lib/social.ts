import contact from '../contact'

const { phone, email } = contact

export const whatsappLink = () => `https://wa.me/${phone.replace('+', '')}`
export const signalLink = () => `sgnl://${phone}`
export const emailLink = () => `mailto:${email}`

import differenceInYears from 'date-fns/differenceInYears'

const june = 5 // 0-indexed :-(
export const getAge = (): number => differenceInYears(new Date(), new Date(1974, june, 11))

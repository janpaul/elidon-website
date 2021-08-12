import differenceInYears from 'date-fns/differenceInYears'

export const getAge = (): number => differenceInYears(new Date(), new Date(1974, 5, 11))

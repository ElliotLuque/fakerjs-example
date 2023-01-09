export type User = {
  id: string
  name: string
  lastname: string
  avatar: string
  birthDate: Date
  email: string
  phoneNumber: string
  favouriteMusicGenre: string
  originCountry: string
  address: {
    street: string
    zipcode: string
    country: string
  }
}

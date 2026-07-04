export interface User {
  name: string
  password: string
  email: string
  isSubscribed: boolean
  isAdmin: boolean
  registerDate: string
  likedPostIDs: number[]
}
export interface Content {
  id: number
  name: string
  country: string
  continent: string
  description: string

  coverImage: string
  images: string[]

  rating: number
  climate: string
  bestSeasonToVisit: string
  tags: string[]

  createdAt: string

  location: {
    lat: number
    lng: number
  }
}
/* The database for now*/

export type Event = {
  name: string
  images: string[]
}

export const events: Event[] = [
  {
    name: "Day 1",
    images: [
      "/gallery/images/placeholder2.jpg",
      "/gallery/images/placeholder2.jpg",
      "/gallery/images/placeholder2.jpg",
      "/gallery/images/placeholder2.jpg",
      "/gallery/images/placeholder2.jpg",
      "/gallery/images/placeholder2.jpg",
    ],
  },
  {
    name: "Day 2",
    images: [
      "/gallery/images/placeholder.jpg",
      "/gallery/images/placeholder.jpg",
      "/gallery/images/placeholder.jpg",
      "/gallery/images/placeholder.jpg",
      "/gallery/images/placeholder.jpg",
      "/gallery/images/placeholder.jpg",
    ],
  },
  {
    name: "Dev Day",
    images: [
      "/gallery/images/placeholder.jpg",
      "/gallery/images/placeholder2.jpg",
      "/gallery/images/placeholder.jpg",
      "/gallery/images/placeholder2.jpg",
      "/gallery/images/placeholder.jpg",
      "/gallery/images/placeholder2.jpg",
    ],
  },
]

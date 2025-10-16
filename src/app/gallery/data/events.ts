/* The database for now*/

export type Event = {
  name: string
  images: string[]
}

export const events: Event[] = [
  {
    name: "Event 1",
    images: [
      "/gallery/images/placeholder.jpg",
      "/gallery/images/placeholder2.jpg",
      "/gallery/images/placeholder.jpg",
      "/gallery/images/placeholder2.jpg",
    ],
  },
  {
    name: "Event 2",
    images: ["None for now", "None for now", "None for now", "None for now"],
  },
  {
    name: "Event 3",
    images: ["None for now", "None for now", "None for now", "None for now"],
  },
]

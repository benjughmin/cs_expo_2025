// Award Winner Types
export type AwardProps = {
  title: string
  top1: AwardeeProps
  top2: AwardeeProps
  top3: AwardeeProps
}

export type AwardeeProps = {
  groupName: string
  desc: string
  img: string
  tags: string[]
  link: string // Link to that particular project page
}

// Best Project By Category Types
export type BestProjectsProps = {
  title: string
  groupName: string
  desc: string
  tags: string[]
  img: string
  link: string // Link to that particular project page
}

import { GalleryItem } from "@/components/gallery/GalleryItem"
import { Event } from "@/app/gallery/data/events"
type Props = {
  events: Event[]
}

export function GalleryCarousel({ events }: Props) {
  return (
    <>
      {/* Map for each event plus buttons*/}
      {events.map((event) => (
        <div key={event.name} className="my-15 flex flex-col items-center">
          <div className="font-nhl text-gradient mb-10 text-8xl text-white">{event.name}</div>
          <div className="flex flex-row items-center">
            <img className="cursor-pointer" src={"/gallery/images/arrowLeft.png"} />
            {/* Map for each images to display*/}
            {event.images.map((image, index) => (
              <GalleryItem key={index} photo={image} />
            ))}
            <img className="cursor-pointer" src={"/gallery/images/arrowRight.png"} />
          </div>
        </div>
      ))}
    </>
  )
}

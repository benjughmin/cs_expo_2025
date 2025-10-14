import { GalleryItem } from "@/components/gallery/GalleryItem";
import { Event } from "@/app/gallery/data/events";

type Props = {
  events: Event[];
};

export function GalleryCarousel({ events }: Props) {
  return (
    <>
      {/* Map for each event plus buttons*/}
      {events.map((event) => (
        <div key={event.name} className="flex flex-col items-center my-15">
          <div className="text-white text-8xl mb-10 font-nhl text-gradient">
            {event.name}
          </div>
          <div className="flex flex-row items-center">
            <img
              className="cursor-pointer"
              src={"/gallery/images/arrowLeft.png"}
            />
            {/* Map for each images to display*/}
            {event.images.map((image, index) => (
              <GalleryItem key={index} photo={image} />
            ))}
            <img
              className="cursor-pointer"
              src={"/gallery/images/arrowRight.png"}
            />
          </div>
        </div>
      ))}
    </>
  );
}

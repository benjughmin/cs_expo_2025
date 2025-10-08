import { GalleryHeader } from "./components/GalleryHeader";
import { GalleryCarousel } from "./components/GalleryCarousel";
import { events } from "./data/events";
import { GalaxyBackground } from "./components/GalaxyBackground";

export default function Gallery() {
  return (
    <>
      <GalaxyBackground />
      <div className="relative min-h-screen w-full">
        <GalleryHeader />
        <GalleryCarousel events={events} />
      </div>
    </>
  );
}

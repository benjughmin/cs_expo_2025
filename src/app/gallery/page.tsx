import { GalleryHeader } from "@/components/gallery/GalleryHeader";
import { GalleryCarousel } from "@/components/gallery/GalleryCarousel";
import { events } from "./data/events";
import { GalaxyBackground } from "@/components/gallery/GalaxyBackground";

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

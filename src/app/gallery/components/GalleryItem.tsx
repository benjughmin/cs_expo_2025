import { Event } from "../data/events";

type ImageProps = {
  photo: string;
};

export function GalleryItem({ photo }: ImageProps) {
  return (
    <div className="relative w-[300px] h-[300px] mx-2">
      <img
        src={photo}
        alt="Image"
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
      />

      <img
        src="/gallery/images/image-container.png"
        alt="Container"
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}

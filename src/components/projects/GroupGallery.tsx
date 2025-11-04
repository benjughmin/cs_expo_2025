import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type GroupGalleryProps = {
  details: {
    groupName: string;
    groupMembers: string[];
    photoshoot: string[];
  };
};

const shimmer =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxIDEnPjxyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIGZpbGw9JyNFNUU3RUInLz48L3N2Zz4=";

export default function GroupGallery({ details }: GroupGalleryProps) {
  return (
    // Gallery Header
    <div className="flex flex-col items-center justify-center text-center">
      <h1
        className="font-monster text-center text-gradient text-2xl mt-20 leading-[100px] -tracking-[2px] md:text-8xl lg:text-[96px] px-6 overflow-visible"
        style={
          {
            "--gradient-stop": "35%",
            "--gradient-pink": "60%",
          } as React.CSSProperties
        }
      >
        Gallery
      </h1>
      <div className="w-full max-w-6xl mx-auto border-t border-white mt-6"></div>
      <div className="w-full max-w-4xl px-24 mt-12 mb-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          {/* Image PlaceHolder */}
          <div className="rounded-lg overflow-hidden relative">
            <CarouselContent>
              {details.photoshoot.map((photoUrl, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-[3/2] relative">
                    <Image
                      src={'/projects/placeholderheader.png'} // To be replaced by actual values
                      alt={`${details.groupName} gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL={shimmer}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>

          {/* Navigation buttons */}
          <CarouselPrevious className="-left-20" />
          <CarouselNext className="-right-20" />
        </Carousel>

        {/* Caption */}
        <h2
          className="text-2xl mb-6 mt-6 text-center font-avolta z-10"
          style={{
            letterSpacing: "4px",
            color: "#ffffff",
            textShadow: "0 0 6px rgba(255, 255, 255, 0.8)",
          }}
        >
          Caption
        </h2>
      </div>
    </div>
  );
}
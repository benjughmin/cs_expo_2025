import { GalleryItem } from "@/components/gallery/GalleryItem"
import { Event } from "@/app/gallery/data/events"
import { useState, useRef, useEffect } from "react"

type Props = {
  events: Event[]
}

export function GalleryCarousel({ events }: Props) {
  return (
    <>
      {events.map((event) => (
        <CarouselSection key={event.name} event={event} />
      ))}
    </>
  )
}

function CarouselSection({ event }: { event: Event }) {
  const [isPaused, setIsPaused] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const duplicatedImages = [...event.images, ...event.images]

  //speed scaling (about SOMETHING seconds per original image)
  const durationSec = Math.max(10, Math.min(120, event.images.length * 15))

  // Detect when carousel is visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.8,
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  const shouldPause = !isVisible || isPaused

  return (
    <div className="mb-14 flex flex-col items-center sm:mb-16 lg:mb-20">
      <div className="font-nhl text-gradient mb-6 px-4 text-center text-4xl sm:mb-10 sm:text-5xl md:text-6xl lg:mb-14 lg:text-7xl xl:text-8xl">
        {event.name}
      </div>

      <div className="relative mx-auto flex w-full max-w-[1600px] items-center gap-2 px-2 sm:gap-4 sm:px-4">
        <button
          aria-label="Previous"
          className="shrink-0 rounded-md p-1 transition hover:opacity-90 focus:ring-2 focus:ring-white/40 focus:outline-none active:scale-95 sm:p-2"
        >
          <img
            src="/gallery/images/arrowLeft.png"
            className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20"
            alt=""
            aria-hidden="true"
            draggable={false}
          />
        </button>

        <div
          ref={containerRef}
          role="region"
          aria-roledescription="carousel"
          aria-label={`${event.name} carousel`}
          className="group relative mx-auto w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`animate-slide-left inline-flex w-max gap-3 sm:gap-0 ${shouldPause ? "animation-pause" : ""}`}
            style={{ ["--slide-duration" as any]: `${durationSec}s` }}
          >
            {duplicatedImages.map((image, index) => (
              <div key={index} className="flex-shrink-0">
                <GalleryItem photo={image} />
              </div>
            ))}
          </div>
        </div>

        <button
          aria-label="Next"
          className="shrink-0 rounded-md p-1 transition hover:opacity-90 focus:ring-2 focus:ring-white/40 focus:outline-none active:scale-95 sm:p-2"
        >
          <img
            src="/gallery/images/arrowRight.png"
            className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20"
            alt=""
            aria-hidden="true"
            draggable={false}
          />
        </button>
      </div>
    </div>
  )
}

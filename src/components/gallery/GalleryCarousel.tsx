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
    <div className="mb-20 flex flex-col items-center">
      <div className="font-nhl text-gradient mb-15 text-8xl">{event.name}</div>

      <div className="relative flex w-[95vw] flex-row">
        <button aria-label="Previous">
          <img src="/gallery/images/arrowLeft.png" className="h-20 w-50" />
        </button>

        <div
          ref={containerRef}
          className="group relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`animate-slide-left flex ${shouldPause ? "animation-pause" : ""}`}
            style={{ ["--slide-duration" as any]: `20s` }}
          >
            {duplicatedImages.map((image, index) => (
              <div key={index} className="flex-shrink-0">
                <GalleryItem photo={image} />
              </div>
            ))}
          </div>
        </div>

        <button aria-label="Next">
          <img src="/gallery/images/arrowRight.png" className="h-20 w-50" />
        </button>
      </div>
    </div>
  )
}

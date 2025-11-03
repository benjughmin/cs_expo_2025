import { GalleryItem } from "@/components/gallery/GalleryItem"
import { Event } from "@/app/gallery/data/events"
import { useState, useRef, useEffect, useCallback } from "react"

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
  const trackRef = useRef<HTMLDivElement>(null)

  // manual offset (px) applied on a wrapper around the animated track
  const [offsetPx, setOffsetPx] = useState(0)

  // one "step" ≈ width of one card + gap, measured dynamically
  const [stepPx, setStepPx] = useState(0)

  // half track width (since images are duplicated) used for normalization
  const [halfTrackPx, setHalfTrackPx] = useState(0)

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

  // Utility: keep offset within [-halfTrackPx, 0] for seamless infinite loop
  const normalizeOffset = useCallback((value: number, base: number) => {
    if (!base) return value
    // bring into [0, base)
    let v = ((value % base) + base) % base
    // map to [-base, 0)
    return v === 0 ? 0 : v - base
  }, [])

  // Measure step (one card + gap) and half track width
  const measure = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    const styles = getComputedStyle(track)
    // For a horizontal flex row, the "gap" is the column gap
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0

    const firstChild = track.children[0] as HTMLElement | undefined
    const itemWidth = firstChild?.getBoundingClientRect().width ?? 0

    const nextStep = Math.max(0, itemWidth + gap)
    const nextHalfTrack = Math.max(0, Math.floor(track.scrollWidth / 2))

    // Apply new measurements and normalize offset against new base
    setStepPx(nextStep)
    setHalfTrackPx(nextHalfTrack)
    setOffsetPx((prev) => normalizeOffset(prev, nextHalfTrack))
  }, [normalizeOffset])

  // Observe size changes for robust measurement
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Initial measurement (after paint)
    const raf = requestAnimationFrame(measure)

    // ResizeObserver to re-measure when content/layout changes
    const ro = new ResizeObserver(() => measure())
    ro.observe(track)

    // Re-measure on window resize as a fallback
    const onResize = () => measure()
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener("resize", onResize)
    }
  }, [measure, duplicatedImages.length])

  const onNext = useCallback(() => {
    // Advance in the direction of the animation (left)
    setOffsetPx((prev) => normalizeOffset(prev - (stepPx || 0), halfTrackPx))
  }, [stepPx, halfTrackPx, normalizeOffset])

  const onPrev = useCallback(() => {
    // Go against the animation (right)
    setOffsetPx((prev) => normalizeOffset(prev + (stepPx || 0), halfTrackPx))
  }, [stepPx, halfTrackPx, normalizeOffset])

  return (
    <div className="mb-14 flex flex-col items-center sm:mb-16 lg:mb-20">
      <div className="font-nhl text-gradient mb-6 px-4 text-center text-4xl sm:mb-10 sm:text-5xl md:text-6xl lg:mb-14 lg:text-7xl xl:text-8xl">
        {event.name}
      </div>

      <div className="relative mx-auto flex w-full items-center gap-2 px-2 sm:gap-4 sm:px-4">
        <button
          type="button"
          aria-label="Previous"
          onClick={onPrev}
          className="inline-flex items-center justify-center p-0 leading-none transition active:scale-90"
        >
          <img
            src="/gallery/images/arrowLeft.png"
            className="m-0 block h-10 w-10 p-0 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20"
            alt=""
            aria-hidden="true"
            draggable={false}
          />
        </button>

        <div
          ref={containerRef}
          aria-label={`${event.name} carousel`}
          className="group relative mx-auto w-full overflow-hidden p-2.5"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* wrapper that applies a manual offset without touching the animation */}
          <div
            className="inline-flex w-max will-change-transform"
            style={{
              transform: `translateX(${offsetPx}px)`,
              transition: "transform 280ms ease-out",
            }}
          >
            <div
              ref={trackRef}
              className={`animate-slide-left inline-flex w-max gap-3 sm:gap-0 ${shouldPause ? "animation-pause" : ""}`}
              style={{ ["--slide-duration" as any]: `${durationSec}s` }}
            >
              {duplicatedImages.map((image, index) => (
                <div key={index} className="flex-shrink-0 transition-transform hover:scale-105">
                  <GalleryItem photo={image} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-label="Next"
          onClick={onNext}
          className="inline-flex items-center justify-center p-0 leading-none transition active:scale-90"
        >
          <img
            src="/gallery/images/arrowRight.png"
            className="m-0 block h-10 w-10 p-0 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20"
            alt=""
            aria-hidden="true"
            draggable={false}
          />
        </button>
      </div>
    </div>
  )
}

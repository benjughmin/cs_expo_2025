"use client"

import { AwardProps } from "../types/hof.types"
import { AwardeeCard } from "./AwardeeCard"
import { useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

// accepts award parameter of type AwardProps
export function AwardeeBlock({ award, alt }: { award: AwardProps; alt: boolean }) {
  // Convert to array if needed and flatten
  const top1Array = Array.isArray(award.top1) ? award.top1 : [award.top1]
  const top2Array = Array.isArray(award.top2) ? award.top2 : [award.top2]
  const top3Array = Array.isArray(award.top3) ? award.top3 : [award.top3]

  const totalCards = top1Array.length + top2Array.length + top3Array.length

  // Combine all cards with their ranks for mobile slider
  const allCards = [
    ...top1Array.map((awardee) => ({ awardee, rank: "1ST" })),
    ...top2Array.map((awardee) => ({ awardee, rank: "2ND" })),
    ...top3Array.map((awardee) => ({ awardee, rank: "3RD" })),
  ]

  // Carousel API state
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <>
      <section className="flex w-full flex-col items-center gap-6 bg-[#0f0019] px-4 py-10 text-white sm:gap-8 sm:px-6 sm:py-12 lg:py-16">
        {/* Title */}
        <div className="relative mb-6 w-full sm:mb-8 lg:mb-10">
          {/* Glow Effect */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[80px] w-[300px] rounded-full bg-[radial-gradient(circle_at_center,#FF00DC_0%,transparent_70%)] opacity-30 blur-[50px] sm:h-[100px] sm:w-[400px] sm:blur-[60px] lg:h-[120px] lg:w-[500px] lg:blur-[80px]"></div>
          </div>

          {/* Shadow layer */}
          <h1 className="font-monster relative z-0 w-full text-center text-3xl leading-tight font-black uppercase text-shadow-[#FF00DC] text-shadow-lg sm:text-4xl sm:leading-tight md:text-5xl lg:text-[56px] lg:leading-[64px]">
            {award.title}
          </h1>
          {/* Gradient layer */}
          <h1 className="font-monster absolute inset-0 z-10 w-full bg-gradient-to-b from-white from-35% via-[#FF00DC] via-50% to-white to-75% bg-clip-text text-center text-3xl leading-tight font-black text-transparent uppercase sm:text-4xl sm:leading-tight md:text-5xl lg:text-[56px] lg:leading-[64px]">
            {award.title}
          </h1>
        </div>

        {/* Mobile Carousel View */}
        <div className="block w-full max-w-md sm:hidden">
          <Carousel opts={{ loop: true }} setApi={setApi}>
            <CarouselContent>
              {allCards.map((card, index) => (
                <CarouselItem key={index}>
                  <AwardeeCard awardee={card.awardee} alt={alt} rank={card.rank} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center gap-6 py-4 select-none">
              {/* Previous Button */}
              <CarouselPrevious className="static translate-x-0 translate-y-0" />

              {/* Page Tracker */}
              <div className="relative flex items-center gap-2">
                {allCards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className="relative z-10 transition-all duration-300"
                    style={{
                      width: index === current ? "28px" : "8px",
                      height: "8px",
                      borderRadius: index === current ? "4px" : "50%",
                      backgroundColor:
                        index === current ? (alt ? "#FF37E3" : "#8A38F5") : "rgba(255,255,255,0.4)",
                      boxShadow:
                        index === current
                          ? alt
                            ? "0 0 12px rgba(255,55,227,0.6)"
                            : "0 0 12px rgba(138,56,245,0.6)"
                          : "none",
                    }}
                    aria-label={`Go to card ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <CarouselNext className="static translate-x-0 translate-y-0" />
            </div>
          </Carousel>
        </div>

        {/* Desktop Grid Layout */}
        <div
          className="hidden w-full max-w-6xl items-start gap-4 sm:grid sm:gap-5 md:gap-6"
          style={{
            gridTemplateColumns: `repeat(${totalCards}, minmax(0, 1fr))`,
          }}
        >
          {/* Render all 1st place winners */}
          {top1Array.map((awardee, index) => (
            <AwardeeCard key={`1st-${index}`} awardee={awardee} alt={alt} rank="1ST" />
          ))}

          {/* Render all 2nd place winners */}
          {top2Array.map((awardee, index) => (
            <AwardeeCard key={`2nd-${index}`} awardee={awardee} alt={alt} rank="2ND" />
          ))}

          {/* Render all 3rd place winners */}
          {top3Array.map((awardee, index) => (
            <AwardeeCard key={`3rd-${index}`} awardee={awardee} alt={alt} rank="3RD" />
          ))}
        </div>
      </section>
    </>
  )
}

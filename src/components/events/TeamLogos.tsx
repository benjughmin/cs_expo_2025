"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useState } from "react";
import groupsData from "@/data/groups"; // your existing data file

export default function TeamLogos() {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  // Extract all team logos from groupsData
  const logos = groupsData
    .map((group) => ({
      name: group.group_name,
      logo: group.group_logo,
    }))
    .filter((g) => g.logo);

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: false,
      dragFree: true,
    },
    [AutoScroll({ playOnInit: true, speed: 1.2, stopOnInteraction: false })]
  );

  const handleImageError = (index: number) => {
    const group = logos[index % logos.length]; // wrap around repeated array
    console.warn(`⚠️ Failed to load logo for team: ${group.name}`);
    setImageErrors((prev) => new Set(prev).add(index));
  };

  // Repeat logos for infinite scrolling
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <section className="relative z-10 w-full overflow-hidden py-8">
      <div className="w-full" ref={emblaRef}>
        <div className="flex items-center gap-7 px-12">
          {allLogos.map((group, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ height: "125px" }}
            >
              {imageErrors.has(index) ? (
                <div className="w-[250px] h-full flex items-center justify-center bg-slate-200 rounded-lg">
                  <span className="text-slate-400 text-xs">
                    {group.name || "Logo"}
                  </span>
                </div>
              ) : (
                <img
                  src={group.logo}
                  alt={`${group.name} logo`}
                  onError={() => handleImageError(index)}
                  className="h-full w-auto object-contain transition-transform duration-300 ease-out will-change-transform"
                  style={{ transform: "translateZ(0)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.15) translateZ(0)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1) translateZ(0)";
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

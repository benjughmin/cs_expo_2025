"use client"
import { useState } from "react"

export default function CategoryFilters() {
  const categories = [
    "Natural Language Processing",
    "Medicine & Health",
    "Computer Vision",
    "Environment",
    "Education",
    "Agriculture",
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="w-full pb-8 flex flex-wrap items-center justify-center gap-10 mb-8 -mt-8 relative z-10">
      {categories.map((category, index) => {
        const isActive = activeIndex === index

        return (
          <button
            key={index}
            onClick={() => setActiveIndex(isActive ? null : index)}
            className={`
    min-w-[141px] px-2 font-bold h-[30px] text-xs rounded-[8px] transition-all whitespace-nowrap
    ${isActive
                ? 'bg-transparent text-[#ff00dc] border border-[#ff00dc]'
                : 'text-white border border-white hover:bg-[#ff00dc] hover:text-white hover:border-[#ff00dc]'
              }
  `}
          >
            {category}
          </button>
        )
      })}
    </section>
  )
}
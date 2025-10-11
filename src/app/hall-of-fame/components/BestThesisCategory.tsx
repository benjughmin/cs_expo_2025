"use client"

import Image from "next/image"
import { BestProjects } from "../data/BestProjectsData"
import { usePagination } from "../hooks/paginationHook"
import clsx from "clsx"

export function BestThesisCategory() {
  const { handleNext, handlePrev, currentPage } = usePagination(BestProjects) // Pagination hook

  return (
    <section className="relative flex h-screen w-full flex-col overflow-hidden bg-black pb-5">
      {/* Section Header */}
      <div className="flex h-[15%] items-center justify-center px-8">
        <h1 className="text-center text-5xl font-black text-white italic">
          BEST THESIS BY CATEGORY
        </h1>
      </div>

      {/* Shows project per index, changes per pagination */}
      <div key={BestProjects[currentPage].title} className="flex h-[85%]">
        {/* Left Side - Image */}
        <div className="relative w-2/5">
          <Image
            src={BestProjects[currentPage].img}
            alt={BestProjects[currentPage].title}
            fill
            className="object-cover"
            quality={100}
            priority
            sizes="40vw"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex w-3/5 items-center justify-center">
          <div className="flex w-full max-w-3xl -translate-y-15 items-center justify-center text-white">
            {/* Previous Button */}
            <div className="group flex w-[50px] justify-center">
              <Image
                src="/HOF/prevBtn.png"
                alt="Previous button"
                width={50}
                height={51}
                className={clsx(
                  "cursor-pointer object-contain transition-all duration-300 select-none group-hover:scale-115", //placeholder hover anim
                  currentPage === 0 && "invisible"
                )}
                onClick={handlePrev}
                quality={100}
                priority
              />
            </div>

            <div className="mx-5 flex-1">
              {/* TODO: change to leading-[50px] (Figma value) once the custom font is loaded - currently using leading-none to better match figma prototype with default font */}
              {/* Project Title */}
              <h2 className="m-0 text-left text-[96px] leading-none font-black italic">
                {BestProjects[currentPage].title}
              </h2>

              {/* Group Name */}
              <h3 className="m-0 mt-2 text-left text-[36px] leading-[50px] font-black">
                {BestProjects[currentPage].groupName}
              </h3>

              {/* Description */}
              <p className="m-0 mt-2 text-left text-[24px] leading-[20px] font-light">
                {BestProjects[currentPage].desc}
              </p>

              {/* Tags */}
              <p className="m-0 mt-2 mb-10 text-left text-[14px] leading-[20px] font-light text-white/50">
                {BestProjects[currentPage].tags.join(" | ")}
              </p>

              {/* Button */}
              <a
                href={BestProjects[currentPage].link}
                className="block w-full rounded-full border p-4 py-8 text-center hover:bg-white hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>

            {/* Next Button*/}
            <div className="group flex w-[50px] justify-center">
              <Image
                src="/HOF/nextBtn.png"
                alt="Next button"
                width={50}
                height={51}
                className={clsx(
                  "cursor-pointer object-contain transition-all duration-300 select-none group-hover:scale-115", //placeholder hover anim
                  BestProjects.length - 1 === currentPage && "invisible"
                )}
                onClick={handleNext}
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

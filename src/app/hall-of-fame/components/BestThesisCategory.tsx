import Image from "next/image"
import { BestProjects } from "../data/BestProjectsData"

export function BestThesisCategory() {
  return (
    <section className="relative flex h-screen w-full flex-col overflow-hidden bg-black pb-5">
      {/* Section Header */}
      <div className="flex h-[15%] items-center justify-center px-8">
        <h1 className="text-center text-5xl font-black text-white italic">
          BEST THESIS BY CATEGORY
        </h1>
      </div>

      {/* Loop through the best projects of each category */}
      {BestProjects.map((project) => (
        <div key={project.title} className="flex h-[85%]">
          {/* Left Side - Image */}
          <div className="relative w-2/5">
            <Image
              src={project.img}
              alt="Mentor image"
              fill
              className="object-cover"
              quality={100}
              priority
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex w-3/5 items-center justify-center">
            <div className="flex w-auto max-w-3xl -translate-y-15 items-center justify-center text-white">
              <Image
                src="/HOF/prevBtn.png"
                alt="Previous button"
                width={50}
                height={51}
                className="object-contain"
                quality={100}
                priority
              />

              <div className="mx-5 text-center">
                {/* TODO: change to leading-[50px] (Figma value) once the custom font is loaded - currently using leading-none to better match figma prototype with default font */}
                {/* Project Title */}
                <h2 className="m-0 text-left text-[96px] leading-none font-black italic">
                  {project.title}
                </h2>

                {/* Group Name */}
                <h3 className="m-0 mt-2 text-left text-[36px] leading-[50px] font-black">
                  {project.groupName}
                </h3>

                {/* Description */}
                <p className="m-0 mt-2 text-left text-[24px] leading-[20px] font-light">
                  {project.desc}
                </p>

                {/* Tags */}
                <p className="m-0 mt-2 mb-10 text-left text-[14px] leading-[20px] font-light text-white/50">
                  {project.tags.join(" | ")}
                </p>

                {/* Button */}
                <a
                  href={project.link}
                  className="block w-auto rounded-full border p-4 py-8 text-center hover:bg-white hover:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>

              <Image
                src="/HOF/nextBtn.png"
                alt="Next button"
                width={50}
                height={51}
                className="object-contain"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

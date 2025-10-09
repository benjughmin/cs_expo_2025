import { AwardeeProps } from "../types/hof.types"
import clsx from "clsx"
import Image from "next/image"

// accepts award parameter of type AwardProps
export function AwardeeCard({
  awardee,
  alt,
  rank,
}: {
  awardee: AwardeeProps
  alt: boolean
  rank: string
}) {
  return (
    <>
      <div
        className={clsx(
          "group relative flex min-h-[550px] flex-1 flex-col items-center rounded-lg bg-gradient-to-t from-black from-75% p-6 pt-12 pb-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-md",
          alt ? "to-[#FF00DC] hover:shadow-[#FF00DC]" : "to-[#450CA2] hover:shadow-[#8A38F5]"
        )}
      >
        {/* Rank */}
        <span
          className={clsx(
            "absolute top-4 -translate-y-12 text-[40px] text-white italic group-hover:text-shadow-lg",
            alt ? "group-hover:text-shadow-[#FF00DC]" : "group-hover:text-shadow-[#8A38F5]"
          )}
        >
          {rank}
        </span>

        {/* Image container */}
        <div className="relative h-[300px] w-full flex-shrink-0 overflow-hidden rounded-lg bg-white">
          <Image
            src={awardee.img}
            alt="Mentor image"
            fill
            className="object-fll"
            quality={100}
            priority
          />
        </div>

        {/* Text contents */}
        <div className="mt-10 flex w-full flex-1 flex-col">
          <div className="flex text-[24px] leading-[50px]">
            <p>{awardee.groupName}</p>
          </div>
          <div className="flex flex-1 flex-col">
            <p className="text-[24px] leading-[20px] font-light">{awardee.desc}</p>
            <p className="mt-2 mb-4 text-[14px] leading-[20px] font-light text-white/50">
              {awardee.tags.join(" | ")}
            </p>

            {/* Button */}
            <a
              href={awardee.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto block w-full rounded-full border py-2 text-center hover:bg-white hover:text-black"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

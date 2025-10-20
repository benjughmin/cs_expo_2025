import { AwardeeProps } from "../types/hof.types"
import clsx from "clsx"
import Image from "next/image"
import { LiaLongArrowAltRightSolid } from "react-icons/lia"

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
          alt ? "to-[#6E005F] hover:shadow-[#FF00DC]" : "to-[#450CA2] hover:shadow-[#8A38F5]"
        )}
      >
        {/* Rank */}
        {/* I made 2 layers for shadow/border and gradients since gradients require the `text-transparent` and the shadow to be behind it so I created the same text layer but with a non-transparent color; also if i apply text stroke directly in the gradient it messes up the design */}
        <span className="absolute top-4 -translate-y-11">
          {/* Shadow/Border layer */}
          <span
            className={clsx(
              "font-monster relative z-0 px-2 text-[40px] leading-[50px] text-black transition-all duration-300 group-hover:text-shadow-lg"
              // alt ? "group-hover:text-shadow-[#FF00DC]" : "group-hover:text-shadow-[#8A38F5]", // Still figuring out how to properly apply text-shadow cause the textstroke is blocking it
            )}
            style={{ WebkitTextStroke: "10px black" }} // used 10px instead of 5px (figma val) to better match the prototype, since i made a separate layer for it
          >
            {rank}
          </span>

          {/* Gradient layer */}
          <span
            className={clsx(
              "font-monster absolute inset-0 z-10 bg-gradient-to-b from-white from-2% to-white to-80% bg-clip-text px-2 text-[40px] leading-[50px] text-transparent",
              rank === "1ST" && "via-[#FFBB00] via-30%",
              rank === "2ND" && "via-[#958888] via-50%",
              rank === "3RD" && "via-[#E55F37] via-50%"
            )}
          >
            {rank}
          </span>
        </span>

        {/* Image container */}
        <div className="relative h-[300px] w-full flex-shrink-0 overflow-hidden rounded-lg bg-white">
          <Image
            src={awardee.img}
            alt={awardee.groupName}
            fill
            className="object-cover"
            quality={100}
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Text contents */}
        <div className="mt-10 flex w-full flex-1 flex-col">
          <div className="font-monster flex text-[24px] leading-[50px]">
            <p>{awardee.groupName}</p>
          </div>

          {/* Description */}
          <div className="flex flex-1 flex-col">
            <p className="text-[24px] leading-[20px] font-light">{awardee.desc}</p>

            {/* Tags */}
            <p className="mt-2 mb-4 text-[14px] leading-[20px] font-light text-white/50">
              {awardee.tags.join(" | ")}
            </p>

            {/* Button */}
            <a
              href={awardee.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-helvetica mt-auto block w-full rounded-full border-2 py-2 text-center font-light hover:bg-white hover:text-black"
            >
              Learn More <LiaLongArrowAltRightSolid className="mb-1 inline-block text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

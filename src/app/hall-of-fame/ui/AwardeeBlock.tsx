import { AwardProps } from "../types/hof.types"
import { AwardeeCard } from "./AwardeeCard"

// accepts award parameter of type AwardProps
export function AwardeeBlock({ award, alt }: { award: AwardProps; alt: boolean }) {
  return (
    <>
      <section className="flex w-full flex-col items-center gap-6 bg-[#0f0019] to-[4%] p-4 pt-10 text-white">
        {/* Title */}
        {/* I made 2 layers for shadow and gradients since gradients require the `text-transparent` and the shadow to be behind it so I created the same text layer but with a non-transparent color */}
        <div className="relative mb-10 w-full">
          {/* Shadow layer */}
          <h1 className="font-monster relative z-0 w-full text-center text-[40px] leading-[50px] font-black uppercase text-shadow-[#FF00DC] text-shadow-lg">
            {award.title}
          </h1>
          {/* Gradient layer */}
          <h1 className="font-monster absolute inset-0 z-10 w-full bg-gradient-to-b from-white from-35% via-[#FF00DC] via-50% to-white to-75% bg-clip-text text-center text-[40px] leading-[50px] font-black text-transparent uppercase">
            {award.title}
          </h1>
        </div>

        <div className="flex w-full max-w-6xl flex-col items-stretch gap-4 sm:flex-row">
          {/* Top1 */}
          <AwardeeCard awardee={award.top1} alt={alt} rank="1ST" />

          {/* Top2 */}
          <AwardeeCard awardee={award.top2} alt={alt} rank="2ND" />

          {/* Top3 */}
          <AwardeeCard awardee={award.top3} alt={alt} rank="3RD" />
        </div>
      </section>
    </>
  )
}

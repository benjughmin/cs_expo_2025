import { AwardProps } from "../types/hof.types"
import { AwardeeCard } from "./AwardeeCard"

// accepts award parameter of type AwardProps
export function AwardeeBlock({ award, alt }: { award: AwardProps; alt: boolean }) {
  return (
    <>
      <section className="flex flex-col items-center gap-6 bg-black p-4 pt-10 text-white">
        {/* Title */}
        <h1 className="bg-gradient-to-b from-white from-35% via-[#FF00DC] via-50% to-white to-70% bg-clip-text text-[40px] leading-[50px] font-black text-transparent uppercase italic">
          {award.title}
        </h1>

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

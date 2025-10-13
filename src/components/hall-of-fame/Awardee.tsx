import { AwardeeBlock } from "../../app/hall-of-fame/ui/AwardeeBlock"
import { AwardData } from "../../app/hall-of-fame/data/AwardeeData"

export function Awardee() {
  return (
    <>
      {/* Loops through the AwardData and Passes them to the AwardeeBlock component */}
      {AwardData.map((award, index) => (
        <AwardeeBlock key={index} award={award} alt={index % 2 === 0} /> // 'alt' is used to apply alternating styles between award sections
      ))}
    </>
  )
}

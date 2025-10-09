import { BestThesisCategory } from "./components/BestThesisCategory"
import { BestThesisMentor } from "./components/BestThesisMentor"
import { HOFHero } from "./components/HallOfFameHero"
import { Awardee } from "./components/Awardee"

export default function HallOfFamePage() {
  return (
    <>
      <HOFHero />
      <Awardee />
      <BestThesisCategory />
      <BestThesisMentor />
    </>
  )
}

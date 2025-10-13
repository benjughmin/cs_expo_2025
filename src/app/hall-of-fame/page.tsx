import { BestThesisCategory } from "./components/BestThesisCategory"
import { BestThesisMentor } from "./components/BestThesisMentor"
import { HOFHero } from "./components/HallOfFameHero"
import { Awardee } from "./components/Awardee"
import { ProjectsHero } from "./ui/ProjectsHero"

export default function HallOfFamePage() {
  return (
    <>
      <ProjectsHero
        pageTitle="Hall Of Fame"
        pageDesc="Join the first day of CS EXPO, as bright fourth-year students present their innovative theses with topics regarding data analytics, health, and natural language processing. Under the data analytics category are groups Agatha, LMNTRX, and Strawhats. For the health category, Code Geass, Hurtz, Lorem Ipsum, and Samsan. Lastly, for the natural language processing category are the thesis groups Codex, Ctrl Alt Delete, EnSys, Jathro's Matrix, and LMDIFY."
      />
      <Awardee />
      <BestThesisCategory />
      <BestThesisMentor />
    </>
  )
}

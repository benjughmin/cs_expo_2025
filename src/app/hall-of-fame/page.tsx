import { BestThesisCategory } from "../../components/hall-of-fame/BestThesisCategory"
import { BestThesisMentor } from "../../components/hall-of-fame/BestThesisMentor"
import { Awardee } from "../../components/hall-of-fame/Awardee"
import { ProjectsHero } from "./ui/ProjectsHero"
import Navbar from "@/components/global/nav-bar"
import Footer from "@/components/global/F]ooter"
import Image from "next/image"
export default function HallOfFamePage() {
  return (
    <>
      {/* Nav */}
      <header className="top-0 right-0 left-0 z-50 bg-[#0D0D0D]">
        <Navbar />

        <ProjectsHero
          pageTitle="Hall Of Fame"
          pageDesc="Join the first day of CS EXPO, as bright fourth-year students present their innovative theses with topics regarding data analytics, health, and natural language processing. Under the data analytics category are groups Agatha, LMNTRX, and Strawhats. For the health category, Code Geass, Hurtz, Lorem Ipsum, and Samsan. Lastly, for the natural language processing category are the thesis groups Codex, Ctrl Alt Delete, EnSys, Jathro's Matrix, and LMDIFY."
        />
      </header>

      {/* HOF Sections */}
      <main className="relative">
        {/* Star widgets */}
        {/* note: there are some inconsistencies in the star widget positioning across browsers, tho very minor lang, around y-axis yung mga inconsistencies base sa mga naobserve ko... I'm open for other suggestions or methods para gawing mas consistent, or if okay lang ba na may minor difference sa positioning */}
        {/* used figma top/val vals except 2nd/4th star */}

        <Awardee />
        <BestThesisCategory />
        <BestThesisMentor />
      </main>
      <Footer />
    </>
  )
}

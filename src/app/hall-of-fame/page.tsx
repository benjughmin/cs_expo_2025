import { BestThesisCategory } from "../../components/hall-of-fame/BestThesisCategory"
import { BestThesisMentor } from "../../components/hall-of-fame/BestThesisMentor"
import { Awardee } from "../../components/hall-of-fame/Awardee"
import { ProjectsHero } from "./ui/ProjectsHero"
import Navbar from "@/components/global/nav-bar"
import Footer from "@/components/global/footer"
import Image from "next/image"
export default function HallOfFamePage() {
  return (
    <div className="bg-[#0f0019]">
      {/* Nav */}
      <header className="top-0 right-0 left-0 z-50 bg-[#0D0D0D]">
        <Navbar />

        <ProjectsHero
          pageTitle="Hall Of Fame"
          pageDesc="Join the first day of CS EXPO, as bright fourth-year students present their innovative theses with topics regarding data analytics, health, and natural language processing. Under the data analytics category are groups Agatha, LMNTRX, and Strawhats. For the health category, Code Geass, Hurtz, Lorem Ipsum, and Samsan. Lastly, for the natural language processing category are the thesis groups Codex, Ctrl Alt Delete, EnSys, Jathro's Matrix, and LMDIFY."
        />
      </header>
      {/* gradient transition */}
      <div className="h-40 w-full bg-gradient-to-b from-[#0D0D0D] from-[0%] to-[#0F0019] to-[90%]"></div>
      {/* HOF Sections */}
      <main className="relative">
        <Awardee />
        <BestThesisCategory />
        <BestThesisMentor />
      </main>
      <Footer />
    </div>
  )
}

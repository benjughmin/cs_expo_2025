import { BestThesisCategory } from "../../components/hall-of-fame/BestThesisCategory"
import { BestThesisMentor } from "../../components/hall-of-fame/BestThesisMentor"
import { Awardee } from "../../components/hall-of-fame/Awardee"
import { ProjectsHero } from "./ui/ProjectsHero"
import Navbar from "@/components/global/nav-bar"
import Footer from "@/components/global/footer"
import Image from "next/image"
export default function HallOfFamePage() {
  return (
    <>
      {/* Star widgets */}
      <div className="absolute top-[133px] left-[100px] z-20 hidden translate-x-[12%] -translate-y-[5%] lg:block">
        <Image src="/HOF/star.svg" alt="star widget" width={388} height={421} quality={100} />
      </div>
      <div className="absolute top-[899px] left-[1131px] z-20 hidden lg:block">
        <Image src="/HOF/star.svg" alt="star widget" width={388} height={421} quality={100} />
      </div>
      <div className="absolute top-[1845px] left-[-171px] z-20 hidden -translate-y-[20%] lg:block">
        <Image src="/HOF/star.svg" alt="star widget" width={388} height={421} quality={100} />
      </div>
      <div className="absolute top-[2960px] left-[1117px] z-20 hidden -translate-y-[100%] lg:block">
        <Image src="/HOF/star.svg" alt="star widget" width={388} height={421} quality={100} />
      </div>

      {/* Nav */}
      <header className="bg-black">
        <Navbar />
      </header>

      {/* HOF Sections */}
      <main>
        <ProjectsHero
          pageTitle="Hall Of Fame"
          pageDesc="Join the first day of CS EXPO, as bright fourth-year students present their innovative theses with topics regarding data analytics, health, and natural language processing. Under the data analytics category are groups Agatha, LMNTRX, and Strawhats. For the health category, Code Geass, Hurtz, Lorem Ipsum, and Samsan. Lastly, for the natural language processing category are the thesis groups Codex, Ctrl Alt Delete, EnSys, Jathro's Matrix, and LMDIFY."
        />
        <Awardee />
        <BestThesisCategory />
        <BestThesisMentor />
      </main>
      <Footer />
    </>
  )
}

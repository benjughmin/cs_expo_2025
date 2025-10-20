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
      {/* Nav */}
      <header className="bg-black">
        <Navbar />
      </header>

      {/* HOF Sections */}
      <main className="relative">
        {/* Star widgets */}
        {/* note: there are some inconsistencies in the star widget positioning across browsers, tho very minor lang, around y-axis yung mga inconsistencies base sa mga naobserve ko... I'm open for other suggestions or methods para gawing mas consistent, or if okay lang ba na may minor difference sa positioning */}
        {/* used figma top/val vals except 2nd/4th star */}
        <div className="pointer-events-none absolute top-[133px] left-[100px] z-20 hidden translate-x-[12%] -translate-y-[35%] lg:block">
          <Image src="/HOF/star.svg" alt="star widget" width={388} height={421} quality={100} />
        </div>
        <div className="pointer-events-none absolute top-[710px] left-[1131px] z-20 hidden lg:block">
          <Image src="/HOF/star.svg" alt="star widget" width={388} height={421} quality={100} />
        </div>
        <div className="pointer-events-none absolute top-[1845px] left-[-171px] z-20 hidden lg:block">
          <Image src="/HOF/star.svg" alt="star widget" width={388} height={421} quality={100} />
        </div>
        <div className="pointer-events-none absolute top-[2380px] left-[1117px] z-20 hidden lg:block">
          <Image src="/HOF/star.svg" alt="star widget" width={388} height={421} quality={100} />
        </div>

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

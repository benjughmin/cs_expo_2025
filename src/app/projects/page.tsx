import { ProjectsHero } from "@/app/hall-of-fame/ui/ProjectsHero";
import CategoryFilters from "@/components/projects/CategoryFilters";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/nav-bar";

export default function ProjectsPage() {
  return (
    <main className="bg-black">
      <Navbar />
      <ProjectsHero
        pageTitle="Project Collection"
        pageDesc="Join the first day of CS EXPO, as bright fourth-year students present their innovative theses with topics regarding data analytics, health, and natural language processing. Under the data analytics category are groups Agatha, LMNTRX, and Strawhats. For the health category, Code Geass, Hurtz, Lorem Ipsum, and Samsan. Lastly, for the natural language processing category are the thesis groups Codex, Ctrl Alt Delete, EnSys, Jathro's Matrix, and LMDIFY."
      />
      <div className="bg-gradient-to-b from-[#0D0D0D] from-[2%] to-[#0F0019] to-[12%] pb-16">
        <CategoryFilters />
        <div className="w-full max-w-6xl mx-auto border-t border-white mb-2"></div>
        <ProjectsGrid />
      </div>
      <Footer />
    </main>
  );
}

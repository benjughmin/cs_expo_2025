import {ProjectsHero} from "@/app/hall-of-fame/ui/ProjectsHero";
import CategoryFilters from "@/components/projects/CategoryFilters";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <main className="bg-black">
      <ProjectsHero
        pageTitle="Hall Of Fame"
        pageDesc="Join the first day of CS EXPO, as bright fourth-year students present their innovative theses with topics regarding data analytics, health, and natural language processing. Under the data analytics category are groups Agatha, LMNTRX, and Strawhats. For the health category, Code Geass, Hurtz, Lorem Ipsum, and Samsan. Lastly, for the natural language processing category are the thesis groups Codex, Ctrl Alt Delete, EnSys, Jathro's Matrix, and LMDIFY."
      />
      <CategoryFilters />
      <ProjectsGrid />
    </main>
  );
}

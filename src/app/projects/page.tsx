import ProjectsHero from "./components/ProjectsHero"
import CategoryFilters from "./components/CategoryFilters";
import ProjectsGrid from "./components/ProjectsGrid";


export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-[#0f001e] text-white">
      <ProjectsHero />
      <CategoryFilters />
      <ProjectsGrid />
    </main>
  );
}

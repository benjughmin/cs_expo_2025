import ProjectsHero from "./components/ProjectsHero";
import CategoryFilters from "./components/CategoryFilters";
import ProjectsGrid from "./components/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-8 bg-black text-white overflow-y-auto">
      <ProjectsHero />
      <CategoryFilters />
      <ProjectsGrid />
    </main>
  );
}

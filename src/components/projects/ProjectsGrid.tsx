import { projects } from "@/app/projects/data/ProjectsData";
import ProjectsCard from "@/components/projects/ProjectsCard";

export default function ProjectsGrid() {
  return (
    // Layout Project Cards in 3x3 and pass data 
    <section className="w-full max-w-[1200px] py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
      {projects.map(project => (
        <ProjectsCard
          key={project.slug}
          appTitle={project.appTitle}
          thesisTitle={project.thesisTitle}
          poster={project.poster}
          slug={project.slug}
        />
      ))}
    </section>
  );
}
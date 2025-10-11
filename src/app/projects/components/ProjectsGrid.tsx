{/* This component represents the grid layout for displaying project cards on the Projects page. */}
import ProjectsCard from "./ProjectsCard";

export default function ProjectsGrid() {
  const projectCount = Array.from({ length: 9 });

  return (
    <section className="w-full max-w-6xl mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectCount.map((_, index) => (
          <ProjectsCard key={index} />
        ))}
      </div>
    </section>
  );
}

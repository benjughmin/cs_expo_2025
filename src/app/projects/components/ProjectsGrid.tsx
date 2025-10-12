{/* This component represents the grid layout for displaying project cards on the Projects page. */}
import ProjectsCard from "./ProjectsCard";

export default function ProjectsGrid() {
  const projectCount = Array.from({ length: 9 });

  {/* 3x3 Grid Layout of cards */}
  return (
    <section className="w-full max-w-[1200px] py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
      {projectCount.map((_, index) => (
        <ProjectsCard key={index} />
      ))}
    </section>
  );
}

import { projects } from "../data/ProjectsData";
import { notFound } from "next/navigation";
import Navbar from "@/components/global/nav-bar";
import Footer from "@/components/global/footer";
import Image from "next/image"
import ProjectInfo from "@/components/projects/ProjectInfo";

type ProjectPageProps = {
  params: {
    groupdetails: string; //slug
  };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { groupdetails } = await params;
  const project = projects.find((p) => p.slug === groupdetails);

  if (!project) {
    return notFound();
  }

  const { appTitle, thesisTitle, poster, details } = project;

  return (

    <main className="bg-black text-white">
      {/* Hero section with background image */}
      <section className="relative flex h-[110vh] flex-col">
        <div
          className="relative flex h-[65%] flex-col items-center justify-center text-white bg-cover bg-center"
          style={{
            backgroundImage: "url('/projects/placeholderheader.png')",
          }}
        >
          {/* Navbar positioned at the top */}
          <div className="absolute top-0 left-0 w-full z-10">
            <Navbar />
          </div>

          {/* Hero content */}
          <div className="mx-auto flex max-w-6xl translate-y-20 flex-col items-center justify-center px-4 text-center z-20">
            <h1
              className="text-9xl font-monster mb-4 text-center bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(255,0,220,1) 55%, rgba(72,12,168,1) 100%)",
                WebkitTextFillColor: "transparent",
                filter: `
      drop-shadow(1.5px 1.5px 0px #FFF)
      drop-shadow(-1.5px -1.5px 0px #FFF)
    `
              }}
            >
              {appTitle}
            </h1>
            <h2
              className="text-xl mb-6 text-center font-monster text-transparent"
              style={{
                WebkitTextStroke: "2px white",

              }}
            >
              By {details.groupName}
            </h2>          </div>
        </div>

        {/* Bottom section with vector image */}
        <div className="h-[35%] bg-gradient-to-t from-black from-[15%] via-[#480CA8] via-[85%] to-[#C39EFF] to-[100%]">
          <div className="relative h-full w-full -translate-y-0.5">
            <Image
              src="/HOF/vector.svg"
              alt="Projects Hero"
              fill
              className="object-cover lg:object-fill"
              quality={100}
            />
          </div>
        </div>
      </section>

      {/* Project Info Section */}
      <ProjectInfo thesisTitle={project.thesisTitle} poster={project.poster} details={project.details} />



      <Footer />
    </main>
  );
}


import { projects } from "../data/ProjectsData";
import { notFound } from "next/navigation";
import Navbar from "@/components/global/nav-bar";
import Footer from "@/components/global/footer";
import ProjectInfo from "@/components/projects/GroupInfo";
import GroupGallery from "@/components/projects/GroupGallery";
import GroupHero from "@/components/projects/GroupHero";

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

  const { appTitle, logo, details } = project;

  return (
    <main className="bg-black text-white">
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <GroupHero
        appTitle={appTitle}
        groupName={details.groupName}
        logo={logo}
      />

      {/* Content section with purple background */}
      <div className="bg-[#0F0019]">
        {/* Project Info Section */}
        <ProjectInfo
          thesisTitle={project.thesisTitle}
          poster={project.poster}
          details={project.details}
        />


        {/* Video Section */}

        <h1 className="font-monster text-center text-gradient text-2xl mt-20 leading-[100px] -tracking-[2px] md:text-8xl lg:text-[96px] px-6 overflow-visible"
          style={{
            '--gradient-stop': '35%',
            '--gradient-pink': '60%'
          } as React.CSSProperties}
        >
          AVP
        </h1>
        <div className="w-full max-w-6xl mx-auto border-t border-white mt-6"></div>

        {details.videoLink && (
          <div className="flex justify-center py-10">
            <div className="w-full max-w-[1366px]">
              <div className="aspect-video w-full overflow-hidden border-2 border-[#000000]">
                <iframe
                  src={details.videoLink}
                  title="Project Video Showcase"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Group Gallery Section */}
        <GroupGallery details={details} />
      </div>

      <Footer />
    </main>
  );
}
import { projects } from "../data/ProjectsData";
import Link from "next/link";

type ProjectsCardProps = {
  appTitle: string;
  thesisTitle: string;
  poster: string;
  slug: string;
};

{/* reusable project card */ }
export default function ProjectsCard({ appTitle, thesisTitle, poster, slug }: ProjectsCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="bg-gradient-to-b from-[#FF00DC] from-0% via-black via-32% to-black p-6 rounded-[24px] w-full max-w-[400px] h-auto flex flex-col cursor-pointer">
        {/* Poster 
        <div
          className="w-full max-w-[332px] h-[300px] sm:h-[406px] rounded-[16px] mb-4 mx-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
        ></div> */}

        {/* Default white/gray placeholder box */}
        <div className="bg-[#D9D9D9] w-full max-w-[332px] h-[300px] sm:h-[406px] rounded-[16px] mb-4 mx-auto"></div>

        {/* Text content */}
        <div className="flex flex-col">
          <h3 className="text-[#FF00FF] font-bold tracking-widest text-sm mb-2">{appTitle}</h3>
          <p className="text-white text-sm leading-relaxed">{thesisTitle}</p>
        </div>
      </div>
    </Link>
  );
}
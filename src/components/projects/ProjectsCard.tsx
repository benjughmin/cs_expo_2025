import Link from "next/link";

type ProjectsCardProps = {
  appTitle: string;
  thesisTitle: string;
  groupName: string;
  members: string[];
  mentor: string;
  category: string[];
  poster: string;
  slug: string;
};

{/* reusable project card */ }
export default function ProjectsCard({
  appTitle,
  thesisTitle,
  groupName,
  members,
  mentor,
  category,
  poster,
  slug,
}: ProjectsCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="block w-full max-w-[400px]">
      <div className="relative group cursor-pointer h-[720px]">
<div className="bg-[#FF00DC]/10 p-4 rounded-[24px] w-full h-full flex flex-col transition-all duration-300 ease-in-out border-1 border-[#A2108D]">          {/* Poster 
          <div
            className="w-full max-w-[332px] h-[300px] sm:h-[406px] rounded-[16px] mb-4 mx-auto bg-cover bg-center"
            style={{ backgroundImage: `url(${poster})` }}
          ></div> */}

          <div className="bg-[#D9D9D9] w-full max-w-[380px] h-[300px] sm:h-[564px] rounded-[16px] mb-4 mx-auto"></div>

          {/* Text content */}
          <div className="flex flex-col flex-grow">
            <h3 className="text-[#FF00FF] font-avolta text-tracking-widest text-2xl mb-2">{appTitle}</h3>
            <p className="text-white text-base leading-relaxed font-helvetica">{thesisTitle}</p>
          </div>
        </div>

        {/*  hover overlay*/}
        <div className="absolute inset-0 p-8 flex flex-col justify-start items-start text-left text-white bg-gradient-to-b from-gray-950/40 to-black to-70% rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out border border-transparent group-hover:border-[#FF00DC] group-hover:shadow-[0_0_20px_#FF00DC]">

          <div className="w-full">
            {/* App Name & Group Name */}
            <p className="text-[#FF00DC] font-nhl tracking-widest text-base mb-2">{appTitle.toUpperCase()} BY {groupName.toUpperCase()}</p>

            {/* Thesis Title */}
            <p className="text-white text-sm leading-relaxed font-helvetica mb-8">{thesisTitle}</p>

            {/* Members List */}
            <div className="mb-4">
              <h4 className="text-[#FF00DC] font-nhl tracking-widest text-base mb-2">Members</h4>
              {members.map((member) => (
                <p key={member} className="text-white text-sm leading-relaxed font-helvetica">{member}</p>
              ))}
            </div>

            {/* Mentor */}
            <div className="mb-4">
              <h4 className="text-[#FF00DC] font-nhl tracking-widest text-base mb-2">Mentor</h4>
              <p className="text-white text-sm leading-relaxed font-helvetica">{mentor}</p>
            </div>

            {/* Category List */}
            <div>
              <h4 className="text-[#FF00DC] font-nhl tracking-widest text-base mb-2">Category</h4>
              {category.map((cat) => (
                <p key={cat} className="text-white text-sm leading-relaxed font-helvetica">{cat}</p>
              ))}
            </div>
          </div>

          {/* Decorative Stars SVG */}
          <div className="absolute bottom-6 right-4">
            <img
              src="/projects/starcard.svg"
              alt="starcard icon"
              className="w-30 h-30 "
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
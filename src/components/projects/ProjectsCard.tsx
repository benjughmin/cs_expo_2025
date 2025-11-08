import Image from "next/image";
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
    <div className="w-full flex flex-col bg-[#FF37E31A] rounded-[16px] border-[#A2108D] border-[1px] overflow-hidden shadow-lg relative px-4 py-4">
      <Link href={`/projects/${slug}`} className="block w-full">
        <div className="relative group cursor-pointer rounded-[16px] overflow-hidden shadow-lg">
          {/* Poster Image — use Next/Image instead of backgroundImage */}
          <div className="relative w-full aspect-[420/594] overflow-hidden rounded-[16px]">
            <Image
              src={poster || "/projects/default_poster.jpg"}
              alt={`${appTitle} poster`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAB..." // 👈 tiny blur placeholder
              quality={70}
              loading="lazy"
            />
          </div>

          {/* App & Thesis Titles */}
          <div className="mt-3 p-3 text-justify text-white">
            <h3
              className="font-avolta text-[#FF37E3] font-normal md:text-xl text-xs leading-[25px] tracking-[0.1em]"
              style={{
                filter: "drop-shadow(0px 0px 6px rgba(255,55,227,0.8))",
              }}
            >
              {appTitle}
            </h3>
            <p className="text-body-white-base text-xs line-clamp-2">
              {thesisTitle}
            </p>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-[rgba(39,4,34,0.9)] p-6 flex flex-col justify-start items-start text-left text-white opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-y-auto z-10">
            <div className="w-full">
              <p
                className="font-avolta text-[#FF37E3] font-normal md:text-2xl text-2xl leading-[25px]"
                style={{
                  filter: "drop-shadow(0px 0px 6px rgba(255,55,227,0.8))",
                }}
              >
                {appTitle}
              </p>

              <p className="font-extrabold text-body-white-base mb-4 text-xl">
                {thesisTitle}
              </p>

              {/* Members */}
              <div className="mb-3">
                <h4
                  className="text-[#FF37E3] font-helvetica-black text-lg"
                  style={{
                    filter: "drop-shadow(0px 0px 1px rgba(255,55,227,0.8))",
                  }}
                >
                  Members:
                </h4>
                <ul className="list-disc list-inside text-body-white font-helvetica text-sm space-y-1 marker:text-[#FF37E3]">
                  {members.map((member) => (
                    <li key={member}>{member}</li>
                  ))}
                </ul>
              </div>

              {/* Mentor */}
              <div className="mb-3">
                <h4
                  className="text-[#FF37E3] font-helvetica-black text-lg"
                  style={{
                    filter: "drop-shadow(0px 0px 1px rgba(255,55,227,0.8))",
                  }}
                >
                  Mentor:
                </h4>
                <p className="text-body-white text-sm">{mentor}</p>
              </div>

              {/* Category */}
              <div>
                <h4
                  className="text-[#FF37E3] font-helvetica-black text-lg"
                  style={{
                    filter: "drop-shadow(0px 0px 1px rgba(255,55,227,0.8))",
                  }}
                >
                  Topics
                </h4>
                {category.map((cat) => (
                  <p key={cat} className="text-body-white text-sm">
                    {cat}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

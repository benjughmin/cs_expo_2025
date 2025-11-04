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
  slug,
}: ProjectsCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="block w-full max-w-[400px] h-full">
      <div className="relative group cursor-pointer h-full">
        <div className="project-card-bg p-4 w-full h-full flex flex-col transition-all duration-300 ease-in-out">
          <div
            className="w-full max-w-[380px] aspect-[420/594] rounded-[16px] mb-4 mx-auto bg-center bg-cover
             group-hover:opacity-15 transition-opacity duration-300 ease-in-out"
            style={{ backgroundImage: `url(${'projects/Agile_Poster.png'})` }} //To be replaced by actual values
          ></div>

          {/*  
                   <div className="bg-[#D9D9D9] w-full max-w-[380px] h-[300px] sm:h-[564px] rounded-[16px] mb-4 mx-auto"></div>

         */}

          {/* Text content */}
          <div className="flex flex-col flex-grow">
            <h3 className="neon-text-magenta-hover-fade text-2xl mb-2 hover-fade">
              {appTitle}
            </h3>
            <p className="text-body-white-base group-hover:opacity-40 transition-all duration-300">
              {thesisTitle}
            </p>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="project-card-overlay p-8 flex flex-col justify-start items-start text-left text-white">
          <div className="w-full">
            {/* App Name */}
            <p
              className="neon-text-pink text-2xl"
              style={{
                "--webkit-stroke-color": "white",
                "--webkit-stroke-width": "0.1px"
              } as React.CSSProperties}
            >
              {appTitle}
            </p>

            {/* Thesis Title */}
            <p className="text-body-white-base mb-4">{thesisTitle}</p>

            {/* Group Name */}
            <div className="mb-4">
              <h4 className="neon-text-pink text-xl"
                style={{
                  "--webkit-stroke-color": "white",
                  "--webkit-stroke-width": "0.1px"
                } as React.CSSProperties}>Group Name</h4>
              <p className="text-body-white">{groupName}</p>
            </div>

            {/* Members List */}
            <div className="mb-4">
              <h4 className="neon-text-pink text-xl"
                style={{
                  "--webkit-stroke-color": "white",
                  "--webkit-stroke-width": "0.1px"
                } as React.CSSProperties}>Members</h4>
              {members.map((member) => (
                <p key={member} className="text-body-white">{member}</p>
              ))}
            </div>

            {/* Mentor */}
            <div className="mb-4">
              <h4 className="neon-text-pink text-xl"
                style={{
                  "--webkit-stroke-color": "white",
                  "--webkit-stroke-width": "0.1px"
                } as React.CSSProperties}>Mentor</h4>
              <p className="text-body-white">{mentor}</p>
            </div>

            {/* Category List */}
            <div>
              <h4 className="neon-text-pink text-xl"
                style={{
                  "--webkit-stroke-color": "white",
                  "--webkit-stroke-width": "0.1px"
                } as React.CSSProperties}>Topics</h4>
              {category.map((cat) => (
                <p key={cat} className="text-body-white">{cat}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
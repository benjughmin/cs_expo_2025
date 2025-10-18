import Image from "next/image";
import InfoPill from "@/components/projects/InfoPill";

type ProjectInfoProps = {
    poster: string;
    thesisTitle: string;
    details: {
        thesisDescription: string;
        groupMembers: string[];
        mentor: string;
        category: string[];
        videoLink?: string;
        groupName: string;
        photoshoot: string[];
    };
};

export default function ProjectInfo({ thesisTitle, poster, details }: ProjectInfoProps) {
    return (
        <section className="relative w-full mx-auto px-4 -mt-[42vh] z-10">

            {/* Main flex container for the two-column layout */}
            <div className="flex flex-col lg:flex-row gap-4 lg:justify-center">

                {/* LEFT COLUMN: Poster Image */}
                <div className="lg:w-[650px] lg:h-[900px]">
                    <Image
                        src={poster} 
                        alt={`${thesisTitle} Poster`}
                        width={602}
                        height={853}
                        className="rounded-lg object-cover w-full h-full shadow-lg bg-white"
                    />
                </div>

                {/* RIGHT COLUMN: Two stacked boxes of equal height */}
                <div className="lg:w-[700px] lg:h-[900px] flex flex-col gap-6">

                    {/* Box 1: Thesis Title & Description */}
                    <div
                        className="flex-1 backdrop-blur-md rounded-lg p-10 flex flex-col overflow-y-auto border-2 border-[rgba(98,0,255,1)]"
                        style={{
                            backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(72, 12, 168, 1))"
                        }}
                    >
                        <h3 className="text-2xl font-nhl mb-3 uppercase text-[#ffffff]">
                            {thesisTitle}
                        </h3>
                        <p className="text-base font-helvetica text-gray-300">
                            {details.thesisDescription}
                        </p>
                    </div>

                    {/* Box 2: Members, Mentor, & Category */}
                    <div className="flex-1 bg-black bg-opacity-50 backdrop-blur-md rounded-lg p-10 flex flex-col gap-10 overflow-y-auto border-2 border-[#f8f8f8]">
                        {/* Members Section */}
                        <div>
                            <h4 className="text-xl font-nhl mb-4 uppercase text-[#FF00DC]">Members</h4>
                            <div className="flex flex-wrap gap-4">
                                {details.groupMembers.map((member, index) => (
                                    <InfoPill key={index} text={member} />
                                ))}
                            </div>
                        </div>
                        {/* Mentor Section */}
                        <div>
                            <h4 className="text-xl font-nhl mb-4 uppercase text-[#FF00DC]">Mentor</h4>
                            <div className="flex flex-wrap gap-4">
                                <InfoPill text={details.mentor} />
                            </div>
                        </div>
                        {/* Category Section */}
                        <div>
                            <h4 className="text-xl font-nhl mb-4 uppercase text-[#FF00DC]">Category</h4>
                            <div className="flex flex-wrap gap-4">
                                {details.category.map((cat, index) => (
                                    <InfoPill key={index} text={cat} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </section>
    );
}
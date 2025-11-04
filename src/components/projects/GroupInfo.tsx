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
        <section className="relative w-full mx-auto px-4 -mt-[10vh]">

            {/* Main flex container for the two-column layout */}
            <div className="flex flex-col lg:flex-row gap-6 lg:justify-center">

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
                <div className="lg:w-[750px] lg:h-[900px] flex flex-col gap-6">

                    {/* Box 1: Thesis Title & Description */}
                    <div
                        className="flex-1 flex flex-col overflow-y-auto "

                    >
                        <h3 className="text-2xl font-avolta mb-3 neon-text-pink">
                            {thesisTitle}
                        </h3>
                        <p className="text-base font-helvetica text-white">
                            {details.thesisDescription}
                        </p>
                    </div>

                    {/* Box 2: Members, Mentor, & Category */}
                    <div className="flex-1 rounded-[20px] p-10 flex flex-col gap-10 overflow-y-hidden border-2 border-[#f8f8f8] justify-center">
                        {/* Members Section */}
                        <div className="flex flex-col items-center">
                            <h4 className="text-2xl font-avonta neon-text-pink mb-4 ">Group Members</h4>
                            <div className="flex flex-wrap gap-4 justify-center">
                                {details.groupMembers.map((member, index) => (
                                    <InfoPill key={index} text={member} size='md' />
                                ))}
                            </div>
                        </div>
                        {/* Mentor Section */}
                        <div className="flex flex-col items-center">
                            <h4 className="text-xl font-avonta neon-text-pink mb-4 ">Mentor</h4>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <InfoPill text={details.mentor} size='sm' />
                            </div>
                        </div>
                        {/* Category Section */}
                        <div className="flex flex-col items-center">
                            <h4 className="text-xl font-avonta neon-text-pink mb-4 ">Topics</h4>
                            <div className="flex flex-wrap gap-4 justify-center">
                                {details.category.map((cat, index) => (
                                    <InfoPill key={index} text={cat} size='sm'/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
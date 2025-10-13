
import { projects } from "../data/ProjectsData";
import { notFound } from "next/navigation";

type ProjectPageProps = {
    params: {
        groupdetails: string; //slug
    };
};

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = projects.find((p) => p.slug === params.groupdetails);

    if (!project) {
        return notFound();
    }

    const { appTitle, thesisTitle, poster, details } = project;

    return (
        <main className="min-h-screen bg-black text-white p-8">
            <h1 className="text-3xl font-bold text-[#FF00FF] mb-4">{appTitle}</h1>
            <h2 className="text-xl mb-6">{thesisTitle}</h2>

            {/* Poster Placeholder */}
            <div className="bg-[#D9D9D9] w-full max-w-[600px] h-[400px] rounded-xl mb-6"></div>

            {/* Thesis Details */}
            <div className="space-y-2">
                <p><strong>Group:</strong> {details.groupName}</p>
                <p><strong>Mentor:</strong> {details.mentor}</p>
                <p><strong>Category:</strong> {details.category}</p>
                <p><strong>Members:</strong> {details.groupMembers.join(", ")}</p>
                <p className="mt-4">{details.thesisDescription}</p>
            </div>
        </main>
    );
}

import Image from "next/image"

export function BestThesisCategory(){

    type BestPerCategoryProps = {
        title: string;
        groupName: string;
        desc: string;
        tags: string[];
        img: string;
        link: string;
    };


    // placeholder data
    const data: BestPerCategoryProps[] = [
        {
            title : 'Health',
            groupName : 'Group Name',
            desc : 'Self-Healing Materials Using Bio-Inspired Nanotechnology for Aerospace',
            tags: ['NLP', 'MEDECINE'],
            img : '/placeholder.jpg',
            link: 'https://google.com'
        },
        // {
        //     title : 'Title 2',
        //     groupName : 'Group Name 2',
        //     desc : 'Description 2',
        //     tags: ['tag1', 'tag2', 'tag3'],
        //     img : '/placeholder.jpg',
        //     link: 'https://google.com'
        // }
        // {
        //     title : 'Title 3',
        //     groupName : 'Group Name 3',
        //     desc : 'Description 3',
        //     tags: ['tag1', 'tag2', 'tag3'],
        //     img : '/placeholder.jpg',
        //     link: 'https://google.com'
        // }
    ]

    return(
        <section className="relative w-full h-screen bg-[#110d09] overflow-hidden flex flex-col pb-5">
            {/* Section Header */}
            <div className="h-[15%] flex items-center justify-center px-8">
                <h1 className="text-white text-5xl font-black italic text-center">
                    BEST THESIS BY CATEGORY
                </h1>
            </div>

            {data.map((project) => (
                <div key={project.title} className="h-[85%] flex">
                    {/* Left Side - Image */}
                    <div className="w-2/5 relative">
                        <Image 
                            src={project.img}
                            alt="Mentor image"  
                            fill 
                            className="object-cover"
                            quality={100}
                            priority
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div className="w-3/5 flex items-center justify-center">
                        <div className="text-white flex items-center justify-center w-auto max-w-3xl -translate-y-15">

                            <Image 
                                src='/prevBtn.png' 
                                alt="Previous button"  
                                width={50}
                                height={51}
                                className="object-contain"
                                quality={100}
                                priority
                            />

                            <div className="text-center mx-5">
                                {/* TODO: change to leading-[50px] (Figma value) once the custom font is loaded - currently using leading-none to better match figma prototype with default font */}
                                {/* Project Title */}
                                <h2 className="text-[96px] text-left font-black italic m-0 leading-none">
                                    {project.title}
                                </h2>

                                {/* Group Name */}
                                <h3 className="text-[36px] text-left font-black m-0 mt-2 leading-[50px]">
                                    {project.groupName}
                                </h3>

                                {/* Description */}
                                <p className="text-[24px] text-left m-0 mt-2 font-light leading-[20px]">
                                    {project.desc}
                                </p>

                                {/* Tags */}
                                <p className="text-[14px] text-left text-white/50 m-0 mt-2 mb-10 font-light leading-[20px]">
                                    {project.tags.join(" | ")}
                                </p>

                                {/* Button */}
                                <a href={project.link} className="block w-auto hover:bg-white rounded-full hover:text-black p-4 border text-center" target="_blank" rel="noopener noreferrer">
                                    Learn More
                                </a>
                            </div>

                            <Image 
                                src='/nextBtn.png' 
                                alt="Next button"  
                                width={50}
                                height={51}
                                className="object-contain"
                                quality={100}
                                priority
                            />
                        </div>
                    </div>
                </div>
            ))}

        </section>
    )
}
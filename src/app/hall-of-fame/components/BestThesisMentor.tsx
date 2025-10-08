import Image from "next/image"

export function BestThesisMentor(){
    
    return(
        <section className="relative w-full h-[95vh] bg-[#480CA8] overflow-hidden flex flex-col">
            {/* Section Header */}
            <div className="h-[15%] flex items-center justify-center px-8">
                <h1 className="text-white text-5xl font-black italic text-center">
                    BEST THESIS MENTOR
                </h1>
            </div>

            {/* Content */}
            <div className="h-[85%] flex">
                {/* Left Side - Name, Desc */}
                <div className="w-3/5 flex items-center justify-center px-16">
                    <div className="text-white max-w-2xl">
                        <h2 className="text-6xl font-black italic mb-6">
                            MR. JOHN DOE
                        </h2>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga accusamus perferendis ab, blanditiis repellendus dolores provident laboriosam impedit ex sunt modi earum sequi voluptate, nisi ipsa id tenetur magni consequatur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis repudiandae omnis nostrum voluptate, error aut non ipsum illo sint ipsa animi ullam, odio amet, dolores velit quam nobis officiis quis!
                        </p>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="w-2/5 relative">
                    <Image 
                        src='/placeholder.jpg' 
                        alt="Mentor image"  
                        fill 
                        className="object-cover"
                        quality={100}
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
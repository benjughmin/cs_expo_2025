import ImageContainer from "./ImageContainer";

type GroupGalleryProps = {
    details: {
        groupName: string;
        groupMembers: string[];
        photoshoot: string[];
    };
};

export default function GroupGallery({ details }: GroupGalleryProps) {
    return (
        //  gallery
        <div className="flex flex-col items-center justify-center text-center">
            <h1 className="font-monster text-9xl text-transparent [-webkit-text-stroke:1px_white] pb-2">
                GALLERY
            </h1>

            {/*group name with star circle background*/}
            <div className="relative flex items-center justify-center">
                <img
                    src="/projects/circlestar.png"
                    alt="Star circle background"
                    className="absolute top-1/2 left-1/2 h-auto w-[700px] -translate-x-1/2 -translate-y-1/2"
                />

                <h2 className="relative font-nhl text-8xl bg-gradient-to-b from-white from-40% to-[#FF00DC] 
                bg-clip-text text-transparent [-webkit-text-stroke:1px_black] [filter:drop-shadow(1.5px_1.5px_0px_black)_drop-shadow(-1.5px_-1.5px_0px_black)]">                      {details.groupName}
                </h2>
            </div>

            {/* --- Two Group Photos Section --- */}
            <div className="mt-20 flex w-full max-w-[1366px] flex-col items-center gap-4">

                {/* First Big Photo */}
                {details.photoshoot[0] && (
                    <ImageContainer
                        src={details.photoshoot[0]}
                        alt={`${details.groupName} Photoshoot Image 1`}
                        caption=""
                    />
                )}

                {/* Second Big Photo */}
                {details.photoshoot[1] && (
                    <ImageContainer
                        src={details.photoshoot[1]}
                        alt={`${details.groupName} Photoshoot Image 2`}
                        caption=""
                    />
                )}

            </div>
            {/* --- Group Members Grid Section --- */}
            <div className="mt-5 mb-60 w-full max-w-7xl justify-evenly">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {details.groupMembers.map((memberName, index) => (
                        <ImageContainer
                            key={index}
                            src={`https://via.placeholder.com/400x400.png?text=${memberName.replace(' ', '+')}`}
                            alt={`Photo of ${memberName}`}
                            // Pass the member's name as the caption to create the nameplate
                            caption={memberName}
                        />
                    ))}
                </div>
            </div>
        </div>
    );

}
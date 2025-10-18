type GroupGalleryProps = {
    details: {
        groupName: string;
        groupMembers: string[];
        photoshoot: string[];
    };
};

export default function GroupGallery({ details }: GroupGalleryProps) {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <h1 className="font-monster text-9xl text-transparent [-webkit-text-stroke:1px_white] pb-2">
                GALLERY
            </h1>

            {/* 1. Relative container to position the image and text */}
            <div className="relative flex items-center justify-center">
                {/* 2. Background image, positioned absolutely */}
                <img
                    src="/projects/circlestar.png"
                    alt="Star circle background"
                    className="absolute top-1/2 left-1/2 h-auto w-[700px] -translate-x-1/2 -translate-y-1/2"
                />

                {/* 3. Text on top, with a relative position to ensure it's above the image */}
                <h2 className="relative font-nhl text-8xl bg-gradient-to-b from-white from-40% to-[#FF00DC] 
                bg-clip-text text-transparent [-webkit-text-stroke:1px_black] [filter:drop-shadow(1.5px_1.5px_0px_black)_drop-shadow(-1.5px_-1.5px_0px_black)]">                      {details.groupName}
                </h2>
            </div>

            <div className="mt-12 w-full max-w-4xl">

                <div className="bg-black/20 p-4 rounded-lg">
                    {details.photoshoot.map((link, index) => (
                        <div
                            key={index}
                            className="text-white/70 p-2 border-b border-gray-800 last:border-b-0"
                        >
                            {/* We just display the link string for now */}
                            <p>{link}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
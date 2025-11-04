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
      <h1 className="font-monster text-center text-gradient text-2xl mt-20 leading-[100px] -tracking-[2px] md:text-8xl lg:text-[96px] px-6 overflow-visible"
        style={{
          '--gradient-stop': '35%',
          '--gradient-pink': '60%'
        } as React.CSSProperties}
      >
        Gallery
      </h1>
      <div className="w-full max-w-6xl mx-auto border-t border-white mt-6"></div>
    </div>
  );
} 
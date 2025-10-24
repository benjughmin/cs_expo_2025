import Navbar from "@/components/global/nav-bar"

export function GalleryHeader() {
  return (
    <div className="mask-fade-b relative flex flex-col items-center justify-center backdrop-blur-md">
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        {/*<img
          src="/gallery/images/background-header.png"
          alt="Gallery background"
          className="h-full w-full object-cover"
        />*/}
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center gap-[33px] pb-40">
        <div className="h-full w-full">
          <Navbar />
        </div>

        <div className="font-monster text-gradient mt-15 max-w-210 text-center text-9xl font-normal text-white">
          Event Gallery
        </div>
        <div className="mb-10 w-[80vw] text-center text-white select-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, in? Esse labore velit
          obcaecati at consectetur iusto voluptate, tempora similique! Cupiditate quaerat ullam
          obcaecati commodi fuga quidem possimus molestiae vitae!
        </div>
      </div>
    </div>
  )
}

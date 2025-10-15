import Navbar from "@/components/global/nav-bar"

export function GalleryHeader() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/gallery/images/background-header.png"
          alt="Gallery background"
          className="h-full w-full object-cover opacity-0 brightness-50"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center gap-[33px] pb-50">
        <div className="h-full w-full">
          <Navbar />
        </div>

        <div className="font-monster text-gradient max-w-160 text-center text-8xl font-normal text-white">
          Event Gallery
        </div>
        <div className="w-[80vw] text-center text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, in? Esse labore velit
          obcaecati at consectetur iusto voluptate, tempora similique! Cupiditate quaerat ullam
          obcaecati commodi fuga quidem possimus molestiae vitae!
        </div>
      </div>
    </div>
  )
}

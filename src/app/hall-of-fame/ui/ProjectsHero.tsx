// "use client"
import Image from "next/image"
import PixelBlast from "@/components/global/PixelBlast"

export function ProjectsHero({ pageTitle, pageDesc }: { pageTitle: string; pageDesc: string }) {
  return (
    <section className="relative isolate mx-auto flex h-[85vh] flex-col items-center justify-center text-center">
      {/* Pixel background */}
      <div className="absolute inset-0 -bottom-40 z-0 cursor-pointer">
        <PixelBlast
          variant="circle"
          pixelSize={9}
          color="#B19EEF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div className="h-[350px] w-full max-w-4xl -translate-y-20 rounded-full bg-[radial-gradient(circle_at_center,#ff00dc_0%,transparent_70%)] opacity-[40%] blur-[100px]"></div>
      </div>

      {/* Foreground content */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6">
        <div className="pointer-events-auto flex max-w-4xl -translate-y-20 flex-col items-center justify-center gap-y-20 text-center">
          <h1 className="font-monster text-gradient mb-0 text-4xl leading-[100px] -tracking-[2px] md:text-8xl lg:text-[96px]">
            {pageTitle}
          </h1>
          <p className="font-helvetica indent-8 text-[14px] leading-[20px] font-extralight text-white">
            {pageDesc}
          </p>
        </div>
      </div>
    </section>
  )
}

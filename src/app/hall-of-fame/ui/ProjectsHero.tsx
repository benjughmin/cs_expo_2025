import Image from "next/image"

// accepts pageTitle and pageDesc as props
export function ProjectsHero({ pageTitle, pageDesc }: { pageTitle: string; pageDesc: string }) {
  return (
    <>
      <section className="flex h-[110vh] flex-col">
        {/* Hero Content */}
        <div className="flex h-[65%] flex-col items-center justify-center bg-gradient-to-t from-[#AF05C5] from-[0%] via-[#480CA8] via-[20%] to-black text-white">
          <div className="mx-auto flex max-w-6xl translate-y-10 flex-col items-center justify-center px-4 text-center">
            <h1 className="font-regular font-monster text-gradient mb-8 text-4xl leading-[100px] -tracking-[2px] md:text-8xl lg:text-[128px]">
              {pageTitle}
            </h1>
            <p className="font-helvetica indent-8 text-[14px] leading-[20px] font-extralight">
              {pageDesc}
            </p>
          </div>
        </div>

        {/* Vector element */}
        <div className="h-[35%] bg-gradient-to-t from-black from-[15%] via-[#480CA8] via-[85%] to-[#C39EFF] to-[100%] sm:h-[250px] md:h-[300px] lg:h-[35%]">
          <div className="relative h-full w-full -translate-y-0.5">
            <Image
              src="/HOF/vector.svg"
              alt="Projects Hero"
              fill
              className="object-cover object-top"
              quality={100}
            />
          </div>
        </div>
      </section>
    </>
  )
}

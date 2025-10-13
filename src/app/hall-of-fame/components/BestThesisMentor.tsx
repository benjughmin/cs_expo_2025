import Image from "next/image"

export function BestThesisMentor() {
  return (
    <section className="relative flex h-screen w-full flex-col overflow-hidden bg-[#480CA8]">
      {/* Section Header */}
      <div className="flex h-[15%] items-center justify-center px-8">
        <h1 className="text-center text-5xl font-black text-white italic">BEST THESIS MENTOR</h1>
      </div>

      {/* Content */}
      <div className="flex h-[85%]">
        {/* Left Side - Name, Desc */}
        <div className="flex w-3/5 items-center justify-center px-16">
          <div className="max-w-2xl text-white">
            <h2 className="mb-6 text-6xl font-black italic">MR. JOHN DOE</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga accusamus perferendis
              ab, blanditiis repellendus dolores provident laboriosam impedit ex sunt modi earum
              sequi voluptate, nisi ipsa id tenetur magni consequatur? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Veritatis repudiandae omnis nostrum voluptate, error aut
              non ipsum illo sint ipsa animi ullam, odio amet, dolores velit quam nobis officiis
              quis!
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-2/5">
          <Image
            src="/HOF/placeholder.jpg"
            alt="Mentor image"
            fill
            className="object-cover"
            quality={100}
            priority
            sizes="40vw"
          />
        </div>
      </div>
    </section>
  )
}

import HeroSection from "@/components/home/hero-section";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/nav-bar";
import Galaxy from "@/components/global/Galaxy";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main
        className="flex-grow relative pb-14"
        style={{
          background: "linear-gradient(180deg, #1A1A1A 0%, #1A1A1A 30%, #480CA8 70%, #AF05C5 85%, #FF00DC 100%)"
        }}
      >
        {/* Galaxy Background Layer */}
        <div className="absolute inset-0 z-0">
          <Galaxy
            mouseInteraction={false}
            mouseRepulsion={false}
            density={1.5}
            glowIntensity={0.5}
            saturation={0}
            hueShift={170}
            twinkleIntensity={0.5}
            rotationSpeed={0.1}
            repulsionStrength={1.0}
            autoCenterRepulsion={0}
            starSpeed={0.5}
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
        </div>
      </main>

      {/* SVG Section - Below Galaxy/Main */}
      <div className="h-[200px] sm:h-[300px] md:h-[400px] bg-gradient-to-t from-[black] from-[15%] via-[#480CA8] via-[85%] to-[#C39EFF] to-[100%]">
        <div className="relative h-full w-full -translate-y-0.5">
          <Image
            src="/HOF/vector.svg"
            alt="Projects Hero"
            fill
            className="object-cover lg:object-fill"
            quality={100}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
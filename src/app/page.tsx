import HeroSection from "@/components/home/hero-section";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/nav-bar";
import FaultyTerminal from "@/components/FaultyTerminal";
import Hero from "@/components/home/Hero";
import SponsorCarousel from "@/components/home/sponsor-carousel";
import PrismaticBurst from "@/components/PrismaticBurst";


export default function Home() {
  const assets = [
    { src: "/logo/expo_logo.png", type: "image" as const },
    { src: "/HOF/vector.svg", type: "image" as const },
    // Add more assets as needed
  ];

  return (
    <div className="flex flex-col min-h-screen ">
      <main
        className="flex-grow relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0 bg-[#0D0D0D]">
          <FaultyTerminal
            scale={1.5}
            gridMul={[2, 1]}
            digitSize={1.2}
            timeScale={1}
            pause={false}
            scanlineIntensity={1}
            glitchAmount={1}
            flickerAmount={1}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0.2}
            tint="#341539"
            mouseReact={true}
            mouseStrength={0.5}
            pageLoadAnimation={false}
            brightness={1}
          />
        </div>
        <div className="relative z-10 bg-gradient-to-b from-transparent via-transparent to-[#0F0019]">
          <Navbar />
          <HeroSection />
          <div className="text-center text-white">
            <p className="text-sm md:text-base lg:text-lg tracking-wide mb-3">
              In Partnerships with
            </p>
            <SponsorCarousel />
          </div>
        </div>

      </main>
      <div className="bg-[#0F0019]">
        <Hero
          title="CS EXPO"
          description="A two-day event held on November 10-11, 2025 where students showcase their projects to faculty and industry experts, with awards for top innovations. Talks by tech leaders will explore current trends and insights."
          variant="expo"
          textDirection="horizontal-right"
        />
        <Hero
          title="Dev Day"
          description="Following the last day of CS Expo 2025, Dev Day brings together industry experts to share insights on staying current with tech skills and innovation in a fast-evolving field."
          variant="devday"
          textDirection="horizontal-left"
        />
      </div>
      <Footer />
    </div>
  );
}
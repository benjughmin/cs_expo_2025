import HeroSection from "@/components/home/hero-section";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/nav-bar";
import PrismaticBurst from "@/components/PrismaticBurst";
import Image from "next/image";
import Hero from "@/components/global/Hero";
import SponsorCarousel from "@/components/home/sponsor-carousel";
import { TextSyncProvider } from "@/hooks/useTextSync";


export default function Home() {
  const assets = [
    { src: "/logo/expo_logo.png", type: "image" as const },
    { src: "/HOF/vector.svg", type: "image" as const },
    // Add more assets as needed
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#0D0D0D]">
          <PrismaticBurst
            intensity={2}
            speed={0.3}
            animationType="rotate3d"
            colors={["#8B5CF6", "#EC4899", "#F59E0B", "#10B981", "#3B82F6"]}
            distort={5}
            mixBlendMode="lighten"
          />
        </div>
        <div className="relative z-10 bg-gradient-to-b from-transparent via-transparent to-[#0F0019]">
          <HeroSection />
          <div className="text-center text-white px-4">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg tracking-wide mb-2 sm:mb-3">
              In Partnerships with
            </p>
            <SponsorCarousel />
          </div>
        </div>
      </main>
      <div className="bg-[#0F0019]">
        <TextSyncProvider>
        <Hero
          title="CS EXPO"
          description="A two-day event held on November 10-11, 2025 where students showcase their projects to faculty and industry experts, with awards for top innovations. Talks by tech leaders will explore current trends and insights."
          variant="expo"
          textDirection="horizontal-right"
        />
        </TextSyncProvider>
        <TextSyncProvider>
          <Hero
            title="Dev Day"
            description="Following the last day of CS Expo 2025, Dev Day brings together industry experts to share insights on staying current with tech skills and innovation in a fast-evolving field."
            variant="devday"
            textDirection="horizontal-left"
          />
        </TextSyncProvider>
      </div>
      <Footer />
    </div>
  );
}
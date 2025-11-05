import HeroSection from "@/components/home/hero-section";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/nav-bar";
import FaultyTerminal from "@/components/FaultyTerminal";
import Image from "next/image";

export default function Home() {
  const assets = [
    { src: "/logo/expo_logo.png", type: "image" as const },
    { src: "/HOF/vector.svg", type: "image" as const },
    // Add more assets as needed
  ];

  return (
      <div className="flex flex-col min-h-screen">
        <main
          className="flex-grow relative pb-14"
          style={{
            background: "linear-gradient(180deg, #1A1A1A 0%, #1A1A1A 30%, #480CA8 70%, #AF05C5 85%, #FF00DC 100%)"
          }}
        >
          <div className="absolute inset-0 z-0">
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

          <div className="relative z-10">
            <Navbar />
            <HeroSection />
          </div>
        </main>

        <Footer />
      </div>
  );
}
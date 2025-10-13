import HeroSection from "@/components/home/hero-section";
import Footer from "@/components/home/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section fills available space */}
      <main className="flex-grow relative">
        <HeroSection />
      </main>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
}

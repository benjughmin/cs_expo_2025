import HeroSection from "@/components/home/hero-section";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow relative">
        <HeroSection />
      </main>

      <Footer />
    </div>
  );
}

import React from 'react';
import InfoContainer from '@/components/events/InfoContainer';
import Hero from '@/components/events/Hero';
import SpeakersCarousel from '@/components/events/SpeakersCarousel';
import { testSpeakers } from '@/app/events/data/testSpeakers';
import Navbar from '@/components/global/nav-bar';
import Footer from '@/components/global/footer';

function DevDayPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Purple Gradient - Middle Top Left */}
      <div 
        className="absolute top-[15%] -left-[500px] w-[1300px] h-[1300px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(147, 112, 219, 0.4) 0%, rgba(72, 12, 168, 0.3) 30%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      
      {/* Pink Gradient - Middle Bottom Right (Larger) */}
      <div 
        className="absolute top-1/3 -right-[800px] w-[2000px] h-[2000px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(255, 0, 220, 0.4) 0%, rgba(255, 105, 180, 0.3) 30%, transparent 70%)',
          filter: 'blur(120px)',
        }}
      />
      
      {/* Content wrapper with higher z-index */}
      <div className="relative z-10">
        {/* Header Placeholder */}
        <header>
          <Navbar />
        </header>

        {/* Hero Component */}
        <Hero
          title="CS EXPO"
          year="2025"
          description="Join the first day of CS EXPO, as bright fourth-year students present their innovative theses with topics regarding data analytics, health, and natural language processing. Under the data analytics category are groups Agatha, LMNTRX, and Strawhats. For the health category, Code Geass, Hurtz, Lorem Ipsum, and Samsan. Lastly, for the natural language processing category are the thesis groups Codex, Ctrl Alt Delete, EnSys, Jathro's Matrix, and LMDIFY."
          tabs={[
            { label: "CS EXPO DAY 1", href: "/events" },
            { label: "CS EXPO DAY 2", href: "/events/day2" },
            { label: "DEV DAY", href: "/events/devday" }
          ]}
        />

        {/* DEV DAY Component */}
        <InfoContainer
          title="DEV DAY"
          date="MM/DD/YYYY"
          time="00:00 AM - 00:00 PM"
          description="Join the first day of CS EXPO, as bright fourth-year students present their innovative theses with topics regarding data analytics, health, and natural language processing. Under the data analytics category are groups Agatha, LMNTRX, and Strawhats. For the health category, Code Geass, Hurtz, Lorem Ipsum, and Samsan. Lastly, for the natural language processing category are the thesis groups Codex, Ctrl Alt Delete, EnSys, Jathro's Matrix, and LMDIFY."
        />

        {/* Keynote Talks Component */}
        <InfoContainer
          title="KEYNOTE TALKS"
          date="MM/DD/YYYY"
          time="00:00 AM - 00:00 PM"
          description="Join the first day of CS EXPO, as bright fourth-year students present their innovative theses with topics regarding data analytics, health, and natural language processing. Under the data analytics category are groups Agatha, LMNTRX, and Strawhats. For the health category, Code Geass, Hurtz, Lorem Ipsum, and Samsan. Lastly, for the natural language processing category are the thesis groups Codex, Ctrl Alt Delete, EnSys, Jathro's Matrix, and LMDIFY."
        />

        {/* Speakers Carousel - Testing */}
        <SpeakersCarousel speakers={testSpeakers} />

        {/* Footer Placeholder */}
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default DevDayPage;

import React from 'react';
import InfoContainer from '@/components/events/InfoContainer';
import Hero from '@/components/events/Hero';
import SpeakersCarousel from '@/components/events/SpeakersCarousel';
import PanelistsCarousel from '@/components/events/PanelistsCarousel';
import { testSpeakers } from '@/app/events/data/testSpeakers';
import { testPanelists } from '@/app/events/data/testPanelists';
import Navbar from '@/components/global/nav-bar';
import Footer from '@/components/global/footer';

function Day2Page() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Gradient Vector */}
      <div 
        className="absolute top-0 left-0 w-[1400px] h-[1400px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at top left, rgba(255, 69, 0, 0.4) 0%, rgba(255, 99, 71, 0.3) 25%, rgba(147, 112, 219, 0.2) 50%, rgba(72, 12, 168, 0.15) 70%, transparent 90%)',
          filter: 'blur(100px)',
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

        {/* CS Expo Day 2 Component */}
        <InfoContainer
          title="CS EXPO DAY 2"
          date="MM/DD/YYYY"
          time="00:00 AM - 00:00 PM"
          description="Second day of CS EXPO content goes here. Add your specific Day 2 information, speakers, presentations, and events."
        />

        {/* Keynote Talks Component */}
        <InfoContainer
          title="KEYNOTE TALKS"
          date="MM/DD/YYYY"
          time="00:00 AM - 00:00 PM"
          description="Day 2 keynote talks and speakers information."
        />

        {/* Speakers Carousel - Testing */}
        <div className="opacity-90">
          <SpeakersCarousel speakers={testSpeakers} titleColor="#995CFB" />
        </div>

        <div className="mt-8">
          <PanelistsCarousel panelists={testPanelists} titleColor="#995CFB" />
        </div>

        {/* Footer Placeholder */}
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Day2Page;

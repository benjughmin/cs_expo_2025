import React from 'react';
import InfoContainer from '@/components/events/InfoContainer';
import Hero from '@/components/events/Hero';
import SpeakersCarousel from '@/components/events/SpeakersCarousel';
import PanelistsCarousel from '@/components/events/PanelistsCarousel';
import { testSpeakers } from '@/app/events/data/testSpeakers';
import { testPanelists } from '@/app/events/data/testPanelists';
import Navbar from '@/components/global/nav-bar';
import Footer from '@/components/global/footer';


function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-black">
      {/* Navbar */}
      <Navbar />

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

      {/* CS Expo Day Component */}
      <InfoContainer
        title="CS EXPO DAY 1"
        date="MM/DD/YYYY"
        time="00:00 AM - 00:00 PM"
        description="Join the first day of CS EXPO, as bright fourth-year students present their innovative theses with topics regarding data analytics, health, and natural language processing. Under the data analytics category are groups Agatha, LMNTRX, and Strawhats. For the health category, Code Geass, Hurtz, Lorem Ipsum, and Samsan. Lastly, for the natural language processing category are the thesis groups Codex, Ctrl Alt Delete, EnSys, Jathro's Matrix, and LMDIFY."
      />

      {/* Keynote Talks Component */}
      <InfoContainer
        title="KEYNOTE TALKS"
        date="MM/DD/YYYY"
        time="00:00 AM - 00:00 PM"
        description="Join the first day of CS EXPO, as bright fourth-year students present their innovative theses with topics regarding data analytics, health, and natural language processing. Under the data analytics category are groups Agatha, I-MNTRX, and Shrawnals. For the health category, Code Geass, Hurtz, Lorem Ipsum, and Samsan Lastly, for the natural language processing category are the thesis groups Codex, Ctrl Alt Delete, EnSys, Jatin's Matrix, and LMDFY."
      />

      {/* Speakers Carousel */}
      <SpeakersCarousel speakers={testSpeakers} />

      {/* Panelist Component */}
      <PanelistsCarousel panelists={testPanelists} />

      {/* Footer Placeholder */}
      <footer className="border-t border-purple-700/50 py-8">
        <Footer />
      </footer>
    </div>
  );
}

export default EventsPage;

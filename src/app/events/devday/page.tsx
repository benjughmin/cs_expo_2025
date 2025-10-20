import React from 'react';
import InfoContainer from '@/components/events/InfoContainer';
import Hero from '@/components/events/Hero';
import SpeakersCarousel from '@/components/events/SpeakersCarousel';
import { testSpeakers } from '@/app/events/data/testSpeakers';

function DevDayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-black">
      {/* Header Placeholder */}
      <header className="h-20 border-b border-purple-700/50">
        {/* HEADER CONTENT | HEADER CONTENT | HEADER CONTENT | HEADER CONTENT | HEADER CONTENT */}
      </header>

      {/* Hero Component */}
      <Hero
        title="CS EXPO"
        year="2025"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      {/* Keynote Talks Component */}
      <InfoContainer
        title="KEYNOTE TALKS"
        date="MM/DD/YYYY"
        time="00:00 AM - 00:00 PM"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      {/* Speakers Carousel - Testing */}
      <SpeakersCarousel speakers={testSpeakers} />

      {/* Footer Placeholder */}
      <footer className="border-t border-purple-700/50 py-8">
        {/* Footer component will go here */}
      </footer>
    </div>
  );
}

export default DevDayPage;

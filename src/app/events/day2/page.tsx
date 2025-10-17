import React from 'react';
import InfoContainer from '@/components/events/InfoContainer';
import Hero from '@/components/events/Hero';
import SpeakersCarousel from '@/components/events/SpeakersCarousel';
import { testSpeakers } from '../data/testSpeakers';

function Day2Page() {
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
        description="Day 2 of CS EXPO - More amazing projects and presentations"
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
      <SpeakersCarousel speakers={testSpeakers} />

      {/* Footer Placeholder */}
      <footer className="border-t border-purple-700/50 py-8">
        {/* Footer component will go here */}
      </footer>
    </div>
  );
}

export default Day2Page;

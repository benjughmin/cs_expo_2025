import React from 'react';
import InfoContainer from '@/components/events/InfoContainer';
import Hero from '@/components/events/Hero';

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
        description="Developer Day - Workshops, hands-on sessions, and developer activities"
        tabs={[
          { label: "CS EXPO DAY 1", href: "/events" },
          { label: "CS EXPO DAY 2", href: "/events/day2" },
          { label: "DEV DAY", href: "/events/devday" }
        ]}
      />

      {/* Dev Day Component */}
      <InfoContainer
        title="DEV DAY"
        date="MM/DD/YYYY"
        time="00:00 AM - 00:00 PM"
        description="Developer Day content goes here. Add workshops, hands-on sessions, coding challenges, and developer activities."
      />

      {/* Workshops Component */}
      <InfoContainer
        title="WORKSHOPS"
        date="MM/DD/YYYY"
        time="00:00 AM - 00:00 PM"
        description="Information about workshops and hands-on sessions."
      />

      {/* Add more sections as needed for Dev Day */}

      {/* Footer Placeholder */}
      <footer className="border-t border-purple-700/50 py-8">
        {/* Footer component will go here */}
      </footer>
    </div>
  );
}

export default DevDayPage;

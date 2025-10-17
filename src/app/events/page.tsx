import React from 'react';
import InfoContainer from '@/components/events/InfoContainer';
import Hero from '@/components/events/Hero';
import SpeakersCarousel from '@/components/events/SpeakersCarousel';
import { testSpeakers } from './data/testSpeakers';

function EventsPage() {
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
        description="fjlkasdnfjds nkjdsfn kjsdnf kjsdnkjlsdn jklfn sdkjlf"
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
        description="Join the first day of CS EXPO, as bright fourth-year students present their innovative theses with topics regarding data analytics, health, and natural language processing. Under the data analytics, I-MNTRX, and Shrawnals. For the health category, Code Geass, Hurtz, Lorem Ipsum, and Samsan Lastly, for the natural language processing category are the thesis groups Codex, Ctrl Alt Delete, EnSys, Jatin's Matrix, and LMDFY."
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
      <section className="py-16 px-4 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold text-white mb-16 text-center italic">
            PANELIST
          </h2>
          
          {/* Panelist Card */}
          <div className="flex items-center gap-8">
            {/* Navigation Arrow */}
            <button className="text-white text-4xl hover:text-pink-500">‹</button>
            
            {/* Panelist Content */}
            <div className="flex-1 flex items-center gap-8 border border-purple-500/50 p-8 rounded-lg">
              {/* Panelist Info */}
              <div className="flex-1 text-white">
                <h3 className="text-3xl font-bold mb-2 italic">MR. JOHN DOE</h3>
                <p className="text-pink-500 mb-4">Job Description</p>
                <p className="text-white/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sed euismod, sapien vitae dignissim volutpat,
                  ipsum ex varius justo, vel tincidunt magna tortor ac
                  magna. Vivamus eget magna nulla ac aliquam massa.
                  Curabitur ac magna vitae velit bibendum hendrerit.
                  Suspendisse potenti. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia curae;
                  Aliquam vitae tristique congue. Duis id arcu non ligula
                  maximus semper. Duis semper nisl hendrerit hendrerit
                  congue ligula dignissim.
                </p>
              </div>
              
              {/* Panelist Image Placeholder */}
              <div className="w-64 h-64 bg-gray-400 rounded-lg flex-shrink-0">
              <img src="/speakers/picture-placeholder.jpg" alt="Speaker" /> {/* NOTE: Image here is still a placeholder */}
              </div>
            </div>

            {/* Navigation Arrow */}
            <button className="text-white text-4xl hover:text-pink-500">›</button>
          </div>
        </div>
      </section>

      {/* Footer Placeholder */}
      <footer className="border-t border-purple-700/50 py-8">
        {/* Footer component will go here */}
      </footer>
    </div>
  );
}

export default EventsPage;

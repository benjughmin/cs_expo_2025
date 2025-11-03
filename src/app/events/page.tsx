import React from 'react';
import Hero from '@/components/events/Hero';
import SpeakersCarousel from '@/components/events/SpeakersCarousel';
import PanelistsCarousel from '@/components/events/PanelistsCarousel';
import EventDaySection from '@/components/events/EventDaySection';
import { testSpeakers } from '@/app/events/data/testSpeakers';
import { testPanelists } from '@/app/events/data/testPanelists';
import { box1, box2 } from '@/app/events/data/boxData';
import Navbar from '@/components/global/nav-bar';
import Footer from '@/components/global/footer';


function EventsPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Gradient Vector */}
      <div 
        className="absolute top-0 left-0 w-[1400px] h-[1400px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at top left, rgba(255, 182, 193, 0.4) 0%, rgba(218, 112, 214, 0.3) 25%, rgba(147, 112, 219, 0.2) 50%, transparent 70%)'
        }}
      />
      
      {/* Content wrapper with higher z-index */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Hero Component */}
        <Hero
          title={['CS', 'EXPO']}
          description="A two-day event showcasing student projects to a group of panelists composed of faculty members and industry professionals. Current tech trends will be discussed by industry leaders."
        />

        {/* CS Expo Day 1 Section */}
        <EventDaySection
          title='CS Expo Day 1'
          date='November 10, 2025'
          time='9:00 AM - 5:00 PM'
          description='Join us on the first day of CS Expo as bright fourth-year students present their innovative theses with topics regarding Medicine & Health and Natural Language Processing.'
          keynoteTitle='Keynote Talk'
          keynoteSubtitle='Digital Transformation in the Philippines: Opportunities and Challenges'
          keynoteDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim neque, lobortis quis massa sit amet, convallis tincidunt enim. Suspendisse congue felis sapien, eu finibus ante pretium eget. Vestibulum aliquam viverra lorem vitae maximus.'
          categories={box1.categories}
          teams={box1.teams}
        />

        {/* CS Expo Day 2 Section */}
        <EventDaySection
          title='CS Expo Day 2'
          date='November 11, 2025'
          time='9:00 AM - 5:00 PM'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim neque, lobortis quis massa sit amet, convallis tincidunt enim. Suspendisse congue felis sapien, eu finibus ante pretium eget. Vestibulum aliquam viverra lorem vitae maximus.'
          keynoteTitle='Keynote Talks'
          keynoteSubtitle='Ethics in Emerging Technologies: Where Should We Draw the Line?'
          keynoteDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim neque, lobortis quis massa sit amet, convallis tincidunt enim. Suspendisse congue felis sapien, eu finibus ante pretium eget. Vestibulum aliquam viverra lorem vitae maximus.'
          categories={box2.categories}
          teams={box2.teams}
          boxOnLeft={true}
        />

        {/* Speakers Carousel for Day 1 */}
        <SpeakersCarousel speakers={testSpeakers} />

        {/* Panelist Component for Day 1 */}
        <PanelistsCarousel panelists={testPanelists} />

        {/* Speakers Carousel for Day 2 */}
        <SpeakersCarousel speakers={testSpeakers} />

        {/* Panelist Component for Day 2 */}
        <PanelistsCarousel panelists={testPanelists} />

        {/* Footer Placeholder */}
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default EventsPage;

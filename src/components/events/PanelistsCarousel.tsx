"use client";

import { useState } from 'react';

interface PanelistProps {
    name: string,
    title: string,
    bio: string,
    image: string
}

interface PanelistCarouselProps {
    panelists: PanelistProps[];
    titleColor?: string;
}

function PanelistsCarousel({ panelists, titleColor = '#FF00DC' }: PanelistCarouselProps) {
  // NOTE: This is a placeholder. Will be replaced when database is integrated.
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % panelists.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + panelists.length) % panelists.length);
  };

  const currentPanelist = panelists[currentIndex];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <p 
          className="font-monster md:text-[75px] text-[75px] mb-0 text-center italic tracking-[0.1em] leading-32"
          style={{
            backgroundImage: 'linear-gradient(180deg, #FFFFFF 40%, #FF37E3 50%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            WebkitTextStroke: '1px black',
            filter: 'drop-shadow(0px 0px 4px rgba(255, 55, 227, 0.8))'
          }}
        >
          PANELISTS
        </p>
        
        {/* Panelist Container */}
        <div className="flex items-center justify-center gap-35 mb-12">
          {/* Previous Button */}
          <button 
            onClick={prevSlide}
            className="text-white text-4xl hover:text-pink-500 transition-colors"
            aria-label="Previous panelist"
          >
            ‹
          </button>
          
          {/* Panelist Content */}
          <div 
            className="w-[1225px] h-[695px] flex flex-none items-center justify-between rounded-[20px]"  
          >
            {/* Panelist Info */}
            <div className="text-white flex-1">
              {/* Panelist Name */}
              <p 
                className="font-avolta font-normal md:text-[48px] text-4xl text-white leading-[40px] tracking-[0.1em] mb-0 align-middle"
                style={{ 
                  filter: 'drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.8))'
              }}>
                {currentPanelist.name}
              </p>

              {/* Panelist Title */}
              <p 
                className="font-dreamer font-normal md:text-[20px] text-sm text-[#FF00DC] leading-[20px] tracking-[0.1em] mb-10"
                style={{
                  filter: 'drop-shadow(0px 0px 4.4px rgba(255, 0, 220, 0.8))'
                }}>
                {currentPanelist.title}
              </p>
              
              {/* Panelist Bio */}
              <p 
                className="font-helvetica font-medium md:text-[16px] text-sm text-white leading-[20px]" 
                style={{ 
                  fontWeight: 300 
                }}>
                  {currentPanelist.bio}
                </p>
            </div>
            
            {/* Panelist Image */}
            <div className="w-[500px] h-[500px] bg-gray-400 rounded-[16px] flex-shrink-0 overflow-hidden ml-[50px]">
              <img 
                src={currentPanelist.image} 
                alt={currentPanelist.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Next Button */}
          <button 
            onClick={nextSlide}
            className="text-white text-4xl hover:text-pink-500 transition-colors"
            aria-label="Next panelist"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default PanelistsCarousel;
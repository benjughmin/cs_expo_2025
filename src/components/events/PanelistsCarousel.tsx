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
        <h2 className="font-monster text-[66px] text-white mb-16 text-center italic">
          PANELISTS
        </h2>
        
        {/* Panelist Container */}
        <div className="flex items-center justify-center gap-8 mb-12">
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
            className="w-[1225px] h-[695px] flex flex-none items-center justify-between bg-black rounded-[20px] border border-white pt-[100px] pb-[100px] pl-[50px] pr-[50px]"  
          >
            {/* Panelist Info */}
            <div className="text-white flex-1">
              <h3 className="font-monster mb-2 italic text-[36px]">{currentPanelist.name}</h3>
              <p className="font-helvetica text-[22px] mb-4" style={{ color: titleColor }}>{currentPanelist.title}</p>
              <p className="font-helvetica text-white text-[22px] leading-[20px]" style={{ fontWeight: 300 }}>{currentPanelist.bio}</p>
            </div>
            
            {/* Panelist Image */}
            <div className="w-[503px] h-[495px] bg-gray-400 rounded-[16px] flex-shrink-0 overflow-hidden ml-[50px]">
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
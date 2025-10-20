"use client";

import { useState } from 'react';

interface PanelistProps {
    name: string,
    title: string,
    bio: string,
    image: string
}

interface PanelistCarouselProps {
    panelists: PanelistProps[]
}

function PanelistsCarousel({ panelists }: PanelistCarouselProps) {
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
        <h2 className="font-monster text-6xl text-white mb-16 text-center italic">
          PANELISTS
        </h2>
        
        {/* Panelist Container */}
        <div className="flex items-center gap-8 mb-12">
          {/* Previous Button */}
          <button 
            onClick={prevSlide}
            className="text-white text-4xl hover:text-pink-500 transition-colors"
            aria-label="Previous panelist"
          >
            ‹
          </button>
          
          {/* Panelist Content */}
          <div className="flex-1 flex items-center gap-8 bg-purple-900/30 p-8 rounded-lg"  style={{ maxWidth: '1219px', height: '695px', margin: '0 auto' }}>
            {/* Panelist Image */}
            <div className="w-[503px] h-[495px] bg-gray-400 rounded-lg flex-shrink-0 overflow-hidden">
              <img 
                src={currentPanelist.image} 
                alt={currentPanelist.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Panelist Info */}
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-2 italic">{currentPanelist.name}</h3>
              <p className="text-pink-500 mb-4">{currentPanelist.title}</p>
              <p className="text-white/80">{currentPanelist.bio}</p>
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

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2">
          {panelists.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Go to panelist ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PanelistsCarousel;
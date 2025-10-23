"use client";

import { useState } from 'react';

interface SpeakerProps {
  name: string;
  title: string;
  bio: string;
  image: string;
}

interface SpeakersCarouselProps {
  speakers: SpeakerProps[];
}

export default function SpeakersCarousel({ speakers }: SpeakersCarouselProps) {
  // NOTE: This is a placeholder. Will be replaced when database is integrated.
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % speakers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + speakers.length) % speakers.length);
  };

  const currentSpeaker = speakers[currentIndex];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-monster text-[66px] text-white mb-16 text-center italic">
          SPEAKERS
        </h2>
        
        {/* Speaker Container */}
        <div className="flex items-center justify-center gap-8 mb-12">
          {/* Previous Button */}
          <button 
            onClick={prevSlide}
            className="text-white text-4xl hover:text-pink-500 transition-colors"
            aria-label="Previous speaker"
          >
            ‹
          </button>
          
          {/* Speaker Content */}
          <div className="w-[1225px] h-[695px] flex flex-none items-center justify-between rounded-[20px] pt-[100px] pb-[100px] pl-[50px] pr-[50px]">
            {/* Speaker Image */}
            <div className="w-[503px] h-[495px] bg-gray-400 rounded-[16px] flex-shrink-0 overflow-hidden">
              <img 
                src={currentSpeaker.image} 
                alt={currentSpeaker.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Speaker Info */}
            <div className="text-white flex-1 ml-[50px]">
              <h3 className="font-monster mb-2 italic text-[36px]">{currentSpeaker.name}</h3>
              <p className="font-helvetica text-[22px] text-[#FF00DC] mb-4">{currentSpeaker.title}</p>
              <p className="font-helvetica text-white text-[22px] leading-[20px]" style={{ fontWeight: 300 }}>{currentSpeaker.bio}</p>
            </div>
          </div>

          {/* Next Button */}
          <button 
            onClick={nextSlide}
            className="text-white text-4xl hover:text-pink-500 transition-colors"
            aria-label="Next speaker"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

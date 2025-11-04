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
  titleColor?: string;
}

export default function SpeakersCarousel({ speakers, titleColor = '#FF00DC' }: SpeakersCarouselProps) {
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
    <section className="py-16 md:py-40">
      <div className="max-w-7xl mx-auto">
        <p 
          className="font-monster md:text-[75px] text-[75px] mb-12 md:mb-16 text-center italic tracking-[0.1em] leading-32"
          style={{
            backgroundImage: 'linear-gradient(180deg, #FFFFFF 40%, #FF37E3 50%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            WebkitTextStroke: '1px black',
            filter: 'drop-shadow(0px 0px 4px rgba(255, 55, 227, 0.8))'
          }}
        >
          SPEAKERS
        </p>
        
        {/* Speaker Container */}
        <div className="flex items-center justify-center gap-35 mb-12">
          {/* Previous Button */}
          <button 
            onClick={prevSlide}
            className="text-white text-4xl hover:text-pink-500 transition-colors"
            aria-label="Previous speaker"
          >
            ‹
          </button>
          
          {/* Speaker Content */}
          <div className="w-[1225px] h-[695px] flex flex-none items-center justify-between rounded-[20px]">
            
            {/* Speaker Image */}
            <div className="w-[500px] h-[500px] bg-gray-400 rounded-[16px] flex-shrink-0 overflow-hidden">
              <img 
                src={currentSpeaker.image} 
                alt={currentSpeaker.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Speaker Info */}
            <div className="text-white flex-1 ml-[50px]">
              {/* Speaker Name */}
              <p 
                className="font-avolta font-normal md:text-[48px] text-4xl text-white leading-[40px] tracking-[0.1em] mb-0 align-middle"
                style={{ 
                  filter: 'drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.8))'
              }}>
                {currentSpeaker.name}
              </p>

              {/* Speaker Title */}
              <p 
                className="font-dreamer font-normal md:text-[20px] text-sm text-[#FF00DC] leading-[20px] tracking-[0.1em] mb-10"
                style={{
                  filter: 'drop-shadow(0px 0px 4.4px rgba(255, 0, 220, 0.8))'
                }}>
                {currentSpeaker.title}
              </p>
              
              {/* Speaker Bio */}
              <p 
                className="font-helvetica font-medium md:text-[16px] text-sm text-white leading-[20px]" 
                style={{ 
                  fontWeight: 300 
                }}>
                  {currentSpeaker.bio}
                </p>
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

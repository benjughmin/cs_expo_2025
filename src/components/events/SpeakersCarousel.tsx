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
        <h2 className="font-monster text-6xl text-white mb-16 text-center italic">
          SPEAKERS
        </h2>
        
        {/* Speaker Container */}
        <div className="flex items-center gap-8 mb-12">
          {/* Previous Button */}
          <button 
            onClick={prevSlide}
            className="text-white text-4xl hover:text-pink-500 transition-colors"
            aria-label="Previous speaker"
          >
            ‹
          </button>
          
          {/* Speaker Content */}
          <div className="flex-1 flex items-center gap-8 bg-purple-900/30 p-8 rounded-lg">
            {/* Speaker Image */}
            <div className="w-64 h-64 bg-gray-400 rounded-lg flex-shrink-0 overflow-hidden">
              <img 
                src={currentSpeaker.image} 
                alt={currentSpeaker.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Speaker Info */}
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-2 italic">{currentSpeaker.name}</h3>
              <p className="text-pink-500 mb-4">{currentSpeaker.title}</p>
              <p className="text-white/80">{currentSpeaker.bio}</p>
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

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2">
          {speakers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Go to speaker ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

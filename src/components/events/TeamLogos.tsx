"use client";

import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { useEffect } from 'react';

interface TeamLogosProps {
  logos?: string[]; 
}

export default function TeamLogos({ logos = [] }: TeamLogosProps) {
  // For placeholder logos
  const displayLogos = logos.length > 0 ? logos : Array(6).fill('/logo/logo-1.png');

  const allLogos = [...displayLogos, ...displayLogos, ...displayLogos];
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      dragFree: false,
      containScroll: false,
    },
    [AutoScroll({ playOnInit: true, speed: 0.75, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (emblaApi) {
      console.log('Embla initialized');
    }
  }, [emblaApi]);

  return (
    <section className="relative z-10 px-4 pb-6 md:pb-12">
      <div className="max-w-7xl mx-auto">
        <div 
          className="rounded-[20px] overflow-hidden flex items-center h-[180px] md:h-[280px] lg:h-[358px]"  
          style={{
            maxWidth: '1278px',
            margin: '0 auto'
          }}
        >
          {/* Embla Carousel Container */}
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex gap-4 md:gap-8 lg:gap-12 px-4 md:px-8">
              {allLogos.map((logo, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] flex items-center justify-center"
                  style={{ marginRight: index === allLogos.length - 1 ? '0' : '' }}
                >
                  <img 
                    src={logo} 
                    alt={`Team logo ${index + 1}`}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

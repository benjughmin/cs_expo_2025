"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeroProps {
  title: string;
  description: string;
  variant?: 'expo' | 'devday';
}

function Hero({title, description, variant = 'expo'}: HeroProps) {
  const pathname = usePathname();
  
  // Variant-specific configurations
  const config = {
    expo: {
      backgroundText: 'CS EXPO',
      accentColor: '#FF37E3',
      titleGradient: 'linear-gradient(180deg, #FFFFFF 10%, #FFFFFF 0%, #FF37E3 30%, #FF00DC 70%, #FF00DC 100%)',
      titleGlow: 'drop-shadow(0px 0px 4px rgba(255, 55, 227, 0.8))',
      svgFlipped: false,
      svgTranslateY: '-25px',
      svgTranslateX: '0px'
    },
    devday: {
      backgroundText: 'DEV DAY',
      accentColor: '#5C0BDE',
      titleGradient: 'linear-gradient(180deg, #FFFFFF 10%, #FFFFFF 0%, #5C0BDE 30%, #5C0BDE 70%, #5C0BDE 100%)',
      titleGlow: 'drop-shadow(0px 0px 4px rgba(92, 11, 222, 0.8))',
      svgFlipped: true,
      svgTranslateY: '-50px',
      svgTranslateX: '0px'
    }
  };

  const currentConfig = config[variant];
  
  return(
    <section className="relative pt-12 md:pt-16 lg:pt-20 pb-0 px-4 text-center overflow-hidden">
      {/* Repeating text background */}
      <div 
        className="absolute top-[-100px] md:top-[-150px] lg:top-[-200px] left-0 right-0 flex flex-col items-center pointer-events-none z-0"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%, transparent 100%)'
        }}
      >
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="font-monster text-[40px] md:text-[60px] lg:text-[80px] whitespace-nowrap tracking-widest leading-[30px] md:leading-[45px] lg:leading-[60px] opacity-30"
            style={{
              WebkitTextStroke: `1px ${currentConfig.accentColor}`,
              color: 'transparent',
              letterSpacing: '0em'
            }}
          >
            {currentConfig.backgroundText}
          </div>
        ))}
      </div>

      {/* SVG Background */}
      <div 
        className="absolute inset-[-50px] md:inset-[-75px] lg:inset-[-100px] flex items-center justify-center pointer-events-none z-0"
        style={{
          transform: `translate(${currentConfig.svgTranslateX}, ${currentConfig.svgTranslateY}) ${currentConfig.svgFlipped ? 'scaleX(-1)' : 'scaleX(1)'}`
        }}
      >
        <img 
          src="/events/shape-306.svg" 
          alt="" 
          className="w-auto h-full object-contain opacity-40 md:opacity-50 lg:opacity-40"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div 
          className="font-monster tracking-[0.09em] [text-shadow:0_2px_7.2px_rgba(255,255,255,0.1)] max-w-[280px] md:max-w-[400px] lg:max-w-[600px]"
          style={{
            backgroundImage: currentConfig.titleGradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            WebkitTextStroke: '1px black',
            filter: currentConfig.titleGlow,
            display: 'inline-block'
          }}
        >
          <p 
            className="text-[60px] md:text-[85px] lg:text-[110px] leading-[50px] md:leading-[70px] lg:leading-[85px] mb-6 md:mb-8 lg:mb-10 px-2"
            style={{
              letterSpacing: '-0.02em'
            }}
          >
            {title}
          </p>
        </div>
        <p className="text-white/100 max-w-[754px] mx-auto font-helvetica text-[14px] md:text-[16px] lg:text-[20px] px-4">
          {description}
        </p>
      </div>
    </section>
  );
}

export default Hero;
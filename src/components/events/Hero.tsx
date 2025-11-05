"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeroProps {
  title: string;
  description: string;
}

function Hero({title, description}: HeroProps) {
  const pathname = usePathname();
  
  return(
    <section className="relative pt-20 pb-0 px-4 text-center overflow-hidden">
      {/* Repeating CS EXPO text background - stacked vertically */}
      <div 
        className="absolute top-[-200px] left-0 right-0 flex flex-col items-center pointer-events-none z-0"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%, transparent 100%)'
        }}
      >
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="font-monster text-[82px] md:text-[10px] lg:text-[80px] whitespace-nowrap tracking-widest leading-[60px] opacity-30"
            style={{
              WebkitTextStroke: '1px #FF37E3',
              color: 'transparent',
              letterSpacing: '0em'
            }}
          >
            CS EXPO
          </div>
        ))}
      </div>

      {/* SVG Background */}
      <div className="absolute inset-[-100px] flex items-center justify-center pointer-events-none z-0 translate-y-[-25px]">
        <img 
          src="/events/shape-306.svg" 
          alt="" 
          className="w-auto h-full object-contain opacity-60"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div 
          className="font-monster tracking-[0.09em] [text-shadow:0_2px_7.2px_rgba(255,255,255,0.25)]"
          style={{
            backgroundImage: 'linear-gradient(180deg, #FFFFFF 10%, #FFFFFF 0%, #FF37E3 30%, #FF00DC 70%, #FF00DC 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            WebkitTextStroke: '1px black',
            filter: 'drop-shadow(0px 0px 4px rgba(255, 55, 227, 0.8))',
            display: 'inline-block',
            maxWidth: '600px'
          }}
        >
          <p 
            className="text-[110px] leading-[85px] mb-10"
            style={{
              letterSpacing: '-0.02em'
            }}
          >
            {title}
          </p>
        </div>
        <p className="text-white/100 max-w-[754px] mx-auto font-helvetica text-[20px]">
          {description}
        </p>
      </div>
    </section>
  );
}

export default Hero;
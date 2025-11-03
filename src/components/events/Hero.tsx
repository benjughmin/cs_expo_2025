"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeroProps {
  title: string[];
  description: string;
}

function Hero({title, description}: HeroProps) {
  const pathname = usePathname();
  
  return(
    <section className="relative py-20 px-4 text-center overflow-hidden">
      {/* SVG Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <img 
          src="/events/shape-306.svg" 
          alt="" 
          className="w-auto h-full object-contain opacity-60"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <p 
          className="font-monster text-[110px] leading-[85px] tracking-[0.09em] text-white mb-4"
          style={{
            WebkitTextStroke: '4px black',
            letterSpacing: '-0.02em'
          }}
        >
          {title[0]}
        </p>
        <p 
          className="font-monster text-[110px] leading-[50px] tracking-[0.09em] text-[#FF00DC] mb-4 drop-shadow-[0_0_80px_rgba(255,0,220,0.8)] [text-shadow:0_2px_7.2px_rgba(255,255,255,1)]"
          style={{
            WebkitTextStroke: '1px black',
          }}
        >
          {title[1]}
        </p>
        <p className="text-white/100 max-w-6xl mx-auto mb-20 font-helvetica text-sm">
          {description}
        </p>
      </div>
    </section>
  );
}

export default Hero;
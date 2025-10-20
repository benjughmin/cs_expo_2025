"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Tab {
  label: string;
  href: string;
}

interface HeroProps {
  title: string;
  year: string;
  description: string;
  tabs: Tab[];
}

function Hero({title, year, description, tabs}: HeroProps) {
  const pathname = usePathname();
  
  return(
    <section className="relative py-20 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="font-monster text-6xl md:text-8xl text-white mb-4 tracking-wider">
          {title}
          <span 
            className="block font-monster tracking-tighter" 
            style={{
              background: 'linear-gradient(to bottom, #FF00DC, #FFFFFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              WebkitTextStroke: '4px black',
              paintOrder: 'stroke fill',
              letterSpacing: '-0.05em'
            }}
          >
            {year}
          </span>
        </p>
        <p className="text-white/100 max-w-3xl mx-auto mb-8 font-helvetica text-sm">
          {description}
        </p>
        
        {/* Day Tabs */}
        <div className="flex justify-center gap-8 text-white">
          {tabs.map((tab, index) => {
            const isActive = pathname === tab.href;
            return (
              <Link 
                key={index} 
                href={tab.href}
                className={`font-helvetica text-base px-6 py-2 transition-all`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
        
        {/* Horizontal Line */}
        <div className="border-t border-white/100 mt-4 max-w-6xl mx-auto border-1"></div>
      </div>
    </section>
  );
}

export default Hero;
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeroProps {
  title: string;
  description: string;
}

function Hero({title, description}: HeroProps) {
  return(
    <section className="relative pt-12 md:pt-16 lg:pt-20 pb-0 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <div
          className="font-monster tracking-[0.09em] [text-shadow:0_2px_7.2px_rgba(255,255,255,0.1)]"
          style={{
            backgroundImage: "linear-gradient(180deg, #FFFFFF 10%, #FFFFFF 0%, #FF37E3 30%, #FF00DC 70%, #FF00DC 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            WebkitTextStroke: "1px black",
            filter: "drop-shadow(0px 0px 4px rgba(255, 55, 227, 0.8))",
            display: "inline-block",
          }}
        >
          <p 
            className="text-[48px] md:text-[85px] lg:text-[110px] leading-[50px] md:leading-[70px] lg:leading-[85px] mb-6 md:mb-8 lg:mb-10"
            style={{ letterSpacing: "-0.02em", whiteSpace: "pre-line" }}
          >
            {title.replace(" ", "\n")}
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
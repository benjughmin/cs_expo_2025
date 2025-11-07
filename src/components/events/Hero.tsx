"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Team {
  logo_url: string;
  group_name: string;
}

interface HeroProps {
  title: string;
  description: string;
  variant?: 'expo' | 'devday';
  teams?: Team[];
}

function Hero({ title, description, variant = 'expo', teams = [] }: HeroProps) {
  const pathname = usePathname();

  // Variant-specific configurations
  const config = {
    expo: {
      backgroundText: 'CS EXPO',
      accentColor: '#FF37E3',
      titleGradient:
        'linear-gradient(180deg, #FFFFFF 10%, #FFFFFF 0%, #FF37E3 30%, #FF00DC 70%, #FF00DC 100%)',
      titleGlow: 'drop-shadow(0px 0px 4px rgba(255, 55, 227, 0.8))',
      svgFlipped: false,
      svgTranslateY: '-25px',
      svgTranslateX: '0px',
    },
    devday: {
      backgroundText: 'DEV DAY',
      accentColor: '#5C0BDE',
      titleGradient:
        'linear-gradient(180deg, #FFFFFF 10%, #FFFFFF 0%, #5C0BDE 30%, #5C0BDE 70%, #5C0BDE 100%)',
      titleGlow: 'drop-shadow(0px 0px 4px rgba(92, 11, 222, 0.8))',
      svgFlipped: true,
      svgTranslateY: '-50px',
      svgTranslateX: '0px',
    },
  };

  const currentConfig = config[variant];

  function logoPosition(index: number) {
    const presets = [
      // 🔹 Upper Left (more scattered)
      { left: '6%', top: '6%', size: 80, rotate: -8, opacity: 0.8 },
      { left: '18%', top: '14%', size: 85, rotate: -3, opacity: 0.75 },
      { left: '10%', top: '28%', size: 90, rotate: 6, opacity: 0.78 },
      { left: '30%', top: '20%', size: 85, rotate: 4, opacity: 0.8 }, // near mid, limited top

      // 🔹 Upper Right
      { left: '72%', top: '10%', size: 90, rotate: 5, opacity: 0.8 },
      { left: '80%', top: '18%', size: 95, rotate: -6, opacity: 0.78 },
      { left: '92%', top: '24%', size: 85, rotate: 8, opacity: 0.8 },

      // 🔹 Mid Left
      { left: '8%', top: '44%', size: 95, rotate: 3, opacity: 0.75 },
      { left: '22%', top: '52%', size: 85, rotate: -5, opacity: 0.8 },

      // 🔹 Mid Right
      { left: '82%', top: '46%', size: 95, rotate: 5, opacity: 0.8 },
      { left: '94%', top: '48%', size: 90, rotate: -6, opacity: 0.78 },

      // 🔹 Lower Left
      { left: '10%', top: '68%', size: 95, rotate: 6, opacity: 0.78 },
      { left: '20%', top: '78%', size: 90, rotate: -7, opacity: 0.8 },
      { left: '8%', top: '88%', size: 85, rotate: 4, opacity: 0.75 },

      // 🔹 Lower Right
      { left: '74%', top: '64%', size: 90, rotate: -4, opacity: 0.8 },
      { left: '86%', top: '76%', size: 85, rotate: 6, opacity: 0.78 },
      { left: '92%', top: '88%', size: 90, rotate: -5, opacity: 0.8 },
    ];


    return presets[index % presets.length];
  }

  return (
    <section className="relative pt-20 md:pt-20 lg:pt-20 pb-12 px-4 text-center overflow-hidden old-tv">
      {/* Repeating text background */}
      <div
        className="absolute top-[-100px] md:top-[-150px] lg:top-[-200px] left-0 right-0 flex flex-col items-center pointer-events-none z-0"
        style={{
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%, transparent 100%)',
        }}
      >
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="font-monster text-[40px] md:text-[60px] lg:text-[80px] whitespace-nowrap tracking-widest leading-[30px] md:leading-[45px] lg:leading-[60px] opacity-30"
            style={{
              WebkitTextStroke: `1px ${currentConfig.accentColor}`,
              color: 'transparent',
              letterSpacing: '0em',
            }}
          >
            {currentConfig.backgroundText}
          </div>
        ))}
      </div>

      {/* SVG background */}
      <div
        className="absolute inset-[-50px] md:inset-[-75px] lg:inset-[-100px] flex items-center justify-center pointer-events-none z-0"
        style={{
          transform: `translate(${currentConfig.svgTranslateX}, calc(${currentConfig.svgTranslateY} - 20px)) ${currentConfig.svgFlipped ? 'scaleX(-1)' : 'scaleX(1)'}`,
        }}
      >
        <img
          src="/backgrounds/3.png"
          alt=""
          className="w-[600px] h-full object-contain"
        />
      </div>


      {/* 🔹 Background Logos (static, instant update) */}
      <div className="absolute inset-0 pointer-events-none z-[25]">
        {teams.slice(0, 16).map((team, i) => {
          const pos = logoPosition(i);
          const style: React.CSSProperties = {
            position: "absolute",
            left: pos.left,
            top: pos.top,
            width: pos.size,
            height: pos.size,
            transform: `translate(-50%, -50%) rotate(${pos.rotate}deg)`,
            objectFit: "contain",
            opacity: pos.opacity,
            filter:
              "sepia(0.45) contrast(1.08) saturate(0.68) brightness(0.86) blur(0.4px)",
            mixBlendMode: "screen",
            pointerEvents: "none",
          };
          return (
            <img
              key={team.logo_url + i}
              src={team.logo_url}
              alt={team.group_name}
              style={{
                ...style,
                animation: `flickerg ${2 + Math.random() * 3}s infinite ease-in-out`,
              }}
            />

          );
        })}
      </div>

      {/* Hero title and description */}
      <div className="max-w-6xl mx-auto relative z-20 flex flex-col items-center gap-6">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <div
            className="font-monster tracking-[0.09em] [text-shadow:0_2px_7.2px_rgba(255,255,255,0.1)]"
            style={{
              backgroundImage: currentConfig.titleGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              WebkitTextStroke: "1px black",
              filter: currentConfig.titleGlow,
              display: "inline-block",
            }}
          >
            <p
              className="text-[60px] md:text-[85px] lg:text-[110px] leading-[50px] md:leading-[70px] lg:leading-[85px] mb-0"
              style={{ letterSpacing: "-0.02em", whiteSpace: "pre-line" }}
            >
              {title.replace(" ", "\n")}
            </p>

          </div>
        </div>

        <p className="text-white/100 max-w-[754px] mx-auto font-helvetica text-[14px] md:text-[16px] lg:text-[20px] px-4 mt-16">
          {description}
        </p>
      </div>
    </section>
  );
}

export default Hero;

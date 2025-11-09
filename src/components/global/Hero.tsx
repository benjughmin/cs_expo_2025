"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TextType from "@/components/TextType";

interface HeroProps {
  title: string;
  description: string;
  variant?: 'expo' | 'devday';
  textDirection?: 'vertical' | 'horizontal' | 'horizontal-left' | 'horizontal-right' | 'diagonal-right' | 'diagonal-left';
}

function Hero({
  title,
  description,
  variant = 'expo',
  textDirection = 'vertical'
}: HeroProps) {
  const pathname = usePathname();

  // Variant-specific configurations
  const config = {
    expo: {
      backgroundText: 'CS EXPO',
      accentColor: '#FF37E3',
      titleGradient: 'linear-gradient(180deg, #FFFFFF 10%, #FFFFFF 0%, #FF37E3 30%, #FF00DC 70%, #FF00DC 100%)',
      titleGlow: 'drop-shadow(0px 0px 4px rgba(255, 55, 227, 0.8))',
      // white "inner" text shadow (use via `textShadow` / `textShadow` style on the title)
      titleInnerShadow: '0 10px 0 rgba(255,255,255,0.95), 0 -10px 0 rgba(255,255,255,0.6), 0 6px 18px rgba(255,255,255,0.06)',
      // smaller highlight for the repeating background text
      backgroundTextInnerShadow: '0 1px 0 rgba(255,255,255,0.9), 0 -1px 0 rgba(255,255,255,0.35)',
      svgFlipped: false,
      svgTranslateY: '-25px',
      svgTranslateX: '0px',
      buttonColor: '#FF37E3'
    },
    devday: {
      backgroundText: 'DEV DAY',
      accentColor: '#5C0BDE',
      titleGradient: 'linear-gradient(180deg, #FFFFFF 10%, #FFFFFF 0%, #5C0BDE 30%, #5C0BDE 70%, #5C0BDE 100%)',
      titleGlow: 'drop-shadow(0px 0px 4px rgba(92, 11, 222, 0.8))',
      // white "inner" text shadow for devday
      titleInnerShadow: '0 1px 0 rgba(255,255,255,0.95), 0 -1px 0 rgba(255,255,255,0.6), 0 6px 18px rgba(255,255,255,0.06)',
      backgroundTextInnerShadow: '0 1px 0 rgba(255,255,255,0.9), 0 -1px 0 rgba(255,255,255,0.35)',
      svgFlipped: true,
      svgTranslateY: '-50px',
      svgTranslateX: '0px',
      buttonColor: '#5C0BDE'
    }
  };

  const currentConfig = config[variant];

  // Direction-specific configurations
  const getDirectionStyles = () => {
    switch (textDirection) {
      case 'vertical':
        return {
          containerClass: 'flex-col items-center',
          textClass: 'whitespace-nowrap',
          rotation: 'rotate-0',
          backgroundPosition: 'left-0'
        };
      case 'horizontal-left':
        return {
          containerClass: 'flex-row-reverse items-start',
          textClass: 'whitespace-nowrap',
          rotation: 'rotate-0',
          backgroundPosition: 'right-[-100px]'
        };
      case 'horizontal-right':
        return {
          containerClass: 'flex-row items-start',
          textClass: 'whitespace-nowrap',
          rotation: 'rotate-0',
          backgroundPosition: 'left-[-100px]'
        };
      default:
        return {
          containerClass: 'flex-col items-center',
          textClass: 'whitespace-nowrap',
          rotation: 'rotate-0',
          backgroundPosition: 'left-0'
        };
    }
  };

  const directionStyles = getDirectionStyles();
  const isHorizontalLayout = textDirection === 'horizontal-left' || textDirection === 'horizontal-right';
  const isLeft = textDirection === 'horizontal-left';

  const horizontalTranslateXValue = isLeft ? 1 : -1;
  const horizontalTranslateXStr = `${horizontalTranslateXValue}px`;

  return (
    <section className="relative pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 md:pb-12 px-4 text-center overflow-hidden">
      {!isHorizontalLayout && (
        <>
          {/* Repeating text background - Vertical only */}
          <div
            className={`absolute top-[-100px] md:top-[-150px] lg:top-[-200px] left-0 right-0 flex ${directionStyles.containerClass} pointer-events-none z-0 ${directionStyles.rotation}`}
            style={{
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%, transparent 100%)'
            }}
          >
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`font-monster text-[40px] md:text-[60px] lg:text-[80px] ${directionStyles.textClass} tracking-widest ${textDirection === 'horizontal'
                    ? 'leading-[60px] md:leading-[80px] lg:leading-[100px] mr-8 md:mr-12 lg:mr-16'
                    : 'leading-[30px] md:leading-[45px] lg:leading-[60px]'
                  } opacity-30`}
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

          {/* SVG Background - Vertical only */}
          <div
            className="absolute inset-[-50px] md:inset-[-75px] lg:inset-[-100px] flex items-center justify-center pointer-events-none z-0"
            style={{
              transform: `translate(calc(${currentConfig.svgTranslateX}), calc(${currentConfig.svgTranslateY} + 10px)) ${currentConfig.svgFlipped ? 'scaleX(-1)' : 'scaleX(1)'}`
            }}
          >
            <img
              src="/backgrounds/3.png"
              alt=""
              className="w-auto h-full object-contain"
            />
          </div>
        </>
      )}

      {isHorizontalLayout ? (
        <div className="max-w-7xl mx-auto relative z-10 min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-16 relative">
            {/* SVG Background - Behind title */}
            <div
              className={`absolute inset-0 hidden lg:flex items-center pointer-events-none z-0 ${isLeft ? 'justify-end' : 'justify-start'}`}
              style={{ pointerEvents: 'none' }}
            >
              <img
                src="/backgrounds/3.png"
                alt=""
                className="w-[400px] lg:w-[500px] xl:w-[600px] h-auto object-contain opacity-50"
                style={{
                  transform: `translateY(calc(${currentConfig.svgTranslateY} + 25px)) translateX(${horizontalTranslateXStr}) scaleX(${isLeft || currentConfig.svgFlipped ? -1 : 1})`
                }}
              />
              <div
                className={`absolute top-1/2 ${isLeft ? 'right-1/12' : 'left-1/5 -translate-x-1/2'} -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[100px] opacity-30`}
                style={{
                  background: `radial-gradient(ellipse at center, ${currentConfig.accentColor}, transparent 90%)`
                }}
              ></div>
              <div
                className={`absolute top-1/2 ${isLeft ? 'right-1/12' : 'left-1/5 -translate-x-1/2'} -translate-y-1/2 w-[400px] h-[250px] rounded-full blur-[80px] opacity-40`}
                style={{
                  background: `radial-gradient(ellipse at center, ${currentConfig.accentColor}, transparent 80%)`
                }}
              ></div>
              <div
                className={`absolute top-1/2 ${isLeft ? 'right-1/12' : 'left-1/5 -translate-x-1/2'} -translate-y-1/2 w-[300px] h-[200px] rounded-full blur-[60px] opacity-50`}
                style={{
                  background: `radial-gradient(ellipse at center, ${currentConfig.accentColor}, transparent 70%)`
                }}
              ></div>
            </div>

            {/* Repeating text background - Beside title */}
            <div
              className={`absolute hidden lg:flex ${isLeft ? 'right-[-300px]' : 'left-[-300px]'} top-1/2 -translate-y-7/16 flex-col pointer-events-none z-0`}
              style={{
                maskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%)',
                WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%)'
              }}
            >
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="font-monster text-[70px] md:text-[80px] lg:text-[100px] whitespace-nowrap tracking-widest leading-[50px] md:leading-[65px] lg:leading-[80px] opacity-20"
                  style={{
                    WebkitTextStroke: `2px ${currentConfig.accentColor}`,
                    color: 'transparent',
                    letterSpacing: '0em'
                  }}
                >
                  {currentConfig.backgroundText}
                </div>
              ))}
            </div>

            {/* If horizontal-left: put Description/CTA on the left, Title on the right (reversed) */}
            {isLeft ? (
              <>
                {/* Title - Mobile first, Desktop right */}
                <div
                  className="font-monster tracking-[0.09em] [text-shadow:0_2px_7.2px_rgba(255,255,255,0.1)] flex-shrink-0 relative z-10 w-full lg:max-w-[280px] xl:max-w-[400px] 2xl:max-w-[600px] order-1 lg:order-2"
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
                    className="text-[40px] sm:text-[50px] md:text-[70px] lg:text-[90px] xl:text-[120px] leading-[35px] sm:leading-[45px] md:leading-[60px] lg:leading-[75px] xl:leading-[100px] text-center lg:text-left"
                    style={{
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {title}
                  </p>
                </div>

                {/* Description and Button - Desktop left */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:max-w-[500px] relative z-10 order-2 lg:order-1">
                  <div className="text-white/100 font-helvetica text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6">
                    <p>{description}</p>
                  </div>
                  <Link
                    href="/events/devday"
                    className="text-white font-semibold text-xs sm:text-sm py-2 px-4 sm:px-6 rounded-md transition-all hover:brightness-110 inline-block"
                    style={{ backgroundColor: currentConfig.buttonColor }}
                  >
                    Learn More
                  </Link>
                </div>
              </>
            ) : (
              <>
                {/* Title - Mobile first, Desktop left */}
                <div
                  className="font-monster tracking-[0.09em] [text-shadow:0_2px_7.2px_rgba(255,255,255,0.1)] flex-shrink-0 relative z-10 w-full lg:max-w-[280px] xl:max-w-[400px] 2xl:max-w-[600px] order-1"
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
                    className="text-[40px] sm:text-[50px] md:text-[70px] lg:text-[90px] xl:text-[120px] leading-[35px] sm:leading-[45px] md:leading-[60px] lg:leading-[75px] xl:leading-[100px] text-center lg:text-left"
                    style={{
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {title}
                  </p>
                </div>

                {/* Description and Button - Desktop right */}
                <div className="flex flex-col items-center lg:items-end text-center lg:text-right w-full lg:max-w-[500px] relative z-10 order-2">
                  <div className="text-white/100 font-helvetica text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6">
                    <p>{description}</p>
                  </div>
                  <Link
                    href="/events/expo"
                    className="text-white font-semibold text-xs sm:text-sm py-2 px-4 sm:px-6 rounded-md transition-all hover:brightness-110 inline-block"
                    style={{ backgroundColor: currentConfig.buttonColor }}
                  >
                    Learn More
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        /* Vertical/Center Layout */
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
      )}
    </section>
  );
}

export default Hero;
"use client";

import TeamCategoryBox from './TeamCategoryBox';

interface Team {
  name: string;
  category: string;
}

interface EventDaySectionProps {
  title: string;
  date: string;
  time: string;
  description: string;
  keynoteTitle?: string;
  keynoteSubtitle?: string;
  keynoteDescription?: string;
  categories: string[];
  teams: Team[];
  boxOnLeft?: boolean; // Box on left, content on right
}

function EventDaySection({title, date, time, description, keynoteTitle, keynoteSubtitle, keynoteDescription, categories, teams, boxOnLeft = false}: EventDaySectionProps) {
  return (
    <section className="pt-0 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-30 lg:items-center">
          
          {/* Teams/Categories Box - Order 3 on mobile, Order 1 or 2 on desktop */}
          <div className={`w-full order-3 ${boxOnLeft ? 'lg:order-1' : 'lg:order-2'}`}>
            <TeamCategoryBox categories={categories} teams={teams} />
          </div>

          {/* Event Info - Order 1 on mobile, Order 1 or 2 on desktop */}
          <div className={`space-y-6 order-1 ${boxOnLeft ? 'lg:order-2' : 'lg:order-1'}`}>
            {/* Title */}
            <p 
              className="font-avolta font-normal md:text-[48px] text-4xl text-white leading-[40px] tracking-[0.1em] mb-0 align-middle"
              style={{
                filter: 'drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.8))'
              }}
            >
              {title}
            </p>
            
            {/* Date and Time */}
            <p 
              className="font-dreamer font-normal md:text-[20px] text-sm text-[#FF00DC] leading-[20px] tracking-[0.1em]"
              style={{
                filter: 'drop-shadow(0px 0px 4.4px rgba(255, 0, 220, 0.8))'
              }}
            >
              {date} | {time}
            </p>
            
            {/* Description */}
            <p className="font-helvetica font-medium md:text-[16px] text-sm text-white leading-[20px] ">
              {description}
            </p>

            {/* Keynote Talk Section */}
            <div className="space-y-4 text-right">
              {/* Keynote Title */}
              <p 
                className="font-avolta font-normal md:text-[36px] text-4xl text-white leading-[40px] tracking-[0.1em] mb-0 align-middle"
                style={{
                  filter: 'drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.8))'
                }}
              >
                {keynoteTitle}
              </p>

              {/* Keynote Subtitle */}
              <p 
                className="font-dreamer font-normal md:text-[20px] text-sm text-[#FF00DC] leading-[20px] tracking-[0.1em]"
                style={{
                  filter: 'drop-shadow(0px 0px 4.4px rgba(255, 0, 220, 0.8))'
                }}
              >
                {keynoteSubtitle}
              </p>

              {/* Keynote Description */}
              <p className="text-white/90 text-sm md:[20px] leading-relaxed font-helvetica mb-0">
                {keynoteDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventDaySection;

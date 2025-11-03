"use client";

import TeamCategoryBox from './TeamCategoryBox';

interface Team {
  name: string;
  category?: string;
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
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Teams/Categories Box */}
          <div className={`w-full ${boxOnLeft ? 'lg:order-1' : 'lg:order-2'}`}>
            <TeamCategoryBox categories={categories} teams={teams} />
          </div>

          {/* Event Info */}
          <div className={`space-y-6 ${boxOnLeft ? 'lg:order-2' : 'lg:order-1'}`}>
            {/* Title */}
            <h2 className="text-4xl md:text-6xl text-white font-avolta">
              {title}
            </h2>
            
            {/* Date and Time */}
            <p className="font-dreamer text-sm md:text-base text-[#FF00DC]">
              {date} | {time}
            </p>
            
            {/* Description */}
            <p className="text-white/90 text-sm md:text-base leading-relaxed font-helvetica">
              {description}
            </p>

            {/* Keynote Talk Section */}
            {keynoteTitle && (
              <div className="mt-12 space-y-4 text-right">
                <h3 className="text-3xl md:text-5xl text-white font-avolta">
                  {keynoteTitle}
                </h3>
                {keynoteSubtitle && (
                  <p 
                    className="text-xl md:text-2xl font-dreamer"
                    style={{
                      background: 'linear-gradient(to bottom, #FF00DC, #FFFFFF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {keynoteSubtitle}
                  </p>
                )}
                {keynoteDescription && (
                  <p className="text-white/80 text-sm md:text-base leading-relaxed font-helvetica">
                    {keynoteDescription}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventDaySection;

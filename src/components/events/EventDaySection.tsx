"use client";

import React, { useEffect, useRef } from "react";
import TeamCategoryBox from "./TeamCategoryBox";

interface Team {
  id?: string;
  name: string;
  category: string;
  logo?: string;
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
  teams: any[];
  boxOnLeft?: boolean;
  onFocus?: () => void; // 🟣 add this
}

function EventDaySection({
  title,
  date,
  time,
  description,
  keynoteTitle,
  keynoteSubtitle,
  keynoteDescription,
  categories,
  teams,
  boxOnLeft = false,
  onFocus,
}: EventDaySectionProps) {
  return (
    <section
      className="pt-0 pb-16 px-4 md:px-8"
      onMouseEnter={onFocus} // 🟣 trigger Hero update on hover/focus
      onFocus={onFocus}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-30 lg:items-center">
          {/* Team Box */}
          <div
            className={`w-full order-3 ${
              boxOnLeft ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <TeamCategoryBox categories={categories} teams={teams} />
          </div>

          {/* Info */}
          <div
            className={`space-y-6 order-1 ${
              boxOnLeft ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <p
              className="font-avolta font-normal md:text-[48px] text-4xl text-white leading-[40px]"
              style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.8))" }}
            >
              {title}
            </p>
            <p
              className="font-dreamer md:text-[20px] text-sm text-[#FF00DC]"
              style={{
                filter: "drop-shadow(0 0 4px rgba(255,0,220,0.8))",
              }}
            >
              {date} | {time}
            </p>
            <p className="font-helvetica text-white text-sm md:text-[16px] leading-[20px]">
              {description}
            </p>

            <div
              className={`space-y-4 ${
                boxOnLeft ? "text-left" : "text-right"
              }`}
            >
              <p className="font-avolta text-4xl md:text-[36px] text-white">
                {keynoteTitle}
              </p>
              <p className="font-dreamer text-[#FF00DC] text-sm md:text-[20px]">
                {keynoteSubtitle}
              </p>
              <p className="text-white/90 text-sm md:text-[20px] leading-relaxed font-helvetica mb-0">
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

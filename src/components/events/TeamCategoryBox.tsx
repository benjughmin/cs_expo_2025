"use client";

import { useState, useEffect } from "react";

interface Team {
  name: string;
  category: string;
}

interface TeamCategoryBoxProps {
  categories: string[];
  teams: Team[];
  onCategorySelect?: (category: string) => void; // 🟣 NEW callback prop
}

function TeamCategoryBox({ categories, teams, onCategorySelect }: TeamCategoryBoxProps) {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0] || "");

  // 🟣 Notify parent when category changes
  useEffect(() => {
    if (activeCategory && onCategorySelect) {
      onCategorySelect(activeCategory);
    }
  }, [activeCategory, onCategorySelect]);

  const filteredTeams = teams.filter((team) => team.category === activeCategory);

  return (
    <div className="border border-white rounded-[20px] p-6 md:p-8 px-[24px] py-[18px]">
      {/* Category Pills at Top */}
      <div className="flex flex-wrap justify-center gap-[10px] mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`h-[30px] px-[15px] py-[5px] rounded-[8px] text-[12px] font-helvetica font-semibold flex items-center justify-center whitespace-nowrap transition-all duration-200 cursor-pointer
              ${
                activeCategory === category
                  ? "border-2 border-[#FF37E3] text-[#FF37E3]"
                  : "border border-white text-white hover:bg-[#FF37E3] hover:text-white hover:border-[#FF37E3]"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white mb-6"></div>

      {/* Teams Grid */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {filteredTeams.map((team, index) => (
          <div key={index} className="text-center">
            <p className="text-white text-[24px] font-helvetica">{team.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamCategoryBox;

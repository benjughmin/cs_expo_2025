"use client";

interface Team {
  name: string;
  category?: string;
}

interface TeamCategoryBoxProps {
  categories: string[];
  teams: Team[];
}

function TeamCategoryBox({ categories, teams }: TeamCategoryBoxProps) {
  return (
    <div 
      className="border border-white/30 rounded-3xl p-6 md:p-8 backdrop-blur-sm"
      style={{
        background: 'rgba(255, 255, 255, 0.05)'
      }}
    >
      {/* Category Tags */}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
        {categories.map((category, index) => (
          <span 
            key={index}
            className="px-4 py-2 border border-white/50 rounded-full text-white text-xs md:text-sm font-helvetica"
          >
            {category}
          </span>
        ))}
      </div>

      {/* Divider Line */}
      <div className="w-full h-px bg-white/30 mb-6"></div>

      {/* Teams Grid */}
      <div className="grid grid-cols-2 gap-4">
        {teams.map((team, index) => (
          <div 
            key={index}
            className="text-center py-4"
          >
            <p className="text-white text-base md:text-lg font-helvetica">
              {team.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamCategoryBox;

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
    <div className="border border-white rounded-[20px] p-6 md:p-8 px-[24px] py-[18px]">
      {/* Category Pills at Top */}
      <div className="flex flex-wrap justify-center gap-[10px] mb-6">
        {categories.map((category, index) => (
          <span 
            key={index}
            className="h-[30px] px-[15px] py-[5px] border border-white rounded-[8px] text-white text-[12px] font-helvetica font-semibold flex items-center justify-center whitespace-nowrap"
          >
            {category}
          </span>
        ))}
      </div>

      {/* Horizontal Divider */}
      <div className="w-full h-px bg-white mb-6"></div>

      {/* Teams Grid - 2 columns */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {teams.map((team, index) => (
          <div key={index} className="text-center">
            <p className="text-white text-[24px] font-helvetica">
              {team.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamCategoryBox;

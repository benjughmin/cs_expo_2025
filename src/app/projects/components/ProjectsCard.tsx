{/* This component represents an individual project card used in the Projects grid layout. */}
export default function ProjectsCard() {
  return (
    <div className="bg-gradient-to-br from-[#1E003D] via-[#0F001E] to-[#1E003D] p-4 rounded-3xl relative">
      <div className="bg-[#0f001e] p-2 rounded-2xl">
        <div className="bg-neutral-700 w-full aspect-[4/3] rounded-xl mb-4"></div>

      <h3 className="text-pink-500 font-bold tracking-widest text-sm">
        APP TITLE
      </h3>

      <p className="text-neutral-300 mt-2 text-sm leading-relaxed">
        Agile: Employing Knowledge-Based Recommendations in Crime Mapping for
        Manila City using ARIMA Forecasting Algorithm
      </p>
    </div>
  </div>
  );
}

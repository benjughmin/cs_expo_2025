{
  /* This component represents an individual project card used in the Projects grid layout. */
}
export default function ProjectsCard() {
  return (
    <div className="bg-gradient-to-b from-[#FF00DC] via-black/80 to-black p-6 rounded-[24px] w-[400px] h-[574px] flex flex-col">
      {/* Image Placeholder */}
      <div className="bg-[#D9D9D9] w-[332px] h-[406px] rounded-[16px] mb-4 mx-auto"></div>
      {/* Text Content */}
      <div className="flex flex-col">
        <h3 className="text-[#FF00FF] font-bold tracking-widest text-sm mb-2">
          APP TITLE
        </h3>
        <p className="text-white text-sm leading-relaxed">
          Agile: Employing Knowledge-Based Recommendations in Crime Mapping for
          Manila City using ARIMA Forecasting Algorithm
        </p>
      </div>
    </div>
  );
}

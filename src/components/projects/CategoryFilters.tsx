{/* This component represents the category filter buttons. */}

//Sample for UI only, still don't know how categories will be handled in the database
export default function CategoryFilters() {
  const categories = [
    "Category",
    "Category",
    "Category",
    "Category",
    "Category",
    "Category",
  ];

return (
    <section className="w-full py-8 flex flex-wrap items-center justify-center gap-10 mb-8">
      {categories.map((category, index) => (
        <button
          key={index}
          className="w-[176px] font-bold h-[56px] text-lg text-white border-2 border-white/50 rounded-full hover:bg-white/10 transition-colors"
        >
          {category}
        </button>
      ))}
    </section>
  );
}
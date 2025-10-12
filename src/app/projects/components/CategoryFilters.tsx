{/* This component represents the category filter buttons. */}
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
    <section className="w-full py-8 flex flex-wrap items-center justify-evenly gap-10 mb-8">
      {categories.map((category, index) => (
        <button
          key={index}
          className="w-[176px] h-[56px] text-lg text-white border border-white/50 rounded-full hover:bg-white/10 transition-colors"
        >
          {category}
        </button>
      ))}
    </section>
  );
}
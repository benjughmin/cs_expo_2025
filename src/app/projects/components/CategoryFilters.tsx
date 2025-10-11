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
    <section className="w-full max-w-6xl mx-auto py-8">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-6 py-2 text-white border border-white/50 rounded-full hover:bg-white/10 transition-colors"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}

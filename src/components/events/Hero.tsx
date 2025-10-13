interface HeroProps {
  // NOTE: Not sure if necessary.
  title: string,
  year: string,
  description: string,
  tabs: string[]
}

function Hero({title, year, description, tabs}: HeroProps) {
  return(
    <section className="relative py-20 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">
          {title}
          <span className="block text-pink-500">2025</span>
        </p>
        <p className="text-white/80 max-w-3xl mx-auto mb-8">
          {description}
        </p>
        
        {/* Day Tabs */}
        <div className="flex justify-center gap-8 text-white">
          <button className="px-6 py-2 border-b-2 border-white">{tabs[0]}</button>
          <button className="px-6 py-2 hover:border-b-2 hover:border-white/50">{tabs[1]}</button>
          <button className="px-6 py-2 hover:border-b-2 hover:border-white/50">{tabs[2]}</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
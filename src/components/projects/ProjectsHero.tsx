{/* This component represents the hero section of the Projects page. It includes a title and a descriptive paragraph. */}
export default function ProjectsHero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-6xl font-bold tracking-wider">
        PROJECT COLLECTION
      </h1>

      <p className="max-w-4xl mt-8 text-neutral-300 leading-relaxed">
        Join the first day of CS EXPO as bright fourth-year students present their innovative thesis with topics regarding data analytics, health, and natural language processing. Under the data analytics category are groups Agatha, LMNTRX, and Strawhats. For the health category, Code Gcess, Hurtz, Lorem Ipsum, and Samsan. Lastly, for the natural language processing category are the thesis groups Coder, Ctrl Alt Delete, EnSys, Jethro's Matrix, and LMDIFY.
      </p>
    </section>
  );
}


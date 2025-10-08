export function AwardWinners() {
  return (
    <section className="flex flex-col items-center gap-6 bg-cyan-400 p-4 pt-10 md:gap-8 md:p-6 lg:gap-10 lg:p-8">
      
      {/* award 1 */}
      <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">Award Title 1</h1>
      <div className="flex w-full flex-col items-center justify-center gap-4 bg-white p-4 md:w-4/5 md:flex-row lg:w-2/3">
        <div className="flex h-100 w-full items-center justify-center bg-lime-400  md:w-1/3 ">1</div>
        <div className="flex h-100 w-full items-center justify-center bg-red-400 md:w-1/3 ">2</div>
        <div className="flex h-100 w-full items-center justify-center bg-fuchsia-400 md:w-1/3">3</div>
      </div>

      {/* award 2 */}
      <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">Award Title 2</h1>
      <div className="flex w-full flex-col items-center justify-center gap-4 bg-white p-4 md:w-4/5 md:flex-row lg:w-2/3">
        <div className="flex h-100 w-full items-center justify-center bg-lime-400  md:w-1/3 ">1</div>
        <div className="flex h-100 w-full items-center justify-center bg-red-400 md:w-1/3 ">2</div>
        <div className="flex h-100 w-full items-center justify-center bg-fuchsia-400 md:w-1/3">3</div>
      </div>

      {/* award 3 */}
      <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">Award Title 3</h1>
      <div className="flex w-full flex-col items-center justify-center gap-4 bg-white p-4 md:w-4/5 md:flex-row lg:w-2/3">
        <div className="flex h-100 w-full items-center justify-center bg-lime-400  md:w-1/3 ">1</div>
        <div className="flex h-100 w-full items-center justify-center bg-red-400 md:w-1/3 ">2</div>
        <div className="flex h-100 w-full items-center justify-center bg-fuchsia-400 md:w-1/3">3</div>
      </div>

    </section>
  );
}

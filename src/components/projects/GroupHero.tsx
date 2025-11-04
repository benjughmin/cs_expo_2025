import Image from "next/image";

type GroupHeroProps = {
  appTitle: string;
  groupName: string;
  logo?: string;
};

export default function GroupHero({ appTitle, groupName, logo }: GroupHeroProps) {
  return (
    <section className="relative flex flex-col">
      <div
        className="relative flex h-[100vh] flex-col items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, 
              transparent 0%, 
              #0F0019 95%
            ),
            url('/projects/placeholderheader.png')
          `,
        }}
      >
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            aria-hidden
            className="h-[450px] w-[85%] max-w-8xl animate-[pulseGlow_4s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,0,204,0.25)_0%,rgba(200,0,255,0.15)_30%,rgba(0,0,0,0)_70%)] blur-[80px]"
          />
        </div>

        {/* Hero content */}
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 gap-12 text-center">
          {/* Group Logo */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
            {/* Placeholder box - uncomment Image component below when logo is ready */}
            <div className="w-full h-full bg-white flex items-center justify-center">
              <span className="text-gray-300 text-sm font-semibold">LOGO</span>
            </div>

            {/* Uncomment when ready to use actual logo
            {logo && (
              <Image
                src={logo}
                alt={`${groupName} logo`}
                fill
                className="object-contain drop-shadow-[0_0_10px_rgba(255,0,204,0.5)]"
                priority
              />
            )}
            */}
          </div>

          <h1 className="font-monster text-gradient mb-0 text-2xl leading-[100px] -tracking-[2px] md:text-8xl lg:text-[96px] px-6 overflow-visible"
            style={{
              '--gradient-stop': '20%',
              '--gradient-pink': '40%'
            } as React.CSSProperties}
          >
            {appTitle}
          </h1>

          <h2
            className="text-4xl mb-6 text-center font-avolta z-10"
            style={{
              letterSpacing: '4px',
              color: '#ffffff',
              textShadow: '0 0 6px rgba(255, 255, 255, 0.8)'
            }}
          >
            by {groupName}
          </h2>
        </div>
      </div>
    </section>
  );
}
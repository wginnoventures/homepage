import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden p-4">
      <div className="flex flex-col items-center justify-center gap-0 max-h-[calc(100vh-8rem)]">
        <Image
          src="/logo.svg"
          alt="WG Innoventures Logo"
          width={600}
          height={600}
          priority
          className="w-96 h-auto sm:w-[28rem] md:w-[32rem] lg:w-[40rem] flex-shrink-0"
        />
        <div className="text-content flex flex-col items-center gap-2 sm:gap-3 md:gap-4 flex-shrink">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            WG Innovation Ventures
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl text-center italic">
            Empowering Extraordinary Ideas
          </p>
        </div>
      </div>

      <footer className="absolute bottom-4 sm:bottom-6 md:bottom-8">
        <a
          href="mailto:hey@wginnoventures.com"
          className="text-white/80 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
        >
          hey@wginnoventures.com
        </a>
      </footer>
    </main>
  );
}

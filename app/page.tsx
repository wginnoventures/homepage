import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden p-4">
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 max-h-[calc(100vh-8rem)]">
        <Image
          src="/logo.svg"
          alt="WG Innoventures Logo"
          width={300}
          height={300}
          priority
          className="w-48 h-auto sm:w-56 md:w-64 lg:w-80 flex-shrink-0"
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

import FuturePlan from "./components/FuturePlan";
import Hero from "./components/Hero";
import Mission from "./components/mission";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="flex flex-col items-center justify-center w-full">
        <Hero />
        <Mission />
        <div className="w-full max-w-7xl mx-auto px-4 py-16">
          <FuturePlan />
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-6 text-white">
            Support Us
          </h1>
          <p className="text-lg md:text-xl text-center mb-12 text-neutral-400 max-w-3xl mx-auto">
            Help us bring digital education to everyone through innovative
            technology.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <button className="bg-black text-white text-lg font-bold px-4 py-2 rounded-md border border-white hover:shadow-[0_0_10px_white] transition-all duration-300">
              Donate
            </button>

            <button className="bg-black text-white text-lg font-bold px-4 py-2 rounded-md border border-white hover:shadow-[0_0_10px_white] transition-all duration-300">
              Volunteer
            </button>

            <p className="text-lg md:text-xl text-center mb-12 text-neutral-400 max-w-3xl mx-auto">
              Help us bring digital education to everyone through innovative
              technology.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

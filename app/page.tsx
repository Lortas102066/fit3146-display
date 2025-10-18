import FuturePlan from "./components/FuturePlan";
import Hero from "./components/Hero";
import Why from "./components/Why";
import GameTutorial from "./components/GameTutorial";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="flex flex-col items-center justify-center w-full">
        <Hero />
        <Why />
        <GameTutorial />
        <div className="w-full max-w-7xl mx-auto px-4 py-16">
          <FuturePlan />
        </div>
      </div>
    </main>
  );
}

import FuturePlan from "./components/FuturePlan";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Why from "./components/Why";
import How from "./components/How";
import GameTutorial from "./components/GameTutorial";
import InvestmentPlan from "./components/InvestmentPlan";
import MetricsSection from "./components/MetricsSection";
import GitHubSection from "./components/GitHubSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="flex flex-col items-center justify-center w-full">
        <Hero />
        <Who />
        <Why />
        <How />
        <GameTutorial />
        <MetricsSection />
        <div className="w-full max-w-7xl mx-auto px-4 py-16">
          <FuturePlan />
        </div>
        <InvestmentPlan />
        <GitHubSection />
      </div>
    </main>
  );
}

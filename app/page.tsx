import FuturePlan from "./components/FuturePlan";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <Hero />
        <h1 className="text-4xl font-bold">Future Plans</h1>
        <h2 className="text-lg">Our roadmap for upcoming features and improvements</h2>
        <FuturePlan
          title="Project Roadmap"
          description="Our development timeline"
          items={["Phase 1: Setup", "Phase 2: Development", "Phase 3: Testing"]}
        />
      </div>

    </main>
  );
}
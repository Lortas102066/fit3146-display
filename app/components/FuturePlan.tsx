import React from "react";
import { Timeline } from "@/components/ui/timeline";
 
export default function FuturePlan() {
  const data = [
    {
      title: "Orange Pi Mini Laptop Prototype",
      content: (
        <div className="space-y-4">
          <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
            Developed the first Linux Hero prototype using Orange Pi hardware. This compact, affordable laptop 
            leverages Linux&apos;s cost-effectiveness, open-source nature, and extensive educational software ecosystem. 
            Linux provides zero licensing costs, robust security, and unlimited customization for learning environments.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Orange Pi Hardware</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Linux</span>
            <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Educational Focus</span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Prototype Development</span>
          </div>
        </div>
      ),
    },
    {
      title: "Electron Game Tutorial Development",
      content: (
        <div className="space-y-4">
          <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
            Created an interactive game tutorial built with Electron framework to teach Linux basics 
            through engaging gameplay. This cross-platform application makes learning Linux commands 
            and concepts fun and accessible for students of all ages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Electron Framework</h4>
              <p className="text-neutral-400 text-sm">Cross-platform desktop application for seamless learning</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Interactive Learning</h4>
              <p className="text-neutral-400 text-sm">Game-based approach to Linux education</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Open Source Community & Future Roadmap",
      content: (
        <div className="space-y-6">
          <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
            Launched the project as open source to encourage community contributions and collaboration. 
            Future plans include expanding educational content, improving hardware design, and reaching 
            underserved communities with affordable technology education.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 bg-neutral-800/30 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-neutral-300 text-sm">Open source GitHub repository</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-neutral-800/30 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-neutral-300 text-sm">Community-driven development</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-neutral-800/30 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-neutral-300 text-sm">Educational content expansion</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-neutral-800/30 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-neutral-300 text-sm">Hardware optimization</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-neutral-800/30 rounded-lg md:col-span-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-neutral-300 text-sm">Global accessibility initiatives</span>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <Timeline data={data} />
    </div>
  );
}
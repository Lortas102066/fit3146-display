import React from "react";
import { Timeline } from "@/components/ui/timeline";
 
export default function FuturePlan() {
  const data = [
    {
      title: "Placeholder 1",
      content: (
        <div className="space-y-4">
          <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
            Launched the Linux Hero project with initial hardware design and software development. 
            This marked the beginning of our journey to create an affordable, educational laptop.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Hardware Design</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Software Development</span>
            <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Educational Focus</span>
          </div>
        </div>
      ),
    },
    {
      title: "Placeholder 2",
      content: (
        <div className="space-y-4">
          <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
            Developed the core educational software platform and user interface design. 
            Focused on creating an intuitive learning experience for students of all ages and technical backgrounds.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Platform Development</h4>
              <p className="text-neutral-400 text-sm">Built scalable educational content management system</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">User Experience</h4>
              <p className="text-neutral-400 text-sm">Designed intuitive interface for all skill levels</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Placeholder 3",
      content: (
        <div className="space-y-6">
          <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
            Recent updates and feature releases that enhance the educational experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 bg-neutral-800/30 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-neutral-300 text-sm">Educational content management system</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-neutral-800/30 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-neutral-300 text-sm">Offline learning capabilities</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-neutral-800/30 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-neutral-300 text-sm">Multi-language support</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-neutral-800/30 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-neutral-300 text-sm">Parent/teacher dashboard</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-neutral-800/30 rounded-lg md:col-span-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-neutral-300 text-sm">Progress tracking and analytics</span>
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
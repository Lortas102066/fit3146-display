"use client";
import React, { useState, useEffect, useRef } from "react";

interface FuturePlanProps {
  title?: string;
  description?: string;
  items?: string[];
}

const FuturePlan: React.FC<FuturePlanProps> = ({
  title = "Future Plans",
  description = "Our roadmap for upcoming features and improvements",
  items = [
    "Enhanced user interface",
    "Performance optimizations",
    "New feature implementations",
    "Mobile responsiveness improvements",
  ],
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isLocked, setIsLocked] = useState(false);
    const timelineRef = useRef<HTMLDivElement>(null);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
    useEffect(() => {
      const handleWheel = (e: WheelEvent) => {
        const timeline = timelineRef.current;
        if (!timeline) return;
  
        const rect = timeline.getBoundingClientRect();
        const scrollingDown = e.deltaY > 0;
        const scrollingUp = e.deltaY < 0;
  
        const fullyVisible =
          rect.top <= window.innerHeight * 0.25 &&
          rect.bottom >= window.innerHeight * 0.75;
  
        // If fully visible but not locked yet, start the lock timer
        if (fullyVisible && !isLocked) {
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }
          scrollTimeoutRef.current = setTimeout(() => {
            setIsLocked(true);
          }, 150); // Wait 150ms of stability before locking
          return; // Don't capture this scroll yet
        }
  
        // If not fully visible, unlock and reset
        if (!fullyVisible && isLocked) {
          setIsLocked(false);
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }
          return;
        }
  
        // Only handle scrolling if locked and fully visible
        if (fullyVisible && isLocked) {
          // Only prevent scroll if we can actually change step
          if (
            (scrollingDown && currentIndex < items.length - 1) ||
            (scrollingUp && currentIndex > 0)
          ) {
            e.preventDefault();
            if (isAnimating) return;
  
            setIsAnimating(true);
            setCurrentIndex((prev) => (scrollingDown ? prev + 1 : prev - 1));
          }
        }
      };
  
      window.addEventListener("wheel", handleWheel, { passive: false });
      return () => {
        window.removeEventListener("wheel", handleWheel);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }, [currentIndex, items.length, isAnimating, isLocked]);

  // Reset animation flag after fade transition
  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  return (
    <div
      ref={timelineRef}
      className="future-plan w-screen h-screen flex flex-col items-center justify-center bg-gray-50 relative overflow-hidden"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-600">{description}</p>
      </div>

      {/* Timeline steps */}
      <div className="timeline-step w-full max-w-md relative">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-full transition-opacity duration-500 text-center ${
              index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <div className="timeline-dot w-6 h-6 bg-blue-500 rounded-full mb-6 shadow-lg mx-auto"></div>
            <div className="timeline-content bg-white rounded-lg shadow-lg p-8">
              <div className="text-sm text-blue-500 font-semibold mb-2">
                Step {index + 1} of {items.length}
              </div>
              <h3 className="text-2xl font-bold mb-2">{item}</h3>
              <p className="text-gray-600">
                {index === 0 &&
                  "Initial setup and foundation building"}
                {index === 1 &&
                  "Core functionality development and optimization"}
                {index === 2 &&
                  "Advanced features and integrations"}
                {index === 3 &&
                  "Polish, testing, and deployment"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress dots */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex flex-col space-y-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      {currentIndex < items.length - 1 && (
        <div className="absolute bottom-8 text-gray-500 text-center animate-bounce">
          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <p className="text-sm mt-2">Scroll to see the next step</p>
        </div>
      )}
    </div>
  );
};

export default FuturePlan;

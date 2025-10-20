"use client";
import { motion } from "motion/react";
import { Github, Gamepad2, Code2, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function GameTutorial() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const demoImages = [
    "/demo/demo1.png",
    "/demo/demo2.png", 
    "/demo/demo3.png",
    "/demo/demo4.png",
    "/demo/demo5.png",
    "/demo/demo6.png",
    "/demo/demo7.png",
    "/demo/demo8.png",
    "/demo/demo9.png"
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % demoImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + demoImages.length) % demoImages.length);
  };

  return (
    <div className="w-full bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Interactive Learning
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Experience hands-on learning with our built-in game tutorial that makes coding fun and engaging.
          </p>
        </motion.div>

        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Gamepad2 className="w-8 h-8 text-indigo-400" />
            <h3 className="text-2xl font-semibold text-white">Game Tutorial</h3>
          </div>
          
          <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Our Linux Hero comes with a specially designed game tutorial built on Electron. 
            This interactive experience teaches first-time users the basics of Linux through 
            engaging gameplay, making learning both fun and effective.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="flex items-start gap-3">
              <Code2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-white font-medium">Built with Electron</h4>
                <p className="text-neutral-400 text-sm">
                  Cross-platform desktop application for seamless learning experience
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Download className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-white font-medium">Open Source</h4>
                <p className="text-neutral-400 text-sm">
                  Full source code available for customization and contribution
                </p>
              </div>
            </div>
          </div>

          <motion.a
            href="https://github.com/redaktteedd/fit3146-LinuxHero"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </motion.a>
        </motion.div>

        {/* Apple-style Image Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gray-900/20 backdrop-blur-sm border border-gray-800/50 shadow-2xl">
            <Image
              src={demoImages[currentImage]}
              alt={`Game Tutorial Demo ${currentImage + 1}`}
              width={800}
              height={600}
              className="w-full h-auto transition-all duration-500 ease-out"
            />
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prevImage}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 border border-white/20 hover:border-white/30"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Apple-style Indicators */}
            <div className="flex justify-center gap-3">
              {demoImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImage 
                      ? 'bg-white w-8' 
                      : 'bg-white/30 w-2 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextImage}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 border border-white/20 hover:border-white/30"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

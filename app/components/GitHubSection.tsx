"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { Github, BookOpen } from "lucide-react";
 
export default function GitHubSection() { 
  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-8 items-center justify-center flex-wrap bg-neutral-900/30 backdrop-blur-sm p-8 rounded-2xl border border-neutral-800"
        >
           
          {/* Content */}
          <div className="text-center md:text-left max-w-md">
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Get instant access to our GitHub repository, documentation, and build guides. Perfect for mobile users and quick sharing.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <motion.a
                href="https://github.com/redaktteedd/fit3146-LinuxHero"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Github className="w-4 h-4" />
                GitHub
              </motion.a>
              
              <motion.a
                href="/poster"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-transparent text-indigo-400 border border-indigo-400/30 hover:bg-indigo-400/10 px-4 py-2 rounded-lg font-medium transition-all duration-300"
              >
                <BookOpen className="w-4 h-4" />
                Docs
              </motion.a>
            </div>
            
            {/* Repository Link */}
            <div className="mt-4">
              <a 
                href="https://github.com/redaktteedd/fit3146-LinuxHero" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-3 py-1 rounded-full bg-neutral-800/50 text-neutral-300 text-sm border border-neutral-700 hover:border-neutral-600 transition-colors duration-300"
              >
                github.com/redaktteedd/fit3146-LinuxHero
              </a>
            </div>
          </div>
        </motion.div>

        {/* Additional Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm border border-green-500/30">
              Open Source
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm border border-blue-500/30">
              Educational Focus
            </span>
            <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm border border-purple-500/30">
              Community Driven
            </span>
            <span className="px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm border border-orange-500/30">
              Hardware + Software
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

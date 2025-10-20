"use client";
import React from "react";
import { motion } from "motion/react";
import { SparklesCore } from "@/components/ui/sparkles";
import { Highlight } from "@/components/ui/highlight";
import { 
  Laptop, 
  Code2, 
  Gamepad2, 
  Users, 
  BookOpen, 
  Download,
  Github,
  Star,
  Zap,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

export default function Poster() {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-8 z-30"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 border border-gray-700/50"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </motion.div>

      {/* Poster Container */}
      <div className="relative w-full h-full max-w-5xl max-h-[90vh] aspect-[3/4] bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
        
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Sparkles Effect */}
        <div className="absolute inset-0">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={800}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
          
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="flex items-center justify-center mb-4">
                <Laptop className="w-12 h-12 text-indigo-400 mr-3" />
                <h1 className="text-4xl font-bold text-white">
                  Modulearn
                </h1>
              </div>
                <p className="text-lg text-neutral-300 font-medium">
                  A small laptop with a big mission — bringing digital education to everyone
                </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <Highlight className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Anything is possible. Just dream it.
              </Highlight>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-indigo-500/20 rounded-xl p-4 border border-indigo-500/30">
                <Gamepad2 className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-white mb-1">Game Tutorial</h3>
                <p className="text-neutral-400 text-xs">Explain the game</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <div className="bg-purple-500/20 rounded-xl p-4 border border-purple-500/30">
                <Code2 className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-white mb-1">Electron</h3>
                <p className="text-neutral-400 text-xs">Easy to build and modify and use</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="bg-green-500/20 rounded-xl p-4 border border-green-500/30">
                <BookOpen className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-white mb-1">Educational Plan</h3>
                <p className="text-neutral-400 text-xs">Why we do it</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center"
            >
              <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-white mb-1">By Who for Who</h3>
                <p className="text-neutral-400 text-xs">Explain it</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-4"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-medium">Linux Hero</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-indigo-400" />
                  <span className="text-white font-medium">Electron</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">Educational Plan</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://github.com/redaktteedd/fit3146-LinuxHero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-neutral-500 text-xs"
            >
              <p>FIT3146 Project • Monash University</p>
              <p className="mt-1">&#34;Anything is possible. Just dream it.&quot;</p>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-8 right-8 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
        <div className="absolute top-16 right-16 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-16 left-16 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1500"></div>
      </div>
    </div>
  );
}

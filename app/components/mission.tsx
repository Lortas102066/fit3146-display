"use client";
import {motion} from "motion/react";
import {Highlight, HeroHighlight} from "@/components/ui/highlight";

export default function Mission() {
  return (
    <HeroHighlight containerClassName="bg-black">
      <motion.h1
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20"> Anything is possible. {" "} <br />
        <Highlight className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
          Just dream it.
        </Highlight>
      </motion.h1>
      <p className="text-lg md:text-xl text-center text-neutral-400 max-w-3xl mx-auto"> At Linux Hero, we believe that anything is possible. We are a team of dreamers and doers who are passionate about bringing digital education to everyone. We are a team of dreamers and doers who are passionate about bringing digital education to everyone.</p>
      </HeroHighlight>
  );
}
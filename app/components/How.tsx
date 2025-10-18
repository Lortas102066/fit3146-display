"use client";
import { motion } from "motion/react";

export default function How() {
  const methods = [
    {
      title: "Modular Hardware Design",
      icon: "🔧",
      description: "Interchangeable components make repairs easy and upgrades simple, extending the device's lifespan and reducing electronic waste.",
    },
    {
      title: "Built-in Learning Software",
      icon: "💡",
      description: "Pre-installed educational software and interactive tutorials make learning engaging, even for first-time computer users.",
    },
    {
      title: "Cost-Effective Hardware",
      icon: "💰",
      description: "Carefully selected affordable components without compromising quality, making technology accessible to everyone.",
    },
  ];

  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              How We Make It Happen
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto">
            Our approach to making technology accessible and sustainable
          </p>
        </motion.div>

        {/* Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-10 md:p-12 hover:border-neutral-700 transition-all duration-300"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="text-6xl md:text-7xl mb-6">{method.icon}</div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {method.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 leading-relaxed text-base md:text-lg">
                  {method.description}
                </p>
              </div>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

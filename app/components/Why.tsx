"use client";
import { motion } from "motion/react";

export default function Why() {
  const reasons = [
    {
      title: "Access for All",
      icon: "🌍",
      description: "Opening doors to technology in developing countries",
      points: [
        "Access to latest technology and tools from anywhere",
        "Make learning fun and engaging for everyone"
      ]
    },
    {
      title: "Built to Last",
      icon: "🔧",
      description: "Designed with sustainability and longevity in mind",
      points: [
        "Easy to repair with interchangeable modules",
        "Simple to upgrade as technology evolves"
      ]
    },
    {
      title: "True Affordability",
      icon: "💰",
      description: "No hidden costs or licensing fees",
      points: [
        "No Windows licensing fees",
        "No hidden costs or subscriptions",
        "Affordable hardware components"
      ]
    }
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
              Why Linux Hero?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto">
            Built with purpose, designed for impact
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-all duration-300"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4">{reason.icon}</div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 mb-6 leading-relaxed">
                  {reason.description}
                </p>

                {/* Points */}
                <ul className="space-y-3">
                  {reason.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span className="text-neutral-300 text-sm md:text-base">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
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

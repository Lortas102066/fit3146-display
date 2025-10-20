"use client";
import { motion } from "motion/react";

export default function Who() {
  const targetAudiences = [
    "Students in developing countries who lack access to digital learning tools.",
    "Rural students where internet access is unreliable",
    "Schools and community learning centers that need affordable, durable, and easy-to-maintain learning devices",
    "Beginners or first-time computer users, especially young learners just starting their journey"
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
              Who it is made for?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto">
            Designed for learners and communities who need accessible, affordable technology
          </p>
        </motion.div>

        {/* Target Audience List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <ul className="space-y-6">
            {targetAudiences.map((audience, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
              >
                <span className="text-indigo-400 text-2xl mt-1 group-hover:scale-110 transition-transform duration-200">
                  •
                </span>
                <span className="text-neutral-300 text-lg md:text-xl leading-relaxed">
                  {audience}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

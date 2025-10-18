"use client";
import { motion } from "motion/react";

export default function MetricsSection() {
  const metrics = [
    {
      value: "A$150-250",
      label: "Estimated cost per unit",
      description: "At 100-500 unit production scale (AUD)"
    },
    {
      value: "4-6h",
      label: "Battery life",
      description: "Standard Li-ion battery pack"
    },
    {
      value: "100%",
      label: "Open-source",
      description: "Hardware & software for local replication"
    },
    {
      value: "2-3h",
      label: "Assembly time",
      description: "With proper tools and training"
    }
  ];

  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Project Metrics
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto">
            Transparent data on cost, performance, and scalability for informed decision-making.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">
                  {metric.value}
                </div>
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">
                  {metric.label}
                </h3>
                <p className="text-neutral-400 text-sm">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cost Breakdown Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-neutral-900/30 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Unit Economics Breakdown
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border-b border-neutral-700 py-3 px-4 text-left text-neutral-300">Component</th>
                  <th className="border-b border-neutral-700 py-3 px-4 text-left text-neutral-300">Estimated Cost</th>
                  <th className="border-b border-neutral-700 py-3 px-4 text-left text-neutral-300">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-neutral-800 py-3 px-4 text-neutral-300">Orange Pi Zero 3</td>
                  <td className="border-b border-neutral-800 py-3 px-4 text-neutral-300">A$40-60</td>
                  <td className="border-b border-neutral-800 py-3 px-4 text-neutral-400">Main computing unit</td>
                </tr>
                <tr>
                  <td className="border-b border-neutral-800 py-3 px-4 text-neutral-300">10.1&quot; IPS Display</td>
                  <td className="border-b border-neutral-800 py-3 px-4 text-neutral-300">A$40-60</td>
                  <td className="border-b border-neutral-800 py-3 px-4 text-neutral-400">Touchscreen capability</td>
                </tr>
                <tr>
                  <td className="border-b border-neutral-800 py-3 px-4 text-neutral-300">Battery + BMS</td>
                  <td className="border-b border-neutral-800 py-3 px-4 text-neutral-300">A$20-40</td>
                  <td className="border-b border-neutral-800 py-3 px-4 text-neutral-400">Li-ion pack with BMS</td>
                </tr>
                <tr>
                  <td className="border-b border-neutral-800 py-3 px-4 text-neutral-300">Keyboard</td>
                  <td className="border-b border-neutral-800 py-3 px-4 text-neutral-300">A$10-15</td>
                  <td className="border-b border-neutral-800 py-3 px-4 text-neutral-400">Bluetooth + USB HID</td>
                </tr>
                <tr>
                  <td className="border-b border-neutral-800 py-3 px-4 text-neutral-300">Mouse</td>
                  <td className="border-b border-neutral-800 py-3 px-4 text-neutral-300">A$5-10</td>
                  <td className="border-b border-neutral-800 py-3 px-4 text-neutral-400">USB HID</td>
                </tr>
                <tr>
                  <td className="border-b border-neutral-800 py-3 px-4 text-neutral-300">3D-Printed Case</td>
                  <td className="border-b border-neutral-800 py-3 px-4 text-neutral-300">A$15-25</td> 
                  <td className="border-b border-neutral-800 py-3 px-4 text-neutral-400">Recycled PLA/PETG</td>
                </tr>
                <tr>
                  <td className="border-b border-neutral-800 py-3 px-4 text-neutral-300">Misc Components</td>
                  <td className="border-b border-neutral-800 py-3 px-4 text-neutral-300">A$20-30</td>
                  <td className="border-b border-neutral-800 py-3 px-4 text-neutral-400">Regulators, wiring, screws, etc.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

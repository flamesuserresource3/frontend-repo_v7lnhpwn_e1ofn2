import { motion } from 'framer-motion';
import { Star, ShieldCheck, Truck, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Curated Quality',
    description: 'Handpicked collections from global and local brands you trust.',
    icon: Sparkles,
  },
  {
    title: 'Premium Service',
    description: 'Expert guidance with a smile, online and in-store.',
    icon: Star,
  },
  {
    title: 'Reliable Delivery',
    description: 'Swift and secure delivery across Palestine and Jordan.',
    icon: Truck,
  },
  {
    title: 'Trusted & Secure',
    description: 'Authentic products with solid guarantees and support.',
    icon: ShieldCheck,
  },
];

export default function Showcase() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(8,145,178,0.08),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900"
          >
            The Extra In Every Detail
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We blend design, quality, and value to create unforgettable retail moments across our growing network of stores.
          </motion.p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="relative rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-6 shadow-[0_8px_40px_-12px_rgba(16,185,129,0.25)]"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/30">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

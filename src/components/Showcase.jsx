import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';

const features = [
  {
    title: 'Curated Assortment',
    description: 'Top-tier brands and essentials handpicked for quality and value.',
    icon: <ShoppingBag className="h-6 w-6 text-emerald-600" />,
  },
  {
    title: 'Rewards That Matter',
    description: 'Earn points every visit and unlock exclusive member benefits.',
    icon: <Star className="h-6 w-6 text-emerald-600" />,
  },
  {
    title: 'Trusted Service',
    description: 'Seamless exchanges, helpful staff, and reliable support.',
    icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
  },
  {
    title: 'Fast Delivery',
    description: 'Same‑day options in major cities across Palestine and Jordan.',
    icon: <Truck className="h-6 w-6 text-emerald-600" />,
  },
];

export default function Showcase() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Extra In Every Detail</h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">From the moment you walk in to the joy of unboxing at home, we obsess over the experience so you can enjoy the essentials and discover the new.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-emerald-50 p-3">
              {f.icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

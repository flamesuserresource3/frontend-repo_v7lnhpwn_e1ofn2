import React from 'react';
import { motion } from 'framer-motion';

const stores = [
  {
    city: 'Ramallah',
    country: 'Palestine',
    image:
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    city: 'Jerusalem',
    country: 'Palestine',
    image:
      'https://images.unsplash.com/photo-1579976888990-7bcd4290b99b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    city: 'Amman',
    country: 'Jordan',
    image:
      'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1600&auto=format&fit=crop',
  },
  {
    city: 'Aqaba',
    country: 'Jordan',
    image:
      'https://images.unsplash.com/photo-1587103672996-8a5b7c04fdf3?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Stores() {
  return (
    <section id="stores" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Find us near you</h2>
          <p className="mt-2 text-slate-600">Visit our growing network of destinations across Palestine and Jordan.</p>
        </div>
        <a href="#contact" className="hidden sm:inline-flex rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800">Get directions</a>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stores.map((s) => (
          <motion.div
            key={s.city}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img src={s.image} alt={`${s.city}, ${s.country}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <div className="text-sm text-emerald-600 font-semibold">{s.country}</div>
              <div className="text-lg font-bold text-slate-900">{s.city}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

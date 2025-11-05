import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const stores = [
  {
    city: 'Ramallah',
    country: 'Palestine',
    image:
      'https://images.unsplash.com/photo-1502904550040-7534597429ae?q=80&w=1600&auto=format&fit=crop',
  },
  {
    city: 'Amman',
    country: 'Jordan',
    image:
      'https://images.unsplash.com/photo-1416259652385-1bbf0e938ba8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    city: 'Nablus',
    country: 'Palestine',
    image:
      'https://images.unsplash.com/photo-1500043357865-c6b8827edf53?q=80&w=1600&auto=format&fit=crop',
  },
  {
    city: 'Irbid',
    country: 'Jordan',
    image:
      'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Stores() {
  return (
    <section id="stores" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(8,145,178,0.08),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              Visit Our Stores
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.6 }}
              className="mt-3 text-lg text-gray-600"
            >
              Experience Shini Extra in person across Palestine and Jordan.
            </motion.p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium"
          >
            Get Directions <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stores.map((s, i) => (
            <motion.div
              key={s.city}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 backdrop-blur"
            >
              <img
                src={s.image}
                alt={`${s.city} store`}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <p className="text-sm/5 opacity-90">{s.country}</p>
                  <p className="text-lg font-semibold">{s.city}</p>
                </div>
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/20">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs">Map</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

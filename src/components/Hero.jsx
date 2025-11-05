import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2wG2s9f9v4s8M4wD/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/10 text-emerald-700 border border-emerald-600/20 mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Leading retail chain in Palestine & Jordan
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.7, ease: 'easeOut' }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Shini Extra
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600">
                Elevating Everyday Living
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
              className="mt-6 text-lg text-gray-600 max-w-2xl"
            >
              Discover a world of premium products, exceptional value, and delightful in-store experiences across our locations in Palestine and Jordan.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#stores"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-base font-medium shadow-lg shadow-emerald-500/30 hover:shadow-cyan-500/30 transition-all"
              >
                <Rocket className="w-5 h-5" /> Explore Stores
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-800 bg-white/60 backdrop-blur hover:bg-white"
              >
                Learn More
              </a>
            </motion.div>
          </div>

          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-500/20 blur-2xl rounded-3xl pointer-events-none" />
              <img
                src="https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=1600&auto=format&fit=crop"
                alt="Shini Extra Store"
                className="relative rounded-3xl border border-white/60 shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

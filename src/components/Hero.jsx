import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="relative" aria-label="Hero">
      <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline 
            scene="https://prod.spline.design/6nO1qzQjzMqZV3HX/scene.splinecode"
            onLoad={() => setLoaded(true)}
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/40 via-white/20 to-white" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              The Extra in Every Detail
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 text-lg md:text-xl text-slate-700"
            >
              Shini Extra is the leading retail destination across Palestine and Jordan—blending curated products, modern experiences, and everyday value.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#features" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-emerald-700">
                <Rocket className="h-5 w-5" /> Explore features
              </a>
              <a href="#stores" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-slate-900 font-semibold shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
                Find a store
              </a>
            </motion.div>

            {!loaded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 text-sm text-slate-500"
              >
                Loading experience…
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Store, Phone, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 font-semibold tracking-tight text-slate-900"
          >
            <Store className="h-6 w-6 text-emerald-600" />
            <span>Shini Extra</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#stores" className="hover:text-slate-900 transition-colors">Stores</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+9700000000" className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900">
              <Phone className="h-4 w-4" />
              Call us
            </a>
            <button className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <Globe className="h-4 w-4" />
              العربية
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Store, Globe, Phone, Menu, X, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Stores', href: '#stores' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/60 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <motion.div
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 text-white"
            >
              <Store size={20} />
            </motion.div>
            <span className="font-semibold tracking-tight text-gray-900">
              Shini Extra
              <span className="ml-2 inline-flex items-center text-xs font-medium text-emerald-600">
                <Globe className="w-3 h-3 mr-1" />
                Palestine & Jordan
              </span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              <Phone className="w-4 h-4" /> Contact Us
            </a>
            <a
              href="#stores"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/30 hover:shadow-cyan-500/30 transition-all"
            >
              <ShoppingBag className="w-4 h-4" /> Shop Now
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/20 bg-white/70 backdrop-blur-md"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-700"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <a
                  href="#contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-full bg-gray-900 text-white"
                >
                  <Phone className="w-4 h-4" /> Contact
                </a>
                <a
                  href="#stores"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white"
                >
                  <ShoppingBag className="w-4 h-4" /> Shop
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

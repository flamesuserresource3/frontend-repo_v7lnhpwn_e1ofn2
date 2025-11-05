import { motion } from 'framer-motion';
import { Facebook, Instagram, Globe, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-20 pb-10 bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(8,145,178,0.08),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <motion.h3
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold text-gray-900"
            >
              Shini Extra
            </motion.h3>
            <p className="mt-3 text-sm text-gray-600 max-w-sm">
              The leading retail destination in Palestine and Jordan, bringing you the best in lifestyle, home, and everyday essentials.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-800">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +972 • +962</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@shiniextra.com</li>
              <li className="flex items-center gap-2"><Globe className="w-4 h-4" /> www.shiniextra.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-800">Follow</h4>
            <div className="mt-3 flex items-center gap-3">
              <a href="#" aria-label="facebook" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-700 hover:text-emerald-600">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="instagram" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-700 hover:text-emerald-600">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Shini Extra. All rights reserved.</p>
          <p>Crafted with care for Palestine & Jordan.</p>
        </div>
      </div>
    </footer>
  );
}

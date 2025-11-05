import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="mt-24 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Shini Extra</h3>
            <p className="mt-2 text-sm text-slate-600">Retail experiences across Palestine and Jordan. Quality, value, and service—elevated.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +970 00 000 000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@shiniextra.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Ramallah • Jerusalem • Amman • Aqaba</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Follow</h4>
            <div className="mt-3 flex items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} Shini Extra. All rights reserved.</div>
      </div>
    </footer>
  );
}

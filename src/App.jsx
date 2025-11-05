import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Stores from './components/Stores';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <main className="flex flex-col gap-24">
        <Hero />
        <Showcase />
        <Stores />
      </main>
      <Footer />
    </div>
  );
}

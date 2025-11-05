import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Stores from './components/Stores';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Stores />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { useState } from 'react';
import { ROWS, type Title } from './data/content';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentRow from './components/Row';
import DetailModal from './components/DetailModal';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Title | null>(null);

  return (
    <div className="min-h-screen bg-ink font-body text-bone antialiased">
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <Navbar />
      <main>
        <Hero onMoreInfo={setSelected} />
        <div className="relative z-10 -mt-10">
          {ROWS.map((row) => (
            <ContentRow key={row.id} row={row} onSelect={setSelected} />
          ))}
        </div>
        <About />
        <Contact />
      </main>
      <Footer />
      <DetailModal title={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

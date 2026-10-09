import { useEffect, useState } from 'react';
import PipelineNav from './components/PipelineNav';
import Ingest from './components/Ingest';
import Retrieve from './components/Retrieve';
import Rerank from './components/Rerank';
import Generate from './components/Generate';
import Evaluate from './components/Evaluate';
import { stages } from './data/portfolio';

function Connector() {
  return (
    <div className="mx-auto flex max-w-5xl justify-start px-4" aria-hidden="true">
      <div className="flow-line ml-6 h-10 w-[2px] sm:ml-10" />
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState<string>('ingest');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    stages.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-ink">
      <PipelineNav active={active} />
      <main>
        <Ingest />
        <Connector />
        <Retrieve />
        <Connector />
        <Rerank />
        <Connector />
        <Generate />
        <Connector />
        <Evaluate />
      </main>
    </div>
  );
}

export interface TitleLink {
  label: string;
  url: string;
}

export interface Title {
  id: string;
  name: string;
  tagline: string;
  description: string;
  year: string;
  badge: string;
  tags: string[];
  metrics: string[];
  links: TitleLink[];
  art: string;
}

export interface Row {
  id: string;
  title: string;
  subtitle: string;
  items: Title[];
}

export const HERO: Title = {
  id: 'code-sage-ai',
  name: 'Code Sage AI',
  tagline: 'An agentic RAG assistant that reads codebases and answers with receipts.',
  description:
    'My MSc dissertation (Jan to Apr 2026): an LLM-powered RAG system for code understanding. Hybrid retrieval combining BM25, vector search and reciprocal rank fusion. Data pipelines for ingestion, chunking and embedding. Flask APIs serving answers. Evaluated on precision, recall, latency and groundedness, with hallucination detection baked in.',
  year: '2026',
  badge: 'Dissertation',
  tags: ['Python', 'Flask', 'ChromaDB', 'NLP', 'SQL'],
  metrics: [
    'Hybrid retrieval: BM25 plus vectors plus RRF',
    'Evaluated on precision, recall, latency, groundedness',
    'Hallucination detection built in',
  ],
  links: [{ label: 'View on GitHub', url: 'https://github.com/Jagadeesh5045/code-sage-ai' }],
  art: 'linear-gradient(135deg, #160a2e 0%, #3b0a1e 55%, #7f1d1d 100%)',
};

export const ROWS: Row[] = [
  {
    id: 'ai-engineering',
    title: 'Trending Now',
    subtitle: 'AI engineering',
    items: [
      HERO,
      {
        id: 'disagreement-measurement',
        name: 'Disagreement Measurement',
        tagline: 'When the judge and the verifier disagree.',
        description:
          'Ran an LLM judge and a deterministic verifier over the same 20 citations. The judge passed 11, the verifier passed 8, and they disagreed on 3. Every disagreement was a case the judge passed but the verifier rejected. Small experiment, sharp lesson: never trust a single guard.',
        year: '2026',
        badge: 'Experiment',
        tags: ['Python', 'LLM evals', 'Statistics'],
        metrics: [
          '20 citations tested',
          'Judge passed 11, verifier passed 8',
          '3 disagreements found',
          '19 automated checks green',
        ],
        links: [{ label: 'View on GitHub', url: 'https://github.com/Jagadeesh5045/AI-builds' }],
        art: 'linear-gradient(135deg, #2a0808 0%, #7c2d12 60%, #c2410c 100%)',
      },
      {
        id: 'rag-eval-lab',
        name: 'rag-eval-lab',
        tagline: 'A lab for measuring retrieval quality.',
        description:
          'RAG evaluation lab: hybrid retrieval (BM25 plus vector plus RRF), groundedness checking, and an eval dashboard for measuring retrieval quality.',
        year: '2026',
        badge: 'Project',
        tags: ['Python', 'RAG', 'Evaluation'],
        metrics: ['Hybrid retrieval pipeline', 'Groundedness checking', 'Eval dashboard'],
        links: [{ label: 'View on GitHub', url: 'https://github.com/Jagadeesh5045/rag-eval-lab' }],
        art: 'linear-gradient(135deg, #04211f 0%, #0f4c44 55%, #14b8a6 100%)',
      },
      {
        id: 'chunk-bench',
        name: 'chunk-bench',
        tagline: 'Seven chunking strategies, one winner.',
        description:
          'RAG chunking benchmark: scores 7 chunking strategies (fixed-size, sentence-aware, heading-aware) on 24 gold questions using recall at k, MRR, and context precision, with 20 unit tests.',
        year: '2026',
        badge: 'Project',
        tags: ['Python', 'RAG', 'Benchmarking'],
        metrics: ['7 chunking strategies', '24 gold questions', '20 unit tests green'],
        links: [
          {
            label: 'View on GitHub',
            url: 'https://github.com/Jagadeesh5045/AI-builds/tree/main/projects/chunk-bench',
          },
        ],
        art: 'linear-gradient(135deg, #1e1b4b 0%, #4c1d95 60%, #8b5cf6 100%)',
      },
    ],
  },
  {
    id: 'ml-data',
    title: 'Machine Learning and Data',
    subtitle: 'models, pipelines and dashboards',
    items: [
      {
        id: 'churn-x',
        name: 'churn-x',
        tagline: 'Churn prediction you can explain.',
        description:
          'Customer churn prediction with explainability: GradientBoosting models, AUC and F1 evaluation, SHAP-style insights, and a what-if dashboard.',
        year: '2026',
        badge: 'Project',
        tags: ['Python', 'Scikit-learn', 'Explainability'],
        metrics: ['GradientBoosting models', 'AUC and F1 evaluation', 'What-if dashboard'],
        links: [{ label: 'View on GitHub', url: 'https://github.com/Jagadeesh5045/churn-x' }],
        art: 'linear-gradient(135deg, #0a1628 0%, #1e3a8a 60%, #3b82f6 100%)',
      },
      {
        id: 'pipeline-pulse',
        name: 'pipeline-pulse',
        tagline: 'ETL with a heartbeat.',
        description:
          'ETL pipeline with data quality checks: Python ETL into a DuckDB warehouse, automated quality reports, and a KPI dashboard.',
        year: '2026',
        badge: 'Project',
        tags: ['Python', 'DuckDB', 'Data quality'],
        metrics: ['Automated quality reports', 'KPI dashboard', 'DuckDB warehouse'],
        links: [{ label: 'View on GitHub', url: 'https://github.com/Jagadeesh5045/pipeline-pulse' }],
        art: 'linear-gradient(135deg, #1c1410 0%, #92400e 55%, #f59e0b 100%)',
      },
      {
        id: 'ticket-triage',
        name: 'ticket-triage',
        tagline: 'Support tickets, triaged by AI.',
        description:
          'AI support-ticket triage: a FastAPI service that classifies tickets into 8 categories, scores priority with calibrated confidence, drafts auto-replies, and monitors drift via PSI.',
        year: '2026',
        badge: 'Project',
        tags: ['Python', 'FastAPI', 'NLP'],
        metrics: ['8 ticket categories', 'Calibrated confidence scoring', 'Drift monitoring via PSI'],
        links: [
          {
            label: 'View on GitHub',
            url: 'https://github.com/Jagadeesh5045/AI-builds/tree/main/flagship/ticket-triage',
          },
        ],
        art: 'linear-gradient(135deg, #230a3e 0%, #6d28d9 60%, #a78bfa 100%)',
      },
      {
        id: 'weekly-ai-builds',
        name: 'Weekly AI Builds',
        tagline: 'One real project, every week.',
        description:
          'A running series of real-world mini projects, rotating across AI engineering, machine learning, data science, data engineering and SQL. Every build ships with code and a writeup.',
        year: '2026',
        badge: 'Series',
        tags: ['Python', 'LLMs', 'ML', 'SQL'],
        metrics: ['New build every week', 'Rotating focus areas', 'Code plus writeup each time'],
        links: [{ label: 'View on GitHub', url: 'https://github.com/Jagadeesh5045/AI-builds' }],
        art: 'linear-gradient(135deg, #0b0f19 0%, #1f2937 60%, #6b7280 100%)',
      },
    ],
  },
  {
    id: 'writing',
    title: 'Writing and Research',
    subtitle: 'articles, papers and open threads',
    items: [
      {
        id: 'rag-evals-article',
        name: 'RAG Evals Article',
        tagline: 'Results table plus code, no hand-waving.',
        description:
          'An article on evaluating RAG systems and catching hallucinations, with a real results table and working code. Published on Medium and submitted to Towards Data Science.',
        year: '2026',
        badge: 'Article',
        tags: ['RAG', 'Evaluation', 'Technical writing'],
        metrics: ['Real results table', 'Working code included', 'Submitted to Towards Data Science'],
        links: [{ label: 'Read on Medium', url: 'https://medium.com/@padalajagadeesh578' }],
        art: 'linear-gradient(135deg, #03211f 0%, #0f766e 55%, #2dd4bf 100%)',
      },
      {
        id: 'judge-verifier-paper',
        name: 'Judge vs Verifier Paper',
        tagline: 'Measuring disagreement, formally.',
        description:
          'Research paper in progress on measuring disagreement between LLM judges and deterministic verifiers, building on the disagreement-measurement experiment. Title locked with my Aston supervisor.',
        year: '2026',
        badge: 'In progress',
        tags: ['LLM evals', 'Research'],
        metrics: ['Experiment complete', 'Title locked with supervisor'],
        links: [],
        art: 'linear-gradient(135deg, #101014 0%, #3f3f46 60%, #71717a 100%)',
      },
      {
        id: 'decoding-ai-thread',
        name: 'Decoding AI Exchange',
        tagline: 'Open technical debate, in public.',
        description:
          'An ongoing technical exchange on hallucination guards and eval design with the Decoding AI publication on Medium, including a follow-up reply with real experiment numbers.',
        year: '2026',
        badge: 'Discussion',
        tags: ['RAG', 'Hallucination guards'],
        metrics: ['Public thread', 'Real numbers shared'],
        links: [
          {
            label: 'Read the thread',
            url: 'https://medium.com/@padalajagadeesh578/built-it-ran-both-guards-over-the-same-20-citations-the-judge-passed-11-the-deterministic-96548b47f5c2',
          },
        ],
        art: 'linear-gradient(135deg, #1a1a1e 0%, #52525b 60%, #a1a1aa 100%)',
      },
    ],
  },
  {
    id: 'experience',
    title: 'Experience',
    subtitle: 'where the work happened',
    items: [
      {
        id: 'promo-it',
        name: 'PROMO IT Solutions',
        tagline: 'Python Developer, Remote, London.',
        description:
          'Apr 2023 to Apr 2025. Built and maintained backend services and REST APIs in production as a Python developer on a remote team.',
        year: '2023 to 2025',
        badge: 'Role',
        tags: ['Python', 'REST APIs', 'Backend'],
        metrics: ['2 years in production', 'Remote team, London'],
        links: [],
        art: 'linear-gradient(135deg, #08080a 0%, #27272a 60%, #52525b 100%)',
      },
      {
        id: 'kpit',
        name: 'KPIT',
        tagline: 'Trainee, on-site, Pune.',
        description:
          'Dec 2023 to Mar 2024. Trainee apprenticeship completed on-site in Pune, alongside remote Python developer work in different working hours.',
        year: '2023 to 2024',
        badge: 'Role',
        tags: ['Training', 'Engineering'],
        metrics: ['On-site in Pune'],
        links: [],
        art: 'linear-gradient(135deg, #141210 0%, #44403c 60%, #78716c 100%)',
      },
      {
        id: 'aston',
        name: 'Aston University',
        tagline: 'MSc Artificial Intelligence, Birmingham.',
        description:
          'Apr 2025 to Apr 2026. Dissertation: Code Sage AI, an agentic RAG code assistant with hybrid retrieval and hallucination detection.',
        year: '2025 to 2026',
        badge: 'Education',
        tags: ['AI', 'RAG', 'Dissertation'],
        metrics: ['MSc Artificial Intelligence'],
        links: [],
        art: 'linear-gradient(135deg, #0a1230 0%, #1e40af 60%, #60a5fa 100%)',
      },
      {
        id: 'lpu',
        name: 'Lovely Professional University',
        tagline: 'B.Tech Computer Science and Engineering.',
        description:
          '2020 to 2024, India. Graduated with CGPA 8.3 out of 10. Foundation in computer science, software engineering and mathematics.',
        year: '2020 to 2024',
        badge: 'Education',
        tags: ['Computer Science'],
        metrics: ['CGPA 8.3 out of 10'],
        links: [],
        art: 'linear-gradient(135deg, #2a1602 0%, #92400e 60%, #f59e0b 100%)',
      },
    ],
  },
];

export const PROFILE = {
  name: 'Jagadeeswara Rao Padala',
  role: 'AI Engineer',
  location: 'Birmingham, UK',
  photo: 'https://i.postimg.cc/2ywBFKPj/profile.jpg',
  email: 'Padalajagadeesh578@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jagadeesh5045/',
  github: 'https://github.com/Jagadeesh5045',
  rightToWork: 'Graduate visa from December 2026, no sponsorship required.',
  bio: [
    'I am an AI engineer in Birmingham, UK. I build LLM systems that hold up under scrutiny: retrieval pipelines, eval harnesses, and guards against hallucination.',
    'Two years as a Python developer shipping backend services in production, then an MSc in Artificial Intelligence at Aston University where my dissertation became Code Sage AI, an agentic RAG code assistant.',
    'Every project here ships with code and numbers. Nothing is a mockup.',
  ],
  stats: [
    { value: '2+', label: 'Years shipping Python backends' },
    { value: '15', label: 'Projects and experiments live' },
    { value: '20', label: 'Citations in the judge vs verifier study' },
    { value: 'MSc', label: 'Artificial Intelligence, Aston' },
  ],
  skills: [
    'Python',
    'LLM and RAG systems',
    'Natural Language Processing',
    'Scikit-learn',
    'TensorFlow',
    'Data engineering',
    'SQL',
    'Flask and FastAPI',
    'Evaluation and guardrails',
  ],
};

export function findTitle(id: string): Title | undefined {
  for (const row of ROWS) {
    const found = row.items.find((t) => t.id === id);
    if (found) return found;
  }
  return undefined;
}

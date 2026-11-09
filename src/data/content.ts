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
    id: 'data-analytics',
    title: 'Trending Now',
    subtitle: 'Data analytics: pipelines, models and dashboards',
    items: [
      {
        id: 'sql-session-lab',
        name: 'sql-session-lab',
        tagline: 'Raw clickstream in, honest sessions and funnels out.',
        description:
          'Advanced SQL analytics over a seeded clickstream (6,965 events, 800 users, 92 days) in SQLite: gaps-and-islands sessionisation with a 30-minute timeout (2,207 sessions), a session funnel (2,207 view to 406 purchase, 18.4% conversion), 7-day moving-average revenue with window frames, purchase cohort retention, and a recursive-CTE calendar spine. Revenue reconciles three ways to £30,755.34, and a fixture test caught a real float-precision bug at the 30-minute boundary. 9 tests green.',
        year: '2026',
        badge: 'Project',
        tags: ['SQL', 'SQLite', 'Python', 'Window functions'],
        metrics: ['2,207 sessions, 18.4% conversion', 'Revenue £30,755.34 reconciled 3 ways', '9 tests green'],
        links: [
          {
            label: 'View on GitHub',
            url: 'https://github.com/Jagadeesh5045/AI-builds/tree/main/projects/sql-session-lab',
          },
        ],
        art: 'linear-gradient(135deg, #0f172a 0%, #0369a1 60%, #38bdf8 100%)',
      },
      {
        id: 'pipeline-pulse',
        name: 'pipeline-pulse',
        tagline: 'ETL with a heartbeat.',
        description:
          'ETL pipeline with data quality checks: Python ETL into a DuckDB warehouse, running 17 automated data-quality checks and quarantining 503 bad rows, with automated quality reports and a KPI dashboard.',
        year: '2026',
        badge: 'Project',
        tags: ['Python', 'DuckDB', 'Data quality'],
        metrics: ['17 data-quality checks', '503 rows quarantined', 'DuckDB warehouse', 'KPI dashboard'],
        links: [{ label: 'View on GitHub', url: 'https://github.com/Jagadeesh5045/pipeline-pulse' }],
        art: 'linear-gradient(135deg, #1c1410 0%, #92400e 55%, #f59e0b 100%)',
      },
      {
        id: 'churn-x',
        name: 'churn-x',
        tagline: 'Churn prediction you can explain.',
        description:
          'Customer churn prediction with explainability: GradientBoosting models, AUC and F1 evaluation, SHAP-style insights, and a what-if dashboard.',
        year: '2026',
        badge: 'Project',
        tags: ['Python', 'Scikit-learn', 'Explainability'],
        metrics: ['Test ROC-AUC 0.839', 'GradientBoosting models', 'SHAP-style insights', 'What-if dashboard'],
        links: [{ label: 'View on GitHub', url: 'https://github.com/Jagadeesh5045/churn-x' }],
        art: 'linear-gradient(135deg, #0a1628 0%, #1e3a8a 60%, #3b82f6 100%)',
      },
      {
        id: 'retail-warehouse',
        name: 'retail-warehouse',
        tagline: 'A warehouse that survives messy source files.',
        description:
          'Incremental star-schema warehouse load in pure Python and SQLite: SCD Type 2 customer and product history, deduplication with late corrections winning, quarantine for unresolvable orders, and a load manifest for reconciliation. Batch 1: 403 source rows to 400 facts with 1 quarantined; batch 2 adds 180 new orders, 8 movers and 3 price rises; re-runs are idempotent. 14 tests green, 580 fact orders, 460 completed orders, £50,029.15 revenue.',
        year: '2026',
        badge: 'Project',
        tags: ['Python', 'SQL', 'SQLite', 'Data engineering'],
        metrics: ['580 fact orders', 'SCD Type 2 history', '14 tests green'],
        links: [
          {
            label: 'View on GitHub',
            url: 'https://github.com/Jagadeesh5045/AI-builds/tree/main/projects/retail-warehouse',
          },
        ],
        art: 'linear-gradient(135deg, #0a1f1a 0%, #0f766e 60%, #2dd4bf 100%)',
      },
      {
        id: 'saas-kpi-board',
        name: 'saas-kpi-board',
        tagline: 'The monthly KPI board, defined in SQL.',
        description:
          'SaaS subscription KPI analytics in Python, SQLite and SQL: a billing-shaped warehouse (714 customers, 5,246 snapshots, 18 months) and a named, tested SQL KPI suite covering MRR, logo and revenue churn, cohort retention, GRR and NRR, plan mix, and channel LTV, CAC and payback, generating an analyst report and CSV extracts. Latest month: MRR £48,824, 566 active customers, GRR 76.8% and NRR 95.2% at 12 months, Referral the strongest channel on LTV:CAC. 14 tests green.',
        year: '2026',
        badge: 'Project',
        tags: ['Python', 'SQL', 'SQLite', 'KPI reporting'],
        metrics: ['MRR £48,824, 566 active', 'GRR 76.8%, NRR 95.2%', '14 tests green'],
        links: [
          {
            label: 'View on GitHub',
            url: 'https://github.com/Jagadeesh5045/AI-builds/tree/main/projects/saas-kpi-board',
          },
        ],
        art: 'linear-gradient(135deg, #0a1a2f 0%, #1d4ed8 60%, #38bdf8 100%)',
      },
      {
        id: 'experiment-lab',
        name: 'experiment-lab',
        tagline: 'Would you have shipped it? Prove it.',
        description:
          'A/B testing and experimentation statistics toolkit: two-proportion z-test, Bayesian A/B, CUPED variance reduction (34.9% on average order value), SPRT early stopping and a peeking audit on a realistic 4,000-user checkout experiment. Lift +1.84pp, p=0.0212, verdict: ship it. 13 tests green.',
        year: '2026',
        badge: 'Project',
        tags: ['Python', 'Statistics', 'Experimentation'],
        metrics: ['Lift +1.84pp, p=0.0212', 'CUPED variance cut 34.9%', '13 tests green'],
        links: [
          {
            label: 'View on GitHub',
            url: 'https://github.com/Jagadeesh5045/AI-builds/tree/main/projects/experiment-lab',
          },
        ],
        art: 'linear-gradient(135deg, #1a1033 0%, #5b21b6 60%, #a78bfa 100%)',
      },
      {
        id: 'drift-guard',
        name: 'drift-guard',
        tagline: 'Train it, prove it, watch it in production.',
        description:
          'ML training, evaluation and deployment-readiness pipeline: 3-model bake-off with 5-fold CV (tuned logistic regression champion, CV ROC-AUC 0.9959), JSONL experiment registry, holdout model card (ROC-AUC 0.9954), PSI drift monitoring, and a FastAPI inference service. 8 tests green.',
        year: '2026',
        badge: 'Project',
        tags: ['Python', 'Scikit-learn', 'FastAPI', 'MLOps'],
        metrics: ['Holdout ROC-AUC 0.9954', 'PSI drift monitoring', '8 tests green'],
        links: [
          {
            label: 'View on GitHub',
            url: 'https://github.com/Jagadeesh5045/AI-builds/tree/main/projects/drift-guard',
          },
        ],
        art: 'linear-gradient(135deg, #06281f 0%, #065f46 60%, #34d399 100%)',
      },
      {
        id: 'mlops-credit',
        name: 'mlops-credit',
        tagline: 'A scoring model that watches itself in production.',
        description:
          'End-to-end MLOps for credit default prediction: a JSON model registry, a 90/10 canary deploy where the challenger is promoted only on +0.02 ROC-AUC, and PSI drift monitoring that retrains automatically when drift crosses threshold. 5,000 synthetic applicants, champion ROC-AUC 0.6886, canary kept the champion, drift on income (PSI 0.3773) and late payments (PSI 1.7022) triggered retraining to v3. 4 tests green.',
        year: '2026',
        badge: 'Project',
        tags: ['Python', 'Scikit-learn', 'MLOps'],
        metrics: ['Champion ROC-AUC 0.6886', 'Canary kept the champion', 'Drift retrained to v3'],
        links: [
          {
            label: 'View on GitHub',
            url: 'https://github.com/Jagadeesh5045/AI-builds/tree/main/flagship/mlops-credit',
          },
        ],
        art: 'linear-gradient(135deg, #052e22 0%, #065f46 55%, #f59e0b 100%)',
      },
      {
        id: 'care-wait-analytics',
        name: 'care-wait-analytics',
        tagline: 'Waiting lists you can trust, with an early warning for breaches.',
        description:
          'Health-sector flagship pairing data analytics with AI: a synthetic elective referral pipeline (6,075 raw rows, 10 data quality checks, 75 rows quarantined) into a SQLite warehouse, SQL analytics showing a median wait of 97 days and 26.4% breaching 18 weeks, a Gradient Boosting breach-risk model (ROC-AUC 0.8516), a 28-day deprivation gap, and a management briefing whose every number is verified against the warehouse before it goes out. 5 tests green.',
        year: '2026',
        badge: 'Project',
        tags: ['Python', 'SQL', 'SQLite', 'Scikit-learn', 'Health analytics'],
        metrics: ['Median wait 97 days, breach 26.4%', 'Breach-risk ROC-AUC 0.8516', '75 rows quarantined, 5 tests green'],
        links: [
          {
            label: 'View on GitHub',
            url: 'https://github.com/Jagadeesh5045/AI-builds/tree/main/flagship/care-wait-analytics',
          },
        ],
        art: 'linear-gradient(135deg, #082f2e 0%, #0f766e 55%, #38bdf8 100%)',
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
          'A running series of real-world mini projects, rotating across data analytics, data engineering, SQL, machine learning and AI engineering. Every build ships with code and a writeup.',
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
    id: 'ai-engineering',
    title: 'AI Engineering',
    subtitle: 'LLM systems, RAG and evaluation',
    items: [
      HERO,
      {
        id: 'rag-eval-lab',
        name: 'rag-eval-lab',
        tagline: 'A lab for measuring retrieval quality.',
        description:
          'RAG evaluation lab: hybrid retrieval (BM25 plus vector plus RRF), groundedness checking, and an eval dashboard for measuring retrieval quality.',
        year: '2026',
        badge: 'Project',
        tags: ['Python', 'RAG', 'Evaluation'],
        metrics: ['Recall@k 0.9583', 'Hybrid retrieval pipeline', 'Groundedness checking', 'Eval dashboard'],
        links: [{ label: 'View on GitHub', url: 'https://github.com/Jagadeesh5045/rag-eval-lab' }],
        art: 'linear-gradient(135deg, #04211f 0%, #0f4c44 55%, #14b8a6 100%)',
      },
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
      {
        id: 'rag-router',
        name: 'rag-router',
        tagline: 'The right retrieval path for every query.',
        description:
          'Hybrid query router for RAG: a scikit-learn classifier routes each query to vector search, BM25, or NL-to-SQL over a DuckDB warehouse. Routing accuracy 0.926 on a 54-query eval, keyword recall@5 1.000, SQL answers 30/30 exact, with latency/quality trade-off evals and a FastAPI ask endpoint.',
        year: '2026',
        badge: 'Project',
        tags: ['Python', 'RAG', 'Scikit-learn', 'FastAPI', 'DuckDB'],
        metrics: ['Routing accuracy 0.926', 'SQL answers 30/30 exact', 'Keyword recall@5 1.000'],
        links: [
          {
            label: 'View on GitHub',
            url: 'https://github.com/Jagadeesh5045/AI-builds/tree/main/flagship/rag-router',
          },
        ],
        art: 'linear-gradient(135deg, #1f0a14 0%, #9d174d 60%, #f472b6 100%)',
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
  role: 'Data Analyst and AI Engineer',
  location: 'Birmingham, UK',
  photo: 'https://i.postimg.cc/2ywBFKPj/profile.jpg',
  email: 'Padalajagadeesh578@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jagadeesh5045/',
  github: 'https://github.com/Jagadeesh5045',
  medium: 'https://medium.com/@padalajagadeesh578',
  orcid: 'https://orcid.org/0009-0006-5399-4805',
  scholar: 'https://scholar.google.com/citations?user=Loygz-EAAAAJ',
  rightToWork: 'Graduate visa from December 2026, no sponsorship required.',
  bio: [
    'I am a data analyst and AI engineer in Birmingham, UK. I turn messy data into decisions: SQL and Python analysis, Power BI dashboards, and data pipelines with quality checks you can trust.',
    'Two years as a Python Developer building data pipelines, reporting workflows and backend services, then an MSc in Artificial Intelligence at Aston University, awarded with Merit. My Pipeline Pulse ETL runs 17 data-quality checks and quarantined 503 bad rows; my Churn-X churn model scores a test ROC-AUC of 0.839 with SHAP-style explanations.',
    'On the AI side, I build LLM systems that hold up under scrutiny: Code Sage AI, my agentic RAG dissertation project, and RAG Eval Lab, an evaluation harness whose retrieval hits a recall@k of 0.9583.',
    'I am looking for Data Analyst roles first, and AI Engineer roles too, anywhere in the UK. I am available immediately, with a Graduate visa from December 2026 and no sponsorship required.',
    'Every project here ships with code and numbers. Nothing is a mockup.',
  ],
  stats: [
    { value: '2+', label: 'Years as a Python Developer' },
    { value: '24', label: 'Daily AI experiments shipped' },
    { value: '20', label: 'Citations in the judge vs verifier study' },
    { value: 'MSc', label: 'Artificial Intelligence, Aston' },
  ],
  skills: [
    'SQL',
    'Advanced SQL (window functions, CTEs)',
    'Python',
    'Power BI',
    'Excel',
    'DuckDB',
    'Data engineering and ETL',
    'Scikit-learn',
    'Flask and FastAPI',
    'LLM and RAG systems',
    'Natural Language Processing',
    'Evaluation and guardrails',
    'TensorFlow',
    'PyTorch',
    'Hugging Face',
    'LangGraph',
    'ChromaDB',
    'MLOps',
    'Docker',
    'AWS',
    'Spark',
  ],
};

export function findTitle(id: string): Title | undefined {
  for (const row of ROWS) {
    const found = row.items.find((t) => t.id === id);
    if (found) return found;
  }
  return undefined;
}

// ─── portfolio.ts ────────────────────────────────────────────────────────────
// Single source of truth for the site. Every fact here is real: no invented
// employers, numbers, or qualifications. Update this file to update the site.

export const profile = {
  name: 'Jagadeeswara Rao Padala',
  title: 'AI Engineer',
  tagline: 'I build production-grade AI systems — and I measure them.',
  location: 'Birmingham, UK',
  photo: 'https://i.postimg.cc/2ywBFKPj/profile.jpg',
  availability: 'Immediately available',
  workAuth: 'Graduate visa from December 2026 — no sponsorship required',
  relocate: 'Will relocate anywhere in the UK · Remote / Hybrid',
  email: 'Padalajagadeesh578@gmail.com',
  phone: '+44 7466125396',
  linkedin: 'https://www.linkedin.com/in/jagadeesh5045/',
  github: 'https://github.com/Jagadeesh5045',
};

export const about = {
  heading: 'Raw input, structured output.',
  paragraphs: [
    'MSc Artificial Intelligence (Aston University, UK) with 2 years building Python backends in production. Now I engineer LLM-powered systems end to end.',
    'I do not do tutorial projects. Everything here is built, tested, measured, and shipped: RAG pipelines with hybrid retrieval and groundedness evals, ML models with explainability, data pipelines with quality gates. Real numbers in every README.',
  ],
  metrics: [
    { value: '0.839', label: 'churn model AUC' },
    { value: '0.96', label: 'retrieval recall@3' },
    { value: '12', label: 'languages parsed (AST)' },
    { value: '13', label: 'LangGraph agent states' },
  ],
};

export interface Project {
  name: string;
  tag: string;
  description: string;
  stack: string[];
  metrics: string[];
  repo: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'Code Sage AI',
    tag: 'flagship · MSc dissertation',
    description:
      'Agentic RAG code assistant. Tree-sitter AST chunking across 12 languages, 13-state LangGraph orchestration, hybrid retrieval (dense + BM25 + cross-encoder re-rank), a citation engine tracing claims to exact file:line, and a hallucination guard. Evaluated on a 25-query benchmark and compared like-for-like against ChatGPT on an unseen codebase.',
    stack: ['Python', 'LangGraph', 'ChromaDB', 'Tree-sitter', 'Flask', 'Docker'],
    metrics: ['25-query benchmark', '12 languages', 'file:line citations'],
    repo: 'https://github.com/Jagadeesh5045/code-sage-ai',
    featured: true,
  },
  {
    name: 'ticket-triage',
    tag: 'flagship',
    description:
      'AI support-ticket triage service: FastAPI API classifying tickets into 8 categories, calibrated priority scoring, auto-reply draft generation, and PSI drift monitoring to catch model decay in production.',
    stack: ['FastAPI', 'scikit-learn', 'Docker'],
    metrics: ['8 categories', 'calibrated scoring', 'PSI drift monitor'],
    repo: 'https://github.com/Jagadeesh5045/AI-builds/tree/main/flagship/ticket-triage',
  },
  {
    name: 'disagreement-measurement',
    tag: 'experiment · Oct 2026',
    description:
      'Ran a deterministic citation verifier and an LLM-as-judge over the same 20 drafts and counted where they disagree. Found 3 judge-overtrust failures: citations the judge passed that the file did not support. 19/19 verifier tests pass.',
    stack: ['Python', 'TF-IDF', 'pytest'],
    metrics: ['20 citations', '3 disagreements found', '19/19 tests'],
    repo: 'https://github.com/Jagadeesh5045/AI-builds/tree/main/daily/2026-10-09-disagreement-measurement/',
  },
  {
    name: 'rag-eval-lab',
    tag: 'evaluation',
    description:
      'RAG evaluation lab: hybrid retrieval (BM25 + TF-IDF + RRF fusion), sentence-level groundedness checker, and an eval harness measuring precision, recall, groundedness, and latency, with a Streamlit dashboard.',
    stack: ['Python', 'Streamlit'],
    metrics: ['recall@3 0.96', 'groundedness checker'],
    repo: 'https://github.com/Jagadeesh5045/rag-eval-lab',
  },
  {
    name: 'churn-x',
    tag: 'machine learning',
    description:
      'Customer churn prediction with GradientBoosting (AUC 0.839), SHAP explainability, and a Streamlit what-if simulator for exploring retention levers.',
    stack: ['scikit-learn', 'SHAP', 'Streamlit'],
    metrics: ['AUC 0.839', 'SHAP explanations'],
    repo: 'https://github.com/Jagadeesh5045/churn-x',
  },
  {
    name: 'pipeline-pulse',
    tag: 'data engineering',
    description:
      'ETL pipeline with 17 data-quality checks feeding a DuckDB warehouse and a KPI dashboard. Quality gates before the warehouse, not after.',
    stack: ['Python', 'DuckDB', 'Pandas'],
    metrics: ['17 quality checks', 'DuckDB warehouse'],
    repo: 'https://github.com/Jagadeesh5045/pipeline-pulse',
  },
];

export interface Role {
  title: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

export const experience: Role[] = [
  {
    title: 'Python Developer',
    company: 'PROMO IT Solutions',
    period: 'Apr 2023 – Apr 2025',
    location: 'Remote, London',
    points: [
      'Built and maintained Python backend services and APIs in production.',
      'Worked on data pipelines processing real client workloads.',
      'Shipped with FastAPI and Docker in a remote-first team.',
    ],
  },
  {
    title: 'Trainee',
    company: 'KPIT',
    period: 'Dec 2023 – Mar 2024',
    location: 'Pune, India',
    points: ['On-site trainee apprenticeship, completed alongside remote Python development work in different working hours.'],
  },
];

export const education = [
  {
    degree: 'MSc Artificial Intelligence',
    school: 'Aston University, Birmingham UK',
    period: 'Apr 2025 – Apr 2026',
  },
  {
    degree: 'B.Tech Computer Science',
    school: 'Lovely Professional University',
    period: '2020 – 2024 · CGPA 8.3/10',
  },
];

export const writing = [
  {
    title: 'I Built a RAG System That Cites Its Sources. The Evals Taught Me More Than the Build.',
    venue: 'Medium · Oct 2026',
    description:
      'What building Code Sage AI taught me about evaluating RAG systems: results table, failure analysis, and the code. Submitted to Towards Data Science.',
    link: 'https://medium.com/@padalajagadeesh578/title-i-built-a-rag-system-that-cites-its-sources-the-evals-taught-me-more-than-the-build-5996da7ac7c9',
  },
];

export const skills: { category: string; items: string[] }[] = [
  { category: 'AI / ML', items: ['Python', 'LLM/RAG systems', 'NLP', 'Scikit-learn', 'TensorFlow'] },
  { category: 'Backend', items: ['FastAPI', 'Docker', 'AWS', 'SQL (MySQL, MS SQL)'] },
  { category: 'Data', items: ['Pandas', 'NumPy', 'Spark/Hadoop/Hive/Kafka', 'Power BI', 'Tableau'] },
];

export const stages = [
  { id: 'ingest', num: '01', name: 'INGEST', blurb: 'who I am' },
  { id: 'retrieve', num: '02', name: 'RETRIEVE', blurb: 'selected work' },
  { id: 'rerank', num: '03', name: 'RERANK', blurb: 'experience, ordered' },
  { id: 'generate', num: '04', name: 'GENERATE', blurb: 'writing' },
  { id: 'evaluate', num: '05', name: 'EVALUATE', blurb: 'verify and contact' },
] as const;

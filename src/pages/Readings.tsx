import React, { useMemo, useState } from 'react';

const typeColors: Record<string, string> = {
  Paper: 'bg-blue-50 text-blue-700 border-blue-200',
  Video: 'bg-red-50 text-red-700 border-red-200',
  Article: 'bg-green-50 text-green-700 border-green-200',
  Book: 'bg-amber-50 text-amber-700 border-amber-200',
};

type ReadItem = {
  type: string;
  href: string;
  title: string;
  desc: string;
  module?: 'module1' | 'module2' | 'module3' | 'general';
};

// Further readings (content unchanged). Added `module` metadata to support filtering.
const furtherReadings: ReadItem[] = [
  { type: 'Paper', href: 'https://arxiv.org/pdf/1706.03762', title: 'Attention Is All You Need', desc: 'Introduces the Transformer architecture, foundational for understanding RAG, Agentic AI, and modern LLMs covered in the course.', module: 'module2' },
  { type: 'Video', href: 'https://www.youtube.com/watch?v=eMlx5fFNoYc', title: '3Blue1Brown – "Attention in transformers, visually explained"', desc: 'Intuitive visual explanation of transformer architecture.', module: 'module2' },
  { type: 'Video', href: 'https://www.youtube.com/watch?v=LPZh9BOjkQs', title: '3Blue1Brown – "But what is a GPT? Visual intro to transformers"', desc: 'Intuitive visual explanation of how large language models work.', module: 'module2' },
  { type: 'Paper', href: 'https://arxiv.org/pdf/1506.02640', title: 'You Only Look Once: Unified, Real-Time Object Detection', desc: 'Introduces the original YOLO algorithm.', module: 'module1' },
  { type: 'Video', href: 'https://www.youtube.com/watch?v=Cgxsv1riJhI', title: 'How computers learn to recognize objects instantly (by Joseph Redmon in TED)', desc: 'Joseph, one of the creators of YOLO, introduced his research.', module: 'module1' },
  { type: 'Paper', href: 'https://www.sciencedirect.com/science/article/abs/pii/S0926580525005643', title: 'Real-time detection of highway tunnel lining cracks using YOLOv8-DTD with an android application', desc: 'Published in Automation in Construction (2025). Based on a dataset from 141 highway tunnels in Shaanxi, China, this study deploys YOLOv8 on Android phones for real-time crack detection.', module: 'module1' },
  { type: 'Video', href: 'https://www.youtube.com/watch?v=vFGxM2KLs10', title: 'YOLOv7 Segmentation Concrete Crack Detection step-by-step Tutorial', desc: 'A practical tutorial demonstrating how to use YOLO for concrete crack detection in Google Colab.', module: 'module1' },
  { type: 'Article', href: 'https://www.reuters.com/world/middle-east/amazon-cloud-unit-flags-issues-bahrain-uae-data-centers-amid-iran-strikes-2026-03-02/', title: 'AWS Data Centers Hit by Drone Strikes', desc: 'Drone strikes damaged AWS facilities in UAE/Bahrain, causing AI service outages and highlighting cloud infrastructure vulnerabilities in geopolitics.', module: 'general' },
  { type: 'Book', href: 'https://aibooksummary.com/thinking-fast-and-slow-book-summary/', title: 'Thinking, Fast and Slow – Daniel Kahneman', desc: 'Explores System 1 (fast, intuitive) vs. System 2 (slow, deliberate) thinking and cognitive biases—relevant for understanding AI limitations in mimicking human reasoning.', module: 'general' },
  { type: 'Video', href: 'https://www.youtube.com/watch?v=E2yzX6Gch40&t=9s', title: 'Fei-Fei Li Helped Create AI, Now She Feels the Responsibility', desc: 'AI pioneer Fei-Fei Li discusses her ImageNet legacy and the push for human-centered AI safeguards amid ethical and societal risks.', module: 'module1' },
  { type: 'Article', href: 'https://www.nextplatform.com/compute/2026/02/19/taalas-etches-ai-models-onto-transistors-to-rocket-boost-inference/4092140', title: 'Taalas Etches AI Model Weights onto Chips', desc: 'Startup Taalas hardwires LLM weights directly into silicon chips (no HBM needed), achieving 17k tokens/sec—advancing edge AI inference efficiency.', module: 'module2' },
  { type: 'Video', href: 'https://www.youtube.com/watch?v=21EYKqUsPfg', title: 'Richard Sutton – Father of RL Thinks LLMs Are a Dead End', desc: 'Turing Award winner Richard Sutton argues LLMs violate the Bitter Lesson and predicts RL-based agents will ultimately supersede static trained models.', module: 'module2' },
  { type: 'Article', href: 'https://www.vincentsitzmann.com/blog/bitter_lesson_of_cv/', title: 'The Flavor of the Bitter Lesson for Computer Vision – Vincent Sitzmann', desc: 'Extends the Bitter Lesson to CV, arguing that hand-crafted intermediate representations will be replaced by end-to-end perception-action pipelines.', module: 'module1' },
  { type: 'Article', href: 'https://www.vincentsitzmann.com/blog/on_research/', title: 'Make It Work, Then Prove It Works – Vincent Sitzmann', desc: 'A two-mode research framework—rapid prototyping then rigorous ablation—to help AI researchers avoid wasting time on invalid hypotheses.', module: 'general' },
  { type: 'Article', href: 'https://www.vizuaranewsletter.com/p/vision-transformers?r=5b5pyd&utm_campaign=post&utm_medium=web', title: 'Vision Transformers – Vizuara AI Newsletter', desc: 'Technical walkthrough of ViT covering patch embeddings, self-attention vs. CNN receptive fields, and hands-on fine-tuning on the Oxford-IIIT Pet dataset.', module: 'module1' },
  { type: 'Article', href: 'https://ergosphere.blog/posts/the-machines-are-fine/', title: 'The Machines Are Fine. I\'m Worried About Us.', desc: 'An astrophysicist argues that AI agents don\'t threaten science—but bypassing the struggle of learning does, using the parable of two PhD students to show that outsourcing thinking to LLMs produces papers without understanding.', module: 'general' },
  { type: 'Article', href: 'https://www.linkedin.com/pulse/ai-data-centres-what-means-civil-engineers-damir-pervan-u3iwf/', title: 'AI Data Centres: What It Means for Civil Engineers', desc: 'Civil engineer Damir Pervan explores how the AI data centre construction boom is reshaping civil engineering demands—covering structural load requirements, site selection, power infrastructure, and the growing need for civils to collaborate with mechanical and electrical teams.', module: 'general' },
  { type: 'Video', href: 'https://www.youtube.com/watch?v=EdZWPB1fIJc', title: 'Should You Learn Coding Now? Anthropic CEO Explains', desc: 'Anthropic CEO Dario Amodei argues that while AI will handle routine coding first, foundational programming skills remain valuable—advising learners to pair basic coding knowledge with AI tool fluency, prompting, and systems thinking for the AI era.', module: 'general' },

  { type: 'Paper', href: 'https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2025.1697169/full', title: 'MechRAG: A Multimodal LLM for Mechanical Engineering', desc: 'Integrates CAD/CAE digital assets into a conversational interface, letting engineers query complex numerical data using natural language.', module: 'module3' },
  { type: 'Paper', href: 'https://arxiv.org/html/2508.04714v2', title: 'Prescriptive Agents Based on RAG for Automated Maintenance', desc: 'A RAG-powered agentic system that retrieves technical documentation to generate prescriptive maintenance action plans for industrial equipment.', module: 'module3' },
  { type: 'Paper', href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5172919', title: 'ChatCivic: A Domain-Specific LLM for Design Code Interpretation', desc: 'A RAG-enhanced LLM enabling engineers to query complex civil engineering design codes in natural language with high accuracy.', module: 'module3' },
  { type: 'Paper', href: 'https://ieeexplore.ieee.org/document/10762118', title: 'Automated Smart City Planning through Personalized LLM with RAG', desc: 'Combines personalized LLMs with RAG to automate urban planning, generating infrastructure proposals aligned with city-specific regulations.', module: 'module3' },
  { type: 'Paper', href: 'https://arxiv.org/pdf/2409.00494', title: 'GenAI-Powered Multi-Agent Paradigm for Smart Urban Mobility', desc: 'Proposes a multi-agent LLM and RAG architecture for intelligent transportation, covering traffic management, routing, and public transit coordination.', module: 'module3' },
  { type: 'Paper', href: 'https://www.sciencedirect.com/science/article/abs/pii/S1474034625000515?via%3Dihub', title: 'RAG4CM: RAG-Driven Information Retrieval in Construction Management', desc: 'Parses project documents into hierarchical structures with user preference learning to bridge high-level queries and granular construction documentation.', module: 'module3' },
  { type: 'Paper', href: 'https://www.mdpi.com/2079-9292/14/16/3314', title: 'A RAG Method for QA on Airworthiness Regulations', desc: 'A two-stage semantic retrieval and cross-encoder re-ranking pipeline for intelligent QA support in civil aviation airworthiness certification.', module: 'module3' },
  { type: 'Article', href: 'https://developer.ibm.com/articles/agentic-rag-pipeline/', title: 'Building an Agentic RAG Pipeline – IBM Developer', desc: 'IBM demonstrates a multi-step agentic RAG pipeline for enterprise power supply discovery, showcasing practical deployment in industrial settings.', module: 'module3' },
  { type: 'Paper', href: 'https://arxiv.org/html/2508.12682v1', title: 'GridCodex: A RAG-Driven AI Framework for Power Grid Code Reasoning', desc: 'Applies RAG to automate reasoning over power grid codes and compliance standards for real-time engineering support.', module: 'module3' },
  { type: 'Paper', href: 'https://www.sciencedirect.com/science/article/pii/S147403462400658X', title: 'An Advanced RAG System for Manufacturing Quality Control', desc: 'Deploys RAG in smart manufacturing to retrieve defect records and generate LLM-driven root cause analyses on the production floor.', module: 'module3' },
  { type: 'Paper', href: 'https://www.mdpi.com/2076-3417/14/20/9318', title: 'Evaluating RAG Models for Financial Report QA', desc: 'Uses MedRAG and KG-RAG to ground LLM responses in biomedical knowledge graphs, reducing hallucinations in clinical QA applications.', module: 'module3' },
];

const moduleLabels: Record<string, string> = {
  module1: 'Module 1',
  module2: 'Module 2',
  module3: 'Module 3',
  general: 'General',
};

const typeOptions = ['All Types', 'Paper', 'Article', 'Video', 'Book'];
const moduleOptions = [
  { key: 'all', label: 'All' },
  { key: 'module1', label: 'Module 1: Deep Learning for Computer Vision' },
  { key: 'module2', label: 'Module 2: Fundamentals in NLP, LLM and RAG' },
  { key: 'module3', label: 'Module 3: AI as Professional Assistant' },
  { key: 'general', label: 'General' },
];

const sectionOptions = [
  { key: 'all', label: 'All' },
  { key: 'required', label: 'Required' },
  { key: 'further', label: 'Further' },
];

export default function Readings() {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [moduleFilter, setModuleFilter] = useState('all');
  const [sectionFilter, setSectionFilter] = useState<'all'|'required'|'further'>('all');

  // Required readings placeholder (use 'general' as module placeholder)
  const requiredReadings: ReadItem[] = [];

  const filteredFurther = useMemo(() => {
    return furtherReadings.filter((it) => {
      const matchesQuery = it.title.toLowerCase().includes(query.trim().toLowerCase());
      const matchesType = typeFilter === 'All Types' || it.type === typeFilter;
      const matchesModule = moduleFilter === 'all' || it.module === moduleFilter;
      return matchesQuery && matchesType && matchesModule;
    });
  }, [query, typeFilter, moduleFilter]);

  const filteredRequired = useMemo(() => {
    // requiredReadings is empty in current content; kept for future items
    return requiredReadings.filter((it) => {
      const matchesQuery = it.title.toLowerCase().includes(query.trim().toLowerCase());
      const matchesType = typeFilter === 'All Types' || it.type === typeFilter;
      const matchesModule = moduleFilter === 'all' || it.module === moduleFilter;
      return matchesQuery && matchesType && matchesModule;
    });
  }, [query, typeFilter, moduleFilter]);

  const displayedItems = useMemo(() => {
    const req = filteredRequired.map((it) => ({ ...it, section: 'Required' }));
    const fur = filteredFurther.map((it) => ({ ...it, section: 'Further' }));
    let combined = [...req, ...fur];
    if (sectionFilter === 'required') combined = req;
    else if (sectionFilter === 'further') combined = fur;
    return combined;
  }, [filteredRequired, filteredFurther, sectionFilter]);

  const totalResults = displayedItems.length;

  const activeBtn = 'rounded-full px-4 py-1.5 text-sm border bg-purple-100 text-purple-700 border-purple-300';
  const inactiveBtn = 'rounded-full px-4 py-1.5 text-sm border bg-white text-slate-600 border-slate-200';

  return (
    <div className="text-slate-800 antialiased min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-10">
          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-transparent bg-clip-text">Readings</span>
        </h1>

        {/* Search */}
        <div className="mb-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search readings by title..."
            className="w-full max-w-2xl border border-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
            type="text"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            {typeOptions.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTypeFilter(t)}
                className={t === typeFilter ? activeBtn : inactiveBtn}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="ml-4 flex items-center gap-2 flex-wrap">
            {moduleOptions.map((m) => (
              <button
                key={m.key}
                type="button"
                onClick={() => setModuleFilter(m.key)}
                className={m.key === moduleFilter ? activeBtn : inactiveBtn}
              >
                {m.label}
              </button>
            ))}
          </div>

          <div className="ml-4 flex items-center gap-2 flex-wrap">
            {sectionOptions.map((s) => (
              <button
                key={s.key}
                type="button"
                onClick={() => setSectionFilter(s.key)}
                className={s.key === sectionFilter ? activeBtn : inactiveBtn}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="ml-auto text-sm text-slate-500">Showing {totalResults} results</div>
        </div>

        {/* Results */}
        <div className="space-y-8">
          {totalResults === 0 ? (
            <div className="text-center text-slate-600">No readings match your filters.</div>
          ) : (
            <>
              {/* Combined Results */}
              <section>
                <ul className="mt-4 space-y-5">
                  {displayedItems.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                      <span className={`mt-0.5 flex-shrink-0 text-xs font-semibold px-2 py-1 rounded border ${typeColors[item.type] ?? 'bg-slate-100 text-slate-700 border-slate-200'}`}>
                        {item.type}
                      </span>
                      <div>
                        <a href={item.href} className="font-medium text-slate-900 hover:text-purple-600 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                          {item.title}
                        </a>
                        <p className="mt-1 text-sm text-slate-500">{item.desc}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="inline-block text-xs text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">{item.section}</span>
                          <span className="inline-block text-sm text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{moduleLabels[item.module ?? 'general']}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

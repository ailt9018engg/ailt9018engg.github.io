import React, { useState } from 'react';

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${open ? 'rotate-180' : ''}`}
    fill="none" stroke="currentColor" viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const AccordionSection = ({
  title,
  badge,
  open,
  onToggle,
  children,
}: {
  title: string;
  badge?: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) => (
  <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
    <button
      type="button"
      onClick={onToggle}
      className="w-full px-6 py-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors duration-200"
    >
      <div className="flex items-center gap-3 text-left">
        <span className="text-xl font-semibold text-slate-900">{title}</span>
        {badge && (
          <span className="hidden sm:inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-purple-100 text-purple-700">
            {badge}
          </span>
        )}
      </div>
      <ChevronIcon open={open} />
    </button>

    <div
      className={`transition-all duration-300 ease-in-out overflow-hidden ${open ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}
    >
      <div className="border-t border-slate-100 px-6 py-6">
        {children}
      </div>
    </div>
  </div>
);

const typeColors: Record<string, string> = {
  Paper: 'bg-blue-50 text-blue-700 border-blue-200',
  Video: 'bg-red-50 text-red-700 border-red-200',
  Article: 'bg-green-50 text-green-700 border-green-200',
  Book: 'bg-amber-50 text-amber-700 border-amber-200',
};

const furtherReadings = [
  {
    type: 'Paper',
    href: 'https://arxiv.org/pdf/1706.03762',
    title: 'Attention Is All You Need',
    desc: 'Introduces the Transformer architecture, foundational for understanding RAG, Agentic AI, and modern LLMs covered in the course.',
  },
  {
    type: 'Video',
    href: 'https://www.youtube.com/watch?v=eMlx5fFNoYc',
    title: '3Blue1Brown – "Attention in transformers, visually explained"',
    desc: 'Intuitive visual explanation of transformer architecture.',
  },
  {
    type: 'Video',
    href: 'https://www.youtube.com/watch?v=LPZh9BOjkQs',
    title: '3Blue1Brown – "But what is a GPT? Visual intro to transformers"',
    desc: 'Intuitive visual explanation of how large language models work.',
  },
  {
    type: 'Paper',
    href: 'https://arxiv.org/pdf/1506.02640',
    title: 'You Only Look Once: Unified, Real-Time Object Detection',
    desc: 'Introduces the original YOLO algorithm.',
  },
  {
    type: 'Video',
    href: 'https://www.youtube.com/watch?v=Cgxsv1riJhI',
    title: 'How computers learn to recognize objects instantly (by Joseph Redmon in TED)',
    desc: 'Joseph, one of the creators of YOLO, introduced his research.',
  },
  {
    type: 'Paper',
    href: 'https://www.sciencedirect.com/science/article/abs/pii/S0926580525005643',
    title: 'Real-time detection of highway tunnel lining cracks using YOLOv8-DTD with an android application',
    desc: 'Published in Automation in Construction (2025). Based on a dataset from 141 highway tunnels in Shaanxi, China, this study deploys YOLOv8 on Android phones for real-time crack detection.',
  },
  {
    type: 'Video',
    href: 'https://www.youtube.com/watch?v=vFGxM2KLs10',
    title: 'YOLOv7 Segmentation Concrete Crack Detection step-by-step Tutorial',
    desc: 'A practical tutorial demonstrating how to use YOLO for concrete crack detection in Google Colab.',
  },
  {
    type: 'Article',
    href: 'https://www.reuters.com/world/middle-east/amazon-cloud-unit-flags-issues-bahrain-uae-data-centers-amid-iran-strikes-2026-03-02/',
    title: 'AWS Data Centers Hit by Drone Strikes',
    desc: 'Drone strikes damaged AWS facilities in UAE/Bahrain, causing AI service outages and highlighting cloud infrastructure vulnerabilities in geopolitics.',
  },
  {
    type: 'Book',
    href: 'https://aibooksummary.com/thinking-fast-and-slow-book-summary/',
    title: 'Thinking, Fast and Slow – Daniel Kahneman',
    desc: 'Explores System 1 (fast, intuitive) vs. System 2 (slow, deliberate) thinking and cognitive biases—relevant for understanding AI limitations in mimicking human reasoning.',
  },
  {
    type: 'Video',
    href: 'https://www.youtube.com/watch?v=E2yzX6Gch40&t=9s',
    title: 'Fei-Fei Li Helped Create AI, Now She Feels the Responsibility',
    desc: 'AI pioneer Fei-Fei Li discusses her ImageNet legacy and the push for human-centered AI safeguards amid ethical and societal risks.',
  },
  {
    type: 'Article',
    href: 'https://www.nextplatform.com/compute/2026/02/19/taalas-etches-ai-models-onto-transistors-to-rocket-boost-inference/4092140',
    title: 'Taalas Etches AI Model Weights onto Chips',
    desc: 'Startup Taalas hardwires LLM weights directly into silicon chips (no HBM needed), achieving 17k tokens/sec—advancing edge AI inference efficiency.',
  },
  {
    type: 'Video',
    href: 'https://www.youtube.com/watch?v=21EYKqUsPfg',
    title: 'Richard Sutton – Father of RL Thinks LLMs Are a Dead End',
    desc: 'Turing Award winner Richard Sutton argues LLMs violate the Bitter Lesson and predicts RL-based agents will ultimately supersede static trained models.',
  },
  {
    type: 'Article',
    href: 'https://www.vincentsitzmann.com/blog/bitter_lesson_of_cv/',
    title: 'The Flavor of the Bitter Lesson for Computer Vision – Vincent Sitzmann',
    desc: 'Extends the Bitter Lesson to CV, arguing that hand-crafted intermediate representations will be replaced by end-to-end perception-action pipelines.',
  },
  {
    type: 'Article',
    href: 'https://www.vincentsitzmann.com/blog/on_research/',
    title: 'Make It Work, Then Prove It Works – Vincent Sitzmann',
    desc: 'A two-mode research framework—rapid prototyping then rigorous ablation—to help AI researchers avoid wasting time on invalid hypotheses.',
  },
  {
    type: 'Article',
    href: 'https://www.vizuaranewsletter.com/p/vision-transformers?r=5b5pyd&utm_campaign=post&utm_medium=web',
    title: 'Vision Transformers – Vizuara AI Newsletter',
    desc: 'Technical walkthrough of ViT covering patch embeddings, self-attention vs. CNN receptive fields, and hands-on fine-tuning on the Oxford-IIIT Pet dataset.',
  },
  {
    type: 'Paper',
    href: 'https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2025.1697169/full',
    title: 'MechRAG: A Multimodal LLM for Mechanical Engineering',
    desc: 'Integrates CAD/CAE digital assets into a conversational interface, letting engineers query complex numerical data using natural language.',
  },
  {
    type: 'Paper',
    href: 'https://arxiv.org/html/2508.04714v2',
    title: 'Prescriptive Agents Based on RAG for Automated Maintenance',
    desc: 'A RAG-powered agentic system that retrieves technical documentation to generate prescriptive maintenance action plans for industrial equipment.',
  },
  {
    type: 'Paper',
    href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5172919',
    title: 'ChatCivic: A Domain-Specific LLM for Design Code Interpretation',
    desc: 'A RAG-enhanced LLM enabling engineers to query complex civil engineering design codes in natural language with high accuracy.',
  },
  {
    type: 'Paper',
    href: 'https://ieeexplore.ieee.org/document/10762118',
    title: 'Automated Smart City Planning through Personalized LLM with RAG',
    desc: 'Combines personalized LLMs with RAG to automate urban planning, generating infrastructure proposals aligned with city-specific regulations.',
  },
  {
    type: 'Paper',
    href: 'https://arxiv.org/pdf/2409.00494',
    title: 'GenAI-Powered Multi-Agent Paradigm for Smart Urban Mobility',
    desc: 'Proposes a multi-agent LLM and RAG architecture for intelligent transportation, covering traffic management, routing, and public transit coordination.',
  },
  {
    type: 'Paper',
    href: 'https://www.sciencedirect.com/science/article/abs/pii/S1474034625000515?via%3Dihub',
    title: 'RAG4CM: RAG-Driven Information Retrieval in Construction Management',
    desc: 'Parses project documents into hierarchical structures with user preference learning to bridge high-level queries and granular construction documentation.',
  },
  {
    type: 'Paper',
    href: 'https://www.mdpi.com/2079-9292/14/16/3314',
    title: 'A RAG Method for QA on Airworthiness Regulations',
    desc: 'A two-stage semantic retrieval and cross-encoder re-ranking pipeline for intelligent QA support in civil aviation airworthiness certification.',
  },
  {
    type: 'Article',
    href: 'https://developer.ibm.com/articles/agentic-rag-pipeline/',
    title: 'Building an Agentic RAG Pipeline – IBM Developer',
    desc: 'IBM demonstrates a multi-step agentic RAG pipeline for enterprise power supply discovery, showcasing practical deployment in industrial settings.',
  },
  {
    type: 'Paper',
    href: 'https://arxiv.org/html/2508.12682v1',
    title: 'GridCodex: A RAG-Driven AI Framework for Power Grid Code Reasoning',
    desc: 'Applies RAG to automate reasoning over power grid codes and compliance standards for real-time engineering support.',
  },
  {
    type: 'Paper',
    href: 'https://www.sciencedirect.com/science/article/pii/S147403462400658X',
    title: 'An Advanced RAG System for Manufacturing Quality Control',
    desc: 'Deploys RAG in smart manufacturing to retrieve defect records and generate LLM-driven root cause analyses on the production floor.',
  },
  {
    type: 'Paper',
    href: 'https://www.mdpi.com/2076-3417/14/20/9318',
    title: 'Evaluating RAG Models for Financial Report QA',
    desc: 'Uses MedRAG and KG-RAG to ground LLM responses in biomedical knowledge graphs, reducing hallucinations in clinical QA applications.',
  },
];

export default function Readings() {
  const [reqOpen, setReqOpen] = useState(false);
  const [furtherOpen, setFurtherOpen] = useState(false);

  return (
    <div className="text-slate-800 antialiased min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">


        <div className="space-y-4">

          <AccordionSection
            title="Required Readings"
            open={reqOpen}
            onToggle={() => setReqOpen(!reqOpen)}
          >
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 text-slate-500 text-sm">
              <span>🕐</span> Coming soon
            </div>
          </AccordionSection>

          <AccordionSection
            title="Further Readings"
            badge="Explore More"
            open={furtherOpen}
            onToggle={() => setFurtherOpen(!furtherOpen)}
          >
            <ul className="space-y-5 text-slate-700">
              {furtherReadings.map((item, i) => {
                const colorClass = typeColors[item.type] ?? 'bg-slate-100 text-slate-700 border-slate-200';
                return (
                  <li key={i} className="flex gap-4 items-start border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <span className={`mt-0.5 flex-shrink-0 text-xs font-semibold px-2 py-1 rounded border ${colorClass}`}>
                      {item.type}
                    </span>
                    <div>
                      <a
                        href={item.href}
                        className="font-medium text-slate-900 hover:text-purple-600 underline underline-offset-2 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>
                      <p className="mt-1 text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </AccordionSection>

        </div>
      </div>
    </div>
  );
}
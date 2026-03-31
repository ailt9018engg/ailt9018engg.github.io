import React from 'react';

export default function Readings() {
  return (
    <div className="text-slate-800 antialiased min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-4">Readings</h1>
        <p className="mb-6 text-slate-600">Course readings for AILT9018.</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Required Readings</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>(required reading 1)</li>
              <li>(required reading 2)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Further Readings (for You to Explore More)</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                <strong>Paper:</strong> <a href="https://arxiv.org/pdf/1706.03762" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Attention Is All You Need</a><br />
                <span className="text-slate-600">Introduces the Transformer architecture, foundational for understanding RAG, Agentic AI, and modern LLMs covered in the course.</span>
              </li>
              <li>
                <strong>Video:</strong> <a href="https://www.youtube.com/watch?v=eMlx5fFNoYc" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">3Blue1Brown – "Attention in transformers, visually explained"</a><br />
                <span className="text-slate-600">Intuitive visual explanation of transformer architecture.</span>
              </li>
              <li>
                <strong>Video:</strong> <a href="https://www.youtube.com/watch?v=LPZh9BOjkQs" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">3Blue1Brown – "But what is a GPT? Visual intro to transformers"</a><br />
                <span className="text-slate-600">Intuitive visual explanation of how large language models work.</span>
              </li>
              <li>
                <strong>Paper:</strong> <a href="https://arxiv.org/pdf/1506.02640" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">You Only Look Once: Unified, Real-Time Object Detection</a><br />
                <span className="text-slate-600">Introduces the original YOLO algorithm.</span>
              </li>
              <li>
                <strong>Video:</strong> <a href="https://www.youtube.com/watch?v=Cgxsv1riJhI" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">How computers learn to recognize objects instantly (by Joseph Redmon in TED)</a><br />
                <span className="text-slate-600">Joseph, one of the creators of YOLO, introduced his research.</span>
              </li>
              <li>
                <strong>Paper:</strong> <a href="https://www.sciencedirect.com/science/article/abs/pii/S0926580525005643" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Real-time detection of highway tunnel lining cracks using YOLOv8-DTD with an android application</a><br />
                <span className="text-slate-600">Published in Automation in Construction (2025). Based on a dataset from 141 highway tunnels in Shaanxi, China, this study deploys YOLOv8 on Android phones for real-time crack detection.</span>
              </li>
              <li>
                <strong>Video:</strong> <a href="https://www.youtube.com/watch?v=vFGxM2KLs10" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">YOLOv7 Segmentation Concrete Crack Detection step-by-step Tutorial</a><br />
                <span className="text-slate-600">A practical tutorial demonstrating how to use YOLO for concrete crack detection in Google Colab.</span>
              </li>
              <li>
                <strong>Article:</strong> <a href="https://www.reuters.com/world/middle-east/amazon-cloud-unit-flags-issues-bahrain-uae-data-centers-amid-iran-strikes-2026-03-02/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">AWS Data Centers Hit by Drone Strikes</a><br />
                <span className="text-slate-600">Drone strikes damaged AWS facilities in UAE/Bahrain, causing AI service outages and highlighting cloud infrastructure vulnerabilities in geopolitics.</span>
              </li>
              <li>
                <strong>Book:</strong> <a href="https://aibooksummary.com/thinking-fast-and-slow-book-summary/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Thinking, Fast and Slow – Daniel Kahneman</a><br />
                <span className="text-slate-600">Explores System 1 (fast, intuitive) vs. System 2 (slow, deliberate) thinking and cognitive biases—relevant for understanding AI limitations in mimicking human reasoning.</span>
              </li>
              <li>
                <strong>Video:</strong> <a href="https://www.youtube.com/watch?v=E2yzX6Gch40&t=9s" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Fei-Fei Li Helped Create AI, Now She Feels the Responsibility</a><br />
                <span className="text-slate-600">AI pioneer Fei-Fei Li discusses her ImageNet legacy and the push for human-centered AI safeguards amid ethical and societal risks.</span>
              </li>
              <li>
                <strong>Article:</strong> <a href="https://www.nextplatform.com/compute/2026/02/19/taalas-etches-ai-models-onto-transistors-to-rocket-boost-inference/4092140" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Taalas Etches AI Model Weights onto Chips</a><br />
                <span className="text-slate-600">Startup Taalas hardwires LLM weights directly into silicon chips (no HBM needed), achieving 17k tokens/sec—advancing edge AI inference efficiency.</span>
              </li>
              <li>
                <strong>Video:</strong> <a href="https://www.youtube.com/watch?v=21EYKqUsPfg" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Richard Sutton – Father of RL Thinks LLMs Are a Dead End</a><br />
                <span className="text-slate-600">Turing Award winner Richard Sutton argues LLMs violate the Bitter Lesson and predicts RL-based agents will ultimately supersede static trained models.</span>
              </li>
              <li>
                <strong>Article:</strong> <a href="https://www.vincentsitzmann.com/blog/bitter_lesson_of_cv/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">The Flavor of the Bitter Lesson for Computer Vision – Vincent Sitzmann</a><br />
                <span className="text-slate-600">Extends the Bitter Lesson to CV, arguing that hand-crafted intermediate representations will be replaced by end-to-end perception-action pipelines.</span>
              </li>
              <li>
                <strong>Article:</strong> <a href="https://www.vincentsitzmann.com/blog/on_research/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Make It Work, Then Prove It Works – Vincent Sitzmann</a><br />
                <span className="text-slate-600">A two-mode research framework—rapid prototyping then rigorous ablation—to help AI researchers avoid wasting time on invalid hypotheses.</span>
              </li>
              <li>
                <strong>Article:</strong> <a href="https://www.vizuaranewsletter.com/p/vision-transformers?r=5b5pyd&utm_campaign=post&utm_medium=web" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Vision Transformers – Vizuara AI Newsletter</a><br />
                <span className="text-slate-600">Technical walkthrough of ViT covering patch embeddings, self-attention vs. CNN receptive fields, and hands-on fine-tuning on the Oxford-IIIT Pet dataset.</span>
              </li>
              <li>
                <strong>Paper:</strong> <a href="https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2025.1697169/full" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">MechRAG: A Multimodal LLM for Mechanical Engineering</a><br />
                <span className="text-slate-600">Integrates CAD/CAE digital assets into a conversational interface, letting engineers query complex numerical data using natural language.</span>
              </li>
              <li>
                <strong>Paper:</strong> <a href="https://arxiv.org/html/2508.04714v2" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Prescriptive Agents Based on RAG for Automated Maintenance</a><br />
                <span className="text-slate-600">A RAG-powered agentic system that retrieves technical documentation to generate prescriptive maintenance action plans for industrial equipment.</span>
              </li>
              <li>
                <strong>Paper:</strong> <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5172919" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">ChatCivic: A Domain-Specific LLM for Design Code Interpretation</a><br />
                <span className="text-slate-600">A RAG-enhanced LLM enabling engineers to query complex civil engineering design codes in natural language with high accuracy.</span>
              </li>
              <li>
                <strong>Paper:</strong> <a href="https://ieeexplore.ieee.org/document/10762118" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Automated Smart City Planning through Personalized LLM with RAG</a><br />
                <span className="text-slate-600">Combines personalized LLMs with RAG to automate urban planning, generating infrastructure proposals aligned with city-specific regulations.</span>
              </li>
              <li>
                <strong>Paper:</strong> <a href="https://arxiv.org/pdf/2409.00494" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">GenAI-Powered Multi-Agent Paradigm for Smart Urban Mobility</a><br />
                <span className="text-slate-600">Proposes a multi-agent LLM and RAG architecture for intelligent transportation, covering traffic management, routing, and public transit coordination.</span>
              </li>
              <li>
                <strong>Paper:</strong> <a href="https://www.sciencedirect.com/science/article/abs/pii/S1474034625000515?via%3Dihub" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">RAG4CM: RAG-Driven Information Retrieval in Construction Management</a><br />
                <span className="text-slate-600">Parses project documents into hierarchical structures with user preference learning to bridge high-level queries and granular construction documentation.</span>
              </li>
              <li>
                <strong>Paper:</strong> <a href="https://www.mdpi.com/2079-9292/14/16/3314" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">A RAG Method for QA on Airworthiness Regulations</a><br />
                <span className="text-slate-600">A two-stage semantic retrieval and cross-encoder re-ranking pipeline for intelligent QA support in civil aviation airworthiness certification.</span>
              </li>
              <li>
                <strong>Article:</strong> <a href="https://developer.ibm.com/articles/agentic-rag-pipeline/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Building an Agentic RAG Pipeline – IBM Developer</a><br />
                <span className="text-slate-600">IBM demonstrates a multi-step agentic RAG pipeline for enterprise power supply discovery, showcasing practical deployment in industrial settings.</span>
              </li>
              <li>
                <strong>Paper:</strong> <a href="https://arxiv.org/html/2508.12682v1" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">GridCodex: A RAG-Driven AI Framework for Power Grid Code Reasoning</a><br />
                <span className="text-slate-600">Applies RAG to automate reasoning over power grid codes and compliance standards for real-time engineering support.</span>
              </li>
              <li>
                <strong>Paper:</strong> <a href="https://www.sciencedirect.com/science/article/pii/S147403462400658X" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">An Advanced RAG System for Manufacturing Quality Control</a><br />
                <span className="text-slate-600">Deploys RAG in smart manufacturing to retrieve defect records and generate LLM-driven root cause analyses on the production floor.</span>
              </li>
              <li>
                <strong>Paper:</strong> <a href="https://www.mdpi.com/2076-3417/14/20/9318" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Evaluating RAG Models for Financial Report QA</a><br />
                <span className="text-slate-600">Uses MedRAG and KG-RAG to ground LLM responses in biomedical knowledge graphs, reducing hallucinations in clinical QA applications.</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

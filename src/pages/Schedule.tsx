import React, { useEffect, useRef, useState } from 'react';
import { courseData } from '../data.ts';
import { Section } from '../components/Section.tsx';

const subclassMap: Record<string, number[]> = {
  A1: [0, 2],
  A2: [0, 2],
  A3: [0, 2],
  A4: [0, 2],
  B1: [1, 2],
  B2: [1, 2],
  B3: [1, 2],
  B4: [1, 2],
};

export default function Schedule() {
  const [selectedSub, setSelectedSub] = useState<string | null>(null);
  const [viewSchedule, setViewSchedule] = useState(false);
  const scheduleRef = useRef<HTMLDivElement | null>(null);
  const moduleContentRef = useRef<HTMLDivElement | null>(null);

  function parseHash() {
    const raw = window.location.hash.replace(/^#/, '');
    const [path, q] = raw.split('?');
    const params = new URLSearchParams(q || '');
    const sub = params.get('sub');
    const view = params.get('view');
    setSelectedSub(sub || null);
    setViewSchedule(view === 'schedule');
    return { sub, view };
  }

  useEffect(() => {
    // parse on mount
    const parsed = parseHash();
    if (parsed.view === 'schedule' && scheduleRef.current) {
      // small delay to ensure layout
      setTimeout(() => scheduleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }
    if (parsed.view === 'module-content' && moduleContentRef.current) {
      setTimeout(() => moduleContentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }

    const onHash = () => {
      const p = parseHash();
      if (p.view === 'schedule' && scheduleRef.current) {
        setTimeout(() => scheduleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
      }
      if (p.view === 'module-content' && moduleContentRef.current) {
        setTimeout(() => moduleContentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const modulesToShow = selectedSub && subclassMap[selectedSub]
    ? subclassMap[selectedSub].map((i) => courseData.modules[i])
    : courseData.modules;

  return (
    <div className="text-slate-800 antialiased min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-12">

        {selectedSub && (
          <div className="pt-12 mb-6 flex flex-col items-start gap-2">
            <button
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors duration-200"
              onClick={() => { window.location.hash = 'subclass-module-details'; }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              View all subclasses
            </button>
            <button
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors duration-200"
              onClick={() => {
                window.location.hash = '/';
                setTimeout(() => {
                  const el = document.getElementById('subclass-selection');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 120);
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Table
            </button>
          </div>
        )}

        <Section id="module-content" title="Module Content & Topics" headingId="module-content-topics" className="border-t-0">
          <div ref={moduleContentRef} className="module-cards">
            {modulesToShow.map((mod, idx) => {
              const colorClass = mod.title?.startsWith('Module 1') ? 'm1' : mod.title?.startsWith('Module 2') ? 'm2' : mod.title?.startsWith('Module 3') ? 'm3' : `m${idx + 1}`;
              return (
                <div key={mod.title || idx} className={`module-card ${colorClass}`}>
                  <div className="module-accent" aria-hidden="true" />
                  <div className="module-content">
                    <h3 className="module-title">{mod.title}</h3>
                    <p className="module-desc">{mod.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {!selectedSub && (
            <div className="mt-8 p-6 bg-slate-100 rounded-lg border border-slate-200 module-summary">
              <h3 className="font-bold text-base text-slate-800 mb-2">Summary</h3>
              <div className="summary-body" dangerouslySetInnerHTML={{ __html: courseData.summary }} />
            </div>
          )}

        </Section>

        <Section id="tutorial-allocation" title="Tutorial Allocation">
          <div className="overflow-x-auto bg-slate-50 p-4 rounded-lg border border-slate-200">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="text-left text-slate-700">
                  <th className="px-4 py-2">Subclass (Semester 1)</th>
                  <th className="px-4 py-2">Subclass (Semester 2)</th>
                  <th className="px-4 py-2">Modules</th>
                  <th className="px-4 py-2">Tutorial session</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3">A1</td>
                  <td className="px-4 py-3">C1</td>
                  <td className="px-4 py-3">1+3</td>
                  <td className="px-4 py-3">To be confirmed</td>
                </tr>
                <tr className="border-t bg-white">
                  <td className="px-4 py-3">A2</td>
                  <td className="px-4 py-3">C2</td>
                  <td className="px-4 py-3">1+3</td>
                  <td className="px-4 py-3">To be confirmed</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">A3</td>
                  <td className="px-4 py-3">C3</td>
                  <td className="px-4 py-3">1+3</td>
                  <td className="px-4 py-3">To be confirmed</td>
                </tr>
                <tr className="border-t bg-white">
                  <td className="px-4 py-3">A4</td>
                  <td className="px-4 py-3">C4</td>
                  <td className="px-4 py-3">1+3</td>
                  <td className="px-4 py-3">To be confirmed</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">B1</td>
                  <td className="px-4 py-3">D1</td>
                  <td className="px-4 py-3">2+3</td>
                  <td className="px-4 py-3">To be confirmed</td>
                </tr>
                <tr className="border-t bg-white">
                  <td className="px-4 py-3">B2</td>
                  <td className="px-4 py-3">D2</td>
                  <td className="px-4 py-3">2+3</td>
                  <td className="px-4 py-3">To be confirmed</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">B3</td>
                  <td className="px-4 py-3">D3</td>
                  <td className="px-4 py-3">2+3</td>
                  <td className="px-4 py-3">To be confirmed</td>
                </tr>
                <tr className="border-t bg-white">
                  <td className="px-4 py-3">B4</td>
                  <td className="px-4 py-3">D4</td>
                  <td className="px-4 py-3">2+3</td>
                  <td className="px-4 py-3">To be confirmed</td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </Section>

        <Section id="schedule" title="Schedule">
          <p className="mb-6 text-slate-600">Course schedule and important dates are listed below.</p>
          <div ref={scheduleRef} className="overflow-x-auto bg-slate-50 p-4 rounded-lg border border-slate-200">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="text-left text-slate-700">
                  <th className="px-4 py-2 w-16">Week</th>
                  <th className="px-4 py-2 w-1/2">Lecture</th>
                  <th className="px-4 py-2 w-1/2">Tutorial</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-slate-100 border-t border-slate-200"><td colSpan="3" className="px-4 py-3 font-bold text-slate-900">Module 1: Deep Learning for Computer Vision</td></tr>
                <tr className="border-t bg-white"><td className="px-4 py-3 w-16">1</td><td className="px-4 py-3 w-1/2">Introduction to deep learning and computer vision</td><td className="px-4 py-3 w-1/2">Train your own YOLO model from scratch</td></tr>
                <tr className="border-t bg-white"><td className="px-4 py-3 w-16">2</td><td className="px-4 py-3 w-1/2">Convolutional neural networks and model optimization</td><td className="px-4 py-3 w-1/2">Evaluate and improve your model</td></tr>
                <tr className="border-t bg-white"><td className="px-4 py-3 w-16">3</td><td className="px-4 py-3 w-1/2">Computer vision for engineering applications</td><td className="px-4 py-3 w-1/2">Taster of state-of-the-art computer vision tools</td></tr>

                <tr className="bg-slate-100 border-t border-slate-200"><td colSpan="3" className="px-4 py-3 font-bold text-slate-900">Module 2: Fundamentals in NLP, LLM and RAG</td></tr>
                <tr className="border-t bg-white"><td className="px-4 py-3 w-16">4</td><td className="px-4 py-3 w-1/2">Fundamentals of NLP, LLM and RAG</td><td className="px-4 py-3 w-1/2">Introduction to LLM APIs and LangChain</td></tr>
                <tr className="border-t bg-white"><td className="px-4 py-3 w-16">5</td><td className="px-4 py-3 w-1/2">Inside the RAG pipeline: architecture, evaluation &amp; enhancement</td><td className="px-4 py-3 w-1/2">Build your own RAG chatbot</td></tr>
                <tr className="border-t bg-white"><td className="px-4 py-3 w-16">6</td><td className="px-4 py-3 w-1/2">Advanced topics on RAG and RAG applications in engineering</td><td className="px-4 py-3 w-1/2">Unlock the capability of VLM</td></tr>

                <tr className="bg-slate-100 border-t border-slate-200"><td colSpan="3" className="px-4 py-3 font-bold text-slate-900">Module 3: AI as Professional Assistant</td></tr>
                <tr className="border-t bg-white"><td className="px-4 py-3 w-16">7</td><td className="px-4 py-3 w-1/2">Reading and analysing technical documents with AI assistance</td><td className="px-4 py-3 w-1/2">Technical reading with AI</td></tr>
                <tr className="border-t bg-white"><td className="px-4 py-3 w-16">8</td><td className="px-4 py-3 w-1/2">Building your own prototype with AI tools</td><td className="px-4 py-3 w-1/2">Vibe coding</td></tr>
                <tr className="border-t bg-white"><td className="px-4 py-3 w-16">9</td><td className="px-4 py-3 w-1/2">Modern engineers in the world of AI</td><td className="px-4 py-3 w-1/2">Project preparation</td></tr>
              </tbody>
            </table>
          </div>
        </Section>


      </div>
    </div>
  );
}

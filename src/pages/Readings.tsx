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
            <h2 className="text-2xl font-semibold mb-3">Suggested Readings</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                <strong>Paper:</strong> <a href="https://arxiv.org/pdf/1706.03762" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Attention Is All You Need</a><br />
                <span className="text-slate-600">Introduces the Transformer architecture, foundational for understanding RAG, Agentic AI, and modern LLMs covered in the course.</span>
              </li>
              <li>
                <strong>Video:</strong> <a href="https://www.youtube.com/watch?v=eMlx5fFNoYc" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">3Blue1Brown video "Attention in transformers - visually explained"</a><br />
                <span className="text-slate-600">Intuitive visual explanation to explain transformer architecture.</span>
              </li>
              <li>
                <strong>Video:</strong> <a href="https://www.youtube.com/watch?v=LPZh9BOjkQs" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">3Blue1Brown video "Attention in transformers - visually explained"</a><br />
                <span className="text-slate-600">Intuitive visual explanation to explain large language models.</span>
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
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function Schedule() {
  return (
    <div className="text-slate-800 antialiased min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-4">Schedule</h1>
        <p className="mb-6 text-slate-600">Course schedule and important dates are listed below.</p>

        <div className="overflow-x-auto bg-slate-50 p-4 rounded-lg border border-slate-200">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left text-slate-700">
                <th className="px-4 py-2 w-16">Week</th>
                <th className="px-4 py-2 w-1/2">Lecture</th>
                <th className="px-4 py-2 w-1/2">Tutorial</th>
              </tr>
            </thead>
            <tbody>
              {/* Module 1 Header */}
              <tr className="bg-slate-100 border-t border-slate-200">
                <td colSpan="3" className="px-4 py-3 font-bold text-slate-900">
                  Module 1: Reading and writing with AI assistance
                </td>
              </tr>
              {/* Week 1 */}
              <tr className="border-t bg-white">
                <td className="px-4 py-3 w-16">1</td>
                <td className="px-4 py-3 w-1/2">Introduction to AI for Technical Reading</td>
                <td className="px-4 py-3 w-1/2"> AI tools in assisted readings</td>
              </tr>
              {/* Week 2 */}
              <tr className="border-t bg-white">
                <td className="px-4 py-3 w-16">2</td>
                <td className="px-4 py-3 w-1/2">Prompt Engineering Fundamentals</td>
                <td className="px-4 py-3 w-1/2">Compare and analysis of AI tools</td>
              </tr>
              {/* Week 3 */}
              <tr className="border-t bg-white">
                <td className="px-4 py-3 w-16">3</td>
                <td className="px-4 py-3 w-1/2">Knowledge Management and Domain-Specific Applications</td>
                <td className="px-4 py-3 w-1/2">Project preparation</td>
              </tr>

              {/* Module 2 Header */}
              <tr className="bg-slate-100 border-t border-slate-200">
                <td colSpan="3" className="px-4 py-3 font-bold text-slate-900">
                  Module 2: Vibe coding for robotics
                </td>
              </tr>
              {/* Week 4 */}
              <tr className="border-t bg-white">
                <td className="px-4 py-3 w-16">4</td>
                <td className="px-4 py-3 w-1/2">TBC</td>
                <td className="px-4 py-3 w-1/2">Project preparation</td>
              </tr>
              {/* Week 5 */}
              <tr className="border-t bg-white">
                <td className="px-4 py-3 w-16">5</td>
                <td className="px-4 py-3 w-1/2">TBC</td>
                <td className="px-4 py-3 w-1/2">TBC</td>
              </tr>
              {/* Week 6 */}
              <tr className="border-t bg-white">
                <td className="px-4 py-3 w-16">6</td>
                <td className="px-4 py-3 w-1/2">TBC</td>
                <td className="px-4 py-3 w-1/2">TBC</td>
              </tr>

              {/* Module 3 Header */}
              <tr className="bg-slate-100 border-t border-slate-200">
                <td colSpan="3" className="px-4 py-3 font-bold text-slate-900">
                  Module 3: Deep learning for computer vision
                </td>
              </tr>
              {/* Week 7 */}
              <tr className="border-t bg-white">
                <td className="px-4 py-3 w-16">7</td>
                <td className="px-4 py-3 w-1/2">TBC</td>
                <td className="px-4 py-3 w-1/2">TBC</td>
              </tr>
              {/* Week 8 */}
              <tr className="border-t bg-white">
                <td className="px-4 py-3 w-16">8</td>
                <td className="px-4 py-3 w-1/2"> TBC</td>
                <td className="px-4 py-3 w-1/2">TBC</td>
              </tr>
              {/* Week 9 */}
              <tr className="border-t bg-white">
                <td className="px-4 py-3 w-16">9</td>
                <td className="px-4 py-3 w-1/2">TBC</td>
                <td className="px-4 py-3 w-1/2">TBC</td>
              </tr>

              {/* Module 4 Header */}
              <tr className="bg-slate-100 border-t border-slate-200">
                <td colSpan="3" className="px-4 py-3 font-bold text-slate-900">
                  Module 4: Fundamentals in NLP, LLM and RAG
                </td>
              </tr>
              {/* Week 10 */}
              <tr className="border-t bg-white">
                <td className="px-4 py-3 w-16">10</td>
                <td className="px-4 py-3 w-1/2">Fundamentals of NLP, LLM and RAG</td>
                <td className="px-4 py-3 w-1/2">Introduction to LLM APIs and LangChain</td>
              </tr>
              {/* Week 11 */}
              <tr className="border-t bg-white">
                <td className="px-4 py-3 w-16">11</td>
                <td className="px-4 py-3 w-1/2">Inside the RAG Pipeline: Architecture, Evaluation & Enhancement</td>
                <td className="px-4 py-3 w-1/2">Build your own RAG Chatbot</td>
              </tr>
              {/* Week 12 */}
              <tr className="border-t bg-white">
                <td className="px-4 py-3 w-16">12</td>
                <td className="px-4 py-3 w-1/2">Advanced Topics on RAG and RAG Applications in Engineering</td>
                <td className="px-4 py-3 w-1/2">Unlock the capability of VLM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

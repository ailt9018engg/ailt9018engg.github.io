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
              <li>(suggested reading 1)</li>
              <li>(suggested reading 2)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

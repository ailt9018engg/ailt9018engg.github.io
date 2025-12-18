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
                <th className="px-4 py-2">Week</th>
                <th className="px-4 py-2">Topic</th>
                <th className="px-4 py-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3">1</td>
                <td className="px-4 py-3">Module 1</td>
                <td className="px-4 py-3">Module 1 Tutorial</td>
              </tr>
              <tr className="border-t bg-white">
                <td className="px-4 py-3">2</td>
                <td className="px-4 py-3">TBC</td>
                <td className="px-4 py-3">TBC</td>
              </tr>
              <tr className="border-t bg-white">
                <td className="px-4 py-3">3</td>
                <td className="px-4 py-3">TBC</td>
                <td className="px-4 py-3">TBC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { courseData } from '../data.ts';
import { LecturersAndTAs } from '../components/LecturersAndTAs.tsx';
import { Section } from '../components/Section.tsx';

export default function Contact() {
  return (
    <div className="text-slate-800 antialiased min-h-screen bg-white">
      <Section id="Contact" title="Contact">
        <p className="mb-6 text-slate-600">For course inquiries and administrative matters, please use the contacts below.</p>

        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h3 className="font-semibold text-lg">Course Coordinator</h3>
          <p className="text-slate-700">{courseData.coordinator.name}</p>
          <a className="text-purple-600 hover:underline" href={`mailto:${courseData.coordinator.email}`}>{courseData.coordinator.email}</a>

          <div className="mt-6">
            <h3 className="font-semibold text-lg">General Inquiries</h3>
            <a className="text-purple-600 hover:underline" href={`mailto:${courseData.inquiries}`}>{courseData.inquiries}</a>
          </div>
        </div>
      </Section>

      <LecturersAndTAs />

    </div>
  );
}

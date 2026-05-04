import React from 'react';
import { courseData } from '../data.ts';
import { Section } from '../components/Section.tsx';
import { UserIcon, TeacherIcon, CreditIcon, PrerequisiteIcon, CheckCircleIcon } from '../components/Icons.tsx';

export default function CourseDetails() {
  return (
    <div className="text-slate-800 antialiased min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">


        <Section id="objectives" title="Course Objectives & Learning Outcomes">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">This course aims to:</h3>
          <ul className="list-decimal list-inside space-y-2 mb-8">
            {courseData.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
          </ul>
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Course Learning Outcomes (CLOs)</h3>
          <p className="mb-4">By the end of this course, students will be able to:</p>
          <ul className="space-y-3">
            {courseData.clos.map((clo, i) => (
              <li key={i} className="bg-slate-100 p-4 rounded-lg border border-slate-200">{clo}</li>
            ))}
          </ul>
        </Section>

        <Section id="description" title="Course Description" className="border-t-0">
          <p>{courseData.description}</p>
        </Section>


        <Section id="message" title="Message to Students">
                    <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 border border-purple-100 rounded-xl p-6 md:p-8 shadow-md mb-8">
                        <ul className="space-y-4">
                            <li className="bg-white/60 p-4 rounded-lg flex items-start">
                                <PrerequisiteIcon className="flex-shrink-0 w-6 h-6 text-purple-600 mr-4 mt-1" />
                                <p className="text-lg md:text-xl text-slate-800 m-0">AI is moving fast, and this course is built to keep up.</p>
                            </li>
                            <li className="bg-white/60 p-4 rounded-lg flex items-start">
                                <CreditIcon className="flex-shrink-0 w-6 h-6 text-purple-600 mr-4 mt-1" />
                                <p className="text-lg md:text-xl text-slate-800 m-0">You will work with current AI tools, emerging technologies, and real engineering applications.</p>
                            </li>
                            <li className="bg-white/60 p-4 rounded-lg flex items-start">
                                <TeacherIcon className="flex-shrink-0 w-6 h-6 text-purple-600 mr-4 mt-1" />
                                <p className="text-lg md:text-xl text-slate-800 m-0">This is a <strong>hands-on, project-driven</strong> course where you learn by building, testing, and experimenting.</p>
                            </li>
                            <li className="bg-white/60 p-4 rounded-lg flex items-start">
                                <UserIcon className="flex-shrink-0 w-6 h-6 text-purple-600 mr-4 mt-1" />
                                <p className="text-lg md:text-xl text-slate-800 m-0">From day one, you will use AI to <strong>tackle real engineering tasks</strong> and explore solutions in your own field.</p>
                            </li>
                            <li className="bg-white/60 p-4 rounded-lg flex items-start">
                                <CheckCircleIcon className="flex-shrink-0 w-6 h-6 text-purple-600 mr-4 mt-1" />
                                <p className="text-lg md:text-xl text-slate-800 m-0">By the end, you will not only understand AI. You will know how to <strong>apply it with confidence.</strong></p>
                            </li>
                        </ul>
                    </div>
                </Section>

      </div>
    </div>
  );
}

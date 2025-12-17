
import React from 'react';
import { courseData } from './data.ts';
import { Section } from './components/Section.tsx';
import { ModulesAccordion } from './components/ModulesAccordion.tsx';
import { Lecturers } from './components/Lecturers.tsx';
import { UserIcon, MailIcon, CreditIcon, PrerequisiteIcon, QuotaIcon, GradingIcon, CheckCircleIcon } from './components/Icons.tsx';

const Hero = () => (
  <div className="relative h-screen flex items-center justify-center text-center bg-white overflow-hidden">
    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
    <div className="relative z-10 px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-transparent bg-clip-text">
        {courseData.code}
      </h1>
      <p className="max-w-4xl mx-auto text-2xl md:text-3xl font-semibold text-slate-700">
        {courseData.title}
      </p>
    </div>
  </div>
);

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="bg-slate-100/50 p-6 rounded-lg flex items-start space-x-4 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-purple-500/10">
        <div className="flex-shrink-0 w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center text-purple-600">
            {icon}
        </div>
        <div>
            <h3 className="font-semibold text-slate-800">{title}</h3>
            <div className="text-slate-600">{children}</div>
        </div>
    </div>
);

const RubricLevel = ({ title, content, color, items }: { title: string, content?: string, items?: string[], color: string }) => (
    <div className={`border-l-4 p-6 rounded-r-lg bg-slate-100/80 ${color}`}>
        <h4 className="font-bold text-xl mb-2 text-slate-900">{title}</h4>
        {content && <p className="text-slate-700">{content}</p>}
        {items && (
            <ul className="space-y-3 mt-4">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-green-500 mr-3 mt-1" />
                        <span className="text-slate-700">{item}</span>
                    </li>
                ))}
            </ul>
        )}
    </div>
);

export default function App() {
  return (
    <div className="text-slate-800 antialiased">
      <Hero />
      <main className="-mt-32 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="bg-white/60 backdrop-blur-lg border border-slate-200/70 rounded-xl shadow-2xl shadow-slate-300/50 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <InfoCard icon={<UserIcon />} title="Course Coordinator">
                        {courseData.coordinator.name}
                    </InfoCard>
                    <InfoCard icon={<MailIcon />} title="Contact">
                        <a href={`mailto:${courseData.coordinator.email}`} className="hover:text-purple-600 transition-colors">{courseData.coordinator.email}</a><br/>
                        <a href={`mailto:${courseData.inquiries}`} className="hover:text-purple-600 transition-colors">{courseData.inquiries} (Inquiries)</a>
                    </InfoCard>
                    <InfoCard icon={<CreditIcon />} title="Credits">{courseData.credits}</InfoCard>
                    <InfoCard icon={<PrerequisiteIcon />} title="Pre-requisite">{courseData.prerequisite}</InfoCard>
                    <InfoCard icon={<QuotaIcon />} title="Quota">{courseData.quota} students</InfoCard>
                    <InfoCard icon={<GradingIcon />} title="Grading">
                        {courseData.grading} ({courseData.assessment})
                    </InfoCard>
                </div>
            </div>
        </div>

        <Section id="description" title="Course Description">
          <p>{courseData.description}</p>
        </Section>

        <Section id="objectives" title="Course Objectives & Outcomes">
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

        <Lecturers />

        <Section id="plos" title="Program Learning Outcomes (PLOs)">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courseData.plos.map((plo, i) => (
                    <li key={i} className="bg-slate-100 p-4 rounded-lg flex items-start border border-slate-200">
                        <span className="font-bold text-purple-600 mr-3">{`PLO${i+1}:`}</span>
                        <span>{plo.split(': ')[1]}</span>
                    </li>
                ))}
            </ul>
        </Section>

        <Section id="details" title="Course Details">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">Learning Hours</h3>
                    <ul className="space-y-2">
                        {Object.entries(courseData.learningHours).map(([key, value]) => (
                            <li key={key} className="flex justify-between border-b border-slate-200 py-2">
                                <span className="capitalize">{key}</span>
                                <span className="font-medium text-slate-800">{value} hours</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">Assessment Methods</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold text-xl text-slate-800">Participation ({courseData.assessmentMethods.participation.weight})</h4>
                            <ul className="list-disc list-inside text-slate-600">
                                {courseData.assessmentMethods.participation.details.map((detail, i) => <li key={i}>{detail}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-xl text-slate-800">Individual Project ({courseData.assessmentMethods.individualProject.weight})</h4>
                            <p className="text-slate-600">{courseData.assessmentMethods.individualProject.details}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>

        <Section id="modules" title="Course Content & Topics">
            <ModulesAccordion />
            <div className="mt-8 p-6 bg-slate-100 rounded-lg border border-slate-200">
                <h3 className="font-bold text-xl text-slate-800 mb-2">Summary</h3>
                {courseData.summary.split('\n\n').map((paragraph, i) => <p key={i} className="mb-4 last:mb-0">{paragraph}</p>)}
            </div>
        </Section>

        <Section id="rubrics" title="Assessment Rubrics">
            <div className="space-y-12">
                <div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">{courseData.rubrics.participation.title}</h3>
                    <p className="mb-6">{courseData.rubrics.participation.description}</p>
                    <div className="space-y-6">
                        <RubricLevel title="Distinction" content={courseData.rubrics.participation.levels.distinction} color="border-green-500" />
                        <RubricLevel title="Pass" content={courseData.rubrics.participation.levels.pass} color="border-blue-500" />
                        <RubricLevel title="Fail" content={courseData.rubrics.participation.levels.fail} color="border-red-500" />
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">{courseData.rubrics.project.title}</h3>
                    <p className="mb-4">{courseData.rubrics.project.description}</p>
                    <ul className="list-decimal list-inside space-y-2 mb-6">
                        {courseData.rubrics.project.components.map((comp, i) => <li key={i}>{comp}</li>)}
                    </ul>
                    <div className="space-y-6">
                        <RubricLevel title="Distinction" items={courseData.rubrics.project.levels.distinction} color="border-green-500" />
                        <RubricLevel title="Pass" items={courseData.rubrics.project.levels.pass} color="border-blue-500" />
                        <RubricLevel title="Fail" items={courseData.rubrics.project.levels.fail} color="border-red-500" />
                    </div>
                </div>
            </div>
        </Section>
      </main>
      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} AILT9018 Course Team</p>
            <a href={`https://${courseData.courseWebsite}`} target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                {courseData.courseWebsite}
            </a>
        </div>
      </footer>
    </div>
  );
}

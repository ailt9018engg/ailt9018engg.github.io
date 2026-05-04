
import React from 'react';
import { courseData } from './data.ts';
import { Section } from './components/Section.tsx';

import { UserIcon, MailIcon, TeacherIcon, CreditIcon, PrerequisiteIcon, QuotaIcon, GradingIcon, CheckCircleIcon } from './components/Icons.tsx';
import './App.css';

const Hero = () => (
    <div className="relative h-screen flex items-center justify-center text-center bg-white overflow-hidden">
        <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            muted
            loop
            playsInline
            src="/videos/background.mp4"
        />
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
        <div className="relative z-10 px-4">
            <div className="inline-block bg-white/60 backdrop-blur-sm px-6 py-4 rounded-lg">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                    {courseData.code}
                </h1>
                <p className="max-w-4xl mx-auto text-2xl md:text-3xl font-semibold text-slate-700">
                    {courseData.title}
                </p>
            </div>
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
                    <InfoCard icon={<TeacherIcon />} title="Instructors">
                        {courseData.instructors.map((instructor) => (
                            <div key={instructor}>{instructor}</div>
                        ))}
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

        <Section id="eligibility" title="About AILT9018">
            <p>AILT9018 is a mandatory 3-credit AI literacy course for Year 2 Engineering undergraduates at HKU. If you are enrolled in one of the following programmes, you are required to take this course:</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
                <li>BEng in Civil Engineering [BEng(CivE)]</li>
                <li>BEng in Computer Engineering / Electrical Engineering / Electronic Engineering [BEng(CompE) / BEng(EE) / BEng(ElecE)]</li>
                <li>BEng in Data and Systems Engineering [BEng(DASE)]</li>
                <li>BEng in Mechanical Engineering [BEng(MechE)]</li>
            </ul>
            <div className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 mt-4 text-blue-800 text-sm font-medium">
                <strong>Prerequisite:</strong> AILT1001 (AI Literacy I) must be completed before enrolling in AILT9018.
            </div>
            <div className="mt-6" />
            <p className="mt-4">By the end of this course, you will be able to utilize modern AI tools, apply core AI technologies to real engineering problems, and evaluate their capabilities, limitations, and ethical implications.</p>
        </Section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
<div className="mt-10">
    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-10">
      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-transparent bg-clip-text">
        Subclass Selection
      </span>
    </h2>
    <div style={{ display: 'none' }} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm mb-6">
      <img
        src="/images/Subclass Selection Comic.png"
        alt="4-panel subclass selection comic"
        className="w-full h-auto max-h-[640px] object-contain"
        loading="lazy"
      />
    </div>
    <div className="overflow-x-auto mb-6">
      <table className="subclass-table">
        <thead>
          <tr>
            <th>Subclass</th>
            <th colSpan={2}>Modules to take</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="clickable-row" role="button" tabIndex={0} onClick={() => { window.location.hash = 'subclass-module-details?sub=A'; setTimeout(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, 50); }} onKeyDown={(e) => { if ((e as any).key === 'Enter') { window.location.hash = 'subclass-module-details?sub=A'; setTimeout(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, 50); } }}>
            <td>A</td>
            <td><span className="mod-badge badge-m1">Module 1: Deep Learning for Computer Vision</span></td>
            <td><span className="mod-badge badge-m3">Module 3: AI as Professional Assistant</span></td>
            <td><a href="#subclass-module-details?sub=A&view=schedule" className="details-link" onClick={(e) => e.stopPropagation()}>Schedule &amp; venue →</a></td>
          </tr>
          <tr className="clickable-row" role="button" tabIndex={0} onClick={() => { window.location.hash = 'subclass-module-details?sub=B'; setTimeout(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, 50); }} onKeyDown={(e) => { if ((e as any).key === 'Enter') { window.location.hash = 'subclass-module-details?sub=B'; setTimeout(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, 50); } }}>
            <td>B</td>
            <td><span className="mod-badge badge-m1">Module 1: Deep Learning for Computer Vision</span></td>
            <td><span className="mod-badge badge-m3">Module 3: AI as Professional Assistant</span></td>
            <td><a href="#subclass-module-details?sub=B&view=schedule" className="details-link" onClick={(e) => e.stopPropagation()}>Schedule &amp; venue →</a></td>
          </tr>
          <tr className="clickable-row" role="button" tabIndex={0} onClick={() => { window.location.hash = 'subclass-module-details?sub=C'; setTimeout(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, 50); }} onKeyDown={(e) => { if ((e as any).key === 'Enter') { window.location.hash = 'subclass-module-details?sub=C'; setTimeout(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, 50); } }}>
            <td>C</td>
            <td><span className="mod-badge badge-m1">Module 1: Deep Learning for Computer Vision</span></td>
            <td><span className="mod-badge badge-m3">Module 3: AI as Professional Assistant</span></td>
            <td><a href="#subclass-module-details?sub=C&view=schedule" className="details-link" onClick={(e) => e.stopPropagation()}>Schedule &amp; venue →</a></td>
          </tr>
          <tr className="clickable-row" role="button" tabIndex={0} onClick={() => { window.location.hash = 'subclass-module-details?sub=D'; setTimeout(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, 50); }} onKeyDown={(e) => { if ((e as any).key === 'Enter') { window.location.hash = 'subclass-module-details?sub=D'; setTimeout(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, 50); } }}>
            <td>D</td>
            <td><span className="mod-badge badge-m1">Module 1: Deep Learning for Computer Vision</span></td>
            <td><span className="mod-badge badge-m3">Module 3: AI as Professional Assistant</span></td>
            <td><a href="#subclass-module-details?sub=D&view=schedule" className="details-link" onClick={(e) => e.stopPropagation()}>Schedule &amp; venue →</a></td>
          </tr>
          <tr className="clickable-row" role="button" tabIndex={0} onClick={() => { window.location.hash = 'subclass-module-details?sub=E'; setTimeout(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, 50); }} onKeyDown={(e) => { if ((e as any).key === 'Enter') { window.location.hash = 'subclass-module-details?sub=E'; setTimeout(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, 50); } }}>
            <td>E</td>
            <td><span className="mod-badge badge-m2">Module 2: Fundamentals in NLP, LLM and RAG</span></td>
            <td><span className="mod-badge badge-m3">Module 3: AI as Professional Assistant</span></td>
            <td><a href="#subclass-module-details?sub=E&view=schedule" className="details-link" onClick={(e) => e.stopPropagation()}>Schedule &amp; venue →</a></td>
          </tr>
          <tr className="clickable-row" role="button" tabIndex={0} onClick={() => { window.location.hash = 'subclass-module-details?sub=F'; setTimeout(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, 50); }} onKeyDown={(e) => { if ((e as any).key === 'Enter') { window.location.hash = 'subclass-module-details?sub=F'; setTimeout(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, 50); } }}>
            <td>F</td>
            <td><span className="mod-badge badge-m2">Module 2: Fundamentals in NLP, LLM and RAG</span></td>
            <td><span className="mod-badge badge-m3">Module 3: AI as Professional Assistant</span></td>
            <td><a href="#subclass-module-details?sub=F&view=schedule" className="details-link" onClick={(e) => e.stopPropagation()}>Schedule &amp; venue →</a></td>
          </tr>
          <tr className="clickable-row" role="button" tabIndex={0} onClick={() => { window.location.hash = 'subclass-module-details?sub=G'; setTimeout(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, 50); }} onKeyDown={(e) => { if ((e as any).key === 'Enter') { window.location.hash = 'subclass-module-details?sub=G'; setTimeout(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, 50); } }}>
            <td>G</td>
            <td><span className="mod-badge badge-m2">Module 2: Fundamentals in NLP, LLM and RAG</span></td>
            <td><span className="mod-badge badge-m3">Module 3: AI as Professional Assistant</span></td>
            <td><a href="#subclass-module-details?sub=G&view=schedule" className="details-link" onClick={(e) => e.stopPropagation()}>Schedule &amp; venue →</a></td>
          </tr>
          <tr className="clickable-row" role="button" tabIndex={0} onClick={() => { window.location.hash = 'subclass-module-details?sub=H'; setTimeout(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, 50); }} onKeyDown={(e) => { if ((e as any).key === 'Enter') { window.location.hash = 'subclass-module-details?sub=H'; setTimeout(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, 50); } }}>
            <td>H</td>
            <td><span className="mod-badge badge-m2">Module 2: Fundamentals in NLP, LLM and RAG</span></td>
            <td><span className="mod-badge badge-m3">Module 3: AI as Professional Assistant</span></td>
            <td><a href="#subclass-module-details?sub=H&view=schedule" className="details-link" onClick={(e) => e.stopPropagation()}>Schedule &amp; venue →</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
        <Section id="rubrics" title="Course Assessment">
            <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 flex flex-col items-center justify-center text-center">
                        <div className="text-5xl font-extrabold bg-gradient-to-r from-cyan-500 to-purple-600 text-transparent bg-clip-text">50%</div>
                        <div className="mt-3 text-lg font-semibold text-slate-900">Participation</div>
                        <div className="mt-1 text-sm text-slate-600">In-class exercises</div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 flex flex-col items-center justify-center text-center">
                        <div className="text-5xl font-extrabold bg-gradient-to-r from-cyan-500 to-purple-600 text-transparent bg-clip-text">50%</div>
                        <div className="mt-3 text-lg font-semibold text-slate-900">Project Presentation</div>
                        <div className="mt-1 text-sm text-slate-600">Video pitch deck with slides, voice-over and subtitles</div>
                    </div>
                </div>
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
        

            <div className="mb-6">
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

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 mt-8">
                <div className="flex items-center gap-3">
                    <div className="text-xl font-bold text-amber-700 mb-4">Academic Integrity and Misconduct Policy</div>
                </div>

                <p>Academic honesty is fundamental to teaching, learning, and assessment in this course, and all students are required to uphold the highest standards of integrity in all submitted work.</p>
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li><strong>Plagiarism:</strong> Submitting another person's work, in whole or in part, as one's own without proper acknowledgment.</li>
                    <li><strong>Cheating:</strong> Such as copying or sharing answers, using unauthorized notes, online search engines, or AI tools including ChatGPT or Copilot in quizzes, tests, or other assessments without explicit permission.</li>
                    <li><strong>Assisting others to act dishonestly</strong></li>
                    <li><strong>Falsification, fabrication, or manipulation of data or results</strong></li>
                </ol>
                <p className="italic mt-4 text-slate-600">These rules apply to all forms of assessment, including assignments, projects, and in-class or online exercises.</p>

                <div className="rounded-xl border border-red-200 bg-red-50 p-4 mt-4">
                    <h4 className="font-bold text-lg mb-2">Consequences of Academic Misconduct</h4>
                    <p>Any student found to have committed academic misconduct may <strong>receive a failing grade</strong> for the affected assessment or the course, be <strong>formally reported</strong> to the School and their home Faculty, and have a <strong>permanent record placed on file</strong>. Serious or repeated cases will be referred to the Vice-Chancellor for consideration by the University Disciplinary Committee, where penalties may include a <strong>published reprimand, suspension, or expulsion</strong>.</p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 mt-4 text-sm text-slate-600">
                    <p>The above policy is adopted from AILT1001. For the University's Regulations Governing Students' Academic Conduct Concerning Assessment, please refer to:</p>
                    <p><a href="https://calendar.hku.hk/regulations-governing-students-academic-conduct-concerning-assessment/" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">https://calendar.hku.hk/regulations-governing-students-academic-conduct-concerning-assessment/</a></p>
                    <p>For AILT1001's full policy, visit: <a href="https://ailt.cds.hku.hk/" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">https://ailt.cds.hku.hk/</a></p>
                </div>
            </div>
        </Section>











        {/* <Section id="plos" title="Program Learning Outcomes (PLOs)">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courseData.plos.map((plo, i) => (
                    <li key={i} className="bg-slate-100 p-4 rounded-lg flex items-start border border-slate-200">
                        <span className="font-bold text-purple-600 mr-3">{`PLO${i+1}:`}</span>
                        <span>{plo.split(': ')[1]}</span>
                    </li>
                ))}
            </ul>
        </Section> */}
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

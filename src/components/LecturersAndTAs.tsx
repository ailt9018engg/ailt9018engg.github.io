import React from 'react';
import { courseData } from '../data.ts';
import { Section } from './Section.tsx';

type StaffMember = {
  name: string;
  title: string;
  photoPath: string;
};

const TeamCard = ({ name, title, photoPath }: StaffMember) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-5">
        {!imgError ? (
          <img
            src={photoPath}
            alt={`Photo of ${name}`}
            className="w-full h-full rounded-full object-cover shadow-lg bg-slate-200"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
      <p className="mt-2 text-sm text-slate-500">{title}</p>
    </div>
  );
};

export const LecturersAndTAs = () => (
  <Section id="LecturersAndTAs" title="Meet the Teaching Team">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {courseData.teachingTeam.map((member, index) => (
        <TeamCard key={index} name={member.name} title={member.title} photoPath={member.photoPath} />
      ))}
    </div>
  </Section>
);

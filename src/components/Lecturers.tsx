
import React from 'react';
import { courseData } from '../data.ts';
import { Section } from './Section.tsx';

const LecturerCard = ({ name, photoPath }: { name: string; photoPath: string }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className="text-center">
      <div className="relative w-40 h-40 mx-auto mb-4">
        {/* 
          Instructions for adding lecturer photos:
          1. Create a 'public/images' directory in your project root if it doesn't exist.
          2. Place your lecturer images (e.g., lecturer1.png) inside 'public/images'.
          3. The 'photoPath' in data.ts should correspond to these files (e.g., '/images/lecturer1.png').
          The build process will then make them available at the root of the server.
        */}
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
      <h3 className="text-xl font-semibold text-slate-800">{name}</h3>
    </div>
  );
};

export const Lecturers = () => (
  <Section id="lecturers" title="Meet the Lecturers">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
      {courseData.lecturers.map((lecturer, index) => (
        <LecturerCard key={index} name={lecturer.name} photoPath={lecturer.photoPath} />
      ))}
    </div>
  </Section>
);

import React from 'react';

interface ResumeProps {
  pdfUrl: string;
}

const Resume: React.FC<ResumeProps> = ({ pdfUrl }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-white mb-8">Resume</h2>
      <div className="aspect-[8.5/11] w-full bg-white rounded-xl overflow-hidden shadow-xl">
        <iframe
          src={pdfUrl}
          title="Resume"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Resume;

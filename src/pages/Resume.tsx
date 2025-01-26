import React from 'react';
import { Helmet } from 'react-helmet';

interface ResumeProps {
  pdfUrl: string;
}

const Resume: React.FC<ResumeProps> = ({ pdfUrl }) => {
  return (
    <>
    <Helmet>
      <title>Resume</title>
      <style>
        {`
          .resume-container {
            background: linear-gradient(to right, #4e54c8, #8f94fb);
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }

          .resume-title {
            color: #fff;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            font-family: 'Arial', sans-serif;
            margin-bottom: 20px;
          }

          .resume-frame {
            border: 2px solid #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </Helmet>
    <div className="resume-container max-w-7xl mx-auto px-4 py-12">
      <h2 className="resume-title text-3xl font-bold mb-8">Resume</h2>
      <div className="resume-frame aspect-[8.5/11] w-full bg-white rounded-xl overflow-hidden shadow-xl">
        <iframe
          src={pdfUrl}
          title="Resume"
          className="w-full h-full"
        />
      </div>
    </div>
    </>
  );
};

export default Resume;
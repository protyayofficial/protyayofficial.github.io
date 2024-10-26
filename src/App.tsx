// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AboutMe from './pages/AboutMe'; 
import Publications from './pages/Publications';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import ConnectWithMe from './pages/ConnectWithMe';

// Importing data from separate files
import publications from './data/publications';
import projects from './data/projects';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<AboutMe />} /> 
          <Route path="/publications" element={<Publications publications={publications} />} />
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route path="/resume" element={<Resume pdfUrl="/AcademicCV.pdf" />} />
          <Route path="/connect" element={<ConnectWithMe />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

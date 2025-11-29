import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Projects from './pages/Projects';
import CaseStudy from './pages/CaseStudy';
import Contact from './pages/Contact';
import ProjectEditor from './pages/ProjectEditor';
import { ProjectProvider } from './context/ProjectContext';

const App: React.FC = () => {
  return (
    <ProjectProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<CaseStudy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/project" element={<ProjectEditor />} />
            <Route path="/admin/project/:id" element={<ProjectEditor />} />
          </Routes>
        </Layout>
      </HashRouter>
    </ProjectProvider>
  );
};

export default App;
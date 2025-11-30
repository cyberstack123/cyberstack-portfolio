import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../data';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const CaseStudy = () => {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) return <div className="container" style={{paddingTop: 150}}>Project Not Found</div>;

  return (
    <div style={{minHeight: '100vh', paddingBottom: '80px'}}>
      <div style={{height: '60vh', position: 'relative', width: '100%'}}>
        <img src={project.cover} style={{width:'100%', height:'100%', objectFit:'cover', opacity: 0.5}} />
        <div style={{position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '40px 0', background: 'linear-gradient(to top, #050505, transparent)'}}>
           <div className="container">
             <Link to="/portfolio" style={{display:'inline-flex', alignItems:'center', gap:8, color:'var(--color-text-muted)', marginBottom:20}}>
               <ArrowLeft size={20} /> Back to Work
             </Link>
             <h1 style={{fontSize: '60px', fontWeight: 800}}>{project.title}</h1>
             <p className="text-red font-bold">{project.category} • {project.year}</p>
           </div>
        </div>
      </div>

      <div className="container" style={{marginTop: '80px'}}>
        <div className="grid-2" style={{marginBottom: 80}}>
          <div>
            <h3 style={{fontWeight: 700, fontSize: 24, marginBottom: 16}}>The Problem</h3>
            <p className="text-muted">{project.details.problem}</p>
          </div>
          <div>
            <h3 style={{fontWeight: 700, fontSize: 24, marginBottom: 16}}>The Solution</h3>
            <p className="text-muted">{project.details.solution}</p>
          </div>
        </div>

        <div style={{background: '#111', padding: 40, borderRadius: 12, marginBottom: 80}}>
          <h2 style={{fontSize: 32, fontWeight: 700, marginBottom: 20}}>Results</h2>
          <p className="text-muted" style={{marginBottom: 20}}>{project.details.result}</p>
          <ul>
            {project.details.deliverables.map((d, i) => (
              <li key={i} style={{display:'flex', alignItems:'center', gap:10, marginBottom:8, color: '#aaa'}}>
                <CheckCircle size={16} className="text-red" /> {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
import React from 'react';
import { PROJECTS } from '../data';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  return (
    <div style={{minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px'}}>
      <div className="container">
        <h1 style={{fontSize: '60px', fontWeight: 800, marginBottom: '60px'}}>Work</h1>

        <div className="grid-3">
          {PROJECTS.map(p => (
            <div key={p.id} className="project-card">
              <div className="project-img-wrapper">
                <img src={p.cover} alt={p.title} />
              </div>
              <div className="project-content">
                <span className="text-red uppercase font-bold" style={{fontSize:10}}>{p.category}</span>
                <h3 style={{fontSize:24, fontWeight:700, margin:'5px 0 10px'}}>{p.title}</h3>
                <Link to={`/project/${p.id}`} className="text-muted" style={{fontSize:12, display:'flex', alignItems:'center', gap:4}}>
                  View Case Study <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
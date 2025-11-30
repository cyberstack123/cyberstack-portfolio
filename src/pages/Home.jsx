import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Shield, Target, Hexagon, Share2 } from 'lucide-react';
import { SERVICES, PROJECTS } from '../data';

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-bg-glow"></div>
        <div className="container">
          <div className="hero-badge">
            <span style={{width:8, height:8, background:'var(--color-cyber-red)', borderRadius:'50%'}}></span>
            LAUNCHING 2026
          </div>
          <h1 className="hero-title">
            CYBER<span>STACK</span>
          </h1>
          <p className="hero-motto">CLARITY THROUGH COMPLEXITY</p>
          
          <div style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
            <Link to="/portfolio"><button className="btn btn-primary">VIEW WORKS</button></Link>
            <Link to="/contact"><button className="btn btn-outline">START PROJECT</button></Link>
          </div>
        </div>
        <div style={{position: 'absolute', bottom: 40, animation: 'bounce 2s infinite'}}>
          <ChevronDown className="text-muted" />
        </div>
      </section>

      <section className="section-padding" style={{background: 'rgba(255,255,255,0.02)'}}>
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 style={{fontSize: '40px', fontWeight: '800', marginBottom: '20px'}}>
                Redefining Brand Identity for the <span className="text-red">Digital Age</span>.
              </h2>
              <p className="text-muted" style={{marginBottom: '30px', fontSize: '18px'}}>
                CyberStack is more than a design studio; it's a digital architect. 
                We specialize in constructing robust visual identities and immersive Web3 experiences.
              </p>
              <Link to="/about" className="text-red" style={{display:'flex', alignItems:'center', gap:8, fontWeight:700}}>
                Read About Founder <ArrowRight size={16} />
              </Link>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}}>
               {SERVICES.slice(0,4).map(s => (
                 <div key={s.id} className="card" style={{padding: 20}}>
                   <h3 style={{fontWeight:700, fontSize:14}}>{s.title}</h3>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:50}}>
             <div>
                <span className="text-red font-bold uppercase tracking-wide">Selected Work</span>
                <h2 style={{fontSize:40, fontWeight:800}}>Recent Projects</h2>
             </div>
             <Link to="/portfolio" className="text-muted">View All</Link>
          </div>
          
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
      </section>
    </>
  );
};

export default Home;
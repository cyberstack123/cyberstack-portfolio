import React from 'react';
import { SERVICES } from '../data';
import { Shield, Target, Hexagon, Share2, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const getIcon = (iconName) => {
  switch(iconName) {
    case 'Shield': return <Shield size={32} />;
    case 'Target': return <Target size={32} />;
    case 'Hexagon': return <Hexagon size={32} />;
    case 'Share2': return <Share2 size={32} />;
    default: return <Layers size={32} />;
  }
};

const Services = () => {
  return (
    <div style={{minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '80px'}}>
           <h1 style={{fontSize: '60px', fontWeight: 800}}>Full Stack Creative</h1>
        </div>

        <div className="grid-2">
          {SERVICES.map(service => (
            <div key={service.id} className="card">
               <div className="icon-box">
                  {getIcon(service.icon)}
               </div>
               <h3 style={{fontSize: '24px', fontWeight: 700, marginBottom: '16px'}}>{service.title}</h3>
               <p className="text-muted" style={{marginBottom: '24px'}}>{service.description}</p>
               <ul>
                 {service.features.map((f, i) => (
                   <li key={i} className="text-muted" style={{fontSize: '14px', marginBottom: '8px', display:'flex', alignItems:'center', gap:8}}>
                     <span style={{width:6, height:6, background:'var(--color-cyber-red)', borderRadius:'50%'}}></span>
                     {f}
                   </li>
                 ))}
               </ul>
            </div>
          ))}
        </div>
        
        <div style={{textAlign: 'center', marginTop: '80px'}}>
          <Link to="/contact"><button className="btn btn-primary">CONSULT WITH MUAZ</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
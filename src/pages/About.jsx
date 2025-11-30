import React from 'react';
import { TIMELINE, FOUNDER_NAME, SOCIAL_LINKS, PROFILE_IMAGE } from '../data';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const About = () => {
  return (
    <div style={{minHeight: '100vh', paddingTop: '80px'}}>
      <div className="about-header">
        <h1 style={{fontSize: '60px', fontWeight: 800}}>The Architect</h1>
        <p className="text-muted">Meet the mind behind CyberStack.</p>
      </div>

      <div className="container">
        <div className="grid-2">
          {/* Bio Side */}
          <div>
            <div className="profile-img-container">
               {/* This image comes from src/assets/profile.jpg via data.js */}
               <img src={PROFILE_IMAGE} alt="Founder" className="profile-img" />
            </div>
            
            <h3 style={{fontSize: '32px', fontWeight: 700, marginBottom: '20px'}}>Hello, I'm {FOUNDER_NAME}.</h3>
            <p className="text-muted" style={{marginBottom: '20px'}}>
              I am a multidisciplinary designer and digital strategist focused on building resilient brand identities.
              My approach is simple: <span className="text-red font-bold">Clarity through complexity.</span>
            </p>
            <p className="text-muted" style={{marginBottom: '30px'}}>
               With a specialized focus on Web3 Creations and On-Chain Branding, I don't just design pretty logos; 
               I build digital legacies.
            </p>

            <div style={{display: 'flex', gap: '16px'}}>
              <a href={SOCIAL_LINKS.instagram} target="_blank" className="icon-box"><Instagram /></a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" className="icon-box"><Twitter /></a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" className="icon-box"><Linkedin /></a>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="icon-box"><Mail /></a>
            </div>
          </div>

          {/* Timeline Side */}
          <div style={{paddingTop: '40px'}}>
            {TIMELINE.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <span className="text-red font-bold" style={{fontSize: '18px'}}>{item.year}</span>
                <h4 style={{fontSize: '20px', fontWeight: 700, margin: '8px 0'}}>{item.title}</h4>
                <p className="text-muted" style={{fontSize: '14px'}}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
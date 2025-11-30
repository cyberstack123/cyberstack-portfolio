import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../data';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div style={{minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px'}}>
      <div className="container">
        <div className="grid-2">
          <div>
            <h1 style={{fontSize: '60px', fontWeight: 800, marginBottom: 20}}>Let's Build.</h1>
            <p className="text-muted" style={{fontSize: 18, marginBottom: 40}}>
              Ready to elevate your brand? Reach out for a consultation.
            </p>
            <div style={{display:'flex', gap: 16, alignItems:'center', marginBottom: 20}}>
               <div className="icon-box" style={{marginBottom:0}}><Mail /></div>
               <div>
                 <p className="text-muted" style={{fontSize:12, fontWeight:700}}>EMAIL</p>
                 <p>{SOCIAL_LINKS.email}</p>
               </div>
            </div>
          </div>

          <div className="card">
            <h3 style={{fontSize: 24, fontWeight: 700, marginBottom: 24}}>Send a Message</h3>
            <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap: 20}}>
              <div>
                <label className="text-muted" style={{fontSize:12, fontWeight:700}}>NAME</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                  style={{width:'100%', background:'black', border:'1px solid #333', color:'white', padding: 12, borderRadius: 4, marginTop: 8}}
                />
              </div>
              <div>
                <label className="text-muted" style={{fontSize:12, fontWeight:700}}>EMAIL</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  required
                  style={{width:'100%', background:'black', border:'1px solid #333', color:'white', padding: 12, borderRadius: 4, marginTop: 8}}
                />
              </div>
              <div>
                <label className="text-muted" style={{fontSize:12, fontWeight:700}}>MESSAGE</label>
                <textarea 
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  required
                  rows={4}
                  style={{width:'100%', background:'black', border:'1px solid #333', color:'white', padding: 12, borderRadius: 4, marginTop: 8}}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{width:'100%'}}>SEND REQUEST</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { BRAND_NAME, SOCIAL_LINKS } from '../data';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Work', path: '/portfolio' },
    { label: 'Gallery', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="logo">
            <div className="logo-box"><span>C</span></div>
            <span>{BRAND_NAME}</span>
          </Link>

          <div className="nav-links">
            {links.map(link => (
              <Link 
                key={link.path} 
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary">HIRE ME</Link>
          </div>

          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          {links.map(link => (
            <Link key={link.path} to={link.path} className={location.pathname === link.path ? 'text-red' : 'text-white'}>
              {link.label.toUpperCase()}
            </Link>
          ))}
        </div>
      </nav>

      <main>{children}</main>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <h2 className="logo" style={{marginBottom: '1rem'}}>{BRAND_NAME}</h2>
              <p className="text-muted">Defining the visual language of tomorrow. Specializing in brand identity and Web3 digital assets.</p>
            </div>
            <div>
              <h3 className="uppercase font-bold" style={{marginBottom: '1rem'}}>Connect</h3>
              <ul>
                <li><a href={SOCIAL_LINKS.instagram} target="_blank">Instagram</a></li>
                <li><a href={SOCIAL_LINKS.twitter} target="_blank">Twitter / X</a></li>
                <li><a href={SOCIAL_LINKS.linkedin} target="_blank">LinkedIn</a></li>
                <li><a href={SOCIAL_LINKS.behance} target="_blank">Behance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="uppercase font-bold" style={{marginBottom: '1rem'}}>Contact</h3>
              <p className="text-muted">{SOCIAL_LINKS.email}</p>
            </div>
          </div>
          <div className="footer-bottom">
             <p>&copy; 2026 {BRAND_NAME}. All rights reserved.</p>
             <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
               <span>Powered by Innovation</span>
               <Rocket size={14} className="text-red" />
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
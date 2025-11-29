import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, Lock, Unlock } from 'lucide-react';
import { NAV_LINKS, BRAND_NAME, SOCIAL_LINKS } from '../constants';
import { useProjects } from '../context/ProjectContext';

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { isAdmin, toggleAdmin } = useProjects();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [pathname]);

  const handleAdminToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isAdmin) {
      // If currently admin, just turn it off (Log out)
      toggleAdmin();
    } else {
      // Immediate prompt for password
      const password = window.prompt("Enter Admin Access Code:");
      
      if (password === null) return; // User cancelled

      if (password.toLowerCase() === "cyber2026") {
        toggleAdmin();
      } else {
        alert("Access Denied: Incorrect Password");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-cyber-red selection:text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-cyber-dark/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-cyber-red rounded flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300">
              <span className="text-white font-bold font-display text-lg">C</span>
            </div>
            <span className="text-xl font-display font-bold tracking-wider text-white group-hover:text-cyber-red transition-colors">
              {BRAND_NAME}
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-all duration-200 hover:text-cyber-red ${
                    isActive ? 'text-cyber-red' : 'text-gray-400'
                  }`
                }
              >
                {link.label.toUpperCase()}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="px-6 py-2 bg-cyber-red text-white text-sm font-bold rounded hover:bg-red-600 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(255,31,31,0.5)]"
            >
              HIRE ME
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white hover:text-cyber-red transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-cyber-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-2xl font-display font-bold tracking-widest ${
                  isActive ? 'text-cyber-red' : 'text-white'
                }`
              }
            >
              {link.label.toUpperCase()}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {isAdmin && (
            <div className="bg-cyber-red/20 border-b border-cyber-red/50 text-center py-2 text-xs font-bold text-white tracking-widest uppercase flex items-center justify-center gap-2">
                <Unlock size={12} /> Admin Mode Active - Editing Enabled
            </div>
        )}
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 border-t border-white/5 py-12 mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-display font-bold text-white mb-4">{BRAND_NAME}</h2>
            <p className="text-gray-400 max-w-sm">
              Defining the visual language of tomorrow. 
              Specializing in brand identity and Web3 digital assets for forward-thinking companies.
            </p>
            <p className="mt-4 text-cyber-red font-medium">Launching Officially 2026</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyber-red transition-colors cursor-pointer">Brand Identity</li>
              <li className="hover:text-cyber-red transition-colors cursor-pointer">Web Strategy</li>
              <li className="hover:text-cyber-red transition-colors cursor-pointer">Web3 Creations</li>
              <li className="hover:text-cyber-red transition-colors cursor-pointer">Social Content</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-cyber-red transition-colors block">Twitter / X</a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyber-red transition-colors block">LinkedIn</a>
              </li>
              <li className="hover:text-cyber-red transition-colors cursor-pointer opacity-50 cursor-not-allowed" title="Coming Soon">Instagram</li>
              <li className="hover:text-cyber-red transition-colors cursor-pointer opacity-50 cursor-not-allowed" title="Coming Soon">Behance</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} CyberStack. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
             <div className="flex items-center gap-2">
                 <span>Powered by Innovation</span>
                 <Rocket size={14} className="text-cyber-red" />
             </div>
             <button 
                type="button"
                onClick={handleAdminToggle} 
                className={`p-3 rounded transition-colors cursor-pointer flex items-center justify-center ${isAdmin ? 'text-cyber-red bg-white/10' : 'text-gray-600 hover:text-white hover:bg-white/5'}`}
                title={isAdmin ? "Logout Admin" : "Admin Access"}
             >
                 {isAdmin ? <Unlock size={18} /> : <Lock size={18} />}
             </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
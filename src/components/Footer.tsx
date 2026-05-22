import React from 'react';
import { LogoSymbol } from './Logo';
import { 
  ArrowUp, 
  Code2, 
  LineChart, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail 
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#030303] text-brand-muted font-sans border-t border-brand-border py-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-brand-border/60">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 space-y-6 text-left">
            <div>
              <div className="flex items-center gap-3">
                <LogoSymbol className="h-8 w-8 text-brand-accent" />
                <div className="flex flex-col">
                  <span className="font-display text-xl font-bold tracking-wider text-white select-none leading-none">
                    zyvera
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-brand-accent font-semibold leading-none mt-1">
                    technologies
                  </span>
                </div>
              </div>
              
              <p className="text-xs text-brand-muted/80 max-w-sm font-light leading-relaxed mt-4">
                We specialize in building innovative, scalable, and real-time digital solutions that help businesses grow in the modern world. Turning ideas into successful digital products.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-5">
              <a 
                href="https://www.facebook.com/profile.php?id=61589933740249" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand-accent transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/zyveratechnologies/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@zyvera.com" 
                className="hover:text-brand-accent transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <div className="flex items-center gap-1 text-[10px] font-mono tracking-widest text-white/50 uppercase select-none font-medium">
              <span>Digital Solutions</span>
              <span className="text-brand-accent">•</span>
              <span>Real Growth</span>
            </div>
          </div>

          {/* Nav Categories Column */}
          <div className="md:col-span-3 text-left">
            <h5 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white font-semibold mb-4">Engineering Links</h5>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <a href="#services" className="hover:text-brand-accent transition-colors">Specialized Tech Stack</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-brand-accent transition-colors">Low-Latency Work</a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-accent transition-colors">Bento Methodologies</a>
              </li>
              <li>
                <a href="#careers" className="hover:text-brand-accent transition-colors flex items-center gap-1.5">
                  Job Openings
                  <span className="h-1.5 w-1.5 bg-brand-accent rounded-full animate-pulse" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Compliance Column */}
          <div className="md:col-span-3 text-left">
            <h5 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white font-semibold mb-4">Security & Trust</h5>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <span className="text-brand-muted">SOC2 Certified Pipeline</span>
              </li>
              <li>
                <span className="text-brand-muted">GDPR Dynamic Data Safeguard</span>
              </li>
              <li>
                <span className="text-brand-muted">E-Commerce PCI-DSS Standard</span>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-accent transition-colors">Submit Disclosure Report</a>
              </li>
            </ul>
          </div>

          {/* Back to top Column */}
          <div className="md:col-span-1 flex md:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="p-3 bg-brand-bg rounded-xl border border-brand-border hover:border-brand-accent hover:text-white transition-colors cursor-pointer group"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Divider Logo Badge: </> SOFTWARE DEVELOPMENT | DIGITAL MARKETING */}
        <div className="py-8 border-b border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.18em]">
          <div className="flex items-center gap-2.5 text-white/70 select-none">
            <Code2 className="h-4 w-4 text-brand-accent" />
            <span>Software Development</span>
          </div>
          
          <div className="hidden sm:block text-brand-border">|</div>

          <div className="flex items-center gap-2.5 text-white/70 select-none">
            <LineChart className="h-4 w-4 text-brand-accent" />
            <span>Digital Marketing Operations</span>
          </div>
        </div>

        {/* Bottom copyright stamps */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-brand-muted font-light">
          <div>
            <span>© {new Date().getFullYear()} Zyvera Technologies. All intellectual property secured.</span>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors select-none">Client API Node Standard v1.4.0</span>
            <span>•</span>
            <span className="hover:text-white transition-colors select-none">Core Node Online (UTC 2026)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
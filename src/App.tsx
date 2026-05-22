import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Team from './components/Team';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import { LogoSymbol } from './components/Logo';
import { Sparkles, Terminal } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial load delay for the branding reveal
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="relative bg-brand-bg min-h-screen text-brand-text antialiased selection:bg-brand-accent/20 selection:text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 bg-[#030303] z-[9999] flex flex-col items-center justify-center"
          >
            <div className="relative flex flex-col items-center">
              {/* Spinning accent outer ring */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                className="absolute inset-0 -m-4 border border-brand-accent/20 border-t-brand-accent rounded-full pointer-events-none"
              />

              {/* Logo symbol jumping into focus */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <LogoSymbol className="h-16 w-16 text-brand-accent" />
              </motion.div>

              {/* Logo texts styling */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center mt-6"
              >
                <h3 className="font-display font-bold text-2xl tracking-[0.08em] text-white">
                  zyvera
                </h3>
                <p className="text-[9px] font-mono font-semibold uppercase tracking-[0.3em] text-brand-muted mt-2">
                  technologies
                </p>
              </motion.div>
            </div>

            {/* Quick terminal load status line */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 flex items-center gap-2 text-[9px] font-mono text-brand-muted"
            >
              <Terminal className="h-3 w-3 text-brand-accent" />
              <span>BOOT_SEQUENCE_OK: ACTIVE</span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="app-root"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col min-h-screen"
          >
            {/* Header / Navigation system */}
            <Header />

            {/* Main Application layouts */}
            <main className="flex-grow">
              <Hero />
              <Services />
              <Projects />
              <About />
              <Team />
              <Careers />
              <Contact />
            </main>

            {/* Footer components */}
            <Footer />

            {/* Floating WhatsApp chat widget */}
            <WhatsAppWidget />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

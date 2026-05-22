import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Terminal, Code, Cpu, Database, Eye, Globe } from 'lucide-react';

export default function Hero() {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-36 pb-20 flex flex-col justify-center items-center overflow-hidden bg-brand-bg px-4 sm:px-6 lg:px-8"
    >
      {/* Premium ambient light flare in background in glowing cyber blue */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(10,132,255,0.08)_0%,transparent,70%)] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(10,132,255,0.04)_0%,transparent,70%)] -z-10 pointer-events-none" />

      {/* Corporate Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141923_1px,transparent_1px),linear-gradient(to_bottom,#141923_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] -z-20 pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Mission Presentation & Tagline */}
        <div className="lg:col-span-7 flex flex-col text-left justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent-blue/10 border border-brand-accent-blue/30 rounded-full w-max mb-6 select-none"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-accent-blue" />
            <span className="text-[10px] uppercase tracking-[0.22em] font-mono text-brand-accent-blue font-bold">
              Innovating the Digital Future
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-white leading-[1.08] mb-6"
          >
            Transforming Ideas Into<br />
            <span className="text-gradient-blue font-bold">Powerful Digital Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-sm sm:text-base text-brand-muted max-w-xl font-sans font-light leading-relaxed mb-8"
          >
            At <strong className="text-white font-semibold">Zyvera Technologies</strong>, we specialize in building innovative, scalable, and real-time digital solutions that help businesses grow in the modern world. From dynamic web applications and eCommerce platforms to AI-powered systems and mobile applications, we deliver technology that drives success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <button
              onClick={handleScrollToContact}
              className="px-7 py-3.5 bg-brand-accent-blue hover:bg-brand-accent-blue-hover text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-brand-accent-blue/10"
            >
              Consult Our Engineers
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={handleScrollToServices}
              className="px-7 py-3.5 bg-transparent hover:bg-brand-border/40 text-brand-text border border-brand-border rounded-xl font-semibold text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center hover:border-brand-accent-blue/30"
            >
              Our Services
            </button>
          </motion.div>

          {/* Core short taglines carousel in the footer row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="border-t border-brand-border/60 pt-6 max-w-xl"
          >
            <span className="text-[10px] uppercase tracking-widest text-brand-muted font-mono block mb-3">Our Directives</span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-white/85">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent-blue" />
                <span>Turning Ideas Into Technology</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent-blue" />
                <span>Smart Solutions for Modern Businesses</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent-blue" />
                <span>Building Scalable Digital Experiences</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Beautiful IDE Showcase with Real Generated Images */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full max-w-md bg-brand-card border border-brand-border/80 rounded-2xl p-4 relative shadow-2xl overflow-hidden text-left"
          >
            {/* Soft glowing ambient light inside IDE back */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent-blue/10 rounded-full blur-[40px] pointer-events-none" />

            {/* IDE Window Bar */}
            <div className="flex items-center justify-between border-b border-brand-brand-border pb-3 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                <span className="text-[11px] font-mono text-brand-muted ml-2">zyvera_solutions_studio</span>
              </div>
              <div className="flex items-center gap-1 bg-brand-accent-blue/10 px-2 py-0.5 rounded border border-brand-accent-blue/20">
                <span className="text-[9px] font-mono font-semibold tracking-wider text-brand-accent-blue">ACTIVE</span>
              </div>
            </div>

            {/* Embedded High Fidelity Generated Tech/Coding image with CSS enhancements */}
            <div className="relative group overflow-hidden rounded-lg border border-brand-border bg-black mb-4">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
              <img 
                src="/src/assets/images/tech_coding_1779357396858.png" 
                alt="Zyvera Technologies Coding Sandbox" 
                className="w-full h-auto aspect-[16/9] object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2 left-2 z-20 flex items-center gap-1.5 bg-[#030303]/75 backdrop-blur px-2.5 py-1 rounded border border-brand-border">
                <Code className="h-3 w-3 text-brand-accent-blue" />
                <span className="text-[9px] font-mono font-bold tracking-wider text-white">Live Development Sandbox</span>
              </div>
            </div>

            {/* Quality Standard Badges & Terminal Output */}
            <div className="space-y-2 font-mono">
              <div className="p-3 bg-brand-bg rounded-lg border border-brand-border/60">
                <div className="flex items-center gap-2 mb-1">
                  <Cpu className="h-3.5 w-3.5 text-brand-accent-blue" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Enterprise-Grade Architecture</span>
                </div>
                <p className="text-[10px] text-brand-muted leading-relaxed font-light font-sans">
                  We use modern standards (Next.js, Python FastAPI, PostgreSQL) ensuring zero-trust security grids and sub-millisecond compile loops.
                </p>
              </div>

              <div className="p-3 bg-brand-bg rounded-lg border border-brand-border/60">
                <div className="flex items-center gap-2 mb-1">
                  <Database className="h-3.5 w-3.5 text-brand-accent-blue" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">High Speed Data Streams</span>
                </div>
                <p className="text-[10px] text-brand-muted leading-relaxed font-light font-sans">
                  Equipped with real-time WebSocket messaging pipelines and concurrent database optimization to handle business volume.
                </p>
              </div>
            </div>

            {/* Quote of custom value */}
            <div className="mt-4 pt-3 border-t border-brand-border/80 text-center flex items-center justify-between text-[10px]">
              <span className="text-brand-muted font-sans font-light italic">"Standard-built for ultimate scale."</span>
              <span className="text-brand-accent-blue font-mono font-medium">Zyvera Core v1.4</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

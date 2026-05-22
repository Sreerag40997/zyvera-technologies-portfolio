import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Eye, ArrowRight, X, Sparkles, Server, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'real-time' | 'e-commerce' | 'mobile'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter(p => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section 
      id="projects" 
      className="py-24 bg-brand-bg relative border-t border-brand-border/60"
    >
      {/* Decorative center accent overlay */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-brand-accent/2 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] tracking-[0.25em] font-mono text-brand-accent font-semibold uppercase block mb-3">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight leading-tight">
            Dynamic E-Commerce Systems &<br />
            Real-Time Mobile/Web Applications.
          </h2>
          <p className="text-sm text-brand-muted font-sans font-light mt-3 max-w-xl leading-relaxed">
            Every product is custom engineered for scale. Filter through our showcase of low-latency collaboration frameworks, headless stores, and core Python AI utilities.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-brand-border/40">
          {([
            { id: 'all', label: 'All Projects' },
            { id: 'real-time', label: 'Real-Time Sync' },
            { id: 'e-commerce', label: 'Dynamic E-Commerce' },
            { id: 'mobile', label: 'Mobile Applications' }
          ] as const).map((tab) => {
            const isSelected = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 text-xs font-mono tracking-wider font-semibold uppercase rounded-full transition-all cursor-pointer relative ${
                  isSelected ? 'text-brand-bg bg-brand-accent' : 'text-brand-muted hover:text-brand-text hover:bg-brand-border/40'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Project Grid with staggers */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-brand-card rounded-2xl border border-brand-border overflow-hidden flex flex-col justify-between hover:border-brand-accent/30 transition-all duration-300 relative"
              >
                <div>
                  {/* Image wrap with absolute overlay info */}
                  <div className="aspect-video w-full overflow-hidden bg-brand-bg relative cursor-pointer" onClick={() => setSelectedProject(proj)}>
                    <img 
                      src={proj.image} 
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-bg/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <div className="p-3 bg-brand-card rounded-full border border-brand-border hover:border-brand-accent text-brand-accent transition-colors">
                        <Eye className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Left Category tag */}
                    <span className="absolute top-3 left-3 px-2 py-1 bg-brand-bg/80 backdrop-blur-md border border-brand-border/80 rounded text-[9px] uppercase font-mono tracking-wider font-medium text-brand-accent">
                      {proj.category === 'real-time' ? 'Real-Time Sync' : proj.category === 'e-commerce' ? 'E-Commerce' : 'Mobile App'}
                    </span>

                    {/* Right Stat indicator */}
                    {proj.metrics && (
                      <span className="absolute top-3 right-3 px-2 py-1 bg-brand-accent/15 border border-brand-accent/20 rounded text-[9px] uppercase font-mono tracking-wider font-bold text-brand-accent">
                        {proj.metrics.value}
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-[17px] font-display font-medium text-white group-hover:text-brand-accent transition-colors mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-brand-muted font-sans font-light leading-relaxed mb-6 line-clamp-3">
                      {proj.description}
                    </p>
                  </div>
                </div>

                {/* Footer tags and modal prompt */}
                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.tags.slice(0, 3).map(tag => (
                      <span 
                        key={tag}
                        className="text-[9px] font-mono tracking-widest px-2 py-0.5 rounded bg-brand-bg border border-brand-border text-brand-muted"
                      >
                        {tag}
                      </span>
                    ))}
                    {proj.tags.length > 3 && (
                      <span className="text-[9px] font-mono tracking-widest px-2 py-0.5 rounded bg-brand-bg border border-brand-border/50 text-brand-muted">
                        +{proj.tags.length - 3} More
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-brand-accent group-hover:text-brand-text transition-colors font-mono cursor-pointer"
                  >
                    View Architecture
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-bg/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-brand-card border border-brand-border rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto relative p-6 sm:p-8 shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg border border-brand-border text-brand-muted hover:text-white hover:bg-brand-border transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Tag and Title */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 bg-brand-accent/15 border border-brand-accent/20 rounded-md text-[10px] font-mono text-brand-accent uppercase tracking-wider">
                    {selectedProject.category} Project
                  </span>
                  {selectedProject.metrics && (
                    <span className="text-[10px] font-mono text-brand-muted">
                      {selectedProject.metrics.label}: <strong className="text-white">{selectedProject.metrics.value}</strong>
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-display font-medium text-white mb-5">
                  {selectedProject.title}
                </h3>

                {/* Mock image container */}
                <div className="aspect-video w-full rounded-xl overflow-hidden border border-brand-border/80 mb-6 bg-brand-bg">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Split detail grid */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 mb-8 text-left">
                  <div className="sm:col-span-8">
                    <h4 className="text-[11px] font-mono uppercase tracking-widest text-brand-accent mb-2">The Architecture Challenge</h4>
                    <p className="text-sm text-brand-muted font-sans font-light leading-relaxed mb-4">
                      {selectedProject.description}
                    </p>
                    <p className="text-xs text-brand-muted/80 leading-relaxed font-sans">
                      Our engineering division was tasked with structuring a custom transactional state tree. By caching requests directly in a lightweight Redis layer and setting up parallel WebSocket rooms, we bypassed traditional state bottlenecks altogether.
                    </p>
                  </div>
                  <div className="sm:col-span-4 bg-brand-bg border border-brand-border rounded-xl p-4">
                    <h4 className="text-[11px] font-mono uppercase tracking-widest text-brand-accent mb-3">Tech Infrastructure</h4>
                    <div className="space-y-2">
                      {selectedProject.tags.map(t => (
                        <div key={t} className="flex items-center gap-2 text-xs text-brand-muted">
                          <Server className="h-3.5 w-3.5 text-brand-muted" />
                          <span className="font-mono">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Custom system highlights list */}
                <div className="border-t border-brand-border/60 pt-6">
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-brand-accent mb-4">Core Implementation Steps</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-brand-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-white">Dynamic Asset Pre-caching</p>
                        <p className="text-[11px] text-brand-muted">Pre-compiled indexes for sub-millisecond retrieval cycles.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-brand-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-white">Low-Latency Gateway</p>
                        <p className="text-[11px] text-brand-muted">WebSocket fallback routing ensuring persistent sync on unstable connections.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      const target = document.getElementById('contact');
                      if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
                    }}
                    className="px-5 py-2.5 bg-brand-accent text-brand-bg rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-brand-accent-hover transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    Discuss Similar Integration
                    <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  // Dynamic Lucide lookup
  const renderIcon = (name: string, className = "h-6 w-6") => {
    const IconComponent = (Icons as any)[name];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.HelpCircle className={className} />;
  };

  return (
    <section 
      id="services" 
      className="py-24 bg-brand-bg relative border-t border-brand-border/60 overflow-hidden"
    >
      {/* Subtle backdrop ornament */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-accent/2 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-16 md:flex md:items-end md:justify-between max-w-4xl">
          <div>
            <span className="text-[10px] tracking-[0.25em] font-mono text-brand-accent font-semibold uppercase block mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight leading-tight">
              Engineered for Enterprise Performance.<br />
              Coded with Microsecond Precision.
            </h2>
          </div>
          <p className="text-sm text-brand-muted max-w-md font-sans lg:mt-0 mt-4 leading-relaxed font-light">
            We focus on full lifecycle technical systems — from early wireframe prototyping to custom Python training pipelines, dynamic e-commerce, and responsive mobile apps.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((srv, idx) => {
            const isExpanded = activeService === srv.id;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                layout="position"
                className={`bg-brand-card border rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  isExpanded 
                    ? 'border-brand-accent shadow-lg shadow-brand-accent/5 ring-1 ring-brand-accent/20' 
                    : 'border-brand-border hover:border-brand-border*2 hover:bg-brand-card/80'
                }`}
              >
                <div>
                  {/* Icon & Accent circle */}
                  <div className={`p-3 rounded-xl w-max bg-gradient-to-br ${srv.accentColor} mb-5`}>
                    {renderIcon(srv.iconName, "h-5 w-5")}
                  </div>

                  <h3 className="text-lg font-display font-medium text-white tracking-wide mb-3">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-brand-muted font-sans font-light leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                <div>
                  {/* Expanded detail space */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden mb-5 border-t border-brand-border/60 pt-4"
                      >
                        <span className="text-[9px] uppercase tracking-widest font-mono text-brand-accent block mb-2">
                          Standard Focus areas:
                        </span>
                        <ul className="space-y-1.5 text-xs text-brand-muted font-light mb-2">
                          {srv.id === 'custom-software' && (
                            <>
                              <li>• High performance backends & clean relational databases</li>
                              <li>• Dynamic React/Next.js corporate dashboards</li>
                              <li>• Secure local/cloud API integrations & endpoints</li>
                            </>
                          )}
                          {srv.id === 'realtime-dev' && (
                            <>
                              <li>• Instant live data synchronization & latency management</li>
                              <li>• Secure WebSocket socket communication relays</li>
                              <li>• Real-time notifications & streaming pipeline grids</li>
                            </>
                          )}
                          {srv.id === 'ecommerce-dev' && (
                            <>
                              <li>• Multi-vendor structures & customized checkout funnels</li>
                              <li>• Online visual payment systems (Stripe, Paypal)</li>
                              <li>• Dynamic inventory controls & customer analytics tracking</li>
                            </>
                          )}
                          {srv.id === 'mobile-dev' && (
                            <>
                              <li>• Fast Android & iOS React Native/Flutter build targets</li>
                              <li>• Stunning fluid interactive gestures & responsive graphics</li>
                              <li>• Secure offline database synchronization with encryption</li>
                            </>
                          )}
                          {srv.id === 'ai-dev' && (
                            <>
                              <li>• Elegant context-aware AI conversational chatbots</li>
                              <li>• High-accuracy predictive analytical data models</li>
                              <li>• Automation scripts & seamless LLM API integrations</li>
                            </>
                          )}
                          {srv.id === 'digital-marketing' && (
                            <>
                              <li>• High SEO ranks & search engine indexing campaigns</li>
                              <li>• Social media branding & organic promotion content</li>
                              <li>• Optimized high-conversion lead generation strategy</li>
                            </>
                          )}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {srv.techs.map((t) => (
                      <span 
                        key={t}
                        className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded bg-brand-bg border border-brand-border/80 text-brand-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveService(isExpanded ? null : srv.id)}
                    className="text-[10px] uppercase tracking-widest font-mono font-medium text-brand-accent group flex items-center gap-1 cursor-pointer transition-colors hover:text-brand-accent-hover"
                  >
                    {isExpanded ? 'Collapse' : 'Learn Focus Areas'}
                    <Icons.ChevronRight className={`h-3 w-3 transition-transform duration-300 ${
                      isExpanded ? 'rotate-90' : 'group-hover:translate-x-0.5'
                    }`} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

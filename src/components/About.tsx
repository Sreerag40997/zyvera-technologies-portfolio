import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Eye, Layers, Settings, Users, ArrowUpRight, Cpu } from 'lucide-react';

export default function About() {
  const whyChooseUs = [
    {
      icon: Cpu,
      title: 'Innovative Solutions',
      description: 'We use the latest technologies to create modern and future-ready digital products.'
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Our skilled developers and designers deliver high-quality solutions with industry best practices.'
    },
    {
      icon: Layers,
      title: 'Scalable Architecture',
      description: 'We build systems designed for performance, scalability, and long-term growth.'
    },
    {
      icon: Target,
      title: 'Client-Centric Approach',
      description: 'We focus on understanding client requirements and delivering customized solutions that create real business value.'
    },
    {
      icon: Settings,
      title: 'End-to-End Development',
      description: 'From planning and design to development, deployment, and support — we handle everything.'
    }
  ];

  const technologies = [
    'React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'Python', 
    'FastAPI', 'Flutter', 'React Native', 'MySQL', 'MongoDB', 
    'AWS', 'Docker', 'AI & Machine Learning'
  ];  return (
    <section 
      id="about" 
      className="py-24 bg-brand-card relative border-t border-brand-border/60"
    >
      {/* Subtle backdrop flare matching brand cyber blue */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(10,132,255,0.04)_0%,transparent_70%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Company Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 text-left">
          
          {/* Left Column: Company overview block */}
          <div className="lg:col-span-6 sticky top-28">
            <span className="text-[10px] tracking-[0.25em] font-mono text-brand-accent-blue font-bold uppercase block mb-3">
              About Zyvera
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight leading-tight mb-6 animate-fade-in">
              Building Future-Ready<br />Software Solutions
            </h2>
            <p className="text-sm text-brand-muted font-sans font-light leading-relaxed mb-6">
              <strong>Zyvera Technologies</strong> is a modern software development company focused on delivering high-quality digital products tailored to business needs. Our team combines creativity, technology, and innovation to create powerful applications that improve efficiency, customer engagement, and business growth.
            </p>
            <p className="text-sm text-brand-muted font-sans font-light leading-relaxed mb-8">
              We work with startups, enterprises, and growing businesses to develop secure, scalable, and user-friendly software solutions using the latest technologies and industry standards.
            </p>

            {/* Quick trust banner highlighted in cyber blue */}
            <div className="bg-brand-bg rounded-xl border border-brand-border p-5 flex items-center gap-4 mb-8">
              <div className="p-2.5 bg-brand-accent-blue/10 rounded-lg border border-brand-accent-blue/20 text-brand-accent-blue">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">Quality Verified Standards</h4>
                <p className="text-[11px] text-brand-muted mt-1">Clean, standard-compliant git flows & strict QA verification loops on every branch.</p>
              </div>
            </div>

            {/* Newly added tech/coding image for the About Us panel visual reinforcement */}
            <div className="relative rounded-xl overflow-hidden border border-brand-border/80 bg-black shadow-xl">
              <img 
                src="/src/assets/images/cyber_network_1779357419121.png" 
                alt="Zyvera Cloud Infrastructure Solutions" 
                className="w-full h-52 sm:h-64 object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                <span className="text-[10px] font-mono text-brand-accent-blue font-bold tracking-widest uppercase">System Operations</span>
                <p className="text-xs text-white/90 font-light mt-0.5">Reliable digital network architectures tailored for growth.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Vision, and Tech Stack badges */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Mission & Vision Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-brand-bg border border-brand-border rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-full blur-[30px] pointer-events-none" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-brand-card border border-brand-border text-brand-accent rounded-lg">
                    <Target className="h-4 w-4" />
                  </div>
                  <h3 className="text-xs uppercase font-mono tracking-widest text-white/90 font-bold">Our Mission</h3>
                </div>
                <p className="text-xs text-brand-muted leading-relaxed font-light">
                  To empower businesses with innovative technology solutions that simplify operations, enhance digital presence, and accelerate business growth.
                </p>
              </div>

              <div className="bg-brand-bg border border-brand-border rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-full blur-[30px] pointer-events-none" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-brand-card border border-brand-border text-brand-accent rounded-lg">
                    <Eye className="h-4 w-4" />
                  </div>
                  <h3 className="text-xs uppercase font-mono tracking-widest text-white/90 font-bold">Our Vision</h3>
                </div>
                <p className="text-xs text-brand-muted leading-relaxed font-light">
                  To become a trusted global technology partner known for delivering cutting-edge software solutions and transforming ideas into successful digital products.
                </p>
              </div>
            </div>

            {/* Technologies We Use Panel */}
            <div className="bg-brand-bg border border-brand-border rounded-2xl p-6 relative">
              <div className="flex items-center justify-between border-b border-brand-border pb-3 mb-4">
                <span className="text-[10px] uppercase tracking-widest text-white/90 font-mono font-bold">
                  Technologies We Use
                </span>
                <span className="text-[9px] font-mono text-emerald-400 font-semibold uppercase bg-emerald-500/10 px-2 py-0.5 rounded">
                  Latest Stack
                </span>
              </div>
              <p className="text-xs text-brand-muted mb-4 font-light">
                Our active sandbox utilizes and targets high-performance modular libraries:
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs font-mono bg-brand-card border border-brand-border hover:border-brand-accent/30 text-white/90 px-3 py-1.5 rounded-lg transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Why Choose Us Grid */}
        <div className="border-t border-brand-border/60 pt-20">
          <div className="text-left mb-12 max-w-2xl">
            <span className="text-[10px] tracking-[0.25em] font-mono text-brand-accent font-semibold uppercase block mb-3">
              The Zyvera Edge
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight leading-tight">
              Why Global Partners Choose Us
            </h3>
            <p className="text-xs text-brand-muted mt-2 font-light leading-relaxed">
              We operate as a direct extension of your core executive and engineering team, maintaining absolute visual and architectural excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-brand-bg border border-brand-border hover:border-brand-border*2 rounded-xl p-5 text-left flex flex-col justify-between transition-all"
                >
                  <div className="p-2.5 bg-brand-card border border-brand-border w-max rounded-lg text-brand-accent mb-4">
                    <IconComp className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white tracking-wide mb-1.5">{item.title}</h4>
                    <p className="text-xs text-brand-muted leading-relaxed font-light">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

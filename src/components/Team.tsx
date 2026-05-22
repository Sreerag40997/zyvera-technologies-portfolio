import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Cpu, Code, Layers, Mail, Sparkles, Terminal } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  github?: string;
  linkedin?: string;
  email: string;
  experience: string;
}

export default function Team() {
const teamMembers: TeamMember[] = [
  {
    name: "Sreelakshmi Ajith",
    role: "Founder & Managing Director",
    bio: "Visionary founder leading Zyvera Technologies with a strong focus on business growth, client relationships, operational excellence, and building high-performing teams.",
    image: "/src/assets/images/team_sreelakshmi_1779368475439.jpeg",
    experience: "1 Yr Exp",
    skills: [
      "Leadership",
      "Business Development",
      "Team Management",
      "Client Relations",
      "Operations Management"
    ],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "sreelakshmi@zyvera.com"
  },
  {
    name: "Sreerag T. M.",
    role: "Senior Full-Stack Developer & Project Coordinator",
    bio: "Experienced full-stack engineer specializing in scalable server-side systems, AWS cloud infrastructure, Go microservices, Docker-based deployments, and high-performance React applications.",
    image: "/src/assets/images/team_sreerag_1779368492458.jpeg",
    experience: "4 Yrs Exp",
    skills: [
      "Go (Golang)",
      "React.js",
      "AWS",
      "Docker",
      "Server-Side Development",
      "Project Coordination",
      "System Design"
    ],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "sreerag@zyvera.com"
  },
  {
    name: "Akhil T. V.",
    role: "UI / UX Developer & Designer",
    bio: "Shaping interactive client portals, high-contrast mockups, responsive vector experiences, and pixel-perfect custom corporate websites.",
    image: "/src/assets/images/team_akhil_1779368509724.jpeg",
    experience: "2 Yrs Exp",
    skills: [
      "Figma",
      "UI/UX Design",
      "Tailwind CSS",
      "Prototyping",
      "Framer Motion"
    ],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "akhil@zyvera.com"
  },
  {
    name: "Amal Thomas",
    role: "Senior Full-Stack Engineer",
    bio: "Powerhouse engineer building beautiful user-centric web applications and robust database architectures with Python and React.",
    image: "/src/assets/images/team_amal_1779368524311.jpeg",
    experience: "3 Yrs Exp",
    skills: [
      "Python",
      "React.js",
      "FastAPI",
      "RESTful APIs",
      "SQL Databases",
      "Django"
    ],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "amal@zyvera.com"
  },
  {
    name: "Shyam V.",
    role: "Lead Digital Marketing Specialist",
    bio: "Driving global discoverability and analytics-backed search strategies to bring brand solutions to scale across modern digital hubs.",
    image: "/src/assets/images/team_vishnu_1779368583368.jpeg",
    experience: "2 Yrs Exp",
    skills: [
      "SEO Optimization",
      "Google Ads",
      "Content Strategy",
      "Analytics",
      "Growth Hacking"
    ],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "shyam@zyvera.com"
  },
  {
    name: "Muneer",
    role: "Full-Stack Developer",
    bio: "Crafting lightweight web apps using modern frameworks and rendering engines to ensure exceptional performance.",
    image: "/src/assets/images/team_muneer_1779368565489.jpeg",
    experience: "3 Yrs Exp",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS"
    ],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "muneer@zyvera.com"
  },
  {
    name: "Vishnu",
    role: "Full-Stack Developer",
    bio: "Implementing clean server logic in Python/Django and pairing it with lightning-fast React components.",
    image: "/src/assets/images/team_vishnu_17793685833688.jpeg",
    experience: "3 Yrs Exp",
    skills: [
      "Python",
      "React.js",
      "FastAPI",
      "RESTful APIs",
      "SQL Databases",
      "Django",
      "Git Control"
    ],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "vishnu@zyvera.com"
  },
  {
    name: "Muzammil C.",
    role: "Junior Full-Stack Developer",
    bio: "Detail-oriented junior engineer assisting in creating elegant user interfaces and developing database queries/routes.",
    image: "/src/assets/images/team_muzammil_1779368599214.jpeg",
    experience: "1 Yr Exp",
    skills: [
      "Python",
      "React.js",
      "FastAPI",
      "RESTful APIs",
      "SQL Databases",
      "Django"
    ],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "muzammil@zyvera.com"
  }
];

  return (
    <section 
      id="team" 
      className="py-24 bg-brand-bg relative border-t border-brand-border/60 overflow-hidden"
    >
      {/* Immersive cyber-blue glowing grid lines and circular ambient glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141923_1px,transparent_1px),linear-gradient(to_bottom,#141923_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] -z-20 pointer-events-none opacity-45" />
      <div className="absolute -top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(10,132,255,0.03)_0%,transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute -bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(10,132,255,0.03)_0%,transparent_70%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent-blue/10 border border-brand-accent-blue/20 rounded-full mb-4 select-none"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-accent-blue" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-brand-accent-blue font-bold">
              Engineering Excellence
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-white tracking-tight leading-tight">
            Meet the <span className="text-gradient-blue font-bold">Experts Behind Zyvera</span>
          </h2>
          <p className="text-sm text-brand-muted font-sans font-light mt-4 leading-relaxed max-w-2xl">
            Our specialized team of digital product developers, AI experts, and design system creators work in sync to engineer high-velocity, secure, and beautiful full-stack architectures.
          </p>
        </div>

        {/* Team Bento/Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-brand-card border border-brand-border/80 rounded-2xl p-5 text-left flex flex-col justify-between transition-all hover:border-brand-accent-blue/35 hover:shadow-[0_10px_30px_rgba(10,132,255,0.06)] relative overflow-hidden group"
            >
              {/* Subtle accent corner highlight on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent-blue/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                {/* Team Portrait & Basic Details */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#030303] border border-brand-border mb-5">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Experience Badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#030303]/85 backdrop-blur border border-brand-border rounded-lg text-[9px] font-mono font-bold tracking-wider text-brand-accent-blue">
                    {member.experience}
                  </span>
                  
                  {/* Glowing Status Indicator */}
                  <span className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2 py-0.5 bg-brand-card/90 backdrop-blur border border-brand-border rounded-full">
                    <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[8px] font-mono uppercase font-bold tracking-wide text-white/90">Online</span>
                  </span>
                </div>

                {/* Name and Designation */}
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-brand-accent-blue transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-brand-accent-blue font-mono uppercase tracking-wider mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-xs text-brand-muted leading-relaxed font-sans font-light mb-5">
                  {member.bio}
                </p>

                {/* Skills/Technologies Badges */}
                <div className="mb-6">
                  <h4 className="text-[9px] font-mono uppercase text-white/40 tracking-wider mb-2 font-bold flex items-center gap-1">
                    <Terminal className="h-3 w-3 text-brand-accent-blue" />
                    Core Competence
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="text-[10px] font-mono bg-brand-bg border border-brand-border hover:border-brand-accent-blue/20 text-white/80 px-2 py-1 rounded transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action and Social Links footer */}
              <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                <a 
                  href={`mailto:${member.email}`}
                  className="text-[11px] font-mono text-brand-muted hover:text-brand-accent-blue transition-colors flex items-center gap-1.5"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {member.email}
                </a>

                <div className="flex items-center gap-3">
                  {member.github && (
                    <a 
                      href={member.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-muted hover:text-brand-accent-blue transition-colors p-1"
                      title="GitHub Profile"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-muted hover:text-brand-accent-blue transition-colors p-1"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Live Active Standby Console */}
        <div className="mt-16 bg-brand-card border border-brand-border rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left">
            <div className="p-3 bg-brand-bg rounded-lg border border-brand-border/60 text-brand-accent-blue shrink-0">
              <Code className="h-5 w-5 animate-pulse" />
            </div>
            <div>
              <h4 className="text-xs font-bold font-mono uppercase text-white tracking-wider flex items-center gap-1.5">
                Ready for Custom Direct Assignments
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              </h4>
              <p className="text-xs text-brand-muted mt-1 leading-relaxed font-light">
                Our founders and engineers communicate directly with key executives instantly. No intermediate agents.
              </p>
            </div>
          </div>
          
          <a 
            href="#contact" 
            className="w-full md:w-auto text-center px-5 py-2.5 bg-brand-accent-blue/10 hover:bg-brand-accent-blue/20 text-brand-accent-blue rounded-lg text-xs font-bold uppercase tracking-wider transition-all border border-brand-accent-blue/20 shrink-0"
          >
            Direct Consulting Inquiry
          </a>
        </div>

      </div>
    </section>
  );
}

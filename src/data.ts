import { Project, Job, Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: 'We develop dynamic and scalable software solutions designed to streamline business operations and improve productivity. Our custom applications are built with modern technologies for high performance and security.',
    iconName: 'Code',
    techs: ['React.js', 'Next.js', 'Node.js', 'Python', 'FastAPI', 'MySQL'],
    accentColor: 'from-brand-accent/20 to-brand-accent/5 text-brand-accent'
  },
  {
    id: 'realtime-dev',
    title: 'Real-Time Application Development',
    description: 'We create powerful real-time applications with live data synchronization, instant notifications, WebSocket integration, and seamless user experiences for modern businesses.',
    iconName: 'Clock',
    techs: ['WebSockets', 'Go', 'Node.js', 'Redis', 'Kafka', 'MongoDB'],
    accentColor: 'from-brand-accent/25 to-brand-accent/5 text-brand-accent'
  },
  {
    id: 'ecommerce-dev',
    title: 'eCommerce Development',
    description: 'We build secure and feature-rich eCommerce platforms with online payments, order management, inventory systems, multi-vendor support, mobile-friendly design, and customer analytics.',
    iconName: 'ShoppingCart',
    techs: ['Next.js', 'React.js', 'PostgreSQL', 'Stripe', 'Redis', 'Tailwind CSS'],
    accentColor: 'from-brand-accent/20 to-brand-accent/5 text-brand-accent'
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Application Development',
    description: 'Our team develops high-performance Android and iOS applications with modern UI/UX designs, fast performance, and scalable architecture to deliver exceptional user experiences.',
    iconName: 'Smartphone',
    techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'SQLite', 'Firebase'],
    accentColor: 'from-brand-accent/25 to-brand-accent/5 text-brand-accent'
  },
  {
    id: 'ai-dev',
    title: 'AI-Based Development',
    description: 'We build intelligent AI-powered solutions including AI chatbots, automation systems, recommendation engines, predictive analytics, AI integrations, and smart business solutions.',
    iconName: 'Cpu',
    techs: ['Python', 'FastAPI', 'PyTorch', 'TensorFlow', 'OpenAI', 'LangChain'],
    accentColor: 'from-brand-accent/20 to-brand-accent/5 text-brand-accent'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'We help brands grow online through social media marketing, SEO, performance marketing, brand promotion, content marketing, and lead generation campaigns.',
    iconName: 'Megaphone',
    techs: ['SEO Optimization', 'Performance Marketing', 'Social Media', 'Lead Generation', 'Google Analytics'],
    accentColor: 'from-brand-accent/25 to-brand-accent/5 text-brand-accent'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'VeloCart: Dynamic E-Commerce',
    description: 'A lightning-fast, headless e-commerce system with real-time stock-validation limits, a checkout funnel designed for sudden traffic spikes, and secure payment handling.',
    category: 'e-commerce',
    tags: ['React', 'Node.js', 'Redis', 'PostgreSQL', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    metrics: { label: 'Transaction Speed', value: '< 180ms' },
    isFeatured: true
  },
  {
    id: 'proj-2',
    title: 'AetherSync: Real-Time Collaborative Canvas',
    description: 'An interactive virtual space designed for engineering teams to draw flowcharts, coordinate schedules, and assign tasks with live socket synchronization.',
    category: 'real-time',
    tags: ['Go', 'TypeScript', 'WebSockets', 'Canvas API', 'Redis'],
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    metrics: { label: 'Socket Sync Latency', value: '14ms' },
    isFeatured: true
  },
  {
    id: 'proj-3',
    title: 'Zyvera Ride: Real-Time Logistics',
    description: 'A native-powered iOS and Android mobile application targeting local parcel delivery, showing precise turn-by-turn vehicle locations and automated route dispatching.',
    category: 'mobile',
    tags: ['React Native', 'Python AI', 'Google Maps API', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    metrics: { label: 'Route Match Speed', value: '0.4s' },
    isFeatured: true
  },
  {
    id: 'proj-4',
    title: 'PulseDesk: Real-Time Helpdesk Analytics',
    description: 'An enterprise-scale ticket dashboard that parses user messages using a Python NLP server and instantly notifies triage agents of critical SLA levels.',
    category: 'real-time',
    tags: ['TypeScript', 'Python AI', 'FastAPI', 'Redis', 'WebSockets'],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    metrics: { label: 'Ticket Classify Accuracy', value: '98.4%' },
    isFeatured: false
  },
  {
    id: 'proj-5',
    title: 'NovaScent Mobile E-Commerce',
    description: 'An elegant, luxury-branded shopping mobile application with support for offline catalog navigation, interactive product reviews, and personal profile analytics.',
    category: 'mobile',
    tags: ['React Native', 'Tailwind', 'Stripe API', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    metrics: { label: 'Mobile Conversion Rate', value: '+4.2%' },
    isFeatured: false
  },
  {
    id: 'proj-6',
    title: 'CognitiveStream: AI Predictive Anomalies',
    description: 'Continuous monitoring server analyzing high-throughput sensor telemetry. Triggers emergency alerts on structural faults before failures occur.',
    category: 'real-time',
    tags: ['Python', 'Kafka', 'TensorFlow', 'PostgreSQL', 'Docker'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    metrics: { label: 'Sensor Limit', value: '10,000 msg/s' },
    isFeatured: false
  }
];

export const JOBS: Job[] = [
  {
    id: 'job-1',
    title: 'Senior Full-Stack Engineer (React & Node.js)',
    department: 'Development',
    location: 'Remote, Global (UT+5 to UT-5)',
    type: 'Full-time',
    experience: '5+ Years',
    salaryRange: '$110k - $140k',
    description: 'We are seeking an expert developer to handle core elements of our high-concurrent real-time and e-commerce project pipelines. Design, implement, and optimize backend systems.',
    requirements: [
      'Strong proficiency in TypeScript, React, and Node.js backend frameworks.',
      'Experience setting up transactional systems, WebSockets, or high-throughput queues.',
      'Familiarity with PostgreSQL database schema optimization and caching with Redis.'
    ],
    benefits: [
      'Flexible remote schedule with core hours alignment.',
      'Premium hardware allowance (Apple MacBook Pro of choice).',
      'annual education, conference, and course budget ($2,500).'
    ]
  },
  {
    id: 'job-2',
    title: 'Python AI & Intelligent Agents Specialist',
    department: 'AI & Data',
    location: 'Remote / Bangalore Hybrid',
    type: 'Full-time',
    experience: '3+ Years',
    salaryRange: '$95k - $125k',
    description: 'Join our research and product team to implement secure machine learning pipelines, LLM-orchestrated autonomous agents, and predictive telemetry analysis.',
    requirements: [
      'Deep expertise in Python, FastAPI, Pandas, and machine learning frameworks (PyTorch or TensorFlow).',
      'Familiarity with fine-tuning models, prompt engineering, or vector database search patterns.',
      'Clean coding practices with tests and continuous integration pipelines.'
    ],
    benefits: [
      'Work alongside high-caliber experts on cutting-edge product implementations.',
      'Full health insurance coverage & visual care allocations.',
      'Company shares options vesting schedule.'
    ]
  },
  {
    id: 'job-3',
    title: 'Lead UI/UX Brand Architect',
    department: 'Design',
    location: 'Remote / London Office Choice',
    type: 'Contract',
    experience: '4+ Years',
    salaryRange: '$80/hr - $110/hr',
    description: 'We are looking for a visual craftsman to lead user testing, wireframe creation, and system design architecture for premium high-fidelity enterprise panels.',
    requirements: [
      'A breathtaking portfolio showcasing actual design systems, high-contrast aesthetics, and clear spacing.',
      'Deep expertise in Figma, components grouping, autolayout, prototyping, and developer handoff grids.',
      'Familiarity with frontend frameworks (knowing React / Tailwind is a massive plus).'
    ],
    benefits: [
      'Engage with prestigious global clients spanning dynamic e-commerce and real-time systems.',
      'Direct conversion potential to a full-time partner status.',
      'Paid annual team retreat (prev: Lisbon).'
    ]
  },
  {
    id: 'job-4',
    title: 'Senior Mobile Applications Engineer (React Native)',
    department: 'Development',
    location: 'Remote',
    type: 'Full-time',
    experience: '4+ Years',
    salaryRange: '$100k - $125k',
    description: 'Lead mobile app development targeting real-time package delivery tracking, dynamic booking services, and interactive e-commerce systems.',
    requirements: [
      'Proven history of shipping premium React Native applications on App Store and Play Store.',
      'Rich experience optimizing offline-first capabilities, complex animations, and localized encryption.',
      'Familiarity with native code bridging (Swift, Kotlin) for background calculations.'
    ],
    benefits: [
      'Gym & wellness stipend ($100 / month).',
      'Flexible time-off policy (minimum 25 days/year).',
      'Fully matched retirement pension program.'
    ]
  },
  {
    id: 'job-5',
    title: 'Python Software Engineer (Paid Internship Program)',
    department: 'Development',
    location: 'Remote / Bangalore Hybrid',
    type: 'Full-time',
    experience: 'Entry Level / Python Enthusiast',
    salaryRange: '$1,500 - $2,500 / month',
    description: 'We are seeking talented Python self-starters and graduates for a hands-on Paid Internship Program. You will write code for intelligent agents, API endpoints, microservices, and actual business data processing pipelines alongside our principal engineers.',
    requirements: [
      'Solid command of Python syntax, data structures, and standard libraries.',
      'Familiarity with at least one Python web framework (e.g., FastAPI, Flask, or Django).',
      'Eagerness to learn clean database operations (SQL/PostgreSQL) and Git-based code workflows.'
    ],
    benefits: [
      'Direct, day-to-day mentorship from expert software architects.',
      'A clear pathway to transition into a permanent full-time Junior Developer role on graduation or review.',
      'Paid monthly stipend and top-tier workspace equipment allowance.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Sarah Jenkins',
    role: 'VP of Product',
    company: 'Aether Group',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    quote: "Zyvera Technologies transitioned our legacy application into a highly performant, real-time collaboration canvas in weeks. Their developers communicate perfectly and understand real performance bottlenecks.",
    rating: 5
  },
  {
    id: 't-2',
    name: 'Marcus Kael',
    role: 'Founder & CEO',
    company: 'NovaScent Inc',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    quote: "Connecting our e-commerce platform with Zyvera's headless engine quadrupled our desktop loading performance. Their high-fidelity design work elevated our entire luxury brand aesthetic.",
    rating: 5
  },
  {
    id: 't-3',
    name: 'David Chen',
    role: 'Chief Technology Officer',
    company: 'UrbanExpress Logistics',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    quote: "Using Zyvera's custom Python routing optimization engine, we cut fuel and delivery routing costs by 18%. The real-time driver mobile app runs continuously without a single failure.",
    rating: 5
  }
];

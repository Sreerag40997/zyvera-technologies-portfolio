export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'real-time' | 'e-commerce' | 'mobile';
  tags: string[];
  image: string;
  metrics?: { label: string; value: string };
  isFeatured?: boolean;
}

export interface Job {
  id: string;
  title: string;
  department: 'Development' | 'Design' | 'AI & Data' | 'Marketing';
  location: string;
  type: 'Full-time' | 'Contract' | 'Remote';
  experience: string;
  salaryRange: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to look up Lucide icons dynamically
  techs: string[];
  accentColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

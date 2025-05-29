import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import AnimatedCard from '../common/AnimatedCard';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern E-commerce Platform',
      category: 'development',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A comprehensive e-commerce solution with seamless payment integration and inventory management.'
    },
    {
      id: 2,
      title: 'Financial Growth Strategy',
      category: 'consulting',
      image: 'https://images.pexels.com/photos/7681387/pexels-photo-7681387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Strategic business planning for a fintech startup, resulting in 150% growth within 6 months.'
    },
    {
      id: 3,
      title: 'Restaurant Booking System',
      category: 'development',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'An intuitive reservation platform that increased bookings by 35% for a restaurant chain.'
    },
    {
      id: 4,
      title: 'Market Expansion Plan',
      category: 'consulting',
      image: 'https://images.pexels.com/photos/6476259/pexels-photo-6476259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Comprehensive market analysis and entry strategy for a retail business expanding to new territories.'
    },
    {
      id: 5,
      title: 'Healthcare Patient Portal',
      category: 'development',
      image: 'https://images.pexels.com/photos/9401465/pexels-photo-9401465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A secure, HIPAA-compliant patient management system with telehealth capabilities.'
    },
    {
      id: 6,
      title: 'Operational Efficiency Audit',
      category: 'consulting',
      image: 'https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Process optimization that reduced operational costs by 25% for a manufacturing client.'
    }
  ];
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'development', label: 'Web Development' },
    { id: 'consulting', label: 'Business Consulting' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-accent-50 dark:bg-neutral-800">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Our Portfolio"
          subtitle="Explore a selection of our recent projects and success stories."
        />
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-white dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedCard key={project.id} delay={index} className="group">
              <div className="bg-white dark:bg-neutral-700 rounded-xl overflow-hidden shadow-soft transition-all duration-300 hover:shadow-medium h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <div className="aspect-w-16 aspect-h-10 bg-neutral-200 dark:bg-neutral-600">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href="#" 
                      className="text-white flex items-center gap-2 font-medium"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-1">
                    <span className="text-xs font-medium uppercase tracking-wider text-primary-500 dark:text-primary-400">
                      {project.category === 'development' ? 'Web Development' : 'Business Consulting'}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-medium mb-3 text-neutral-900 dark:text-neutral-100">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm flex-grow">
                    {project.description}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
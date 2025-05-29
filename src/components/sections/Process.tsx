import React from 'react';
import SectionHeading from '../common/SectionHeading';
import AnimatedCard from '../common/AnimatedCard';
import { Search, Users, Lightbulb, Code, CheckCircle, Repeat } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, icon, delay }) => {
  return (
    <AnimatedCard delay={delay} className="relative">
      <div className="flex">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 text-white text-xl font-semibold">
            {number}
          </div>
        </div>
        <div className="ml-6">
          <div className="flex items-center mb-2">
            <span className="text-primary-500 mr-3">{icon}</span>
            <h3 className="font-display text-xl font-medium text-neutral-900 dark:text-neutral-100">
              {title}
            </h3>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      {number < 6 && (
        <div className="absolute left-6 top-12 h-full w-px bg-primary-200 dark:bg-primary-800/40 ml-0 z-0"></div>
      )}
    </AnimatedCard>
  );
};

const Process: React.FC = () => {
  const processSteps = [
    {
      number: 1,
      title: 'Discovery',
      description: 'We start by understanding your business, goals, challenges, and vision through in-depth consultation.',
      icon: <Search size={22} />
    },
    {
      number: 2,
      title: 'Analysis',
      description: 'Our team analyzes your needs and identifies opportunities for improvement and growth.',
      icon: <Users size={22} />
    },
    {
      number: 3,
      title: 'Strategy',
      description: 'We develop a comprehensive strategy tailored to your specific business objectives.',
      icon: <Lightbulb size={22} />
    },
    {
      number: 4,
      title: 'Implementation',
      description: 'Our experts bring the strategy to life, building elegant solutions that solve real problems.',
      icon: <Code size={22} />
    },
    {
      number: 5,
      title: 'Launch & Review',
      description: 'We ensure a smooth launch and review performance against key metrics.',
      icon: <CheckCircle size={22} />
    },
    {
      number: 6,
      title: 'Refinement',
      description: 'Continuous improvement based on feedback and data to optimize your business outcomes.',
      icon: <Repeat size={22} />
    }
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Our Process"
          subtitle="We follow a proven methodology to deliver exceptional results for your business."
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12 md:space-y-16">
            {processSteps.map((step, index) => (
              <ProcessStep 
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                delay={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
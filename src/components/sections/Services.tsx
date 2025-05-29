import React from 'react';
import { BarChart, Globe, TrendingUp, PenTool, Users, MessageSquare } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import AnimatedCard from '../common/AnimatedCard';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <AnimatedCard delay={delay} className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-soft transition-all duration-300 hover:shadow-medium group">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-500 mb-5 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="font-display text-xl font-medium mb-3 text-neutral-900 dark:text-neutral-100">
        {title}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </AnimatedCard>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <BarChart size={24} />,
      title: 'Business Strategy',
      description: 'We analyze your business needs and create comprehensive strategies to enhance growth and efficiency.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Web Development',
      description: 'Our team builds elegant, responsive websites and web applications tailored to your business goals.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Digital Marketing',
      description: 'Strategic campaigns that increase your online presence and drive targeted traffic to your business.'
    },
    {
      icon: <PenTool size={24} />,
      title: 'Brand Identity',
      description: 'We craft distinctive visual identities that communicate your brand\'s values and resonate with your audience.'
    },
    {
      icon: <Users size={24} />,
      title: 'Team Workshops',
      description: 'Interactive sessions designed to align your team, solve problems, and foster innovation.'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Ongoing Support',
      description: 'Continuous guidance and technical support to ensure your business thrives in the digital landscape.'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-accent-50 dark:bg-neutral-800">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Our Services"
          subtitle="We offer a comprehensive range of business development and web services to help your business thrive."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
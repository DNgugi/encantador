import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'center',
  className = '',
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`max-w-3xl mb-12 md:mb-16 ${alignmentClasses[alignment]} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mt-4 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 bg-primary-500 mt-6 ${alignment === 'center' ? 'mx-auto' : ''}`}></div>
    </motion.div>
  );
};

export default SectionHeading;
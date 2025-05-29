import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-24 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-accent-100 dark:bg-neutral-900 z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-noise"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-primary-500/5 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-radial from-secondary-500/5 to-transparent opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-neutral-900 dark:text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Elegant <span className="text-primary-500">Solutions</span> for Modern Businesses
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We create charming, effective solutions that help businesses thrive both online and offline through expert consulting and web development.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button href="#services" variant="primary" size="lg">
                Explore Services
              </Button>
              <Button href="#portfolio" variant="outline" size="lg">
                View Our Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-lg lg:max-w-xl aspect-square">
              <div className="absolute inset-0 bg-primary-500 rounded-2xl transform -rotate-6"></div>
              <div className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-2xl transform rotate-3 overflow-hidden shadow-medium">
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Encantador Studio Team Collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.a 
          href="#services"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-medium text-neutral-500 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}
          aria-label="Scroll down"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
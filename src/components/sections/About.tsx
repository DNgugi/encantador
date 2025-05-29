import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="About Us"
          subtitle="We're a dynamic duo combining technical expertise with business acumen."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-primary-100 dark:bg-primary-900/20 rounded-lg z-0"></div>
              <img
                src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="The Encantador Studio team"
                className="relative z-10 rounded-lg shadow-medium w-full"
              />
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-secondary-100 dark:bg-secondary-900/20 rounded-lg z-0"></div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-medium text-neutral-900 dark:text-neutral-100 mb-6">
              We create elegant solutions that help businesses thrive
            </h3>

            <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
              Conceptualised in January 2025, Encantador Studio is a boutique
              consulting and development agency formed by two passionate
              professionals—a software developer and a business development
              consultant—united by a common vision.
            </p>

            <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
              We believe that business success comes from the perfect balance
              between technical excellence and strategic business thinking. Our
              approach combines deep technical knowledge with business acumen to
              create solutions that are not just functional, but transformative.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-display font-medium text-lg mb-2 text-neutral-900 dark:text-neutral-100">
                  Our Mission
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400">
                  To empower businesses with elegant, effective solutions that
                  enhance performance and create lasting value.
                </p>
              </div>

              <div>
                <h4 className="font-display font-medium text-lg mb-2 text-neutral-900 dark:text-neutral-100">
                  Our Vision
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400">
                  To become the trusted partner for businesses seeking to
                  transform their digital presence and operational efficiency.
                </p>
              </div>
            </div>

            <Button href="#contact" variant="primary">
              Get to Know Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { Briefcase, Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-800 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase size={24} className="stroke-primary-500" />
              <span className="text-xl font-display font-semibold text-primary-500">
                Encantador
              </span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-md">
              We create elegant, charming solutions that help businesses perform
              better, both online and offline.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-600 hover:text-primary-500 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-neutral-600 hover:text-primary-500 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-neutral-600 hover:text-primary-500 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:hello@encantador.studio"
                className="text-neutral-600 hover:text-primary-500 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-neutral-600 hover:text-primary-500 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
                >
                  Business Consulting
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-neutral-600 hover:text-primary-500 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-neutral-600 hover:text-primary-500 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
                >
                  Digital Strategy
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-neutral-600 hover:text-primary-500 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
                >
                  Brand Identity
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-medium mb-4">Contact</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-2">
              hello@encantador.co
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mb-2">
              +852 6055 8509
            </p>

            {/* <p className="text-neutral-600 dark:text-neutral-400">
              123 Business Avenue<br />
              Suite 456<br />
              San Francisco, CA 94103
            </p> */}
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {currentYear} Encantador Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-500 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-primary-500 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary-500 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

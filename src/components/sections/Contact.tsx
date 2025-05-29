import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string;
  link?: string;
}

const ContactInfoCard: React.FC<ContactInfo> = ({
  icon,
  title,
  details,
  link,
}) => {
  return (
    <div className="flex items-start p-4">
      <div className="flex-shrink-0 mt-1">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-500">
          {icon}
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-1">
          {title}
        </h3>
        {link ? (
          <a
            href={link}
            className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            {details}
          </a>
        ) : (
          <p className="text-neutral-600 dark:text-neutral-400">{details}</p>
        )}
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the form submission, e.g., sending to an API
    console.log(formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      details: "hello@encantador.co",
      link: "mailto:hello@encantador.co",
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      details: "+852 6055 8509",
      link: "tel:+85260558509",
    },
    // {
    //   icon: <MapPin size={20} />,
    //   title: "Office",
    //   details: "28 Don Bosco Road, Cheung Chau, Hong Kong",
    // },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-white dark:bg-neutral-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind or want to learn more? We'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-accent-50 dark:bg-neutral-800 rounded-xl p-6 md:p-8 shadow-soft mb-8">
              <h3 className="font-display text-2xl font-medium mb-6 text-neutral-900 dark:text-neutral-100">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <ContactInfoCard
                    key={index}
                    icon={info.icon}
                    title={info.title}
                    details={info.details}
                    link={info.link}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-xl overflow-hidden h-64 shadow-soft">
              {/* In a real implementation, you would include an actual map here */}
              <div className="w-full h-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-neutral-500 dark:text-neutral-400">
                <span className="text-center px-4">
                  Map would be displayed here
                  <br />
                  (Google Maps or similar integration)
                </span>
              </div>
            </div> 
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 md:p-8 shadow-soft">
              <h3 className="font-display text-2xl font-medium mb-6 text-neutral-900 dark:text-neutral-100">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="Business Consulting">
                      Business Consulting
                    </option>
                    <option value="Web Development">Web Development</option>
                    <option value="Partnership">Partnership</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 transition-colors"
                  ></textarea>
                </div>

                <div>
                  <Button type="submit" variant="primary" size="lg" fullWidth>
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "../data/content";
import { siteConfig } from "../config/config";

const FAQ = () => {
  const [openItem, setOpenItem] = useState(0);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {content.faq.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {content.faq.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {content.faq.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left flex items-center justify-between p-2 focus:outline-none"
                >
                  <h3 className="text-xl font-semibold text-white pr-4">
                    {item.question}
                  </h3>
                  <motion.svg
                    animate={{ rotate: openItem === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 text-white flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {openItem === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-2 pb-2 pt-4 border-t border-white/10">
                        <p className="text-white/80 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Can't find the answer you're looking for? Get in touch with our
              support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg">Contact Support</button>
              <a
                href={siteConfig.links.appStore.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg"
              >
                Download Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

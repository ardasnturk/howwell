import { motion } from "framer-motion";
import { content } from "../data/content";
import { siteConfig } from "../config/config";
import ScreenshotGallery from "../components/ScreenshotGallery";

const HowItWorks = () => {
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
              {content.howItWorks.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {content.howItWorks.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {content.howItWorks.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="card">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white text-purple-600 rounded-full flex items-center justify-center font-bold text-xl mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-white/80 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Steps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-white/80">
              Take a look at How Well's beautiful interface
            </p>
          </motion.div>

          <ScreenshotGallery />
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Download How Well now and start your knowledge journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={siteConfig.links.appStore.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg"
              >
                Download for iOS
              </a>
              <a
                href={siteConfig.links.appStore.android}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg"
              >
                Download for Android
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { content } from "../data/content";
import { siteConfig } from "../config/config";
import ScreenshotGallery from "../components/ScreenshotGallery";

const Home = () => {
  const scrollToScreenshots = () => {
    document
      .getElementById("screenshots")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">{content.home.hero.title}</span>
              <br />
              <span className="text-white">{content.home.hero.appName}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
              {content.home.hero.subtitle}
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              {content.home.hero.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={siteConfig.links.appStore.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              {content.home.hero.downloadButton}
            </a>
            <button
              onClick={scrollToScreenshots}
              className="btn-secondary text-lg"
            >
              {content.home.hero.learnMoreButton}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              {content.home.features.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.home.features.items.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {content.home.screenshots.title}
            </h2>
            <p className="text-xl text-white/80">
              {content.home.screenshots.subtitle}
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
              Ready to Test Your Knowledge?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join thousands of users who are already challenging themselves
              with How Well.
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

export default Home;

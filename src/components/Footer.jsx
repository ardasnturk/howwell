import { Link } from "react-router-dom";
import { content } from "../data/content";
import { siteConfig } from "../config/config";

const Footer = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={siteConfig.images.appIcon}
                alt="How Well App Icon"
                className="h-10 w-10 rounded-lg"
              />
              <span className="text-xl font-bold text-white">How Well</span>
            </div>
            <p className="text-white/80 text-sm mb-4">
              {content.footer.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.links.appStore.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Download for iOS
              </a>
              <a
                href={siteConfig.links.appStore.android}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                Download for Android
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  {content.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  {content.nav.howItWorks}
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  {content.nav.faq}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  {content.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={siteConfig.links.legal.privacy}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  {content.footer.links.privacy}
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  {content.footer.links.terms}
                </a>
              </li>
              <li>
                <Link
                  to={siteConfig.links.legal.support}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  {content.footer.links.support}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <p className="text-white/60 text-sm text-center">
            {content.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

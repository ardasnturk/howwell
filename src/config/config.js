export const siteConfig = {
  // Site bilgileri
  site: {
    name: "How Well",
    description:
      "The ultimate trivia app that challenges your knowledge across various topics",
    url: "https://howwell.ardasenturk.de",
    author: "How Well Team",
    email: "ardasnturk@me.com",
  },

  // Sosyal medya ve store linkleri
  links: {
    appStore: {
      ios: "https://apps.apple.com/app/how-well/id123456789", // iOS App Store linki
      android: "https://play.google.com/store/apps/details?id=com.howwell.app", // Google Play Store linki
    },
    social: {
      twitter: "https://twitter.com/howwellapp",
      facebook: "https://facebook.com/howwellapp",
      instagram: "https://instagram.com/howwellapp",
    },
    legal: {
      privacy: "/privacy-policy",
      terms: "/terms-of-service",
      support: "/contact",
    },
  },

  // Resim yolları
  images: {
    appIcon: "/app-icon.png",
    screenshots: [
      "/store-screens/01.png",
      "/store-screens/02.png",
      "/store-screens/04.png",
      "/store-screens/05.png",
      "/store-screens/07.png",
    ],
  },

  // Tema ayarları
  theme: {
    colors: {
      primary: {
        start: "#667eea",
        end: "#764ba2",
      },
    },
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },

  // Animasyon ayarları
  animations: {
    duration: {
      fast: 0.3,
      normal: 0.5,
      slow: 0.8,
    },
    easing: "ease-out",
  },

  // SEO ayarları
  seo: {
    keywords: "trivia, quiz, knowledge, mobile app, games, questions, answers",
    ogImage: "/app-icon.png",
  },

  // Özellikler (features)
  features: {
    enabled: {
      animations: true,
      darkMode: false,
      i18n: false,
    },
  },
};

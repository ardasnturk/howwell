# How Well - Onboarding Website

A modern, responsive onboarding website for the How Well trivia app, built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Beautiful gradient backgrounds and glassmorphism effects
- **Responsive**: Mobile-first design that works on all devices
- **Fast**: Built with Vite for lightning-fast development and builds
- **Accessible**: Semantic HTML and proper ARIA labels
- **Animated**: Smooth animations using Framer Motion
- **SEO Optimized**: Proper meta tags and structured content

## 🛠️ Tech Stack

- **React 18**: Modern React with functional components and hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animations and transitions
- **React Router**: Client-side routing
- **GitHub Pages**: Static site hosting

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Footer.jsx      # Footer component
│   └── ScreenshotGallery.jsx  # Image gallery
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── HowItWorks.jsx  # How it works page
│   ├── FAQ.jsx         # FAQ page
│   └── Contact.jsx     # Contact page
├── data/               # Static content
│   └── content.js      # Text content (i18n ready)
├── utils/              # Utility functions
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd how-well-home-page
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🎨 Customization

### Colors and Theme

The theme colors are defined in `tailwind.config.js`:

```js
colors: {
  primary: {
    start: '#667eea',
    end: '#764ba2',
  }
}
```

### Content

All text content is centralized in `src/data/content.js` for easy updates and future i18n support.

### Images

- App icon: `public/app-icon.png`
- Screenshots: `public/images/store-screens/`

## 📱 Pages

- **Home**: Hero section, features, and screenshot gallery
- **How It Works**: Step-by-step guide with visuals
- **FAQ**: Accordion-style frequently asked questions
- **Contact**: Contact form and information

## 🚀 Deployment

### GitHub Pages

1. Update the `base` path in `vite.config.js` to match your repository name:

```js
base: '/your-repo-name/',
```

2. Update the `basename` in `src/main.jsx`:

```js
<BrowserRouter basename="/your-repo-name">
```

3. Build and deploy:

```bash
npm run build
npm run deploy
```

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service:

- Netlify
- Vercel
- Firebase Hosting
- AWS S3

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact [hello@howwell.app](mailto:hello@howwell.app).

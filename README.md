# 🎵 MusicConnect

A modern platform connecting venues with musical artists for seamless booking and secure transactions.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-06b6d4?logo=tailwindcss)](https://tailwindcss.com/)

## 📖 Overview

MusicConnect is a web-based platform designed to bridge the gap between entertainment venues (bars, event spaces, concert halls) and musical artists/bands. The platform facilitates quick contract negotiations and provides simple, secure monetary transfers through an escrow-based payment system.

**Key Differentiators:**

- 🎯 Smart matchmaking algorithm based on genre, location, and budget
- 🔒 Secure escrow payment system protecting both parties
- ⚡ Streamlined booking process from discovery to contract
- ⭐ Reputation system with verified reviews
- 📅 Integrated availability and calendar management

## ✨ Features

### For Musicians & Bands

- **Professional Portfolio**: Showcase your work with photos, videos, and streaming links
- **Availability Management**: Control your schedule and pricing per date
- **Guaranteed Payment**: Escrow system ensures payment upon show completion
- **Discovery Tools**: Get found by venues searching for your style and location

### For Venues & Contractors

- **Verified Artists**: Browse portfolios, reviews, and performance history
- **Secure Contracting**: Digital contracts and platform-mediated payments
- **Smart Recommendations**: AI-powered suggestions based on event type and preferences
- **Attendance Guarantee**: Platform ensures artist commitment

### Platform Features

- **Real-time Search**: Filter by genre, location, availability, and price range
- **Rating System**: Build reputation through verified post-event reviews
- **Multi-device Responsive**: Optimized for desktop, tablet, and mobile
- **Modern UI/UX**: Glassmorphic design with smooth animations

## 🛠️ Tech Stack

### Frontend

- **Framework**: React 18.3 with TypeScript 5.7
- **Build Tool**: Vite 6.0
- **Styling**: TailwindCSS 3.4 with custom design system
- **Routing**: React Router DOM 7.1
- **UI Components**: Custom component library with CVA
- **Icons**: Lucide React

### Development Tools

- **Type Checking**: TypeScript with strict mode
- **CSS Processing**: PostCSS with Autoprefixer
- **Linting**: ESLint with TypeScript support
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd MusicConnect
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command           | Description                                         |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Start development server with hot reload            |
| `npm run build`   | Build production bundle with TypeScript compilation |
| `npm run preview` | Preview production build locally                    |
| `npm run lint`    | Run ESLint to check code quality                    |

## 📁 Project Structure

```
MusicConnect/
├── docs/                    # Documentation files
│   └── MVP.md              # MVP specification
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Base UI components (Button, Card, Badge, etc.)
│   │   └── Header.tsx     # Navigation header
│   ├── pages/             # Page components
│   ├── lib/               # Utility functions
│   ├── Index.tsx          # Landing page
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles and Tailwind directives
├── public/                # Static assets
├── index.html             # HTML entry point
├── vite.config.ts         # Vite configuration
├── tailwind.config.cjs    # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## 🎨 Design System

The application features a custom design system with:

- **Color Palette**:
  - Primary (Purple): `#8B5CF6` - Musicians and primary actions
  - Secondary (Blue): `#3B82F6` - Contractors and secondary actions
  - Accent (Pink): `#EC4899` - Highlights and CTAs

- **Typography**: System font stack with optimal readability
- **Components**: Reusable component library with class-variance-authority
- **Responsive Design**: Mobile-first approach with breakpoints at sm/md/lg/xl
- **Animations**: Smooth transitions and micro-interactions

## 🔧 Configuration

### Environment Variables

Currently, the application runs client-side only. Future backend integration will require:

```env
VITE_API_URL=<backend-api-url>
VITE_STRIPE_PUBLIC_KEY=<stripe-key>
```

### Tailwind Configuration

Custom theme extensions in `tailwind.config.cjs`:

- Brand colors (primary, secondary, accent)
- Custom button variants (musical, hero)
- Extended spacing and border radius
- Custom animations

## 🏗️ Build & Deployment

### Production Build

```bash
npm run build
```

Outputs optimized static files to `dist/`:

- Minified and tree-shaken JavaScript
- Optimized CSS with PurgeCSS
- Asset optimization and hashing

### Deployment

The application is a static site and can be deployed to:

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Build and push `dist/` to gh-pages branch
- **AWS S3 + CloudFront**: Upload `dist/` to S3 bucket

## 🗺️ Roadmap

- [ ] Backend API development
- [ ] User authentication and authorization
- [ ] Musician/venue profile management
- [ ] Booking and contract system
- [ ] Escrow payment integration (Stripe)
- [ ] Real-time messaging
- [ ] Review and rating system
- [ ] Calendar integration
- [ ] Mobile apps (React Native)

See [docs/MVP.md](docs/MVP.md) for detailed MVP specifications.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. Unauthorized copying or distribution is prohibited.

## 📧 Contact

For inquiries about the platform, please reach out through the contact form on the website.

---

**Built with ❤️ and 🎵 for the music community in Brazil**

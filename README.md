# Milkyway - Milk Delivery Management App Landing Page

A modern and visually rich hero section for a milk delivery management app called "Milkyway", built with Next.js and TailwindCSS.

## 🎨 Design Features

- **Two-column layout** with hero text on the left and mobile mockups on the right
- **Modern navbar** with logo, app title, and navigation links
- **Realistic mobile mockups** with app screens and shadows
- **Gradient background** with milk splash overlay
- **Responsive design** for desktop, tablet, and mobile
- **Smooth animations** and hover effects

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Brand Colors

- **Primary Dark**: `#1C3A51`
- **Secondary Dark**: `#1D3243`
- **Accent Blue**: `#0EA2EE`
- **White**: `#FFFFFF`
- **Gray**: `#B7B7B7`

## 📱 Features

- **Navbar**: Logo with milk drop icon, app title "Milkyway", and navigation links
- **Hero Text**: Two-line heading with "Streamline Your" and "Milk Delivery Operations"
- **Subheading**: Descriptive text about the app's purpose
- **Call-to-Action Buttons**: "Get Started" (primary) and "View More" (secondary)
- **Mobile Mockups**: Two angled phone mockups showing app screens
- **Background**: Gradient with milk splash effect

## 🛠️ Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **React Icons** for icons
- **Custom fonts**: Poppins and Itim

## 📦 Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AppScreens.tsx
│   ├── HeroSection.tsx
│   ├── MobileMockup.tsx
│   └── Navbar.tsx
├── public/
│   └── assets/
│       ├── logo.png (place your logo here)
│       ├── image.png (place your hero image here)
│       └── image1.png (place your bottom image here)
├── tailwind.config.js
└── package.json
```

## 🖼️ Image Setup

Before running the project, please add your images to the `public/assets/` folder:

1. **logo.png** - Logo for the navbar (32x32px or higher)
2. **image.png** - Hero section image (600x500px or higher) 
3. **image1.png** - Bottom hero image (1920x400px or higher)

The project is configured to use these images automatically once you place them in the correct location.

## 🎨 Customization

The design is fully customizable through TailwindCSS classes and the custom color palette defined in `tailwind.config.js`. You can easily modify colors, fonts, spacing, and animations to match your brand requirements.

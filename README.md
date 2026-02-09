# 🚀 DevOps Portfolio - Usman Siddique

A modern, cyberpunk-themed portfolio website featuring glassmorphism effects, terminal animations, and smooth interactions.

## 📸 Screenshots

![Desktop Screenshot](screenshots/desktop-view.png)
*Glassmorphic portfolio with terminal animations*
![](screenshots/desktop-view(about-section).png)
![](screenshots/desktop-view(tech-stack-section).png)
![](screenshots/desktop-view(projects-section).png)
![](screenshots/desktop-view(certiications-section).png)
![](screenshots/desktop-view(contact-section).png)

![Mobile Screenshot](screenshots/mobile-view.png)
*Fully responsive on all devices*

---

## ✨ Features

- 💚 **Cyberpunk Design** - Terminal-inspired with neon green accents
- 🎨 **Glassmorphism Effects** - Frosted glass cards with backdrop blur
- ⚡ **Smooth Animations** - Typing effects, floating blobs, smooth scrolling
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- 🎯 **Interactive Elements** - Hover effects, scroll progress indicator
- 🚀 **Fast Loading** - Optimized performance and clean code

---

## 🛠️ Tech Stack

- **Next.js** - React framework for production
- **React** - Component-based UI library
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript/JavaScript** - Type-safe development
- **PostCSS** - CSS transformations and optimizations

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** or **pnpm**

### Local Development

1. **Clone the repository:**
```bash
git clone https://github.com/myselfusman/devops-portfolio.git
cd devops-portfolio
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open browser:**
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```
devops-portfolio/
├── app/                # Next.js app directory
├── components/         # React components
├── lib/                # Utility functions
├── public/             # Static assets (images, etc.)
├── styles/             # Global styles
├── hooks/              # Custom React hooks (if any)
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── package.json        # Dependencies
└── README.md           # This file
```

---

## 🎨 Customization

### Update Your Information

Edit the component files to add your own content:

**Profile Section:**
```jsx
// In your main component file
const name = "YOUR NAME";
const tagline = "Your Role | Your Tagline";
```

**Skills Section:**
```javascript
// In lib/data.js or similar
export const currentSkills = ['Docker', 'Jenkins', 'AWS', 'Git', 'CI/CD'];
export const learningSkills = ['Kubernetes', 'Terraform', 'Ansible'];
```

**Projects:**
```javascript
// In lib/projects.js or similar
export const projects = [
  {
    title: "Your Project Name",
    description: "Project description...",
    tech: ['Next.js', 'Docker', 'AWS'],
    github: "github.com/your-repo"
  }
];
```

**Contact Info:**
Update your contact links in the Contact component.

### Change Colors

Update Tailwind config or CSS variables:

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'primary-green': '#00FF41',
      'secondary-cyan': '#00F3FF',
    }
  }
}
```

---

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json:**
```json
"scripts": {
  "deploy": "next build && next export && gh-pages -d out"
}
```

3. **Update next.config.js:**
```javascript
module.exports = {
  output: 'export',
  images: { unoptimized: true }
}
```

4. **Deploy:**
```bash
npm run deploy
```

5. **Visit:** `https://yourusername.github.io/devops-portfolio`

### Deploy to Netlify

1. Connect your GitHub repo to [Netlify](https://netlify.com)
2. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
3. Click **Deploy**

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to Vercel (Recommended)

**Option 1: GitHub Integration**
1. Push to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Auto-deploys on every push

**Option 2: CLI**
```bash
npm i -g vercel
vercel
```

### Deploy to EC2 / VPS

1. **Build the project:**
```bash
npm run build
```

2. **Upload files:**
```bash
scp -r .next package.json user@your-server:/var/www/portfolio/
```

3. **On server, install and run:**
```bash
cd /var/www/portfolio
npm install --production
npm run start
```

4. **Use PM2 for process management:**
```bash
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 save
```

5. **Configure Nginx as reverse proxy:**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 👨‍💻 About

**Usman Siddique**  
Junior DevOps Engineer | Building, Deploying, Scaling

- 📧 Email: [contact@myselfusman.com](mailto:contact@myselfusman.com)
- 💼 LinkedIn: [linkedin.com/in/myself-usman](https://www.linkedin.com/in/myself-usman/)
- 🐙 GitHub: [github.com/myselfusman](https://github.com/myselfusman)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Inspired by terminal aesthetics and cyberpunk design
- Glassmorphism effects inspired by iOS design
- Color scheme: Matrix green + modern cyan accents

---

<div align="center">

**Built with 💚 by Usman Siddique**

⚡ *Automate everything, deploy with confidence, scale infinitely* ⚡

</div>

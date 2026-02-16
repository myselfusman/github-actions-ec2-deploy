"use client";

import { useEffect, useState, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronDown,
  ExternalLink,
  Award,
  Terminal,
} from "lucide-react";

// Floating Gradient Blobs Background
function FloatingBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="floating-blob absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #00FF41 0%, transparent 70%)",
          top: "10%",
          left: "10%",
        }}
      />
      <div
        className="floating-blob-2 absolute w-[600px] h-[600px] rounded-full opacity-15 blur-[150px]"
        style={{
          background: "radial-gradient(circle, #00F3FF 0%, transparent 70%)",
          top: "50%",
          right: "5%",
        }}
      />
      <div
        className="floating-blob-3 absolute w-[400px] h-[400px] rounded-full opacity-20 blur-[100px]"
        style={{
          background: "radial-gradient(circle, #A855F7 0%, transparent 70%)",
          bottom: "10%",
          left: "30%",
        }}
      />
    </div>
  );
}

// Typing Animation Component
function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span>
      {displayText}
      <span
        className={`typing-cursor text-primary ${showCursor ? "opacity-100" : "opacity-0"}`}
      >
        |
      </span>
    </span>
  );
}

// Scroll Progress Indicator
function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="w-1 h-32 bg-muted/30 rounded-full overflow-hidden">
        <div
          className="w-full bg-gradient-to-b from-primary to-secondary rounded-full transition-all duration-150"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
}

// Navigation
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card !rounded-none py-3" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-primary text-lg font-bold tracking-wider"
        >
          {"<Usman />"}
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["About", "Skills", "Projects", "Certifications", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-4"
    >
      <div
        className={`w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          {/* Terminal Command */}
          <div className="font-mono text-primary mb-6 text-sm md:text-base">
            <span className="text-muted-foreground">$</span> usman --status
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-gradient">USMAN</span>{" "}
            <span className="text-foreground">SIDDIQUE</span>
          </h1>

          {/* Tagline with Typing Effect */}
          <div className="text-lg md:text-xl text-muted-foreground mb-8 h-8">
            <TypingText
              text="Junior DevOps Engineer | Building, Deploying, Scaling"
              delay={500}
            />
          </div>

          {/* Terminal Output */}
          <div className="font-mono text-sm text-muted-foreground mb-10 space-y-1">
            <p>
              <span className="text-primary">{">"}</span> status:{" "}
              <span className="text-secondary">available for hire</span>
            </p>
            <p>
              <span className="text-primary">{">"}</span> location:{" "}
              <span className="text-secondary">ready to deploy</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              href="mailto:contact@myselfusman.com"
              className="group relative px-8 py-3 font-semibold text-lg text-primary border-2 border-primary rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Hire Me
              </span>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
            </a>
            <a
              href="#"
              className="group relative px-8 py-3 font-semibold text-lg text-secondary border-2 border-secondary rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-secondary/50 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex justify-center items-center w-full px-4 sm:px-0">
          <div className="w-full max-w-sm">
            <img
              src="/usman-bg.webp"
              alt="Usman Siddique - DevOps Engineer"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute -bottom-[80px] left-1/2 -translate-x-1/2 scroll-indicator">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary font-mono text-xl block mb-2">
            {"// 01"}
          </span>
          <span className="text-gradient">About Me</span>
        </h2>

        <div
          className={`glass-card p-8 md:p-12 card-hover transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-start gap-4 mb-6">
            <Terminal className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">$</span> cat about.txt
            </div>
          </div>

          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
            {
              "I'm a Junior DevOps Engineer passionate about automating infrastructure and streamlining deployment pipelines. Currently completing my internship, I specialize in containerization, CI/CD, and cloud technologies."
            }
          </p>

          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            I love turning complex deployment challenges into automated,
            scalable solutions. My goal is to bridge the gap between development
            and operations, ensuring smooth, reliable, and efficient software
            delivery.
          </p>
        </div>
      </div>
    </section>
  );
}

// Skills Section
const currentSkills = [
  { name: "Docker", icon: "🐳" },
  { name: "Jenkins", icon: "⚙️" },
  { name: "AWS", icon: "☁️" },
  { name: "Git", icon: "📦" },
  { name: "CI/CD", icon: "🔄" },
  { name: "Linux", icon: "🐧" },
  { name: "Python", icon: "🐍" },
  { name: "Bash", icon: "💻" },
];

const learningSkills = [
  { name: "Kubernetes", icon: "☸️" },
  { name: "Terraform", icon: "🏗️" },
  { name: "Ansible", icon: "📜" },
  { name: "Prometheus", icon: "📊" },
];

function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary font-mono text-xl block mb-2">
            {"// 02"}
          </span>
          <span className="text-gradient">Skills & Tech Stack</span>
        </h2>

        {/* Terminal Style Header */}
        <div className="font-mono text-sm text-muted-foreground mb-8 text-center">
          <span className="text-primary">$</span> skills --list --all
        </div>

        {/* Current Skills */}
        <div
          className={`mb-12 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
            <span className="w-3 h-3 bg-primary rounded-full" />
            Current Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {currentSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="glass-card p-4 text-center card-hover skill-badge cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-3xl mb-2 block">{skill.icon}</span>
                <span className="text-foreground font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Skills */}
        <div
          className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h3 className="text-xl font-bold text-muted-foreground mb-6 flex items-center gap-2">
            <span className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
            Learning & Future Goals
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {learningSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="glass-card p-4 text-center card-hover skill-badge opacity-70 hover:opacity-100 cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-3xl mb-2 block grayscale hover:grayscale-0 transition-all">
                  {skill.icon}
                </span>
                <span className="text-muted-foreground font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Projects Section
const projects = [
  {
    title: "Production CI/CD Deployment – Next.js on AWS EC2",
    description:
      "Designed and implemented a production-style CI/CD pipeline to deploy a Next.js application to AWS EC2 using GitHub Actions. Implemented atomic release strategy with versioned folders, automated deployments on push to main, configured Nginx as reverse proxy, and successfully troubleshooted real production issues including OOM crashes, SSH authentication failures, and 502 Bad Gateway errors.",
    tech: ["GitHub Actions", "Next.js", "AWS EC2", "Nginx", "PM2", "rsync", "Linux"],
    github: "https://github.com/myselfusman",
  },
  {
    title: "Next.js Web App Deployment",
    description:
      "Deployed a production-ready Next.js application using Docker containers and CI/CD pipeline with automated testing and deployment to AWS",
    tech: ["Next.js", "Docker", "Jenkins", "AWS"],
    github: "https://github.com/myselfusman",
  },
  {
    title: "React.js App with CI/CD",
    description:
      "Built and deployed a React.js application with automated build pipeline, containerization, and cloud deployment",
    tech: ["React.js", "Docker", "Git", "AWS"],
    github: "https://github.com/myselfusman",
  },
  {
    title: "Netflix Clone Static Website",
    description:
      "Created and deployed a static Netflix clone with responsive design, containerized deployment, and automated CI/CD workflow",
    tech: ["HTML/CSS/JS", "Docker", "Jenkins"],
    github: "https://github.com/myselfusman",
  },
];

function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary font-mono text-xl block mb-2">
            {"// 03"}
          </span>
          <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-card p-6 card-hover transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Terminal className="w-6 h-6 text-primary" />
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono bg-muted/50 text-secondary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Certifications Section
const certifications = [
  { name: "Docker Certification", platform: "LinkedIn Learning" },
  { name: "GitHub Certification", platform: "LinkedIn Learning" },
  { name: "GitLab Certification", platform: "LinkedIn Learning" },
];

function CertificationsSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" ref={ref} className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary font-mono text-xl block mb-2">
            {"// 04"}
          </span>
          <span className="text-gradient">Certifications</span>
        </h2>

        {/* Terminal Style */}
        <div
          className={`glass-card p-6 md:p-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="font-mono text-sm mb-6">
            <span className="text-muted-foreground">$</span>{" "}
            <span className="text-primary">certifications</span>{" "}
            <span className="text-secondary">--list</span>
          </div>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Award className="w-6 h-6 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-foreground font-medium">{cert.name}</p>
                  <p className="text-muted-foreground text-sm">
                    {cert.platform}
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-secondary cursor-pointer transition-colors" />
              </div>
            ))}
          </div>

          <div className="font-mono text-sm mt-6 text-muted-foreground">
            <span className="text-primary">{">"}</span> More certifications
            loading...
            <span className="typing-cursor text-primary">|</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:contact@myselfusman.com",
      label: "contact@myselfusman.com",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/myself-usman/",
      label: "linkedin.com/in/myself-usman",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/myselfusman",
      label: "github.com/myselfusman",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-primary font-mono text-xl block mb-2">
            {"// 05"}
          </span>
          <span className="text-gradient">{"Let's Connect"}</span>
        </h2>

        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          {
            "Ready to automate, deploy, and scale? Let's build something amazing together."
          }
        </p>

        <div
          className={`flex flex-col md:flex-row gap-6 justify-center items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className="glass-card p-6 w-full md:w-auto md:min-w-[200px] card-hover flex flex-col items-center gap-3 group"
            >
              <div className="w-14 h-14 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <link.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-foreground font-medium">{link.name}</span>
              <span className="text-muted-foreground text-sm font-mono">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Terminal Footer */}
        <div className="mt-16 font-mono text-sm">
          <p>
            <span className="text-primary">$</span>{" "}
            <span className="text-muted-foreground">echo</span>{" "}
            <span className="text-secondary">{'"Thanks for visiting!"'}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground text-sm font-mono">
          <span className="text-primary">{"<"}</span>
          Designed & Built by Usman Siddique
          <span className="text-primary">{" />"}</span>
        </p>
        <p className="text-muted-foreground/50 text-xs mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Portfolio() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FloatingBlobs />
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

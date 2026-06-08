import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  PhoneCall,
  Sparkles,
  X,
} from "lucide-react";
import styles from "./App.module.css";

const strengths = [
  {
    title: "Backend that stays reliable",
    description:
      "I build secure APIs, business logic, and data flows with Django, DRF, and PostgreSQL, with a strong focus on stability and clean architecture.",
  },
  {
    title: "Frontend that feels clear",
    description:
      "I care about responsive layouts, easy navigation, and product experiences that feel simple and comfortable for real users.",
  },
  {
    title: "Ready for product teams",
    description:
      "I work well with developers, QA, and business teams, and I stay involved from development to debugging, release, and support.",
  },
];

const projects = [
  {
    title: "FinTech payment workflows",
    description:
      "Worked on secure transaction systems, payment integrations, and API flows for products where reliability really matters.",
    points: [
      "Built protected APIs with authentication and role-based access",
      "Improved database structure for reliable transaction handling",
    ],
  },
  {
    title: "Enterprise dashboards and notifications",
    description:
      "Built dashboards and notification flows that help teams track updates, user activity, and internal operations in one place.",
    points: [
      "Created live notification features and centralized management views",
      "Delivered scalable services using Django and Next.js",
    ],
  },
  {
    title: "Mobile-first product experiences",
    description:
      "Worked on responsive and cross-platform experiences with strong attention to user flow, performance, and simple interactions.",
    points: [
      "Delivered React Native and web interfaces for everyday users",
      "Improved booking, onboarding, and update journeys",
    ],
  },
];

const skillGroups = [
  {
    title: "Core stack",
    items: ["Python", "Django", "Django REST Framework", "React", "Next.js", "TypeScript"],
  },
  {
    title: "Product delivery",
    items: ["REST APIs", "Authentication", "Responsive UI", "Debugging", "Agile", "Production Support"],
  },
  {
    title: "Platform",
    items: ["PostgreSQL", "CockroachDB", "Firebase", "Docker", "Git", "Google Cloud"],
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "dinakaryaramati95355@gmail.com",
    href: "mailto:dinakaryaramati95355@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 95355 55301",
    href: "tel:+919535555301",
    icon: PhoneCall,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dinakar-y-31a527217",
    href: "https://www.linkedin.com/in/dinakar-y-31a527217/",
    icon: Linkedin,
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.pageShell}>
      <header className={styles.topbar}>
        <div className={styles.topbarInner}>
          <a href="#home" className={styles.brand} onClick={handleNavClick}>
            <span className={styles.brandMark}>DY</span>
            <span>
              Dinakar Y
              <strong>Software Engineer</strong>
            </span>
          </a>

          <nav
            id="site-navigation"
            className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={handleNavClick}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.headerActions}>
            <a href="/Dinakar_Y_Resume.pdf" download className={styles.resumeLink}>
              Resume
            </a>

            <button
              type="button"
              className={styles.menuButton}
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="site-navigation"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section id="home" className={`${styles.section} ${styles.heroSection}`}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrowRow}>
              <span className={styles.openBadge}>
                <Sparkles size={16} />
                Open to software engineer and full-stack developer roles
              </span>
              <span className={styles.locationBadge}>
                <MapPin size={16} />
                Bengaluru, India
              </span>
            </div>

            <p className={styles.kicker}>Simple, scalable, user-friendly product engineering</p>
            <h1>
              I build reliable software that is easy for users and practical for teams.
            </h1>
            <p className={styles.heroText}>
              I&apos;m Dinakar Y, a software engineer with 3+ years of experience building secure
              backend systems, responsive interfaces, and production-ready applications for
              enterprise and FinTech teams. I&apos;m currently looking for my next software
              engineer or full-stack developer role.
            </p>

            <div className={styles.ctaRow}>
              <a href="#contact" className={styles.primaryButton}>
                Contact Me
                <ArrowRight size={18} />
              </a>
              <a href="/Dinakar_Y_Resume.pdf" download className={styles.secondaryButton}>
                <Download size={18} />
                Download Resume
              </a>
            </div>

            <div className={styles.quickFacts}>
              <article className={styles.factCard}>
                <span>Experience</span>
                <strong>3+ Years</strong>
              </article>
              <article className={styles.factCard}>
                <span>Current role</span>
                <strong>Software Engineer</strong>
              </article>
              <article className={styles.factCard}>
                <span>Strong areas</span>
                <strong>Backend, APIs, responsive UI</strong>
              </article>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.profileCard}>
              <div className={styles.profileGlow} />
              <Image
                src="/dinakar-profile.png"
                alt="Portrait of Dinakar Y"
                width={560}
                height={700}
                priority
                className={styles.profileImage}
              />
            </div>

            <div className={styles.recruiterCard}>
              <span className={styles.recruiterLabel}>Recruiter note</span>
              <h2>Looking for an engineer who can build, improve, and support real products?</h2>
              <p>
                I can contribute across backend development, frontend delivery, API integration,
                debugging, and release support while keeping the product easy for end users.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className={styles.section}>
          <div className={styles.sectionHeading}>
            <span>Why me</span>
            <h2>A clear profile built around the information recruiters usually want first</h2>
          </div>

          <div className={styles.cardGrid}>
            {strengths.map((item) => (
              <article key={item.title} className={styles.infoCard}>
                <div className={styles.cardIcon}>
                  <BriefcaseBusiness size={20} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className={styles.section}>
          <div className={styles.sectionHeading}>
            <span>Experience</span>
            <h2>My current role and the kind of work I handle</h2>
          </div>

          <div className={styles.experienceLayout}>
            <article className={`${styles.infoCard} ${styles.featureCard}`}>
              <div className={styles.roleHeader}>
                <div>
                  <p className={styles.roleMeta}>GTPL | Apr 2023 - Present</p>
                  <h3>Software Engineer</h3>
                </div>
                <span className={styles.statusPill}>Full-time</span>
              </div>

              <p>
                I work on enterprise and FinTech applications using Django, React, Next.js, React
                Native, and REST APIs.
              </p>

              <ul className={styles.checkList}>
                <li>I build secure backend systems with authentication, authorization, and clean API design.</li>
                <li>I create responsive web and mobile flows with attention to usability and performance.</li>
                <li>I stay involved through development, debugging, deployment, and production support.</li>
              </ul>
            </article>

            <article className={`${styles.infoCard} ${styles.sideCard}`}>
              <h3>What I can bring to a new team</h3>
              <ul className={styles.checkList}>
                <li>Strong backend ownership for APIs, workflows, and business logic.</li>
                <li>Comfort working on user-facing features as well as internal systems.</li>
                <li>A hands-on delivery mindset with clear communication and team collaboration.</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="projects" className={styles.section}>
          <div className={styles.sectionHeading}>
            <span>Selected work</span>
            <h2>A few examples that reflect the work I do best</h2>
          </div>

          <div className={styles.cardGrid}>
            {projects.map((project) => (
              <article key={project.title} className={styles.infoCard}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className={styles.checkList}>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className={styles.section}>
          <div className={styles.sectionHeading}>
            <span>Skills</span>
            <h2>Tools and technologies I work with regularly</h2>
          </div>

          <div className={styles.skillsLayout}>
            {skillGroups.map((group) => (
              <article key={group.title} className={styles.infoCard}>
                <h3>{group.title}</h3>
                <div className={styles.skillTags}>
                  {group.items.map((item) => (
                    <span key={item} className={styles.skillTag}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.splitPanel}>
            <article className={styles.infoCard}>
              <div className={styles.sectionHeading}>
                <span>Education</span>
                <h2>Academic background</h2>
              </div>
              <h3>BE in Electronics and Communication Engineering</h3>
              <p>Basaveshwar Engineering College, Bagalkot | 2022</p>
            </article>

            <article className={`${styles.infoCard} ${styles.messageCard}`}>
              <div className={styles.sectionHeading}>
                <span>Current goal</span>
                <h2>Actively looking for the next opportunity</h2>
              </div>
              <p>
                I&apos;m looking for a software engineer or full-stack developer role where I can
                continue building scalable products, improve user experience, and contribute as a
                dependable team member from day one.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <div className={styles.contactPanel}>
            <div className={styles.contactIntro}>
              <span>Contact</span>
              <h2>Let&apos;s connect about the next role</h2>
              <p>
                If you&apos;re hiring for a software engineer or full-stack developer position,
                I&apos;d be glad to share more about my experience and availability.
              </p>
            </div>

            <div className={styles.contactGrid}>
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "LinkedIn" ? "_blank" : undefined}
                    rel={item.label === "LinkedIn" ? "noreferrer" : undefined}
                    className={styles.contactItem}
                  >
                    <div className={styles.contactIcon}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Dinakar Y | Full-Stack Developer | Open to new opportunities</p>
      </footer>
    </div>
  );
}

export default App;

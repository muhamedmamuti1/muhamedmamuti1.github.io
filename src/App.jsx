import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { FiArrowUpRight, FiArrowUp } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import {
  heroHighlights,
  experiences,
  skillGroups,
  contactChannels,
} from './data/content'
import { useTypewriter } from './hooks/useTypewriter'
import { TypewriterText } from './components/TypewriterText'
import './App.css'

const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
]

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.3 },
}

function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  })

  const [showScrollTop, setShowScrollTop] = useState(false)
  const heroText = "Building reliable platforms that feel as elegant as they are powerful."
  const { displayedText, isComplete } = useTypewriter(heroText, 60)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <motion.div className="scroll-indicator" style={{ scaleX: progress }} />

      <header className="hero" id="home">
        <div className="hero-backdrop" aria-hidden />
        <nav className="nav">
            <a href="/" className="logo">
            <img
              src="/logo.png"
              alt="MM Logo"
              className="logo-image"
              onError={(e) => {
                // Fallback to SVG if PNG doesn't exist
                if (e.target.src.endsWith('.png')) {
                  e.target.src = '/logo.svg'
                }
              }}
            />
          </a>
          <div className="nav-links">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <a className="ghost-button" href="#contact">
            Let&apos;s talk
          </a>
        </nav>

        <div className="hero-content">
          <div className="hero-main">
            <div className="hero-text">
              <p className="eyebrow">Software developer</p>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                {displayedText}
                {!isComplete && <span className="typewriter-cursor">|</span>}
              </motion.h1>
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
              >
                I&apos;m Muhamed Mamuti - an engineer who blends backend rigor with creative
                storytelling. From hospital knowledge graphs to fleet management apps, I ship
                systems that scale gracefully and stay delightful.
              </motion.p>
            </div>
            <motion.div
              className="hero-image-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <img
                src="/profile-picture.jpg"
                alt="Muhamed Mamuti"
                className="profile-picture"
                onError={(e) => {
                  // Fallback to PNG if JPG doesn't exist
                  if (e.target.src.endsWith('.jpg')) {
                    e.target.src = '/profile-picture.png'
                  }
                }}
              />
            </motion.div>
          </div>

          <div className="hero-actions">
            <a className="primary-button" href="mailto:muhamedmamuti1999@gmail.com">
              Start a conversation
              <FiArrowUpRight />
            </a>
            <a className="outline-button" href="#projects">
              See recent work
            </a>
          </div>

          <div className="hero-highlights">
            {heroHighlights.map((item) => (
              <div key={item.label} className="highlight-card">
                <p className="label">{item.label}</p>
                <p className="value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section id="experience" className="section">
          <motion.div {...fadeUp} className="section-header">
            <p className="eyebrow">Experience</p>
            <h2>
              <TypewriterText text="Crafting products across startups, enterprises, and academia." speed={60} />
            </h2>
          </motion.div>

          <div className="timeline">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.role}`}
                className="timeline-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="timeline-marker" />
                <div className="timeline-meta">
                  <p className="eyebrow">{experience.period}</p>
                  <h3>
                    {experience.role} · {experience.company}
                  </h3>
                  <p className="location">{experience.location}</p>
                  <p className="summary">{experience.summary}</p>
                </div>
                <ul>
                  {experience.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="stack-chip">
                  {experience.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <motion.div {...fadeUp} className="section-header">
            <p className="eyebrow">Projects & Code</p>
            <h2>
              <TypewriterText text="Explore my work on GitHub." speed={60} />
            </h2>
            <p>
              Check out my repositories, contributions, and open-source projects.
            </p>
          </motion.div>

          <motion.div
            className="github-card-wrapper"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <a
              href="https://github.com/muhamedmamuti1"
              target="_blank"
              rel="noreferrer"
              className="github-card"
            >
              <div className="github-icon-wrapper">
                <FaGithub className="github-icon" />
              </div>
              <div className="github-content">
                <h3>View My GitHub Profile</h3>
                <p>github.com/muhamedmamuti1</p>
              </div>
              <FiArrowUpRight className="github-arrow" />
            </a>
          </motion.div>
        </section>

        <section id="skills" className="section">
          <motion.div {...fadeUp} className="section-header">
            <p className="eyebrow">Skills & Superpowers</p>
            <h2>
              <TypewriterText text="Hands-on engineering with a designer's empathy." speed={60} />
            </h2>
          </motion.div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <motion.article
                key={group.title}
                className="skill-card"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <motion.div {...fadeUp} className="section-header">
            <p className="eyebrow">Let&apos;s Build</p>
            <h2>
              <TypewriterText text="Ready for a fresh backend challenge or creative collab?" speed={60} />
            </h2>
            <p>
              I partner with founders, product teams, and researchers who value thoughtful,
              pragmatic engineering. Drop a note and let&apos;s architect something remarkable.
            </p>
          </motion.div>

          <div className="contact-grid">
            {contactChannels.map((channel) => {
              const CardComponent = channel.href ? motion.a : motion.div
              const cardProps = channel.href
                ? {
                    href: channel.href,
                    target: channel.href.startsWith('http') ? '_blank' : undefined,
                    rel: channel.href.startsWith('http') ? 'noreferrer' : undefined,
                  }
                : {}

              return (
                <CardComponent
                  key={channel.label}
                  {...cardProps}
                  className="contact-card"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <p className="label">{channel.label}</p>
                  <p className="value">{channel.value}</p>
                  {channel.href && <FiArrowUpRight />}
                </CardComponent>
              )
            })}
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Muhamed Mamuti</p>
      </footer>

      <motion.button
        className="scroll-to-top"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.8,
          pointerEvents: showScrollTop ? 'auto' : 'none',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        aria-label="Scroll to top"
      >
        <FiArrowUp />
      </motion.button>
    </div>
  )
}

export default App

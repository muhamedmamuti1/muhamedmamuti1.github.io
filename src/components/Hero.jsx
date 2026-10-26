import { motion } from 'framer-motion'
import { FiArrowRight, FiFileText, FiMapPin } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { heroStats, profile } from '../data/content'

const ease = [0.22, 1, 0.36, 1]

const enter = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
})

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div>
          <motion.p className="hero-status" {...enter(0)}>
            <span className="status-dot" aria-hidden />
            {profile.role} at {profile.currentCompany}
          </motion.p>

          <motion.h1 id="hero-title" {...enter(0.08)}>
            Building reliable platforms that feel as <em>elegant</em> as they are powerful.
          </motion.h1>

          <motion.p className="hero-lede" {...enter(0.16)}>
            I&apos;m {profile.name} - an engineer who blends backend rigor with creative
            storytelling. From hospital knowledge graphs to fleet management apps, I ship
            systems that scale gracefully and stay delightful.
          </motion.p>

          <motion.div className="hero-actions" {...enter(0.24)}>
            <a className="btn btn-primary" href="#contact">
              Get in touch
              <FiArrowRight aria-hidden />
            </a>
            <a className="btn btn-ghost" href={profile.cv} target="_blank" rel="noreferrer">
              <FiFileText aria-hidden />
              View CV
            </a>
            <span className="hero-social">
              <a href={profile.github} target="_blank" rel="noreferrer" className="icon-button" aria-label="GitHub">
                <FaGithub aria-hidden />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-button" aria-label="LinkedIn">
                <FaLinkedinIn aria-hidden />
              </a>
            </span>
          </motion.div>
        </div>

        <motion.figure
          className="hero-portrait"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
        >
          <div className="portrait-frame">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width="388"
              height="388"
              fetchPriority="high"
            />
          </div>
          <figcaption className="portrait-caption">
            <FiMapPin aria-hidden />
            {profile.location}
          </figcaption>
        </motion.figure>
      </div>

      <div className="container">
        <motion.dl className="hero-stats" {...enter(0.32)}>
          {heroStats.map((stat) => (
            <div key={stat.label} className="stat">
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}

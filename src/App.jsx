import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { profile } from './data/content'
import { useTheme } from './hooks/useTheme'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import './App.css'

function App() {
  const { theme, toggleTheme } = useTheme()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 })

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">Skip to content</a>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden />

      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main id="main">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <a href="#home" className="back-to-top">
            Back to top
            <FiArrowUp aria-hidden />
          </a>
        </div>
      </footer>
    </MotionConfig>
  )
}

export default App

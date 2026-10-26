import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiFileText, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { navLinks, profile } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'

const observedSections = ['home', ...navLinks.map((link) => link.id)]

export function Header({ theme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeId = useActiveSection(observedSections)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    const closeOnDesktop = () => {
      if (window.innerWidth > 820) setIsMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', closeOnDesktop)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', closeOnDesktop)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)
  const ThemeIcon = theme === 'dark' ? FiSun : FiMoon

  return (
    <>
      <header className={`site-header ${isScrolled || isMenuOpen ? 'is-scrolled' : ''}`}>
        <div className="container header-inner">
          <a href="#home" className="brand" onClick={closeMenu} aria-label={`${profile.name}, back to top`}>
            <img src="/logo.png" alt="" className="brand-mark" width="32" height="32" />
            <span className="brand-name">{profile.name}</span>
          </a>

          <nav className="nav-desktop" aria-label="Primary">
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="nav-link" aria-current={activeId === link.id ? 'true' : undefined}>
                    {activeId === link.id && (
                      <motion.span
                        layoutId="nav-pill"
                        className="nav-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="nav-label">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="icon-button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              <ThemeIcon aria-hidden />
            </button>
            <button
              type="button"
              className="icon-button menu-button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="container">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.04 * index }}
                >
                  <a href={`#${link.id}`} onClick={closeMenu} aria-current={activeId === link.id ? 'true' : undefined}>
                    <span className="mobile-index">0{index + 1}</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="mobile-menu-footer">
                <a href={profile.cv} target="_blank" rel="noreferrer" className="btn btn-primary" onClick={closeMenu}>
                  <FiFileText aria-hidden />
                  View CV
                </a>
                <a href={`mailto:${profile.email}`} className="btn btn-ghost" onClick={closeMenu}>
                  Email me
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

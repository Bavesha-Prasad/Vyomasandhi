import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  // Track scroll for subtle border reflection enhancement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="brand-logo" aria-label="VYOMASANDHI Home">
          <span className="brand-symbol" aria-hidden="true">◆</span>
          <span className="brand-name">VYOMASANDHI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Services
          </NavLink>
          <NavLink to="/work" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Work
          </NavLink>
          <NavLink to="/process" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Process
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Contact
          </NavLink>
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="cta-button header-cta">
            <span>Enquire</span>
            <span className="cta-arrow" aria-hidden="true">→</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="toggle-line line-1" />
            <span className="toggle-line line-2" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="drawer-inner">
          <p className="drawer-tagline">“Ideas, thoughtfully brought to life.”</p>
          <nav className="mobile-nav" aria-label="Mobile Navigation">
            <NavLink to="/" end className="mobile-link">
              Home
            </NavLink>
            <NavLink to="/services" className="mobile-link">
              Services
            </NavLink>
            <NavLink to="/work" className="mobile-link">
              Work
            </NavLink>
            <NavLink to="/process" className="mobile-link">
              Process
            </NavLink>
            <NavLink to="/contact" className="mobile-link">
              Contact
            </NavLink>
          </nav>

          <div className="drawer-footer">
            <Link to="/contact" className="cta-button drawer-cta">
              Start a Project Enquiry
            </Link>
            <p className="drawer-philosophy">Understand deeply. Simplify thoughtfully. Build honestly.</p>
          </div>
        </div>
      </div>
    </header>
  )
}

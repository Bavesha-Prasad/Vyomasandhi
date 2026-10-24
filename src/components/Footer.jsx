import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand">
              <span className="footer-symbol" aria-hidden="true">◆</span>
              <span className="footer-brand-name">VYOMASANDHI</span>
            </Link>
            <p className="footer-tagline">“Ideas, thoughtfully brought to life.”</p>
            <p className="footer-philosophy">
              “Understand deeply. Simplify thoughtfully. Build honestly.”
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Studio Navigation</h4>
            <nav className="footer-nav" aria-label="Footer Navigation">
              <Link to="/">Home</Link>
              <Link to="/services">Services & Pricing</Link>
              <Link to="/work">Concept Work</Link>
              <Link to="/process">Design Process</Link>
              <Link to="/contact">Project Enquiry</Link>
            </nav>
          </div>

          <div className="footer-services-col">
            <h4 className="footer-heading">Focus Areas</h4>
            <ul className="footer-list">
              <li>Business Website Development</li>
              <li>Enquiry-Focused Landing Pages</li>
              <li>Thoughtful Website Redesigns</li>
              <li>Small Business Online Presence</li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-heading">Direct Contact</h4>
            <p className="footer-contact-desc">
              Ready to discuss your project? Reach out for thoughtful, honest consultation.
            </p>
            <a href="mailto:hello@vyomasandhi.com" className="footer-email">
              hello@vyomasandhi.com
            </a>
            <div className="footer-markets">
              <span>Serving clients across UK, USA, Canada, Australia & worldwide.</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-notice">
            Portfolio projects (Klaro Home Services & AURELIX Hair Atelier) are curated design concepts demonstrating our studio capabilities.
          </p>
          <div className="footer-bottom-meta">
            <p className="footer-copyright">
              &copy; {currentYear} VYOMASANDHI. All rights reserved.
            </p>
            <span className="footer-meta-pill">Editorial Minimalism & Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

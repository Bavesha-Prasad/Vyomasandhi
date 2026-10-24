import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const stageRef = useRef(null)

  // Subtle pointer-responsive depth bounded strictly to the stage container
  useEffect(() => {
    // Respect prefers-reduced-motion or touch devices
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (mediaQuery.matches || isTouch) return

    const handleMouseMove = (e) => {
      if (!stageRef.current) return
      const rect = stageRef.current.getBoundingClientRect()
      // If mouse is far outside the stage, don't calculate extreme offsets
      if (
        e.clientX < rect.left - 200 ||
        e.clientX > rect.right + 200 ||
        e.clientY < rect.top - 200 ||
        e.clientY > rect.bottom + 200
      ) {
        return
      }

      // Normalized coordinates (-1 to 1) relative to stage center
      const x = Math.max(-1, Math.min(1, ((e.clientX - rect.left) / rect.width - 0.5) * 2))
      const y = Math.max(-1, Math.min(1, ((e.clientY - rect.top) / rect.height - 0.5) * 2))
      setMousePos({ x, y })
    }

    const handleMouseLeave = () => {
      setMousePos({ x: 0, y: 0 })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    const stageEl = stageRef.current
    if (stageEl) {
      stageEl.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (stageEl) {
        stageEl.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  // Scroll reveal observer for Home page sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    const revealElements = document.querySelectorAll('.home-reveal')
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section" aria-label="Introduction">
        <div className="hero-ambient-orb" aria-hidden="true" />

        <div className="hero-container">
          {/* Hero Copy — Editorial minimalism without filler paragraph */}
          <div className="hero-copy">
            <div className="hero-badge hero-fade-in delay-1">
              <span className="badge-dot" aria-hidden="true" />
              <span>DIGITAL DESIGN & DEVELOPMENT STUDIO</span>
            </div>

            <h1 className="hero-title hero-fade-in delay-2">
              Ideas, thoughtfully <span className="title-serif">brought to life.</span>
            </h1>

            <div className="hero-actions hero-fade-in delay-3">
              <Link to="/contact" className="cta-button hero-cta-primary">
                <span>Start a Project Enquiry</span>
                <span className="cta-arrow" aria-hidden="true">→</span>
              </Link>
              <Link to="/work" className="hero-cta-secondary">
                <span>Explore Concept Work</span>
              </Link>
            </div>

            <div className="hero-meta-strip hero-fade-in delay-4">
              <div className="meta-item">
                <span className="meta-label">Philosophy</span>
                <span className="meta-value">Understand • Simplify • Build</span>
              </div>
              <div className="meta-divider" aria-hidden="true" />
              <div className="meta-item">
                <span className="meta-label">Primary Markets</span>
                <span className="meta-value">UK • USA • Canada • Australia</span>
              </div>
              <div className="meta-divider" aria-hidden="true" />
              <div className="meta-item">
                <span className="meta-label">Starting Scope</span>
                <span className="meta-value">From ~$200 for small sites</span>
              </div>
            </div>
          </div>

          {/* Floating Dimensional Cards Stage — Responsive Bounded Architecture */}
          <div
            className="hero-visual-stage"
            ref={stageRef}
            aria-label="Studio highlights"
            style={{
              '--mx': mousePos.x,
              '--my': mousePos.y,
            }}
          >
            <div className="stage-frame">
              {/* Card 1: Craft Direction */}
              <div className="stage-card-slot slot-craft hero-fade-in delay-2">
                <div className="float-card card-craft">
                  <div className="card-top-shine" aria-hidden="true" />
                  <div className="card-badge">CRAFT DIRECTION</div>
                  <h2 className="card-title">Editorial Distinction</h2>
                  <p className="card-body">
                    Bold typographic hierarchy, controlled obsidian reflections, and purposeful white space.
                  </p>
                  <div className="card-footer-metric">
                    <span className="metric-tag">Design System</span>
                    <span className="metric-accent">Obsidian #08090B</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Studio Study (AURELIX Spotlight linking to internal Work page) */}
              <div className="stage-card-slot slot-spotlight hero-fade-in delay-3">
                <div className="float-card card-spotlight">
                  <div className="card-top-shine" aria-hidden="true" />
                  <div className="card-badge spotlight-badge">
                    <span className="spotlight-dot" />
                    <span>STUDIO STUDY</span>
                  </div>
                  <h2 className="card-title">AURELIX Hair Atelier</h2>
                  <p className="card-body">
                    Boutique editorial salon presence featuring high-fashion composition & intuitive booking.
                  </p>
                  <Link
                    to="/work"
                    className="card-visual-preview"
                    aria-label="Explore AURELIX Hair Atelier concept study on Work page"
                  >
                    <span className="preview-label">Concept Project</span>
                    <span className="preview-arrow">View on /work →</span>
                  </Link>
                </div>
              </div>

              {/* Card 3: Engineering */}
              <div className="stage-card-slot slot-code hero-fade-in delay-4">
                <div className="float-card card-code">
                  <div className="card-top-shine" aria-hidden="true" />
                  <div className="card-badge">ENGINEERING</div>
                  <h2 className="card-title">Honest & Lightweight</h2>
                  <p className="card-body">
                    Handcrafted React, zero bloated libraries, and lightning-fast load times.
                  </p>
                  <div className="card-footer-pills">
                    <span className="pill">Semantic HTML</span>
                    <span className="pill">Accessible</span>
                    <span className="pill">Pure CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY SECTION (Scroll-triggered reveal) */}
      <section className="home-section philosophy-section home-reveal" aria-label="Brand Philosophy">
        <div className="section-container">
          <div className="section-header">
            <span className="section-kicker">STUDIO ETHOS</span>
            <h2 className="section-heading">
              Understand deeply. Simplify thoughtfully. <span className="text-bronze">Build honestly.</span>
            </h2>
            <p className="section-subheading">
              We reject formulaic templates, bloated buzzwords, and empty promises. Every project we touch is guided by three non-negotiable principles.
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <span className="pillar-num">01</span>
              <h3 className="pillar-title">Understand Deeply</h3>
              <p className="pillar-desc">
                We take the time to study your business model, target audience, and competitive landscape before writing code or proposing layouts. A great website solves business problems first.
              </p>
              <div className="pillar-indicator" />
            </div>

            <div className="pillar-card">
              <span className="pillar-num">02</span>
              <h3 className="pillar-title">Simplify Thoughtfully</h3>
              <p className="pillar-desc">
                Clutter is the enemy of conversion. We strip away unnecessary visual friction and convoluted navigation, focusing every visitor’s attention on your core value and call to action.
              </p>
              <div className="pillar-indicator" />
            </div>

            <div className="pillar-card">
              <span className="pillar-num">03</span>
              <h3 className="pillar-title">Build Honestly</h3>
              <p className="pillar-desc">
                We build lean, standards-compliant digital assets. No fake claims, no hidden recurring fees, and no artificial complexity. Realistic scopes delivered with uncompromising integrity.
              </p>
              <div className="pillar-indicator" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESS SNAPSHOT (Scroll-triggered reveal) */}
      <section className="home-section process-snapshot-section home-reveal" aria-label="Process Snapshot">
        <div className="section-container">
          <div className="section-header">
            <span className="section-kicker">METHODOLOGY</span>
            <h2 className="section-heading">A Clear, Measured Journey</h2>
            <p className="section-subheading">
              From our first conversation to final deployment, we follow a transparent six-stage process with clear milestones at every step.
            </p>
          </div>

          <div className="process-timeline-bar">
            <div className="timeline-step">
              <span className="step-num">01</span>
              <span className="step-name">Discover</span>
            </div>
            <div className="timeline-arrow" aria-hidden="true">›</div>
            <div className="timeline-step">
              <span className="step-num">02</span>
              <span className="step-name">Define</span>
            </div>
            <div className="timeline-arrow" aria-hidden="true">›</div>
            <div className="timeline-step">
              <span className="step-num">03</span>
              <span className="step-name">Design</span>
            </div>
            <div className="timeline-arrow" aria-hidden="true">›</div>
            <div className="timeline-step">
              <span className="step-num">04</span>
              <span className="step-name">Build</span>
            </div>
            <div className="timeline-arrow" aria-hidden="true">›</div>
            <div className="timeline-step">
              <span className="step-num">05</span>
              <span className="step-name">Test</span>
            </div>
            <div className="timeline-arrow" aria-hidden="true">›</div>
            <div className="timeline-step">
              <span className="step-num">06</span>
              <span className="step-name">Launch</span>
            </div>
          </div>

          <div className="process-footer-action">
            <Link to="/process" className="text-cta">
              <span>Read about each stage in detail</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. PRE-FOOTER ENQUIRY BANNER (Scroll-triggered reveal) */}
      <section className="home-section pre-footer-cta home-reveal" aria-label="Call to Action">
        <div className="section-container">
          <div className="cta-panel">
            <div className="cta-panel-shine" aria-hidden="true" />
            <span className="cta-kicker">INITIATE A CONVERSATION</span>
            <h2 className="cta-title">
              Have an idea you’d like thoughtfully brought to life?
            </h2>
            <p className="cta-desc">
              Whether you need a fresh business website, a high-converting landing page, or a complete digital overhaul, we are ready to listen.
            </p>
            <div className="cta-button-group">
              <Link to="/contact" className="cta-button cta-panel-primary">
                <span>Start Your Enquiry</span>
                <span className="cta-arrow" aria-hidden="true">→</span>
              </Link>
              <Link to="/services" className="cta-panel-secondary">
                <span>Explore Services & Scope</span>
              </Link>
            </div>
            <div className="cta-note">
              <span>Guidance: Small business packages start around ~$200 depending on final scope.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

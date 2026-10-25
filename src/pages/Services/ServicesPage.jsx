import { Link } from 'react-router-dom'
import './ServicesPage.css'

export default function ServicesPage() {
  return (
    <div className="services-page">
      {/* ====================================================================
          Section 1 — Introductory Hero
          ==================================================================== */}
      <header className="services-hero">
        <div className="services-hero-container">
          <span className="services-eyebrow">WHAT WE DO</span>
          <h1 className="services-title">
            Websites built <span className="title-serif">around your business.</span>
          </h1>
          <p className="services-supporting">
            From a first online presence to a complete website redesign, we create thoughtful digital experiences around your business goals.
          </p>
        </div>
      </header>

      {/* ====================================================================
          Section 2 — Three Visually Distinct Core Services
          ==================================================================== */}
      <section className="services-showcase" aria-label="Core Services">
        <div className="services-container">

          {/* ------------------------------------------------------------------
              SERVICE 01 — Business Websites
              Composition: Large, realistic landscape browser-window mockup
              ------------------------------------------------------------------ */}
          <article className="service-composition composition-landscape">
            <div className="service-meta-top">
              <div className="service-heading-group">
                <span className="service-number">01</span>
                <h2 className="service-title">Business Websites</h2>
              </div>
              <p className="service-desc">
                A professional multi-page website that introduces your business, explains your services and helps potential customers get in touch.
              </p>
              <div className="service-deliverables-block">
                <h3 className="deliverables-label">DELIVERABLES</h3>
                <ul className="deliverables-grid">
                  <li>
                    <span className="bullet-dash" aria-hidden="true">—</span>
                    <span>Custom page design and development</span>
                  </li>
                  <li>
                    <span className="bullet-dash" aria-hidden="true">—</span>
                    <span>Responsive layouts</span>
                  </li>
                  <li>
                    <span className="bullet-dash" aria-hidden="true">—</span>
                    <span>Relevant pages based on project requirements</span>
                  </li>
                  <li>
                    <span className="bullet-dash" aria-hidden="true">—</span>
                    <span>Clear enquiry calls to action</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Large Landscape Browser Window Mockup */}
            <div className="mockup-frame-large" aria-label="Klaro Home Services concept browser preview">
              <div className="browser-chrome">
                <div className="window-dots" aria-hidden="true">
                  <span className="dot dot-close" />
                  <span className="dot dot-minimize" />
                  <span className="dot dot-expand" />
                </div>
                <div className="browser-address-bar">
                  <span className="ssl-lock" aria-hidden="true">🔒</span>
                  <span className="address-text">klaro-homeservices.concept/services</span>
                </div>
                <div className="browser-chrome-actions">
                  <span className="mockup-concept-badge">CONCEPT DEMO</span>
                  <a
                    href="https://6addee5e33a015d5ea92e8f1--karloservices.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mockup-live-btn"
                    title="Open Klaro live demo website"
                  >
                    <span>Visit Live Site</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              {/* Rendered Business Website Canvas */}
              <div className="browser-viewport viewport-landscape">
                <div className="mock-site-nav">
                  <div className="mock-site-brand">
                    <span className="mock-brand-sym">◆</span>
                    <span className="mock-brand-txt">KLARO HOME SERVICES</span>
                  </div>
                  <div className="mock-site-menu">
                    <span>Services</span>
                    <span>Maintenance Plans</span>
                    <span>About</span>
                    <span className="mock-site-cta">Get an Instant Quote</span>
                  </div>
                </div>

                <div className="mock-site-hero">
                  <div className="mock-hero-badge">RESIDENTIAL & TRADE SERVICES</div>
                  <h3 className="mock-hero-heading">
                    Honest, professional home care <span className="mock-serif">— scheduled with ease.</span>
                  </h3>
                  <p className="mock-hero-copy">
                    Licensed plumbers, electricians, and certified property maintenance technicians available across your local district.
                  </p>
                  <div className="mock-hero-actions">
                    <span className="mock-btn-primary">Book Online Consultation</span>
                    <span className="mock-btn-secondary">Explore Coverage Areas</span>
                  </div>
                </div>

                <div className="mock-service-cards-row">
                  <div className="mock-card">
                    <span className="mock-card-num">01</span>
                    <h4>Plumbing & Heating</h4>
                    <p>Emergency pipe repairs, boiler servicing & radiator balancing.</p>
                  </div>
                  <div className="mock-card">
                    <span className="mock-card-num">02</span>
                    <h4>Electrical & Safety</h4>
                    <p>Safety certifications, rewiring, lighting & circuit inspections.</p>
                  </div>
                  <div className="mock-card">
                    <span className="mock-card-num">03</span>
                    <h4>Property Maintenance</h4>
                    <p>Comprehensive interior carpentry, tiling & seasonal restoration.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-divider" aria-hidden="true" />
          </article>


          {/* ------------------------------------------------------------------
              SERVICE 02 — Landing Pages
              Composition: Taller, narrow browser-window paired with large editorial typography
              ------------------------------------------------------------------ */}
          <article className="service-composition composition-split">
            {/* Left Column: Large Editorial Typography & Service Info */}
            <div className="service-split-info">
              <div className="service-heading-group">
                <span className="service-number">02</span>
                <h2 className="service-title">Landing Pages</h2>
              </div>
              <p className="service-desc">
                A focused page built around one service, offer or campaign, designed to communicate value and encourage a clear next step.
              </p>

              <div className="service-deliverables-block">
                <h3 className="deliverables-label">DELIVERABLES</h3>
                <ul className="deliverables-list">
                  <li>
                    <span className="bullet-dash" aria-hidden="true">—</span>
                    <span>Purposeful content structure</span>
                  </li>
                  <li>
                    <span className="bullet-dash" aria-hidden="true">—</span>
                    <span>Focused visual design</span>
                  </li>
                  <li>
                    <span className="bullet-dash" aria-hidden="true">—</span>
                    <span>Responsive development</span>
                  </li>
                  <li>
                    <span className="bullet-dash" aria-hidden="true">—</span>
                    <span>Clear call to action</span>
                  </li>
                </ul>
              </div>

              <div className="service-callout-pill">
                <span className="callout-icon" aria-hidden="true">✦</span>
                <span>Optimized for single-objective campaigns and direct client conversion.</span>
              </div>
            </div>

            {/* Right Column: Taller, Narrow Browser Window Preview */}
            <div className="service-split-visual">
              <div className="mockup-frame-narrow" aria-label="Campaign landing page demonstration preview">
                <div className="browser-chrome">
                  <div className="window-dots" aria-hidden="true">
                    <span className="dot dot-close" />
                    <span className="dot dot-minimize" />
                    <span className="dot dot-expand" />
                  </div>
                  <div className="browser-address-bar">
                    <span className="ssl-lock" aria-hidden="true">🔒</span>
                    <span className="address-text">aurelix-campaign.concept/consultation</span>
                  </div>
                </div>

                <div className="browser-viewport viewport-narrow">
                  <div className="narrow-concept-header">
                    <span className="narrow-badge">LIMITED BESPOKE APPOINTMENTS</span>
                    <h3 className="narrow-title">Artistry in Hair, Sculpted for You</h3>
                    <p className="narrow-sub">
                      Experience private salon consultations focused on personalized color formulation and precision styling.
                    </p>
                  </div>

                  <div className="narrow-features">
                    <div className="narrow-feat-item">
                      <span className="narrow-dot">✓</span>
                      <span>One-on-one master stylist consultation</span>
                    </div>
                    <div className="narrow-feat-item">
                      <span className="narrow-dot">✓</span>
                      <span>Custom color chemistry & scalp therapy</span>
                    </div>
                    <div className="narrow-feat-item">
                      <span className="narrow-dot">✓</span>
                      <span>Quiet, boutique salon sanctuary</span>
                    </div>
                  </div>

                  {/* Focused Call to Action Form Module */}
                  <div className="narrow-action-box">
                    <h4 className="action-box-title">Reserve Your Consultation</h4>
                    <div className="mock-input-field">Your Name</div>
                    <div className="mock-input-field">Direct Telephone / Email</div>
                    <div className="mock-btn-submit">Confirm Available Date →</div>
                    <span className="action-box-note">Complimentary initial assessment.</span>
                  </div>
                </div>
              </div>
              <p className="preview-caption">DEMONSTRATION PREVIEW • NOT A CLIENT PROJECT</p>
            </div>

            <div className="section-divider" aria-hidden="true" />
          </article>


          {/* ------------------------------------------------------------------
              SERVICE 03 — Website Redesigns
              Composition: Side-by-side before-and-after browser-window composition
              ------------------------------------------------------------------ */}
          <article className="service-composition composition-comparison">
            <div className="service-meta-top">
              <div className="service-heading-group">
                <span className="service-number">03</span>
                <h2 className="service-title">Website Redesigns</h2>
              </div>
              <p className="service-desc">
                A considered refresh for an existing website that needs better presentation, clearer navigation or an improved mobile experience.
              </p>
              <div className="service-deliverables-block">
                <h3 className="deliverables-label">DELIVERABLES</h3>
                <ul className="deliverables-grid">
                  <li>
                    <span className="bullet-dash" aria-hidden="true">—</span>
                    <span>Review of the existing website</span>
                  </li>
                  <li>
                    <span className="bullet-dash" aria-hidden="true">—</span>
                    <span>Updated visual direction and layouts</span>
                  </li>
                  <li>
                    <span className="bullet-dash" aria-hidden="true">—</span>
                    <span>Responsive design improvements</span>
                  </li>
                  <li>
                    <span className="bullet-dash" aria-hidden="true">—</span>
                    <span>Implementation of the agreed redesign scope</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Side-by-Side Before & After Browser Windows */}
            <div className="comparison-dual-stage">
              {/* BEFORE: Legacy Website Concept */}
              <div className="comparison-side side-before">
                <div className="comparison-label-bar label-before">
                  <span className="status-tag">BEFORE</span>
                  <span className="status-desc">Outdated, Cluttered & Disorganized</span>
                </div>

                <div className="mockup-frame-comparison">
                  <div className="browser-chrome legacy-chrome">
                    <div className="window-dots" aria-hidden="true">
                      <span className="dot dot-legacy" />
                      <span className="dot dot-legacy" />
                      <span className="dot dot-legacy" />
                    </div>
                    <div className="browser-address-bar legacy-address">
                      <span className="address-text">http://legacy-business-site.example/index.htm</span>
                    </div>
                  </div>

                  <div className="browser-viewport viewport-legacy">
                    <div className="legacy-header-bar">
                      <span className="legacy-logo">COMPANY_LOGO_V2_FINAL.BMP</span>
                      <span className="legacy-phone">CALL TODAY: 1-800-555-0199</span>
                    </div>
                    <div className="legacy-nav-clutter">
                      <span>Home</span>
                      <span>Services (14 subpages)</span>
                      <span>Our History (1998)</span>
                      <span>Staff Directory</span>
                      <span>News Blog</span>
                      <span>Forms</span>
                    </div>
                    <div className="legacy-body-clutter">
                      <div className="legacy-alert-strip">
                        *** WELCOME TO OUR NEW WEBSITE! UPDATED AUGUST 2018 ***
                      </div>
                      <p className="legacy-dense-text">
                        We are a company that does many things for many people. Click on our links above or call our office during business hours to request a catalogue of our full services.
                      </p>
                      <div className="legacy-link-grid">
                        <span className="legacy-blue-link">Click here for PDF Form</span>
                        <span className="legacy-blue-link">Download Map (.doc)</span>
                        <span className="legacy-blue-link">Read Company Policy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AFTER: Considered VYOMASANDHI Studio Redesign */}
              <div className="comparison-side side-after">
                <div className="comparison-label-bar label-after">
                  <span className="status-tag tag-bronze">AFTER</span>
                  <span className="status-desc">Editorial Minimalism, Clear Hierarchy & Speed</span>
                </div>

                <div className="mockup-frame-comparison frame-after-glow">
                  <div className="browser-chrome">
                    <div className="window-dots" aria-hidden="true">
                      <span className="dot dot-close" />
                      <span className="dot dot-minimize" />
                      <span className="dot dot-expand" />
                    </div>
                    <div className="browser-address-bar">
                      <span className="ssl-lock" aria-hidden="true">🔒</span>
                      <span className="address-text">business.concept/modern</span>
                    </div>
                  </div>

                  <div className="browser-viewport viewport-modern">
                    <div className="modern-nav-bar">
                      <span className="modern-brand">◆ STUDIO PRACTICE</span>
                      <span className="modern-btn-pill">Enquire Now</span>
                    </div>
                    <div className="modern-hero-content">
                      <h4 className="modern-headline">
                        Focused services for <span className="modern-serif">discerning clients.</span>
                      </h4>
                      <p className="modern-sub">
                        Streamlined three-tier services, responsive booking pathways, and rapid page speed.
                      </p>
                      <div className="modern-card-highlight">
                        <span>Direct Booking Available</span>
                        <span className="modern-arrow">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="preview-caption">CONCEPT REDESIGN DEMONSTRATION • DOES NOT INVENT PERFORMANCE CLAIMS</p>
            <div className="section-divider" aria-hidden="true" />
          </article>

        </div>
      </section>

      {/* ====================================================================
          Section 3 — Our Approach
          ==================================================================== */}
      <section className="services-approach-section" aria-label="Our Approach">
        <div className="services-container">
          <div className="services-approach-panel">
            <h2 className="approach-heading">The right scope. A clear process.</h2>
            <p className="approach-text">
              Every project begins by understanding your requirements. We agree on the pages, features, timeline and cost before development begins.
            </p>
            <div className="approach-link-wrap">
              <Link to="/process" className="text-cta">
                <span>Explore our five-stage process</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Section 4 — Closing Call to Action
          ==================================================================== */}
      <section className="services-closing-section" aria-label="Closing Call to Action">
        <div className="services-container">
          <div className="services-closing-cta">
            <h2 className="closing-cta-title">Have a website in mind?</h2>
            <p className="closing-cta-text">
              Let's understand what your business needs and work out the right approach.
            </p>
            <Link to="/contact" className="cta-button services-cta-btn">
              <span>Start a Project Enquiry</span>
              <span className="cta-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

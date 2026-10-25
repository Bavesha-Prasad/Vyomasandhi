import { useState } from 'react'
import { Link } from 'react-router-dom'
import './WorkPage.css'

export default function WorkPage() {
  const [activeModal, setActiveModal] = useState(null)

  const projects = [
    {
      id: 'klaro',
      title: 'Klaro Home Services',
      tagline: 'High-Trust Domestic Services Platform',
      category: 'Home & Trade Services',
      isConcept: true,
      liveUrl: 'https://6addee5e33a015d5ea92e8f1--karloservices.netlify.app/',
      description:
        'Klaro Home Services is a fictional cleaning and home-services website concept developed to showcase our design and engineering standards for service-based businesses. Built with a mobile-first responsive layout, it features structured service information, clear tiering, and an interactive demonstration booking flow.',
      disclosure:
        'Fictional Concept Notice: Klaro Home Services is an illustrative prototype. All services and pricing are conceptual, and the interactive booking flow is a demonstration that does not create real appointments or charges.',
      designDirection:
        'Editorial utility with high-contrast information hierarchy. We used warm, grounding neutrals paired with deep obsidian foundations to establish dependability and warmth. Navigation is streamlined so homeowners can easily explore service tiers and navigate the demonstration booking flow.',
      technologies: ['React', 'Semantic HTML5', 'Vanilla CSS', 'Responsive Grid', 'Form Validation'],
      keyFeatures: [
        'Fully responsive design optimized for mobile and desktop screens',
        'Structured domestic cleaning & home service information and tiers',
        'Demonstration booking flow (interactive prototype without placing real bookings)',
        'Transparent pricing breakdown avoiding hidden consultation fees',
      ],
      mockupDetails: {
        accentColor: '#B08D57',
        badgeText: 'CONCEPT STUDY',
        heroHeadline: 'Premium domestic care, scheduled without friction.',
        stats: [
          { label: 'Booking Flow', val: 'Demo Prototype' },
          { label: 'Responsive', val: 'Mobile-First' },
          { label: 'Audit Status', val: '100% Accessible' },
        ],
      },
    },
    {
      id: 'aurelix',
      title: 'AURELIX Hair Atelier',
      tagline: 'Boutique Salon & Aesthetic Practice',
      category: 'Luxury Lifestyle & Beauty',
      isConcept: true,
      description:
        'AURELIX Hair Atelier is a concept study exploring how luxury service businesses can showcase high-end craftsmanship without visual clutter. The experience blends sculptural editorial typography with discreet consultation request pathways.',
      designDirection:
        'Minimalist editorial luxury. A deep Glossy Obsidian canvas punctuated by warm off-white typography and subtle bronze accents. Large typographic headings create an intimate, haute-couture atmosphere while maintaining fast load times and effortless readability.',
      technologies: ['React', 'CSS Custom Properties', 'Editorial Typography', 'Component Architecture'],
      keyFeatures: [
        'Curated gallery layout highlighting bespoke transformations',
        'Individual stylist bios and artistic specializations',
        'Private consultation enquiry form with preferred timeslot selection',
        'Subtle glossy reflection borders and elevated dark surface styling',
      ],
      mockupDetails: {
        accentColor: '#B08D57',
        badgeText: 'CONCEPT STUDY',
        heroHeadline: 'Artistry in hair, thoughtfully sculpted for the individual.',
        stats: [
          { label: 'Editorial Tone', val: 'Haute Minimalist' },
          { label: 'Color System', val: 'Glossy Obsidian' },
          { label: 'Typography', val: 'Serif + Grotesque' },
        ],
      },
    },
  ]

  return (
    <div className="work-page">
      {/* Page Header */}
      <header className="page-header">
        <div className="page-header-container">
          <span className="page-kicker">SELECTED WORK & STUDIES</span>
          <h1 className="page-title">
            Curated concept projects, <span className="title-serif">honestly documented.</span>
          </h1>
          <p className="page-description">
            To showcase our design language and engineering capabilities with complete transparency,
            we have developed two comprehensive concept studies. Both are fictional projects created to demonstrate
            our studio craftsmanship.
          </p>
        </div>
      </header>

      {/* Concept Projects Showcase */}
      <section className="work-main-section" aria-label="Portfolio Projects">
        <div className="work-container">
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card" id={project.id}>
                {/* Visual Concept Banner */}
                <div className="project-banner">
                  <div className="banner-top-bar">
                    <div className="banner-badge-group">
                      <span className="concept-notice-badge">FICTIONAL CONCEPT PROJECT</span>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="banner-live-btn"
                          title="Open live website in a new tab"
                        >
                          <span className="live-dot" aria-hidden="true" />
                          <span>Live Website Active</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                    <span className="category-pill">{project.category}</span>
                  </div>

                  <div className="banner-editorial-art">
                    <div className="art-motif" aria-hidden="true">◆</div>
                    <h2 className="art-headline">{project.mockupDetails.heroHeadline}</h2>
                    <p className="art-brand-watermark">{project.title.toUpperCase()}</p>
                  </div>

                  <div className="banner-bottom-bar">
                    <div className="banner-stats">
                      {project.mockupDetails.stats.map((stat, i) => (
                        <div key={i} className="b-stat">
                          <span className="b-stat-val">{stat.val}</span>
                          <span className="b-stat-label">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content & Case Study Details */}
                <div className="project-content">
                  <div className="project-heading-wrap">
                    <div className="project-header-top-row">
                      <div>
                        <span className="project-tagline">{project.tagline}</span>
                        <h3 className="project-title">{project.title}</h3>
                      </div>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="prominent-visit-btn"
                          id={`${project.id}-top-visit-btn`}
                          aria-label={`Visit live demo for ${project.title}`}
                        >
                          <span className="live-dot" aria-hidden="true" />
                          <span>Visit Live Website</span>
                          <span className="btn-arrow" aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="project-description">{project.description}</p>

                  {project.disclosure && (
                    <div className="project-disclosure-note">
                      <span className="disclosure-icon" aria-hidden="true">ℹ</span>
                      <span>{project.disclosure}</span>
                    </div>
                  )}

                  {project.liveUrl && (
                    <div className="project-demo-banner-box">
                      <div className="demo-box-info">
                        <div className="demo-box-badge">INTERACTIVE PROTOTYPE</div>
                        <h4 className="demo-box-heading">Experience the Klaro live website</h4>
                        <p className="demo-box-desc">
                          Explore the responsive mobile-first layout, service tiers, and interactive booking demonstration flow in real-time.
                        </p>
                      </div>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="demo-box-cta-btn"
                        id={`${project.id}-box-visit-btn`}
                      >
                        <span>Open Klaro Website</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  )}

                  <div className="project-section-block">
                    <h4 className="block-title">Design Direction</h4>
                    <p className="block-text">{project.designDirection}</p>
                  </div>

                  <div className="project-section-block">
                    <h4 className="block-title">Key Architectural Features</h4>
                    <ul className="features-list">
                      {project.keyFeatures.map((feat, idx) => (
                        <li key={idx}>
                          <span className="feat-check" aria-hidden="true">✦</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-footer-bar">
                    <div className="tech-tags">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="live-demo-link"
                          id={`${project.id}-live-demo`}
                        >
                          <span>Visit Live Website</span>
                          <span aria-hidden="true" className="external-arrow">↗</span>
                        </a>
                      )}

                      <button
                        type="button"
                        className="demo-trigger-btn"
                        onClick={() => setActiveModal(project)}
                      >
                        <span>View Study Details</span>
                        <span aria-hidden="true">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Transparency & Methodology Statement */}
          <div className="integrity-card">
            <div className="integrity-icon" aria-hidden="true">ℹ</div>
            <div>
              <h3 className="integrity-title">Transparency in Our Portfolio</h3>
              <p className="integrity-text">
                VYOMASANDHI does not present mock projects as real clients, nor do we invent client testimonials, fabricated revenue numbers, or fictitious business metrics. Klaro Home Services and AURELIX Hair Atelier are genuine design and front-end code demonstrations built to give prospective clients an honest view of our standards before initiating a conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Details Modal */}
      {activeModal && (
        <div className="modal-backdrop" onClick={() => setActiveModal(null)} role="dialog" aria-modal="true">
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="concept-notice-badge">FICTIONAL CONCEPT PROJECT</span>
                <h3 className="modal-title">{activeModal.title}</h3>
                <p className="modal-subtitle">{activeModal.tagline}</p>
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={() => setActiveModal(null)}
                aria-label="Close study details"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              {activeModal.disclosure && (
                <div className="project-disclosure-note">
                  <span className="disclosure-icon" aria-hidden="true">ℹ</span>
                  <span>{activeModal.disclosure}</span>
                </div>
              )}
              <div className="modal-section">
                <h4>Concept Intent</h4>
                <p>{activeModal.description}</p>
              </div>
              <div className="modal-section">
                <h4>Design Direction</h4>
                <p>{activeModal.designDirection}</p>
              </div>
              <div className="modal-section">
                <h4>Engineered Features</h4>
                <ul className="modal-list">
                  {activeModal.keyFeatures.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-section">
                <h4>Technology Stack</h4>
                <div className="tech-tags">
                  {activeModal.technologies.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div className="modal-actions">
                {activeModal.liveUrl && (
                  <a
                    href={activeModal.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-demo-link"
                  >
                    <span>Visit Live Website</span>
                    <span aria-hidden="true" className="external-arrow">↗</span>
                  </a>
                )}
                <Link to="/contact" className="cta-button cta-secondary" onClick={() => setActiveModal(null)}>
                  <span>Discuss a Similar Project</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

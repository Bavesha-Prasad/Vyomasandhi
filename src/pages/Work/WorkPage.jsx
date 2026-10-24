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
      description:
        'Klaro Home Services is a conceptual web platform created to demonstrate our approach to service-based businesses. The design emphasizes immediate clarity, neighborhood trust markers, straightforward service bundles, and a transparent enquiry flow.',
      designDirection:
        'Editorial utility with high-contrast information hierarchy. We used warm, grounding neutrals paired with deep obsidian foundations to establish dependability and warmth. Navigation is streamlined to get visitors to a quote request within two clicks.',
      technologies: ['React', 'Semantic HTML5', 'Vanilla CSS', 'Responsive Grid', 'Form Validation'],
      keyFeatures: [
        'Instant quote estimation flow with tiered service options',
        'Transparent pricing breakdown avoiding hidden consultation fees',
        'Frictionless mobile layout optimized for homeowners on the move',
        'Structured service areas and booking availability windows',
      ],
      mockupDetails: {
        accentColor: '#B08D57',
        badgeText: 'CONCEPT STUDY',
        heroHeadline: 'Premium domestic care, scheduled without friction.',
        stats: [
          { label: 'Booking Flow', val: '2 Steps' },
          { label: 'Asset Weight', val: '< 150KB' },
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
                    <span className="concept-notice-badge">FICTIONAL CONCEPT PROJECT</span>
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
                    <span className="project-tagline">{project.tagline}</span>
                    <h3 className="project-title">{project.title}</h3>
                  </div>

                  <p className="project-description">{project.description}</p>

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
              <Link to="/contact" className="cta-button" onClick={() => setActiveModal(null)}>
                <span>Discuss a Similar Project</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

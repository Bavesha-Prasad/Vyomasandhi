import { Link } from 'react-router-dom'
import './ProcessPage.css'

export default function ProcessPage() {
  const stages = [
    {
      num: '01',
      title: 'Discover',
      sentence: 'We learn about your business, audience, goals and current challenges.',
      role: 'Share business context, target customers, existing materials and key challenges.',
      deliverables: [
        'Discovery summary',
        'Project goals and scope alignment',
        'Initial website structure',
      ],
    },
    {
      num: '02',
      title: 'Define',
      sentence: 'We agree on the website structure, priorities, content and project scope.',
      role: 'Confirm requirements, prioritise pages and provide available content.',
      deliverables: [
        'Agreed sitemap',
        'Page requirements',
        'Project scope and milestones',
      ],
    },
    {
      num: '03',
      title: 'Design',
      sentence: 'We establish a clear visual direction and intuitive user experience.',
      role: 'Review design concepts and provide consolidated feedback.',
      deliverables: [
        'Visual direction',
        'Page layouts',
        'Responsive design specifications',
      ],
    },
    {
      num: '04',
      title: 'Develop',
      sentence: 'We build a responsive, accessible website aligned with the approved design.',
      role: 'Review the working website and supply any outstanding content or assets.',
      deliverables: [
        'Developed website',
        'Responsive layouts',
        'Functional navigation and agreed interactions',
      ],
    },
    {
      num: '05',
      title: 'Launch',
      sentence: 'We test the finished website and prepare it for release.',
      role: 'Approve the final website, confirm required details and provide domain or hosting access when needed.',
      deliverables: [
        'Final quality checks',
        'Launch preparation',
        'Deployment support within the agreed scope',
      ],
    },
  ]

  return (
    <div className="process-page">
      {/* Page Header */}
      <header className="process-header">
        <div className="process-header-container">
          <span className="process-eyebrow">HOW WE WORK</span>
          <h1 className="process-title">
            A thoughtful process. <span className="title-serif">A considered result.</span>
          </h1>
          <p className="process-supporting">
            Every project follows a clear path from understanding your business to launching the finished website.
          </p>
        </div>
      </header>

      {/* Editorial Timeline Section */}
      <section className="timeline-section" aria-label="Process Timeline">
        <div className="timeline-container">
          <div className="editorial-timeline">
            {stages.map((stage, index) => {
              const isLast = index === stages.length - 1
              return (
                <article key={stage.num} className={`timeline-stage ${isLast ? 'is-last' : ''}`}>
                  {/* Timeline Axis: Node & Vertical Line */}
                  <div className="timeline-axis" aria-hidden="true">
                    <span className="timeline-node" />
                    {!isLast && <div className="timeline-line" />}
                  </div>

                  {/* Stage Body */}
                  <div className="stage-body">
                    <div className="stage-header">
                      <span className="stage-number">{stage.num}</span>
                      <h2 className="stage-title">{stage.title}</h2>
                    </div>

                    <p className="stage-sentence">{stage.sentence}</p>

                    <div className="stage-columns">
                      <div className="stage-col role-col">
                        <h3 className="col-heading">YOUR ROLE</h3>
                        <p className="col-text">{stage.role}</p>
                      </div>

                      <div className="stage-col deliverables-col">
                        <h3 className="col-heading">OUR DELIVERABLES</h3>
                        <ul className="deliverables-list">
                          {stage.deliverables.map((item, idx) => (
                            <li key={idx}>
                              <span className="bullet-dash" aria-hidden="true">—</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {!isLast && <div className="stage-divider" aria-hidden="true" />}
                  </div>
                </article>
              )
            })}
          </div>

          {/* Clean Editorial Call to Action */}
          <div className="process-footer-cta">
            <h3 className="footer-cta-title">Ready to begin with Stage 01?</h3>
            <p className="footer-cta-desc">
              Tell us about your project. We’ll schedule a thoughtful conversation to see if we’re the right studio for your business.
            </p>
            <Link to="/contact" className="cta-button">
              <span>Start a Project Enquiry</span>
              <span className="cta-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

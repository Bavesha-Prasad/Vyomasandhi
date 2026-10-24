import { useState } from 'react'
import './ContactPage.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: 'Business Website',
    budget: 'Not sure yet',
    details: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // { type: 'success' | 'error' | 'unconfigured', message: string }

  // Configured managed form delivery endpoint (e.g. Formspree, Basin, Web3Forms)
  const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || ''

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.details.trim()) {
      newErrors.details = 'Please tell us a little about your project.'
    } else if (formData.details.trim().length < 10) {
      newErrors.details = 'Please provide at least 10 characters describing your project.'
    }
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Honest handling: never fake a successful delivery if no provider is configured
    if (!FORM_ENDPOINT) {
      setSubmitStatus({
        type: 'unconfigured',
        message:
          'The managed form delivery provider is not yet configured (VITE_CONTACT_FORM_ENDPOINT). Your enquiry was verified locally, but has not been sent. To enable delivery, please configure a managed form service endpoint in your environment.',
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          serviceType: formData.serviceType,
          budget: formData.budget,
          details: formData.details,
        }),
      })

      if (res.ok) {
        setSubmitStatus({
          type: 'success',
          message:
            'Thank you. Your project enquiry has been delivered successfully. We will review what you have shared and get back to you thoughtfully.',
        })
        setFormData({
          name: '',
          email: '',
          serviceType: 'Business Website',
          budget: 'Not sure yet',
          details: '',
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message:
            'We were unable to deliver your enquiry. The form service returned an error. Please try again or reach out directly.',
        })
      }
    } catch (err) {
      setSubmitStatus({
        type: 'error',
        message:
          'A network error occurred while connecting to the form delivery service. Please check your connection and try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-two-column-layout">
          {/* Left Column: Editorial Introduction */}
          <section className="contact-intro-side" aria-label="Contact Introduction">
            <span className="contact-eyebrow">HAVE SOMETHING IN MIND?</span>
            <h1 className="contact-main-heading">
              Let's make something <span className="title-serif">meaningful.</span>
            </h1>
            <p className="contact-supporting-copy">
              A website idea, a business taking its next step, or an existing site ready for a fresh direction. Tell us what you're thinking.
            </p>

            <div className="intro-closing-block">
              <div className="intro-fine-divider" aria-hidden="true" />
              <p className="intro-reassurance-line">“No pressure. Just a conversation.”</p>
            </div>
          </section>

          {/* Right Column: Project Enquiry Form */}
          <section className="contact-form-side" aria-label="Project Enquiry Form">
            <div className="contact-form-wrapper">
              <h2 className="form-heading">Tell us about your project.</h2>

              {submitStatus && (
                <div
                  className={`form-status-alert status-${submitStatus.type}`}
                  role={submitStatus.type === 'error' ? 'alert' : 'status'}
                  aria-live="polite"
                >
                  <div className="status-badge-tag">
                    {submitStatus.type === 'success' && 'MESSAGE SENT'}
                    {submitStatus.type === 'error' && 'DELIVERY ERROR'}
                    {submitStatus.type === 'unconfigured' && 'FORM PROVIDER NOTICE'}
                  </div>
                  <p className="status-text">{submitStatus.message}</p>
                </div>
              )}

              {submitStatus?.type !== 'success' && (
                <form className="project-enquiry-form" onSubmit={handleSubmit} noValidate>
                  {/* Name field (Required) */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Name <span className="label-req" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? 'input-error' : ''}`}
                      placeholder="Your name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-err' : undefined}
                    />
                    {errors.name && (
                      <span id="name-err" className="inline-error">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email address field (Required & Validated) */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email address <span className="label-req" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'input-error' : ''}`}
                      placeholder="name@example.com"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-err' : undefined}
                    />
                    {errors.email && (
                      <span id="email-err" className="inline-error">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Service type field (Select) */}
                  <div className="form-group">
                    <label htmlFor="serviceType" className="form-label">
                      Service type
                    </label>
                    <div className="select-wrapper">
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="Business Website">Business Website</option>
                        <option value="Landing Page">Landing Page</option>
                        <option value="Website Redesign">Website Redesign</option>
                      </select>
                    </div>
                  </div>

                  {/* Approximate budget field (Optional with "Not sure yet") */}
                  <div className="form-group">
                    <label htmlFor="budget" className="form-label">
                      Approximate budget <span className="label-opt">(optional)</span>
                    </label>
                    <div className="select-wrapper">
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="Not sure yet">Not sure yet</option>
                        <option value="Starting ~$200">Starting ~$200</option>
                        <option value="$200–$500">$200–$500</option>
                        <option value="$500+">$500+</option>
                      </select>
                    </div>
                  </div>

                  {/* Project details field (Required, concise prompt) */}
                  <div className="form-group">
                    <label htmlFor="details" className="form-label">
                      Project details <span className="label-req" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows="4"
                      value={formData.details}
                      onChange={handleChange}
                      className={`form-textarea ${errors.details ? 'input-error' : ''}`}
                      placeholder="Tell us what you're thinking, what your business does, or what you'd like the website to achieve..."
                      aria-required="true"
                      aria-invalid={!!errors.details}
                      aria-describedby={errors.details ? 'details-err' : undefined}
                    />
                    {errors.details && (
                      <span id="details-err" className="inline-error">
                        {errors.details}
                      </span>
                    )}
                  </div>

                  {/* Submit button with loading state */}
                  <div className="form-submit-block">
                    <button
                      type="submit"
                      className="cta-button submit-btn"
                      disabled={isSubmitting}
                    >
                      <span>{isSubmitting ? 'Sending...' : 'Send project enquiry'}</span>
                      <span className="cta-arrow" aria-hidden="true">→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

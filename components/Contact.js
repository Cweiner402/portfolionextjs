'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlineArrowRight } from 'react-icons/hi'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formStatus, setFormStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    const form = e.target
    const formData = new FormData(form)
    
    // Convert FormData to JSON for our API
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      if (response.ok) {
        setFormStatus('success')
        form.reset()
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background elements */}
      <div className="glow glow-accent w-[600px] h-[600px] -bottom-64 left-1/2 -translate-x-1/2 opacity-10" />
      
      <div className="wrapper relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-center mb-12"
          >
            <p className="section-label">Get In Touch</p>
            <h2 className="mb-4">Let&apos;s Build Something Together</h2>
            <p className="max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
              Have a project in mind? I&apos;m always interested in hearing about 
              complex challenges and opportunities to make a real impact.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="card p-6 h-full">
                <h3 className="font-display font-semibold mb-6" style={{ color: 'var(--foreground)' }}>
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-elevated)' }}>
                      <HiOutlineMail className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                    </div>
                    <div>
                      <p className="text-sm mb-1" style={{ color: 'var(--muted-foreground)' }}>Email</p>
                      <p style={{ color: 'var(--foreground-muted)' }}>Available via form</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-elevated)' }}>
                      <HiOutlineLocationMarker className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                    </div>
                    <div>
                      <p className="text-sm mb-1" style={{ color: 'var(--muted-foreground)' }}>Location</p>
                      <p style={{ color: 'var(--foreground-muted)' }}>Remote / US Based</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8" style={{ borderTop: '1px solid var(--border-muted)' }}>
                  <p className="text-sm mb-4" style={{ color: 'var(--muted-foreground)' }}>Connect with me</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.linkedin.com/in/chris-weiner-996037114/"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-lg border transition-all"
                      style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-muted)', color: 'var(--muted)' }}
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn size={20} />
                    </a>
                    <a
                      href="https://github.com/cweiner402"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-lg border transition-all"
                      style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-muted)', color: 'var(--muted)' }}
                      aria-label="GitHub"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>

                {/* Availability badge */}
                <div 
                  className="mt-8 p-4 rounded-lg border"
                  style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.2)' }}
                >
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--success)' }}></span>
                      <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: 'var(--success)' }}></span>
                    </span>
                    <span className="text-sm font-medium" style={{ color: 'var(--success)' }}>
                      Available for new projects
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="card p-6">
                {formStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                    >
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--success)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Message Sent!</h3>
                    <p className="mb-6" style={{ color: 'var(--muted)' }}>Thanks for reaching out. I&apos;ll get back to you soon.</p>
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="btn-outline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--muted)' }}>
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-lg border outline-none transition-colors"
                          style={{ 
                            backgroundColor: 'var(--bg-elevated)', 
                            borderColor: 'var(--border-muted)', 
                            color: 'var(--foreground-muted)' 
                          }}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--muted)' }}>
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-lg border outline-none transition-colors"
                          style={{ 
                            backgroundColor: 'var(--bg-elevated)', 
                            borderColor: 'var(--border-muted)', 
                            color: 'var(--foreground-muted)' 
                          }}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: 'var(--muted)' }}>
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 rounded-lg border outline-none transition-colors"
                        style={{ 
                          backgroundColor: 'var(--bg-elevated)', 
                          borderColor: 'var(--border-muted)', 
                          color: 'var(--foreground-muted)' 
                        }}
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--muted)' }}>
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        className="w-full px-4 py-3 rounded-lg border outline-none transition-colors resize-none"
                        style={{ 
                          backgroundColor: 'var(--bg-elevated)', 
                          borderColor: 'var(--border-muted)', 
                          color: 'var(--foreground-muted)' 
                        }}
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <HiOutlineArrowRight />
                        </>
                      )}
                    </button>

                    {formStatus === 'error' && (
                      <p className="text-center text-sm" style={{ color: 'var(--error)' }}>
                        Something went wrong. Please try again or reach out via LinkedIn.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="mt-24 pt-8"
        style={{ borderTop: '1px solid var(--border-muted)' }}
      >
        <div className="wrapper">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm" style={{ color: 'var(--muted-foreground)' }}>
            <p>© {new Date().getFullYear()} Chris Weiner. Built with Next.js & Tailwind.</p>
            <div className="flex items-center gap-6">
              <Link href="/#about" className="transition-colors hover:text-foreground">About</Link>
              <Link href="/#projects" className="transition-colors hover:text-foreground">Projects</Link>
              <Link href="/#contact" className="transition-colors hover:text-foreground">Contact</Link>
            </div>
          </div>
        </div>
      </motion.footer>
    </section>
  )
}

export default Contact

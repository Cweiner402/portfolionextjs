'use client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { href: '/', label: 'Home', section: 'home' },
  { href: '/#about', label: 'About', section: 'about' },
  { href: '/#process', label: 'Process', section: 'process' },
  { href: '/#skills', label: 'Skills', section: 'skills' },
  { href: '/#projects', label: 'Projects', section: 'projects' },
  { href: '/#contact', label: 'Contact', section: 'contact' },
]

const Navbar = () => {
  const router = useRouter()
  const [nav, setNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const handleNav = () => setNav(!nav)
  const closeNav = () => setNav(false)

  // Check if we're on the homepage
  const isHomePage = router.pathname === '/'

  // Handle nav click - navigate properly whether on homepage or not
  const handleNavClick = (e, link) => {
    e.preventDefault()
    closeNav()

    if (link.section === 'home') {
      if (isHomePage) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        router.push('/')
      }
      return
    }

    if (isHomePage) {
      // On homepage - just scroll to section
      const element = document.getElementById(link.section)
      if (element) {
        const offset = 80
        const bodyRect = document.body.getBoundingClientRect().top
        const elementRect = element.getBoundingClientRect().top
        const elementPosition = elementRect - bodyRect
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    } else {
      // On other page - navigate to homepage with hash
      router.push(link.href)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Only track active section on homepage
      if (!isHomePage) return

      const sections = navLinks.map(link => link.section).filter(s => s !== 'home')
      let current = 'home'

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            current = section
          }
        }
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Run once on mount
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  // Reset active section when navigating away from homepage
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('')
    }
  }, [isHomePage])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 backdrop-blur-lg border-b'
          : 'py-5'
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.9)' : 'transparent',
        borderColor: scrolled ? 'var(--border-muted)' : 'transparent'
      }}
    >
      <div className="wrapper flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-muted) 100%)' }}
          >
            <span className="font-bold text-lg text-white">CW</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-all relative"
                  style={{ color: activeSection === link.section ? 'var(--accent)' : 'var(--muted)' }}
                >
                  {link.label}
                  {activeSection === link.section && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 rounded-lg -z-10"
                      style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={handleNav}
            className="p-2 rounded-lg border transition-all"
            style={{
              backgroundColor: 'var(--bg-elevated)',
              borderColor: 'var(--border-muted)',
              color: 'var(--muted)'
            }}
            aria-label="Toggle menu"
          >
            {nav ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {nav && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeNav}
              className="fixed inset-0 md:hidden"
              style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)' }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[80%] max-w-sm h-full border-l md:hidden"
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-muted)' }}
            >
              <div className="flex flex-col h-full p-8">
                <div className="flex justify-between items-center mb-12">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-muted) 100%)' }}
                  >
                    <span className="font-bold text-lg text-white">CW</span>
                  </div>
                  <button
                    onClick={closeNav}
                    className="p-2 rounded-lg border"
                    style={{
                      backgroundColor: 'var(--bg-elevated)',
                      borderColor: 'var(--border-muted)',
                      color: 'var(--muted)'
                    }}
                    aria-label="Close menu"
                  >
                    <HiOutlineX size={24} />
                  </button>
                </div>

                <ul className="flex flex-col gap-2 mb-auto">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link)}
                        className="block px-4 py-3 rounded-lg text-lg font-medium transition-all"
                        style={{
                          color: activeSection === link.section ? 'var(--accent)' : 'var(--foreground-muted)',
                          backgroundColor: activeSection === link.section ? 'rgba(59, 130, 246, 0.1)' : 'transparent'
                        }}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Social links */}
                <div className="pt-8" style={{ borderTop: '1px solid var(--border-muted)' }}>
                  <p className="text-sm mb-4" style={{ color: 'var(--muted-foreground)' }}>Connect with me</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.linkedin.com/in/chris-weiner-996037114/"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-lg border transition-all"
                      style={{
                        backgroundColor: 'var(--bg-elevated)',
                        borderColor: 'var(--border-muted)',
                        color: 'var(--muted)'
                      }}
                    >
                      <FaLinkedinIn size={20} />
                    </a>
                    <a
                      href="https://github.com/cweiner402"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-lg border transition-all"
                      style={{
                        backgroundColor: 'var(--bg-elevated)',
                        borderColor: 'var(--border-muted)',
                        color: 'var(--muted)'
                      }}
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

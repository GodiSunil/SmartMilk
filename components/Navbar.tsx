'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home')

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Features', id: 'features' },
    { name: 'Screenshot', id: 'screenshot' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(navItems[i].name)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="bg-milkyway-dark px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Image 
            src="/assets/logo.png" 
            alt="Milkyway Logo" 
            width={32} 
            height={32}
            className="w-8 h-8"
          />
          <h1 className="text-white font-itim text-3xl font-normal leading-none capitalize">
            Milkyway
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveLink(item.name)
                scrollToSection(item.id)
              }}
              className={`nav-link ${activeLink === item.name ? 'active' : ''}`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar

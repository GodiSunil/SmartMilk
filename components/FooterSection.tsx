'use client'

import { useState } from 'react'
import Image from 'next/image'

const FooterSection = () => {
  const [activeLink, setActiveLink] = useState('Terms & Conditions')

  const footerLinks = [
    { name: 'About', id: 'about' },
    { name: 'Terms & Conditions', id: 'terms' },
    { name: 'Privacy Policy', id: 'privacy' },
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

  return (
    <footer className="bg-[#202329] relative">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
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
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            {footerLinks.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveLink(item.name)
                  scrollToSection(item.id)
                }}
                className={`font-poppins font-normal text-sm leading-7 capitalize transition-colors duration-300 ${
                  activeLink === item.name 
                    ? 'text-[#0EA2EE]' 
                    : 'text-white hover:text-[#0EA2EE]'
                }`}
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '28px',
                  letterSpacing: '0%',
                  textTransform: 'capitalize'
                }}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="text-[#0EA2EE] hover:text-white transition-colors duration-300"
              aria-label="Facebook"
            >
              <Image 
                src="/assets/facebook.svg" 
                alt="Facebook" 
                width={24} 
                height={24}
                className="w-6 h-6"
              />
            </a>
            <a 
              href="#" 
              className="text-[#0EA2EE] hover:text-white transition-colors duration-300"
              aria-label="Twitter"
            >
              <Image 
                src="/assets/twitter.png" 
                alt="Twitter" 
                width={24} 
                height={24}
                className="w-6 h-6"
              />
            </a>
            <a 
              href="#" 
              className="text-[#0EA2EE] hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <Image 
                src="/assets/instagram.svg" 
                alt="Instagram" 
                width={24} 
                height={24}
                className="w-6 h-6"
              />
            </a>
            <a 
              href="#" 
              className="text-[#0EA2EE] hover:text-white transition-colors duration-300"
              aria-label="Google"
            >
              <Image 
                src="/assets/google.svg" 
                alt="Google" 
                width={24} 
                height={24}
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-6 border-t border-gray-600">
          <p 
            className="text-white text-center"
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '26px',
              letterSpacing: '0%',
              textAlign: 'center',
              textTransform: 'capitalize'
            }}
          >
            Copyright ©2021 Deonde.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection

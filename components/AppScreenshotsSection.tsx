'use client'

import Image from 'next/image'
import { useState } from 'react'

const AppScreenshotsSection = () => {
  const [activeSlide, setActiveSlide] = useState(2) // Start with middle slide (index 2)

  const screenshots = [
    { id: 1, src: '/assets/image2.png', alt: 'Welcome Screen' },
    { id: 2, src: '/assets/image3.png', alt: 'Delivery Details Screen' },
    { id: 3, src: '/assets/image4.png', alt: 'Home Screen' },
    { id: 4, src: '/assets/image5.png', alt: 'Customer Details Screen' },
    { id: 5, src: '/assets/image6.png', alt: 'History Screen' },
  ]

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              135deg,
              #292d32 0%,
              #282e34 50%,
              #292d32 100%
            )
          `
        }}
      />
      
      
      {/* Background Frame Images - Outer and Inner Frame Effect */}
      <div className="absolute inset-0 z-0">
        {/* Rectangle-275 (outer frame - brighter blue) */}
        <div 
          className="absolute top-4 bottom-4 w-full sm:w-[105%] md:w-[110%] lg:w-[115%] xl:w-[120%] left-1/2 transform -translate-x-1/2"
          style={{
            backgroundImage: 'url(/assets/Rectangle-275.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.2,
            zIndex: 1
          }}
        />
        
        {/* Rectangle-269 (inner frame - darker) */}
        <div 
          className="absolute top-4 bottom-4 w-full sm:w-[105%] md:w-[110%] lg:w-[115%] xl:w-[120%] left-1/2 transform -translate-x-1/2"
          style={{
            backgroundImage: 'url(/assets/Rectangle-269.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.15,
            zIndex: 2
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Headings */}
        <div className="text-center mb-16">
          <h3 className="text-sm md:text-base font-poppins font-semibold text-milkyway-blue uppercase tracking-wider mb-4">
            SCREENSHOTS
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white">
            App Screenshots
          </h2>
        </div>

        {/* Mobile Mockups Container */}
        <div className="relative">
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-5xl">
              {/* Mobile Mockups */}
              <div className="flex justify-center items-center space-x-4 md:space-x-6 lg:space-x-8">
                {screenshots.map((screenshot, index) => (
                  <div
                    key={screenshot.id}
                    className={`relative transition-all duration-500 ${
                      index === activeSlide
                        ? 'z-20 scale-110 md:scale-125'
                        : index === activeSlide - 1 || index === activeSlide + 1
                        ? 'z-10 scale-90 md:scale-100 opacity-80'
                        : 'z-0 scale-75 md:scale-90 opacity-60'
                    } ${
                      index < activeSlide - 1 ? '-ml-8 md:-ml-12 lg:-ml-16' : ''
                    } ${
                      index > activeSlide + 1 ? '-mr-8 md:-mr-12 lg:-mr-16' : ''
                    }`}
                    onClick={() => setActiveSlide(index)}
                  >
                    <div className="relative w-32 h-56 md:w-40 md:h-72 lg:w-48 lg:h-80">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority={index === activeSlide}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dotted Slider Navigation */}
        <div className="flex justify-center items-center mt-12 space-x-3">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? 'bg-milkyway-blue scale-125'
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows for Mobile */}
        <div className="flex justify-center items-center mt-8 space-x-4 md:hidden">
          <button
            onClick={() => setActiveSlide(Math.max(0, activeSlide - 1))}
            disabled={activeSlide === 0}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setActiveSlide(Math.min(screenshots.length - 1, activeSlide + 1))}
            disabled={activeSlide === screenshots.length - 1}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default AppScreenshotsSection

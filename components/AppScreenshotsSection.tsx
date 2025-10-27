'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const AppScreenshotsSection = () => {
  const [activeSlide, setActiveSlide] = useState(2)
  const [isHovered, setIsHovered] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [windowWidth, setWindowWidth] = useState(1024) // Default to a reasonable value

  useEffect(() => {
    setIsClient(true)
    setWindowWidth(window.innerWidth)
    
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const screenshots = [
    { id: 1, src: '/assets/image2.png', alt: 'Welcome Screen' },
    { id: 2, src: '/assets/image3.png', alt: 'Delivery Details Screen' },
    { id: 3, src: '/assets/image4.png', alt: 'Home Screen' },
    { id: 4, src: '/assets/image5.png', alt: 'Customer Details Screen' },
    { id: 5, src: '/assets/image6.png', alt: 'History Screen' },
  ]

  // Auto-rotate slides with smooth carousel movement
  useEffect(() => {
    if (isHovered) return
    
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))
    }, 3500) // Slightly longer interval for better visibility
    
    return () => clearInterval(timer)
  }, [isHovered, screenshots.length])

  // Touch event handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      setActiveSlide((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      setActiveSlide((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))
    }
  }


  // Handle slide change
  const goToSlide = (index: number) => {
    setActiveSlide(index)
  }


  return (
    <section 
      className="relative pt-12 pb-24 sm:pt-16 sm:pb-32 md:pt-20 md:pb-40 lg:pt-24 lg:pb-48 overflow-hidden w-full"
      style={{
        background: 'linear-gradient(180deg, #1A1E23 0%, #252A30 100%)',
        position: 'relative',
      }}
    >
      {/* Upper Design Image */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Image
          src="/assets/upper design.png"
          alt=""
          width={1920}
          height={200}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headings */}
        <div className="text-center pt-8 mb-16">
          <h3 className="text-sm font-poppins font-semibold text-milkyway-blue uppercase tracking-wider mb-4">
            SCREENSHOTS
          </h3>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-2">
            App Screenshots
          </h2>
        </div>

        {/* Screenshots Carousel */}
        <div 
          className="relative w-full overflow-hidden py-6 sm:py-8 md:py-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
            {/* Carousel Container */}
            <div className="relative w-[100%] max-w-8xl mx-auto">
              <div className="relative flex items-center justify-center">
                {/* Phone Mockups */}
                <div className="flex items-center justify-center">
                  {screenshots.map((screenshot, index) => {
                    const distance = Math.abs(activeSlide - index)
                    const isCentered = distance === 0
                    
                    // Calculate position relative to center
                    const offset = (index - activeSlide) * (windowWidth < 768 ? 180 : 280)
                    
                    // Calculate visual properties based on distance from center
                    let scale = 1
                    let opacity = 1
                    let blur = 0
                    let brightness = 1
                    let zIndex = 10
                    
                    if (distance === 0) {
                      // Center phone - highlighted
                      scale = 1.2
                      opacity = 0.8
                      brightness = 0.8
                      zIndex = 30
                      blur = 0
                    } else if (distance === 1) {
                      // Adjacent phones
                      scale = 0.8
                      opacity = 0.7
                      brightness = 0.6
                      zIndex = 20
                      blur = 1
                    } else if (distance === 2) {
                      // Further phones
                      scale = 0.65
                      opacity = 0.5
                      brightness = 0.4
                      zIndex = 10
                      blur = 2
                    } else {
                      // Far phones
                      scale = 0.5
                      opacity = 0.3
                      brightness = 0.3
                      zIndex = 0
                      blur = 3
                    }
                    
                    return (
                      <div
                        key={screenshot.id}
                        className="absolute transition-all duration-700 ease-out cursor-pointer"
                        style={{
                          transform: `translateX(${offset}px) scale(${scale})`,
                          opacity,
                          zIndex,
                          filter: `blur(${blur}px) brightness(${brightness})`,
                        }}
                        onClick={() => goToSlide(index)}
                      >
                        {/* Phone Container with Glow Effect for Center */}
                        <div className="relative w-[100px] h-[100px] sm:w-[300px] sm:h-[200px] md:w-[220px] md:h-[450px]">
                          {/* Glow effect for centered phone */}
                          {isCentered && (
                            <>
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-300/50 via-purple-500/40 to-pink-500/40 rounded-[40px] blur-2xl animate-pulse" />
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-300/30 to-purple-600/30 rounded-[40px] blur-xl" />
                            </>
                          )}
                          
                          {/* Phone Frame with Enhanced Border for Center */}
                          <div 
                            className={`relative w-full h-full rounded-[40px] overflow-hidden transition-all duration-900 ${
                              isCentered 
                                ? 'ring-4 ring-blue-400/50 shadow-2xl shadow-blue-500/50' 
                                : 'ring-1 ring-gray-700/30'
                            }`}
                            style={{
                              background: isCentered 
                                ? 'linear-gradient(145deg, #2a2e35 0%, #1a1d23 100%)' 
                                : '#1a1d23'
                            }}
                          >
                            {/* Screen Content */}
                            <div className="relative w-full h-full p-3">
                              <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-black">
                                <Image
                                  src={screenshot.src}
                                  alt={screenshot.alt}
                                  fill
                                  className="object-cover"
                                  priority={isClient && Math.abs(index - activeSlide) <= 1}
                                />
                              </div>
                            </div>
                            
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10" />
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center items-center mt-4 sm:mt-6 md:mt-8 space-x-2 sm:space-x-3 px-4">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? 'bg-milkyway-blue w-6 sm:w-8 scale-110'
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Bottom Design Image */}
      <div className="absolute bottom-[40px] left-0 w-full z-10 transform rotate-180">
        <Image
          src="/assets/down design.png"
          alt=""
          width={1920}
          height={200}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  )
}

export default AppScreenshotsSection

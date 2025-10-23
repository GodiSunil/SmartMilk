'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const AppScreenshotsSection = () => {
  const [activeSlide, setActiveSlide] = useState(2)
  const [isHovered, setIsHovered] = useState(false)

  const screenshots = [
    { id: 1, src: '/assets/image2.png', alt: 'Welcome Screen' },
    { id: 2, src: '/assets/image3.png', alt: 'Delivery Details Screen' },
    { id: 3, src: '/assets/image4.png', alt: 'Home Screen' },
    { id: 4, src: '/assets/image5.png', alt: 'Customer Details Screen' },
    { id: 5, src: '/assets/image6.png', alt: 'History Screen' },
  ]

  // Auto-rotate slides
  useEffect(() => {
    if (isHovered) return
    
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))
    }, 3000)
    
    return () => clearInterval(timer)
  }, [isHovered, screenshots.length])


  // Handle slide change
  const goToSlide = (index: number) => {
    setActiveSlide(index)
  }


  return (
    <section 
      className="relative py-24 overflow-hidden w-full"
      style={{
        background: 'linear-gradient(180deg, #1A1E23 0%, #252A30 100%)',
      }}
    >
      {/* Wavy top border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512,54.82,583,72.05c69.27,16,138.3,24.82,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity="0.1"
            fill="#ffffff"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity="0.3"
            fill="#4A90E2"
          />
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headings */}
        <div className="text-center mb-16">
          <h3 className="text-sm font-poppins font-semibold text-milkyway-blue uppercase tracking-wider mb-4">
            SCREENSHOTS
          </h3>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-8">
            App Screenshots
          </h2>
        </div>

        {/* Screenshots Carousel */}
        <div 
          className="relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full overflow-visible">
            <div className="flex justify-center items-center">
              <div className="relative flex items-center justify-center w-full">
                <div className="flex items-center justify-center gap-2 md:gap-4 lg:gap-8">
                  {screenshots.map((screenshot, index) => {
                    const distance = Math.abs(activeSlide - index)
                    let scale = 1
                    let opacity = 1
                    let zIndex = 10
                    
                    if (distance === 0) {
                      scale = 1.15
                      zIndex = 30
                    } else if (distance === 1) {
                      scale = 0.85
                      opacity = 0.85
                      zIndex = 20
                    } else if (distance === 2) {
                      scale = 0.7
                      opacity = 0.6
                      zIndex = 10
                    } else {
                      scale = 0.5
                      opacity = 0.3
                      zIndex = 0
                    }
                    
                    return (
                      <div
                        key={screenshot.id}
                        className="relative transition-all duration-500 ease-in-out"
                        style={{
                          transform: `scale(${scale})`,
                          opacity,
                          zIndex,
                          width: '200px',
                          height: '380px',
                        }}
                        onClick={() => goToSlide(index)}
                      >
                        <Image
                          src={screenshot.src}
                          alt={screenshot.alt}
                          fill
                          className="object-contain drop-shadow-2xl cursor-pointer"
                          priority={index <= activeSlide + 1}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center items-center mt-12 space-x-3">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? 'bg-milkyway-blue w-8 scale-110'
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Wavy bottom border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512,54.82,583,72.05c69.27,16,138.3,24.82,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity="0.1"
            fill="#ffffff"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity="0.3"
            fill="#4A90E2"
          />
        </svg>
      </div>
    </section>
  )
}

export default AppScreenshotsSection

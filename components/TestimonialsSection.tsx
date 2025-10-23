'use client'

import Image from 'next/image'
import { useState } from 'react'

const TestimonialsSection = () => {
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      id: 1,
      text: "Love the app!! I'm looking forward for them to add more of my favorite stores so i can use them more offen. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      name: "Allhalal",
      tagline: "Finally a great app with variety",
      profileImage: "/assets/profile.png"
    },
    {
      id: 2,
      text: "Amazing experience with this app! The interface is so user-friendly and the delivery is always on time. Highly recommend to everyone looking for quality service.",
      name: "Sarah Johnson",
      tagline: "Best app for grocery shopping",
      profileImage: "/assets/profile.png"
    },
    {
      id: 3,
      text: "This app has revolutionized my shopping experience. The variety of products and the convenience of home delivery makes it my go-to choice every time.",
      name: "Mike Chen",
      tagline: "Game changer for busy families",
      profileImage: "/assets/profile.png"
    }
  ]

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section 
      className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#202329' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Reviews Content */}
          <div className="space-y-6 md:space-y-8">
            {/* REVIEWS Badge */}
            <div 
              className="inline-block px-4 py-2 rounded"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: '30px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#0EA2EE',
                backgroundColor: 'transparent'
              }}
            >
              REVIEWS
            </div>

            {/* Client Reviews Heading */}
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: '58px',
                letterSpacing: '0%',
                textTransform: 'capitalize',
                color: '#FFFFFF'
              }}
            >
              Client Reviews
            </h2>

            {/* Review Content */}
            <p 
              className="text-base sm:text-lg md:text-xl"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '30px',
                letterSpacing: '0%',
                textTransform: 'capitalize',
                color: '#B7B7B7'
              }}
            >
              {reviews[currentReview].text}
            </p>

            {/* Reviewer Info */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0">
                <Image
                  src={reviews[currentReview].profileImage}
                  alt={reviews[currentReview].name}
                  fill
                  className="rounded-full object-cover"
                  style={{ border: '2px solid #0EA2EE' }}
                />
              </div>
              <div className="min-w-0 flex-1">
                <h4 
                  className="text-lg sm:text-xl md:text-2xl font-semibold"
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: '22px',
                    lineHeight: '32px',
                    letterSpacing: '0%',
                    textAlign: 'left',
                    textTransform: 'capitalize',
                    color: '#0EA2EE'
                  }}
                >
                  {reviews[currentReview].name}
                </h4>
                <p 
                  className="text-sm sm:text-base md:text-lg"
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '30px',
                    letterSpacing: '0%',
                    textAlign: 'left',
                    textTransform: 'capitalize',
                    color: '#828282'
                  }}
                >
                  {reviews[currentReview].tagline}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Left Arrow */}
              <button
                onClick={prevReview}
                className="flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  color: '#0EA2EE',
                  backgroundColor: 'transparent',
                  width: '21.67px',
                  height: '18.33px'
                }}
              >
                <span 
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: '#0EA2EE' }}
                >
                  ←
                </span>
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextReview}
                className="w-15 h-9 sm:w-16 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#0EA2EE',
                  width: '60px',
                  height: '35px'
                }}
              >
                <span 
                  className="text-xl sm:text-2xl font-bold"
                  style={{ color: '#0EA2EE' }}
                >
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <Image
                src="/assets/image7.png"
                alt="Dairy Products"
                width={600}
                height={600}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

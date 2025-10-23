'use client'

import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-milkyway-dark to-milkyway-darker overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start min-h-[70vh]">
          {/* Left Side - Hero Text */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-6xl font-poppins font-semibold leading-tight">
                <span className="text-milkyway-blue">Streamline Your</span>
                <br />
                <span className="text-white font-bold">Milk Delivery Operations</span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-milkyway-gray text-lg lg:text-xl font-poppins font-normal leading-relaxed max-w-lg">
              To stay ahead of the curve, serve your customers through an on-demand food delivery app.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Get Started
              </button>
              <button className="btn-secondary ml-0 sm:ml-4">
                View More
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex items-start justify-center lg:justify-end w-full -mt-12">
            <div className="relative w-full max-w-3xl">
              <Image 
                src="/assets/image.png" 
                alt="Milkyway App Screens" 
                width={900}
                height={800}
                className="w-full h-[700px] object-cover  rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Image - Full Width */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <Image 
          src="/assets/image1.png" 
          alt="Milkyway Bottom Image" 
          width={1920} 
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>

    </div>
  )
}

export default HeroSection

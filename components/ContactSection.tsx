'use client'

import Image from 'next/image'

const ContactSection = () => {
  return (
    <section className="relative py-20 bg-milkyway-dark overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {/* Milk bottle image on the left */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
          <Image 
            src="/assets/milk.png" 
            alt="Milk Bottle" 
            width={300} 
            height={400}
            className="w-auto h-[400px] lg:h-[500px] object-contain"
          />
        </div>
        
        {/* Frame1 image at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full z-0">
          <Image 
            src="/assets/frame1.png" 
            alt="Frame Design" 
            width={1920} 
            height={200}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Contact Form Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-center lg:justify-end">
          {/* Contact Form Box */}
          <div className="w-full max-w-[740px] min-h-[571px] bg-white rounded-[40px] p-6 sm:p-8 lg:p-10 shadow-2xl">
            {/* Contact Us Label */}
            <div className="mb-6">
              <h3 className="font-poppins font-medium text-[15px] leading-[30px] tracking-[0.2em] uppercase text-[#71AA38] underline">
                Contact Us
              </h3>
            </div>

            {/* Main Heading */}
            <div className="mb-6 sm:mb-8">
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[48px] leading-tight sm:leading-[58px] tracking-[0%] text-center capitalize text-[#252B33]">
                Get In Touch With Us!
              </h2>
            </div>

            {/* Contact Form */}
            <form className="space-y-4 sm:space-y-6">
              {/* Your Name Field */}
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-[55px] px-4 rounded-[10px] border border-[#CCCCCC] focus:outline-none focus:border-[#71AA38] transition-colors duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Your Email Field */}
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full h-[55px] px-4 rounded-[10px] border border-[#CCCCCC] focus:outline-none focus:border-[#71AA38] transition-colors duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Your Message Field */}
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full h-[130px] px-4 py-3 rounded-[10px] border border-[#CCCCCC] focus:outline-none focus:border-[#71AA38] transition-colors duration-300 resize-none text-sm sm:text-base"
                />
              </div>

              {/* Send Now Button */}
              <div className="pt-2 sm:pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-[157px] h-[48px] bg-[#71AA38] text-white font-medium rounded-[15px] hover:bg-[#5a8a2a] transition-colors duration-300 shadow-lg"
                  style={{
                    boxShadow: `
                      0px 4px 9px 0px rgba(127, 153, 49, 0.27),
                      0px 16px 16px 0px rgba(127, 153, 49, 0.23),
                      0px 37px 22px 0px rgba(127, 153, 49, 0.14),
                      0px 65px 26px 0px rgba(127, 153, 49, 0.04),
                      0px 102px 28px 0px rgba(127, 153, 49, 0.01)
                    `
                  }}
                >
                  Send Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

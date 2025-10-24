export default function InnovativeShoppingSection() {
  return (
    <section 
      className="relative min-h-screen flex flex-col bg-[#20242b] overflow-hidden"
    >
      {/* Full-width Top Image */}
      <div className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-auto">
        <img 
          src="/assets/section1After.png" 
          alt="Smart Milk Header" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 w-full">
        <div className="py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Frame overlay - Only show on larger screens */}
            <div 
              className="hidden md:block absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'url(/assets/frame.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 xl:gap-12">
              {/* Left Side - Text and Store Buttons */}
              <div className="text-center lg:text-left max-w-lg lg:max-w-xl order-2 lg:order-1 mt-8 lg:mt-0">
                <h2 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[38px] leading-tight lg:leading-[48px] text-white capitalize">
                  The Innovative Way To Shop
                </h2>
                <p className="mt-3 sm:mt-4 font-poppins font-normal text-base sm:text-lg md:text-xl lg:text-[16px] leading-relaxed lg:leading-[30px] text-white/90 capitalize">
                  When you join DeliverZe you will enjoy our new and improved way of shopping through our virtual mall experience
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mt-6">
                  <img 
                    src="/assets/play-store.svg" 
                    alt="Get it on Google Play" 
                    className="w-32 sm:w-36 md:w-40 h-auto hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer" 
                  />
                  <img 
                    src="/assets/app-store.svg" 
                    alt="Download on the App Store" 
                    className="w-32 sm:w-36 md:w-40 h-auto hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer" 
                  />
                </div>
              </div>

              {/* Right Side - Phone and Milk Bottle Images */}
              <div className="relative flex justify-center lg:justify-end w-full lg:w-auto order-1 lg:order-2 mt-0">
                <div className="relative" style={{ marginTop: '-4rem' }}>
                  {/* Phone Image */}
                  <img 
                    src="/assets/Iphone-15.png" 
                    alt="App Preview on iPhone" 
                    className="w-[200px] sm:w-[280px] md:w-[320px] lg:w-[380px] drop-shadow-2xl z-10 relative" 
                    style={{ marginBottom: '-3.5rem' }}
                  />
                  {/* Milk Bottle Image */}
                  <img 
                    src="/assets/milk-bottle.png" 
                    alt="Milk Bottle" 
                    className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 lg:-bottom-10 lg:-right-12 w-24 sm:w-32 md:w-40 lg:w-56 drop-shadow-lg z-20" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second Full-width Image */}
        <div className="w-full -mt-6 sm:-mt-8 md:-mt-10">
          <img 
            src="/assets/section1Before.png" 
            alt="Smart Milk Features" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}

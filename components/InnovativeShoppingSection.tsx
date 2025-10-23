export default function InnovativeShoppingSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center"
      style={{ 
        background: 'linear-gradient(135deg, #2f3239 0%, #2e333b 25%, #2f3238 50%, #2e3640 100%)'
      }}
    >
      {/* Frame overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/frame.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          {/* Left Side - Text and Store Buttons */}
          <div className="text-left max-w-lg lg:max-w-xl">
            <h2 className="font-poppins font-semibold text-2xl sm:text-3xl lg:text-[38px] leading-tight lg:leading-[48px] text-white capitalize">
              The Innovative Way To Shop
            </h2>
            <p className="mt-4 font-poppins font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[30px] text-white capitalize">
              When you join DeliverZe you will enjoy our new and improved way of shopping through our virtual mall experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <img 
                src="/assets/play-store.svg" 
                alt="Get it on Google Play" 
                className="w-36 sm:w-40 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer" 
              />
              <img 
                src="/assets/app-store.svg" 
                alt="Download on the App Store" 
                className="w-36 sm:w-40 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer" 
              />
            </div>
          </div>

          {/* Right Side - Phone and Milk Bottle Images */}
          <div className="relative flex justify-center lg:justify-end w-full lg:w-auto">
            <div className="relative">
              {/* Phone Image */}
              <img 
                src="/assets/iphone-15.png" 
                alt="App Preview on iPhone" 
                className="max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] drop-shadow-2xl z-10 relative" 
              />
              {/* Milk Bottle Image */}
              <img 
                src="/assets/milk-bottle.png" 
                alt="Milk Bottle" 
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 w-20 sm:w-24 lg:w-32 drop-shadow-lg z-20" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

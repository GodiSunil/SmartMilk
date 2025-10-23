'use client'

import Image from 'next/image'

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: "/assets/icon-1.png",
      heading: "We've Upped The Game.",
      description: "We carry a variety of products through our unique vendors that you can't typically get delivered."
    },
    {
      icon: "/assets/icon-2.png",
      heading: "Order From Our Virtual Mall Of Local Stores",
      description: "Order from a large variety of local stores you like and trust for years you can't typically get delivered."
    },
    {
      icon: "/assets/icon-3.png",
      heading: "Easy Access To Local Services",
      description: "Easy access to local services such as dry cleaning, we can pick it up and drop it off to make your life easier."
    }
  ]

  return (
    <section 
      className="py-24"
      style={{
        background: `linear-gradient(to bottom, #202730, #20232A, #20242A, #202329)`
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Small Heading */}
          <h3 
            className="text-[15px] font-poppins font-medium leading-[30px] tracking-[0.2em] uppercase text-text-blue mb-2"
          >
            WHY CHOOSE US
          </h3>
          
          {/* Main Heading */}
          <h2 
            className="text-[48px] font-poppins font-bold leading-[58px] tracking-[0%] capitalize text-text-white"
          >
            Why Are We Unique ?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              {/* Icon Container */}
              <div className="mb-6 flex justify-center">
                <div 
                  className="relative w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out"
                  style={{
                    backgroundColor: '#292D32',
                    boxShadow: '0px 4px 50px 0px #0000000D'
                  }}
                >
                  <Image
                    src={feature.icon}
                    alt={`${feature.heading} icon`}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Feature Heading */}
              <h3 className="text-[22px] font-poppins font-semibold leading-[32px] text-center capitalize text-text-white mb-4">
                {feature.heading}
              </h3>

              {/* Feature Description */}
              <p className="text-[16px] font-poppins font-normal leading-[30px] text-center capitalize text-text-white-70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection

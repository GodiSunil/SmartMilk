'use client';

import Image from 'next/image';

const FeaturesSection = () => {
  const statisticCards = [
    {
      icon: '/assets/icon-4.png',
      number: '1000',
      label: 'App Downloads'
    },
    {
      icon: '/assets/icon-5.png',
      number: '2000',
      label: 'Happy Clients'
    },
    {
      icon: '/assets/icon-6.png',
      number: '400',
      label: 'ACTIVE ACCOUNTS'
    },
    {
      icon: '/assets/icon-7.png',
      number: '200',
      label: 'TOTAL APP RATES'
    }
  ];

  const contentBlocks = [
    {
      heading: 'Near By Stores',
      subtext: 'Discover Local Stores Based On Your GPS Location'
    }
  ];

  return (
    <section 
      className="relative w-full py-20 px-5 lg:px-20"
      style={{
        background: `
          linear-gradient(180deg, #292d33 0%, #292e33 50%, #292d32 100%),
          radial-gradient(ellipse at bottom left, #273440 0%, transparent 70%)
        `
      }}
    >
      {/* Top Label */}
      <div className="text-center mb-4">
        <p 
          className="text-milkyway-blue font-poppins font-medium text-[15px] leading-[30px] tracking-[0.2em] uppercase"
        >
          FEATURES
        </p>
      </div>

      {/* Main Heading */}
      <div className="text-center mb-16">
        <h2 
          className="text-white font-poppins font-bold text-4xl lg:text-[48px] leading-[58px] capitalize"
        >
          Awsome Features
        </h2>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-20">
        
        {/* Left Content Blocks */}
        <div className="flex flex-col gap-8 lg:gap-12 text-right lg:order-1 order-2">
          {contentBlocks.map((block, index) => (
            <div key={index} className="flex items-center justify-end gap-4">
              <div className="flex flex-col items-end">
                <h3 className="text-white font-poppins font-semibold text-lg lg:text-[22px] leading-[32px] capitalize">
                  {block.heading}
                </h3>
                <p className="text-white/50 font-poppins font-normal text-sm lg:text-base leading-[30px] capitalize">
                  {block.subtext}
                </p>
              </div>
              <div className="w-2 h-2 rounded-full bg-white/50 flex-shrink-0"></div>
            </div>
          ))}
          {contentBlocks.map((block, index) => (
            <div key={`second-${index}`} className="flex items-center justify-end gap-4">
              <div className="flex flex-col items-end">
                <h3 className="text-white font-poppins font-semibold text-lg lg:text-[22px] leading-[32px] capitalize">
                  {block.heading}
                </h3>
                <p className="text-white/50 font-poppins font-normal text-sm lg:text-base leading-[30px] capitalize">
                  {block.subtext}
                </p>
              </div>
              <div className="w-2 h-2 rounded-full bg-white/50 flex-shrink-0"></div>
            </div>
          ))}
          {contentBlocks.map((block, index) => (
            <div key={`third-${index}`} className="flex items-center justify-end gap-4">
              <div className="flex flex-col items-end">
                <h3 className="text-white font-poppins font-semibold text-lg lg:text-[22px] leading-[32px] capitalize">
                  {block.heading}
                </h3>
                <p className="text-white/50 font-poppins font-normal text-sm lg:text-base leading-[30px] capitalize">
                  {block.subtext}
                </p>
              </div>
              <div className="w-2 h-2 rounded-full bg-white/50 flex-shrink-0"></div>
            </div>
          ))}
        </div>

        {/* Center Mobile Image */}
        <div className="lg:order-2 order-1">
          <div className="relative">
            <Image
              src="/assets/iphone15-1.png"
              alt="Milkyway App Screenshot"
              width={300}
              height={600}
              className="w-auto h-[500px] lg:h-[600px] drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))'
              }}
            />
          </div>
        </div>

        {/* Right Content Blocks */}
        <div className="flex flex-col gap-8 lg:gap-12 text-left lg:order-3 order-3">
          {contentBlocks.map((block, index) => (
            <div key={index} className="flex items-center justify-start gap-4">
              <div className="w-2 h-2 rounded-full bg-white/50 flex-shrink-0"></div>
              <div className="flex flex-col items-start">
                <h3 className="text-white font-poppins font-semibold text-lg lg:text-[22px] leading-[32px] capitalize">
                  {block.heading}
                </h3>
                <p className="text-white/50 font-poppins font-normal text-sm lg:text-base leading-[30px] capitalize">
                  {block.subtext}
                </p>
              </div>
            </div>
          ))}
          {contentBlocks.map((block, index) => (
            <div key={`second-${index}`} className="flex items-center justify-start gap-4">
              <div className="w-2 h-2 rounded-full bg-white/50 flex-shrink-0"></div>
              <div className="flex flex-col items-start">
                <h3 className="text-white font-poppins font-semibold text-lg lg:text-[22px] leading-[32px] capitalize">
                  {block.heading}
                </h3>
                <p className="text-white/50 font-poppins font-normal text-sm lg:text-base leading-[30px] capitalize">
                  {block.subtext}
                </p>
              </div>
            </div>
          ))}
          {contentBlocks.map((block, index) => (
            <div key={`third-${index}`} className="flex items-center justify-start gap-4">
              <div className="w-2 h-2 rounded-full bg-white/50 flex-shrink-0"></div>
              <div className="flex flex-col items-start">
                <h3 className="text-white font-poppins font-semibold text-lg lg:text-[22px] leading-[32px] capitalize">
                  {block.heading}
                </h3>
                <p className="text-white/50 font-poppins font-normal text-sm lg:text-base leading-[30px] capitalize">
                  {block.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* App Download Heading */}
      <div className="text-center mb-12">
        <h2 
          className="text-white font-poppins font-bold text-4xl lg:text-[48px] leading-[58px] capitalize"
        >
          App Download
        </h2>
      </div>

      {/* Statistic Cards */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 lg:gap-10">
        {statisticCards.map((card, index) => (
          <div
            key={index}
            className="w-[260px] h-[100px] rounded-[10px] bg-[#202329] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center gap-1"
          >
            <div className="mb-2">
              <Image
                src={card.icon}
                alt={`${card.label} icon`}
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <div className="text-white font-poppins font-semibold text-[38px] leading-[48px]">
              {card.number}
            </div>
            <div className="text-white font-poppins font-normal text-base leading-[22px]">
              {card.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

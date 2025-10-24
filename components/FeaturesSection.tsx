'use client';

import Image from 'next/image';

const Dot = () => (
  <div className="w-2.5 h-2.5 rounded-full bg-milkyway-blue flex-shrink-0 animate-pulse"></div>
);

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
        background: 'linear-gradient(90deg, #2a2e33 0%, #253b4b 100%)'
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
              <Dot />
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
              <Dot />
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
              <Dot />
            </div>
          ))}
        </div>

        {/* Center Mobile Image */}
        <div className="lg:order-2 order-1 mt-8 lg:mt-12">
          <div className="relative">
            <Image
              src="/assets/Iphone 14.png"
              alt="Milkyway App Screenshot"
              width={400}
              height={800}
              className="w-auto h-[650px] lg:h-[800px] drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))',
                transform: 'translateY(30px)'
              }}
              priority
            />
          </div>
        </div>

        {/* Right Content Blocks */}
        <div className="flex flex-col gap-8 lg:gap-12 text-left lg:order-3 order-3">
          {contentBlocks.map((block, index) => (
            <div key={index} className="flex items-center justify-start gap-4">
              <Dot />
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
              <Dot />
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
              <Dot />
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

      {/* App Download Section */}
      <div className="text-center -mt-64">
        <div className="mb-6">
          <h2 
            className="text-white font-poppins font-bold text-4xl lg:text-[48px] leading-[58px] capitalize"
          >
            App Download
          </h2>
        </div>
      
        {/* Statistic Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl mx-auto px-4 -mt-4">
          {statisticCards.map((card, index) => (
            <div
              key={index}
              className="bg-transparent rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 relative h-full min-h-[180px] flex flex-col justify-center"
            >
              <div className="absolute top-4 right-4 w-14 h-14 rounded-full bg-milkyway-blue/10 flex items-center justify-center">
                <Image
                  src={card.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="mt-2">
                <div className="text-milkyway-blue text-4xl md:text-5xl font-bold mb-1">
                  {card.number}
                  {index < 2 ? (
                    <span className="text-2xl md:text-3xl text-milkyway-blue/80">+</span>
                  ) : ''}
                </div>
                <div className="text-white/80 text-base font-medium">
                  {card.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

'use client'

import { ReactNode } from 'react'

interface MobileMockupProps {
  children: ReactNode
  className?: string
  rotation?: string
  zIndex?: string
}

const MobileMockup = ({ children, className = '', rotation = 'rotate-0', zIndex = 'z-10' }: MobileMockupProps) => {
  return (
    <div className={`relative ${zIndex} ${className}`}>
      {/* Phone Frame */}
      <div className={`relative w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-2 shadow-phone ${rotation} transform transition-transform duration-300 hover:scale-105`}>
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20"></div>
          
          {/* Screen Content */}
          <div className="w-full h-full pt-8">
            {children}
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
      </div>
      
      {/* Reflection Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[2.5rem] pointer-events-none"></div>
    </div>
  )
}

export default MobileMockup

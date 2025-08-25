'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
}

const sizeClasses = {
  sm: 'w-10 h-10',
  md: 'w-16 h-16', 
  lg: 'w-20 h-20',
  xl: 'w-28 h-28'
}

const textSizeClasses = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl', 
  xl: 'text-4xl'
}

export function Logo({ className = '', size = 'md', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 group ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <div className="relative w-full h-full">
          {/* Default state - black in light mode, white in dark mode */}
          <div 
            className="w-full h-full transition-all duration-300 group-hover:opacity-0"
            style={{
              maskImage: 'url(/Axioniz-O.svg)',
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskImage: 'url(/Axioniz-O.svg)',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center'
            }}
          >
            <div className="w-full h-full bg-black dark:bg-white"></div>
          </div>
          
          {/* Orange hover state */}
          <div 
            className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{
              maskImage: 'url(/Axioniz-O.svg)',
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskImage: 'url(/Axioniz-O.svg)',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center'
            }}
          >
            <div className="w-full h-full bg-[#eb5e28]"></div>
          </div>
        </div>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <motion.span 
            className={`font-black tracking-tight text-foreground group-hover:text-[#eb5e28] transition-colors duration-300 ${textSizeClasses[size]}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            AXIONIZ
          </motion.span>
          {size !== 'sm' && (
            <motion.span 
              className="text-xs font-medium tracking-[0.2em] text-muted-foreground group-hover:text-[#eb5e28]/80 transition-colors duration-300 -mt-1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              .TECH
            </motion.span>
          )}
        </div>
      )}
    </div>
  )
}

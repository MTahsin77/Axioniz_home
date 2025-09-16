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
        <motion.div 
          className="relative w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {/* Geometric logo icon using the proper brand design */}
          <svg
            className="w-full h-full transition-all duration-300 text-foreground group-hover:text-[#eb5e28]"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top horizontal bar */}
            <rect x="20" y="25" width="60" height="12" rx="2" fill="currentColor"/>
            
            {/* Middle diagonal slash */}
            <path d="M25 45 L75 45 L75 57 L65 57 L35 75 L25 75 Z" fill="currentColor"/>
            
            {/* Bottom right block */}
            <rect x="45" y="65" width="30" height="12" rx="2" fill="currentColor"/>
            
            {/* Connecting elements */}
            <circle cx="30" cy="31" r="3" fill="currentColor"/>
            <circle cx="70" cy="31" r="3" fill="currentColor"/>
            <circle cx="50" cy="71" r="3" fill="currentColor"/>
          </svg>
        </motion.div>
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

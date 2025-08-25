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
      <div className={`${sizeClasses[size]} relative flex items-center justify-center flex-shrink-0`}>
        {/* Direct SVG approach for better control */}
        <img 
          src="/Axioniz-O.svg" 
          alt="Axioniz Logo"
          className={`${sizeClasses[size]} object-contain transition-all duration-300 filter brightness-0 dark:brightness-100 group-hover:brightness-100 group-hover:hue-rotate-[25deg] group-hover:saturate-150`}
          style={{
            filter: 'brightness(0) invert(0) dark:brightness(100) dark:invert(1)',
          }}
        />
        
        {/* Orange overlay for hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <img 
            src="/Axioniz-O.svg" 
            alt="Axioniz Logo"
            className={`${sizeClasses[size]} object-contain`}
            style={{
              filter: 'brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(360deg) brightness(100%) contrast(119%)'
            }}
          />
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

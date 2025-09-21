'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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

export function Logo({ className = '', size = 'md', showText = false }: LogoProps) {
  return (
    <div className={`flex items-center group ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <motion.div 
          className="relative w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {/* Axioniz-O Logo */}
          <Image
            src="/Axioniz-O.svg"
            alt="Axioniz Logo"
            fill
            className="object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-0 group-hover:invert"
            priority
          />
        </motion.div>
      </div>
    </div>
  )
}

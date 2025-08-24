'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import React from 'react'

interface AnimatedOProps {
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

export function AnimatedO({ children, className = "", disabled = false }: AnimatedOProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Find and animate O's in the text
  const animateText = (text: string) => {
    if (disabled) {
      return text
    }
    
    return text.split('').map((char, index) => {
      if (char.toLowerCase() === 'o') {
        return (
          <motion.span
            key={index}
            initial={{ scale: 1, rotate: 0 }}
            animate={isInView ? {
              scale: [1, 1.3, 1],
              rotate: [0, 360, 0],
              color: ["#eb5e28", "#ff6b35", "#eb5e28"]
            } : {}}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: "easeInOut"
            }}
            className="inline-block text-[#eb5e28]"
          >
            {char}
          </motion.span>
        )
      }
      return char
    })
  }

  const processChildren = (children: React.ReactNode): React.ReactNode => {
    if (typeof children === 'string') {
      return animateText(children)
    }
    
    if (React.isValidElement(children)) {
      const props = children.props as any
      return React.cloneElement(children, {
        ...props,
        children: processChildren(props.children)
      })
    }
    
    if (Array.isArray(children)) {
      return children.map((child, index) => (
        <span key={index}>{processChildren(child)}</span>
      ))
    }
    
    return children
  }

  return (
    <span ref={ref} className={className}>
      {processChildren(children)}
    </span>
  )
}

'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

export function Hero() {
  const { scrollY } = useScroll()
  const [oPosition, setOPosition] = useState<'axioniz' | 'bouncing' | 'technology' | 'following'>('axioniz')
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')
  const [lastScrollY, setLastScrollY] = useState(0)
  
  // Transform scroll values for statistics bars
  const bar1Y = useTransform(scrollY, [0, 1000], [0, -300])
  const bar2Y = useTransform(scrollY, [0, 1000], [0, 200])
  const bar3Y = useTransform(scrollY, [0, 1000], [0, -150])
  const bar4Y = useTransform(scrollY, [0, 1000], [0, 250])
  const bar5Y = useTransform(scrollY, [0, 1000], [0, -200])
  const bar6Y = useTransform(scrollY, [0, 1000], [0, 180])
  const bar7Y = useTransform(scrollY, [0, 1000], [0, -100])

  // Transform for O following scroll
  const oFollowY = useTransform(scrollY, [0, 2000], [0, 800])

  // Handle scroll direction and O behavior
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      const direction = latest > lastScrollY ? 'down' : 'up'
      setScrollDirection(direction)
      setLastScrollY(latest)

      if (latest > 50 && direction === 'down' && oPosition !== 'following') {
        setOPosition('following')
      } else if (direction === 'up' && oPosition === 'following') {
        setOPosition('axioniz')
      }
    })
    return () => unsubscribe()
  }, [scrollY, lastScrollY, oPosition])

  // Handle O animation sequence
  useEffect(() => {
    // Start bouncing after initial load
    const bounceTimer = setTimeout(() => {
      if (oPosition === 'axioniz') {
        setOPosition('bouncing')
      }
    }, 2000)

    // Move to technology after one bounce cycle
    const technologyTimer = setTimeout(() => {
      if (oPosition === 'bouncing') {
        setOPosition('technology')
      }
    }, 10000)

    return () => {
      clearTimeout(bounceTimer)
      clearTimeout(technologyTimer)
    }
  }, [oPosition])
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* AXIONIZ Brand Text - Better Positioned */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute top-32 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-[0.15em]">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-foreground"
          >
            AXI
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={oPosition === 'following' ? {
              opacity: 1,
              scale: 1,
              rotate: 0,
              x: 0,
              y: 0
            } : oPosition === 'bouncing' ? {
              opacity: 1,
              scale: 1,
              rotate: 0,
              x: [0, 150, -120, 90, -60, 30, 0],
              y: [0, -90, 120, -60, 90, -45, 0]
            } : {
              opacity: 1,
              scale: 1,
              rotate: 0,
              x: 0,
              y: 0
            }}
            transition={oPosition === 'following' ? {
              duration: scrollDirection === 'up' ? 0.2 : 1.2,
              type: "spring",
              stiffness: scrollDirection === 'up' ? 800 : 100,
              damping: scrollDirection === 'up' ? 40 : 8
            } : oPosition === 'bouncing' ? {
              duration: 8,
              delay: 0.6,
              repeat: 1,
              repeatType: "loop",
              ease: "easeInOut",
              times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1]
            } : {
              duration: 0.8,
              type: "spring",
              stiffness: 200,
              damping: 10
            }}
            whileHover={{ 
              scale: 1.2, 
              rotate: 360,
              color: "#ff6b35",
              transition: { duration: 0.3 }
            }}
            className="text-[#eb5e28] inline-block cursor-pointer"
            style={oPosition === 'following' ? {
              position: 'fixed',
              top: scrollDirection === 'down' ? '60%' : '50%',
              left: scrollDirection === 'down' ? '52%' : '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1000
            } : {}}
          >
            O
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-foreground"
          >
            NIZ
          </motion.span>
        </div>
      </motion.div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Statistics-Style Vertical Bars */}
        <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-between items-end px-8">
          <motion.div
            className="bg-gradient-to-t from-[#eb5e28]/20 to-[#eb5e28]/5"
            style={{ 
              width: '80px',
              height: '100%',
              y: bar1Y
            }}
          />
          <motion.div
            className="bg-gradient-to-t from-[#eb5e28]/25 to-[#eb5e28]/8"
            style={{ 
              width: '80px',
              height: '100%',
              y: bar2Y
            }}
          />
          <motion.div
            className="bg-gradient-to-t from-[#eb5e28]/30 to-[#eb5e28]/10"
            style={{ 
              width: '80px',
              height: '100%',
              y: bar3Y
            }}
          />
          <motion.div
            className="bg-gradient-to-t from-[#eb5e28]/22 to-[#eb5e28]/6"
            style={{ 
              width: '80px',
              height: '100%',
              y: bar4Y
            }}
          />
          <motion.div
            className="bg-gradient-to-t from-[#eb5e28]/28 to-[#eb5e28]/9"
            style={{ 
              width: '80px',
              height: '100%',
              y: bar5Y
            }}
          />
          <motion.div
            className="bg-gradient-to-t from-[#eb5e28]/24 to-[#eb5e28]/7"
            style={{ 
              width: '80px',
              height: '100%',
              y: bar6Y
            }}
          />
          <motion.div
            className="bg-gradient-to-t from-[#eb5e28]/26 to-[#eb5e28]/8"
            style={{ 
              width: '80px',
              height: '100%',
              y: bar7Y
            }}
          />
        </div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-[#eb5e28]/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-[#eb5e28]/8 rounded-full blur-2xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          style={{ top: '60%', right: '15%' }}
        />
        <motion.div
          className="absolute w-48 h-48 bg-[#eb5e28]/6 rounded-full blur-2xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          style={{ bottom: '20%', left: '20%' }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #eb5e28 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
      </div>
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12"
        >

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-light text-foreground leading-tight tracking-tight"
          >
            Bespoke <span className="text-[#eb5e28]">techn{oPosition === 'technology' ? (
              <motion.span
                initial={{ opacity: 0, scale: 0, rotate: 180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 1.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }}
                className="inline-block"
              >
                o
              </motion.span>
            ) : 'o'}logy</span> solutions,
            <br />
            <span className="font-normal">engineered by <span className="text-[#eb5e28]">experts</span></span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-4xl text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light"
          >
            Transform your business with cutting-edge AI solutions and custom technology that&apos;s built for your unique needs.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8"
          >
            <Button 
              size="lg" 
              className="px-12 py-6 text-lg bg-[#eb5e28] text-white hover:bg-[#eb5e28]/90 dark:bg-gray-800 dark:text-[#eb5e28] dark:hover:bg-gray-700"
              asChild
            >
              <a href="#consultation">
                WORK WITH US
                <motion.div
                  className="ml-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

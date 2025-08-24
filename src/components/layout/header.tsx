'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Logo } from '@/components/ui/logo'
import { ThemeToggleSmall } from '@/components/ui/theme-toggle-small'

const navigation = [
  { name: 'Services', href: '/#services' },
  { name: 'Industries', href: '/#industries' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#consultation' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-8 flex-1">
            {navigation.slice(0, 2).map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-[#eb5e28] px-3 py-2 text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          
          {/* Logo - Mobile left, Desktop center (icon only) */}
          <motion.div className="flex-shrink-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <a href="/" className="block">
              <Logo size="sm" showText={false} />
            </a>
          </motion.div>

          {/* Right Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-end">
            {navigation.slice(2).map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-[#eb5e28] px-3 py-2 text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
            <ThemeToggleSmall />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link href="/" className="flex items-center space-x-2 group">
                    <Logo />
                  </Link>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-foreground hover:text-[#eb5e28] px-3 py-2 text-base font-medium transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="pt-4 border-t border-border">
                    <ThemeToggleSmall />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </nav>
    </motion.header>
  )
}

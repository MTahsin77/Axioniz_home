'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Type, Minus, Plus, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(16)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Apply font size to document
    document.documentElement.style.fontSize = `${fontSize}px`
  }, [fontSize])

  const increaseFontSize = () => {
    if (fontSize < 24) {
      setFontSize(fontSize + 2)
    }
  }

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize(fontSize - 2)
    }
  }

  const resetFontSize = () => {
    setFontSize(16)
  }

  return (
    <>
      {/* Theme Toggle Button */}
      <motion.button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-8 h-8 rounded-full bg-[#eb5e28] text-white shadow-md hover:shadow-lg transition-shadow duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
      >
        <motion.div
          initial={false}
          animate={mounted ? {
            rotate: theme === 'dark' ? 180 : 0,
            scale: theme === 'dark' ? 0.8 : 1,
          } : {}}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
        >
          {mounted ? (
            theme === 'dark' ? (
              <Moon className="h-3 w-3" />
            ) : (
              <Sun className="h-3 w-3" />
            )
          ) : (
            <Sun className="h-3 w-3" />
          )}
        </motion.div>
        
        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#eb5e28]"
          animate={mounted ? {
            scale: theme === 'dark' ? [1, 1.2, 1] : [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          } : {
            opacity: 0.3
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Accessibility Options
            </h3>
            
            {/* Font Size Controls */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Font Size: {fontSize}px
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={decreaseFontSize}
                    disabled={fontSize <= 12}
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    aria-label="Decrease font size"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  
                  <button
                    onClick={resetFontSize}
                    className="px-3 py-2 text-sm bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/70 transition-colors"
                  >
                    Reset
                  </button>
                  
                  <button
                    onClick={increaseFontSize}
                    disabled={fontSize >= 24}
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    aria-label="Increase font size"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Skip to Content Link */}
              <div>
                <a
                  href="#main-content"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  Skip to Main Content
                </a>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Close accessibility panel"
            >
              <Plus className="h-4 w-4 rotate-45" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Skip to content link for screen readers
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-blue-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Skip to main content
    </a>
  )
}

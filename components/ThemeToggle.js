'use client'
import { useTheme } from './ThemeProvider'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden transition-colors duration-300"
      style={{ 
        backgroundColor: 'var(--bg-elevated)',
        border: '1px solid var(--border-muted)'
      }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <HiOutlineSun size={20} style={{ color: 'var(--accent)' }} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? 0 : -180,
          scale: theme === 'light' ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <HiOutlineMoon size={20} style={{ color: 'var(--highlight)' }} />
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle

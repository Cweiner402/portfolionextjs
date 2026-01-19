'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import { ThemeProvider } from '../components/ThemeProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default MyApp

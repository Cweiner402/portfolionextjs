'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineX, HiOutlineZoomIn, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'

// Lightbox context for managing open state
export const useLightbox = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)
  const [images, setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = useCallback((image, allImages = [], index = 0) => {
    setCurrentImage(image)
    setImages(allImages)
    setCurrentIndex(index)
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setIsOpen(false)
    setCurrentImage(null)
    document.body.style.overflow = ''
  }, [])

  const goNext = useCallback(() => {
    if (images.length > 1) {
      const nextIndex = (currentIndex + 1) % images.length
      setCurrentIndex(nextIndex)
      setCurrentImage(images[nextIndex])
    }
  }, [images, currentIndex])

  const goPrev = useCallback(() => {
    if (images.length > 1) {
      const prevIndex = (currentIndex - 1 + images.length) % images.length
      setCurrentIndex(prevIndex)
      setCurrentImage(images[prevIndex])
    }
  }, [images, currentIndex])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closeLightbox, goNext, goPrev])

  return { isOpen, currentImage, images, currentIndex, openLightbox, closeLightbox, goNext, goPrev }
}

// Clickable image component with zoom indicator
export const ZoomableImage = ({ src, alt, className, style, onClick }) => {
  return (
    <div className="relative group cursor-zoom-in" onClick={onClick}>
      <img src={src} alt={alt} className={className} style={style} />
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20"
      >
        <div className="p-2 rounded-full bg-black/50 text-white">
          <HiOutlineZoomIn size={24} />
        </div>
      </div>
    </div>
  )
}

// Lightbox modal component
export const Lightbox = ({ isOpen, currentImage, images, currentIndex, onClose, onNext, onPrev }) => {
  if (!isOpen || !currentImage) return null

  const hasMultiple = images.length > 1

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <HiOutlineX size={24} />
          </button>

          {/* Navigation arrows */}
          {hasMultiple && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); onPrev() }}
                className="absolute left-4 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Previous image"
              >
                <HiOutlineChevronLeft size={28} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onNext() }}
                className="absolute right-4 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Next image"
              >
                <HiOutlineChevronRight size={28} />
              </button>
            </>
          )}

          {/* Image */}
          <motion.div
            key={currentImage.image || currentImage}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative max-w-[90vw] max-h-[85vh] z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={typeof currentImage === 'string' ? currentImage : currentImage.image}
              alt={typeof currentImage === 'string' ? 'Image' : currentImage.caption || 'Image'}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Caption */}
            {currentImage.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
                <p className="text-white text-center text-sm">{currentImage.caption}</p>
              </div>
            )}
          </motion.div>

          {/* Image counter */}
          {hasMultiple && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Lightbox

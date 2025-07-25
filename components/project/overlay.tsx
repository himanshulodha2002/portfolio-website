"use client";
import { OverlayProps } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGithubSquare,
  FaGlobe,
  FaTimes,
} from "react-icons/fa";

export default function Overlay({
  isVisible,
  onClose,
  title,
  description,
  tags,
  imageUrls,
  showGithubLink = false,
  githubLink,
  showLiveLink = false,
  liveLink,
}: OverlayProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Define navigation functions first
  const handlePrevImage = useCallback(() => {
    if (imageUrls.length <= 1) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  }, [imageUrls.length]);

  const handleNextImage = useCallback(() => {
    if (imageUrls.length <= 1) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  }, [imageUrls.length]);

  // Reset image index when overlay opens
  useEffect(() => {
    if (isVisible) {
      setCurrentImageIndex(0);
    }
  }, [isVisible]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isVisible) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isVisible, onClose, handlePrevImage, handleNextImage]);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchStartX(touch.clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX) return;
    const touch = e.changedTouches[0];
    const touchEndX = touch.clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNextImage();
      } else {
        handlePrevImage();
      }
    }
    setTouchStartX(null);
  };

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 z-[9999] overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl sm:max-w-3xl md:max-w-4xl max-h-screen overflow-y-auto flex flex-col border border-gray-200 dark:border-gray-700"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 flex-shrink-0 gap-2">
              <div className="flex-1 pr-0 sm:pr-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium uppercase tracking-wider bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Action Buttons */}
              <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-0">
                {showGithubLink && githubLink && (
                  <button
                    onClick={() => handleLinkClick(githubLink)}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors text-xs sm:text-sm font-medium"
                    aria-label="View GitHub repository"
                  >
                    <FaGithubSquare className="text-base sm:text-lg" />
                    <span className="hidden sm:inline">GitHub</span>
                  </button>
                )}
                {showLiveLink && liveLink && (
                  <button
                    onClick={() => handleLinkClick(liveLink)}
                    className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg transition-colors text-xs sm:text-sm font-medium"
                    aria-label="View live demo"
                  >
                    <FaGlobe className="text-base sm:text-lg" />
                    <span className="hidden sm:inline">Live Demo</span>
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close modal"
                >
                  <FaTimes className="text-lg sm:text-xl" />
                </button>
              </div>
            </div>
            {/* Content */}
            <div className="flex-1 flex flex-col min-h-0 overflow-y-auto">
              {/* Description */}
              <div className="p-4 sm:p-6 flex-shrink-0">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  {description}
                </p>
              </div>
              {/* Image Gallery */}
              {imageUrls.length > 0 && (
                <div className="px-2 sm:px-6 pb-4 sm:pb-6 flex-1 min-h-0">
                  <div className="relative bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden h-full">
                    <div className="relative w-full h-[220px] xs:h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] max-h-[60vh]">
                      <Image
                        src={imageUrls[currentImageIndex]}
                        alt={`${title} - Screenshot ${currentImageIndex + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 80vw, 70vw"
                        className="object-contain"
                        priority={currentImageIndex === 0}
                      />
                      {/* Navigation Arrows */}
                      {imageUrls.length > 1 && (
                        <>
                          <button
                            onClick={handlePrevImage}
                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all duration-200 backdrop-blur-sm"
                            aria-label="Previous image"
                          >
                            <FaArrowLeft className="text-base sm:text-lg" />
                          </button>
                          <button
                            onClick={handleNextImage}
                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all duration-200 backdrop-blur-sm"
                            aria-label="Next image"
                          >
                            <FaArrowRight className="text-base sm:text-lg" />
                          </button>
                        </>
                      )}
                    </div>
                    {/* Image Indicators */}
                    {imageUrls.length > 1 && (
                      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2">
                        {imageUrls.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                              index === currentImageIndex
                                ? "bg-white scale-110"
                                : "bg-white/50 hover:bg-white/75"
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    )}
                    {/* Image Counter */}
                    {imageUrls.length > 1 && (
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 bg-black/60 text-white text-xs sm:text-sm rounded-full backdrop-blur-sm">
                        {currentImageIndex + 1} / {imageUrls.length}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaGithubSquare, FaGlobe, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { OverlayProps } from "types";

export default function Overlay({
  isVisible,
  onClose,
  title,
  description,
  tags,
  imageUrls,
  showGithubLink,
  githubLink,
  showLiveLink,
  liveLink,
}: OverlayProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchStartX(touch.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX) return;
    const touch = e.touches[0];
    const touchEndX = touch.clientX;

    if (touchStartX - touchEndX > 50) {
      handleNextImage();
      setTouchStartX(null);
    } else if (touchStartX - touchEndX < -50) {
      handlePrevImage();
      setTouchStartX(null);
    }
  };

  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-4 sm:p-8 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-lg"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white rounded-full w-8 h-8 flex items-center justify-center bg-gray-800 dark:bg-gray-600"
            >
              X
            </button>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <div className="flex justify-between items-start mb-4">
              <p className="flex-1">{description}</p>
              <div className="flex flex-col items-end ml-4">
                {showGithubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 rounded-lg mb-2 text-white flex items-center gap-2 text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60"
                  >
                    <FaGithubSquare />
                  </a>
                )}
                {showLiveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 rounded-lg mb-2 text-white flex items-center gap-2 text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60"
                  >
                    <FaGlobe />
                  </a>
                )}
              </div>
            </div>
            <ul className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="relative w-[90%] h-0 pb-[40%] mb-4 px-[40%] item-center">
              <Image
                src={imageUrls[currentImageIndex]}
                alt={`Project image ${currentImageIndex + 1}`}
                quality={60}
                layout="fill"
                objectFit="cover"
                loading="lazy"
                className="rounded-lg shadow-lg bg-gray-100 dark:bg-gray-900"
              />
              <button
                onClick={handlePrevImage}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
              >
                <FaArrowRight />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

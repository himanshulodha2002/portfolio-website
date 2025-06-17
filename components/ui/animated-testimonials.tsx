"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  designation: string;
  src: string | StaticImageData;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const { activeSection } = useActiveSectionContext();

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  useEffect(() => {
    if (activeSection !== "Certifications") {
      setShowOverlay(false);
    }
  }, [activeSection]);

  const rotations = [-7, 0, 7, -5, 5, -8, 6, -3, 7, -6]; // Extended rotations

  const randomRotateY = (index: number) => {
    const baseRotation = rotations[index % rotations.length];
    const offset = (index % 2 === 0 ? 1 : -1) * (Math.floor(index / 3) % 5); // Add some randomness
    return baseRotation + offset;
  };

  const handleImageClick = () => {
    setShowOverlay(true);
  };

  const closeOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowOverlay(false);
    }
  };

  const handleOverlayNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handleOverlayPrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <div className="max-w-6xl md:max-w-[100rem] mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 sm:py-20 py-4">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="relative h-80 w-full">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{
                      opacity: 0,
                      scale: 1,
                      z: -100,
                      rotate: randomRotateY(index),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotateY(index),
                      zIndex: isActive(index)
                        ? 990
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(index),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    onClick={handleImageClick}
                    className="absolute inset-0 origin-bottom cursor-pointer"
                  >
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={2000} // Increased width
                      height={500} // Adjusted height
                      draggable={false}
                      className="h-full w-full rounded-3xl object-fit object-center border-2 border-black/20 dark:border-0"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex justify-between flex-col py-4">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3 className="text-2xl font-bold dark:text-white text-black">
                {testimonials[active].name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-500">
                {testimonials[active].designation}
              </p>
              <motion.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
            <div className="flex gap-4 pt-12 md:pt-0">
              <button
                onClick={handlePrev}
                className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
              >
                <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
              </button>
              <button
                onClick={handleNext}
                className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
              >
                <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-0 backdrop-blur-sm flex items-start sm:items-center justify-center !z-[990] overflow-y-auto pb-6 pt-16 sm:pt-24"
            onClick={closeOverlay}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl mx-4 my-auto"
            >
              <div className="w-full h-[35vh] sm:h-[45vh] min-h-[200px] sm:min-h-[250px] max-h-[350px] sm:max-h-[450px] relative">
                <Image
                  src={testimonials[active].src}
                  alt={testimonials[active].name}
                  width={1280}
                  height={720}
                  quality={60}
                  priority
                  className="w-full h-full rounded-xl object-contain bg-gray-100 dark:bg-gray-900"
                />
              </div>
              <button
                onClick={() => setShowOverlay(false)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleOverlayPrev();
                }}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
              >
                <IconArrowLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleOverlayNext();
                }}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
              >
                <IconArrowRight className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

"use client";
import { useActiveSectionContext } from "@/context/active-section-context";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ProjectProps } from "types";

import Overlay from "./overlay";


export default function Project({
  title,
  description,
  tags,
  imageUrls,
  githubLink,
  liveLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const { activeSection } = useActiveSectionContext();

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  const closeOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOverlayVisible(false);
    }
  };

  useEffect(() => {
    if (activeSection !== "Projects") {
      setOverlayVisible(false);
    }
  }, [activeSection]);

  const showGithubLink = githubLink && githubLink !== "/";
  const showLiveLink = liveLink && liveLink !== "/";

  return (
    <>
      <motion.div
        ref={ref}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        className="group mb-3 sm:mb-8 last:mb-0 cursor-pointer"
        onClick={toggleOverlay}
      >
        <section className=" bg-gray-100 max-w-[43rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[21rem]  hover:bg-gray-200 transition sm:group-even:pl-6 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <div className="pt-4 pb-7 px-5 sm:pl-7 sm:pr-2 sm:pt-8 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] sm:first:max-w-[60%]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <div className="flex justify-between items-start mt-2">
              <p className="flex-1 leading-relaxed text-gray-700 dark:text-white/70 -pr-4">
                {description}
              </p>
            </div>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={imageUrls[0]}
            alt="Project I worked on, screenshots"
            quality={95}
            width={1200}
            height={675} // 16:9 aspect ratio
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl rounded-lg h-[100%] object-cover
            transition
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            group-even:right-[initial]
            group-even:-left-40 "
          />
        </section>
      </motion.div>
      <Overlay
        isVisible={isOverlayVisible}
        onClose={closeOverlay}
        title={title}
        description={description}
        tags={tags}
        imageUrls={imageUrls}
        showGithubLink={showGithubLink}
        githubLink={githubLink}
        showLiveLink={showLiveLink}
        liveLink={liveLink}
      />
    </>
  );
}

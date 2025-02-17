"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { coursesData, skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";

const fadeInAnimitionVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  console.log(ref);
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <div>
        <SectionHeading>My skills</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800  ">
          {skillsData.map((skill, index) => (
            <motion.li
              className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 hover:border-black/30 dark:hover:border-white/30 hover:border-1 hover:shadow-md hover:scale-105"
              key={index}
              variants={fadeInAnimitionVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
      {/* <SectionHeading>My Certifications</SectionHeading>

      <AnimatedTestimonials testimonials={coursesData} /> */}
    </section>
  );
}

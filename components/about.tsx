"use client";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently pursuing a degree in{" "}
        <span className="font-medium">Computer Science Engineering</span> at{" "}
        <span className="font-medium">
          BMS Institute of Technology and Management
        </span>
        . With a current CGPA of 9.31, I have developed a strong foundation in{" "}
        <span className="font-medium">
          C/C++, Data Structures, Algorithms, and full-stack development
        </span>
        . My projects have allowed me to explore technologies like{" "}
        <span className="font-medium">
          React, Next.js, FastAPI, and Machine Learning
        </span>
        . <span className="italic">My favorite part of programming</span> is
        building solutions that positively impact users, like interactive tools
        and accessible platforms. I am currently seeking{" "}
        <span className="font-medium">
          internship or full-time opportunities
        </span>{" "}
        to apply my skills and grow as a software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy
        contributing to social initiatives, such as working with{" "}
        <span className="font-medium">
          Yuvaka Sangha, AICTE, and NSS Karnataka
        </span>{" "}
        on environmental conservation projects. I also love exploring new
        technologies, learning about{" "}
        <span className="font-medium">machine learning and deep learning</span>,
        and enhancing my skills in development. Additionally, I like reading
        books, watching movies, and staying curious by learning new concepts
        beyond tech, such as philosophy and history.
      </p>
    </motion.section>
  );
}

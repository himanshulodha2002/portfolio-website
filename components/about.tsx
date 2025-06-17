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
        . With a current CGPA of 9.21, I have developed a strong foundation in{" "}
        <span className="font-medium">
          C/C++, Data Structures, Algorithms, and full-stack development
        </span>
        . Currently working as a{" "}
        <span className="font-medium">
          Backend Engineer and Intern at Samey AI
        </span>
        , I work with technologies like{" "}
        <span className="font-medium">
          NATS, Redis, Python, FastAPI, and Azure Artifacts
        </span>
        , while also building projects with{" "}
        <span className="font-medium">
          React, Next.js, and Machine Learning
        </span>
        . <span className="italic">My favorite part of programming</span> is
        building solutions that positively impact users, like interactive tools
        and accessible platforms.
      </p>

      <p>
        At Samey AI, I collaborate on designing workflow orchestrators and
        optimizing internal Python package repositories across microservices. I
        love exploring new technologies, learning about{" "}
        <span className="font-medium">machine learning and deep learning</span>,
        and enhancing my skills in backend development and AI integration.
        Additionally, I enjoy reading books and watching movies.
      </p>
    </motion.section>
  );
}

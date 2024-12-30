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
        I'm a software engineer with a passion for web development. I have
        experience in building web applications using JavaScript, React, and
        Node.js. I'm always looking to learn new technologies and improve my
        skills.
      </p>
      <p>
        In my free time, I enjoy working on side projects and contributing to
        open-source. I also like to read books and watch movies.
      </p>
    </motion.section>
  );
}

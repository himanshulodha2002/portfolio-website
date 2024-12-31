import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData1 = [
  {
    title: "Bachelor of Engineering - BE, Computer Science",
    location: "BMS Institute of Technology and Management, Bengaluru, India",
    description:
      "Pursuing with a current CGPA of 9.31 (after the 4th semester).",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2022 - Present",
  },
  {
    title: "School Education",
    location: "Sarala Birla Public School, Ranchi, India",
    description: "Completed CBSE XII with 87.50% and CBSE X with 91.83%.",
    icon: React.createElement(LuGraduationCap),
    date: "Apr 2008 - Apr 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Explore Ease",
    description:
      "Developed a full-stack web application using Node.js with a local LLM-powered chatbot. Features include an interactive map and optimal route generation.",
    tags: ["Node.js", "LLM", "Graph Algorithm", "Interactive Map"],
    imageUrl: corpcommentImg, // Add URL if available
    date: "Jul 2024",
  },
  {
    title: "D4 - Data Driven Diabetes Decipher",
    description:
      "Implemented a KNN algorithm in C++ for diabetes prediction, achieving up to 10-50x faster execution compared to Python for large datasets.",
    tags: ["C++", "KNN Algorithm", "Health Data", "Machine Learning"],
    imageUrl: rmtdevImg, // Add URL if available
    date: "Feb 2024",
  },
  {
    title: "Government School Website",
    description:
      "Developed a fully functional front-end website with a language toggle feature to improve accessibility and engagement.",
    tags: ["HTML", "CSS", "JavaScript", "Localization"],
    imageUrl: wordanalyticsImg, // Add URL if available
    date: "Jan 2024",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "FastAPI",
  "Framer Motion",
  "Machine Learning",
  "Deep Learning",
  "RAG",
  "GenAi",
  "LLM",
] as const;

export const coursesData = [
  {
    title: "Deep Learning Specialization",
    provider: "Stanford University & DeepLearning.AI on Coursera",
    date: "Sept 2024",
  },
  {
    title: "Machine Learning Specialization",
    provider: "Stanford University & DeepLearning.AI on Coursera",
    date: "Aug 2024",
  },
  {
    title: "Python 3 Programming Specialization",
    provider: "University of Michigan on Coursera",
    date: "Aug 2024",
  },
] as const;

export const extracurricularsData = [
  {
    title: "Technical Head at IIC-BMSIT",
    description:
      "Led the team to develop the club&apos;s website and event platforms, which are live and operational.",
  },
  {
    title: "Volunteering",
    description:
      "Collaborated with Yuvaka Sangha, AICTE, and NSS Karnataka to create a database of lakes and water bodies for conservation.",
  },
] as const;

export const experiencesData = [
  {
    title: "Technical Head at IIC-BMSIT",
    location: "BMS Institute of Technology and Management, Bengaluru, India",
    description:
      "Led the team to develop the club's website and event platforms, which are live and operational.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Bachelor of Engineering - BE, Computer Science",
    location: "BMS Institute of Technology and Management, Bengaluru, India",
    description:
      "Pursuing with a current CGPA of 9.31 (after the 4th semester).",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2022 - Present",
  },
  {
    title: "Volunteering",
    location: "Bengaluru, India",
    description:
      "Collaborated with Yuvaka Sangha, AICTE, and NSS Karnataka to create a database of lakes and water bodies for conservation.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "School Education",
    location: "Sarala Birla Public School, Ranchi, India",
    description: "Completed CBSE XII with 87.50% and CBSE X with 91.83%.",
    icon: React.createElement(LuGraduationCap),
    date: "Apr 2008 - Apr 2021",
  },
] as const;

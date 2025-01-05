import d4 from "@/public/d4newer.png";
import exploreease from "@/public/explorease.png";
import underdev from "@/public/Icon_under_development.png";
import readisnet from "@/public/readisnet.png";
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
    title: "Holistic Meeting Insights: From Slides to Speech",
    description:
      "Developed a full-stack app with a RAG pipeline. Features include transcription, LLM for answering queries based on meeting, and analysis of visual data such as presentations and diagrams.",
    tags: [
      "RAG",
      "Whisper.cpp",
      "FastAPI",
      "React",
      "OpenAI",
      "Knowledge Graph",
      "Visual Data Analysis",
    ],
    imageUrl: underdev, // Add URL if available
    date: "Jan 2025",
  },
  {
    title: "Interactive Book Reader with RAG",
    description:
      "Built an interactive book reader that asks questions about the book using an RAG pipeline. The system also summarizes books with graph-based RAG techniques for better comprehension.",
    tags: ["RAG", "Knowledge Graph", "NLP", "Interactive Tools"],
    imageUrl: readisnet, // Add URL if available
    date: "Dec 2024",
  },

  {
    title: "Explore Ease",
    description:
      "Developed a full-stack web application using Node.js with a local LLM-powered chatbot. Features include an interactive map and optimal route generation.",
    tags: ["Node.js", "LLM", "Graph Algorithm", "Interactive Map"],
    imageUrl: exploreease, // Add URL if available
    date: "Jul 2024",
  },
  {
    title: "D4 - Data Driven Diabetes Decipher",
    description:
      "Implemented a KNN algorithm in C++ for diabetes prediction, achieving up to 10-50x faster execution compared to Python for large datasets.",
    tags: ["C++", "KNN Algorithm", "Health Data", "Machine Learning"],
    imageUrl: d4, // Add URL if available
    date: "Feb 2024",
  },
  // {
  //   title: "Government School Website",
  //   description:
  //     "Developed a fully functional front-end website with a language toggle feature to improve accessibility and engagement.",
  //   tags: ["HTML", "CSS", "JavaScript", "Localization"],
  //   imageUrl: wordanalyticsImg, // Add URL if available
  //   date: "Jan 2024",
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "React",
  "Framer Motion",
  "Next.js",
  "Node.js",
  "Git",
  "PostgreSQL",
  "MongoDB",
  "Python",
  "FastAPI",
  "Machine Learning",
  "Deep Learning",
  "RAG",
  // "GenAi",
  "LLM",
  "Knownledge Graph",
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
    title: "Research Intern at Unisys",
    location: "Remote",
    description:
      "Developing training datasets for proprietary languages to train Code Llama 3.2. Researching methods for languages like ALGOL and COBOL to create a Co-pilot for Unisys-specific languages, with a focus on publishing a dataset preparation paper and using AI models like Llama.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2024 - Present",
  },
  {
    title: "Technical Head at IIC-BMSIT",
    location: "BMS Institute of Technology and Management, Bengaluru, India",
    description:
      "Led the team to develop the club's website and event platforms, which are live and operational.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Volunteering",
    location: "Bengaluru, India",
    description:
      "Collaborated with Yuvaka Sangha and NSS Karnataka to create a database of lakes and water bodies for conservation. Also donated a fully functional website to a government school in Rajanukunte.",
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
    title: "School Education",
    location: "Sarala Birla Public School, Ranchi, India",
    description: "Completed CBSE XII with 87.50% and CBSE X with 91.83%.",
    icon: React.createElement(LuGraduationCap),
    date: "Apr 2008 - Apr 2021",
  },
] as const;

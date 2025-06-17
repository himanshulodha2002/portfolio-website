import dlcert from "@/public/images/Certificates/dlcert.png";
import govtschcert from "@/public/images/Certificates/govtschcert.jpg";
import mlcert from "@/public/images/Certificates/mlcert.png";
import py3cert from "@/public/images/Certificates/pycert.png";
import waterdatacert from "@/public/images/Certificates/waterdatacert.png";

import d4 from "@/public/images/Projects/d4/2.png";
import exploreease from "@/public/images/Projects/exploreease/1.png";
import meetingrag1 from "@/public/images/Projects/meetingrag/1.jpg";
import meetingrag2 from "@/public/images/Projects/meetingrag/2.jpg";
import meetingrag3 from "@/public/images/Projects/meetingrag/3.jpg";

import anveshanaImages1 from "@/public/images/Projects/anveshana/1.png";
import anveshanaImages2 from "@/public/images/Projects/anveshana/2.png";
import anveshanaImages3 from "@/public/images/Projects/anveshana/3.png";
import anveshanaImages4 from "@/public/images/Projects/anveshana/4.png";
import anveshanaImages5 from "@/public/images/Projects/anveshana/5.png";
import anveshanaImages6 from "@/public/images/Projects/anveshana/6.png";
import anveshanaImages7 from "@/public/images/Projects/anveshana/7.png";
import anveshanaImages8 from "@/public/images/Projects/anveshana/8.png";
import readisnet from "@/public/images/Projects/readisnet/1.png";

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
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
    name: "Certifications",
    hash: "#certifications",
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
      "Pursuing with a current CGPA of 9.21 (after the 5th semester).",
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
      "Developed an application using Next.js, FastAPI, and PostgreSQL, with a RAG pipeline for multimodal analysis. Used Whisper for transcription and a Vision-Language Model for interpreting slides; enabled LLM-based querying with more than 95% data retention.",
    tags: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "RAG",
      "Whisper",
      "Vision-Language Model",
      "LLM",
    ],
    imageUrls: [meetingrag1, meetingrag2, meetingrag3],
    date: "Jan 2025",
    githubLink: "#", // Add actual GitHub link
  },
  {
    title: "Interactive Book Reader with RAG",
    description:
      "Created an interactive reader with React, Tailwind CSS, and FastAPI for contextual Q&A via graph-based RAG pipeline; improved user immersion by 60%. Enhanced comprehension using dynamic summarization with Graph-RAG.",
    tags: ["React", "Tailwind CSS", "FastAPI", "Graph-RAG", "NLP"],
    imageUrls: [readisnet],
    date: "Dec 2024",
    githubLink: "#", // Add actual GitHub link
  },
  {
    title: "Anveshana Website",
    description:
      "Made and deployed a website for Anveshana, the national level prototype competition, getting more than 1000 hits per month, 500+ registrations and 100+ projects.",
    tags: ["Nextjs", "Framer Motion", "TypeScript", "Tailwind CSS", "Vercel"],
    imageUrls: [
      anveshanaImages1,
      anveshanaImages2,
      anveshanaImages3,
      anveshanaImages4,
      anveshanaImages5,
      anveshanaImages6,
      anveshanaImages7,
      anveshanaImages8,
    ],
    date: "Jan 2025",
    githubLink: "https://github.com/himanshulodha2002/anveshana25",
    liveLink: "https://anveshana.live",
  },
  {
    title: "Explore Ease",
    description:
      "Designed and deployed a full-stack travel-planning web app using Node.js, Express.js, and React, with an LLM chatbot suggesting points of interest. Dijkstra's Algorithm for optimal routing and Leaflet for interactive mapping; cut travel planning time by 50%.",
    tags: [
      "Node.js",
      "Express.js",
      "React",
      "LLM",
      "Dijkstra's Algorithm",
      "Leaflet",
    ],
    imageUrls: [exploreease],
    date: "Jul 2024",
    githubLink: "#", // Add actual GitHub link
  },
  {
    title: "D4 - Data Driven Diabetes Decipher",
    description:
      "Implemented a KNN algorithm in C++ for diabetes prediction, achieving up to 10-50x faster execution compared to Python for large datasets.",
    tags: ["C++", "KNN Algorithm", "Health Data", "Machine Learning"],
    imageUrls: [d4],
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
  // Frontend
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "HTML",
  "CSS",
  // Backend
  "Python",
  "FastAPI",
  "Node.js",
  "Express.js",
  "NATS",
  "Redis",
  // Databases
  "PostgreSQL",
  "MongoDB",
  "ChromaDB",
  "AstraDB",
  "Cassandra",
  // AI & ML
  "Machine Learning",
  "Deep Learning",
  "Hugging Face",
  "LLM",
  "RAG",
  "Agents",
  "CrewAI",
  "Knowledge Graph",
  // Cloud & DevOps
  "AWS",
  "Azure",
  "Google Cloud",
  "Vercel",
  "GitHub Actions",
  "Git",
  "Docker",
  "Postman",
  "Framer Motion",
] as const;

export const coursesData = [
  {
    id: "1",
    name: `Deep Learning Specialization by Stanford University`,
    quote:
      "Stanford University and DeepLearning.AI on Coursera, covering neural networks, deep architectures, and AI applications in various domains.",
    designation: "Sept 2024",
    src: dlcert,
  },
  {
    id: "2",
    name: "Machine Learning Specialization",
    quote:
      "Stanford University and DeepLearning.AI on Coursera, focusing on supervised, unsupervised, and deep learning techniques for AI systems.",
    designation: "Aug 2024",
    src: mlcert,
  },
  {
    id: "3",
    name: "Python 3 Programming Specialization",
    quote:
      "University of Michigan on Coursera, teaching Python programming, data structures, and advanced applications for software development.",
    designation: "Aug 2024",
    src: py3cert,
  },
  {
    id: "4",
    name: "Volunteered to Create Database of Water Bodies",
    quote:
      "Created a lake and water body database with Yuvaka Sangha & NSS Karnataka for conservation efforts.",
    designation: "May - Aug 2024",
    src: waterdatacert,
  },
  {
    id: "5",
    name: "Donated a Website to a Government School",
    quote:
      "Built and donated a live website for a Rajanukunte government school, boosting its digital presence and outreach.",
    designation: "May 2024",
    src: govtschcert,
  },
] as const;

export const extracurricularsData = [
  {
    title: "Vice-President & Technical Head at IIC-BMSIT",
    description:
      "Led a team of 40+ members to organize tech events and collaboratively build, and deploy the club's main website and multiple event-specific microsites, all of which are now live and supporting ongoing and future initiatives.",
  },
  {
    title: "Volunteering",
    description:
      "Created a lake and water body database with Yuvaka Sangha & NSS Karnataka for conservation efforts. Built and donated a live website for a Rajanukunte government school.",
  },
] as const;

export const experiencesData = [
  {
    title: "Backend and AI Intern at Samey AI",
    location: "Remote",
    description:
      "Collaborated with various technologies, including NATS and Redis, to support the redesign of the workflow orchestrator, which serves as the agentic core of the entire company. Established and optimized an internal Python package repository via Azure Artifacts, enabling reusable modules across 9+ microservices and reducing deployment time by 15%.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2025 - Present",
  },
  {
    title: "Research Intern at Unisys Campus Connect",
    location: "Bengaluru, India",
    description:
      "Proposed an automated pipeline to generate training datasets for proprietary Unisys languages. Researched and implemented LoRA fine-tuning to transfer knowledge of low-resource programming languages to large language models (LLMs).",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2024 - Apr 2025",
  },
  {
    title: "Vice-President & Technical Head at IIC-BMSIT",
    location: "BMS Institute of Technology and Management, Bengaluru, India",
    description:
      "Led a team of 40+ members to organize tech events and collaboratively build, and deploy the club's main website and multiple event-specific microsites, all of which are now live and supporting ongoing and future initiatives.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2024 - Present",
  },
  // {
  //   title: "Volunteering",
  //   location: "Bengaluru, India",
  //   description:
  //     "Collaborated with Yuvaka Sangha and NSS Karnataka to create a database of lakes and water bodies for conservation. Also donated a fully functional website to a government school in Rajanukunte.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2024",
  // },
  {
    title: "Bachelor of Engineering - BE, Computer Science",
    location: "BMS Institute of Technology and Management, Bengaluru, India",
    description:
      "Pursuing with a current CGPA of 9.21 (after the 5th semester).",
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

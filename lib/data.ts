import dlcert from "@/public/images/Certificates/dlcert.png";
import govtschcert from "@/public/images/Certificates/govtschcert.jpg";
import mlcert from "@/public/images/Certificates/mlcert.png";
import nptelbfecert from "@/public/images/Certificates/NPTEL_BFE.jpg";
import nptelllmcert from "@/public/images/Certificates/NPTEL_LLM.jpg";
import py3cert from "@/public/images/Certificates/pycert.png";
import internshipsameycert from "@/public/images/Certificates/SameyAI_Internship.png";
import waterdatacert from "@/public/images/Certificates/waterdatacert.png";

// Project images - using your actual file structure
import anveshana1 from "@/public/images/Projects/anveshana/1.png";
import anveshana2 from "@/public/images/Projects/anveshana/2.png";
import anveshana3 from "@/public/images/Projects/anveshana/3.png";
import anveshana4 from "@/public/images/Projects/anveshana/4.png";
import anveshana5 from "@/public/images/Projects/anveshana/5.png";
import anveshana6 from "@/public/images/Projects/anveshana/6.png";
import anveshana7 from "@/public/images/Projects/anveshana/7.png";
import anveshana8 from "@/public/images/Projects/anveshana/8.png";
import d4Image1 from "@/public/images/Projects/d4/1.jpg";
import d4Image2 from "@/public/images/Projects/d4/2.png";
import exploreease from "@/public/images/Projects/exploreease/1.png";
import meetingrag1 from "@/public/images/Projects/meetingrag/1.jpg";
import meetingrag2 from "@/public/images/Projects/meetingrag/2.jpg";
import meetingrag3 from "@/public/images/Projects/meetingrag/3.jpg";
import meetingragMain from "@/public/images/Projects/meetingrag/meetingrag.jpg";
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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Contact",
    hash: "#contact",
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
    imageUrls: [meetingragMain, meetingrag1, meetingrag2, meetingrag3],
    date: "Jan 2025",
    githubLink: "#", // Add actual GitHub link
    showGithubLink: true,
    showLiveLink: false,
  },
  {
    title: "Interactive Book Reader with RAG",
    description:
      "Created an interactive reader with React, Tailwind CSS, and FastAPI for contextual Q&A via graph-based RAG pipeline; improved user immersion by 60%. Enhanced comprehension using dynamic summarization with Graph-RAG.",
    tags: ["React", "Tailwind CSS", "FastAPI", "Graph-RAG", "NLP"],
    imageUrls: [readisnet],
    date: "Dec 2024",
    githubLink: "#", // Add actual GitHub link
    showGithubLink: true,
    showLiveLink: false,
  },
  {
    title: "Anveshana Website",
    description:
      "Made and deployed a website for Anveshana, the national level prototype competition, getting more than 1000 hits per month, 500+ registrations and 100+ projects.",
    tags: ["Next.js", "Framer Motion", "TypeScript", "Tailwind CSS", "Vercel"],
    imageUrls: [
      anveshana1,
      anveshana2,
      anveshana3,
      anveshana4,
      anveshana5,
      anveshana6,
      anveshana7,
      anveshana8,
    ],
    date: "Jan 2025",
    githubLink: "https://github.com/himanshulodha2002/anveshana25",
    liveLink: "https://anveshana.live",
    showGithubLink: true,
    showLiveLink: true,
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
    showGithubLink: true,
    showLiveLink: false,
  },
  {
    title: "D4 - Data Driven Diabetes Decipher",
    description:
      "Implemented a KNN algorithm in C++ for diabetes prediction, achieving up to 10-50x faster execution compared to Python for large datasets.",
    tags: ["C++", "KNN Algorithm", "Health Data", "Machine Learning"],
    imageUrls: [d4Image2, d4Image1], // Multiple images for D4 project
    date: "Feb 2024",
    githubLink: "#", // Add actual GitHub link
    showGithubLink: true,
    showLiveLink: false,
  },
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
  {
    id: "6",
    name: "Backend Engineer Internship at Samey AI",
    quote:
      "Completed a successful internship at Samey AI, working on workflow orchestrators and optimizing Python package repositories using Azure Artifacts.",
    designation: "May - June 2025",
    src: internshipsameycert,
  },
  {
    id: "7",
    name: "NPTEL - Business Fundamentals of Entrepreneurs",
    quote:
      "NPTEL course certification, scored 98% with Gold Medal and 1% Topper in India. By IIT Madras, covering business fundamentals for entrepreneurs.",
    designation: "2024",
    src: nptelbfecert,
  },
  {
    id: "8",
    name: "NPTEL - Introduction to Large Language Models",
    quote:
      "NPTEL course certification, scored 75% with Silver Medal and 5% Topper in India. By IIT Delhi, covering LLMs and their applications.",
    designation: "2024",
    src: nptelllmcert,
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
    title: "Backend Engineer Intern at HappyFox",
    location: "Bangalore",
    description:
      "Upcoming internship focused on backend development, scheduled to start in July 2025.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2025 - Present",
  },
  {
    title: "Backend Engineer Intern at Samey AI",
    location: "Remote",
    description:
      "Collaborated with various technologies, including NATS and Redis, to support the redesign of the workflow orchestrator, which serves as the agentic core of the entire company. Established and optimized an internal Python package repository via Azure Artifacts, enabling reusable modules across 9+ microservices and reducing deployment time by 15%.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2025 - June 2025",
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

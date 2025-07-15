import { StaticImageData } from "next/image";
import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export interface ProjectProps {
  title: string;
  description: string;
  tags: readonly string[]; // Change to readonly
  imageUrls: (string | StaticImageData)[];
  githubLink?: string;
  liveLink?: string;
  showGithubLink?: boolean;
  showLiveLink?: boolean;
  date?: string; // Add date prop
}

export interface OverlayProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  description: string;
  tags: readonly string[]; // Change to readonly
  imageUrls: (string | StaticImageData)[];
  showGithubLink: boolean;
  githubLink?: string;
  showLiveLink: boolean;
  liveLink?: string;
}

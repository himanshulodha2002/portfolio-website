import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ProjectProps {
  title: string;
  description: string;
  tags: string[];
  imageUrls: string[];
  githubLink?: string;
  liveLink?: string;
};

export type OverlayProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  description: string;
  tags: string[];
  imageUrls: string[];
  showGithubLink: boolean;
  githubLink?: string;
  showLiveLink: boolean;
  liveLink?: string;
};
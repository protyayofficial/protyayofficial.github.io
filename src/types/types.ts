export interface SocialLinks {
  email: string;
  googleScholar: string;
  linkedin: string;
  orcid: string;
  kaggle: string;
  researchGate: string;
  leetcode: string;
  codeforces: string;
  codechef: string;
  instagram: string;
  github: string;
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  authors: string[];
  abstract: string;
  codeLink?: string;
  status?: string;
  contributions?: string;
  preprint?: string;
  imageUrl?: string;
  year: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  codeLink: string;
  technologies: string[];
}

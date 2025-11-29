export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  client: string;
  year: string;
  image: string;
  gallery?: string[]; // New field for multiple project images
  details: {
    problem: string;
    solution: string;
    process: string[];
    result: string;
    deliverables: string[];
    colors: string[];
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export enum RoutePath {
  HOME = '/',
  ABOUT = '/about',
  SERVICES = '/services',
  PORTFOLIO = '/portfolio',
  PROJECTS = '/projects', // New route
  CONTACT = '/contact',
  CASE_STUDY = '/project/:id',
}
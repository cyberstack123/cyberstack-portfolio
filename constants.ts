import { Project, Service, TimelineItem } from './types';

export const BRAND_NAME = "CyberStack";
export const FOUNDER_NAME = "Muaz Oyebisi";
export const LAUNCH_YEAR = "2026";

export const SOCIAL_LINKS = {
  twitter: 'https://x.com/CyberdeWeb3',
  linkedin: 'https://www.linkedin.com/in/oyebisi-muaz-292548342',
  email: 'cyberstack123@gmail.com'
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/portfolio' },
  { label: 'Gallery', path: '/projects' }, // Added Gallery link
  { label: 'Contact', path: '/contact' },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2020',
    title: 'The Beginning',
    description: 'Started journey in Graphic Design, focusing on visual communication fundamentals.',
  },
  {
    year: '2022',
    title: 'Brand Identity Specialist',
    description: 'Shifted focus to comprehensive brand identity systems and logo design.',
  },
  {
    year: '2024',
    title: 'Strategic Expansion',
    description: 'Expanded into Web3 Creations, focusing on NFT aesthetics and blockchain identity.',
  },
  {
    year: '2026',
    title: 'CyberStack Launch',
    description: 'Official launch of the CyberStack digital identity brand.',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'brand-identity',
    title: 'Brand Identity Design',
    description: 'Crafting cohesive visual systems that tell your unique story.',
    icon: 'Shield',
    features: ['Logo Systems', 'Typography Selection', 'Color Palettes', 'Brand Guidelines'],
  },
  {
    id: 'brand-strategy',
    title: 'Brand Strategy',
    description: 'Defining the core of your business to connect with the right audience.',
    icon: 'Target',
    features: ['Market Research', 'Audience Persona', 'Brand Voice', 'Positioning'],
  },
  {
    id: 'web3-creations',
    title: 'Web3 Creations',
    description: 'Futuristic digital assets, NFT-style graphics, and on-chain branding for the decentralized web.',
    icon: 'Hexagon',
    features: ['NFT Art Direction', 'Token Visuals', 'Metaverse Identity', 'Smart Contract UI'],
  },
  {
    id: 'social-content',
    title: 'Social Media Design',
    description: 'High-impact visuals for Instagram, LinkedIn, and Twitter.',
    icon: 'Share2',
    features: ['Feed Templates', 'Story Graphics', 'Carousel Design', 'Motion Covers'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'neon-nexus',
    title: 'Neon Nexus',
    category: 'Brand Identity',
    client: 'FinTech Startup',
    year: '2024',
    summary: 'A complete rebrand for a next-gen crypto wallet.',
    image: 'https://picsum.photos/800/600?random=1',
    gallery: [
        'https://picsum.photos/1200/800?random=101',
        'https://picsum.photos/1200/800?random=102',
        'https://picsum.photos/1200/800?random=103',
        'https://picsum.photos/1200/800?random=104'
    ],
    details: {
      problem: 'The client had a generic look that blended in with competitors. They needed a bold, trustworthy, yet futuristic identity.',
      solution: 'We developed "Neon Nexus", a visual language based on connectivity and light. The logo represents a secure node in a vast network.',
      process: ['Discovery Workshop', 'Visual Exploration', 'Refinement', 'System Application'],
      result: 'Increased user sign-ups by 40% in the first month post-launch.',
      deliverables: ['Logo Suite', 'App UI Kit', 'Marketing Assets'],
      colors: ['#00F0FF', '#7000FF', '#121212'],
    },
  },
  {
    id: 'aurora-systems',
    title: 'Aurora Systems',
    category: 'Web & Strategy',
    client: 'SaaS Platform',
    year: '2025',
    summary: 'Strategic positioning and visual identity for an AI analytics tool.',
    image: 'https://picsum.photos/800/600?random=2',
    gallery: [
        'https://picsum.photos/1200/800?random=201',
        'https://picsum.photos/1200/800?random=202',
        'https://picsum.photos/1200/800?random=203'
    ],
    details: {
      problem: 'Complex technical capabilities were not being communicated clearly to non-technical stakeholders.',
      solution: 'A clean, minimalistic interface aesthetic combined with approachable, human-centric copywriting.',
      process: ['Competitor Analysis', 'Brand Archetyping', 'Design Sprint'],
      result: 'Secured Series A funding with the new pitch deck and brand assets.',
      deliverables: ['Brand Book', 'Pitch Deck', 'Web Assets'],
      colors: ['#2ECC71', '#2C3E50', '#ECF0F1'],
    },
  },
  {
    id: 'ether-evolve',
    title: 'Ether Evolve',
    category: 'Web3 & NFT',
    client: 'DAO Collective',
    year: '2023',
    summary: 'Visual identity and NFT collection design for a decentralized autonomous organization.',
    image: 'https://picsum.photos/800/600?random=3',
    gallery: [
        'https://picsum.photos/1200/800?random=301',
        'https://picsum.photos/1200/800?random=302',
        'https://picsum.photos/1200/800?random=303',
        'https://picsum.photos/1200/800?random=304',
        'https://picsum.photos/1200/800?random=305'
    ],
    details: {
      problem: 'The DAO needed a unique visual identifier that represented community governance on the blockchain.',
      solution: 'A generative art system that creates unique profile identities based on wallet holdings.',
      process: ['Generative Scripting', '3D Modeling', 'Community Voting'],
      result: 'Sold out 10,000 unit collection in 24 hours.',
      deliverables: ['10k NFT Collection', 'Smart Contract UI', 'Discord Assets'],
      colors: ['#6366f1', '#a855f7', '#000000'],
    },
  },
];
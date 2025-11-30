// Simulating database content

// IMPORT YOUR IMAGES HERE
// By importing them, Vite ensures they end up in the build folder correctly.
import profilePlaceholder from './assets/profile.jpg'; 

// For project sliders, you would import images like this:
// import p1_img1 from './assets/projects/neon-nexus/1.jpg';
// import p1_img2 from './assets/projects/neon-nexus/2.jpg';

// Since I cannot create the folders for you, I will use placeholder URLs.
// YOU SHOULD REPLACE THESE URLS WITH YOUR IMPORTED VARIABLES ABOVE.

export const BRAND_NAME = "CyberStack";
export const FOUNDER_NAME = "Muaz Oyebisi";

export const SOCIAL_LINKS = {
  twitter: 'https://x.com/CyberdeWeb3',
  linkedin: 'https://www.linkedin.com/in/oyebisi-muaz-292548342',
  email: 'cyberstack123@gmail.com',
  instagram: 'https://www.instagram.com/oyebisi_muaz',
  behance: 'https://www.behance.net/muazoyebisi'
};

export const PROFILE_IMAGE = profilePlaceholder;

export const TIMELINE = [
  {
    year: '2020',
    title: 'The Beginning',
    description: 'Started journey in Graphic Design as an apprentice in a printing press, focusing on visual communication fundamentals.',
  },
  {
    year: '2022',
    title: 'Brand Identity Specialist',
    description: 'Shifted focus to comprehensive brand identity systems and logo design while continuing apprenticeship in a printing press.',
  },
  {
    year: '2024',
    title: 'Strategic Expansion',
    description: 'Expanded into Web3 Creations, focusing on NFT aesthetics and blockchain identity alongside printing press apprenticeship.',
  },
  {
    year: '2026',
    title: 'CyberStack Launch',
    description: 'Official launch of the CyberStack digital identity brand.',
  },
];

export const SERVICES = [
  {
    id: 'brand-identity',
    title: 'Brand Identity Design',
    description: 'Crafting cohesive visual systems that tell your unique story.',
    icon: 'Shield',
    features: ['Logo Systems', 'Typography', 'Color Palettes', 'Brand Guidelines'],
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
    description: 'Futuristic digital assets, NFT-style graphics, and on-chain branding.',
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

export const PROJECTS = [
  {
    id: 'neon-nexus',
    title: 'Neon Nexus',
    category: 'Brand Identity',
    client: 'FinTech Startup',
    year: '2024',
    summary: 'A complete rebrand for a next-gen crypto wallet.',
    cover: 'https://picsum.photos/800/600?random=1',
    // REPLACE THESE STRINGS WITH IMPORTED VARIABLES FROM YOUR ASSETS FOLDER
    gallery: [
        'https://picsum.photos/1200/800?random=101',
        'https://picsum.photos/1200/800?random=102',
        'https://picsum.photos/1200/800?random=103'
    ],
    details: {
      problem: 'Generic look blending with competitors.',
      solution: 'Developed "Neon Nexus", a visual language based on connectivity.',
      process: ['Discovery', 'Visual Exploration', 'System Application'],
      result: 'Increased sign-ups by 40%.',
      deliverables: ['Logo Suite', 'App UI Kit', 'Marketing Assets'],
      colors: ['#00F0FF', '#7000FF', '#121212'],
    },
  },
  {
    id: 'aurora-systems',
    title: 'Aurora Systems',
    category: 'Social Media Designs',
    client: 'SaaS Platform',
    year: '2025',
    summary: 'Strategic positioning and visual identity for an AI analytics tool.',
    cover: 'https://picsum.photos/800/600?random=2',
    gallery: [
        'https://picsum.photos/1200/800?random=201',
        'https://picsum.photos/1200/800?random=202'
    ],
    details: {
      problem: 'Complex technical capabilities were unclear.',
      solution: 'Clean, minimalistic interface aesthetic.',
      process: ['Competitor Analysis', 'Brand Archetyping', 'Design Sprint'],
      result: 'Secured Series A funding.',
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
    summary: 'Visual identity and NFT collection design.',
    cover: 'https://picsum.photos/800/600?random=3',
    gallery: [
        'https://picsum.photos/1200/800?random=301',
        'https://picsum.photos/1200/800?random=302',
        'https://picsum.photos/1200/800?random=303'
    ],
    details: {
      problem: 'Needed a unique visual identifier for governance.',
      solution: 'Generative art system for profile identities.',
      process: ['Generative Scripting', '3D Modeling', 'Community Voting'],
      result: 'Sold out 10k collection.',
      deliverables: ['10k NFT Collection', 'Smart Contract UI', 'Discord Assets'],
      colors: ['#6366f1', '#a855f7', '#000000'],
    },
  },
];
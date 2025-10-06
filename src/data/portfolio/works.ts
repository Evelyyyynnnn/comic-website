export interface PortfolioWork {
  id: string;
  title: string;
  description: string;
  category: string;
  medium: string;
  year: number;
  dimensions: {
    width: number;
    height: number;
  };
  image: string;
  alt: string;
  tags: string[];
  client?: string;
  projectUrl?: string;
  featured: boolean;
}

export const portfolioWorks: PortfolioWork[] = [
  {
    id: "evelyn-design",
    title: "Evelyn Design Portfolio",
    description: "A comprehensive design portfolio showcasing creative projects and artistic vision",
    category: "Design Portfolio",
    medium: "Web Portfolio",
    year: 2024,
    dimensions: { width: 1920, height: 1080 },
    image: "portfolio/Evelyn-Design-Portfolio.jpg",
    alt: "Evelyn Design Portfolio",
    tags: ["Design", "Portfolio", "Creative", "Web"],
    projectUrl: "https://evelyndesign.vercel.app/#",
    featured: true
  },
  {
    id: "jekyll-typing-artist",
    title: "Jekyll Typing Artist",
    description: "A unique typing-based art project exploring creativity through text and technology",
    category: "Interactive Art",
    medium: "Web Application",
    year: 2024,
    dimensions: { width: 1920, height: 1080 },
    image: "portfolio/Jekyll-typing-artist.jpg",
    alt: "Jekyll Typing Artist Project",
    tags: ["Interactive", "Art", "Technology", "Typing"],
    projectUrl: "https://jekyll-typing-artist.vercel.app/",
    featured: true
  },
  {
    id: "evelyn-carrd",
    title: "Evelyn Carrd Portfolio",
    description: "A minimalist portfolio showcasing creative work and personal projects",
    category: "Portfolio",
    medium: "Web Design",
    year: 2024,
    dimensions: { width: 1920, height: 1080 },
    image: "portfolio/evelyn-carrd-portfolio.jpg",
    alt: "Evelyn Carrd Portfolio",
    tags: ["Portfolio", "Minimalist", "Creative", "Web"],
    projectUrl: "https://evelynnndu.carrd.co/",
    featured: false
  },
  {
    id: "life-movement-gallery",
    title: "Life Movement Gallery",
    description: "An artistic exploration of movement and life through visual storytelling",
    category: "Art Gallery",
    medium: "Digital Gallery",
    year: 2024,
    dimensions: { width: 1920, height: 1080 },
    image: "portfolio/life-movement-gallery.jpg",
    alt: "Life Movement Gallery",
    tags: ["Gallery", "Movement", "Life", "Art"],
    projectUrl: "https://evelyn-life-movement-gallery.vercel.app/",
    featured: false
  }
];

export const getWorkById = (id: string): PortfolioWork | undefined => {
  return portfolioWorks.find(work => work.id === id);
};

export const getWorksByCategory = (category: string): PortfolioWork[] => {
  return portfolioWorks.filter(work => work.category === category);
};

export const getFeaturedWorks = (): PortfolioWork[] => {
  return portfolioWorks.filter(work => work.featured);
};

export const getWorksByYear = (year: number): PortfolioWork[] => {
  return portfolioWorks.filter(work => work.year === year);
};

export const getWorksByTag = (tag: string): PortfolioWork[] => {
  return portfolioWorks.filter(work => work.tags.includes(tag));
};

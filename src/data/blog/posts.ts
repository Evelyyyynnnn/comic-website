export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  slug: string;
  tags: string[];
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "medium-blog",
    title: "Medium Blog",
    excerpt: "Personal thoughts and insights on art, design, and creative process",
    content: "Explore my Medium blog for in-depth articles about art, design, and the creative process...",
    author: "Evelyn",
    date: "March 15, 2024",
    image: "blog/Medium.jpg",
    slug: "medium-blog",
    tags: ["Blog", "Art", "Design", "Creative Process"],
    category: "Blog Platform"
  },
  {
    id: "bento-portfolio",
    title: "Bento Portfolio",
    excerpt: "Creative portfolio showcasing diverse artistic projects and achievements",
    content: "Visit my Bento portfolio to see a curated collection of my creative work...",
    author: "Evelyn",
    date: "February 28, 2024",
    image: "blog/Bento.jpg",
    slug: "bento-portfolio",
    tags: ["Portfolio", "Creative Work", "Art Projects"],
    category: "Portfolio"
  },
  {
    id: "english-blog",
    title: "English Blog Site",
    excerpt: "English-language content focusing on art, culture, and personal experiences",
    content: "My English blog site features articles about art, culture, and personal experiences...",
    author: "Evelyn",
    date: "February 10, 2024",
    image: "blog/English-Post-Site.jpg",
    slug: "english-blog",
    tags: ["Blog", "English", "Art", "Culture"],
    category: "Blog"
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getRecentPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts.slice(0, limit);
};

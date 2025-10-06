export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  category: string;
  tags: string[];
  dimensions: {
    width: number;
    height: number;
  };
  medium: string;
  year: number;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "gallery-1",
    title: "Urban Sunset",
    description: "A vibrant cityscape captured during golden hour",
    src: "gallery/gallery-1.jpg",
    alt: "City skyline during sunset",
    category: "Urban",
    tags: ["City", "Sunset", "Urban", "Architecture"],
    dimensions: { width: 1920, height: 1080 },
    medium: "Digital Art",
    year: 2024
  },
  {
    id: "gallery-2",
    title: "Nature's Harmony",
    description: "Peaceful forest scene with flowing water",
    src: "gallery/gallery-2.jpg",
    alt: "Forest with stream",
    category: "Nature",
    tags: ["Nature", "Forest", "Water", "Peaceful"],
    dimensions: { width: 1920, height: 1080 },
    medium: "Digital Art",
    year: 2024
  },
  {
    id: "gallery-3",
    title: "Abstract Dreams",
    description: "Surreal composition exploring the subconscious",
    src: "gallery/gallery-3.jpg",
    alt: "Abstract surreal artwork",
    category: "Abstract",
    tags: ["Abstract", "Surreal", "Dreams", "Subconscious"],
    dimensions: { width: 1920, height: 1080 },
    medium: "Digital Art",
    year: 2024
  },
  {
    id: "gallery-4",
    title: "Portrait of Time",
    description: "Character study exploring the passage of time",
    src: "gallery/gallery-4.jpg",
    alt: "Portrait with time elements",
    category: "Portrait",
    tags: ["Portrait", "Time", "Character", "Emotion"],
    dimensions: { width: 1920, height: 1080 },
    medium: "Digital Art",
    year: 2024
  }
];

export const getImageById = (id: string): GalleryImage | undefined => {
  return galleryImages.find(image => image.id === id);
};

export const getImagesByCategory = (category: string): GalleryImage[] => {
  return galleryImages.filter(image => image.category === category);
};

export const getImagesByTag = (tag: string): GalleryImage[] => {
  return galleryImages.filter(image => image.tags.includes(tag));
};

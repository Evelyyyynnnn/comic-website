export interface Exhibition {
  id: string;
  title: string;
  venue: string;
  city: string;
  country: string;
  year: number;
  startDate: string;
  endDate: string;
  description: string;
  curator: string;
  featuredWorks: string[];
  image: string;
  status: 'upcoming' | 'ongoing' | 'past';
  tags: string[];
}

export const exhibitions: Exhibition[] = [
  {
    id: "reflections-tomorrow",
    title: "Reflections of Tomorrow",
    venue: "Contemporary Art Museum",
    city: "New York",
    country: "USA",
    year: 2024,
    startDate: "2024-03-01",
    endDate: "2024-06-30",
    description: "A forward-looking exhibition exploring the intersection of technology and human creativity",
    curator: "Dr. Sarah Chen",
    featuredWorks: ["Digital Dreams", "Future Visions", "Tech Harmony"],
    image: "exhibitions/reflections-tomorrow.jpg",
    status: "ongoing",
    tags: ["Contemporary", "Technology", "Future", "Innovation"]
  },
  {
    id: "colors-emotion",
    title: "Colors of Emotion",
    venue: "Gallery Modern",
    city: "Los Angeles",
    country: "USA",
    year: 2023,
    startDate: "2023-09-15",
    endDate: "2023-12-15",
    description: "Exploring the psychological impact of color in contemporary art",
    curator: "Michael Rodriguez",
    featuredWorks: ["Emotional Spectrum", "Color Psychology", "Visual Feelings"],
    image: "exhibitions/colors-emotion.jpg",
    status: "past",
    tags: ["Color", "Psychology", "Emotion", "Contemporary"]
  },
  {
    id: "digital-renaissance",
    title: "Digital Renaissance",
    venue: "Art Space Gallery",
    city: "Chicago",
    country: "USA",
    year: 2022,
    startDate: "2022-06-01",
    endDate: "2022-09-30",
    description: "Celebrating the rebirth of artistic expression through digital mediums",
    curator: "Emma Thompson",
    featuredWorks: ["Digital Evolution", "New Media", "Virtual Reality"],
    image: "exhibitions/digital-renaissance.jpg",
    status: "past",
    tags: ["Digital", "Renaissance", "New Media", "Innovation"]
  }
];

export const getExhibitionById = (id: string): Exhibition | undefined => {
  return exhibitions.find(exhibition => exhibition.id === id);
};

export const getExhibitionsByStatus = (status: Exhibition['status']): Exhibition[] => {
  return exhibitions.filter(exhibition => exhibition.status === status);
};

export const getExhibitionsByYear = (year: number): Exhibition[] => {
  return exhibitions.filter(exhibition => exhibition.year === year);
};

export const getUpcomingExhibitions = (): Exhibition[] => {
  return getExhibitionsByStatus('upcoming');
};

export const getOngoingExhibitions = (): Exhibition[] => {
  return getExhibitionsByStatus('ongoing');
};

export const getPastExhibitions = (): Exhibition[] => {
  return getExhibitionsByStatus('past');
};

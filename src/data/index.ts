// Export all data modules
export * from './cartoon/themes';
export * from './blog/posts';
export * from './gallery/images';
export * from './exhibitions/events';
export * from './portfolio/works';

// Re-export commonly used functions for backward compatibility
export { 
  cartoonThemes, 
  getAllThemesWithCover, 
  getThemeById, 
  getRelatedThemes 
} from './cartoon/themes';

export { 
  blogPosts, 
  getRecentPosts, 
  getPostBySlug 
} from './blog/posts';

export { 
  galleryImages, 
  getImageById 
} from './gallery/images';

export { 
  exhibitions, 
  getUpcomingExhibitions, 
  getOngoingExhibitions 
} from './exhibitions/events';

export { 
  portfolioWorks, 
  getFeaturedWorks 
} from './portfolio/works';

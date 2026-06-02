export interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  location?: string;
}

export interface LegacyAchievement {
  icon: string;
  title: string;
  value: string;
  description: string;
  category: "Service" | "Patronages" | "Environment";
}

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  category: "projects" | "speeches" | "appearances" | "publications";
  summary: string;
  body: string;
  tags: string[];
  featuredImage?: string;
  quote?: {
    text: string;
    source: string;
  };
}

export interface MediaItem {
  id: string;
  type: "photo" | "video";
  src: string;
  title: string;
  description: string;
  category: string;
  date: string;
  aspectRatioClassName?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  initials: string;
}

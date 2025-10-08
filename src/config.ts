export interface SiteConfig {
  title: string;
  description: string;
  author: {
    name: string;
    bio: string;
    avatar?: string;
  };
  social: {
    github?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
  siteUrl: string;
}

export const config: SiteConfig = {
  title: "David FLAUGERE | Coach fitness / musculation / santé",
  description: "Accompagnement personnalisé | Articles autour du sport et de ma philosophie",
  author: {
    name: "David FLAUGERE",
    bio: "Coach sportif fitness / musculation. Je t'accompagne vers une version de toi en meilleure santé",
    avatar: "/images/avatar.jpg" // Uncomment and add your avatar image to public/images/
  },
  social: {
    //github: "https://github.com/flaugere",
    //linkedin: "https://linkedin.com/in/yourusername",
    email: "contact@flaugere.fr"
  },
  siteUrl: "https://flaugere.fr"
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;
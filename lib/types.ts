export type TeamMember = {
  id: string;
  name: string;
  role: string;
  photo_url: string | null;
  instagram_url: string | null;
  linkedin_url: string | null;
  sort_order: number;
};

export type CurriculumModule = {
  id: string;
  curriculum: 'c1' | 'c2';
  title: string;
  description: string;
  image_url: string | null;
  icon: string; // key into the icon registry
  features: string[];
  sort_order: number;
};

export type ImpactStat = {
  id: string;
  icon: string;
  value: string;
  label: string;
  sort_order: number;
};

export type ImpactSession = {
  id: string;
  title: string;
  year: string;
  attendees: string;
  image_url: string | null;
  description: string;
  highlights: string[];
  featured: boolean; // shown in the first row vs behind "See More"
  sort_order: number;
};

export type AwardLink = { label: string; url: string };

export type Award = {
  id: string;
  title: string;
  org: string;
  description: string;
  links: AwardLink[];
  sort_order: number;
};

export type Sponsor = {
  id: string;
  name: string;
  logo_url: string | null;
  sort_order: number;
};

export type Workshop = {
  id: string;
  title: string;
  badge: string;
  tags: string[];
  description: string;
  date: string;
  time: string;
  location: string;
  attendee_count: string;
  image_url: string | null;
  register_url: string;
  published: boolean;
  sort_order: number;
};

export type HeroStat = { value: string; label: string };
export type Initiative = { icon: string; color: string; title: string; description: string };

// Homepage / singleton content stored as keyed rows in site_content.
export type SiteContent = {
  hero_title_lead: string;
  hero_title_rest: string;
  hero_description: string;
  hero_stats: HeroStat[];
  initiatives_heading: string;
  initiatives_subheading: string;
  initiatives: Initiative[];
  about: string;
  history: string;
  mission: string;
  vision: string;
  cta_heading: string;
  cta_text: string;
};

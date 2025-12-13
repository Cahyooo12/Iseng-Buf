export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  icon?: string;
}

export interface SponsorLogos {
  id: number;
  src: string;
  alt: string;
  tier: 'platinum' | 'gold' | 'silver' | 'media';
}
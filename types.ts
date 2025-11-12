

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}
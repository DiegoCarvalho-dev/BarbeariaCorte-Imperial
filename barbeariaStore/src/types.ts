export interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

export interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export interface BlogPost {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

import React from "react";

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  price: string;
  duration: string;
}

export interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  author?: string;
  readTime?: string;
  featured?: boolean;
}

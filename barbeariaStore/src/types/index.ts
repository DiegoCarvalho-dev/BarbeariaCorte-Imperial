import React from "react";

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
  price?: string;
  duration?: string;
}

export interface BenefitItem {
  id: number;
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
  featured?: boolean;
}

export interface NavItem {
  id: number;
  name: string;
  href: string;
  hasSubmenu?: boolean;
}
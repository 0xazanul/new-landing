import React from 'react';

export type ViewMode = 'creator' | 'brand';
export type PageView = 'home' | 'blog' | 'terms' | 'contact';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}
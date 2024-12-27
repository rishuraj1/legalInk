export interface Article {
  _id: string;
  title: string;
  subtitle: string;
  author: User;
  images: string[];
  likes: number;
  content: string;
  views: number;
  comments: Comment[];
  highlightedWords: Dictionary[];
  status: "draft" | "pending" | "published";
  approveStatus: "approved" | "pending" | "rejected";
  approvedBy: User;
  mainImage?: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  _id: string;
  email: string;
  name: string;
  image?: string;
  googleId?: string;
  isAdmin: boolean;
  socials: Socials;
  designation?: string;
  location?: string;
}

export interface Socials {
  instagram?: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  bio?: string;
}

export interface Comment {
  _id: string;
  author: User;
  content: string;
  likes?: number;
  replies?: Comment[];
}

export interface Dictionary {
  _id: string;
  word: string;
  meaning: string;
  example: string;
  contributedBy: User;
  status: "approved" | "pending" | "rejected";
}

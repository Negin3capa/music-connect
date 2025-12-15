/**
 * Core type definitions for Users
 */

export type UserType = "musician" | "venue";

export interface User {
  id: string;
  email: string;
  userType: UserType;
  emailVerified: boolean;
  phoneVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface MusicianProfile {
  userId: string;
  stageName: string;
  bio: string;
  genres: string[];
  city: string;
  state: string;
  phone?: string;

  // Pricing
  priceMin: number;
  priceMax: number;

  // Media
  profilePicture?: string;
  photos: string[];
  videos: VideoLink[];

  // Social links
  socialLinks: {
    youtube?: string;
    spotify?: string;
    instagram?: string;
    facebook?: string;
    soundcloud?: string;
  };

  // Stats
  ratingAverage: number;
  ratingCount: number;
  totalShows: number;
  verificationStatus: "unverified" | "pending" | "verified";

  createdAt: Date;
  updatedAt: Date;
}

export interface VenueProfile {
  userId: string;
  venueName: string;
  description: string;
  venueType: string;
  city: string;
  state: string;
  address?: string;
  phone?: string;
  capacity?: number;

  // Media
  logo?: string;
  photos: string[];

  // Stats
  ratingAverage: number;
  ratingCount: number;
  totalBookings: number;

  createdAt: Date;
  updatedAt: Date;
}

export interface VideoLink {
  id: string;
  url: string;
  platform: "youtube" | "vimeo" | "other";
  thumbnail?: string;
  title?: string;
}

/**
 * Authentication types
 */
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData extends LoginCredentials {
  userType: UserType;
  name: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

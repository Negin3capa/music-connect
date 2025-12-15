/**
 * Booking and contract type definitions
 */

export type BookingStatus =
  | "pending"
  | "confirmed"
  | "completed"
  | "cancelled"
  | "disputed";

export interface Booking {
  id: string;
  musicianId: string;
  venueId: string;

  // Event details
  eventDate: Date;
  eventTime: string;
  duration: number; // in hours
  location: string;
  eventDescription?: string;

  // Pricing
  agreedPrice: number;
  platformFee: number;
  totalAmount: number;

  // Status
  status: BookingStatus;
  contractAcceptedAt?: Date;
  completedAt?: Date;
  cancelledAt?: Date;
  cancelReason?: string;

  // Payment
  paymentId?: string;
  paymentStatus: "pending" | "held" | "released" | "refunded";

  createdAt: Date;
  updatedAt: Date;
}

export interface BookingRequest {
  musicianId: string;
  eventDate: Date;
  eventTime: string;
  duration: number;
  location: string;
  eventDescription: string;
  offeredPrice: number;
}

export interface Contract {
  bookingId: string;
  terms: string;
  musicianAccepted: boolean;
  venueAccepted: boolean;
  musicianAcceptedAt?: Date;
  venueAcceptedAt?: Date;
  generatedAt: Date;
}

/**
 * Search and filtering types
 */
export interface SearchFilters {
  genres?: string[];
  city?: string;
  state?: string;
  priceMin?: number;
  priceMax?: number;
  availableOn?: Date;
  minRating?: number;
  verifiedOnly?: boolean;
}

export interface SearchResult {
  musicians: MusicianSearchResult[];
  total: number;
  page: number;
  pageSize: number;
}

export interface MusicianSearchResult {
  userId: string;
  stageName: string;
  genres: string[];
  city: string;
  state: string;
  priceMin: number;
  priceMax: number;
  profilePicture?: string;
  ratingAverage: number;
  ratingCount: number;
  totalShows: number;
  verified: boolean;
}

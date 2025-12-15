/**
 * Application-wide route constants
 *
 * Using constants for routes prevents typos and makes refactoring easier.
 * Import from this file instead of hardcoding route strings.
 */

export const ROUTES = {
  // Public routes
  HOME: "/",

  // Authentication routes
  AUTH: {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
  },

  // Musician routes
  MUSICIAN: {
    DASHBOARD: "/musician/dashboard",
    PROFILE_EDIT: "/musician/profile/edit",
    BOOKINGS: "/musician/bookings",
    CALENDAR: "/musician/calendar",
    EARNINGS: "/musician/earnings",
  },

  // Venue routes
  VENUE: {
    DASHBOARD: "/venue/dashboard",
    SEARCH: "/venue/search",
    BOOKINGS: "/venue/bookings",
    FAVORITES: "/venue/favorites",
  },

  // Booking routes
  BOOKING: {
    REQUEST: "/booking/request/:artistId",
    DETAILS: "/booking/:bookingId",
    CONTRACT: "/booking/:bookingId/contract",
    PAYMENT: "/booking/:bookingId/payment",
  },

  // Profile routes (public)
  PROFILE: {
    MUSICIAN: "/profile/musician/:id",
    VENUE: "/profile/venue/:id",
  },

  // Static pages
  ABOUT: "/about",
  CONTACT: "/contact",
  TERMS: "/terms",
  PRIVACY: "/privacy",
  HELP: "/help",

  // Error pages
  NOT_FOUND: "/404",
  UNAUTHORIZED: "/401",
} as const;

/**
 * Helper to generate dynamic routes
 */
export const generateRoute = {
  musicianProfile: (id: string) => `/profile/musician/${id}`,
  venueProfile: (id: string) => `/profile/venue/${id}`,
  bookingRequest: (artistId: string) => `/booking/request/${artistId}`,
  bookingDetails: (bookingId: string) => `/booking/${bookingId}`,
  bookingContract: (bookingId: string) => `/booking/${bookingId}/contract`,
  bookingPayment: (bookingId: string) => `/booking/${bookingId}/payment`,
} as const;

/**
 * Music genres available on the platform
 *
 * Curated list of popular music genres in Brazil
 */

export const MUSIC_GENRES = [
  // Popular Brazilian genres
  "MPB",
  "Sertanejo",
  "Samba",
  "Pagode",
  "Forró",
  "Bossa Nova",
  "Funk Brasileiro",
  "Axé",
  "Frevo",
  "Baião",
  "Piseiro",
  "Arrocha",
  "Xote",

  // International genres
  "Rock",
  "Pop",
  "Jazz",
  "Blues",
  "Reggae",
  "Eletrônica",
  "Hip Hop",
  "Trap",
  "R&B",
  "Soul",
  "Country",
  "Folk",
  "Indie",
  "Metal",
  "Punk",
  "Clássica",

  // Other
  "Acústico",
  "Instrumental",
  "Cover",
  "Outros",
] as const;

export type MusicGenre = (typeof MUSIC_GENRES)[number];

/**
 * Venue types
 */
export const VENUE_TYPES = [
  "Bar",
  "Restaurante",
  "Casa de Shows",
  "Clube",
  "Teatro",
  "Espaço de Eventos",
  "Hotel",
  "Café",
  "Lounge",
  "Festival",
  "Evento Corporativo",
  "Casamento",
  "Festa Privada",
  "Outros",
] as const;

export type VenueType = (typeof VENUE_TYPES)[number];

/**
 * Brazilian states
 */
export const BRAZILIAN_STATES = [
  { code: "AC", name: "Acre" },
  { code: "AL", name: "Alagoas" },
  { code: "AP", name: "Amapá" },
  { code: "AM", name: "Amazonas" },
  { code: "BA", name: "Bahia" },
  { code: "CE", name: "Ceará" },
  { code: "DF", name: "Distrito Federal" },
  { code: "ES", name: "Espírito Santo" },
  { code: "GO", name: "Goiás" },
  { code: "MA", name: "Maranhão" },
  { code: "MT", name: "Mato Grosso" },
  { code: "MS", name: "Mato Grosso do Sul" },
  { code: "MG", name: "Minas Gerais" },
  { code: "PA", name: "Pará" },
  { code: "PB", name: "Paraíba" },
  { code: "PR", name: "Paraná" },
  { code: "PE", name: "Pernambuco" },
  { code: "PI", name: "Piauí" },
  { code: "RJ", name: "Rio de Janeiro" },
  { code: "RN", name: "Rio Grande do Norte" },
  { code: "RS", name: "Rio Grande do Sul" },
  { code: "RO", name: "Rondônia" },
  { code: "RR", name: "Roraima" },
  { code: "SC", name: "Santa Catarina" },
  { code: "SP", name: "São Paulo" },
  { code: "SE", name: "Sergipe" },
  { code: "TO", name: "Tocantins" },
] as const;

/**
 * Booking status
 */
export const BOOKING_STATUS = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
  DISPUTED: "disputed",
} as const;

export type BookingStatus =
  (typeof BOOKING_STATUS)[keyof typeof BOOKING_STATUS];

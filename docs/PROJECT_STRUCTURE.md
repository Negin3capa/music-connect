# 📁 Project Structure Documentation

This document explains the MusicConnect project structure and organization principles.

## 🎯 Directory Overview

```
MusicConnect/
├── .git/                       # Git version control
├── .trunk/                     # Trunk CI/linting configuration
├── docs/                       # Project documentation
│   ├── MVP.md                 # MVP specification
│   └── PROJECT_STRUCTURE.md   # This file
├── dist/                       # Production build output (auto-generated)
├── node_modules/              # Dependencies (auto-generated)
├── public/                     # Static assets served as-is
│   └── images/                # Public images (logos, og-images, etc.)
├── src/                        # Source code
│   ├── assets/                # Internal assets requiring processing
│   │   ├── fonts/             # Custom fonts
│   │   ├── icons/             # SVG icons
│   │   └── images/            # Images to be bundled
│   ├── components/            # Reusable UI components
│   │   ├── ui/                # Base UI components (Button, Card, etc.)
│   │   └── Header.tsx         # Shared layout components
│   ├── config/                # Application configuration
│   ├── constants/             # App-wide constants and enums
│   ├── contexts/              # React Context providers
│   ├── features/              # Feature-based modules
│   │   ├── calendar/          # Calendar/availability feature
│   │   ├── messaging/         # In-app messaging (post-MVP)
│   │   ├── payments/          # Payment/escrow functionality
│   │   ├── reviews/           # Review and rating system
│   │   └── search/            # Search and filtering
│   ├── hooks/                 # Custom React hooks
│   ├── layouts/               # Page layout components
│   ├── lib/                   # Third-party library configurations
│   │   └── utils.ts           # Utility helpers (cn, etc.)
│   ├── pages/                 # Page components (routes)
│   │   ├── auth/              # Authentication pages
│   │   ├── booking/           # Booking flow pages
│   │   ├── musician/          # Musician-specific pages
│   │   ├── profile/           # Profile management
│   │   └── venue/             # Venue-specific pages
│   ├── services/              # External service integrations
│   │   ├── api/               # API client and endpoints
│   │   ├── auth/              # Authentication service
│   │   └── stripe/            # Stripe payment integration
│   ├── types/                 # TypeScript type definitions
│   ├── utils/                 # Utility functions
│   ├── Index.tsx              # Landing page component
│   ├── index.css              # Global styles
│   └── main.tsx               # Application entry point
├── .gitignore                 # Git ignore rules
├── index.html                 # HTML entry point
├── package.json               # Project dependencies and scripts
├── postcss.config.cjs         # PostCSS configuration
├── tailwind.config.cjs        # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite bundler configuration
└── README.md                  # Project overview

```

## 📂 Directory Details

### `/src/pages/`

**Purpose**: Top-level route components that represent full pages.

**Structure**:

- `auth/` - Login, signup, password reset pages
- `musician/` - Musician dashboard, profile edit, bookings
- `venue/` - Venue dashboard, search artists, manage events
- `booking/` - Booking flow, contract review, payment
- `profile/` - Public profile views

**Convention**:

- One folder per major route section
- Use `index.tsx` for main page of each section
- Keep pages lightweight - delegate to feature components

**Example**:

```
pages/
├── auth/
│   ├── Login.tsx
│   ├── Signup.tsx
│   └── ForgotPassword.tsx
└── musician/
    ├── Dashboard.tsx
    ├── ProfileEdit.tsx
    └── Bookings.tsx
```

### `/src/features/`

**Purpose**: Feature-specific modules containing related components, hooks, and logic.

**Structure**:

- `search/` - Search bar, filters, results grid
- `calendar/` - Availability calendar, date picker
- `payments/` - Payment forms, escrow status, transaction history
- `reviews/` - Review cards, rating components, review forms
- `messaging/` - Chat interface, message lists (post-MVP)

**Convention**:

- Each feature is self-contained with its own components/hooks/utils
- Features can import from shared `components/` but not other features
- Use index.ts for clean exports

**Example**:

```
features/search/
├── components/
│   ├── SearchBar.tsx
│   ├── FilterPanel.tsx
│   └── ResultsGrid.tsx
├── hooks/
│   └── useSearch.ts
├── types.ts
└── index.ts
```

### `/src/components/`

**Purpose**: Shared, reusable UI components used across multiple pages/features.

**Structure**:

- `ui/` - Base components (Button, Card, Badge, Input, etc.)
- Root level - Composite components (Header, Footer, Sidebar)

**Convention**:

- Keep components pure and reusable
- Use TypeScript interfaces for props
- Document complex components with JSDoc
- Colocate styles when using CSS modules

**Example**:

```typescript
// components/ui/Button.tsx
export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}
```

### `/src/layouts/`

**Purpose**: Page layout wrappers (headers, sidebars, footers).

**Convention**:

- `MainLayout.tsx` - Default layout with header/footer
- `DashboardLayout.tsx` - Authenticated layout with sidebar
- `AuthLayout.tsx` - Minimal layout for auth pages

**Example**:

```typescript
export const DashboardLayout = ({ children }: PropsWithChildren) => (
  <div className="flex h-screen">
    <Sidebar />
    <main className="flex-1 overflow-auto">
      {children}
    </main>
  </div>
);
```

### `/src/hooks/`

**Purpose**: Custom React hooks for shared logic.

**Convention**:

- Prefix with `use` (e.g., `useAuth`, `useDebounce`)
- Keep hooks focused on single responsibility
- Return objects/arrays for multiple values

**Examples**:

- `useAuth.ts` - Authentication state and methods
- `useDebounce.ts` - Debounce values
- `useMediaQuery.ts` - Responsive breakpoint detection
- `usePagination.ts` - Pagination logic
- `useLocalStorage.ts` - LocalStorage sync

### `/src/contexts/`

**Purpose**: React Context providers for global state.

**Convention**:

- One file per context (e.g., `AuthContext.tsx`)
- Export both Provider and consumer hook
- Use TypeScript for type safety

**Example**:

```typescript
// contexts/AuthContext.tsx
export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  // ... state and logic
  return <AuthContext.Provider value={...}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
```

### `/src/services/`

**Purpose**: External service integrations and API clients.

**Structure**:

- `api/` - REST API client, endpoint definitions
- `auth/` - Authentication service (JWT, session management)
- `stripe/` - Stripe payment integration

**Convention**:

- Abstract third-party SDKs behind service interfaces
- Use async/await for all service calls
- Handle errors consistently

**Example**:

```typescript
// services/api/musicians.ts
export const musicianService = {
  getAll: (filters: SearchFilters) =>
    api.get("/musicians", { params: filters }),
  getById: (id: string) => api.get(`/musicians/${id}`),
  update: (id: string, data: MusicianProfile) =>
    api.put(`/musicians/${id}`, data),
};
```

### `/src/types/`

**Purpose**: Shared TypeScript type definitions and interfaces.

**Convention**:

- Group related types in files (e.g., `user.ts`, `booking.ts`)
- Use interfaces for objects, types for unions/utilities
- Export from `index.ts` for clean imports

**Example**:

```typescript
// types/user.ts
export interface User {
  id: string;
  email: string;
  userType: "musician" | "venue";
  createdAt: Date;
}

export interface MusicianProfile extends User {
  stageName: string;
  genres: string[];
  priceRange: { min: number; max: number };
}
```

### `/src/constants/`

**Purpose**: Application-wide constants and enumerations.

**Examples**:

- `routes.ts` - Route path constants
- `genres.ts` - Music genre list
- `config.ts` - Non-sensitive configuration
- `validation.ts` - Validation rules/messages

**Example**:

```typescript
// constants/routes.ts
export const ROUTES = {
  HOME: "/",
  LOGIN: "/auth/login",
  MUSICIAN_DASHBOARD: "/musician/dashboard",
  VENUE_DASHBOARD: "/venue/dashboard",
} as const;
```

### `/src/utils/`

**Purpose**: Pure utility functions.

**Convention**:

- Keep functions pure (no side effects)
- One function per file or group related utilities
- Add unit tests for complex utilities

**Examples**:

- `formatters.ts` - Date, currency, string formatters
- `validators.ts` - Validation helpers
- `calculations.ts` - Business logic calculations

### `/src/config/`

**Purpose**: Application configuration.

**Examples**:

- `env.ts` - Environment variable access with validation
- `features.ts` - Feature flags
- `theme.ts` - Theme configuration

### `/src/assets/`

**Purpose**: Static assets that need build-time processing.

**Structure**:

- `images/` - Images to be optimized/bundled
- `icons/` - SVG icons
- `fonts/` - Custom web fonts

**Note**: Use `/public/` for assets that should be served as-is.

### `/public/`

**Purpose**: Static files served directly without processing.

**Examples**:

- `favicon.ico`
- `robots.txt`
- SEO images (og:image, twitter:image)
- `manifest.json` (PWA)

## 🎨 Naming Conventions

### Files

- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Utilities/Hooks**: camelCase (e.g., `useAuth.ts`, `formatDate.ts`)
- **Constants**: SCREAMING_SNAKE_CASE or camelCase files (e.g., `API_KEYS.ts`, `routes.ts`)
- **Types**: camelCase files (e.g., `user.ts`), PascalCase exports

### Components

- Use descriptive names: `MusicianSearchBar` not `MSB`
- Suffix containers with `Container` if separating logic
- Suffix pages with `Page` if needed for clarity

### Variables

- **Constants**: `SCREAMING_SNAKE_CASE`
- **Functions**: `camelCase`
- **React Components**: `PascalCase`
- **Types/Interfaces**: `PascalCase`

## 🔄 Import Order

Maintain consistent import order:

```typescript
// 1. External dependencies
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 2. Internal components
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";

// 3. Hooks
import { useAuth } from "@/hooks/useAuth";

// 4. Utils/Services
import { api } from "@/services/api";
import { formatDate } from "@/utils/formatters";

// 5. Types
import type { User } from "@/types/user";

// 6. Constants
import { ROUTES } from "@/constants/routes";

// 7. Styles (if applicable)
import "./styles.css";
```

## 🚀 Best Practices

### Component Organization

1. **Colocation**: Keep related files close (tests, styles near components)
2. **Single Responsibility**: One component does one thing well
3. **Composition**: Prefer composition over inheritance
4. **Props Interface**: Always define TypeScript interfaces for props

### State Management

1. **Local First**: Use local state when possible
2. **Context for Global**: Use Context for app-wide state (auth, theme)
3. **Server State**: Consider React Query for API data (post-MVP)

### Code Quality

1. **TypeScript**: Leverage strict type checking
2. **Linting**: Keep ESLint warnings at zero
3. **Testing**: Colocate tests with components (`Component.test.tsx`)
4. **Documentation**: Add JSDoc for complex functions

### Performance

1. **Code Splitting**: Use React.lazy() for route-based splitting
2. **Memoization**: Use React.memo(), useMemo(), useCallback() judiciously
3. **Asset Optimization**: Compress images, use WebP format
4. **Bundle Analysis**: Monitor bundle size

## 📝 Adding New Features

When adding a new feature, follow this checklist:

1. **Define Types** (`/src/types/feature.ts`)
2. **Create Service** (`/src/services/api/feature.ts`) if API is involved
3. **Build Components** (`/src/features/feature/components/`)
4. **Add Custom Hooks** (`/src/features/feature/hooks/`) if needed
5. **Create Pages** (`/src/pages/feature/`)
6. **Update Routes** (in main routing configuration)
7. **Add Tests** (colocated with components)
8. **Update Documentation** (this file + README if significant)

## 🔍 Quick Reference

| Need                       | Location                                          |
| -------------------------- | ------------------------------------------------- |
| New page/route             | `/src/pages/`                                     |
| Reusable UI component      | `/src/components/` or `/src/components/ui/`       |
| Feature-specific component | `/src/features/{feature}/components/`             |
| API call                   | `/src/services/api/`                              |
| Global state               | `/src/contexts/`                                  |
| Custom hook                | `/src/hooks/` or `/src/features/{feature}/hooks/` |
| Type definition            | `/src/types/`                                     |
| Utility function           | `/src/utils/`                                     |
| Constant value             | `/src/constants/`                                 |
| Configuration              | `/src/config/`                                    |

---

**Last Updated**: December 2025  
**Maintained By**: Development Team

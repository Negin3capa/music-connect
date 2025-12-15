# 🎯 MusicConnect - MVP Specification

**Version**: 1.0  
**Last Updated**: December 2025  
**Status**: Planning Phase

## 🌟 Vision

MusicConnect aims to revolutionize the music booking industry in Brazil by creating a trusted, efficient marketplace that connects entertainment venues with musical talent. We eliminate the friction in finding, booking, and paying artists while providing security and transparency for both parties.

## 🎭 The Problem

### For Venues & Event Organizers

- **Discovery Challenge**: Hard to find available, quality musicians matching specific genres and budget
- **Trust Issues**: Risk of no-shows or unprofessional performances
- **Payment Friction**: Awkward negotiation process and payment security concerns
- **Limited Information**: Difficult to assess artist quality without extensive research

### For Musicians & Bands

- **Visibility Gap**: Talented artists struggle to reach potential clients
- **Unreliable Income**: Inconsistent bookings and payment guarantee concerns
- **Time Waste**: Manual outreach and negotiations consume creative time
- **Payment Risk**: No-shows from venues or delayed/missing payments

## 💡 The Solution

A two-sided marketplace platform that:

1. **Connects** venues with verified musicians through smart search and recommendations
2. **Facilitates** transparent negotiations with standardized contracting
3. **Protects** both parties through escrow-based payments
4. **Builds Trust** via verified reviews and reputation systems

## 👥 User Personas

### Persona 1: The Venue Owner (Primary User)

**Name**: Carlos, 42  
**Role**: Owner of "Bar do Carlos" in São Paulo  
**Context**: Runs a mid-sized bar hosting live music every Friday and Saturday

**Needs**:

- Find reliable bands playing rock/MPB within R$ 500-1000 budget
- Ensure artists show up (has had 3 no-shows this year)
- Simple payment process
- Build a roster of trusted artists

**Pain Points**:

- Spends hours searching social media and asking for recommendations
- No centralized place to compare artists
- Uncomfortable negotiating rates
- Lost revenue when artists cancel last-minute

### Persona 2: The Professional Musician (Primary User)

**Name**: Marina, 28  
**Role**: Solo acoustic guitarist (MPB/Bossa Nova)  
**Context**: Freelance musician seeking consistent weekend gigs

**Needs**:

- Steady stream of booking opportunities
- Fair rates with guaranteed payment
- Manage calendar and availability easily
- Build reputation and portfolio

**Pain Points**:

- Inconsistent bookings require secondary job
- Venues sometimes don't pay agreed amount
- Hard to market herself effectively
- No centralized platform to showcase work

### Persona 3: The Event Organizer (Secondary User)

**Name**: Juliana, 35  
**Role**: Corporate Event Planner  
**Context**: Plans 10-15 corporate events annually

**Needs**:

- Book professional entertainment quickly
- Higher budget (R$ 2000-5000) but needs quality assurance
- Reliable contracts and invoicing
- Variety of music styles based on client requests

**Pain Points**:

- Limited time to vet artists
- Needs professional invoices for client billing
- Requires backup plans if artist cancels
- Wants portfolio evidence before committing

## 🎯 MVP Core Features

### Phase 1: Discovery & Profiles (MVP v1.0)

#### For Musicians

- [ ] **Profile Creation**
  - Basic info (name, genre, location, price range)
  - Bio and description
  - Photo upload (profile picture + gallery)
  - External links (YouTube, Spotify, Instagram)
  - Availability calendar
- [ ] **Portfolio Management**
  - Embed videos from YouTube/Vimeo
  - Link to streaming platforms
  - Performance photos gallery (max 10)

#### For Venues

- [ ] **Search & Discovery**
  - Filter by: genre, location (city/state), price range, availability
  - Sort by: rating, price, distance, availability
  - Grid/list view of search results
- [ ] **Artist Profiles View**
  - View complete musician profiles
  - See availability calendar
  - Watch embedded videos
  - View photo gallery

#### Platform Features

- [ ] **Authentication**
  - Email/password signup and login
  - User type selection (Musician vs Venue)
  - Basic profile completion wizard
- [ ] **Responsive Design**
  - Mobile-optimized interface
  - Desktop-optimized browsing
  - Cross-browser compatibility

### Phase 2: Booking & Transactions (MVP v1.1)

#### Booking System

- [ ] **Booking Request Flow**
  - Venue sends booking inquiry with date, time, location, offered price
  - Musician accepts/rejects/counters offer
  - Automated notification system (email)
- [ ] **Contract Management**
  - Auto-generated simple contract with booking details
  - Digital acceptance (checkbox + timestamp)
  - PDF download of agreement

#### Payment System

- [ ] **Escrow Integration**
  - Stripe Connect integration
  - Venue deposits payment upon booking confirmation
  - Funds held in escrow until 24h after event
  - Auto-release to musician account
  - Platform fee: 8% (4% from each party)

- [ ] **Payment Flow**
  - Venue adds payment method
  - Musician adds bank account for payouts
  - Transparent fee structure display
  - Payment history and invoicing

### Phase 3: Trust & Reputation (MVP v1.2)

#### Review System

- [ ] **Post-Event Reviews**
  - Both parties can review after event completion
  - 5-star rating system
  - Written feedback (optional)
  - Review verification (must have completed booking)
- [ ] **Reputation Display**
  - Average rating shown on profiles
  - Number of completed shows
  - Review highlights
  - Response rate and time metrics

#### Verification

- [ ] **Profile Verification**
  - Email verification (required)
  - Phone verification (optional, badge awarded)
  - Social media linking (Instagram/Facebook verification)
  - Government ID verification for payments (required)

## 🏗️ Technical Architecture

### Frontend Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with custom design system
- **State Management**: React Context API (upgrade to Redux later if needed)
- **Routing**: React Router v6
- **Forms**: React Hook Form + Zod validation
- **HTTP Client**: Axios
- **File Uploads**: AWS S3 via pre-signed URLs

### Backend Stack (Planned)

- **Runtime**: Node.js with Express
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT + bcrypt
- **File Storage**: AWS S3
- **Payment Processing**: Stripe Connect
- **Email Service**: SendGrid
- **Hosting**: Railway or Render (backend), Vercel (frontend)

### Database Schema (Core Tables)

```sql
users
  - id, email, password_hash, user_type (musician/venue)
  - created_at, updated_at

musician_profiles
  - user_id, stage_name, bio, genres[], price_min, price_max
  - city, state, phone, social_links{}
  - verification_status, rating_avg, total_shows

venue_profiles
  - user_id, venue_name, description, venue_type
  - city, state, phone, capacity
  - rating_avg, total_bookings

bookings
  - id, musician_id, venue_id, event_date, event_time
  - location, agreed_price, status (pending/confirmed/completed/cancelled)
  - contract_accepted_at, created_at

reviews
  - id, booking_id, reviewer_id, reviewee_id
  - rating, comment, created_at

media
  - id, user_id, media_type (photo/video), url, thumbnail_url
  - display_order, created_at
```

## 📊 Success Metrics

### Launch Goals (First 3 Months)

- **User Acquisition**: 100 musicians, 50 venues registered
- **Engagement**: 20 completed bookings
- **Quality**: Average rating > 4.0 stars
- **Retention**: 40% of users complete profile within 7 days

### Growth Goals (6-12 Months)

- **Scale**: 500 musicians, 200 venues across 5 major Brazilian cities
- **Revenue**: R$ 10,000 monthly GMV (Gross Merchandise Value)
- **Activity**: 100+ bookings per month
- **Platform Health**: < 5% cancellation rate

## 🚧 Out of Scope for MVP

The following features are planned for post-MVP releases:

- Advanced calendar sync (Google Calendar, iCal)
- In-app messaging system
- Multi-artist bookings (bands with individual profiles)
- Venue promoter/management accounts
- Video calls for virtual auditions
- Advanced analytics dashboard
- Mobile native apps (iOS/Android)
- Multi-language support (currently Portuguese only)
- Automated contract negotiation and counter-offers
- Equipment rental marketplace
- Tour booking features

## 🎨 Design Principles

1. **Simplicity First**: Every flow should be intuitive and require minimal steps
2. **Mobile-First**: Most musicians browse on mobile
3. **Trust Through Transparency**: Show all fees, terms, and processes clearly
4. **Visual Portfolio**: Music is visual - prioritize video/photo showcase
5. **Speed Matters**: Fast load times and instant search results

## 🔐 Security & Compliance

- **Data Protection**: LGPD (Brazilian data protection law) compliance
- **Payment Security**: PCI-DSS compliant via Stripe
- **Authentication**: Secure password requirements, optional 2FA
- **Privacy**: Clear privacy policy and terms of service
- **Fraud Prevention**: Review verification, booking deposit requirements

## 📅 Development Timeline

### Month 1-2: Foundation

- Setup development environment
- Implement authentication system
- Build core UI components and design system
- Create database schema and models

### Month 3-4: Core Features

- Musician profile creation and management
- Venue search and filtering
- Profile viewing and media galleries
- Availability calendar

### Month 5-6: Transactions

- Booking request system
- Stripe integration and escrow
- Contract generation
- Email notification system

### Month 7: Polish & Testing

- Review system implementation
- Profile verification
- Bug fixes and performance optimization
- User acceptance testing

### Month 8: Beta Launch

- Limited beta with 20 musicians + 10 venues
- Gather feedback and iterate
- Monitor metrics and fix critical issues

### Month 9: Public Launch

- Marketing push in São Paulo
- Public launch with onboarding flow
- Customer support setup

## 💰 Business Model

### Revenue Streams

1. **Transaction Fees**: 8% total (4% from musician, 4% from venue) on each booking
2. **Premium Subscriptions** (Post-MVP):
   - Musicians: Featured placement, analytics, unlimited media
   - Venues: Priority support, bulk booking discounts

### Cost Structure

- **Payment Processing**: ~3% (Stripe fees)
- **Hosting**: ~$100/month (estimated)
- **Email Service**: ~$50/month (SendGrid)
- **Marketing**: Variable

## 🎯 Go-to-Market Strategy

### Phase 1: São Paulo Focus

- Target 2-3 neighborhoods with active bar/music scenes (Vila Madalena, Pinheiros)
- Direct outreach to 50 bars and 100 musicians
- Partner with music schools and associations

### Phase 2: Word of Mouth

- Incentivize early users with first booking fee waiver
- Referral program (both sides get R$ 50 credit)
- Social media presence showcasing success stories

### Phase 3: Expansion

- Replicate model in Rio de Janeiro, Belo Horizonte
- Partner with event planning agencies
- Festival and corporate event market entry

## 🤝 Competitive Analysis

### Direct Competitors

- **Queremos** (crowdfunded shows) - Different model, larger artists
- **Eventbrite** - Event discovery, not artist booking
- **Workana/Freelancer** - Generic, not music-focused

### Competitive Advantages

- **Niche Focus**: Music booking only, optimized UX
- **Escrow Protection**: Payment security for both sides
- **Local First**: Brazilian market focus with local payment methods
- **Discovery Tools**: Smart matching vs generic search

---

## 📝 Next Steps

1. **User Research**: Interview 10 venues and 10 musicians to validate assumptions
2. **Design Mockups**: Create high-fidelity designs for core flows
3. **Technical Setup**: Initialize repositories and development environment
4. **MVP Development**: Execute 8-month development timeline
5. **Beta Testing**: Recruit beta testers in São Paulo

---

**Document Owner**: Product Team  
**Review Cycle**: Bi-weekly during development  
**Feedback**: Open to all stakeholders via GitHub issues or team meetings

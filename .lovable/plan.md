

# StyleSync AI — Phase 1 Implementation Plan

## Overview
Build the core frontend experience for StyleSync AI: a premium dark-themed AI fashion platform with the landing page, Google authentication, photo upload UI, and foundational design system. Backend integrations (Fashn.ai, Razorpay, n8n) will be wired in subsequent phases.

The uploaded logo will be embedded in the app, and the brand gradient (pink → purple → teal from the logo) will drive the entire color system.

---

## 1. Design System & Theme Setup
- Dark UI with background `#0B0B10`, surface `#12121A`, cards `#171722`
- Brand gradient: `linear-gradient(135deg, #FF4D8D, #7B61FF, #00C2A8)`
- 95% dark neutrals, 5% gradient accents
- Custom Tailwind color tokens for Accent Pink, AI Purple, Neo Teal
- Glassmorphism utility classes (subtle blur)
- Gradient glow button component
- Framer Motion animation presets (fade, shimmer, hover elevation)

## 2. Landing Page
- **Hero section**: Large headline with gradient text, animated AI fashion visual, "Try Your Style" CTA with gradient glow
- **How It Works**: 3-step visual flow (Upload → AI Styles → Try On)
- **Example Transformations**: Before/after showcase cards (placeholder images for now)
- **Benefits section**: Targeted at Gen Z — fast, private, affordable
- **Pricing preview**: Free vs Pro tier cards
- **Footer**: Links, privacy note, social placeholders
- StyleSync AI logo in the navbar

## 3. Authentication
- Connect external Supabase project
- Google OAuth sign-in via Supabase Auth
- Minimal auth page with the brand aesthetic
- Protected routes for upload and dashboard pages
- User session management with auth state listener

## 4. Photo Upload Page (UI Only)
- Drag-and-drop zone with camera capture support
- Upload guidelines (accepted formats, max size, tips for best results)
- File validation (type, size, dimensions) on the client side
- Upload progress bar with AI shimmer animation
- Placeholder for the AI generation flow (will connect to Fashn.ai via edge function in Phase 2)

## 5. Results Page (UI Shell)
- Large virtual try-on preview area
- Outfit carousel component
- Metadata display (style name, price range, color palette)
- Save look / share / compare buttons (functional wiring in Phase 2)
- Skeleton loading states for AI generation

## 6. User Dashboard (UI Shell)
- Saved looks grid
- History list
- Style preferences section
- Subscription status card (Razorpay integration in Phase 3)

## 7. Pricing Page
- Free tier vs Pro tier comparison
- Feature breakdown cards
- CTA buttons (payment flow in Phase 3 with Razorpay)

## 8. Privacy Page
- Clear statements on auto image deletion, no permanent storage, minimal data collection

## 9. Supabase Database Schema
- **profiles** table (linked to auth.users): display name, avatar URL, preferences
- **saved_looks** table: user_id, outfit data (JSON), AI result URL, created_at
- **user_preferences** table: style preferences, budget range, favorite colors
- RLS policies so users can only access their own data
- Auto-create profile trigger on signup

---

## What's Included in Phase 1
✅ Full dark-themed UI with brand identity  
✅ All 7 pages built and routed  
✅ Google OAuth authentication  
✅ Photo upload UI with client-side validation  
✅ Supabase database schema with RLS  
✅ Responsive mobile-first design  
✅ Framer Motion animations  
✅ Loading skeletons and shimmer effects  

## What's Deferred to Phase 2+
- Fashn.ai integration via edge functions
- n8n webhook workflows
- Razorpay subscription billing
- Affiliate link tracking
- Admin panel
- S3/R2 signed upload URLs
- Auto-deletion of images


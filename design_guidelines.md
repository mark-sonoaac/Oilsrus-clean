# Oils R Us - Premium Oil Store Design Guidelines

## Design Approach

**Reference-Based Approach: Premium E-commerce**
Drawing inspiration from luxury product retailers like Aesop, premium Shopify stores, and high-end specialty food brands. The design emphasizes tactile elegance, natural authenticity, and refined simplicity that reflects the premium quality of the oils.

---

## Core Design Principles

1. **Natural Luxury**: Warm, organic aesthetic that feels both premium and approachable
2. **Product-First**: Let the oils and their qualities shine through clean presentation
3. **Trust & Transparency**: Clear information hierarchy builds customer confidence
4. **Sensory Appeal**: Visual design should evoke the richness and purity of the products

---

## Color Palette

**Light Mode (Primary)**
- Primary Background: 48 15% 97% (warm cream/off-white)
- Secondary Background: 35 25% 92% (light warm beige)
- Primary Brand: 28 45% 35% (rich warm brown - earthy, premium)
- Text Primary: 28 20% 20% (deep warm charcoal)
- Text Secondary: 28 15% 45% (medium warm grey)
- Accent: 35 65% 55% (warm amber/golden - use sparingly for CTAs)
- Border/Divider: 35 20% 85% (soft warm grey)

**Dark Mode**
- Not required for this static landing page (light mode only)

---

## Typography

**Font Stack (via Google Fonts CDN)**
- **Primary (Headings)**: 'Playfair Display', serif - elegant, premium feel
  - H1: 3.5rem (56px), font-weight 600, letter-spacing -0.02em
  - H2: 2.5rem (40px), font-weight 600, letter-spacing -0.01em
  - H3: 1.75rem (28px), font-weight 500
  
- **Secondary (Body)**: 'Inter', sans-serif - clean, readable
  - Body: 1rem (16px), font-weight 400, line-height 1.6
  - Small: 0.875rem (14px), font-weight 400
  - Strong/Bold: font-weight 600

---

## Layout System

**Spacing Primitives (Tailwind units)**
- Core spacing: 4, 8, 12, 16, 20, 24, 32 (consistent rhythm)
- Section padding: py-16 md:py-24 (vertical breathing room)
- Container max-width: max-w-7xl (1280px)
- Content max-width: max-w-4xl for text-heavy sections

**Grid Strategy**
- Gallery: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 with gap-6
- Features: grid-cols-1 md:grid-cols-3 with gap-8
- Mobile-first: Always single column on mobile

---

## Component Library

### Header/Hero Section
- Full-width hero with warm gradient overlay (35 45% 96% to 48 20% 94%)
- Large hero image: Premium oil bottles in warm lighting, styled photography
- Centered headline with store name in Playfair Display
- Store information prominently displayed (phone, address, hours) in clean card
- Primary CTA button: "View Our Collection" or "Shop Premium Oils"

### Navigation (Simple)
- Sticky header with logo (if available) or store name
- Minimal navigation: Home, Gallery, About, Contact, Directions
- Mobile: Hamburger menu

### Gallery Section
- Title: "Our Premium Collection" or "Discover Our Oils"
- Masonry-style or equal-height grid of product images
- Each image: Oil bottles with warm, natural lighting and subtle shadows
- Hover effect: Gentle scale (1.05) with smooth transition
- Image aspect ratio: 4:5 (portrait) for product shots

### About/Brand Section
- Two-column layout (md:grid-cols-2)
- Left: Brand story text with generous line-height
- Right: Image of oils/store ambiance or production process
- Background: Subtle warm secondary background color
- Include quality promises: "Sustainably Sourced", "Lab Tested", "Premium Quality"

### Store Information Section
- Three-column grid (md:grid-cols-3) with icons
- Column 1: Phone number with clickable tel: link, include icon
- Column 2: Address with visual icon
- Column 3: Operating hours with clock icon
- Each column: Card-style with subtle border and padding

### Map Section  
- Title: "Visit Our Store"
- Embedded Google Maps iframe (600px height on desktop, 400px mobile)
- Prominent "Get Directions" CTA button below map
- Include written address again for accessibility

### Footer
- Two-column layout (stacked on mobile)
- Left: Store name, tagline, copyright
- Right: Quick links (if any), social media (if applicable)
- Background: Secondary warm beige color
- Subtle top border in border color

---

## Images

**Hero Section**
- Large hero image (1920x1080): Premium oil bottles arranged on natural wood surface with warm, diffused lighting. Soft focus background. Professional product photography style.
- Overlay: Subtle warm gradient (35 45% 96% at 50% opacity) for text readability

**Gallery Images (8-12 products)**
- Product shots (800x1000 each): Individual oil bottles against clean backgrounds, consistent lighting
- Variety: Different oil types (olive, coconut, essential oils, etc.)
- Style: Clean, minimal, warm-toned photography
- Background: Consistent white or subtle warm beige backdrop

**About Section Image**
- Lifestyle/ambiance shot (1200x800): Oil bottles with natural elements (herbs, olives, botanicals) or store interior
- Convey: Craftsmanship, quality, natural origins

**Icon Strategy**
- Use Heroicons (outline style) via CDN
- Icons for: Phone, location pin, clock, quality badges
- Size: w-6 h-6 for standard, w-8 h-8 for emphasis
- Color: Primary brand color

---

## Visual Enhancements

**Shadows & Depth**
- Cards: shadow-md for subtle elevation
- Gallery items: shadow-lg on hover
- No heavy drop shadows - keep it refined

**Borders & Corners**
- Rounded corners: rounded-lg (8px) for cards and images
- Buttons: rounded-full for primary CTAs
- Subtle borders: 1px solid in border color

**Buttons**
- Primary CTA: Amber accent background, white text, rounded-full, px-8 py-3
- Secondary: Outline variant with primary brand color border, when on images use backdrop-blur-sm bg-white/10
- Hover: No custom states (Button handles this)

**Animations** (minimal)
- Gallery hover: scale-105 transform with transition-transform duration-300
- Page load: Gentle fade-in for hero content (optional)
- No scroll animations or complex transitions

---

## Accessibility & Quality

- All interactive elements have clear focus states
- Sufficient color contrast (WCAG AA minimum)
- Alt text for all images describing the oil products
- Semantic HTML structure (header, main, section, footer)
- Mobile-responsive with touch-friendly tap targets (min 44px)
- Fast loading: Optimize images to <200KB each

---

## Key Differentiators

- **Warm, organic color palette** vs. typical cold e-commerce blues
- **Premium serif headings** paired with clean sans-serif body
- **Product photography** as hero (not generic stock imagery)
- **Trust signals** integrated naturally (hours, location, quality badges)
- **Sensory language** in copy (e.g., "Discover the richness", "Pure luxury")

This design creates a cohesive premium experience that positions Oils R Us as a trusted, high-quality oil retailer while maintaining clarity and ease of use.
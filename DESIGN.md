# Design Brief

## Direction

Cool Serene — Professional B2B corporate website for SS Enterprises. Clean, minimal aesthetic with deep ocean blue as primary, inspiring trustworthiness and gravitas for enterprise clients.

## Tone

Refined corporate minimalism — no visual noise, no decorative gradients. Editorial clarity with spacious breathing room. Professional, approachable, trustworthy.

## Differentiation

Intentional card-based surface hierarchy across header/content/footer zones — subtle elevation creates visual structure without clutter. Every surface has a deliberate treatment (elevated, bordered, or same-as-background).

## Color Palette

| Token      | OKLCH           | Role                             |
|------------|-----------------|----------------------------------|
| background | 0.98 0.008 230  | Cool off-white, main page bg     |
| foreground | 0.18 0.015 230  | Deep neutral, body text          |
| card       | 1.0 0.004 230   | Pure white, floating surfaces    |
| primary    | 0.42 0.14 240   | Deep ocean blue, CTAs & accents  |
| accent     | 0.65 0.18 25    | Warm coral, secondary CTAs       |
| muted      | 0.94 0.01 230   | Light neutral, section dividers  |

## Typography

- Display: Space Grotesk — headings, hero text. Modern geometric sans with tech edge.
- Body: DM Sans — paragraphs, labels, UI text. Legible, professional, warm neutrality.
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-4xl font-bold`, label `text-sm font-semibold uppercase`, body `text-base md:text-lg`

## Elevation & Depth

Subtle shadow hierarchy: cards use 1-3px shadows for soft elevation. Header and footer use borders for definition. No deep drops or ambient glows — restraint maintains professionalism.

## Structural Zones

| Zone    | Background         | Border                | Notes                                  |
|---------|--------------------|-----------------------|----------------------------------------|
| Header  | card bg, shadow-sm  | border-b subtle       | Floats above content. Nav links center |
| Content | bg-background      | — (section dividers)  | Alternates: bg / muted-bg for rhythm  |
| Footer  | bg-muted/30        | border-t subtle       | Company info, copyright, quick links   |

## Spacing & Rhythm

Spacious layout with consistent gaps: 2rem between major sections, 1rem between content groups. Card padding: 1.5rem–2rem. Breathing room prioritized over density.

## Component Patterns

- Buttons: primary (ocean blue bg, white text), secondary (transparent, blue text), accent (warm coral). Rounded 6px, hover darkens primary by 0.05 L.
- Cards: 6px border-radius, white bg, 1px shadow. Hover: shadow lifts to 3px.
- Badges: 12px border-radius (pills), semantic colors (success green, warning amber, destructive red).

## Motion

- Entrance: smooth fade-in on page load, 300ms. Section cards slide-up on scroll (intersection observer).
- Hover: shadow elevation + 0.3s transition. Text links underline-slide from left.
- Decorative: none (preserves corporate tone).

## Constraints

- No gradients, no animations beyond entrance/hover.
- Header must remain accessible at all screen sizes (hamburger menu on mobile).
- Responsive: mobile-first. sm: 640px, md: 768px, lg: 1024px breakpoints.
- All text must meet WCAG AA+ contrast standards (already met by palette).

## Signature Detail

Card-based elevation system with intentional surface hierarchy — each structural zone (header/content/footer) has distinct visual treatment, creating clarity without decoration.

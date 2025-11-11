# Tailwind CSS Usage Guide

This document outlines the enforced design tokens, custom Tailwind extensions, component patterns, and interaction expectations for this project. Use this guide to maintain consistency across all UI components and pages.

---

## Table of Contents

1. [Design Tokens](#design-tokens)
2. [Color Palette](#color-palette)
3. [Border Radius Scale](#border-radius-scale)
4. [Spacing Rhythm](#spacing-rhythm)
5. [Box Shadows](#box-shadows)
6. [Typography](#typography)
7. [Animations & Keyframes](#animations--keyframes)
8. [Custom CSS Utilities](#custom-css-utilities)
9. [Component Patterns](#component-patterns)
10. [Interaction Expectations](#interaction-expectations)

---

## Design Tokens

Our design system is built on a carefully curated set of design tokens that ensure consistency, scalability, and visual coherence across the entire application. All styling should leverage these tokens rather than arbitrary values.

### Token Categories

- **Colors**: Monochrome neutral palette with black/white extremes
- **Border Radius**: Rounded aesthetic with predefined radius scales
- **Spacing**: Consistent 8px-based rhythm
- **Shadows**: Depth and elevation via layered shadow system
- **Typography**: Responsive font scale with calculated line heights
- **Animations**: Smooth, purposeful transitions and motion

---

## Color Palette

The project uses an **extended monochrome neutral scale** with full black/white support, providing a dark-mode-first aesthetic.

### Neutral Scale (50–950)

| Token | Hex | Usage |
|-------|-----|-------|
| `neutral-50` | #fafafa | Light accents, rarely used |
| `neutral-100` | #f5f5f5 | Light text backgrounds |
| `neutral-200` | #e5e5e5 | Subtle borders, dividers |
| `neutral-300` | #d4d4d4 | Secondary borders |
| `neutral-400` | #a3a3a3 | Disabled text, muted labels |
| `neutral-500` | #737373 | Placeholder text, secondary copy |
| `neutral-600` | #525252 | Tertiary text |
| `neutral-700` | #404040 | Secondary backgrounds, hover states |
| `neutral-800` | #262626 | Elevated surfaces (cards, modals) |
| `neutral-900` | #171717 | Primary background layers |
| `neutral-950` | #0a0a0a | Darkest background (body default) |
| `black` | #000000 | Absolute black (overlay, contrast) |
| `white` | #ffffff | Absolute white (contrast, icons) |

### Tailwind Classes

Apply colors using standard Tailwind syntax:

```html
<!-- Text colors -->
<p class="text-neutral-100">Primary text (light)</p>
<p class="text-neutral-400">Secondary text (muted)</p>
<p class="text-neutral-500">Tertiary text (placeholder)</p>

<!-- Background colors -->
<div class="bg-neutral-950">Darkest background</div>
<div class="bg-neutral-900">Elevated surface</div>
<div class="bg-neutral-800">Card/modal background</div>

<!-- Border colors -->
<div class="border-neutral-800">Border on elevated surfaces</div>
<div class="border-neutral-700">Hover border (interactive)</div>

<!-- Opacity variations -->
<div class="bg-neutral-900/50">50% opacity background</div>
<div class="border-white/10">10% opacity white border</div>
```

### Color Usage Guidelines

| Element | Recommended Classes | Purpose |
|---------|---------------------|---------|
| Body background | `bg-neutral-950` | Base page color |
| Primary text | `text-neutral-100` | Main content |
| Secondary text | `text-neutral-400` | Labels, captions |
| Card/Surface | `bg-neutral-900` or `bg-neutral-800` | Elevated containers |
| Borders | `border-neutral-800` or `border-neutral-700` | Dividers, outlines |
| Disabled state | `text-neutral-400 bg-neutral-800` | Inactive elements |
| Hover overlay | `hover:bg-neutral-800` | Interactive feedback |

---

## Border Radius Scale

The project includes a custom border radius scale that emphasizes a rounded, modern aesthetic. All components use one of these predefined radius values.

### Border Radius Tokens

| Token | Value | CSS | Typical Usage |
|-------|-------|-----|--------------|
| `pill` | 9999px | `rounded-pill` | Buttons, badges, fully rounded |
| `bubble` | 24px | `rounded-bubble` | Cards, containers, large surfaces |
| `xl` | 20px | `rounded-xl` | Large rounded corners |
| `lg` | 16px | `rounded-lg` | Medium components |
| `md` | 12px | `rounded-md` | Smaller surfaces |
| `sm` | 8px | `rounded-sm` | Minimal radius |
| `xs` | 4px | `rounded-xs` | Very subtle curves |

### Tailwind Classes

```html
<!-- Pill (fully rounded) -->
<button class="rounded-pill px-4 py-2">Submit</button>
<div class="rounded-pill w-8 h-8"></div>

<!-- Bubble (prominent rounding) -->
<div class="bubble-surface rounded-bubble">Content</div>
<div class="rounded-bubble p-6">Card</div>

<!-- Large surfaces -->
<div class="rounded-xl p-8">Large container</div>

<!-- Modals, overlays, glass effects -->
<div class="glass rounded-bubble p-6">Modal</div>
```

### Radius Usage Guidelines

- **Buttons & Interactive**: `rounded-pill` for full roundness
- **Cards & Surfaces**: `rounded-bubble` for prominent, friendly appearance
- **Large Containers**: `rounded-lg` or `rounded-xl`
- **Subtle Elements**: `rounded-xs`, `rounded-sm`, `rounded-md`
- **Default**: If unsure, use `rounded-bubble` for surfaces and `rounded-pill` for clickable elements

---

## Spacing Rhythm

The project uses a consistent spacing scale based on **1rem (16px) base unit**. This creates a predictable rhythm for padding, margins, and gaps.

### Spacing Scale

| Token | Value | Pixels | Common Use |
|-------|-------|--------|------------|
| `0` | 0 | 0px | No spacing |
| `1` | 0.25rem | 4px | Micro spacing |
| `2` | 0.5rem | 8px | Tight spacing |
| `3` | 0.75rem | 12px | Small gap |
| `4` | 1rem | 16px | Standard padding |
| `5` | 1.25rem | 20px | Comfortable gap |
| `6` | 1.5rem | 24px | Card padding |
| `8` | 2rem | 32px | Section gap |
| `10` | 2.5rem | 40px | Large gap |
| `12` | 3rem | 48px | Layout spacing |
| `16` | 4rem | 64px | Hero spacing |
| `20` | 5rem | 80px | Large section |
| `24` | 6rem | 96px | Page sections |
| `32` | 8rem | 128px | Major divisions |
| `40` | 10rem | 160px | Extra large |
| `48` | 12rem | 192px | Maximum |

### Tailwind Classes

```html
<!-- Padding -->
<div class="p-4">Standard padding (16px all sides)</div>
<div class="p-6">Card padding (24px)</div>
<div class="px-4 py-6">Horizontal 16px, vertical 24px</div>

<!-- Margin -->
<div class="mb-4">Margin bottom 16px</div>
<div class="mt-8">Margin top 32px</div>

<!-- Gaps (Flexbox/Grid) -->
<div class="flex gap-4">Flex with 16px gap</div>
<div class="grid gap-6">Grid with 24px gap</div>

<!-- Space between items -->
<div class="space-y-4">Vertical 16px between children</div>
<div class="space-x-3">Horizontal 12px between children</div>
```

### Spacing Usage Guidelines

| Context | Recommended | Value |
|---------|-------------|-------|
| Button padding | `px-4 py-2` or `px-6 py-3` | 16px × 8px or 24px × 12px |
| Card padding | `p-6` or `p-8` | 24px or 32px |
| Section margin | `mb-8` or `mb-12` | 32px or 48px |
| Grid gap | `gap-4` or `gap-6` | 16px or 24px |
| Component gap | `gap-2` or `gap-3` | 8px or 12px |
| Section spacing | `space-y-8` | 32px between items |

---

## Box Shadows

The project defines a custom shadow hierarchy for elevation, depth, and interactive feedback. Shadows reinforce the layered, rounded aesthetic.

### Shadow Tokens

| Token | CSS Value | Typical Usage |
|-------|-----------|---------------|
| `shadow-bubble` | `0 4px 16px rgba(0, 0, 0, 0.4)` | Baseline elevation for cards |
| `shadow-bubble-hover` | `0 8px 24px rgba(0, 0, 0, 0.6)` | Elevated hover state |
| `shadow-glass` | `0 8px 32px rgba(0, 0, 0, 0.3)` | Glass/modal effect |
| `shadow-sm` | `0 1px 2px rgba(0, 0, 0, 0.3)` | Subtle shadows |
| `shadow-md` | `0 4px 8px rgba(0, 0, 0, 0.4)` | Medium elevation |
| `shadow-lg` | `0 10px 20px rgba(0, 0, 0, 0.5)` | Large elevation |
| `shadow-xl` | `0 20px 40px rgba(0, 0, 0, 0.6)` | Maximum elevation |
| `shadow-inner` | `inset 0 2px 4px rgba(0, 0, 0, 0.4)` | Inset/depth effect |

### Tailwind Classes

```html
<!-- Bubble surface (cards, containers) -->
<div class="shadow-bubble">Card at rest</div>
<div class="shadow-bubble hover:shadow-bubble-hover">Interactive card</div>

<!-- Glass effect (modals, overlays) -->
<div class="shadow-glass">Glass modal</div>

<!-- Elevation levels -->
<div class="shadow-sm">Subtle elevation</div>
<div class="shadow-md">Medium elevation</div>
<div class="shadow-lg">Large elevation</div>
<div class="shadow-xl">Maximum elevation</div>

<!-- Inset shadow (depth, inner glow) -->
<div class="shadow-inner">Inset effect</div>
```

### Shadow Usage Guidelines

| Component | Shadow Class | Interaction |
|-----------|--------------|-------------|
| Cards | `shadow-bubble` | `hover:shadow-bubble-hover` on hover |
| Buttons | `shadow-md` | `hover:shadow-lg` on interaction |
| Modals | `shadow-glass` | Static (always elevated) |
| Floating elements | `shadow-lg` or `shadow-xl` | Static elevation |
| Input fields | `shadow-inner` | Focus: remove/enhance |
| Subtle UI | `shadow-sm` | Minimal depth |

---

## Typography

The project uses the **Inter font family** (400, 500, 600, 700 weights) with a responsive, calculated font scale.

### Font Sizes

| Token | Size | Line Height | Use Case |
|-------|------|------------|----------|
| `text-xs` | 0.75rem (12px) | 1rem (16px) | Labels, captions |
| `text-sm` | 0.875rem (14px) | 1.25rem (20px) | Secondary text |
| `text-base` | 1rem (16px) | 1.5rem (24px) | Body text |
| `text-lg` | 1.125rem (18px) | 1.75rem (28px) | Larger body text |
| `text-xl` | 1.25rem (20px) | 1.75rem (28px) | Subheadings |
| `text-2xl` | 1.5rem (24px) | 2rem (32px) | Minor headings |
| `text-3xl` | 1.875rem (30px) | 2.25rem (36px) | Main headings |
| `text-4xl` | 2.25rem (36px) | 2.5rem (40px) | Large headings |
| `text-5xl` | 3rem (48px) | 1 (48px) | Hero text |

### Font Weights

| Class | Weight | Use Case |
|-------|--------|----------|
| `font-normal` | 400 | Body text, regular copy |
| `font-medium` | 500 | Slightly emphasized text |
| `font-semibold` | 600 | Headings, labels, emphasis |
| `font-bold` | 700 | Strong emphasis, titles |

### Heading Defaults (Global CSS)

The global CSS includes automatic responsive scaling:

```html
<!-- h1: text-3xl on mobile → text-5xl on large screens -->
<h1>Page Title</h1>

<!-- h2: text-2xl on mobile → text-4xl on large screens -->
<h2>Section Title</h2>

<!-- h3: text-xl on mobile → text-3xl on large screens -->
<h3>Subsection Title</h3>

<!-- p: text-sm on mobile → text-lg on large screens -->
<p>Body paragraph text.</p>
```

### Tailwind Classes

```html
<!-- Text sizes -->
<p class="text-xs">Small caption</p>
<p class="text-base">Standard body text</p>
<p class="text-lg">Larger text</p>
<p class="text-3xl">Heading size</p>

<!-- Font weights -->
<p class="font-normal">Regular text</p>
<p class="font-semibold">Emphasized text</p>
<p class="font-bold">Strong emphasis</p>

<!-- Combined -->
<h2 class="text-2xl md:text-3xl font-bold">Responsive Heading</h2>
<p class="text-sm md:text-base text-neutral-400">Responsive paragraph</p>
```

### Typography Usage Guidelines

| Element | Recommended Classes | Purpose |
|---------|---------------------|---------|
| Page title | `text-3xl md:text-4xl lg:text-5xl font-bold` | Main heading |
| Section title | `text-2xl md:text-3xl font-semibold` | Secondary heading |
| Subsection | `text-xl md:text-2xl font-semibold` | Tertiary heading |
| Body text | `text-base md:text-lg text-neutral-100` | Standard copy |
| Label text | `text-sm font-medium text-neutral-400` | Form labels |
| Caption text | `text-xs text-neutral-500` | Metadata, timestamps |
| Emphasis | `font-semibold` or `font-bold` | Highlight importance |

---

## Animations & Keyframes

The project includes a library of smooth, purposeful animations for entry effects, feedback, and continuous motion. All animations use optimized easing functions and durations.

### Keyframe Animations

#### 1. **fadeInSlide**
- **Description**: Fade in + subtle upward slide
- **Duration**: 0.5s ease-out
- **Animation Class**: `animate-fade-in-slide`
- **Use Case**: Main content entry, hero sections

```html
<div class="animate-fade-in-slide">Fades in while sliding up</div>
```

#### 2. **fadeIn**
- **Description**: Simple fade-in effect
- **Duration**: 0.4s ease-out
- **Animation Class**: `animate-fade-in`
- **Use Case**: Elements, overlays, modals

```html
<div class="animate-fade-in">Fades in smoothly</div>
```

#### 3. **slideInLeft**
- **Description**: Fade in + slide from left
- **Duration**: 0.4s ease-out
- **Animation Class**: `animate-slide-in-left`
- **Use Case**: Sidebars, panels, staggered lists

```html
<div class="animate-slide-in-left">Slides in from left</div>
```

#### 4. **slideInRight**
- **Description**: Fade in + slide from right
- **Duration**: 0.4s ease-out
- **Animation Class**: `animate-slide-in-right`
- **Use Case**: Right sidebars, right-aligned content

```html
<div class="animate-slide-in-right">Slides in from right</div>
```

#### 5. **slideInUp**
- **Description**: Fade in + slide from bottom
- **Duration**: 0.4s ease-out
- **Animation Class**: `animate-slide-in-up`
- **Use Case**: Modals, bottom sheets, cards

```html
<div class="animate-slide-in-up">Slides in from bottom</div>
```

#### 6. **pulse**
- **Description**: Breathing pulse effect (opacity)
- **Duration**: 2s cubic-bezier infinite
- **Animation Class**: `animate-pulse`
- **Use Case**: Loading indicators, attention-seeking

```html
<div class="animate-pulse">Pulses continuously</div>
```

#### 7. **bounce**
- **Description**: Vertical bounce animation
- **Duration**: 1s infinite
- **Animation Class**: `animate-bounce`
- **Use Case**: Call-to-action hints, floating elements

```html
<div class="animate-bounce">Bounces up and down</div>
```

#### 8. **shimmer**
- **Description**: Shimmer/loading effect (background position)
- **Duration**: 2s infinite
- **Animation Class**: `animate-shimmer`
- **Use Case**: Skeleton screens, loading placeholders

```html
<div class="animate-shimmer">Shimmers across</div>
```

### Custom CSS Animation Classes

In addition to Tailwind animations, custom CSS classes are available:

| Class | Effect | Duration | Use Case |
|-------|--------|----------|----------|
| `.fade-slide-in` | Fade + slide up | 0.5s | Page/section entry |
| `.fade-in` | Fade only | 0.4s | Element entry |
| `.slide-in-left` | Fade + slide left | 0.4s | Sidebar/panel entry |

```html
<!-- Using custom CSS classes -->
<main class="fade-slide-in">Main content fades in</main>
<aside class="slide-in-left">Sidebar slides in from left</aside>
```

### Transition Timing Functions

Custom timing functions for smooth interactions:

| Token | Value | Use Case |
|-------|-------|----------|
| `transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring | Bouncy, playful feel |
| `transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Bounce | Extra bouncy (exaggerated) |

### Transition Utilities

```html
<!-- Standard transitions (inherited from * rule) -->
<div class="transition-colors duration-200 hover:bg-neutral-700">
  Smooth color transition
</div>

<!-- All property transitions -->
<div class="transition-all duration-300 hover:scale-105 hover:shadow-bubble-hover">
  All properties animate smoothly
</div>

<!-- Custom spring timing -->
<div class="spring-transition">Uses spring easing for bounce</div>
```

### Animation Usage Guidelines

| Scenario | Animation | Class |
|----------|-----------|-------|
| Page load | Fade + slide up | `fade-slide-in` or `animate-fade-in-slide` |
| Modal entry | Fade + slide up | `animate-slide-in-up` |
| Sidebar show | Slide + fade | `slide-in-left` or `animate-slide-in-left` |
| Loading state | Continuous pulse | `animate-pulse` |
| Attention hint | Bounce | `animate-bounce` |
| Skeleton loader | Shimmer | `animate-shimmer` |
| Interactive hover | Scale + shadow | `hover:scale-105 hover:shadow-bubble-hover transition-all` |

---

## Custom CSS Utilities

Beyond Tailwind, the project includes supplemental CSS helper classes for common patterns and complex effects.

### .bubble-surface

**Purpose**: Elevated card/surface container with consistent styling and hover effect

**CSS**:
```css
.bubble-surface {
  background: #171717;
  border-radius: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  border: 1px solid #262626;
  transition: all 0.3s;
}

.bubble-surface:hover {
  border-color: #404040;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
}
```

**Usage**:
```html
<!-- Card container -->
<div class="bubble-surface p-6">
  <h3>Card Title</h3>
  <p>Card content here</p>
</div>

<!-- Navigation item -->
<div class="bubble-surface p-3 text-sm cursor-pointer">
  Dashboard
</div>

<!-- With hover effects -->
<div class="bubble-surface p-4 hover:scale-105 transition-all">
  Interactive card
</div>
```

**When to use**:
- Card containers
- Elevated surfaces
- Navigation items
- Item lists
- Any standalone surface that needs elevation and hover feedback

### .glass

**Purpose**: Semi-transparent overlay with backdrop blur (glassmorphism effect)

**CSS**:
```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
}
```

**Usage**:
```html
<!-- Glass overlay -->
<div class="glass p-8">
  <h2>Glass Overlay</h2>
  <p>Semi-transparent content area</p>
</div>

<!-- Glass panel -->
<div class="glass p-6">
  <button class="px-4 py-2 bg-blue-600 rounded-pill">Action</button>
</div>
```

**When to use**:
- Modal overlays
- Floating panels
- Semi-transparent containers
- Modern, frosted glass effects

### .glass-highlight

**Purpose**: Brighter glass variant with more visible white tint

**CSS**:
```css
.glass-highlight {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
}
```

**Usage**:
```html
<!-- Highlighted glass section -->
<section class="glass-highlight p-8 md:p-12">
  <h2>Featured Section</h2>
  <p>More visible glass effect for emphasis</p>
</section>
```

**When to use**:
- Highlighted/featured sections
- Call-to-action areas
- Emphasis on glass containers
- Higher contrast glass effects

### .spring-transition

**Purpose**: Smooth transition with spring/bounce easing

**CSS**:
```css
.spring-transition {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

**Usage**:
```html
<!-- Bouncy hover effect -->
<button class="spring-transition hover:scale-110">
  Bouncy Button
</button>

<!-- Spring-eased element -->
<div class="spring-transition hover:translate-y-1">
  Spring-eased movement
</div>
```

**When to use**:
- Interactive elements needing playful feedback
- Hover effects with bounce
- Scale/translate interactions
- Attention-seeking UI

### .fade-slide-in

**Purpose**: Custom fade + slide up animation (entry effect)

**CSS**:
```css
.fade-slide-in {
  animation: fadeInSlide 0.5s ease-out;
}
```

**Usage**:
```html
<!-- Main content entry -->
<main class="fade-slide-in">Page content</main>

<!-- Section entry -->
<section class="fade-slide-in">Section content</section>
```

**When to use**:
- Page/section entry animations
- Initial page load effects
- Main content reveal

### .fade-in

**Purpose**: Simple fade-in animation (no movement)

**CSS**:
```css
.fade-in {
  animation: fadeIn 0.4s ease-out;
}
```

**Usage**:
```html
<!-- Static element fade -->
<div class="fade-in">Fades in</div>

<!-- Overlay fade -->
<div class="fade-in opacity-0">Modal background</div>
```

**When to use**:
- Element entry (no directional movement needed)
- Overlay/modal backgrounds
- Simple reveal effects

### .slide-in-left

**Purpose**: Fade + slide from left animation

**CSS**:
```css
.slide-in-left {
  animation: slideInLeft 0.4s ease-out;
}
```

**Usage**:
```html
<!-- Left sidebar entry -->
<aside class="slide-in-left">Navigation sidebar</aside>

<!-- Staggered list item -->
<li class="slide-in-left">Item 1</li>
```

**When to use**:
- Left-aligned sidebar/panel entry
- Left-to-right list reveals
- Directional entry animations

---

## Component Patterns

This section demonstrates how to compose common components using Tailwind classes and custom CSS helpers.

### Buttons

#### Primary Button

```html
<button class="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-pill font-medium transition-colors duration-200">
  Primary Action
</button>
```

**Classes**:
- `px-6 py-3`: Padding (24px horizontal, 12px vertical)
- `bg-blue-600 hover:bg-blue-500`: Background color + hover state
- `text-white`: Text color
- `rounded-pill`: Fully rounded corners
- `font-medium`: Medium font weight (500)
- `transition-colors duration-200`: Color animation

#### Secondary Button

```html
<button class="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-pill text-sm transition-colors duration-200">
  Secondary
</button>
```

**Classes**:
- `bg-neutral-800 hover:bg-neutral-700`: Neutral background + hover
- `text-neutral-200`: Light text
- `text-sm`: Smaller size variant

#### Interactive Button with Elevation

```html
<button class="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-pill font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
  Interactive
</button>
```

**Additional classes**:
- `shadow-md hover:shadow-lg`: Shadow elevation on hover
- `hover:scale-105`: Subtle scale increase
- `transition-all`: Animate all properties

### Cards / Bubble Surfaces

#### Basic Card

```html
<div class="bubble-surface p-6">
  <h3 class="text-lg font-semibold text-neutral-100 mb-2">Card Title</h3>
  <p class="text-neutral-400 text-sm">Card description or content.</p>
</div>
```

#### Interactive Card

```html
<div class="bubble-surface p-6 hover:shadow-bubble-hover transition-all duration-300 hover:scale-105 cursor-pointer">
  <div class="w-12 h-12 bg-blue-500/20 rounded-bubble flex items-center justify-center mb-4">
    <span class="text-2xl">🎨</span>
  </div>
  <h3 class="text-lg font-semibold text-neutral-100 mb-2">Feature</h3>
  <p class="text-neutral-400 text-sm">Description of the feature.</p>
</div>
```

**Interaction classes**:
- `hover:scale-105`: Enlarge on hover
- `hover:shadow-bubble-hover`: Lift shadow on hover
- `cursor-pointer`: Indicate interactivity
- `transition-all duration-300`: Smooth animation

#### Card Grid

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bubble-surface p-6">Card 1</div>
  <div class="bubble-surface p-6">Card 2</div>
  <div class="bubble-surface p-6">Card 3</div>
</div>
```

### Modal / Dialog

#### Glass-Effect Modal

```html
<!-- Overlay -->
<div class="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"></div>

<!-- Modal -->
<div class="fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md glass animate-slide-in-up">
  <div class="p-6">
    <h2 class="text-2xl font-bold text-neutral-100 mb-4">Modal Title</h2>
    <p class="text-neutral-400 mb-6">Modal content here.</p>
    <div class="flex gap-3">
      <button class="flex-1 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-pill transition-colors">
        Cancel
      </button>
      <button class="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-pill font-medium transition-colors">
        Confirm
      </button>
    </div>
  </div>
</div>
```

**Key classes**:
- `fixed inset-0`: Full-screen overlay
- `bg-black/50`: Semi-transparent backdrop
- `backdrop-blur-sm`: Blur effect
- `glass`: Frosted glass modal container
- `animate-slide-in-up`: Entry animation

### Navigation / Nav Chips

#### Horizontal Navigation

```html
<nav class="flex items-center gap-1 md:gap-4">
  <a href="#home" class="nav-item px-3 py-2 rounded-pill text-neutral-200 font-semibold transition-colors duration-200 text-sm md:text-base">
    Home
  </a>
  <a href="#alerts" class="nav-item px-3 py-2 rounded-pill text-neutral-400 hover:text-neutral-200 transition-colors duration-200 text-sm md:text-base">
    Alerts
  </a>
  <a href="#profile" class="nav-item px-3 py-2 rounded-pill text-neutral-400 hover:text-neutral-200 transition-colors duration-200 text-sm md:text-base">
    Profile
  </a>
</nav>
```

**Classes**:
- `rounded-pill`: Pill-shaped nav items
- `text-neutral-200`: Active text (light)
- `text-neutral-400 hover:text-neutral-200`: Inactive → hover
- `transition-colors duration-200`: Color animation

#### Navigation Sidebar Items

```html
<div class="space-y-2">
  <div class="bubble-surface p-3 text-neutral-300 text-sm cursor-pointer hover:bg-neutral-800 transition-colors">
    Dashboard
  </div>
  <div class="bubble-surface p-3 text-neutral-300 text-sm cursor-pointer hover:bg-neutral-800 transition-colors">
    Analytics
  </div>
  <div class="bubble-surface p-3 text-neutral-300 text-sm cursor-pointer hover:bg-neutral-800 transition-colors">
    Reports
  </div>
</div>
```

**Classes**:
- `bubble-surface`: Elevated item container
- `space-y-2`: Gap between items
- `hover:bg-neutral-800`: Hover background shift
- `cursor-pointer`: Indicate interactivity

### Input Fields / Form Elements

#### Text Input

```html
<input 
  type="text"
  placeholder="Enter text"
  class="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
/>
```

**Classes**:
- `bg-neutral-800 border border-neutral-700`: Surface and border
- `text-neutral-100 placeholder-neutral-500`: Text and placeholder color
- `rounded-lg`: Rounded corners (lg)
- `focus:ring-2 focus:ring-blue-500`: Blue focus ring
- `focus:border-transparent`: Hide border on focus

#### Label + Input

```html
<label class="block mb-2 text-sm font-medium text-neutral-300">Username</label>
<input 
  type="text"
  class="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 text-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
/>
```

### Badges / Tags

#### Primary Badge

```html
<span class="inline-flex items-center px-3 py-1 rounded-pill bg-blue-600/20 text-blue-300 text-xs font-medium">
  Active
</span>
```

**Classes**:
- `inline-flex`: Flex layout (inline)
- `px-3 py-1`: Small padding
- `rounded-pill`: Fully rounded
- `bg-blue-600/20`: Semi-transparent background
- `text-blue-300`: Colored text
- `text-xs font-medium`: Small, bold

#### Secondary Badge

```html
<span class="inline-flex items-center px-3 py-1 rounded-pill bg-neutral-700 text-neutral-300 text-xs font-medium">
  Neutral
</span>
```

### Lists / Item Collections

#### List with Icons

```html
<ul class="space-y-3">
  <li class="flex items-center gap-3 p-3 bubble-surface">
    <div class="w-6 h-6 bg-blue-500/20 rounded-bubble flex items-center justify-center">
      <span>✓</span>
    </div>
    <span class="text-neutral-300">List item one</span>
  </li>
  <li class="flex items-center gap-3 p-3 bubble-surface">
    <div class="w-6 h-6 bg-green-500/20 rounded-bubble flex items-center justify-center">
      <span>✓</span>
    </div>
    <span class="text-neutral-300">List item two</span>
  </li>
</ul>
```

**Classes**:
- `space-y-3`: Vertical gap between items
- `flex items-center gap-3`: Flex layout with icon gap
- `bubble-surface`: Elevated item
- `bg-blue-500/20`: Tinted background for icon
- `rounded-bubble`: Icon container rounding

---

## Interaction Expectations

This section documents how components should respond to user interactions to maintain consistency and provide appropriate feedback.

### Hover Effects

#### Subtle Hover (Text/Links)

```html
<a href="#" class="text-neutral-300 hover:text-neutral-100 transition-colors">
  Link text
</a>
```

**Behavior**: Text color smoothly transitions to lighter shade.

#### Card Hover

```html
<div class="bubble-surface hover:shadow-bubble-hover transition-all duration-300 hover:scale-105">
  Interactive card
</div>
```

**Behavior**:
- Shadow elevation increases (bubble → bubble-hover)
- Scale increases 5% (hover:scale-105)
- Smooth animation over 300ms

#### Button Hover

```html
<button class="bg-blue-600 hover:bg-blue-500 transition-colors duration-200">
  Button
</button>
```

**Behavior**: Background color darkens/lightens, smooth color transition.

### Focus States

#### Input Focus

```html
<input 
  class="border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
/>
```

**Behavior**:
- No default outline (`focus:outline-none`)
- Blue ring appears (2px, focus:ring-2)
- Border becomes transparent
- All changes animate smoothly

#### Button Focus

```html
<button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950 focus:ring-blue-500">
  Button
</button>
```

**Behavior**:
- Blue ring with offset spacing
- Ring offset on dark background (offset-neutral-950)
- Visible keyboard navigation feedback

### Active States

#### Navigation Active Item

```html
<!-- Active nav item (example with js-added class) -->
<a href="#home" class="nav-item px-3 py-2 rounded-pill text-neutral-200 font-semibold">
  Home
</a>

<!-- Inactive nav item -->
<a href="#alerts" class="nav-item px-3 py-2 rounded-pill text-neutral-400 hover:text-neutral-200">
  Alerts
</a>
```

**Behavior**:
- Active: Lighter text (neutral-200), semibold weight
- Inactive: Muted text (neutral-400), normal weight
- Hover: Inactive → Lighter text (neutral-200)

### Disabled States

#### Disabled Button

```html
<button disabled class="px-4 py-2 bg-neutral-700 text-neutral-500 rounded-pill cursor-not-allowed opacity-50">
  Disabled
</button>
```

**Classes**:
- `bg-neutral-700`: Muted background
- `text-neutral-500`: Muted text
- `cursor-not-allowed`: Visual "no" cursor
- `opacity-50`: Reduced opacity
- Removed: hover/focus effects, transition classes

#### Disabled Input

```html
<input disabled class="bg-neutral-800 text-neutral-500 placeholder-neutral-600 cursor-not-allowed opacity-50" />
```

### Scale & Elevation Feedback

#### Hover Scale + Shadow

```html
<div class="hover:scale-105 hover:shadow-bubble-hover transition-all duration-300">
  Element lifts on hover
</div>
```

**Behavior**:
- Scales up 5% (hover:scale-105)
- Shadow deepens (hover:shadow-bubble-hover)
- Creates illusion of lifting off page

#### Pressed/Active Scale

```html
<button class="active:scale-95 transition-transform duration-100">
  Click feedback
</button>
```

**Behavior**:
- Scales down 5% while pressed
- Creates tactile feedback
- Quick animation (100ms)

### Loading States

#### Loading Spinner / Pulse

```html
<div class="animate-pulse">
  <div class="h-12 w-12 bg-neutral-800 rounded-bubble"></div>
</div>
```

**Behavior**: Element pulses in/out continuously (breathing effect).

#### Shimmer Skeleton

```html
<div class="animate-shimmer bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 h-12 rounded-bubble"></div>
```

**Behavior**: Background slides left-to-right continuously (loading effect).

### Transitions & Timing

#### Color Transition

```html
<div class="transition-colors duration-200 hover:bg-neutral-700">
  Element
</div>
```

**Timing**: 200ms (0.2s) for color changes. Standard for hover/focus.

#### Scale / Transform Transition

```html
<div class="transition-transform duration-300 hover:scale-110">
  Element
</div>
```

**Timing**: 300ms (0.3s) for scale/transform. Slightly longer for perceived smoothness.

#### All Properties Transition

```html
<div class="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-neutral-700">
  Element
</div>
```

**Timing**: 300ms for all properties. Use for multi-property interactions.

#### Entry Animation

```html
<main class="animate-fade-in-slide">
  Content fades in and slides up over 500ms
</main>
```

**Timing**: 500ms for page entry (slower, more purposeful).

### Interaction Summary Table

| Interaction | Visual Feedback | Timing | Classes |
|-------------|-----------------|--------|---------|
| Hover (subtle) | Color shift | 200ms | `hover:text-neutral-100 transition-colors duration-200` |
| Hover (card) | Scale + shadow | 300ms | `hover:scale-105 hover:shadow-bubble-hover transition-all duration-300` |
| Hover (button) | Background color | 200ms | `hover:bg-blue-500 transition-colors duration-200` |
| Focus (input) | Ring outline | 0ms | `focus:ring-2 focus:ring-blue-500` |
| Focus (keyboard) | Ring with offset | 0ms | `focus:ring-2 focus:ring-offset-2` |
| Active (nav) | Text color/weight | Instant | `text-neutral-200 font-semibold` (vs inactive) |
| Disabled | Muted + opacity | Instant | `opacity-50 cursor-not-allowed text-neutral-500` |
| Loading | Pulse/shimmer | ∞ | `animate-pulse` or `animate-shimmer` |
| Entry | Fade + slide/direction | 400-500ms | `animate-fade-in-slide`, `animate-slide-in-left` |

---

## Best Practices

### 1. **Use Semantic Classes**

Always prefer semantic Tailwind classes over arbitrary values:

```html
<!-- ✅ Good: Uses defined spacing token -->
<div class="p-6">Content</div>

<!-- ❌ Avoid: Arbitrary value -->
<div class="p-[23px]">Content</div>
```

### 2. **Compose with Custom Utilities**

Leverage custom CSS utilities for common patterns:

```html
<!-- ✅ Good: Uses predefined utility -->
<div class="bubble-surface p-6">Card</div>

<!-- ❌ Avoid: Repeating classes -->
<div class="bg-neutral-900 rounded-bubble shadow-bubble border border-neutral-800 p-6">Card</div>
```

### 3. **Apply Responsive Modifiers**

Always design mobile-first, then add breakpoints:

```html
<!-- ✅ Good: Mobile-first with responsive breakpoints -->
<h1 class="text-2xl md:text-3xl lg:text-4xl">Heading</h1>

<!-- ❌ Avoid: Desktop-first -->
<h1 class="lg:text-2xl">Heading</h1>
```

### 4. **Use Animation Classes for Entry Effects**

Apply animations consistently for page/component entry:

```html
<!-- ✅ Good: Main content uses fade-slide-in -->
<main class="fade-slide-in">Content</main>

<!-- ✅ Good: Sidebars use appropriate direction -->
<aside class="slide-in-left">Sidebar</aside>

<!-- ❌ Avoid: Inconsistent animations -->
<div class="animate-bounce">Content</div>
```

### 5. **Maintain Color Consistency**

Stick to the defined color palette:

```html
<!-- ✅ Good: Uses defined tokens -->
<p class="text-neutral-400">Muted text</p>

<!-- ❌ Avoid: Arbitrary colors -->
<p class="text-[#5a5a5a]">Muted text</p>
```

### 6. **Combine Hover + Transition Classes**

Always include transition when adding hover effects:

```html
<!-- ✅ Good: Hover effect with transition -->
<button class="hover:bg-blue-500 transition-colors duration-200">Button</button>

<!-- ❌ Avoid: Hover without transition (jarring) -->
<button class="hover:bg-blue-500">Button</button>
```

### 7. **Group Related Spacing**

Use space utilities for consistent gaps in grouped elements:

```html
<!-- ✅ Good: Consistent vertical spacing -->
<div class="space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- ❌ Avoid: Inconsistent individual margins -->
<div class="mb-3">Item 1</div>
<div class="mb-5">Item 2</div>
<div class="mb-2">Item 3</div>
```

### 8. **Use Shadow Hierarchy**

Apply shadows consistently based on elevation level:

```html
<!-- ✅ Good: Shadow matches elevation -->
<div class="shadow-bubble">Base card</div>
<div class="shadow-lg">Elevated element</div>
<div class="shadow-glass">Modal overlay</div>

<!-- ❌ Avoid: Arbitrary shadow use -->
<div class="shadow-sm">Card</div>
```

---

## Troubleshooting

### Issue: Colors not appearing as expected

**Cause**: May be due to CSS specificity or dark mode not being applied.

**Solution**:
1. Ensure `class="dark"` is on the `<html>` or `<body>` tag
2. Verify color token exists in Tailwind config
3. Check for conflicting CSS rules in global.css

### Issue: Animations not playing

**Cause**: May be due to CSS not loading or animation class not properly applied.

**Solution**:
1. Verify `global.css` is linked in `<head>`
2. Ensure animation class is spelled correctly (`animate-fade-in-slide`, not `animate-fadeInSlide`)
3. Check browser DevTools for CSS rule presence

### Issue: Tailwind classes not working

**Cause**: Tailwind CDN may not be loading or config not injected.

**Solution**:
1. Verify `tailwind-config.js` is loaded before Tailwind CDN
2. Check browser console for errors
3. Ensure HTML files include both scripts in correct order:
   ```html
   <script src="./assets/js/tailwind-config.js"></script>
   <script src="https://cdn.tailwindcss.com"></script>
   ```

### Issue: Spacing or radius off

**Cause**: Using arbitrary values instead of defined tokens.

**Solution**:
1. Replace arbitrary values with tokens from this guide
2. Refer to Spacing Rhythm and Border Radius Scale sections
3. Example: `rounded-[18px]` → `rounded-bubble`

### Issue: Focus ring not showing on button

**Cause**: Default outline may not be visible or ring styling missing.

**Solution**:
```html
<button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950 focus:ring-blue-500">
  Button
</button>
```

---

## References

- **Tailwind CSS Documentation**: https://tailwindcss.com/docs
- **Color Palette**: Neutral scale (50–950) + black/white extremes
- **Font**: Inter (400, 500, 600, 700) from Google Fonts
- **Project Config**: `assets/js/tailwind-config.js`
- **Global Styles**: `assets/css/global.css`

---

## Contributing

When adding new components or modifying existing ones:

1. **Use defined tokens** from this guide
2. **Add animations** for entry effects (fade, slide, etc.)
3. **Include hover/focus states** for interactive elements
4. **Apply responsive modifiers** (mobile-first approach)
5. **Document** any new custom CSS utilities in this guide
6. **Test** across breakpoints (mobile, tablet, desktop)

---

**Last Updated**: 2024
**Version**: 1.0

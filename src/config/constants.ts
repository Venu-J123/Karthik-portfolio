// Navigation pages
export const PAGES = {
  HOME: 'home',
  FITNESS: 'fitness',
  ACTING: 'acting',
  WILDLIFE: 'wildlife',
  JOURNEY: 'journey',
  CONTACT: 'contact',
} as const;

export type PageType = (typeof PAGES)[keyof typeof PAGES];

// Navigation items
export const NAV_ITEMS = [
  { id: PAGES.HOME, label: 'Home', href: '/' },
  { id: PAGES.FITNESS, label: 'Fitness', href: '/fitness' },
  { id: PAGES.ACTING, label: 'Acting', href: '/acting' },
  { id: PAGES.WILDLIFE, label: 'Wildlife', href: '/wildlife' },
  // { id: PAGES.JOURNEY, label: 'Journey', href: '/journey' },
  { id: PAGES.CONTACT, label: 'Contact', href: '/contact' },
];

// Color constants
export const COLORS = {
  PRIMARY: '#D4AF37',
  SECONDARY: '#ffffff',
  DARK: '#0a1d2c',
  SURFACE: '#112240',
  GLASS: 'rgba(255, 255, 255, 0.05)',
  GLASS_BORDER: 'rgba(255, 255, 255, 0.1)',
} as const;

// Animation timings
export const ANIMATION = {
  DURATION_SHORT: 0.3,
  DURATION_MEDIUM: 0.5,
  DURATION_LONG: 0.8,
  EASE_IN_OUT: 'easeInOut',
} as const;

// Break points
export const BREAKPOINTS = {
  XS: 0,
  SM: 600,
  MD: 900,
  LG: 1200,
  XL: 1536,
} as const;

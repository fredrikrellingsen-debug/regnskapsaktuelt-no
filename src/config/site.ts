export type LayoutVariant =
  | 'classic-newspaper'
  | 'modern-tech'
  | 'editorial-grid'
  | 'bold-magazine';

export interface SiteTheme {
  bg: string;
  surface: string;
  ink: string;
  muted: string;
  accent: string;
  accentSoft: string;
  border: string;
  headerBg: string;
  headerInk: string;
  fontHeading: string;
  fontBody: string;
}

export interface SiteConfig {
  domain: string;
  displayDomain: string;
  siteName: string;
  shortMark: string;
  tagline: string;
  description: string;
  categories: string[];
  editorialEmail: string;
  tipsEmail: string;
  publisherLegalName: string;
  heroImage: string;
  heroAlt: string;
  layoutVariant: LayoutVariant;
  theme: SiteTheme;
  aboutText: string;
}

export function normalizeDomain(input?: string): string {
  if (!input) return "regnskapsaktuelt.no";
  const cleaned = input
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/\/.*$/, '')
    .replace(/:\d+$/, '')
    .replace(/^www\./, '');

  if (!cleaned) return "regnskapsaktuelt.no";

  try {
    return new URL(`https://${cleaned}`).hostname;
  } catch {
    return cleaned;
  }
}

export const SITE_CONFIG: SiteConfig = {
  domain: normalizeDomain(process.env.NEXT_PUBLIC_DOMAIN) || "regnskapsaktuelt.no",
  displayDomain: "regnskapsaktuelt.no",
  siteName: "RegnskapsAktuelt",
  shortMark: "RA",
  tagline: "Fagstoff og analyser om regnskap, skatt, MVA, lønn, årsoppgjør og økonomisystemer",
  description: "RegnskapsAktuelt gir norske bedrifter, regnskapsførere og økonomiansvarlige oppdaterte fagartikler om regnskap, skatt, merverdiavgift, lønn og årsoppgjør.",
  categories: ["Regnskap", "Skatt & MVA", "Lønn & HR", "Årsoppgjør", "Økonomisystemer"],
  editorialEmail: "redaksjonen@regnskapsaktuelt.no",
  tipsEmail: "tips@regnskapsaktuelt.no",
  publisherLegalName: "RegnskapsAktuelt Redaksjon",
  heroImage: '/images/hero.webp',
  heroAlt: "Skandinavisk regnskaps- og rådgivningskontor med utsikt mot fjorden i dagslys",
  layoutVariant: "modern-tech",
  theme: {
    bg: "#f8faf9",
    surface: "#ffffff",
    ink: "#0f241d",
    muted: "#475f56",
    accent: "#047857",
    accentSoft: "#d1fae5",
    border: "#d8e7e0",
    headerBg: "#064e3b",
    headerInk: "#ecfdf5",
    fontHeading: "var(--font-heading-google), Georgia, serif",
    fontBody: "var(--font-body-google), system-ui, sans-serif",
  },
  aboutText: "RegnskapsAktuelt dekker regelverk, praksis og digitalisering innen norsk regnskap, skatt, merverdiavgift, lønn, årsoppgjør og økonomistyring for bedrifter og rådgivere.",
};

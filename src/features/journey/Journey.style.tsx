import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import { motion } from 'motion/react';

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

// ==================== WRAPPER & OVERLAYS ====================
export const JourneyWrapper = styled(Box)({
  background: '#021523',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
});

export const GrainOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  backgroundImage: GRAIN_SVG,
  opacity: 0.04,
  pointerEvents: 'none',
  zIndex: 100,
});

export const Scanlines = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to bottom, transparent 50%, rgba(173, 198, 255, 0.02) 50%)',
  backgroundSize: '100% 4px',
  pointerEvents: 'none',
  zIndex: 99,
});

export const PageInner = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(20),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  maxWidth: '1400px',
  margin: '0 auto',
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
}));

// ==================== HEADER ====================
export const HeaderBadge = styled(Box)({
  display: 'inline-block',
  background: '#1a2c3b',
  padding: '0.25rem 1rem',
  borderRadius: '9999px',
  marginBottom: '1.5rem',
  '& span': {
    fontFamily: '"Inter", sans-serif',
    fontSize: '0.625rem',
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: '0.2em',
    color: '#adc6ff',
  },
});

export const PageTitle = styled(motion.h1)({
  fontFamily: '"Space Grotesk", "Bebas Neue", sans-serif',
  fontSize: 'clamp(3rem, 8vw, 6rem)',
  fontWeight: 700,
  letterSpacing: '-0.04em',
  lineHeight: 1,
  color: '#ffffff',
  marginBottom: '1rem',
  '& .gradient-text': {
    background: 'linear-gradient(to right, #adc6ff, #3980f4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
});

export const PageSubtitle = styled('p')({
  maxWidth: '42rem',
  color: '#bcc7de',
  fontSize: '1.1rem',
  lineHeight: 1.6,
  fontWeight: 300,
  fontFamily: '"Manrope", "Montserrat", sans-serif',
  marginBottom: '5rem',
});

// ==================== BENTO GRID ====================
export const BentoGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridAutoRows: '220px',
  gap: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
}));

export const BentoCard = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '0.5rem',
  background: '#0a1d2c',
  border: '1px solid rgba(67, 71, 76, 0.08)',
  '& .card-img': {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'grayscale(100%)',
    opacity: 0.6,
    transition: 'filter 700ms ease, opacity 700ms ease',
  },
  '&:hover .card-img': {
    filter: 'grayscale(0%)',
    opacity: 1,
  },
  '& .card-img-zoom': {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.4,
    transform: 'scale(1.1)',
    transition: 'opacity 1000ms ease, transform 1000ms ease',
  },
  '&:hover .card-img-zoom': {
    opacity: 0.8,
    transform: 'scale(1)',
  },
  '& .ghost-icon': {
    position: 'absolute',
    right: '-1.5rem',
    bottom: '-1.5rem',
    opacity: 0.04,
    transition: 'opacity 300ms ease',
    pointerEvents: 'none',
    '& .MuiSvgIcon-root': { fontSize: '9rem', color: '#adc6ff' },
  },
  '&:hover .ghost-icon': {
    opacity: 0.1,
  },
});

// Grid cell span helpers
export const Cell7x2 = styled(BentoCard)(({ theme }) => ({
  gridRow: 'span 2',
  [theme.breakpoints.up('md')]: { gridColumn: 'span 4' },
  [theme.breakpoints.up('lg')]: { gridColumn: 'span 7' },
}));

export const Cell5x1 = styled(BentoCard)(({ theme }) => ({
  [theme.breakpoints.up('md')]: { gridColumn: 'span 2' },
  [theme.breakpoints.up('lg')]: { gridColumn: 'span 5' },
}));

export const Cell4x3 = styled(BentoCard)(({ theme }) => ({
  gridRow: 'span 3',
  [theme.breakpoints.up('md')]: { gridColumn: 'span 4' },
  [theme.breakpoints.up('lg')]: { gridColumn: 'span 4' },
}));

export const Cell8x2 = styled(BentoCard)(({ theme }) => ({
  gridRow: 'span 2',
  [theme.breakpoints.up('md')]: { gridColumn: 'span 4' },
  [theme.breakpoints.up('lg')]: { gridColumn: 'span 8' },
}));

export const Cell5x2 = styled(BentoCard)(({ theme }) => ({
  gridRow: 'span 2',
  [theme.breakpoints.up('md')]: { gridColumn: 'span 4' },
  [theme.breakpoints.up('lg')]: { gridColumn: 'span 5' },
}));

export const Cell3x1 = styled(BentoCard)(({ theme }) => ({
  [theme.breakpoints.up('md')]: { gridColumn: 'span 2' },
  [theme.breakpoints.up('lg')]: { gridColumn: 'span 3' },
}));

// ==================== CARD OVERLAYS ====================
export const OverlayBottom = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to top, #021523 20%, transparent 70%)',
  zIndex: 1,
  pointerEvents: 'none',
});

export const OverlayLeft = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to right, #021523 30%, transparent 70%)',
  zIndex: 1,
  pointerEvents: 'none',
});

export const OverlayFull = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to top, #021523, transparent)',
  zIndex: 1,
  pointerEvents: 'none',
});

// ==================== YEAR WATERMARKS ====================
export const YearWatermark = styled('span')({
  fontFamily: '"Space Grotesk", "Bebas Neue", sans-serif',
  fontWeight: 800,
  color: 'rgba(255,255,255,0.07)',
  lineHeight: 1,
  letterSpacing: '-0.04em',
  position: 'absolute',
  userSelect: 'none',
  pointerEvents: 'none',
  zIndex: 2,
  fontSize: 'clamp(5rem, 12vw, 9rem)',
  top: '1.5rem',
  left: '2rem',
});

export const YearWatermarkBlue = styled('span')({
  fontFamily: '"Space Grotesk", "Bebas Neue", sans-serif',
  fontWeight: 800,
  color: 'rgba(173,198,255,0.08)',
  lineHeight: 1,
  letterSpacing: '-0.04em',
  position: 'absolute',
  userSelect: 'none',
  pointerEvents: 'none',
  zIndex: 2,
  fontSize: 'clamp(5rem, 14vw, 10rem)',
  top: '-1rem',
  right: '-1.5rem',
});

// ==================== CONTENT CONTAINERS ====================
export const CardBottom = styled(Box)({
  position: 'absolute',
  bottom: '2rem',
  left: '2rem',
  right: '2rem',
  zIndex: 3,
});

export const CardFull = styled(Box)({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '2.5rem',
  zIndex: 3,
});

export const CardInner = styled(Box)({
  position: 'absolute',
  inset: '2rem',
  zIndex: 3,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const CardCenter = styled(Box)({
  position: 'absolute',
  inset: '2rem',
  zIndex: 3,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});

export const CardTopRight = styled(Box)({
  position: 'absolute',
  top: '2rem',
  right: '2rem',
  zIndex: 3,
  '& .MuiSvgIcon-root': { fontSize: '2.25rem', color: '#adc6ff' },
});

// ==================== TYPOGRAPHY ====================
export const CardLabel = styled('div')({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.625rem',
  textTransform: 'uppercase',
  fontWeight: 700,
  letterSpacing: '0.2em',
  color: '#adc6ff',
  marginBottom: '0.25rem',
});

export const CardTitle = styled('h3')({
  fontFamily: '"Space Grotesk", "Bebas Neue", sans-serif',
  fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
  fontWeight: 700,
  color: '#ffffff',
  letterSpacing: '-0.025em',
  textTransform: 'uppercase',
  lineHeight: 1.1,
  margin: '0 0 0.5rem 0',
});

export const CardTitleXL = styled('h3')({
  fontFamily: '"Space Grotesk", "Bebas Neue", sans-serif',
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  fontWeight: 700,
  color: '#ffffff',
  letterSpacing: '-0.035em',
  textTransform: 'uppercase',
  lineHeight: 1.05,
  margin: '0 0 1rem 0',
});

export const CardText = styled('p')({
  fontFamily: '"Manrope", "Montserrat", sans-serif',
  color: '#bcc7de',
  fontWeight: 300,
  fontSize: '0.875rem',
  lineHeight: 1.6,
});

export const BigStat = styled('div')({
  fontFamily: '"Space Grotesk", "Bebas Neue", sans-serif',
  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
  fontWeight: 700,
  color: '#ffffff',
  lineHeight: 1,
  marginBottom: '0.25rem',
  letterSpacing: '-0.04em',
});

export const SmallLabel = styled('div')({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.625rem',
  textTransform: 'uppercase',
  fontWeight: 700,
  letterSpacing: '0.2em',
  color: '#bcc7de',
});

export const CategoryPill = styled(Box)<{ accent?: string }>(({ accent = '#adc6ff' }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  background: `${accent}18`,
  padding: '0.25rem 0.6rem',
  borderRadius: '9999px',
  border: `1px solid ${accent}30`,
  marginBottom: '0.75rem',
  '& .MuiSvgIcon-root': { fontSize: '0.75rem', color: accent },
  '& span': {
    fontFamily: '"Inter", sans-serif',
    fontSize: '0.625rem',
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: '0.2em',
    color: accent,
  },
}));

export const InlineStats = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  borderTop: '1px solid rgba(67, 71, 76, 0.2)',
  paddingTop: theme.spacing(2),
  marginTop: theme.spacing(1.5),
}));

export const TrailerBtn = styled('button')({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.75rem',
  color: '#adc6ff',
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.625rem',
  textTransform: 'uppercase',
  fontWeight: 700,
  letterSpacing: '0.2em',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  transition: 'gap 200ms ease',
  '&:hover': { gap: '1.25rem' },
  '& .MuiSvgIcon-root': { fontSize: '1rem' },
});

// Archive card glow
export const ArchiveGlow = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'radial-gradient(circle at center, rgba(173,198,255,0.12) 0%, transparent 70%)',
  transform: 'scale(1.5)',
  opacity: 1,
  pointerEvents: 'none',
});

export const DotRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginTop: theme.spacing(3),
  justifyContent: 'center',
}));

export const Dot = styled(Box)<{ $active?: boolean }>(({ $active }) => ({
  width: '0.5rem',
  height: '0.5rem',
  borderRadius: '9999px',
  background: $active ? '#adc6ff' : 'rgba(173,198,255,0.3)',
}));

// Divider
export const HRule = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  margin: '0.75rem 0',
  '& .line': {
    height: '1px',
    flexGrow: 1,
    background: 'rgba(67,71,76,0.3)',
  },
  '& .tag': {
    fontFamily: '"Inter", sans-serif',
    fontSize: '0.625rem',
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: '0.2em',
    color: '#adc6ff',
    flexShrink: 0,
  },
});

// ==================== GRID FOOTER ====================
export const GridFooter = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(12),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  gap: theme.spacing(6),
  borderTop: '1px solid rgba(67, 71, 76, 0.2)',
  paddingTop: theme.spacing(6),
  [theme.breakpoints.up('md')]: { flexDirection: 'row' },
}));

export const FooterQuote = styled('h4')({
  fontFamily: '"Space Grotesk", "Bebas Neue", sans-serif',
  fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
  fontWeight: 700,
  color: '#ffffff',
  textTransform: 'uppercase',
  letterSpacing: '-0.02em',
  fontStyle: 'italic',
  maxWidth: '32rem',
  lineHeight: 1.4,
  marginBottom: '0.75rem',
});

export const FooterSource = styled('p')({
  color: '#bcc7de',
  fontSize: '0.875rem',
  fontWeight: 300,
  fontFamily: '"Manrope", "Montserrat", sans-serif',
});

export const NavBtns = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  flexShrink: 0,
}));

export const CircleBtn = styled('button')<{ $primary?: boolean }>(({ $primary }) => ({
  width: '3.5rem',
  height: '3.5rem',
  borderRadius: '9999px',
  border: $primary ? 'none' : '1px solid rgba(67, 71, 76, 0.3)',
  background: $primary ? '#adc6ff' : 'transparent',
  color: $primary ? '#002e6a' : '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'transform 200ms ease, background 200ms ease',
  '&:hover': {
    transform: $primary ? 'scale(1.1)' : 'none',
    background: $primary ? '#adc6ff' : '#1a2c3b',
  },
  '& .MuiSvgIcon-root': { fontSize: '1.5rem' },
}));

// ==================== PLAY BADGE ====================
export const PlayBadge = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.15)',
  padding: '0.2rem 0.5rem',
  borderRadius: '9999px',
  marginBottom: '0.5rem',
  '& .MuiSvgIcon-root': { fontSize: '0.75rem', color: '#ffffff' },
  '& span': {
    fontFamily: '"Inter", sans-serif',
    fontSize: '0.55rem',
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: '0.15em',
    color: 'rgba(255,255,255,0.7)',
  },
});

// ==================== CTA SECTION ====================
export const CTASection = styled(Box)(({ theme }) => ({
  padding: '4rem 1.5rem',
  background: 'radial-gradient(ellipse at bottom, #0a1d2c 0%, #021523 70%)',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: { padding: '5rem 2rem' },
}));

export const CTAContainer = styled(Box)({ maxWidth: '700px', margin: '0 auto' });

export const CTATitle = styled(motion.h2)({
  fontSize: 'clamp(2.5rem,6vw,4rem)',
  fontFamily: '"Space Grotesk", "Bebas Neue", sans-serif',
  fontWeight: 700,
  color: '#d2e4f9',
  lineHeight: 1,
  marginBottom: '1.5rem',
  letterSpacing: '-0.03em',
  '& .highlight': { color: '#adc6ff' },
});

export const CTADescription = styled('p')(({ theme }) => ({
  fontSize: '0.95rem',
  color: 'rgba(194,198,214,0.6)',
  marginBottom: theme.spacing(4),
  lineHeight: 1.7,
  fontFamily: '"Manrope", "Montserrat", sans-serif',
}));

export const CTAButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: { flexDirection: 'row' },
}));

export const CTAButton = styled(motion(Button))(({ theme }) => ({
  padding: `${theme.spacing(1.75)} ${theme.spacing(4.5)}`,
  background: '#adc6ff',
  color: '#002e6a',
  borderRadius: '9999px',
  fontSize: '0.75rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontFamily: '"Inter", sans-serif',
  '&:hover': { background: '#c5d8ff' },
}));

export const CTASecondaryButton = styled(motion(Button))(({ theme }) => ({
  padding: `${theme.spacing(1.75)} ${theme.spacing(4.5)}`,
  background: 'transparent',
  color: '#d2e4f9',
  border: '2px solid rgba(173,198,255,0.2)',
  borderRadius: '9999px',
  fontSize: '0.75rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontFamily: '"Inter", sans-serif',
  '&:hover': { borderColor: 'rgba(173,198,255,0.4)', background: 'transparent' },
}));

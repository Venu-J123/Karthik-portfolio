import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { motion } from 'motion/react';

// ============================================================================
// MAIN WRAPPER
// ============================================================================

export const HomeWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, #0f2234 50%, ${theme.palette.background.default} 100%)`,
  overflow: 'hidden',
}));

// ============================================================================
// HERO SECTION
// ============================================================================

export const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default,
  height: 'auto',
  // Use clamp to make the hero taller on most phones while capping on very large viewports
  minHeight: 'clamp(520px, 85svh, 920px)',

  [theme.breakpoints.up('sm')]: {
    minHeight: 'clamp(600px, 80svh, 920px)',
  },

  [theme.breakpoints.up('md')]: {
    minHeight: 'clamp(700px, 90svh, 980px)',
  },
}));
 
// ─── Hero Images ─────────────────────────────────────────────────────────────
 
export const HeroImageMobile = styled('img')(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  width: '100%',
  height: '100%',
  // Ensure the full image is visible on phones: no cropping
  objectFit: 'contain',
  objectPosition: 'center center',
  display: 'block',
  transform: 'none',
  transformOrigin: 'center center',

  // Slight position tweak for very small phones to keep subject visible
  [theme.breakpoints.down('sm')]: {
    objectPosition: 'center 52%',
  },

  // Larger mobile / small tablets keep contain
  [theme.breakpoints.between('sm', 'md')]: {
    objectPosition: 'center 60%',
  },

  // Hide on medium+ (desktop)
  [theme.breakpoints.up('md')]: { display: 'none' },
}));
 
export const HeroImage = styled(motion.img)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: '52% 10%',
  display: 'none',
 
  [theme.breakpoints.up('md')]: {
    display: 'block',
    objectPosition: '52% 10%',
  },
  [theme.breakpoints.up('lg')]: {
    objectPosition: '50% 100%',
  },
}));
 
// ─── Overlay & Atmosphere ────────────────────────────────────────────────────
 
export const HeroOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 1,
  pointerEvents: 'none',
  background: `linear-gradient(
    to bottom,
    ${theme.palette.background.default}88 0%,
    ${theme.palette.background.default}22 45%,
    ${theme.palette.background.default}66 100%
  )`,
 
  [theme.breakpoints.up('md')]: {
    background: `linear-gradient(
      to right,
      ${theme.palette.background.default}99 0%,
      ${theme.palette.background.default}80 30%,
      ${theme.palette.background.default}1a 100%
    )`,
  },
  [theme.breakpoints.up('lg')]: {
    background: `linear-gradient(
      to right,
      ${theme.palette.background.default}80 0%,
      ${theme.palette.background.default}66 30%,
      ${theme.palette.background.default}0d 100%
    )`,
  },
}));
 
export const HeroBlobs = styled(Box)({
  position: 'absolute',
  inset: 0,
  zIndex: 2,
  pointerEvents: 'none',
  overflow: 'hidden',
 
  '& > div:nth-of-type(1)': {
    position: 'absolute',
    top: '-96px',
    left: '-64px',
    width: '520px',
    height: '520px',
    backgroundColor: 'rgba(212, 175, 55, 0.10)',
    borderRadius: '50%',
    filter: 'blur(130px)',
  },
 
  '& > div:nth-of-type(2)': {
    position: 'absolute',
    top: '33%',
    left: '33%',
    width: '280px',
    height: '380px',
    backgroundColor: 'rgba(120, 113, 108, 0.10)',
    borderRadius: '60% 40% 50% 70% / 40% 60% 40% 60%',
    filter: 'blur(90px)',
  },
 
  '& > div:nth-of-type(3)': {
    position: 'absolute',
    top: '50%',
    right: '25%',
    width: '180px',
    height: '260px',
    backgroundColor: 'rgba(120, 113, 108, 0.15)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    transform: 'rotate(12deg)',
  },
});
 
// ─── Quote Card ───────────────────────────────────────────────────────────────
// Duplicate declarations removed - see PREMIUM HERO REDESIGN section below for final versions
 
// ─── Main Layout ─────────────────────────────────────────────────────────────
 
export const HeroMainLayout = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  position: 'relative',
  zIndex: 10,
  minHeight: 0,
  width: '100%',

  // On mobile/tablet, this container has no content (name hidden),
  // so don't let it consume flex space
  [theme.breakpoints.down('lg')]: {
    flex: '0 0 auto',
    minHeight: 0,
    height: 0,
  },
}));
 
export const HeroLeftPanel = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: 0,
  position: 'relative',
  zIndex: 15,

  [theme.breakpoints.up('lg')]: {
    width: '48%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: theme.spacing(8, 7),
  },
  [theme.breakpoints.up('xl')]: {
    width: '44%',
    padding: theme.spacing(10, 8),
  },
}));
 
// ─── Name Block ───────────────────────────────────────────────────────────────
 
export const HeroNameBlock = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
  textAlign: 'center',
  width: '100%',

  // Hidden on xs/sm/md — image is the hero on those screens
  display: 'none',

  [theme.breakpoints.up('lg')]: {
    display: 'block',
    textAlign: 'left',
    maxWidth: 'none',
    marginBottom: theme.spacing(4),
  },
}));
 
const heroNameBase = (theme: any) => ({
  fontFamily: 'Bebas Neue, sans-serif',
  fontWeight: 700,
  margin: 0,
  letterSpacing: '-0.02em',
  fontSize: 'clamp(2.2rem, 7vw, 4.5rem)',
  lineHeight: 0.95,
 
  [theme.breakpoints.up('lg')]: {
    fontSize: 'clamp(4rem, 6vw, 6.5rem)',
    lineHeight: 0.9,
  },
});
 
export const HeroTitle = styled('h1')(({ theme }) => ({
  ...heroNameBase(theme),
  color: theme.palette.common.white,
  textShadow: '0 4px 20px rgba(0,0,0,0.30)',
}));
 
export const HeroSubtitle = styled('h1')(({ theme }) => ({
  ...heroNameBase(theme),
  color: theme.palette.primary.main,
  textShadow: '0 0 20px rgba(212,175,55,0.30)',
}));
 
export const HeroThirdLine = styled('h1')(({ theme }) => ({
  ...heroNameBase(theme),
  color: theme.palette.common.white,
}));
 
// ─── Carousel (Old version) ─────────────────────────────────────────────────────────────────
 // Duplicate declarations removed - see THUMBNAIL CAROUSEL section below
 
export const PlayBadge = styled(Box)({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,

  '& > span, & > svg': {
    width: 44,
    height: 44,
    borderRadius: '50%',
    background: 'rgba(0,0,0,0.55)',
    backdropFilter: 'blur(6px)',
    border: '1.5px solid rgba(255,255,255,0.35)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// ============================================================================
// PREMIUM HERO REDESIGN - CINEMATIC ELEMENTS
// ============================================================================

export const HeroBackgroundTypography = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 3,
  pointerEvents: 'none',
  overflow: 'hidden',
}));

export const BackgroundText = styled('span')(({ theme }) => ({
  fontFamily: 'Bebas Neue, sans-serif',
  fontSize: 'clamp(12rem, 25vw, 32rem)',
  fontWeight: 900,
  letterSpacing: '-0.02em',
  textTransform: 'uppercase',
  color: 'rgba(212, 175, 55, 0.04)',
  lineHeight: 1,
  position: 'absolute',
  whiteSpace: 'nowrap',
  filter: 'blur(1px)',
  textShadow: `0 0 60px rgba(212, 175, 55, 0.1)`,
}));

export const HeroQuoteContainer = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  bottom: 'clamp(200px, 28%, 320px)',
  right: theme.spacing(4),
  maxWidth: '300px',
  zIndex: 20,
  padding: theme.spacing(2.5, 3),
  borderRadius: '16px',
  background: 'rgba(6, 55, 130, 0.18)',
  backdropFilter: 'blur(20px) saturate(160%)',
  WebkitBackdropFilter: 'blur(20px) saturate(160%)',
  border: '1px solid rgba(212, 175, 55, 0.25)',
  boxShadow: [
    'inset 0 1px 0 rgba(150, 235, 255, 0.15)',
    '0 8px 32px rgba(0, 30, 100, 0.25)',
  ].join(', '),

  // Hidden below lg
  display: 'none',

  [theme.breakpoints.up('lg')]: {
    display: 'block',
    right: theme.spacing(6),
    maxWidth: '320px',
    padding: theme.spacing(3, 3.5),
  },
}));

export const QuoteText = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(13),
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'italic',
  fontWeight: 500,
  color: 'rgba(255, 255, 255, 0.85)',
  margin: 0,
  lineHeight: 1.6,
  marginBottom: theme.spacing(1.5),
  letterSpacing: '0.5px',
}));

export const QuoteAuthor = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(10),
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  color: theme.palette.primary.main,
  margin: 0,
}));

export const CredentialBadge = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  padding: `${theme.spacing(1.25)} ${theme.spacing(2)}`,
  borderRadius: '50px',
  background: 'rgba(10, 29, 44, 0.4)',
  backdropFilter: 'blur(16px) saturate(150%)',
  WebkitBackdropFilter: 'blur(16px) saturate(150%)',
  border: '1px solid rgba(212, 175, 55, 0.25)',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  zIndex: 20,
  boxShadow: 'inset 0 1px 0 rgba(150, 235, 255, 0.1)',
}));

export const CredentialIcon = styled(Box)(({ theme }) => ({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(212, 175, 55, 0.2)',
  color: theme.palette.primary.main,
  fontSize: '0.75rem',
  fontWeight: 700,
}));

export const CredentialText = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(11),
  fontWeight: 700,
  textTransform: 'uppercase',
  color: 'rgba(255, 255, 255, 0.9)',
  margin: 0,
  letterSpacing: '0.1em',
}));

export const HeroCinematicGlow = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 2,
  pointerEvents: 'none',
  background: [
    'radial-gradient(ellipse at 40% 60%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)',
    'radial-gradient(ellipse at 80% 20%, rgba(59, 130, 246, 0.06) 0%, transparent 40%)',
  ].join(', '),
}));

export const PremiumCinematicOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 4,
  pointerEvents: 'none',
  background: `
    linear-gradient(90deg, rgba(10, 29, 44, 0.5) 0%, transparent 30%, transparent 70%, rgba(10, 29, 44, 0.4) 100%),
    linear-gradient(180deg, rgba(10, 29, 44, 0.3) 0%, transparent 40%, transparent 60%, rgba(10, 29, 44, 0.2) 100%)
  `,
}));

// ============================================================================
// THUMBNAIL CAROUSEL
// ============================================================================

export const CarouselContainer = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  width: '100%',
  zIndex: 20,
  flexShrink: 0,
  overflow: 'hidden',
  height: '10rem',
  marginTop: 0,
  paddingBottom: theme.spacing(1.5),

  // Premium cinematic bottom grounding overlay
  background: 'linear-gradient(to top, #0a1d2c 0%, rgba(10, 29, 44, 0.85) 50%, rgba(10, 29, 44, 0.3) 80%, transparent 100%)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  borderTop: '1px solid rgba(255, 255, 255, 0.04)',

  [theme.breakpoints.up('sm')]: {
    height: '11rem',
    paddingBottom: theme.spacing(2),
  },

  [theme.breakpoints.up('md')]: {
    height: '13rem',
    paddingBottom: theme.spacing(2.5),
  },

  [theme.breakpoints.up('lg')]: {
    height: '15rem',
  },
}));

export const CarouselFade = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: '64px',
  zIndex: 10,
  pointerEvents: 'none',

  '&.left': {
    left: 0,
    background: `linear-gradient(to right, ${theme.palette.background.default}cc 0%, transparent 100%)`,
  },

  '&.right': {
    right: 0,
    background: `linear-gradient(to left, ${theme.palette.background.default}cc 0%, transparent 100%)`,
  },

  [theme.breakpoints.up('sm')]: {
    width: '80px',
  },

  [theme.breakpoints.up('md')]: {
    width: '100px',
  },
}));

export const CarouselScrollTrack = styled('div')({
  overflowX: 'auto',
  overflowY: 'hidden',
  height: '100%',
  cursor: 'grab',
  userSelect: 'none',
  '&::-webkit-scrollbar': { display: 'none' },
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&:active': { cursor: 'grabbing' },
});

export const CarouselStrip = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  gap: theme.spacing(1.5),
  width: 'max-content',
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),

  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(1.75),
  },

  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(2),
  },
}));

export const ThumbnailCard = styled(motion.button)(({ theme }) => ({
  position: 'relative',
  flexShrink: 0,
  borderRadius: theme.spacing(1.5),
  overflow: 'hidden',
  aspectRatio: '16/9',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  backgroundColor: 'transparent',
  padding: 0,
  height: '100%',

  '&:hover': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: '0px',
  },
}));

export const ThumbnailImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center 25%',
  transition: 'transform 500ms',

  [`${ThumbnailCard}:hover &`]: {
    transform: 'scale(1.05)',
  },
}));

export const ThumbnailOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  background: `linear-gradient(to top, ${theme.palette.background.default} 0%, ${theme.palette.background.default}4d 40%, transparent 100%)`,
}));

export const ThumbnailTag = styled('span')(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1.5),
  left: theme.spacing(1.5),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  borderRadius: '9999px',
  fontSize: theme.typography.pxToRem(8),
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.default,
  boxShadow: theme.shadows[8],

  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(9),
    letterSpacing: '0.2em',
  },
}));

export const ThumbnailLabel = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  paddingLeft: theme.spacing(1.5),
  paddingRight: theme.spacing(1.5),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  backgroundColor: 'rgba(10, 29, 44, 0.85)',
  backdropFilter: 'blur(10px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
}));

export const ThumbnailLabelText = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(11),
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: theme.palette.common.white,
  margin: 0,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  flex: 1,

  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(12),
    letterSpacing: '0.15em',
  },
}));

// ============================================================================
// MARQUEE SECTION - OLD MOVIE REEL STYLE
// ============================================================================

export const MarqueeSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
  backgroundColor: theme.palette.background.paper,
  background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  overflow: 'hidden',

  // Film grain texture overlay
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.1) 3px, rgba(0,0,0,.1) 3px),
      repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.1) 3px, rgba(0,0,0,.1) 3px)
    `,
    opacity: 0.4,
    pointerEvents: 'none',
    animation: 'filmGrain 0.5s steps(5) infinite',
  },

  // Top film strip with sprocket holes
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '30px',
    background: theme.palette.background.default,
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    backgroundImage: `
      repeating-linear-gradient(
        90deg,
        transparent 0px,
        transparent 20px,
        rgba(0,0,0,0.4) 20px,
        rgba(0,0,0,0.4) 30px,
        transparent 30px,
        transparent 50px
      )
    `,
    boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.5)',
  },

  '@keyframes filmGrain': {
    '0%, 100%': { transform: 'translate(0, 0)' },
    '10%': { transform: 'translate(-1%, -1%)' },
    '20%': { transform: 'translate(1%, 1%)' },
    '30%': { transform: 'translate(-1%, 1%)' },
    '40%': { transform: 'translate(1%, -1%)' },
    '50%': { transform: 'translate(-1%, -1%)' },
    '60%': { transform: 'translate(1%, 1%)' },
    '70%': { transform: 'translate(-1%, -1%)' },
    '80%': { transform: 'translate(1%, -1%)' },
    '90%': { transform: 'translate(-1%, 1%)' },
  },

  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

export const MarqueeStrip = styled(Box)(({ }) => ({
  display: 'flex',
  gap: '0.75rem',
  width: 'max-content',
  paddingTop: '45px',
  paddingBottom: '15px',
  animation: 'marqueeReel 35s linear infinite, flicker 0.1s infinite alternate',

  '@keyframes marqueeReel': {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-50%)' },
  },

  '@keyframes flicker': {
    '0%': { opacity: 1 },
    '50%': { opacity: 0.97 },
    '100%': { opacity: 1 },
  },
}));

export const MarqueeItem = styled('span')(({ theme }) => ({
  fontFamily: '"Bebas Neue", sans-serif',
  fontSize: 'clamp(1rem, 3vw, 2rem)',         // ← smaller min
  fontWeight: 700,
  letterSpacing: '0.05em',
  color: theme.palette.text.primary,
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  padding: '0.75rem 1.25rem',                 // ← tighter on mobile
  marginRight: '1.5rem',

  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: '4px',
  background: `linear-gradient(135deg, ${theme.palette.background.paper}dd 0%, ${theme.palette.background.default}dd 100%)`,
  backdropFilter: 'blur(10px)',
  boxShadow: `
    0 0 20px ${theme.palette.primary.main}25,
    inset 0 0 30px rgba(0,0,0,0.6),
    inset 0 4px 10px rgba(255,255,255,0.05),
    0 4px 15px rgba(0,0,0,0.8)
  `,
  textShadow: `2px 2px 4px rgba(0,0,0,0.9), 0 0 15px ${theme.palette.primary.main}40`,

  [theme.breakpoints.up('sm')]: {
    padding: '1rem 2rem',
    marginRight: '1.75rem',
    border: `3px solid ${theme.palette.primary.main}`,
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '4px',
    left: '4px',
    width: '10px',
    height: '10px',
    borderTop: `2px solid ${theme.palette.primary.main}`,
    borderLeft: `2px solid ${theme.palette.primary.main}`,
    opacity: 0.8,
  },

  '&::after': {
    content: '"||"',
    position: 'absolute',
    right: '-1.25rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: theme.palette.primary.main,
    fontSize: 'clamp(1.25rem, 4vw, 2.5rem)',
    fontWeight: 700,
    opacity: 0.7,
    textShadow: `0 0 15px ${theme.palette.primary.main}, 0 0 30px ${theme.palette.primary.main}30`,
    letterSpacing: '-0.1em',
  },

  '& > span::after': {
    content: '""',
    position: 'absolute',
    bottom: '-0.5rem',
    right: '-1rem',
    width: '10px',
    height: '10px',
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    borderRight: `2px solid ${theme.palette.primary.main}`,
    opacity: 0.8,
  },
}));

// ============================================================================
// SECTION HEADING
// ============================================================================

export const SectionHeadingContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(3),

  [theme.breakpoints.up('sm')]: {
    marginBottom: theme.spacing(3.5),
  },

  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(4),
  },

  '&.align-left': {
    textAlign: 'left',
    marginBottom: theme.spacing(2.5),

    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
    },

    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(3.5),
    },
  },
}));

export const SectionSubtitle = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(11),
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.3em',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  fontFamily: 'Inter, sans-serif',
}));

export const SectionTitle = styled('h2')(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
  fontFamily: 'Bebas Neue, sans-serif',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  color: theme.palette.common.white,
  lineHeight: 1,
  margin: 0,

  '& .highlight': {
    color: theme.palette.primary.main, // Golden yellow
  },
}));

// ============================================================================
// STATS SECTION
// ============================================================================

export const StatsSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  background: `radial-gradient(ellipse at center, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 70%)`,
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'min(800px, 90vw)',
    height: 'min(800px, 90vw)',
    background: `radial-gradient(circle, ${theme.palette.primary.main}08 0%, transparent 70%)`,
    borderRadius: '50%',
    pointerEvents: 'none',
  },

  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },

  [theme.breakpoints.up('lg')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export const StatsBgImage = styled('img')({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: '50% 40%',
});

export const StatsOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 1,
  background: `linear-gradient(to bottom, ${theme.palette.background.default}f2 0%, ${theme.palette.background.default}99 50%, ${theme.palette.background.default}f2 100%)`,
  pointerEvents: 'none',
}));

export const StatsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',   // ← 2 cols on mobile
  gap: theme.spacing(1.25),
  maxWidth: '1280px',
  margin: '0 auto',
  marginTop: theme.spacing(2),

  // Make the 5th (odd-out) item span full width on mobile
  '& > *:nth-of-type(5):last-of-type': {
    gridColumn: '1 / -1',
  },

  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(1.75),
    marginTop: theme.spacing(2.5),
  },

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(2),
    '& > *:nth-of-type(5):last-of-type': {
      gridColumn: 'auto',  // reset on md+
    },
  },

  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: theme.spacing(2.5),
    marginTop: theme.spacing(3),
  },
}));

// ============================================================================
// SOCIAL DASHBOARD SECTION
// ============================================================================

export const SocialSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(3.5),
  paddingBottom: theme.spacing(3.5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  overflow: 'hidden',
  background: `radial-gradient(ellipse at top, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 70%)`,

  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
  },

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(4.5),
    paddingBottom: theme.spacing(4.5),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },

  [theme.breakpoints.up('lg')]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

export const SocialHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
  maxWidth: '1280px',
  margin: '0 auto',

  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(2.5),
    marginBottom: theme.spacing(3.5),
  },

  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: theme.spacing(3),
  },
}));

export const SocialStats = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  marginBottom: 0,

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing(1.5),
  },

  [theme.breakpoints.up('md')]: {
    flexWrap: 'nowrap',
  },
}));

export const StatBox = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  borderRadius: '20px',
  width: '100%',

  // Water morphism base — deep translucent water layer
  background: 'rgba(6, 55, 130, 0.08)',
  backdropFilter: 'blur(24px) saturate(170%) brightness(1.05)',
  WebkitBackdropFilter: 'blur(24px) saturate(170%) brightness(1.05)',
  border: '1px solid rgba(110, 210, 255, 0.16)',
  boxShadow: [
    'inset 0 1.5px 0 rgba(150, 235, 255, 0.22)',  // wet surface top highlight
    'inset 0 -1px 0 rgba(0, 50, 140, 0.14)',       // depth at bottom
    '0 8px 32px rgba(0, 30, 100, 0.14)',            // underwater depth shadow
    '0 2px 8px rgba(0, 0, 0, 0.08)',
  ].join(', '),
  transition: 'background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',

  // Water surface wash — top ambient light diffusion
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: '48%',
    background: 'linear-gradient(180deg, rgba(150, 235, 255, 0.10) 0%, rgba(100, 200, 255, 0) 100%)',
    borderRadius: '20px 20px 0 0',
    pointerEvents: 'none',
    zIndex: 0,
  },

  // Diagonal ripple caustic — light bending through water
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-50%', left: '-8%',
    width: '42%', height: '200%',
    background: 'linear-gradient(112deg, transparent 33%, rgba(150, 235, 255, 0.08) 50%, transparent 67%)',
    pointerEvents: 'none',
    zIndex: 0,
    transform: 'skewX(-7deg)',
  },

  '& > *': { position: 'relative', zIndex: 1 },

  '&:hover': {
    background: 'rgba(10, 75, 170, 0.13)',
    borderColor: 'rgba(120, 225, 255, 0.30)',
    boxShadow: [
      'inset 0 2px 0 rgba(170, 245, 255, 0.30)',
      'inset 0 -1px 0 rgba(0, 50, 140, 0.18)',
      '0 16px 48px rgba(0, 30, 100, 0.20)',
      '0 4px 12px rgba(0, 0, 0, 0.10)',
    ].join(', '),
  },

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2.5),
    gap: theme.spacing(2),
    borderRadius: '22px',
    flex: '1 1 calc(50% - 10px)',
    minWidth: '200px',
    '&::before': { borderRadius: '22px 22px 0 0' },
  },

  [theme.breakpoints.up('md')]: {
    flex: '0 1 auto',
    width: 'auto',
    padding: theme.spacing(2.5),
  },
}));

export const StatIcon = styled(Box)(({ theme }) => ({
  width: theme.spacing(5.5),
  height: theme.spacing(5.5),
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  background: 'rgba(0, 120, 220, 0.12)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(120, 215, 255, 0.20)',
  boxShadow: 'inset 0 1px 0 rgba(180, 245, 255, 0.20), 0 4px 14px rgba(0, 80, 200, 0.12)',

  [theme.breakpoints.up('sm')]: {
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
  },
}));

export const StatContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const StatValue = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(24),
  fontFamily: 'Bebas Neue, sans-serif',
  lineHeight: 1,
  margin: 0,
  fontWeight: 700,

  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(30),
  },

  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(32),
  },
}));

export const StatLabel = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(10),
  textTransform: 'uppercase',
  fontWeight: 900,
  color: 'rgba(255, 255, 255, 0.3)',
  letterSpacing: '0.15em',
  marginTop: theme.spacing(0.5),
  margin: 0,
  lineHeight: 1.3,

  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(10),
    letterSpacing: '0.2em',
  },
}));

export const VideoGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2),
  maxWidth: '1280px',
  margin: '0 auto',
  marginTop: theme.spacing(2.5),
  marginBottom: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(2.5),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2.5),
  },

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(3),
    marginTop: theme.spacing(3.5),
  },
}));

export const VideoCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  aspectRatio: '1 / 0.5625',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
  border: `1px solid rgba(255, 255, 255, 0.05)`,
  cursor: 'pointer',
}));
export const VideoImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  opacity: 0.4,
  transition: 'all 700ms',

  [`${VideoCard}:hover &`]: {
    opacity: 1,
    transform: 'scale(1.05)',
  },
}));

export const VideoOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  background: `linear-gradient(to top, ${theme.palette.background.default} 0%, ${theme.palette.background.default}33 20%, transparent 100%)`,
}));

export const VideoPlayButton = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'opacity 500ms',

  [`${VideoCard}:hover &`]: {
    opacity: 1,
  },
}));

export const PlayIcon = styled(Box)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.default,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: theme.shadows[12],
}));

export const VideoContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(1),
  left: theme.spacing(1),
  right: theme.spacing(1),

  [theme.breakpoints.up('sm')]: {
    bottom: theme.spacing(2.5),
    left: theme.spacing(2.5),
    right: theme.spacing(2.5),
  },
}));

export const VideoTag = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(10),
  color: theme.palette.primary.main,
  fontWeight: 900,
  marginBottom: theme.spacing(1),
  marginTop: 0,
  textTransform: 'uppercase',
  letterSpacing: '0.3em',
}));

export const VideoTitle = styled('h4')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(16),
  lineHeight: 1.3,
  letterSpacing: '-0.01em',
  fontWeight: 700,
  margin: 0,

  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(22),
  },
}));

export const ViewAllButton = styled(motion.button)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.4em',
  fontSize: theme.typography.pxToRem(11),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2.5),
  marginLeft: 'auto',
  marginRight: 'auto',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  transition: 'color 0.3s ease',
  fontFamily: 'Montserrat, sans-serif',

  '&:hover': {
    color: theme.palette.common.white,

    '& svg': {
      transform: 'translateX(8px)',
    },
  },

  '& svg': {
    transition: 'transform 0.3s ease',
  },
}));

// ============================================================================
// ACTING TEASER SECTION
// ============================================================================

export const ActingTeaserSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  overflow: 'hidden',

  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },

  [theme.breakpoints.up('lg')]: {
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(16),
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    backgroundImage: `url('${import.meta.env.BASE_URL}assets/Acting/Prabas.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 30%',
    filter: 'brightness(0.4)',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    opacity: 0.3,
  },
}));

export const ActingTeaserContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
  maxWidth: '1280px',
  margin: '0 auto',
  textAlign: 'center',
}));

export const TeaserDescription = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(14),
  color: 'rgba(255, 255, 255, 0.5)',
  fontFamily: 'Inter, sans-serif',
  marginBottom: theme.spacing(4),
  lineHeight: 1.6,
  maxWidth: '768px',
  margin: `0 auto ${theme.spacing(4)} auto`,

  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(16),
    marginBottom: theme.spacing(5),
  },

  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(18),
    marginBottom: theme.spacing(6),
  },

  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.pxToRem(20),
  },
}));

export const TeaserStatsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(5),

  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(2.5),
    marginBottom: theme.spacing(6),
  },

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
    marginBottom: theme.spacing(8),
  },
}));

export const TeaserStatBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1.5),
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2.5),
    borderRadius: theme.spacing(1.875),
  },
}));

export const TeaserStatValue = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(30),
  fontFamily: 'Bebas Neue, sans-serif',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(0.5),
  margin: 0,
  fontWeight: 700,

  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(36),
  },

  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(40),
  },
}));

export const TeaserStatLabel = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(9),
  textTransform: 'uppercase',
  fontWeight: 900,
  color: 'rgba(255, 255, 255, 0.3)',
  letterSpacing: '0.2em',
  margin: 0,

  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(10),
  },
}));

export const TeaserCTAButton = styled(motion.button)(({ theme }) => ({
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  backgroundColor: theme.palette.common.white,
  color: theme.palette.background.default,
  fontWeight: 900,
  fontSize: theme.typography.pxToRem(12),
  borderRadius: theme.spacing(1.5),
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  boxShadow: theme.shadows[12],
  fontFamily: 'Montserrat, sans-serif',

  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
  },

  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    transform: 'scale(1.05)',
  },

  '&:active': {
    transform: 'scale(0.95)',
  },
}));

// ============================================================================
// WILDLIFE RESCUE SECTION
// ============================================================================

export const WildlifeSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  overflow: 'hidden',
  background: `linear-gradient(to bottom, ${theme.palette.background.default}, #0d2538)`,

  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },

  [theme.breakpoints.up('lg')]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
}));

export const WildlifeContent = styled(Box)(({ theme }) => ({
  maxWidth: '1280px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(5),
  position: 'relative',

  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(6),
  },

  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(8),
  },

  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(10),
  },
}));

export const WildlifeGradientBlob = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  width: theme.spacing(40),
  height: theme.spacing(40),
  backgroundColor: 'rgba(59, 130, 246, 0.05)',
  borderRadius: '50%',
  filter: 'blur(120px)',
  transform: 'translateX(50%) translateY(-50%)',
  pointerEvents: 'none',
}));

export const WildlifeTextContent = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',
  zIndex: 10,

  [theme.breakpoints.up('lg')]: {
    width: '50%',
  },
}));

export const WildlifeDescription = styled('p')(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.4)',
  fontFamily: 'Inter, sans-serif',
  fontSize: theme.typography.pxToRem(18),
  marginBottom: theme.spacing(6),
  lineHeight: 1.6,
}));

export const WildlifeButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

export const EmergencyButton = styled(motion.button)(({ theme }) => ({
  backgroundColor: '#dc2626',
  color: theme.palette.common.white,
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
  borderRadius: theme.spacing(1.5),
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  fontSize: theme.typography.pxToRem(12),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1.5),
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: theme.shadows[8],
  fontFamily: 'Montserrat, sans-serif',

  '&:hover': {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.background.default,
    transform: 'scale(1.05)',
  },

  '&:active': {
    transform: 'scale(0.95)',
  },
}));

export const StoriesButton = styled(motion.button)(({ theme }) => ({
  backgroundColor: 'transparent',
  border: 'none',
  color: theme.palette.common.white,
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
  borderRadius: theme.spacing(1.5),
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  fontSize: theme.typography.pxToRem(12),
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  fontFamily: 'Montserrat, sans-serif',

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },

  '&:active': {
    transform: 'scale(0.95)',
  },
}));

export const WildlifeImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',
  zIndex: 10,

  [theme.breakpoints.up('lg')]: {
    width: '50%',
  },
}));

export const WildlifeImageBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  aspectRatio: '1 / 1',
  borderRadius: theme.spacing(2.5),
  overflow: 'hidden',
  border: `1px solid rgba(255, 255, 255, 0.05)`,
}));

export const WildlifeImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 1000ms',

  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

export const WildlifeImageOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  background: `linear-gradient(to top, ${theme.palette.background.default}e6 0%, ${theme.palette.background.default}33 20%, transparent 100%)`,
}));

export const WildlifeStatBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(5),
  left: theme.spacing(5),
}));

export const WildlifeStatValue = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(48),
  fontFamily: 'Bebas Neue, sans-serif',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(0.5),
  margin: 0,
  fontWeight: 700,
}));

export const WildlifeStatLabel = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(11),
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.4em',
  color: 'rgba(255, 255, 255, 0.4)',
  margin: 0,
}));

// ============================================================================
// JOURNEY ROADMAP SECTION
// ============================================================================

export const JourneySection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  background: '#0a1d2c',
  position: 'relative',
  overflow: 'hidden',

  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
}));

export const JourneyBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0.02,
  backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
  backgroundSize: '40px 40px',
  pointerEvents: 'none',
}));

export const JourneyContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1400px',
  margin: '0 auto',
  padding: `0 ${theme.spacing(2)}`,
  position: 'relative',
  zIndex: 1,

  [theme.breakpoints.up('sm')]: {
    padding: `0 ${theme.spacing(2.5)}`,
  },

  [theme.breakpoints.up('md')]: {
    padding: `0 ${theme.spacing(3)}`,
  },

  [theme.breakpoints.up('lg')]: {
    padding: `0 ${theme.spacing(4)}`,
  },
}));

export const TimelineScroll = styled(Box)(({ theme }) => ({
  overflowX: 'auto',
  overflowY: 'visible',
  position: 'relative',
  paddingTop: '2.5rem',
  paddingBottom: '2.5rem',
  scrollbarWidth: 'none', // Firefox
  msOverflowStyle: 'none', // IE 10+
  WebkitOverflowScrolling: 'touch',
  '&::-webkit-scrollbar': { display: 'none' }, // Chrome/Safari/Opera
  width: '100%',
  willChange: 'scroll-position',

  [theme.breakpoints.up('md')]: {
    paddingTop: '3rem',
    paddingBottom: '3rem',
  },
}));

export const TimelineWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: theme.spacing(10),
  paddingRight: theme.spacing(10),
  minWidth: 'max-content',
  gap: theme.spacing(4),
  position: 'relative',
  height: '100%',

  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(6),
  },

  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(8),
  },
}));

export const TimelineLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: 0,
  right: 0,
  height: '2px',
  background: 'linear-gradient(90deg, rgba(173, 198, 255, 0.05) 0%, rgba(173, 198, 255, 0.3) 15%, rgba(173, 198, 255, 0.3) 85%, rgba(173, 198, 255, 0.05) 100%)',
  pointerEvents: 'none',
  zIndex: 0,
}));

export const TimelineItem = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '240px',
  height: '380px', // Mobile vertical track height
  flexShrink: 0,
  justifyContent: 'flex-start', // Default odd: card is at the top
  alignItems: 'center',

  [theme.breakpoints.up('sm')]: {
    width: '280px',
    height: '420px',
  },

  [theme.breakpoints.up('md')]: {
    width: '320px',
    height: '480px',
  },

  // Even items: Card is at the bottom
  '&:nth-of-type(even)': {
    justifyContent: 'flex-end',
  },
}));

export const TimelineCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(2.5),
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '20px',
  width: '100%',
  boxSizing: 'border-box',
  textAlign: 'left',

  // Water morphism base — deep translucent water layer
  background: 'rgba(6, 55, 130, 0.08)',
  backdropFilter: 'blur(24px) saturate(170%) brightness(1.05)',
  WebkitBackdropFilter: 'blur(24px) saturate(170%) brightness(1.05)',
  border: '1px solid rgba(110, 210, 255, 0.16)',
  boxShadow: [
    'inset 0 1.5px 0 rgba(150, 235, 255, 0.22)', // wet surface top highlight
    'inset 0 -1px 0 rgba(0, 50, 140, 0.14)',      // depth at bottom
    '0 8px 32px rgba(0, 30, 100, 0.14)',           // underwater depth shadow
    '0 2px 8px rgba(0, 0, 0, 0.08)',
  ].join(', '),
  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',

  // Water surface wash — top ambient light diffusion
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: '48%',
    background: 'linear-gradient(180deg, rgba(150, 235, 255, 0.10) 0%, rgba(100, 200, 255, 0) 100%)',
    borderRadius: '20px 20px 0 0',
    pointerEvents: 'none',
    zIndex: 0,
  },

  // Diagonal ripple caustic — light bending through water
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-50%', left: '-8%',
    width: '42%', height: '200%',
    background: 'linear-gradient(112deg, transparent 33%, rgba(150, 235, 255, 0.08) 50%, transparent 67%)',
    pointerEvents: 'none',
    zIndex: 0,
    transform: 'skewX(-7deg)',
  },

  '& > *': { position: 'relative', zIndex: 1 },

  '&:hover': {
    transform: 'translateY(-6px) scale(1.02)',
    background: 'rgba(10, 75, 170, 0.13)',
    borderColor: 'rgba(120, 225, 255, 0.30)',
    boxShadow: [
      'inset 0 2px 0 rgba(170, 245, 255, 0.30)',
      'inset 0 -1px 0 rgba(0, 50, 140, 0.18)',
      '0 16px 48px rgba(0, 30, 100, 0.20)',
      '0 4px 12px rgba(0, 0, 0, 0.10)',
    ].join(', '),
  },
}));

export const CategoryBadge = styled('span')<{ categorycolor?: string }>(({ theme, categorycolor }) => ({
  fontSize: '0.65rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  padding: '4px 10px',
  borderRadius: '50px',
  border: `1px solid ${categorycolor || 'rgba(255, 255, 255, 0.15)'}`,
  backgroundColor: `${categorycolor ? categorycolor + '15' : 'rgba(255, 255, 255, 0.05)'}`,
  color: categorycolor || theme.palette.common.white,
  width: 'fit-content',
  display: 'inline-block',
  marginBottom: theme.spacing(1.5),
  fontFamily: 'Montserrat, sans-serif',
}));

export const MilestoneIconWrapper = styled(Box)<{ iconcolor?: string }>(({ theme, iconcolor }) => ({
  position: 'absolute',
  top: theme.spacing(2.5),
  right: theme.spacing(2.5),
  color: iconcolor || '#adc6ff',
  opacity: 0.65,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    '& svg': {
      fontSize: '1.75rem',
    },
  },
}));

export const TimelineDot = styled(Box)<{ dotcolor?: string }>(({ theme, dotcolor }) => ({
  display: 'none',
  width: '12px',
  height: '12px',
  backgroundColor: dotcolor || '#adc6ff',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  flexShrink: 0,
  borderRadius: '50%',
  boxShadow: `0 0 0 4px ${dotcolor ? dotcolor + '25' : 'rgba(173, 198, 255, 0.15)'}`,
  transition: 'all 0.3s ease',

  [theme.breakpoints.up('md')]: {
    display: 'block',
    width: '16px',
    height: '16px',
    boxShadow: `0 0 0 6px ${dotcolor ? dotcolor + '25' : 'rgba(173, 198, 255, 0.15)'}`,
  },
  
  // Subtle pulse animation
  '@keyframes pulse': {
    '0%': {
      boxShadow: `0 0 0 0px ${dotcolor ? dotcolor + '40' : 'rgba(173, 198, 255, 0.3)'}`,
    },
    '70%': {
      boxShadow: `0 0 0 10px ${dotcolor ? dotcolor + '00' : 'rgba(173, 198, 255, 0)'}`,
    },
    '100%': {
      boxShadow: `0 0 0 0px ${dotcolor ? dotcolor + '00' : 'rgba(173, 198, 255, 0)'}`,
    },
  },
  animation: 'pulse 2s infinite',
}));

export const YearBadge = styled(Box)(({ theme }) => ({
  fontSize: '2rem',
  fontFamily: 'Bebas Neue, sans-serif',
  fontWeight: 700,
  color: '#adc6ff',
  lineHeight: 1,
  marginBottom: theme.spacing(1),
  display: 'block',

  [theme.breakpoints.up('sm')]: { fontSize: '2.25rem' },
  [theme.breakpoints.up('md')]: { fontSize: '2.5rem' },
}));

export const MilestoneTitle = styled('h4')(({ theme }) => ({
  fontSize: '1.1rem',
  fontFamily: 'Bebas Neue, Epilogue, sans-serif',
  fontWeight: 700,
  color: '#d2e4f9',
  margin: '0 0 0.5rem 0',
  lineHeight: 1.3,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',

  [theme.breakpoints.up('md')]: { fontSize: '1.25rem' },
}));

export const MilestoneDescription = styled('p')(({ theme }) => ({
  fontSize: '0.8rem',
  color: '#c2c6d6',
  lineHeight: 1.6,
  margin: 0,

  [theme.breakpoints.up('md')]: { fontSize: '0.875rem' },
}));

export const TimelineFadeLeft = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  width: '60px',
  background: 'linear-gradient(to right, #0a1d2c 0%, transparent 100%)',
  zIndex: 3,
  pointerEvents: 'none',

  [theme.breakpoints.up('sm')]: {
    width: '100px',
  },
  [theme.breakpoints.up('md')]: {
    width: '150px',
  },
}));

export const TimelineFadeRight = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  width: '60px',
  background: 'linear-gradient(to left, #0a1d2c 0%, transparent 100%)',
  zIndex: 3,
  pointerEvents: 'none',

  [theme.breakpoints.up('sm')]: {
    width: '100px',
  },
  [theme.breakpoints.up('md')]: {
    width: '150px',
  },
}));

export const JourneyCTAButton = styled(motion.button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #D4AF37, #F4D03F)',
  color: '#0a1d2c',
  border: 'none',
  padding: `${theme.spacing(1.75)} ${theme.spacing(3.5)}`,
  fontSize: theme.typography.pxToRem(13),
  fontWeight: 700,
  borderRadius: '50px',
  cursor: 'pointer',
  boxShadow: '0 8px 30px rgba(212, 175, 55, 0.3)',
  transition: 'all 0.3s ease',
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginTop: theme.spacing(5),
  fontFamily: 'Montserrat, sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',

  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 40px rgba(212, 175, 55, 0.4)',
  },

  '&:active': {
    transform: 'scale(0.95)',
  },

  [theme.breakpoints.up('sm')]: {
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
    fontSize: theme.typography.pxToRem(14),
    marginTop: theme.spacing(5.5),
  },

  [theme.breakpoints.up('md')]: {
    padding: `${theme.spacing(2.25)} ${theme.spacing(4.5)}`,
    fontSize: theme.typography.pxToRem(15),
    marginTop: theme.spacing(6),
  },
}));

// ============================================================================
// JOURNEY PROGRESS INDICATOR & PARTICLES
// ============================================================================

export const ProgressContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  marginTop: theme.spacing(2),
  width: '100%',
  position: 'relative',
  zIndex: 5,
}));

export const ProgressLabel = styled(Box)(({ theme }) => ({
  fontSize: '0.75rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  color: 'rgba(255, 255, 255, 0.45)',
  fontFamily: 'Montserrat, sans-serif',
}));

export const ProgressTrack = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '500px',
  height: '6px',
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '3px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  overflow: 'visible',
  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.5)',
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export const ProgressFill = styled(Box)<{ progress: number }>(({ theme, progress }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: `${progress}%`,
  background: 'linear-gradient(90deg, #3b82f6 0%, #f59e0b 50%, #D4AF37 100%)',
  borderRadius: '3px',
  boxShadow: '0 0 8px rgba(212, 175, 55, 0.5), 0 0 16px rgba(212, 175, 55, 0.3)',
  transition: 'width 0.1s ease-out',
}));

export const ProgressThumb = styled(Box)<{ progress: number }>(({ theme, progress }) => ({
  position: 'absolute',
  top: '50%',
  left: `${progress}%`,
  transform: 'translate(-50%, -50%)',
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  backgroundColor: '#D4AF37',
  border: '2px solid #fff',
  boxShadow: '0 0 12px #D4AF37, 0 0 20px #D4AF37',
  transition: 'left 0.1s ease-out',
  zIndex: 10,
}));

export const ProgressTooltip = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '22px',
  transform: 'translateX(-50%)',
  backgroundColor: 'rgba(10, 29, 44, 0.95)',
  border: '1px solid #D4AF37',
  borderRadius: '6px',
  padding: '2px 6px',
  fontSize: '0.75rem',
  fontWeight: 700,
  color: '#D4AF37',
  boxShadow: '0 4px 10px rgba(0,0,0,0.5), 0 0 8px rgba(212, 175, 55, 0.2)',
  whiteSpace: 'nowrap',
  pointerEvents: 'none',
  fontFamily: 'Montserrat, sans-serif',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: 'rgba(10, 29, 44, 0.95) transparent transparent transparent',
  },
}));

export const ParticleContainer = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: 0,
  right: 0,
  height: '40px',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
  zIndex: 1,
  overflow: 'hidden',
});

export const TimelineParticle = styled(Box)<{ 
  particlecolor: string; 
  duration: number; 
  delay: number; 
  size: number;
  offsety: number;
}>(({ particlecolor, duration, delay, size, offsety }) => ({
  position: 'absolute',
  top: '50%',
  width: `${size}px`,
  height: `${size}px`,
  borderRadius: '50%',
  backgroundColor: particlecolor,
  boxShadow: `0 0 8px ${particlecolor}, 0 0 16px ${particlecolor}`,
  opacity: 0,
  animation: `flowParticle ${duration}s linear infinite`,
  animationDelay: `${delay}s`,

  '@keyframes flowParticle': {
    '0%': {
      left: '0%',
      transform: `translateY(-50%) translateY(${offsety}px)`,
      opacity: 0,
    },
    '5%': {
      opacity: 0.8,
    },
    '25%': {
      transform: `translateY(-50%) translateY(${offsety - 6}px)`,
    },
    '50%': {
      transform: `translateY(-50%) translateY(${offsety + 6}px)`,
    },
    '75%': {
      transform: `translateY(-50%) translateY(${offsety - 6}px)`,
    },
    '95%': {
      opacity: 0.8,
    },
    '100%': {
      left: '100%',
      transform: `translateY(-50%) translateY(${offsety}px)`,
      opacity: 0,
    },
  },
}));



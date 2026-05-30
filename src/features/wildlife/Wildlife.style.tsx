import { styled } from '@mui/material/styles';
import { Box, Button, IconButton } from '@mui/material';
import { motion } from 'motion/react';

// ==================== MAIN WRAPPER ====================
export const WildlifeWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, #0f2234 50%, ${theme.palette.background.default} 100%)`,
}));

// ==================== HERO SECTION ====================
export const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  paddingTop: '7rem',
  paddingBottom: '7rem',
}));

export const HeroBackground = styled(Box)({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
});

export const HeroBackgroundImage = styled(motion.div)({
  position: 'absolute',
  inset: '-4%',
  backgroundSize: 'cover',
  backgroundPosition: 'center 30%',
  opacity: 0.55,
  willChange: 'transform',
  filter: 'saturate(0.85)',
});

// Multi-layer cinematic overlay
export const HeroBackgroundOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  zIndex: 1,
  background: [
    // Dark vignette top
    'linear-gradient(to bottom, rgba(4,10,20,0.85) 0%, rgba(4,10,20,0.2) 25%, rgba(4,10,20,0.1) 60%, rgba(4,10,20,0.92) 100%)',
    // Dark sides — gives text room
    'linear-gradient(to right, rgba(4,10,20,0.7) 0%, rgba(4,10,20,0.2) 55%, rgba(4,10,20,0.55) 100%)',
  ].join(', '),
});

// Ambient glow orbs
export const HeroCinematicOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  zIndex: 2,
  pointerEvents: 'none',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '30%',
    left: '20%',
    width: '700px',
    height: '500px',
    background: 'radial-gradient(ellipse, rgba(16,185,129,0.055) 0%, transparent 65%)',
    filter: 'blur(40px)',
    transform: 'translate(-50%, -50%)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '25%',
    right: '15%',
    width: '500px',
    height: '400px',
    background: 'radial-gradient(ellipse, rgba(212,175,55,0.05) 0%, transparent 65%)',
    filter: 'blur(60px)',
  },
});

export const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
  maxWidth: '1280px',
  width: '100%',
  margin: '0 auto',
  textAlign: 'center',
  padding: '0 1.5rem',
  [theme.breakpoints.up('lg')]: {
    textAlign: 'left',
    padding: '0 3rem',
    maxWidth: '780px',
    marginLeft: '0',
    marginRight: 'auto',
    paddingLeft: '6rem',
  },
}));

export const HeroBadge = styled(motion.div)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1.25),
  marginBottom: theme.spacing(4),
  padding: `0.45rem 1.1rem 0.45rem 0.75rem`,
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(16,185,129,0.3)',
  borderRadius: '9999px',
  backdropFilter: 'blur(16px)',
  transition: 'all 0.3s ease',
  '& .badge-dot': {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    background: '#10b981',
    boxShadow: '0 0 10px #10b981, 0 0 20px rgba(16,185,129,0.4)',
    animation: 'heroDotPulse 2s ease-in-out infinite',
    flexShrink: 0,
  },
  '@keyframes heroDotPulse': {
    '0%, 100%': { opacity: 1, transform: 'scale(1)' },
    '50%': { opacity: 0.5, transform: 'scale(1.35)' },
  },
  '& .MuiSvgIcon-root': {
    color: '#10b981',
    fontSize: '0.9rem',
  },
  '& span': {
    color: '#10b981',
    fontWeight: 700,
    fontSize: '0.7rem',
    fontFamily: '"Inter", sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.22em',
  },
}));

export const HeroTitle = styled(motion.div)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& h1': {
    fontFamily: '"Bebas Neue", sans-serif',
    fontWeight: 900,
    lineHeight: 0.9,
    marginBottom: theme.spacing(2.5),
    '& .name': {
      display: 'block',
      fontSize: 'clamp(4.5rem, 11vw, 8.5rem)',
      color: theme.palette.common.white,
      letterSpacing: '0.02em',
    },
    '& .surname': {
      display: 'block',
      fontSize: 'clamp(3rem, 8vw, 6rem)',
      background: 'linear-gradient(110deg, #D4AF37 0%, #10b981 45%, #D4AF37 100%)',
      backgroundSize: '200% auto',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'heroShimmer 5s linear infinite',
      letterSpacing: '0.04em',
    },
  },
  '@keyframes heroShimmer': {
    '0%': { backgroundPosition: '0% center' },
    '100%': { backgroundPosition: '200% center' },
  },
  '& .tagline': {
    fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
    color: 'rgba(255,255,255,0.45)',
    fontFamily: '"Inter", sans-serif',
    fontWeight: 400,
    letterSpacing: '0.28em',
    textTransform: 'uppercase',
  },
}));

export const HeroDescription = styled(motion.p)(({ theme }) => ({
  fontSize: 'clamp(0.9rem, 1.6vw, 1rem)',
  color: 'rgba(255,255,255,0.55)',
  fontFamily: '"Inter", sans-serif',
  lineHeight: 1.8,
  maxWidth: '520px',
  margin: '0 auto',
  marginBottom: theme.spacing(5),
  letterSpacing: '0.04em',
  [theme.breakpoints.up('lg')]: {
    margin: '0 0',
    marginBottom: theme.spacing(5),
  },
}));

export const HeroButtonGroup = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(8),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'flex-start',
  },
}));

export const EmergencyButton = styled('a')(({ theme }) => ({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1.25),
  padding: `${theme.spacing(2)} ${theme.spacing(4.5)}`,
  background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
  color: theme.palette.common.white,
  borderRadius: '0.5rem',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '0.18em',
  fontSize: '0.78rem',
  textDecoration: 'none',
  boxShadow: '0 8px 32px rgba(220,38,38,0.45), 0 2px 8px rgba(0,0,0,0.4)',
  transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
  overflow: 'hidden',
  zIndex: 1,
  '& .shine': {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.18) 50%, transparent 65%)',
    transform: 'translateX(-100%)',
    transition: 'transform 0.8s ease',
    pointerEvents: 'none',
  },
  // pulsing outer ring
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '-3px',
    borderRadius: '0.65rem',
    border: '1.5px solid rgba(220,38,38,0.5)',
    animation: 'emergencyRing 2s ease-out infinite',
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: '-6px',
    borderRadius: '0.8rem',
    border: '1px solid rgba(220,38,38,0.25)',
    animation: 'emergencyRing 2s ease-out 0.5s infinite',
    pointerEvents: 'none',
  },
  '@keyframes emergencyRing': {
    '0%': { opacity: 1, transform: 'scale(1)' },
    '100%': { opacity: 0, transform: 'scale(1.18)' },
  },
  '&:hover': {
    background: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)',
    boxShadow: '0 12px 40px rgba(220,38,38,0.65), 0 4px 16px rgba(0,0,0,0.5)',
    transform: 'translateY(-2px)',
  },
  '&:hover .shine': {
    transform: 'translateX(100%)',
  },
}));

export const SecondaryButton = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1.25),
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  background: 'rgba(255,255,255,0.05)',
  color: 'rgba(255,255,255,0.85)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: '0.5rem',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.18em',
  fontSize: '0.78rem',
  textDecoration: 'none',
  backdropFilter: 'blur(16px)',
  transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
  '& .MuiSvgIcon-root': { transition: 'transform 0.3s ease' },
  '&:hover': {
    background: 'rgba(255,255,255,0.10)',
    borderColor: 'rgba(255,255,255,0.30)',
    color: '#fff',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)',
    '& .MuiSvgIcon-root': { transform: 'scale(1.15)' },
  },
}));

// =========================
// STATS GRID
// =========================

export const StatsGrid = styled(motion.div)(({ theme }) => ({
  display: 'grid',
  width: '100%',

  opacity: 0.84,

  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '1rem',

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: '1.5rem',
  },
}));

// =========================
// STAT CARD
// =========================

export const StatCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  overflow: 'visible',

  width: '100%',
  minWidth: 0,

  minHeight: '240px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  textAlign: 'center',

  padding: '4.5rem 1.25rem 1.75rem',

  // Liquid glass
  background: 'rgba(255,255,255,0.06)',
  backdropFilter: 'blur(24px) saturate(180%)',
  WebkitBackdropFilter: 'blur(24px) saturate(180%)',

  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '2rem',

  boxShadow: `
    inset 0 1px 0 rgba(255,255,255,0.16),
    inset 0 -1px 0 rgba(255,255,255,0.04),
    0 10px 30px rgba(0,0,0,0.20)
  `,

  transition:
    'transform 0.35s ease, background 0.35s ease, border-color 0.35s ease',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',

    background: `
      linear-gradient(
        135deg,
        rgba(255,255,255,0.18) 0%,
        rgba(255,255,255,0.05) 38%,
        rgba(255,255,255,0.01) 100%
      )
    `,

    pointerEvents: 'none',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',

    background: `
      radial-gradient(
        circle at top left,
        rgba(255,255,255,0.10),
        transparent 45%
      )
    `,

    pointerEvents: 'none',
  },

  '&:hover': {
    transform: 'translateY(-8px)',

    background: 'rgba(255,255,255,0.10)',

    border: '1px solid rgba(255,255,255,0.18)',

    boxShadow: `
      inset 0 1px 0 rgba(255,255,255,0.20),
      inset 0 -1px 0 rgba(255,255,255,0.06),
      0 18px 40px rgba(0,0,0,0.24)
    `,
  },

  [theme.breakpoints.down('md')]: {
    minHeight: '210px',
    borderRadius: '1.7rem',
  },

  [theme.breakpoints.down('sm')]: {
    minHeight: '185px',

    padding: '3.8rem 0.9rem 1.2rem',

    borderRadius: '1.4rem',
  },
}));

// =========================
// FLOATING ICON
// =========================

export const StatIconWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translate(-50%, -50%)',

  width: 54,
  height: 54,

  borderRadius: '50%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backdropFilter: 'blur(18px)',
  WebkitBackdropFilter: 'blur(18px)',

  border: '1px solid rgba(255,255,255,0.12)',

  boxShadow: `
    inset 0 1px 0 rgba(255,255,255,0.12),
    0 6px 18px rgba(0,0,0,0.22)
  `,

  zIndex: 5,

  '& svg': {
    fontSize: '1rem',
    color: '#fff',
  },

  [theme.breakpoints.down('sm')]: {
    width: 46,
    height: 46,

    '& svg': {
      fontSize: '0.9rem',
    },
  },
}));

// =========================
// VALUE
// =========================

export const StatValue = styled(Box)(({ theme }) => ({
  fontSize: '2.4rem',
  fontWeight: 800,
  lineHeight: 1,

  color: '#fff',

  marginBottom: '0.75rem',

  letterSpacing: '-0.03em',

  whiteSpace: 'nowrap',

  [theme.breakpoints.down('xl')]: {
    fontSize: '2.2rem',
  },

  [theme.breakpoints.down('lg')]: {
    fontSize: '2rem',
  },

  [theme.breakpoints.down('md')]: {
    fontSize: '1.8rem',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '1.6rem',
    marginBottom: '0.5rem',
  },
}));

// =========================
// LABEL
// =========================

export const StatLabel = styled(Box)(({ theme }) => ({
  fontSize: '0.70rem',
  fontWeight: 500,

  lineHeight: 1.5,

  textTransform: 'uppercase',
  letterSpacing: '0.18em',

  color: 'rgba(255,255,255,0.72)',

  maxWidth: '92%',

  [theme.breakpoints.down('md')]: {
    fontSize: '0.82rem',
    letterSpacing: '0.15em',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '0.72rem',
    letterSpacing: '0.12em',
    lineHeight: 1.4,
  },
}));



export const ScrollIndicator = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(5),
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1.25),
  cursor: 'default',
  // mouse icon
  '& .mouse': {
    width: '22px',
    height: '34px',
    borderRadius: '11px',
    border: '1.5px solid rgba(255,255,255,0.25)',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '6px',
  },
  '& .mouse-dot': {
    width: '3px',
    height: '7px',
    borderRadius: '2px',
    background: theme.palette.primary.main,
  },
  '& span': {
    color: 'rgba(255,255,255,0.3)',
    fontSize: '0.6rem',
    fontFamily: '"Inter", sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.25em',
    fontWeight: 600,
  },
}));

// Exported alias (kept for compatibility, points to HeroBackgroundOverlay visuals)
export const HeroAmbientGlow = HeroCinematicOverlay;

// ==================== SECTION COMMON ====================
export const Section = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '2rem 1rem',
  overflow: 'hidden',
  background: `linear-gradient(to bottom, ${theme.palette.background.default}, #0d2538, ${theme.palette.background.default})`,
  [theme.breakpoints.up('sm')]: {
    padding: '2.5rem 1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    padding: '3rem 2rem',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '4rem 3rem',
  },
}));

export const SectionBackground = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to bottom, rgba(10, 29, 44, 0), rgba(10, 29, 44, 0.3), rgba(10, 29, 44, 0.8))',
});

export const SectionContainer = styled(Box)({
  maxWidth: '1280px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 10,
});

export const SectionHeader = styled(motion.div)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(5),
  },
}));

export const SectionTitle = styled('h2')(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
  fontFamily: '"Bebas Neue", sans-serif',
  fontWeight: 900,
  marginBottom: theme.spacing(2),
  color: theme.palette.common.white,
  '& .highlight': {
    background: `linear-gradient(to right, ${theme.palette.primary.main}, #10b981)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
}));

export const SectionDescription = styled('p')(({ theme }) => ({
  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
  color: 'rgba(255, 255, 255, 0.6)',
  maxWidth: '640px',
  margin: '0 auto',
}));

// ==================== FEATURED RESCUES (YOUTUBE) ====================
export const VideoPlayerContainer = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  aspectRatio: '16/9',
  borderRadius: '1.5rem',
  overflow: 'hidden',
  background: 'rgba(10, 29, 44, 0.6)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  marginBottom: theme.spacing(6),
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
}));

export const LoadingState = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(17, 34, 64, 0.6)',
  backdropFilter: 'blur(10px)',
  '& .text-center': {
    textAlign: 'center',
  },
}));

export const Spinner = styled(Box)({
  width: '4rem',
  height: '4rem',
  border: '4px solid rgba(239, 68, 68, 0.2)',
  borderTop: '4px solid #ef4444',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
  margin: '0 auto 1rem',
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
});

export const VideoFrame = styled(motion.div)({
  position: 'absolute',
   inset: 0,
  '& iframe': {
    width: '100%',
    height: '100%',
  },
});

export const VideoStats = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  display: 'flex',
  gap: theme.spacing(1.5),
}));

export const VideoStatBadge = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  background: 'rgba(220, 38, 38, 0.9)',
  borderRadius: '0.5rem',
  fontWeight: 700,
  color: theme.palette.common.white,
  fontSize: '0.875rem',
}));

export const VideoGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(5, 1fr)',
  },
}));

export const VideoThumbnail = styled(motion.button)<{ active?: boolean }>(({ theme, active }) => ({
  position: 'relative',
  aspectRatio: '16/9',
  borderRadius: '0.75rem',
  overflow: 'hidden',
  border: active ? `2px solid ${theme.palette.error.main}` : '2px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  background: theme.palette.background.paper,
  padding: 0,
  boxShadow: active ? `0 20px 25px -5px ${theme.palette.error.main}33` : 'none',
  '&:hover': {
    borderColor: active ? theme.palette.error.main : 'rgba(255, 255, 255, 0.3)',
  },
}));

export const ThumbnailImage = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: '#112240',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

export const ThumbnailOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'rgba(10, 29, 44, 0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background 0.3s ease',
  '&:hover': {
    background: 'rgba(10, 29, 44, 0.6)',
  },
});

export const ThumbnailStats = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(1),
  background: 'linear-gradient(to top, rgba(10, 29, 44, 0.9), transparent)',
  '& p': {
    color: theme.palette.common.white,
    fontSize: '0.75rem',
    fontWeight: 700,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

export const ThumbnailTitle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(1.5),
  background: 'linear-gradient(to bottom, rgba(10, 29, 44, 0.95), transparent)',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  pointerEvents: 'none',
  'button:hover &': {
    opacity: 1,
  },
  '& span': {
    color: theme.palette.common.white,
    fontSize: '0.75rem',
    fontWeight: 700,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textAlign: 'left',
    lineHeight: 1.3,
  },
}));

export const VideoMetadataCard = styled(motion.div)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(3),
  background: 'rgba(17, 34, 64, 0.5)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(212, 175, 55, 0.2)',
  borderRadius: '1rem',
  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
}));

export const VideoMetadataHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
}));

export const VideoMetadataTitle = styled('h3')(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 800,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(1),
  lineHeight: 1.3,
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
}));

export const VideoMetadataLocation = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: 'rgba(212, 175, 55, 0.9)',
  fontSize: '0.95rem',
  fontWeight: 600,
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
  },
}));

export const VideoMetadataActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
}));

export const ShareButton = styled(motion.button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(244, 208, 63, 0.15))',
  border: '1px solid rgba(212, 175, 55, 0.3)',
  borderRadius: '0.75rem',
  color: theme.palette.primary.main,
  fontWeight: 700,
  fontSize: '0.875rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.25), rgba(244, 208, 63, 0.25))',
    borderColor: theme.palette.primary.main,
    transform: 'translateY(-2px)',
  },
  '& span': {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'inline',
    },
  },
}));

export const NavigationButton = styled(motion.button)<{ direction: 'left' | 'right' }>(({ theme, direction }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  ...(direction === 'left' ? { left: theme.spacing(2) } : { right: theme.spacing(2) }),
  width: '48px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(220, 38, 38, 0.9)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '50%',
  color: theme.palette.common.white,
  cursor: 'pointer',
  zIndex: 10,
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)',
  '&:hover': {
    background: 'rgba(239, 68, 68, 1)',
    transform: 'translateY(-50%) scale(1.1)',
    boxShadow: '0 8px 25px rgba(220, 38, 38, 0.5)',
  },
  '& .MuiSvgIcon-root': {
    fontSize: 28,
  },
}));

export const ChannelButton = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: `${theme.spacing(2.5)} ${theme.spacing(5)}`,
  background: 'linear-gradient(to right, #dc2626, #b91c1c)',
  color: theme.palette.common.white,
  borderRadius: '1rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  fontSize: '0.875rem',
  textDecoration: 'none',
  boxShadow: '0 25px 50px -12px rgba(220, 38, 38, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(to right, #ef4444, #dc2626)',
    transform: 'scale(1.05)',
  },
}));

// ==================== SUBSCRIBE SECTION ====================
export const SubscribeContainer = styled(Box)({
  maxWidth: '640px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 10,
  textAlign: 'center',
});

export const YouTubeSubscribeButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(6),
}));

export const SubscribeButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

export const SubscribeBenefits = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  paddingTop: theme.spacing(6),
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
}));

export const BenefitsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));

export const BenefitCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '0.5rem',
  '& .icon': {
    fontSize: '1.5rem',
    marginBottom: theme.spacing(1),
  },
  '& p': {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '0.875rem',
    fontWeight: 600,
  },
}));

// ==================== SPECIES EXPERTISE ====================
export const SpeciesGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(4),
  },
}));

export const SpeciesCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  background: 'linear-gradient(135deg, rgba(10, 29, 44, 0.95) 0%, rgba(17, 34, 64, 0.95) 100%)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(212, 175, 55, 0.2)',
  borderRadius: '16px',
  overflow: 'hidden',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  willChange: 'transform',
  '&:hover': {
    borderColor: '#D4AF37',
    transform: 'translateY(-6px)',
    boxShadow: '0 12px 40px rgba(212, 175, 55, 0.3)',
  },
}));

export const DangerBar = styled(Box)<{ danger?: 'High' | 'Low' }>(({ theme, danger }) => ({
  position: 'absolute',
  top: '10px',
  right: '10px',
  width: '40px',
  height: '40px',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
  background: danger === 'High' 
    ? 'rgba(239, 68, 68, 0.95)' 
    : 'rgba(16, 185, 129, 0.95)',
  border: danger === 'High'
    ? '1px solid rgba(239, 68, 68, 0.6)'
    : '1px solid rgba(16, 185, 129, 0.6)',
  transition: 'all 0.3s ease',
  '& svg': {
    fontSize: '1.25rem',
  },
}));

export const SpeciesImage = styled(Box)({  
  position: 'relative',
  height: '160px',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
    willChange: 'transform',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
});

export const SpeciesImageOverlay = styled(Box)({  
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to bottom, transparent 40%, rgba(10, 29, 44, 0.95) 100%)',
});

export const SpeciesContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 1.75, 1.75),
}));

export const SpeciesHeader = styled(Box)({  
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginBottom: '16px',
});

export const SpeciesInfo = styled(Box)({
  flex: 1,
});

export const SpeciesName = styled('h3')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 700,
  color: '#ffffff',
  lineHeight: 1.2,
   marginBottom: '2px',
}));

export const SpeciesScientific = styled('p')({  
  color: 'rgba(255, 255, 255, 0.6)',
  fontSize: '0.813rem',
  fontStyle: 'italic',
  margin: 0,
});

export const DangerIcon = styled(Box)<{ danger?: 'High' | 'Low' }>(({ theme, danger }) => ({
  display: 'none',
}));

export const SpeciesFooter = styled(Box)({  
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const CategoryBadge = styled('span')<{ category?: 'Venomous' | 'Non-Venomous' }>(({ theme, category }) => ({
  fontSize: '0.7rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.4px',
  padding: '4px 10px',
  borderRadius: '6px',
  background: category === 'Venomous' 
    ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%)' 
    : 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%)',
  color: category === 'Venomous' ? '#ef4444' : '#10b981',
  border: category === 'Venomous'
    ? '1px solid rgba(239, 68, 68, 0.3)'
    : '1px solid rgba(16, 185, 129, 0.3)',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  '& svg': {
    fontSize: '0.875rem',
  },
}));

export const RiskLabel = styled('span')<{ danger?: 'High' | 'Low' }>(({ danger }) => ({
  fontSize: '0.75rem',
  fontWeight: 600,
  color: danger === 'High' ? '#ef4444' : '#10b981',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  '&::before': {
    content: '""',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: danger === 'High' ? '#ef4444' : '#10b981',
    display: 'inline-block',
  },
}));

// ==================== TESTIMONIALS ====================
export const TestimonialsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(2.5),
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(3),
  },
}));

export const TestimonialCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '0.75rem',
  padding: theme.spacing(2.5),
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: `${theme.palette.primary.main}66`,
  },
}));

export const TestimonialRating = styled(Box)({
  display: 'flex',
  gap: '0.25rem',
  marginBottom: '0.75rem',
});

export const TestimonialQuote = styled('p')(({ theme }) => ({
  fontSize: '0.875rem',
  color: 'rgba(255, 255, 255, 0.8)',
  lineHeight: 1.6,
  marginBottom: theme.spacing(2),
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}));

export const TestimonialAuthor = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
}));

export const AuthorAvatar = styled(Box)(({ theme}) => ({
  width: '1.75rem',
  height: '1.75rem',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, #10b981)`,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  '& span': {
    color: theme.palette.common.white,
    fontWeight: 900,
    fontSize: '0.65rem',
  },
}));

export const AuthorInfo = styled(Box)({
  flex: 1,
  minWidth: 0,
});

export const AuthorName = styled('p')(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 700,
  fontSize: '0.8rem',
  lineHeight: 1.1,
  marginBottom: '2px',
}));

export const AuthorLocation = styled('p')({
  color: 'rgba(255, 255, 255, 0.5)',
  fontSize: '0.7rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  '& svg': {
    fontSize: '0.75rem',
  },
});

export const TestimonialRescueBadge = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  paddingTop: theme.spacing(2),
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  '& .badge': {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.375rem',
    padding: '0.375rem 0.625rem',
    background: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid rgba(16, 185, 129, 0.2)',
    borderRadius: '9999px',
    '& span': {
      color: theme.palette.success.main,
      fontWeight: 700,
      fontSize: '0.75rem',
    },
  },
}));

// ==================== HOW IT WORKS ====================
export const StepsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: theme.spacing(4),
  },
}));

export const StepCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  height: '100%',
}));

export const StepCardInner = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(10, 29, 44, 0.95) 0%, rgba(17, 34, 64, 0.95) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(212, 175, 55, 0.2)',
  borderRadius: '20px',
  padding: theme.spacing(4, 3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(2.5),
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
     right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
  },
  '&:hover': {
    borderColor: '#D4AF37',
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(212, 175, 55, 0.3)',
    '&::before': {
      opacity: 1,
    },
  },
}));

export const StepIconWrapper = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)',
  position: 'relative',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 8px 24px rgba(212, 175, 55, 0.4)',
  '& .MuiSvgIcon-root': {
    fontSize: '36px',
    color: '#0a1d2c',
    position: 'relative',
    zIndex: 1,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    padding: '2px',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.1))',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  },
  '.MuiBox-root:hover &': {
    transform: 'scale(1.1) rotate(5deg)',
    boxShadow: '0 12px 32px rgba(212, 175, 55, 0.6)',
  },
}));

export const StepNumber = styled(Box)({
  position: 'absolute',
  top: '16px',
  right: '16px',
  width: '44px',
  height: '44px',
  borderRadius: '12px',
  background: 'rgba(212, 175, 55, 0.15)',
  border: '1px solid rgba(212, 175, 55, 0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.125rem',
  fontWeight: 700,
  color: '#D4AF37',
  fontFamily: '"Bebas Neue", sans-serif',
  letterSpacing: '1px',
  transition: 'all 0.3s ease',
  '.MuiBox-root:hover &': {
    background: 'rgba(212, 175, 55, 0.25)',
    borderColor: '#D4AF37',
    transform: 'scale(1.1)',
  },
});

export const StepTitle = styled('h3')(({ theme }) => ({
  fontSize: '1.125rem',
  fontWeight: 700,
  color: '#ffffff',
  marginBottom: theme.spacing(1.5),
  lineHeight: 1.3,
}));

export const StepDescription = styled('p')(({ theme }) => ({
  fontSize: '0.875rem',
  color: 'rgba(255, 255, 255, 0.7)',
  lineHeight: 1.6,
  margin: 0,
}));

export const StepConnector = styled(Box)(({ theme }) => ({
  display: 'none',
  '@media (min-width: 1024px)': {
    display: 'block',
    position: 'absolute',
    top: '40px',
    right: '-32px',
    width: '32px',
    height: '2px',
    background: 'linear-gradient(to right, #D4AF37, rgba(212, 175, 55, 0.2))',
    zIndex: 1,
    '&::after': {
      content: '""',
      position: 'absolute',
      right: '-4px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 0,
      height: 0,
      borderLeft: '6px solid #D4AF37',
      borderTop: '4px solid transparent',
      borderBottom: '4px solid transparent',
    },
  },
}));

// ==================== CTA SECTION ====================
export const CTAContainer = styled(Box)({
  maxWidth: '640px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 10,
});

export const CTAContent = styled(motion.div)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(5),
}));

export const CTAButton = styled(motion.a)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: `${theme.spacing(2.5)} ${theme.spacing(4)}`,
  background: 'linear-gradient(to right, #dc2626, #b91c1c)',
  color: theme.palette.common.white,
  borderRadius: '0.75rem',
  fontWeight: 900,
  fontSize: '0.875rem',
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  textDecoration: 'none',
  boxShadow: '0 25px 50px -12px rgba(185, 28, 28, 0.5)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(to right, #ef4444, #dc2626)',
  },
}));

export const SafetyNotice = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5),
  paddingTop: theme.spacing(4),
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  textAlign: 'center',
}));

export const SafetyHeader = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
  '& h3': {
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: '0.875rem',
    margin: 0,
  },
}));

export const SafetyText = styled('p')(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.6)',
  fontSize: '0.75rem',
  maxWidth: '640px',
  margin: '0 auto',
  '& a': {
    color: theme.palette.primary.main,
    fontWeight: 700,
    textDecoration: 'underline',
    '&:hover': {
      color: `${theme.palette.primary.main}cc`,
    },
  },
}));

// ==================== STICKY EMERGENCY BUTTON ====================
export const StickyEmergencyButton = styled(motion.a)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(3),
  left: theme.spacing(3),
  zIndex: 50,
  width: '4rem',
  height: '4rem',
  background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
  color: theme.palette.common.white,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 25px 50px -12px rgba(185, 28, 28, 0.5)',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  '&:hover': {
    background: 'linear-gradient(135deg, #ef4444, #dc2626)',
    animation: 'none',
  },
  '@keyframes pulse': {
    '0%, 100%': { opacity: 1 },
    '50%': { opacity: 0.8 },
  },
  [theme.breakpoints.up('md')]: {
    width: '5rem',
    height: '5rem',
  },
  '& .indicator': {
    position: 'absolute',
    top: '-0.25rem',
    right: '-0.25rem',
    width: '1rem',
    height: '1rem',
    background: theme.palette.success.main,
    borderRadius: '50%',
    border: `2px solid ${theme.palette.background.default}`,
  },
  '& .indicator-ping': {
    position: 'absolute',
    top: '-0.25rem',
    right: '-0.25rem',
    width: '1rem',
    height: '1rem',
    background: theme.palette.success.main,
    borderRadius: '50%',
    animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
  },
  '@keyframes ping': {
    '75%, 100%': {
      transform: 'scale(2)',
      opacity: 0,
    },
  },
}));

// ==================== WARNING MESSAGE SECTION ====================
export const WarningContainer = styled(motion.div)(({ theme }) => ({
  maxWidth: '900px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 10,
  padding: '1.75rem 2rem',
  borderRadius: '1.5rem',
  background: 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(20px)',
  border: '1.5px solid rgba(255, 255, 255, 0.15)',
  boxShadow: `
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 1px rgba(255, 255, 255, 0.1),
    0 0 60px rgba(59, 130, 246, 0.1)
  `,
  [theme.breakpoints.down('sm')]: {
    padding: '1.25rem 1.5rem',
    borderRadius: '1.25rem',
  },
}));

export const WarningTitle = styled(motion.h2)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 900,
  color: theme.palette.common.white,
  margin: '0 0 1rem 0',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.75rem',
  background: 'linear-gradient(to right, #fbbf24, #f59e0b, #fbbf24)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  letterSpacing: '0.05em',
  '& svg': {
    color: '#fbbf24',
    fontSize: '1.75rem',
    WebkitTextFillColor: '#fbbf24',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
  },
}));

export const WarningContent = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.875rem',
  textAlign: 'center',
}));

export const WarningSection = styled(motion.div)(({ theme }) => ({
  lineHeight: '1.6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.75rem',
  '&:first-of-type': {
    fontSize: '1rem',
    fontWeight: 600,
    color: theme.palette.common.white,
    marginBottom: '0.25rem',
  },
  '& p': {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: '0.9rem',
    margin: '0',
  },
  '& strong': {
    color: '#fbbf24',
    fontWeight: 700,
  },
  '& svg': {
    fontSize: '1.25rem',
    flexShrink: 0,
  },
}));

export const WarningHighlight = styled('span')({
  background: 'linear-gradient(to right, #fbbf24, #f59e0b)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 700,
});

export const WarningFooter = styled(motion.div)(({ theme }) => ({
  marginTop: '0.75rem',
  paddingTop: '0.75rem',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  color: 'rgba(255, 255, 255, 0.75)',
  fontSize: '0.9rem',
  fontWeight: 600,
  letterSpacing: '0.05em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  '& svg': {
    fontSize: '1.25rem',
  },
}));

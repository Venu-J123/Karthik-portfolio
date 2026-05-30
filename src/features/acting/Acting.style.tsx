import { styled } from '@mui/material/styles';
import { Box, Button, Container, Paper } from '@mui/material';


// Main Wrapper
export const ActingWrapper = styled(Box)(({ theme }) => ({
  paddingBottom: '5rem',
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, #0f2234 50%, ${theme.palette.background.default} 100%)`,
}));

// ==================== HERO SECTION ====================
export const HeroStickyWrapper = styled(Box)({
  position: 'sticky',
  top: 0,
  height: '100vh',
  zIndex: 0,
});

export const CinematicHeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  overflow: 'hidden',

  background: `
    radial-gradient(
      circle at top left,
      rgba(201,168,76,0.08),
      transparent 30%
    ),

    linear-gradient(
      135deg,
      #061018 0%,
      #0b1721 40%,
      #10202c 100%
    )
  `,
}));
export const CinematicHeroGrid = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 5,

  minHeight: '100vh',

  display: 'grid',
  gridTemplateColumns: '1fr',

  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: '1.1fr 0.9fr 180px',
  },
}));
export const CinematicHeroContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  padding: '4rem 1.5rem 2rem',

  [theme.breakpoints.up('md')]: {
    padding: '8rem 4rem',
  },

  [theme.breakpoints.up('lg')]: {
    paddingLeft: '7rem',
    paddingRight: '2rem',
  },
}));
export const CinematicHeroLabel = styled(Box)(({ theme }) => ({
  fontSize: '0.72rem',
  letterSpacing: '0.35em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.8)',
  marginBottom: '2rem',
  fontWeight: 700,
}));
export const CinematicHeroTitle = styled('h1')(({ theme }) => ({
  fontFamily: '"Cormorant Garamond", serif',

  fontWeight: 500,

  fontSize: 'clamp(3.5rem, 9vw, 7rem)',

  lineHeight: 0.95,

  letterSpacing: '-0.03em',

  color: theme.palette.primary.main,

  margin: 0,

  maxWidth: '700px',

  [theme.breakpoints.up('md')]: {
    fontSize: 'clamp(5rem, 8vw, 8rem)',
  },
}));
export const CinematicHeroSubtitle = styled(Box)(({ theme }) => ({
  marginTop: '2rem',

  fontSize: '1.1rem',

  color: 'rgba(255,255,255,0.72)',

  maxWidth: '500px',

  lineHeight: 1.7,

  fontWeight: 400,
}));
export const CinematicHeroButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  gap: '1rem',

  marginTop: '3rem',

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

export const CinematicPrimaryButton = styled(Button)(({ theme }) => ({
  height: '64px',

  padding: '0 2.2rem',

  borderRadius: 0,

  background: '#c89b6d',

  color: '#120b08',

  fontWeight: 700,

  letterSpacing: '0.04em',

  fontSize: '0.95rem',

  textTransform: 'none',

  '&:hover': {
    background: '#d6ae7b',
  },
}));

export const CinematicSecondaryButton = styled(Button)(({ theme }) => ({
  height: '64px',

  padding: '0 2.2rem',

  borderRadius: 0,

  border: '1px solid rgba(200,155,109,0.45)',

  color: '#d6ae7b',

  background: 'transparent',

  fontWeight: 600,

  letterSpacing: '0.04em',

  fontSize: '0.95rem',

  textTransform: 'none',

  '&:hover': {
    background: 'rgba(255,255,255,0.03)',
  },
}));
export const CinematicHeroImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',

  minHeight: '55vh',
  [theme.breakpoints.up('lg')]: {
    minHeight: '100vh',
  },
}));
export const CinematicHeroImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  // desktop
  objectPosition: 'center top',
  [theme.breakpoints.down('md')]: {
    objectPosition: 'center 70%',
  },

  filter: `
    brightness(0.78)
    contrast(1.05)
    saturate(0.9)
  `,
}));
export const CinematicHeroImageOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,

  background: `
    linear-gradient(
      to right,
      rgba(11,7,5,1) 0%,
      rgba(11,7,5,0.55) 20%,
      rgba(11,7,5,0.15) 45%,
      rgba(11,7,5,0.4) 100%
    )
  `,
});
export const CinematicHeroStats = styled(Box)(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.up('lg')]: {
    display: 'flex',

    flexDirection: 'column',

    justifyContent: 'center',

    gap: '4rem',

    paddingRight: '3rem',
  },
}));
export const CinematicHeroStat = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
export const CinematicHeroStatValue = styled(Box)({
  fontFamily: '"Cormorant Garamond", serif',

  fontSize: '4rem',

  color: 'white',

  lineHeight: 1,
});
export const CinematicHeroStatLabel = styled(Box)({
  marginTop: '0.75rem',

  color: 'rgba(255,255,255,0.55)',

  fontStyle: 'italic',

  fontSize: '1rem',
});


export const ShowreelStackContainer = styled(Box)({
  height: '70vh',
  position: 'relative',
  overflow: 'hidden',
  background: '#0a1d2c',
  perspective: '1400px',
});

export const ReelCardWrapper = styled(Box)({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 1.5rem',
  background: '#0a1d2c',
});

export const ReelCardInner = styled(Box)({
  position: 'relative',
  width: '100%',
  maxWidth: '62rem',
  aspectRatio: '16/9',
  borderRadius: '1rem',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.4s ease',
});

export const ReelThumbnail = styled('img')({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  opacity: 0.5,
  transition: 'all 0.7s ease',
  '.group:hover &': {
    opacity: 0.65,
    transform: 'scale(1.05)',
  },
});

export const ReelVignetteTop = styled(Box)({
  position: 'absolute',
  insetX: 0,
  top: 0,
  height: '8rem',
  background: 'linear-gradient(to bottom, rgba(10,29,44,0.75), transparent)',
});
export const ReelVignetteBottom = styled(Box)({
  position: 'absolute',
  insetX: 0,
  bottom: 0,
  height: '11rem',
  background: 'linear-gradient(to top, rgba(10,29,44,1), rgba(10,29,44,0.55), transparent)',
});

export const ReelScanLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  insetX: 0,
  top: '50%',
  height: '1px',
  background: `linear-gradient(to right, transparent, ${theme.palette.primary.main}, transparent)`,
  opacity: 0,
  transition: 'opacity 0.7s ease',
  '.group:hover &': {
    opacity: 0.5,
  },
}));

export const ReelCornerAccent = styled(Box)<{ corner: string }>(({ theme, corner }) => {
  const positions: Record<string, any> = {
    'top-left': { top: '1rem', left: '1rem', borderTop: `2px solid ${theme.palette.primary.main}66`, borderLeft: `2px solid ${theme.palette.primary.main}66` },
    'top-right': { top: '1rem', right: '1rem', borderTop: `2px solid ${theme.palette.primary.main}66`, borderRight: `2px solid ${theme.palette.primary.main}66` },
    'bottom-left': { bottom: '1rem', left: '1rem', borderBottom: `2px solid ${theme.palette.primary.main}66`, borderLeft: `2px solid ${theme.palette.primary.main}66` },
    'bottom-right': { bottom: '1rem', right: '1rem', borderBottom: `2px solid ${theme.palette.primary.main}66`, borderRight: `2px solid ${theme.palette.primary.main}66` },
  };

  return {
    position: 'absolute',
    width: '1.25rem',
    height: '1.25rem',
    transition: 'all 0.5s ease',
    ...positions[corner],
    '.group:hover &': {
      width: '1.75rem',
      height: '1.75rem',
      borderColor: `${theme.palette.primary.main}b3`,
    },
  };
});

export const ReelTopRow = styled(Box)({
  position: 'absolute',
  top: '1.25rem',
  left: '1.5rem',
  right: '1.5rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
export const ReelLabelBadge = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.375rem',
  padding: '0.25rem 0.75rem',
  borderRadius: '9999px',
  backgroundColor: `${theme.palette.primary.main}1f`,
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.primary.main}33`,
}));

export const ReelDuration = styled(Box)({
  color: 'rgba(255,255,255,0.45)',
  fontSize: '0.625rem',
  fontFamily: 'monospace',
  tabularNums: 'tabular-nums',
  backgroundColor: 'rgba(10,29,44,0.5)',
  backdropFilter: 'blur(10px)',
  padding: '0.125rem 0.5rem',
  borderRadius: '0.25rem',
});

export const ReelWatermark = styled(Box)({
  position: 'absolute',
  top: '1rem',
  right: '4rem',
  fontFamily: '"Bebas Neue", sans-serif',
  fontSize: '6rem',
  fontWeight: 700,
  lineHeight: 1,
  color: 'rgba(255,255,255,0.04)',
  userSelect: 'none',
  pointerEvents: 'none',
});

export const ReelPlayButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& .play-circle': {
    position: 'relative',
    width: '5rem',
    height: '5rem',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.black,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 50px rgba(201,168,76,0.5), 0 0 100px rgba(201,168,76,0.15)',
    '& .ping': {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      border: `2px solid ${theme.palette.primary.main}80`,
      animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      opacity: 0.2,
    },
  },
  '@keyframes ping': {
    '75%, 100%': {
      transform: 'scale(2)',
      opacity: 0,
    },
  },
}));

export const ReelBottomInfo = styled(Box)({
  position: 'absolute',
  bottom: '1.5rem',
  left: '1.75rem',
  right: '1.75rem',
});

export const ReelTitle = styled('h3')(({ theme }) => ({
  fontSize: '1.5rem',
  fontFamily: '"Bebas Neue", sans-serif',
  marginBottom: '0.25rem',
  letterSpacing: '-0.01em',
  transition: 'color 0.3s ease',
  '.group:hover &': {
    color: theme.palette.primary.main,
  },
}));

export const ReelSubtitle = styled(Box)({
  color: 'rgba(255,255,255,0.4)',
  fontSize: '0.75rem',
  fontFamily: '"Inter", sans-serif',
  marginBottom: '0.75rem',
});
export const ReelProgressBar = styled(Box)({
  height: '2px',
  backgroundColor: 'rgba(255,255,255,0.08)',
  borderRadius: '9999px',
  overflow: 'hidden',
  '& .fill': {
    height: '100%',
    width: 0,
    borderRadius: '9999px',
    background: 'linear-gradient(to right, rgba(201,168,76,0.8), rgba(201,168,76,0.3))',
    transition: 'width 0.7s ease-out',
    '.group:hover &': {
      width: '100%',
    },
  },
});

export const ReelCloseButton = styled('button')(({ theme }) => ({
  position: 'absolute',
  top: '0.75rem',
  right: '0.75rem',
  zIndex: 50,
  width: '2rem',
  height: '2rem',
  borderRadius: '50%',
  backgroundColor: 'rgba(10,29,44,0.8)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.15)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'rgba(255,255,255,0.6)',
  fontSize: '0.875rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.common.white,
    backgroundColor: 'rgba(10,29,44,0.95)',
  },
}));

export const ReelPlaceholder = styled(Box)({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0,0,0,0.9)',
  gap: '1rem',
});

export const ActingBitsBridgeSection = styled(Box)(({ theme }) => ({
  position: 'relative',

  zIndex: 25,

  /*
    MOBILE:
    no overlap
  */
  marginTop: '0rem',

  paddingTop: '2rem',
  // paddingBottom: '4rem',

  /*
    TABLET
  */
  [theme.breakpoints.up('md')]: {
    marginTop: '-4rem',

    paddingTop: '0rem',
    // paddingBottom: '5rem',
  },

  /*
    DESKTOP
  */
  [theme.breakpoints.up('lg')]: {
    marginTop: '-7rem',

    // paddingBottom: '7rem',
  },
}));

export const EditorialAboutSection = styled(Box)(({ theme }) => ({
  position: 'relative',

  paddingTop: '5rem',
  paddingBottom: '5rem',

  background: `
    linear-gradient(
      to bottom,
      #08131c 0%,
      #0b1721 45%,
      #08131c 100%
    )
  `,

  overflow: 'hidden',

  [theme.breakpoints.up('md')]: {
    paddingTop: '9rem',
    paddingBottom: '9rem',
  },
}));
export const EditorialAboutContainer = styled(Box)(({ theme }) => ({
  position: 'relative',

  zIndex: 2,

  width: '100%',

  maxWidth: '1440px',

  margin: '0 auto',

  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',

  [theme.breakpoints.up('md')]: {
    paddingLeft: '3rem',
    paddingRight: '3rem',
  },

  [theme.breakpoints.up('lg')]: {
    paddingLeft: '6rem',
    paddingRight: '6rem',
  },
}));
export const EditorialAboutLabel = styled(Box)(({ theme }) => ({
  fontSize: '0.72rem',

  letterSpacing: '0.35em',

  textTransform: 'uppercase',

  color: theme.palette.primary.main,

  marginBottom: '2rem',

  fontWeight: 700,
}));
export const EditorialAboutGrid = styled(Box)(({ theme }) => ({
  display: 'grid',

  gridTemplateColumns: '1fr',

  gap: '3rem',

  alignItems: 'center',

  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: '0.9fr 1.1fr',

    gap: '6rem',
  },
}));
export const EditorialAboutImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',

  width: '100%',

  height: '70vh',

  overflow: 'hidden',

  [theme.breakpoints.up('md')]: {
    height: '780px',
  },
}));
export const EditorialAboutImage = styled('img')({
  width: '100%',
  height: '100%',

  objectFit: 'cover',

  objectPosition: 'center top',

  filter: `
    brightness(0.82)
    contrast(1.03)
    saturate(0.9)
  `,

  transition: 'transform 1.2s ease',

  '&:hover': {
    transform: 'scale(1.03)',
  },
});
export const EditorialAboutImageOverlay = styled(Box)({
  position: 'absolute',

  inset: 0,

  background: `
    linear-gradient(
      to top,
      rgba(6,16,24,0.85) 0%,
      rgba(6,16,24,0.2) 45%,
      rgba(6,16,24,0.05) 100%
    )
  `,
});
export const EditorialAboutTitle = styled('h2')(({ theme }) => ({
  fontFamily: '"Cormorant Garamond", serif',

  fontWeight: 500,

  fontSize: 'clamp(3rem, 7vw, 6rem)',

  lineHeight: 0.95,

  letterSpacing: '-0.03em',

  color: theme.palette.common.white,

  margin: 0,

  maxWidth: '650px',

  '& .highlight': {
    color: theme.palette.primary.main,
    fontStyle: 'italic',
  },
}));
export const EditorialAboutTextBlock = styled(Box)(({ theme }) => ({
  marginTop: '2.5rem',

  display: 'flex',

  flexDirection: 'column',

  gap: '1.5rem',

  maxWidth: '620px',
}));
export const EditorialAboutParagraph = styled(Box)(({ theme }) => ({
  color: 'rgba(255,255,255,0.72)',

  fontSize: '1.02rem',

  lineHeight: 1.9,

  fontWeight: 400,

  [theme.breakpoints.up('md')]: {
    fontSize: '1.08rem',
  },
}));
export const EditorialSignature = styled(Box)(({ theme }) => ({
  marginTop: '2.5rem',

  fontFamily: '"Cormorant Garamond", serif',

  fontStyle: 'italic',

  fontSize: '2rem',

  color: theme.palette.primary.main,
}));
export const EditorialAmbientGlow = styled(Box)(({ theme }) => ({
  position: 'absolute',

  width: '500px',
  height: '500px',

  borderRadius: '50%',

  background: 'rgba(201,168,76,0.06)',

  filter: 'blur(120px)',

  pointerEvents: 'none',

  zIndex: 0,
}));
export const EditorialAboutContent = styled(Box)(({ theme }) => ({
  position: 'relative',

  zIndex: 2,

  display: 'flex',

  flexDirection: 'column',

  justifyContent: 'center',

  width: '100%',

  paddingTop: '1rem',

  [theme.breakpoints.up('md')]: {
    paddingTop: '2rem',
  },

  [theme.breakpoints.up('lg')]: {
    paddingRight: '2rem',
  },
}));
export const CarouselSection = styled(Box)(({ theme }) => ({
  position: 'relative',

  width: '100%',

  overflow: 'hidden',

  /*
    MOBILE
  */
  paddingTop: '1rem',
  // paddingBottom: '1rem',

  [theme.breakpoints.up('md')]: {
    paddingTop: '2rem',
    // paddingBottom: '2rem',
  },
}));

export const CarouselHeader = styled(Box)(({ theme }) => ({
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '0 1.5rem',
  marginBottom: '0.75rem',
}));

export const CarouselTitle = styled('h2')(({ theme }) => ({
  fontFamily: '"Bebas Neue", sans-serif',
  fontSize: 'clamp(3.75rem, 8vw, 6rem)',
  color: theme.palette.common.white,
  textTransform: 'uppercase',
  letterSpacing: '0.025em',
  '& .highlight': {
    color: theme.palette.primary.main,
    fontStyle: 'italic',
  },
}));

export const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',

  width: '100%',

  overflowX: 'auto',
  scrollbarWidth: 'none',
  scrollSnapType: 'x mandatory',
  '&::-webkit-scrollbar': {
    display: 'none',
  },

  paddingLeft: '0.5rem',
  paddingRight: '0.5rem',

  [theme.breakpoints.up('md')]: {
    paddingLeft: '2rem',
    paddingRight: '2rem',
  },

  [theme.breakpoints.up('lg')]: {
    paddingLeft: '4rem',
    paddingRight: '4rem',
  },
}));

export const CarouselFade = styled(Box)<{ side: 'left' | 'right' }>(({ side }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: '6rem',
  zIndex: 10,
  pointerEvents: 'none',
  ...(side === 'left' ? {
    left: 0,
    background: 'linear-gradient(to right, #021523 0%, transparent 100%)',
  } : {
    right: 0,
    background: 'linear-gradient(to left, #021523 0%, transparent 100%)',
  }),
}));
export const CarouselTrack = styled(Box)<{ paused?: boolean }>(({ theme, paused }) => ({
  display: 'flex',
  gap: '1.25rem',
  width: 'max-content',
  paddingLeft: '0.5rem',
  paddingBottom: '0.25rem',
}));

// Acting Bits Clip Card
export const ClipCard = styled(Box)(({ theme }) => ({
  position: 'relative',

  flexShrink: 0,
  scrollSnapAlign: 'start',

  overflow: 'hidden',

  borderRadius: '1.25rem',

  background: '#0b1721',

  /*
    MOBILE
  */
  width: '280px',
  height: '160px',

  [theme.breakpoints.up('sm')]: {
    width: '260px',
    height: '280px',
  },

  [theme.breakpoints.up('md')]: {
    width: '320px',
    height: '360px',
  },

  [theme.breakpoints.up('lg')]: {
    width: '360px',
    height: '420px',
  },

  transition: 'transform 0.5s ease',

  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

// Press Review Card
export const ReviewCard = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  width: '16rem',
  padding: '1rem',
  borderRadius: '1rem',
  border: '1px solid rgba(255,255,255,0.08)',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  position: 'relative',
  overflow: 'hidden',
  background: 'rgba(255,255,255,0.035)',
  backdropFilter: 'blur(16px)',
  boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
  transition: 'all 0.5s ease',
  '&:hover': {
    borderColor: `${theme.palette.primary.main}4d`,
  },
  [theme.breakpoints.up('md')]: {
    width: '20rem',
    padding: '1.75rem',
    gap: '1rem',
  },
}));



// ─── Section wrapper ───────────────────────────────────────────────
export const KeyFeaturesSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  paddingTop: '5rem',
  paddingBottom: '5rem',
  background: `
    linear-gradient(
      to bottom,
      #08131c 0%,
      #0d1b26 50%,
      #08131c 100%
    )
  `,
  [theme.breakpoints.up('md')]: {
    paddingTop: '7rem',
    paddingBottom: '7rem',
  },
}));

// ─── Max-width container ────────────────────────────────────────────
export const KeyFeaturesContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  width: '100%',
  maxWidth: '1400px',
  margin: '0 auto',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  [theme.breakpoints.up('md')]: {
    paddingLeft: '3rem',
    paddingRight: '3rem',
  },
  [theme.breakpoints.up('lg')]: {
    paddingLeft: '6rem',
    paddingRight: '6rem',
  },
}));

// ─── Top row: label+title on left, instagram on right ──────────────
export const KeyFeaturesTopRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  marginBottom: '1.5rem',
  flexWrap: 'wrap',
  gap: '2rem',
}));

export const KeyFeaturesLabel = styled(Box)(({ theme }) => ({
  fontSize: '0.72rem',
  letterSpacing: '0.35em',
  textTransform: 'uppercase',
  color: theme.palette.primary.main,
  marginBottom: '0.75rem',
  fontWeight: 700,
}));

export const KeyFeaturesTitle = styled('h2')(({ theme }) => ({
  margin: 0,
  fontFamily: '"Cormorant Garamond", serif',
  fontWeight: 500,
  fontSize: 'clamp(2.2rem, 4.5vw, 3.75rem)',
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  color: theme.palette.common.white,
  '& .highlight': {
    color: theme.palette.primary.main,
    fontStyle: 'italic',
  },
}));

// ─── Instagram promo (top-right) ────────────────────────────────────
export const InstaPromoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  flexShrink: 0,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const InstaAvatar = styled('img')({
  width: '72px',
  height: '72px',
  borderRadius: '50%',
  objectFit: 'cover',
  objectPosition: 'top',
  border: '2px solid rgba(201,168,76,0.35)',
});

export const InstaPromoTitle = styled(Box)(({ theme }) => ({
  fontFamily: '"Cormorant Garamond", serif',
  fontSize: '1.3rem',
  color: theme.palette.common.white,
  fontWeight: 600,
  lineHeight: 1.2,
  marginBottom: '0.3rem',
}));

export const InstaPromoSubtext = styled(Box)({
  color: 'rgba(255,255,255,0.5)',
  fontSize: '0.82rem',
  lineHeight: 1.5,
});

export const InstaPromoHandle = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
}));

// ─── Full-width rule under the top row ─────────────────────────────
export const KeyFeaturesDividerRule = styled(Box)({
  width: '100%',
  height: '1px',
  background: 'rgba(255,255,255,0.08)',
  marginBottom: '3.5rem',
});

// ─── Main two-column layout ─────────────────────────────────────────
export const KeyFeaturesMainRow = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '3rem',
  alignItems: 'stretch',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '42% 1fr',
    gap: '5rem',
  },
}));

// ─── Left: portrait image ───────────────────────────────────────────
export const KeyFeaturesImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '0.5rem',

  width: '100%',
  height: '320px', // mobile height

  [theme.breakpoints.up('sm')]: {
    height: '420px',
  },

  [theme.breakpoints.up('md')]: {
    height: '560px',
  },
}));


export const KeyFeaturesVideo = styled('video')({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  display: 'block',

  filter: 'brightness(0.82) contrast(1.05) saturate(0.9)',
  transition: 'transform 1.4s ease',

  '&:hover': {
    transform: 'scale(1.04)',
  },
});

// ─── Right: 2×2 feature grid ───────────────────────────────────────
export const KeyFeaturesGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  // Internal borders create the grid lines
  '& > *': {
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    // Right border on the odd (left column) cells
    '&:nth-of-type(odd)': {
      borderRight: '1px solid rgba(255,255,255,0.08)',
    },
    // No bottom border on the last two cells
    '&:nth-last-of-type(-n+2)': {
      borderBottom: 'none',
    },
  },
}));

export const KeyFeatureItem = styled(Box)(({ theme }) => ({
  padding: '2rem 1.25rem',
  transition: 'background 0.35s ease',
  '&:hover': {
    background: 'rgba(201,168,76,0.04)',
  },
  [theme.breakpoints.up('md')]: {
    padding: '2.5rem 2rem',
  },
}));

// ─── Icon wrapper ───────────────────────────────────────────────────
export const KeyFeatureIconBox = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: '1.1rem',
  '& svg': {
    width: '2rem',
    height: '2rem',
  },
}));

// ─── Item title ─────────────────────────────────────────────────────
export const KeyFeatureItemTitle = styled('h3')(({ theme }) => ({
  margin: 0,
  fontFamily: '"Cormorant Garamond", serif',
  fontWeight: 600,
  fontSize: 'clamp(1.25rem, 2vw, 1.6rem)',
  lineHeight: 1.15,
  color: theme.palette.common.white,
  marginBottom: '0.7rem',
}));

// ─── Thin divider under title ───────────────────────────────────────
export const KeyFeatureItemDivider = styled(Box)({
  width: '100%',
  height: '1px',
  background: 'rgba(255,255,255,0.1)',
  marginBottom: '0.7rem',
});

// ─── Italic tagline in gold ─────────────────────────────────────────
export const KeyFeatureSubtitle = styled(Box)(({ theme }) => ({
  fontStyle: 'italic',
  color: theme.palette.primary.main,
  fontSize: '0.8rem',
  marginBottom: '0.7rem',
  opacity: 0.85,
  lineHeight: 1.4,
}));

// ─── Body copy ──────────────────────────────────────────────────────
export const KeyFeatureBody = styled(Box)({
  color: 'rgba(255,255,255,0.58)',
  fontSize: '0.875rem',
  lineHeight: 1.75,
});

export const ReviewAmbientGlow = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '-2.5rem',
  right: '-2.5rem',
  width: '9rem',
  height: '9rem',
  borderRadius: '50%',
  pointerEvents: 'none',
  opacity: 0,
  background: 'rgba(201,168,76,0.08)',
  filter: 'blur(30px)',
  transition: 'opacity 0.7s ease',
  '.ReviewCard:hover &': {
    opacity: 1,
  },
}));
export const GallerySection = styled(Box)(({ theme }) => ({
  padding: '3rem 1rem',
  background: `linear-gradient(to bottom, ${theme.palette.background.default}, #0d2538, ${theme.palette.background.default})`,
  [theme.breakpoints.up('sm')]: {
    padding: '4rem 1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    padding: '5rem 2rem',
  },
}));

export const GalleryContainer = styled(Box)({
  maxWidth: '1280px',
  margin: '0 auto',
});

export const GalleryHeader = styled(Box)(({ theme }) => ({
  marginBottom: '3rem',
}));

export const GalleryGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  autoRows: '180px',
  gap: '0.75rem',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
    autoRows: '200px',
  },
}));

export const GalleryItem = styled(Box)({
  position: 'relative',
  borderRadius: '0.75rem',
  overflow: 'hidden',
  cursor: 'pointer',
  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.7s ease',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
});
export const GalleryItemOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(10,29,44,0.4)',
  transition: 'background-color 0.5s ease',
  '.GalleryItem:hover &': {
    backgroundColor: 'rgba(10,29,44,0.1)',
  },
});

export const GalleryItemBorder = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  borderRadius: '0.75rem',
  border: '1px solid transparent',
  transition: 'border-color 0.4s ease',
  pointerEvents: 'none',
  '.GalleryItem:hover &': {
    borderColor: `${theme.palette.primary.main}66`,
  },
}));

export const GalleryItemCorner = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '0.75rem',
  left: '0.75rem',
  width: '1.25rem',
  height: '1.25rem',
  borderTop: `2px solid transparent`,
  borderLeft: `2px solid transparent`,
  transition: 'all 0.4s ease',
  '.GalleryItem:hover &': {
    borderColor: `${theme.palette.primary.main}b3`,
    width: '2rem',
    height: '2rem',
  },
}));

export const GalleryItemScanLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  insetX: 0,
  top: '50%',
  height: '1px',
  background: `linear-gradient(to right, transparent, ${theme.palette.primary.main}, transparent)`,
  opacity: 0,
  transition: 'opacity 0.5s ease',
  '.GalleryItem:hover &': {
    opacity: 0.4,
  },
}));
export const CTASection = styled(Box)(({ theme }) => ({
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '3rem 1rem',
  [theme.breakpoints.up('sm')]: {
    padding: '3rem 1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    padding: '4rem 2rem',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '4rem 3rem',
  },
}));

export const CTAInner = styled(Box)(({ theme }) => ({
  padding: '3rem',
  borderRadius: '1.5rem',
  border: '1px solid rgba(255,255,255,0.05)',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('md')]: {
    padding: '5rem',
  },
}));

export const CTAGlow = styled(Box)({
  position: 'absolute',
  width: '20rem',
  height: '20rem',
  borderRadius: '50%',
  pointerEvents: 'none',
  background: 'rgba(201,168,76,0.10)',
  filter: 'blur(100px)',
});

export const CTAContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  alignItems: 'flex-start',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export const CTATextContent = styled(Box)({
  maxWidth: '640px',
});
export const CTATitle = styled('h2')(({ theme }) => ({
  fontFamily: '"Bebas Neue", sans-serif',
  fontSize: 'clamp(3rem, 6vw, 4.5rem)',
  color: theme.palette.common.white,
  textTransform: 'uppercase',
  marginBottom: '1.5rem',
  lineHeight: 1.1,
}));

export const CTADescription = styled(Box)(({ theme }) => ({
  color: 'rgba(255,255,255,0.6)',
  fontSize: '1.125rem',
  lineHeight: 1.6,
}));

export const CTAButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  display: 'inline-flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '1.5rem 2.5rem',
  borderRadius: '0.375rem',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  color: theme.palette.common.black,
  fontSize: '1.125rem',
  background: 'linear-gradient(135deg, #C9A84C 0%, rgba(201,168,76,0.80) 100%)',
  boxShadow: '0 20px 60px rgba(201,168,76,0.3)',
}));
export const HeroContentCanvas = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 30,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: `${theme.spacing(20)} ${theme.spacing(8)}`,
  '@media (min-width: 960px)': {
    justifyContent: 'center',
    paddingLeft: theme.spacing(32),
    paddingRight: theme.spacing(32),
    paddingBottom: 0,
  },
}));

export const MainHeading = styled(Box)(({ theme }) => ({
  transform: 'translateX(-24px)',
  '& h1': {
    fontFamily: '"Bebas Neue", sans-serif',
    fontSize: 'clamp(2rem, 10vw, 11rem)',
    lineHeight: 0.85,
    letterSpacing: 'tight',
    color: theme.palette.text.primary,
    textShadow: '0 10px 40px rgba(0,0,0,0.5)',
    margin: 0,
  },
}));

export const StatsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(3),
  paddingTop: theme.spacing(4),
  marginTop: 'auto',
  maxWidth: '600px',
  marginBottom: theme.spacing(4),
  '@media (min-width: 600px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(6),
    paddingTop: theme.spacing(8),
  },
}));

export const StatBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  borderRadius: '0.75rem',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(4px)',
  border: `1px solid rgba(255, 255, 255, 0.05)`,
  transition: 'all 0.3s ease',
  cursor: 'default',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  '& .stat-label': {
    fontSize: '0.6rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'rgba(255, 255, 255, 0.4)',
    fontWeight: 900,
    marginBottom: theme.spacing(1),
  },
  '& .stat-value': {
    fontFamily: '"Bebas Neue", sans-serif',
    fontSize: '1.875rem',
    fontWeight: 700,
    color: theme.palette.text.primary,
    transition: 'color 0.3s ease',
  },
  '&:hover .stat-value': {
    color: theme.palette.primary.main,
  },
  '& .stat-text': {
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.6)',
    fontFamily: '"Inter", sans-serif',
  },
}));

export const CTAButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  paddingTop: theme.spacing(10),
  '@media (min-width: 600px)': {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

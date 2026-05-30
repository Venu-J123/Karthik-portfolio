import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import { motion } from 'motion/react';

// Main Wrapper
export const FitnessWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, #0f2234 50%, ${theme.palette.background.default} 100%)`,
  overflow: 'hidden',
}));

// ==================== HERO SECTION ====================
export const HeroSection = styled(Box)({
  position: 'relative',
  minHeight: '100vh',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
});

// Mobile-only hero image — same transform settings as Home mobile
export const FitnessHeroImageMobile = styled('img')(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  objectPosition: 'center center',
  transform: 'scale(1.6) translateY(0%) translateX(-2%)',
  transformOrigin: 'center center',
  display: 'block',

  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const HeroBackgroundImage = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      objectFit: 'contain',
      objectPosition: 'center center',
      transform: 'scale(1.2)',
      transformOrigin: 'center center',
    },
  },
}));

export const HeroOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 1,
  pointerEvents: 'none',
  // Mobile: top-to-bottom gradient (matches Home mobile overlay)
  background: `linear-gradient(to bottom, ${theme.palette.background.default}cc 0%, ${theme.palette.background.default}55 45%, ${theme.palette.background.default}99 100%)`,

  [theme.breakpoints.up('md')]: {
    background: 'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.3), transparent)',
  },
}));

export const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '4rem 1rem',
  zIndex: 10,
  [theme.breakpoints.up('sm')]: {
    padding: '4rem 2rem',
  },
  [theme.breakpoints.up('md')]: {
    padding: '6rem 3rem',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '6rem 4rem',
  },
}));

export const HeroTextContainer = styled(Box)(({ theme }) => ({
  maxWidth: '640px',
  zIndex: 10,
}));

export const StatsBadge = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(4),
  },
}));

export const StatsAvatarGroup = styled(Box)({
  display: 'flex',
  marginLeft: '-0.5rem',
  '& > *': {
    marginLeft: '-0.5rem',
  },
});

export const StatsAvatar = styled(Box)(({ theme }) => ({
  width: '2rem',
  height: '2rem',
  borderRadius: '50%',
  border: `2px solid ${theme.palette.common.white}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.75rem',
  fontWeight: 900,
  color: theme.palette.common.white,
  [theme.breakpoints.up('md')]: {
    width: '2.5rem',
    height: '2.5rem',
  },
}));

export const StatsBadgeText = styled(Box)(({ theme }) => ({
  color: 'rgba(255,255,255,0.9)',
  fontSize: '0.75rem',
  fontWeight: 700,
  [theme.breakpoints.up('md')]: {
    fontSize: '0.875rem',
  },
}));

export const HeroDescription = styled(Box)(({ theme }) => ({
  color: 'rgba(255,255,255,0.8)',
  fontSize: '0.875rem',
  marginBottom: theme.spacing(3),
  lineHeight: 1.6,
  maxWidth: '32rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
    marginBottom: theme.spacing(4),
  },
}));

export const HeroTitle = styled(motion.h1)(({ theme }) => ({
  fontSize: 'clamp(3rem, 8vw, 5rem)',
  fontFamily: '"Bebas Neue", sans-serif',
  fontWeight: 900,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(4),
  lineHeight: 1.1,
  textShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(6),
  },
  '& .highlight': {
    color: theme.palette.primary.main,
  },
}));

export const HeroButtonGroup = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

export const HeroPrimaryButton = styled(motion(Button))(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.black,
  padding: '1rem 2rem',
  borderRadius: '9999px',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  fontSize: '0.875rem',
  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}e6`,
  },
  [theme.breakpoints.up('md')]: {
    padding: '1.25rem 3rem',
    fontSize: '1rem',
    gap: theme.spacing(1.5),
  },
}));

export const HeroSecondaryButton = styled(motion(Button))(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.1)',
  backdropFilter: 'blur(10px)',
  color: theme.palette.common.white,
  padding: '1rem 2rem',
  borderRadius: '9999px',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  fontSize: '0.875rem',
  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  border: '1px solid rgba(255,255,255,0.3)',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  [theme.breakpoints.up('md')]: {
    padding: '1.25rem 3rem',
    fontSize: '1rem',
    gap: theme.spacing(1.5),
  },
}));

// ==================== SECTION COMMON ====================
export const Section = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '3rem 1rem',
  background: `linear-gradient(to bottom, ${theme.palette.background.default}, #0d2538, ${theme.palette.background.default})`,
  [theme.breakpoints.up('sm')]: {
    padding: '4rem 1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    padding: '5rem 2rem',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '6rem 3rem',
  },
}));

export const SectionContainer = styled(Box)({
  maxWidth: '1280px',
  margin: '0 auto',
});

export const SectionHeader = styled(motion.div)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(6),
    textAlign: 'left',
  },
  textAlign: 'center',
}));

export const SectionLabel = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.3em',
  fontSize: '0.75rem',
  marginBottom: theme.spacing(1.5),
  display: 'inline-block',
  [theme.breakpoints.up('md')]: {
    fontSize: '0.875rem',
    marginBottom: theme.spacing(3),
  },
}));

export const SectionTitle = styled('h2')(({ theme }) => ({
  fontSize: 'clamp(2rem, 6vw, 4.5rem)',
  fontFamily: '"Bebas Neue", sans-serif',
  fontWeight: 900,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(2),
  lineHeight: 1.2,
  '& .highlight': {
    color: theme.palette.primary.main,
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.main}99)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(3),
  },
}));

export const SectionDescription = styled(Box)(({ theme }) => ({
  fontSize: '1rem',
  color: 'rgba(255,255,255,0.7)',
  maxWidth: '640px',
  marginTop: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    fontSize: '1.125rem',
    marginTop: theme.spacing(3),
  },
}));

// ==================== EXPERIENCE CARDS ====================
export const ExperienceGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(4),
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(6),
  },
}));

export const ExperienceCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '1.5rem',
  boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  transition: 'all 0.5s ease',
  '&:hover': {
    boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  },
  [theme.breakpoints.up('md')]: {
    borderRadius: '2rem',
  },
}));

export const ExperienceImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  aspectRatio: '4/5',
  overflow: 'hidden',
  background: theme.palette.background.paper,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all 0.7s ease',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
}));
export const ExperienceImageOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.4), transparent)',
});

export const ExperienceMetricBadge = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.main}cc, ${theme.palette.primary.main}99)`,
  backdropFilter: 'blur(10px)',
  border: `2px solid ${theme.palette.primary.main}80`,
  borderRadius: '1rem',
  padding: '1rem 1.25rem',
  textAlign: 'center',
  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  [theme.breakpoints.up('md')]: {
    top: '2rem',
    right: '2rem',
    borderRadius: '1.5rem',
    padding: '1.25rem 1.5rem',
  },
}));

export const MetricValue = styled(Box)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 900,
  fontSize: '1.5rem',
  lineHeight: 1.2,
  [theme.breakpoints.up('md')]: {
    fontSize: '1.875rem',
  },
}));

export const MetricLabel = styled(Box)(({ theme }) => ({
  color: 'rgba(255,255,255,0.9)',
  fontSize: '0.75rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  marginTop: '0.25rem',
}));

export const ExperienceCardContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '2rem',
  [theme.breakpoints.up('md')]: {
    padding: '2.5rem',
  },
}));

export const ExperienceCardTitle = styled('h3')(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 900,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(1.5),
  lineHeight: 1.2,
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
    marginBottom: theme.spacing(2),
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.25rem',
  },
}));

export const ExperienceCardDescription = styled(Box)(({ theme }) => ({
  color: 'rgba(255,255,255,0.8)',
  fontSize: '0.875rem',
  lineHeight: 1.6,
  marginBottom: theme.spacing(3),
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
    marginBottom: theme.spacing(4),
  },
}));

export const ExperienceButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.black,
  padding: '0.75rem 1.5rem',
  borderRadius: '0.5rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  fontSize: '0.75rem',
  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}e6`,
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
  [theme.breakpoints.up('md')]: {
    padding: '1rem 2rem',
    fontSize: '0.875rem',
  },
}));

// ==================== TRAINING METHODS ====================
export const MethodsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(4),
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));

export const MethodCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '1.5rem',
  boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  border: `2px solid ${theme.palette.primary.main}4d`,
  background: `linear-gradient(135deg, ${theme.palette.background.paper}e6, ${theme.palette.background.default}cc)`,
  transition: 'all 0.5s ease',
  '&:hover': {
    borderColor: `${theme.palette.primary.main}b3`,
  },
}));
export const MethodImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  aspectRatio: '5/4',
  overflow: 'hidden',
  background: theme.palette.background.paper,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'grayscale(100%)',
    transition: 'all 0.7s ease',
  },
  '&:hover img': {
    filter: 'grayscale(0%) brightness(1.1)',
    transform: 'scale(1.1)',
  },
}));

export const MethodImageOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent)',
});

export const MethodBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  backgroundColor: `${theme.palette.primary.main}e6`,
  color: theme.palette.common.black,
  fontSize: '0.75rem',
  fontWeight: 700,
  padding: '0.25rem 0.75rem',
  borderRadius: '9999px',
  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  opacity: 0.9,
  transition: 'transform 0.3s ease',
  '.MuiBox-root:hover &': {
    transform: 'scale(1.1)',
  },
}));

export const MethodCardContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '1.5rem',
  background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent)',
}));

export const MethodCardTitle = styled('h3')(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 900,
  color: theme.palette.common.white,
  marginBottom: '0.5rem',
  textShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
}));

export const MethodCardDescription = styled(Box)(({ theme }) => ({
  color: theme.palette.grey[200],
  fontSize: '0.875rem',
  textShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
}));

// ==================== FEATURES ====================
export const FeaturesCardContainer = styled(motion.div)(({ theme }) => ({
  position: 'relative',

  // Ultra transparent iOS glass
  background: 'rgba(255,255,255,0.06)',
  backdropFilter: 'blur(30px)',
  WebkitBackdropFilter: 'blur(30px)',

  border: '1px solid rgba(255,255,255,0.12)',

  boxShadow: `
    0 8px 40px rgba(0,0,0,0.18),
    inset 0 1px 0 rgba(255,255,255,0.18)
  `,

  borderRadius: '6px',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: `
      linear-gradient(
        135deg,
        rgba(255,255,255,0.14) 0%,
        rgba(255,255,255,0.03) 45%,
        rgba(255,255,255,0.01) 100%
      )
    `,
    pointerEvents: 'none',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-40%',
    left: '-20%',
    width: '120%',
    height: '120%',
    background: `
      radial-gradient(
        circle,
        rgba(255,255,255,0.10),
        transparent 65%
      )
    `,
    pointerEvents: 'none',
  },

  [theme.breakpoints.up('md')]: {
    borderRadius: '2.5rem',
    backdropFilter: 'blur(40px)',
    WebkitBackdropFilter: 'blur(40px)',
  },
}));
export const FeaturesInnerGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(4),
  alignItems: 'center',
  padding: '1.5rem',
  width: '100%',

  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(6),
    padding: '3rem',
  },
}));

export const FeatureItemsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(4),
  },
}));

export const FeatureItem = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(1.5),
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(2),
  },
}));

export const FeatureIconWrapper = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  width: '3rem',
  height: '3rem',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}4d, ${theme.palette.primary.main}1a)`,
  border: `1px solid ${theme.palette.primary.main}80`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  [theme.breakpoints.up('md')]: {
    width: '3.5rem',
    height: '3.5rem',
  },
  '& svg': {
    width: '1.5rem',
    height: '1.5rem',
  },
}));

export const FeatureLabel = styled(Box)(({ theme }) => ({
  fontSize: '0.75rem',
  fontWeight: 900,
  color: theme.palette.common.white,
  lineHeight: 1.2,
  flex: 1,
  minWidth: 0,
  [theme.breakpoints.up('md')]: {
    fontSize: '0.875rem',
  },
}));

export const FeatureImageContainer = styled(motion.div)({
  display: 'block',
});

export const FeatureImage = styled(Box)({
  position: 'relative',
  borderRadius: '0.75rem',
  overflow: 'hidden',
  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});
export const FeatureImageOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to top, rgba(0,0,0,1), transparent, transparent)',
});

// ==================== PRICING ====================
export const PricingGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: theme.spacing(2.5),
  },
}));

export const PricingCard = styled(motion.div)<{ selected?: boolean }>(({ theme, selected }) => ({
  position: 'relative',
  borderRadius: '16px',
  padding: '1.25rem',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
  background: 'linear-gradient(160deg, #0e1e30 0%, #091625 100%)',
  border: selected
    ? `1.5px solid ${theme.palette.primary.main}`
    : '1.5px solid rgba(255,255,255,0.07)',
  boxShadow: selected
    ? `0 0 20px rgba(212,175,55,0.18), inset 0 0 40px rgba(212,175,55,0.04)`
    : '0 4px 24px rgba(0,0,0,0.3)',
  '&:hover': {
    borderColor: selected ? theme.palette.primary.main : 'rgba(212,175,55,0.35)',
    boxShadow: selected
      ? `0 0 24px rgba(212,175,55,0.22)`
      : '0 4px 32px rgba(0,0,0,0.4)',
  },
  [theme.breakpoints.up('md')]: {
    padding: '1.75rem',
    borderRadius: '20px',
  },
}));

export const PopularBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '-1px',
  left: 0,
  right: 0,
  height: '3px',
  background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
  borderRadius: '20px 20px 0 0',
  '&::after': {
    content: '"MOST POPULAR"',
    position: 'absolute',
    top: '8px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: theme.palette.primary.main,
    color: '#000',
    fontSize: '0.6rem',
    fontWeight: 900,
    letterSpacing: '0.12em',
    padding: '0.2rem 0.75rem',
    borderRadius: '9999px',
    whiteSpace: 'nowrap',
  },
}));

export const PricingDuration = styled('p')(({ theme }) => ({
  margin: 0,
  fontSize: '0.7rem',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.45)',
  marginBottom: '0.5rem',
}));

export const PricingPrice = styled(Box)(({ theme }) => ({
  fontSize: '1.75rem',
  fontWeight: 900,
  color: theme.palette.primary.main,
  lineHeight: 1,
  marginBottom: '0.2rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
}));

export const PricingPerMonth = styled(Box)({
  fontSize: '0.72rem',
  color: 'rgba(255,255,255,0.4)',
  letterSpacing: '0.02em',
});

export const OfferBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  padding: '0.2rem 0.6rem',
  background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
  color: '#fff',
  fontSize: '0.55rem',
  fontWeight: 900,
  borderRadius: '9999px',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
}));

export const OriginalPrice = styled(Box)({
  fontSize: '0.85rem',
  fontWeight: 500,
  color: 'rgba(255,255,255,0.28)',
  textDecoration: 'line-through',
  lineHeight: 1.4,
});

export const SavingsBadge = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.15rem 0.55rem',
  background: 'rgba(16,185,129,0.12)',
  border: '1px solid rgba(16,185,129,0.3)',
  color: '#34d399',
  fontSize: '0.65rem',
  fontWeight: 700,
  borderRadius: '6px',
  marginTop: '0.3rem',
  letterSpacing: '0.02em',
});

export const PricingFeaturesList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.75),
  flex: 1,
  marginBottom: theme.spacing(2),
  paddingTop: theme.spacing(1.5),
  borderTop: '1px solid rgba(255,255,255,0.06)',
}));

export const PricingFeatureItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  fontSize: '0.78rem',
  color: 'rgba(255,255,255,0.65)',
  '& svg': {
    width: '0.7rem',
    height: '0.7rem',
    flexShrink: 0,
    color: '#34d399',
  },
}));

export const PricingButton = styled(Button)<{ selected?: boolean }>(({ theme, selected }) => ({
  width: '100%',
  padding: '0.6rem 1rem',
  borderRadius: '10px',
  fontWeight: 700,
  textTransform: 'none',
  letterSpacing: '0.02em',
  fontSize: '0.82rem',
  transition: 'all 0.25s ease',
  marginTop: 'auto',
  background: selected
    ? `linear-gradient(135deg, ${theme.palette.primary.main}, #b8940e)`
    : 'transparent',
  color: selected ? '#000' : 'rgba(255,255,255,0.7)',
  border: selected ? 'none' : '1px solid rgba(255,255,255,0.15)',
  '&:hover': {
    background: selected
      ? `linear-gradient(135deg, ${theme.palette.primary.main}, #b8940e)`
      : 'rgba(255,255,255,0.06)',
    color: selected ? '#000' : '#fff',
    border: selected ? 'none' : '1px solid rgba(255,255,255,0.3)',
  },
}));

// ==================== TESTIMONIALS ====================
export const TestimonialsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(4),
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));

export const TestimonialCard = styled(motion.div)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
  border: `1px solid ${theme.palette.primary.main}33`,
  borderRadius: '1rem',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    borderRadius: '1.5rem',
  },
}));

export const TestimonialImages = styled(Box)({
  position: 'relative',
  aspectRatio: '16/9',
  overflow: 'hidden',
  background: '#112240',
});

export const TestimonialImagesGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  height: '100%',
});
export const TestimonialImageWrapper = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  '&.before': {
    '& img': {
      filter: 'grayscale(100%)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.4))',
    },
  },
  '&.after': {
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to left, transparent, rgba(0,0,0,0.4))',
    },
  },
});

export const TestimonialBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  padding: '0.25rem 0.5rem',
  borderRadius: '0.25rem',
  fontSize: '0.75rem',
  fontWeight: 900,
  color: theme.palette.common.white,
  '&.before': {
    bottom: '0.5rem',
    left: '0.5rem',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  '&.after': {
    bottom: '0.5rem',
    right: '0.5rem',
    backgroundColor: `${theme.palette.primary.main}cc`,
  },
}));

export const TestimonialContent = styled(Box)(({ theme }) => ({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  [theme.breakpoints.up('md')]: {
    padding: '1.5rem',
  },
}));

export const TestimonialRating = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '0.25rem',
  marginBottom: theme.spacing(1.5),
}));

export const TestimonialResult = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 900,
  fontSize: '0.75rem',
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  marginBottom: '0.5rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '0.875rem',
  },
}));
export const TestimonialName = styled(Box)(({ theme }) => ({
  fontWeight: 900,
  fontSize: '1.125rem',
  color: theme.palette.common.white,
  marginBottom: '0.5rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.25rem',
  },
}));

export const TestimonialText = styled(Box)(({ theme }) => ({
  color: 'rgba(255,255,255,0.7)',
  fontSize: '0.75rem',
  lineHeight: 1.6,
  fontStyle: 'italic',
  marginBottom: theme.spacing(1.5),
  flex: 1,
  [theme.breakpoints.up('md')]: {
    fontSize: '0.875rem',
  },
}));

export const TestimonialComment = styled(Box)(({ theme }) => ({
  color: `${theme.palette.primary.main}cc`,
  fontSize: '0.75rem',
  lineHeight: 1.6,
  borderLeft: `2px solid ${theme.palette.primary.main}80`,
  paddingLeft: theme.spacing(1.5),
  paddingTop: theme.spacing(1.5),
  marginTop: theme.spacing(1.5),
  [theme.breakpoints.up('md')]: {
    fontSize: '0.875rem',
  },
}));

// ==================== FACILITY SECTION ====================
export const FacilityGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(4),
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(8),
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

export const FacilityImage = styled(motion.div)({
  position: 'relative',
  aspectRatio: '1/1',
  borderRadius: '1rem',
  overflow: 'hidden',
  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  '@media (min-width: 900px)': {
    borderRadius: '1.5rem',
  },
});

export const FacilityInfo = styled(motion.div)({});

export const FacilityInfoList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(3),
    marginBottom: theme.spacing(6),
  },
}));

export const FacilityInfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(2),
  },
}));

export const FacilityIcon = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  flexShrink: 0,
  width: '1.25rem',
  height: '1.25rem',
  [theme.breakpoints.up('md')]: {
    width: '1.5rem',
    height: '1.5rem',
  },
  '& svg': {
    width: '100%',
    height: '100%',
  },
}));

export const FacilityInfoContent = styled(Box)({
  flex: 1,
  minWidth: 0,
});

export const FacilityInfoLabel = styled(Box)(({ theme }) => ({
  fontWeight: 900,
  color: theme.palette.common.white,
  marginBottom: '0.25rem',
  fontSize: '0.875rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
}));

export const FacilityInfoText = styled(Box)(({ theme }) => ({
  color: 'rgba(255,255,255,0.7)',
  fontSize: '0.75rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '0.875rem',
  },
}));

export const FacilityButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: '0.75rem 2.5rem',
  borderRadius: '0.5rem',  
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  fontSize: '0.75rem',
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}cc`,
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
  [theme.breakpoints.up('md')]: {
    padding: '1.25rem 2.5rem',
    fontSize: '0.875rem',
    gap: theme.spacing(1.5),
  },
}));

// ==================== SUPPLEMENTS SECTION ====================
export const SupplementsSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #060d18 0%, #0b1624 60%, #060d18 100%)',
  padding: theme.spacing(8, 2),
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(12, 4),
  },
}));

export const SupplementsContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
}));

export const SupplementsBrandStripWrapper = styled(Box)({
  overflow: 'hidden',
  marginTop: '2.5rem',
  marginBottom: '3.5rem',
  maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
});

export const SupplementsBrandStrip = styled(Box)({
  display: 'flex',
  gap: '2.5rem',
  width: 'max-content',
  animation: 'brandMarquee 28s linear infinite',
  '@keyframes brandMarquee': {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-50%)' },
  },
});

export const BrandPill = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: '0.35rem 1rem',
  borderRadius: '9999px',
  border: '1px solid rgba(212,175,55,0.2)',
  background: 'rgba(212,175,55,0.05)',
  fontSize: '0.75rem',
  fontWeight: 700,
  color: 'rgba(255,255,255,0.45)',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
}));

export const SupplementBenefitsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: theme.spacing(3),
  },
}));

export const SupplementBenefitCard = styled(motion.div)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(212,175,55,0.07), rgba(212,175,55,0.02))',
  border: '1px solid rgba(212,175,55,0.15)',
  borderRadius: '1rem',
  padding: theme.spacing(3, 2),
  textAlign: 'center',
  transition: 'border-color 0.3s',
  '&:hover': {
    borderColor: 'rgba(212,175,55,0.35)',
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4, 3),
  },
}));

export const SupplementBenefitIcon = styled(Box)(({ theme }) => ({
  width: '3rem',
  height: '3rem',
  borderRadius: '50%',
  background: 'rgba(212,175,55,0.1)',
  border: '1px solid rgba(212,175,55,0.25)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  marginBottom: theme.spacing(1.5),
  color: '#D4AF37',
  fontSize: '1.1rem',
}));

export const SupplementBenefitTitle = styled(Box)(({ theme }) => ({
  fontSize: '0.78rem',
  fontWeight: 800,
  color: theme.palette.common.white,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  marginBottom: theme.spacing(0.5),
}));

export const SupplementBenefitText = styled(Box)({
  fontSize: '0.68rem',
  color: 'rgba(255,255,255,0.45)',
  lineHeight: 1.5,
});

export const SupplementCategoriesGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(6),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(2.5),
  },
}));

export const SupplementCategoryCard = styled(motion.div)(({ theme }) => ({
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: '1rem',
  padding: theme.spacing(3, 2),
  textAlign: 'center',
  transition: 'all 0.3s',
  '&:hover': {
    borderColor: 'rgba(212,175,55,0.3)',
    background: 'rgba(212,175,55,0.05)',
    transform: 'translateY(-4px)',
  },
}));

export const SupplementCategoryEmoji = styled(Box)(({ theme }) => ({
  fontSize: '2.25rem',
  lineHeight: 1,
  marginBottom: theme.spacing(1.25),
}));

export const SupplementCategoryName = styled(Box)(({ theme }) => ({
  fontSize: '0.85rem',
  fontWeight: 700,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(0.5),
  [theme.breakpoints.up('md')]: {
    fontSize: '0.9rem',
  },
}));

export const SupplementCategoryDesc = styled(Box)({
  fontSize: '0.68rem',
  color: 'rgba(255,255,255,0.4)',
  lineHeight: 1.4,
});

export const SupplementCTABox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(212,175,55,0.08), rgba(212,175,55,0.02))',
  border: '1px solid rgba(212,175,55,0.2)',
  borderRadius: '1rem',
  padding: theme.spacing(2.5, 3),
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3.5, 5),
  },
}));

export const SupplementOrderButton = styled(motion.button)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(1.8, 5),
  background: 'linear-gradient(135deg, #D4AF37, #b8942e)',
  color: '#000',
  fontSize: '0.95rem',
  fontWeight: 800,
  border: 'none',
  borderRadius: '12px',
  cursor: 'pointer',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  marginTop: theme.spacing(2),
  boxShadow: '0 6px 24px rgba(212,175,55,0.4)',

  [theme.breakpoints.up('md')]: {
    fontSize: '1.05rem',
    padding: theme.spacing(2.2, 6.5),
    borderRadius: '14px',
  },
}));

// ==================== FINAL CTA ====================
export const CTASection = styled(Section)(({ theme }) => ({
  background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
  overflow: 'hidden',
}));

export const CTABlob = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  top: '-12rem',
  right: 0,
  width: '12rem',
  height: '12rem',
  background: `${theme.palette.primary.main}0d`,
  borderRadius: '50%',
  filter: 'blur(64px)',
  [theme.breakpoints.up('md')]: {
    top: '-24rem',
    width: '24rem',
    height: '24rem',
  },
}));
export const CTAContent = styled(motion.div)({
  maxWidth: '1024px',
  margin: '0 auto',
  textAlign: 'center',
  position: 'relative',
  zIndex: 10,
});

export const CTAButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    gap: theme.spacing(3),
  },
}));

export const CTAPrimaryButton = styled(motion(Button))(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: '0.75rem 2rem',
  borderRadius: '0.5rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  fontSize: '0.75rem',
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}cc`,
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
  [theme.breakpoints.up('md')]: {
    padding: '1.5rem 3.5rem',
    fontSize: '1.125rem',
    gap: theme.spacing(1.5),
  },
}));

export const CTASecondaryButton = styled(motion(Button))(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.1)',
  color: theme.palette.primary.main,
  padding: '0.75rem 2rem',
  borderRadius: '0.5rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  fontSize: '0.75rem',
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  border: `1px solid ${theme.palette.primary.main}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
  [theme.breakpoints.up('md')]: {
    padding: '1.5rem 3.5rem',
    fontSize: '1.125rem',
    gap: theme.spacing(1.5),
  },
}));


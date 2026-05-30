import { styled } from '@mui/material/styles';
import { Box, TextField, Button, Select } from '@mui/material';
import { motion } from 'motion/react';

// ==================== PAGE SHELL ====================
export const ContactWrapper = styled(Box)({
  minHeight: '100vh',
  background: 'linear-gradient(160deg, #060d18 0%, #0a1622 40%, #070e1a 100%)',
  position: 'relative',
  overflow: 'hidden',
});

export const GlowOrb = styled(Box)({
  position: 'absolute',
  borderRadius: '50%',
  pointerEvents: 'none',
  zIndex: 0,
  filter: 'blur(80px)',
});

export const BackgroundImage = styled(Box)({
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  opacity: 0.15,
  zIndex: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const ContentWrapper = styled(Box)({
  position: 'relative',
  zIndex: 1,
});

// ==================== HERO ====================
export const HeroSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(14),
  paddingBottom: theme.spacing(8),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  textAlign: 'center',
  maxWidth: '860px',
  margin: '0 auto',
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(18),
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));

export const HeroBadgeRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
}));

export const StatusBadge = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: '0.4rem 1rem',
  borderRadius: '9999px',
  background: 'rgba(255,255,255,0.04)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(212,175,55,0.25)',
  fontSize: '0.7rem',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.14em',
  color: 'rgba(255,255,255,0.75)',
}));

export const BadgeDot = styled(Box)(({ theme }) => ({
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  flexShrink: 0,
  animation: 'badgePulse 2s ease-in-out infinite',
  '@keyframes badgePulse': {
    '0%, 100%': { opacity: 1, transform: 'scale(1)' },
    '50%': { opacity: 0.4, transform: 'scale(1.3)' },
  },
}));

export const HeroHeading = styled(motion.h1)(({ theme }) => ({
  fontFamily: '"Bebas Neue", sans-serif',
  fontSize: 'clamp(4rem, 14vw, 8.5rem)',
  fontWeight: 900,
  color: theme.palette.common.white,
  lineHeight: 0.95,
  letterSpacing: '0.01em',
  marginBottom: theme.spacing(3),
  '& .highlight': {
    color: theme.palette.primary.main,
    display: 'block',
  },
}));

export const HeroDescription = styled(motion.p)(({ theme }) => ({
  fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
  color: 'rgba(255,255,255,0.55)',
  fontFamily: '"Inter", sans-serif',
  lineHeight: 1.7,
  maxWidth: '600px',
  margin: '0 auto',
}));

// ==================== MAIN CONTENT ====================
export const ContentSection = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingBottom: theme.spacing(10),
  maxWidth: '1280px',
  margin: '0 auto',
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
}));

export const ContentGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(4),
  alignItems: 'start',
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: '3fr 2fr',
    gap: theme.spacing(6),
  },
}));

// ==================== FORM CARD ====================
export const FormCard = styled(Box)(({ theme }) => ({
  borderRadius: '1.5rem',
  background: 'rgba(255,255,255,0.03)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  border: '1px solid rgba(255,255,255,0.08)',
  padding: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 24px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)',
    pointerEvents: 'none',
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
  },
}));

export const FormCardHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3.5),
}));

export const FormCardTitle = styled(Box)(({ theme }) => ({
  fontFamily: '"Bebas Neue", sans-serif',
  fontSize: '2rem',
  color: theme.palette.common.white,
  letterSpacing: '0.04em',
  lineHeight: 1,
  marginBottom: theme.spacing(0.75),
}));

export const FormCardSubtitle = styled(Box)({
  fontSize: '0.825rem',
  color: 'rgba(255,255,255,0.4)',
  fontFamily: '"Inter", sans-serif',
  lineHeight: 1.5,
});

// ==================== SERVICE CARDS ====================
export const ServiceGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(1),
  marginTop: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

export const ServiceCardBtn = styled('button')<{ selected?: boolean }>(({ theme, selected }) => ({
  all: 'unset',
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '0.75rem 0.875rem 0.625rem',
  borderRadius: '3px',
  background: selected
    ? 'linear-gradient(135deg, rgba(212,175,55,0.10) 0%, rgba(212,175,55,0.04) 100%)'
    : 'rgba(255,255,255,0.03)',
  border: `1px solid ${selected ? 'rgba(212,175,55,0.40)' : 'rgba(255,255,255,0.07)'}`,
  color: selected ? theme.palette.primary.main : 'rgba(255,255,255,0.55)',
  fontFamily: '"Inter", sans-serif',
  overflow: 'hidden',
  transition: 'background 0.2s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease',
  boxShadow: selected
    ? '0 4px 20px rgba(212,175,55,0.12), inset 0 1px 0 rgba(212,175,55,0.1)'
    : 'none',

  // Left accent bar
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0, top: 0, bottom: 0,
    width: selected ? '3px' : '0px',
    background: 'linear-gradient(180deg, #D4AF37 0%, #b8941f 100%)',
    transition: 'width 0.2s ease',
    borderRadius: '0 1px 1px 0',
  },

  // Bottom sweep line on hover
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0, left: 0,
    height: '1px',
    width: selected ? '100%' : '0%',
    background: 'linear-gradient(90deg, rgba(212,175,55,0.6), transparent)',
    transition: 'width 0.3s ease',
  },

  '&:hover': {
    background: 'rgba(212,175,55,0.07)',
    borderColor: 'rgba(212,175,55,0.3)',
    color: theme.palette.primary.main,
    '&::before': { width: '3px' },
    '&::after': { width: '100%' },
  },
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: '2px',
  },
}));

// ==================== FORM FIELDS ====================
export const FormContainer = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5),
}));

export const FormRow = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

export const FormGroup = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const FormLabel = styled('label')(({ theme }) => ({
  display: 'block',
  fontSize: '0.68rem',
  fontWeight: 800,
  textTransform: 'uppercase',
  color: 'rgba(212,175,55,0.8)',
  letterSpacing: '0.18em',
  marginBottom: theme.spacing(1),
  fontFamily: '"Inter", sans-serif',
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: '0.625rem',
    color: theme.palette.common.white,
    fontFamily: '"Inter", sans-serif',
    fontSize: '0.875rem',
    transition: 'all 0.2s ease',
    '& fieldset': {
      borderColor: 'rgba(255,255,255,0.08)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255,255,255,0.18)',
    },
    '&.Mui-focused': {
      backgroundColor: 'rgba(212,175,55,0.04)',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: '1px',
      boxShadow: `0 0 0 3px ${theme.palette.primary.main}18`,
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '0.75rem 1rem',
    '&::placeholder': { color: 'rgba(255,255,255,0.25)', opacity: 1 },
    '&:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 100px #0f1f30 inset',
      WebkitTextFillColor: '#fff',
    },
  },
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  width: '100%',
  backgroundColor: 'rgba(255,255,255,0.04)',
  borderRadius: '0.625rem',
  color: theme.palette.common.white,
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.875rem',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255,255,255,0.08)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255,255,255,0.18)',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
    borderWidth: '1px',
    boxShadow: `0 0 0 3px ${theme.palette.primary.main}18`,
  },
  '& .MuiSelect-icon': {
    color: 'rgba(255,255,255,0.4)',
  },
}));

export const StyledTextArea = styled(TextField)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: '0.625rem',
    color: theme.palette.common.white,
    fontFamily: '"Inter", sans-serif',
    fontSize: '0.875rem',
    alignItems: 'flex-start',
    transition: 'all 0.2s ease',
    '& fieldset': {
      borderColor: 'rgba(255,255,255,0.08)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255,255,255,0.18)',
    },
    '&.Mui-focused': {
      backgroundColor: 'rgba(212,175,55,0.04)',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: '1px',
      boxShadow: `0 0 0 3px ${theme.palette.primary.main}18`,
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '0.75rem 1rem',
    resize: 'none',
    '&::placeholder': { color: 'rgba(255,255,255,0.25)', opacity: 1 },
  },
}));

export const CharCountRow = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '0.25rem',
});

export const CharCount = styled(Box)<{ over?: boolean }>(({ over }) => ({
  fontSize: '0.68rem',
  fontFamily: '"Inter", sans-serif',
  color: over ? '#f87171' : 'rgba(255,255,255,0.25)',
  letterSpacing: '0.04em',
  transition: 'color 0.2s',
}));

export const ConsentRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.625rem',
});

export const ConsentText = styled(Box)({
  fontSize: '0.78rem',
  color: 'rgba(255,255,255,0.45)',
  fontFamily: '"Inter", sans-serif',
  lineHeight: 1.5,
});

// ==================== SUBMIT ====================
export const SubmitButton = styled(Button)(({ theme }) => ({
  width: '100%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #b8941f 100%)`,
  color: '#000',
  fontWeight: 900,
  textTransform: 'uppercase',
  padding: '0.9rem 1.5rem',
  borderRadius: '0.625rem',
  letterSpacing: '0.08em',
  fontSize: '0.8rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  transition: 'all 0.25s ease',
  boxShadow: `0 4px 20px ${theme.palette.primary.main}30`,
  '&:hover': {
    background: `linear-gradient(135deg, #e8c832 0%, ${theme.palette.primary.main} 100%)`,
    boxShadow: `0 8px 32px ${theme.palette.primary.main}50`,
  },
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
}));

export const LoadingSpinner = styled(motion.div)({
  width: '15px',
  height: '15px',
  border: '2px solid rgba(0,0,0,0.2)',
  borderTopColor: '#000',
  borderRadius: '50%',
});

// ==================== SUCCESS ====================
export const SuccessMessage = styled(motion.div)({
  textAlign: 'center',
  padding: '4rem 1rem',
});

export const SuccessIconBox = styled(motion.div)(({ theme }) => ({
  width: '84px',
  height: '84px',
  margin: '0 auto',
  background: 'rgba(52,211,153,0.1)',
  border: '1px solid rgba(52,211,153,0.3)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

export const SuccessTitle = styled('h3')(({ theme }) => ({
  fontSize: '2.25rem',
  fontFamily: '"Bebas Neue", sans-serif',
  color: theme.palette.common.white,
  marginBottom: theme.spacing(1.5),
  letterSpacing: '0.04em',
}));

export const SuccessText = styled('p')(({ theme }) => ({
  fontSize: '0.95rem',
  color: 'rgba(255,255,255,0.6)',
  fontFamily: '"Inter", sans-serif',
  lineHeight: 1.6,
  marginBottom: theme.spacing(3),
}));

export const ResetButton = styled('button')(({ theme }) => ({
  all: 'unset',
  cursor: 'pointer',
  color: theme.palette.primary.main,
  fontFamily: '"Inter", sans-serif',
  fontWeight: 700,
  fontSize: '0.8rem',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  transition: 'color 0.2s',
  '&:hover': { color: '#fff' },
  '&:focus-visible': { outline: `2px solid ${theme.palette.primary.main}`, outlineOffset: '4px', borderRadius: '2px' },
}));

// ==================== INFO PANEL ====================
export const InfoPanel = styled(Box)(({ theme }) => ({
  borderRadius: '1.5rem',
  background: 'rgba(255,255,255,0.02)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  border: '1px solid rgba(255,255,255,0.07)',
  padding: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 24px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)',
    pointerEvents: 'none',
  },
}));

export const InfoSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '&:last-child': { marginBottom: 0 },
}));

export const InfoSectionTitle = styled(Box)(({ theme }) => ({
  fontSize: '0.68rem',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

export const InfoRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(1.75),
  '&:last-child': { marginBottom: 0 },
}));

export const InfoIcon = styled(Box)(({ theme }) => ({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  background: 'rgba(212,175,55,0.08)',
  border: '1px solid rgba(212,175,55,0.15)',
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}));

export const InfoLabel = styled(Box)({
  fontSize: '0.65rem',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '0.14em',
  color: 'rgba(255,255,255,0.35)',
  marginBottom: '0.2rem',
});

export const InfoValue = styled(Box)({
  fontSize: '0.875rem',
  fontFamily: '"Inter", sans-serif',
  color: 'rgba(255,255,255,0.85)',
  fontWeight: 500,
  lineHeight: 1.4,
});

export const ResponseBadge = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.35rem 0.875rem',
  borderRadius: '9999px',
  background: 'rgba(52,211,153,0.07)',
  border: '1px solid rgba(52,211,153,0.2)',
  fontSize: '0.72rem',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 600,
  color: 'rgba(255,255,255,0.6)',
  marginTop: theme.spacing(1.5),
}));

export const Divider = styled(Box)(({ theme }) => ({
  height: '1px',
  background: 'rgba(255,255,255,0.06)',
  marginBottom: theme.spacing(3),
}));

export const SocialRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  flexWrap: 'wrap',
}));

export const SocialLink = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  color: 'rgba(255,255,255,0.55)',
  textDecoration: 'none',
  transition: 'all 0.2s ease',
  '&:hover': {
    background: 'rgba(212,175,55,0.1)',
    borderColor: 'rgba(212,175,55,0.3)',
    color: theme.palette.primary.main,
    transform: 'translateY(-2px)',
  },
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: '2px',
  },
}));

export const WhyRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(1.25),
  '&:last-child': { marginBottom: 0 },
}));

export const WhyText = styled(Box)({
  fontSize: '0.825rem',
  fontFamily: '"Inter", sans-serif',
  color: 'rgba(255,255,255,0.6)',
  lineHeight: 1.4,
});

// ==================== LEGACY ALIASES (unused but safe to keep) ====================
export const TopSection = styled(Box)({});
export const TopContainer = styled(Box)({});
export const CenteredContent = styled(Box)({});
export const TopBadge = styled(motion.div)({});
export const BadgeText = styled(Box)({});
export const MainHeading = styled(motion.h1)({});
export const Subtitle = styled(motion.p)({});
export const Description = styled(motion.p)({});
export const ContactInfoGrid = styled(motion.div)({});
export const ContactInfoCard = styled(motion.div)({});
export const IconWrapper = styled(motion.div)({});
export const MainContentSection = styled(Box)({});
export const MainContentContainer = styled(Box)({});
export const LeftColumn = styled(motion.div)({});
export const RightColumn = styled(motion.div)({});
export const FeaturedImageBox = styled(Box)({});
export const FeaturedContent = styled(Box)({});
export const FeaturedIconBox = styled(motion.div)({});
export const FeaturedTitle = styled('h3')({});
export const FeaturedDescription = styled('p')({});
export const FeaturesRow = styled(Box)({});
export const FeatureItem = styled(Box)({});

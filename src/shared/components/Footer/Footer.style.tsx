import { styled, Box, Container } from '@mui/material';
import { motion } from 'motion/react';

export const FooterWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(1.5),
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2.5),
  },
}));

export const FooterContainer = styled(Container)(({ theme }) => ({
  maxWidth: '100%',
}));

export const FooterGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing(2),
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: theme.spacing(2.5),
  },
  marginBottom: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
}));

// ═══════════════════════════════════════════════════════════════════════════════
// BRAND SECTION (Left - 4 columns)
// ═══════════════════════════════════════════════════════════════════════════════

export const BrandSection = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    gridColumn: 'span 4',
  },
}));

export const BrandHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

export const BrandNameSmall = styled(Box)({
  fontSize: '11px',
  fontWeight: 900,
  letterSpacing: '0.4em',
  color: '#ffffff',
  textTransform: 'uppercase',
  marginBottom: '4px',
});

export const BrandNameLarge = styled('h2')(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 700,
  letterSpacing: 'tight',
  lineHeight: 'none',
  color: '#D4AF37',
  fontFamily: '"Bebas Neue", sans-serif',
  margin: 0,
  [theme.breakpoints.up('sm')]: {
    fontSize: '36px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '42px',
  },
}));

export const BrandSubtitle = styled(Box)({
  fontSize: '9px',
  color: '#ffffff',
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  marginTop: '12px',
  fontFamily: '"Inter", sans-serif',
});

export const BrandDescription = styled(Box)(({ theme }) => ({
  fontSize: '12px',
  color: 'rgba(255, 255, 255, 0.55)',
  lineHeight: 1.6,
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(1),
  maxWidth: '280px',
  [theme.breakpoints.up('sm')]: {
    fontSize: '13px',
  },
}));

export const SocialLabel = styled(Box)({
  fontSize: '9px',
  color: 'rgba(255, 255, 255, 0.3)',
  fontFamily: '"Inter", sans-serif',
  marginBottom: '8px',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
});

export const SocialLinks = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
});

export const SocialIcon = styled(motion.a)({
  position: 'relative',
  width: '36px',
  height: '36px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  boxShadow: 'lg',
  fontSize: '16px',

  '&:hover': {
    transform: 'scale(1.1)',
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: '8px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },

  '&:hover::before': {
    opacity: 1,
  },
});

export const ContactSectionDivider = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  paddingTop: theme.spacing(1.5),
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
}));

export const ContactContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

// ═══════════════════════════════════════════════════════════════════════════════
// NAVIGATION SECTION (Middle - 5 columns)
// ═══════════════════════════════════════════════════════════════════════════════

export const NavSection = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    gridColumn: 'span 5',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing(4),
  },
}));

export const NavColumn = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const NavColumnHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '8px',

  '& .divider': {
    height: '1px',
    flex: 1,
    background: 'linear-gradient(to right, rgba(59, 130, 246, 0.5), transparent)',
  },

  '& h3': {
    fontSize: '9px',
    fontWeight: 900,
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    color: '#D4AF37',
    margin: 0,
  },
});

export const FooterLink = styled(motion.button)(({ theme }) => ({
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '4px 0',
  fontSize: '12px',
  color: 'rgba(255, 255, 255, 0.65)',
  transition: 'all 0.3s ease',
  textAlign: 'left',
  fontFamily: '"Inter", sans-serif',

  '&:hover': {
    color: '#D4AF37',
    paddingLeft: '4px',
  },
}));

// ═══════════════════════════════════════════════════════════════════════════════
// LOCATION SECTION (Right - 3 columns)
// ═══════════════════════════════════════════════════════════════════════════════

export const LocationSection = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    gridColumn: 'span 3',
  },
}));

export const LocationHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '8px',

  '& .divider': {
    height: '1px',
    flex: 1,
    background: 'linear-gradient(to right, rgba(212, 175, 55, 0.5), transparent)',
  },

  '& h3': {
    fontSize: '9px',
    fontWeight: 900,
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    color: '#D4AF37',
    margin: 0,
  },
});

export const MapContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  overflow: 'hidden',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
  marginBottom: theme.spacing(1.5),
  height: '160px',

  '& iframe': {
    width: '100%',
    height: '100%',
    display: 'block',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
}));

export const LocationInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '6px',
  padding: theme.spacing(1, 1),
  borderRadius: '8px',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  marginBottom: theme.spacing(0.75),

  '& svg': {
    color: '#D4AF37',
    marginTop: '2px',
    flexShrink: 0,
  },

  '& p': {
    fontSize: '11px',
    color: 'rgba(255, 255, 255, 0.7)',
    margin: 0,
    lineHeight: 1.3,
  },
}));

export const DirectionsButton = styled(motion.a)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  padding: theme.spacing(1, 1.5),
  borderRadius: '8px',
  fontSize: '9px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  background: '#D4AF37',
  color: '#0a1d2c',
  textDecoration: 'none',
  border: 'none',
  cursor: 'pointer',
  width: '100%',
  transition: 'all 0.3s ease',
  boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)',

  '&:hover': {
    background: 'white',
    boxShadow: '0 12px 28px rgba(59, 130, 246, 0.4)',
    transform: 'scale(1.02)',
  },

  '&:active': {
    transform: 'scale(0.95)',
  },

  '& svg': {
    transition: 'transform 0.3s ease',
  },

  '&:hover svg': {
    transform: 'translate(2px, -2px)',
  },
}));
// ═══════════════════════════════════════════════════════════════════════════════
// BOTTOM BAR
// ═══════════════════════════════════════════════════════════════════════════════

export const FooterBottom = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  paddingTop: theme.spacing(1.5),
  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
}));

export const Copyright = styled(Box)({
  fontSize: '8px',
  color: 'rgba(255, 255, 255, 0.25)',
  fontFamily: '"Inter", sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  textAlign: 'center',
  '@media (min-width: 768px)': {
    textAlign: 'left',
  },
});

export const FooterLinks = styled(Box)({
  display: 'flex',
  gap: '12px',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '@media (min-width: 768px)': {
    gap: '16px',
    justifyContent: 'flex-end',
  },
});

export const FooterBottomLink = styled(motion.button)({
  fontSize: '8px',
  color: 'rgba(255, 255, 255, 0.25)',
  fontFamily: '"Inter", sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  transition: 'color 0.3s ease',

  '&:hover': {
    color: 'white',
  },
});

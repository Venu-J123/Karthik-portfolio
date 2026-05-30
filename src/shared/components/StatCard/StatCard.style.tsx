import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// ── Liquid Glass Card ────────────────────────────────────────────────────────
// Mimics Apple iOS 26 "Liquid Glass" surfaces: translucent material,
// edge specular, diagonal refraction, diffuse float shadow.
export const LiquidCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3.5, 3),
  borderRadius: '28px',

  // Fully transparent — background image shows through
  background: 'rgba(255, 255, 255, 0.10)',
  backdropFilter: 'none',
  WebkitBackdropFilter: 'none',

  // Crisp glass edge + top specular rim
  border: '1px solid rgba(255, 255, 255, 0.20)',
  boxShadow: [
    'inset 0 1.5px 0 rgba(255, 255, 255, 0.28)',   // top edge highlight
    'inset 0 -1px 0 rgba(255, 255, 255, 0.06)',     // bottom subtle edge
    'inset 1px 0 0 rgba(255, 255, 255, 0.08)',      // left edge
    '0 8px 32px rgba(0, 0, 0, 0.14)',               // float shadow
    '0 2px 8px rgba(0, 0, 0, 0.08)',                // close shadow
  ].join(', '),

  overflow: 'hidden',
  cursor: 'default',
  transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',

  '&::before': { display: 'none' },
  '&::after': { display: 'none' },

  '& > *': {
    position: 'relative',
    zIndex: 1,
  },

  // Hover: only edge brightens
  '&:hover': {
    background: 'transparent',
    borderColor: 'rgba(255, 255, 255, 0.34)',
    boxShadow: [
      'inset 0 2px 0 rgba(255, 255, 255, 0.34)',
      'inset 0 -1px 0 rgba(255, 255, 255, 0.09)',
      'inset 1px 0 0 rgba(255, 255, 255, 0.12)',
      '0 16px 44px rgba(0, 0, 0, 0.18)',
      '0 4px 12px rgba(0, 0, 0, 0.10)',
      '0 0 0 1px rgba(255, 255, 255, 0.10)',
    ].join(', '),
  },

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5, 1.25),
    borderRadius: '16px',
    maxWidth: '280px',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

// ── Icon orb — small glass bubble holding the icon ──────────────────────────
export const StatIconWrap = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 60,
  height: 60,
  borderRadius: '50%',
  marginBottom: theme.spacing(1.75),

  background: 'rgba(212, 175, 55, 0.10)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  border: '1px solid rgba(212, 175, 55, 0.22)',
  boxShadow: [
    'inset 0 1px 0 rgba(255, 255, 255, 0.22)',
    '0 4px 18px rgba(212, 175, 55, 0.10)',
  ].join(', '),

  color: '#D4AF37',
  transition: 'background 0.35s ease, box-shadow 0.35s ease',

  '& svg': {
    fontSize: '1.7rem',
    width: '1.7rem',
    height: '1.7rem',
    filter: 'drop-shadow(0 1px 6px rgba(212, 175, 55, 0.40))',
    transition: 'filter 0.35s ease',
  },

  // Orb brightens on parent card hover
  [`${LiquidCard}:hover &`]: {
    background: 'rgba(212, 175, 55, 0.16)',
    boxShadow: [
      'inset 0 1px 0 rgba(255, 255, 255, 0.28)',
      '0 6px 24px rgba(212, 175, 55, 0.18)',
    ].join(', '),
    '& svg': {
      filter: 'drop-shadow(0 2px 10px rgba(212, 175, 55, 0.60))',
    },
  },

  [theme.breakpoints.down('sm')]: {
    width: 36,
    height: 36,
    marginBottom: theme.spacing(1),
    '& svg': { fontSize: '1.1rem', width: '1.1rem', height: '1.1rem' },
  },
}));

// ── Stat value — gradient number ─────────────────────────────────────────────
export const StatValue = styled(Box)(({ theme }) => ({
  fontSize: 'clamp(1.9rem, 4.5vw, 2.75rem)',
  fontFamily: '"Bebas Neue", sans-serif',
  fontWeight: 700,
  letterSpacing: '0.04em',
  lineHeight: 1,
  marginBottom: '0.6rem',
  background: 'linear-gradient(140deg, #ffffff 0%, rgba(212, 175, 55, 0.90) 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',

  [theme.breakpoints.down('sm')]: {
    fontSize: '1.4rem',
    marginBottom: '0.4rem',
  },
}));

// ── Stat label — subtle uppercase caption ────────────────────────────────────
export const StatLabel = styled(Box)(({ theme }) => ({
  fontSize: '0.72rem',
  fontFamily: '"Inter", sans-serif',
  color: 'rgba(255, 255, 255, 0.72)',
  textTransform: 'uppercase',
  letterSpacing: '0.16em',
  fontWeight: 600,
  textAlign: 'center',
  lineHeight: 1.5,

  [theme.breakpoints.down('sm')]: {
    fontSize: '0.67rem',
    letterSpacing: '0.10em',
  },
}));

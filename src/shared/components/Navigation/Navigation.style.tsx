import { styled, AppBar, Box } from '@mui/material';
import { motion } from 'motion/react';

export const NavBar = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 1000,
  background: 'transparent',
  boxShadow: 'none',
  transition: 'all 0.5s ease',
  
  '&.scrolled': {
    background: 'rgba(10, 29, 44, 0.4)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    padding: theme.spacing(1, 0),
  },
}));

export const NavContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1280px',
  margin: '0 auto',
  padding: theme.spacing(1.5, 1),
  display: 'flex',
  alignItems: 'center',
  height: '64px',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(1.5, 2),
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(1.5, 3),
  },
}));

export const ScrollProgressBar = styled(motion.div)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: '4px',
  background: 'linear-gradient(to right, #D4AF37, #E8C547, rgba(212, 175, 55, 0.4))',
  transition: 'width 0.1s ease-out',
});

export const BrandButton = styled(motion.button)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  flexShrink: 0,
  padding: 0,
  color: 'inherit',
  fontSize: 'inherit',
  fontFamily: 'inherit',

  '.brand-avatar': {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #D4AF37',
    boxShadow: '0 4px 20px rgba(212, 175, 55, 0.6), 0 0 0 4px rgba(212, 175, 55, 0.2)',
    position: 'relative',
    flexShrink: 0,
    background: '#0a1d2c',
    transition: 'all 0.3s ease',

    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      inset: '-6px',
      background: 'conic-gradient(from 180deg, transparent, rgba(212, 175, 55, 0.4), transparent)',
      borderRadius: '50%',
      opacity: 0,
      transition: 'opacity 0.3s ease',
      pointerEvents: 'none',
    },
  },

  '&:hover .brand-avatar': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 28px rgba(212, 175, 55, 0.8), 0 0 0 4px rgba(212, 175, 55, 0.3)',

    '&::before': {
      opacity: 1,
    },
  },

  '.brand-text': {
    display: 'none',
    '@media (min-width: 768px)': {
      display: 'block',
    },

    '.brand-name': {
      fontSize: '12px',
      fontWeight: 'bold',
      color: 'rgba(255, 255, 255, 0.9)',
      lineHeight: 1,
      letterSpacing: '0.5px',
      margin: 0,
    },

    '.brand-sub': {
      fontSize: '10px',
      color: 'rgba(255, 255, 255, 0.5)',
      fontWeight: '500',
      margin: 0,
    },
  },
});

export const Spacer = styled(Box)({
  flex: 1,
  display: 'none',
  '@media (min-width: 1024px)': {
    display: 'block',
  },
});

export const DesktopNav = styled(Box)({
  display: 'none',
  alignItems: 'center',
  gap: '8px',
  '@media (min-width: 1024px)': {
    display: 'flex',
  },
});

export const NavLink = styled(motion.button)({
  position: 'relative',
  padding: '8px 12px',
  borderRadius: '8px',
  fontSize: '12px',
  fontWeight: 600,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  color: 'rgba(255, 255, 255, 0.6)',

  '&:hover': {
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },

  '&.active': {
    color: '#0a1d2c',
    background: '#D4AF37',
    boxShadow: '0 8px 16px rgba(212, 175, 55, 0.4)',
  },
});

export const CTAButton = styled(motion.button)({
  display: 'none',
  padding: '8px 20px',
  '@media (min-width: 1024px)': {
    display: 'block',
  },
  background: 'linear-gradient(to bottom right, #C9A84C, rgba(201, 168, 76, 0.8))',
  color: '#0a1d2c',
  fontWeight: 'bold',
  fontSize: '12px',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 8px 24px rgba(201, 168, 76, 0.4)',
  transition: 'all 0.3s ease',

  '&:hover': {
    boxShadow: '0 12px 32px rgba(201, 168, 76, 0.6)',
    transform: 'scale(1.05)',
  },

  '&:active': {
    transform: 'scale(0.95)',
  },
});

export const MobileMenuButton = styled(motion.button)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media (min-width: 1024px)': {
    display: 'none',
  },
  width: '40px',
  height: '40px',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  color: 'rgba(255, 255, 255, 0.7)',
  transition: 'all 0.3s ease',
  marginLeft: 'auto',

  '&:hover': {
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
  },
});

export const MobileMenuBackdrop = styled(motion.div)({
  position: 'fixed',
  inset: 0,
  zIndex: 999,
  background: 'rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(4px)',
});

export const MobileDrawer = styled(motion.aside)({
  position: 'fixed',
  top: 0,
  right: 0,
  height: '100%',
  width: '100%',
  maxWidth: '400px',
  zIndex: 1001,
  background: 'linear-gradient(to bottom, #0a1d2c, #0a1d2c, rgba(10, 29, 44, 0.95))',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)',
  borderLeft: '1px solid rgba(59, 130, 246, 0.2)',
  overflowY: 'auto',
});

export const DrawerHeader = styled(Box)({
  position: 'relative',
  padding: '24px',
  borderBottom: '1px solid rgba(59, 130, 246, 0.1)',
  background: 'linear-gradient(to right, rgba(59, 130, 246, 0.05), transparent)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const DrawerTitle = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',

  '.drawer-avatar': {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2.5px solid #D4AF37',
    boxShadow: '0 6px 24px rgba(212, 175, 55, 0.7), 0 0 0 4px rgba(212, 175, 55, 0.15)',
    flexShrink: 0,
    background: '#0a1d2c',
    position: 'relative',

    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: 'linear-gradient(45deg, transparent, rgba(212, 175, 55, 0.2))',
      pointerEvents: 'none',
    },
  },

  '.drawer-text': {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',

    '.drawer-name': {
      fontSize: '12px',
      fontWeight: 'bold',
      color: 'white',
      letterSpacing: '0.5px',
    },

    '.drawer-sub': {
      fontSize: '9px',
      color: 'rgba(255, 255, 255, 0.5)',
      fontWeight: '500',
    },
  },
});

export const DrawerCloseButton = styled(motion.button)({
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: 'rgba(255, 255, 255, 0.6)',
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',

  '&:hover': {
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '6px',
  },
});

export const DrawerNav = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  gap: '8px',
  overflowY: 'auto',
});

export const DrawerNavLink = styled(motion.button)({
  width: '100%',
  padding: '16px 20px',
  borderRadius: '10px',
  fontSize: '14px',
  fontWeight: '600',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: 'rgba(255, 255, 255, 0.6)',
  textAlign: 'left',

  '&:hover': {
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    borderLeft: '2px solid #D4AF37',
     color: 'white',
    paddingLeft: '18px',
  },

  '&.active': {
    backgroundColor: 'rgba(212, 175, 55, 0.2)',
    borderLeft: '3px solid #D4AF37',
    color: '#D4AF37',
    paddingLeft: '17px',
  },
});

export const DrawerDivider = styled(Box)({
  height: '1px',
  background: 'linear-gradient(to right, rgba(59, 130, 246, 0.3), rgba(255, 255, 255, 0.08), transparent)',
  margin: '8px 0',
});

export const DrawerCTASection = styled(Box)({
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  borderTop: '1px solid rgba(59, 130, 246, 0.1)',
});

export const DrawerCTA = styled(motion.button)({
  width: '100%',
  padding: '16px 20px',
  borderRadius: '10px',
  fontSize: '12px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  border: 'none',
  cursor: 'pointer',
  background: 'linear-gradient(135deg, #C9A84C 0%, rgba(201, 168, 76, 0.8) 100%)',
  color: '#0a1d2c',
  boxShadow: '0 8px 24px rgba(201, 168, 76, 0.3)',
  transition: 'all 0.3s ease',

  '&:hover': {
    boxShadow: '0 12px 32px rgba(201, 168, 76, 0.5)',
    transform: 'scale(1.02)',
  },

  '&:active': {
    transform: 'scale(0.95)',
  },
});

export const DrawerSubtext = styled(Box)({
  fontSize: '10px',
  color: 'rgba(255, 255, 255, 0.4)',
  textAlign: 'center',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontWeight: '500',
});

export const NavLinksContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));
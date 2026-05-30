import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D4AF37', // Gold
      light: '#E8C547',
      dark: '#B8941F',
    },
    secondary: {
      main: '#ffffff', // White
      light: '#ffffff',
      dark: '#e5e7eb',
    },
    background: {
      default: '#0a1d2c', // Deep Navy
      paper: '#112240', // Slightly lighter navy
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    divider: 'rgba(255, 255, 255, 0.1)',
    error: {
      main: '#ef4444',
    },
    warning: {
      main: '#f59e0b',
    },
    success: {
      main: '#10b981',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Inter", ui-sans-serif, system-ui, sans-serif',
    h1: {
      fontFamily: '"Bebas Neue", sans-serif',
      fontSize: 'clamp(2rem, 8vw, 5rem)',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      lineHeight: 0.9,
    },
    h2: {
      fontFamily: '"Bebas Neue", sans-serif',
      fontSize: 'clamp(1.5rem, 6vw, 3.5rem)',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: '"Bebas Neue", sans-serif',
      fontSize: 'clamp(1.25rem, 4vw, 2.5rem)',
      fontWeight: 700,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '1rem',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          overflowX: 'hidden',
        },
        body: {
          overflowX: 'hidden',
          scrollBehavior: 'smooth',
        },
        '::selection': {
          backgroundColor: '#3b82f6',
          color: '#ffffff',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        positionFixed: {
          top: 0,
          left: 0,
          right: 0,
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontWeight: 600,
          borderRadius: '0.5rem',
          transition: 'all 0.3s ease',
        },
        contained: {
          backgroundColor: '#3b82f6',
          '&:hover': {
            backgroundColor: '#1d4ed8',
          },
        },
        outlined: {
          borderColor: 'rgba(255, 255, 255, 0.2)',
          color: '#ffffff',
          '&:hover': {
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          transition: 'all 0.3s ease',
        },
      },
    },
  },
});

import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';

export const LayoutWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  background: theme.palette.background.default,
}));

export const MainContent = styled(Box)(({ theme }) => ({
  flex: 1,
  width: '100%',
  paddingTop: '64px',
  [theme.breakpoints.down('sm')]: {
    paddingTop: '64px',
  },
}));

export const PageContainer = styled(Container)(({ theme }) => ({
  maxWidth: '1400px',
  margin: '0 auto',
  padding: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

export const SectionWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(8),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(4),
  },
}));

import { styled } from '@mui/material/styles';
import { Dialog, DialogContent, TextField, Button } from '@mui/material';
import { motion } from 'motion/react';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    backdropFilter: 'blur(16px)',
  },
  '& .MuiDialog-paper': {
    backgroundColor: '#0a1d2c',
    backgroundImage: 'linear-gradient(135deg, #0a1d2c 0%, #112240 100%)',
    borderRadius: '24px',
    border: '1px solid rgba(212, 175, 55, 0.2)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    maxWidth: '600px',
    width: '100%',
    margin: '16px',
    [theme.breakpoints.down('sm')]: {
      margin: '16px',
      borderRadius: '14px',
      maxHeight: 'calc(100vh - 32px)',
      overflowY: 'auto',
      transform: 'scale(0.88)',
      transformOrigin: 'center center',
    },
  },
}));

export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 1.5),
  },
  position: 'relative',
  overflow: 'visible',
}));

export const CloseButton = styled(Button)({
  position: 'absolute',
  right: '16px',
  top: '16px',
  minWidth: 'unset',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  padding: 0,
  backgroundColor: 'rgba(212, 175, 55, 0.1)',
  color: '#D4AF37',
  zIndex: 10,
  '&:hover': {
    backgroundColor: 'rgba(212, 175, 55, 0.2)',
    transform: 'rotate(90deg)',
    transition: 'all 0.3s ease',
  },
  '&:disabled': {
    opacity: 0.5,
  },
});

export const FormHeader = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(2),
  },
}));

export const FormTitle = styled('h2')(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  color: '#ffffff',
  marginBottom: '12px',
  lineHeight: 1.2,
  '& .highlight': {
    color: '#D4AF37',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    marginBottom: '8px',
  },
}));

export const FormDescription = styled('p')({
  fontSize: '0.95rem',
  color: 'rgba(255, 255, 255, 0.7)',
  lineHeight: 1.6,
  margin: 0,
});

export const FormFields = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

export const FormRow = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const DateRow = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1.5fr',
  gap: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const StyledTextField = styled(TextField)({
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: 600,
    '&.Mui-focused': {
      color: '#D4AF37',
    },
  },
  '& .MuiInputBase-root': {
    color: '#ffffff',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
    '&.Mui-focused': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#D4AF37',
        borderWidth: '2px',
      },
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(212, 175, 55, 0.3)',
  },
  '& .MuiInputBase-input': {
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.4)',
      opacity: 1,
    },
  },
});

export const StyledSelect = styled(TextField)({
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: 600,
    '&.Mui-focused': {
      color: '#D4AF37',
    },
  },
  '& .MuiInputBase-root': {
    color: '#ffffff',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
    '&.Mui-focused': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#D4AF37',
        borderWidth: '2px',
      },
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(212, 175, 55, 0.3)',
  },
  '& .MuiSelect-icon': {
    color: '#D4AF37',
  },
});

export const PriceBreakdownBox = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: 'rgba(212, 175, 55, 0.1)',
  borderRadius: '16px',
  border: '1px solid rgba(212, 175, 55, 0.3)',
  marginTop: theme.spacing(2),
}));

export const PriceBreakdownTitle = styled('div')({
  fontSize: '1.125rem',
  fontWeight: 700,
  color: '#D4AF37',
  marginBottom: '16px',
  textAlign: 'center',
});

export const PriceBreakdownRow = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 0',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  '&:last-child': {
    borderBottom: 'none',
    paddingTop: '16px',
    marginTop: '8px',
    borderTop: '2px solid #D4AF37',
  },
});

export const PriceBreakdownLabel = styled('span')({
  fontSize: '0.95rem',
  color: 'rgba(255, 255, 255, 0.8)',
  fontWeight: 500,
});

export const PriceBreakdownValue = styled('span')({
  fontSize: '1.1rem',
  color: '#ffffff',
  fontWeight: 700,
  '&.total': {
    color: '#D4AF37',
    fontSize: '1.3rem',
  },
});

export const SubmitButton = styled(Button)<{ variant?: 'outlined' | 'contained' }>(({ variant }) => ({
  padding: '14px 32px',
  borderRadius: '12px',
  fontSize: '1rem',
  fontWeight: 700,
  textTransform: 'none',
  transition: 'all 0.3s ease',
  ...(variant === 'outlined' ? {
    color: '#D4AF37',
    border: '2px solid #D4AF37',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'rgba(212, 175, 55, 0.1)',
      borderColor: '#D4AF37',
    },
  } : {
    background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)',
    color: '#0a1d2c',
    boxShadow: '0 8px 24px rgba(212, 175, 55, 0.4)',
    border: 'none',
    '&:hover': {
      background: 'linear-gradient(135deg, #F4D03F 0%, #D4AF37 100%)',
      boxShadow: '0 12px 32px rgba(212, 175, 55, 0.6)',
      transform: 'translateY(-2px)',
    },
  }),
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
}));

export const PrivacyNote = styled('p')({
  fontSize: '0.875rem',
  color: 'rgba(255, 255, 255, 0.6)',
  textAlign: 'center',
  margin: '24px 0 0 0',
  lineHeight: 1.6,
});

export const SuccessMessage = styled(motion.div)({
  padding: '16px',
  backgroundColor: 'rgba(76, 175, 80, 0.2)',
  border: '1px solid rgba(76, 175, 80, 0.5)',
  borderRadius: '12px',
  color: '#4CAF50',
  fontSize: '1rem',
  fontWeight: 600,
  textAlign: 'center',
  marginBottom: '24px',
});

export const ErrorMessage = styled(motion.div)({
  padding: '16px',
  backgroundColor: 'rgba(244, 67, 54, 0.2)',
  border: '1px solid rgba(244, 67, 54, 0.5)',
  borderRadius: '12px',
  color: '#F44336',
  fontSize: '1rem',
  fontWeight: 600,
  textAlign: 'center',
  marginBottom: '24px',
});

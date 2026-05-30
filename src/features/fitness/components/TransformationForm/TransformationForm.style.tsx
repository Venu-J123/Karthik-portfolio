import { styled } from '@mui/material/styles';
import { Box, Dialog, DialogContent, TextField, Button, IconButton } from '@mui/material';
import { motion } from 'motion/react';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '1.5rem',
    maxWidth: '600px',
    width: '100%',
    margin: '1rem',
    [theme.breakpoints.up('md')]: {
      borderRadius: '2rem',
    },
  },
  '& .MuiBackdrop-root': {
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
}));

export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
}));

export const FormHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(4),
  },
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1),
  top: theme.spacing(1),
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover': {
    color: theme.palette.common.white,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

export const FormTitle = styled('h2')(({ theme }) => ({
  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
  fontFamily: '"Bebas Neue", sans-serif',
  fontWeight: 900,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(1),
  lineHeight: 1.2,
}));

export const FormDescription = styled(Box)(({ theme }) => ({
  fontSize: '0.875rem',
  color: 'rgba(255, 255, 255, 0.7)',
  lineHeight: 1.6,
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
}));

export const FormFields = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: 600,
    fontSize: '0.875rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-root': {
    color: theme.palette.common.white,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '0.75rem',
    fontSize: '0.875rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: '2px',
    },
  },
  '& .MuiInputBase-input::placeholder': {
    color: 'rgba(255, 255, 255, 0.4)',
    opacity: 1,
  },
  '& .MuiFormHelperText-root': {
    color: theme.palette.primary.main,
    fontSize: '0.8125rem',
    fontWeight: 600,
    marginTop: theme.spacing(1),
  },
}));

export const SubmitButton = styled(Button)<{ variant?: 'contained' | 'outlined' }>(({ theme, variant = 'contained' }) => ({
  padding: '1rem 2rem',
  borderRadius: '0.75rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  fontSize: '0.875rem',
  transition: 'all 0.3s ease',
  ...(variant === 'outlined' ? {
    backgroundColor: 'transparent',
    color: theme.palette.common.white,
    border: `2px solid rgba(255, 255, 255, 0.3)`,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      transform: 'translateY(-2px)',
    },
    '&:active': {
      transform: 'scale(0.98)',
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      color: 'rgba(255, 255, 255, 0.3)',
    },
  } : {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    boxShadow: '0 10px 15px -3px rgb(59 130 246 / 0.3)',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: '0 20px 25px -5px rgb(59 130 246 / 0.4)',
      transform: 'translateY(-2px)',
    },
    '&:active': {
      transform: 'scale(0.98)',
    },
    '&:disabled': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'rgba(255, 255, 255, 0.3)',
    },
  }),
  [theme.breakpoints.up('md')]: {
    padding: '1.25rem 2.5rem',
    fontSize: '1rem',
  },
}));

export const PrivacyNote = styled(Box)(({ theme }) => ({
  fontSize: '0.75rem',
  color: 'rgba(255, 255, 255, 0.5)',
  textAlign: 'center',
  marginTop: theme.spacing(2),
  lineHeight: 1.5,
  [theme.breakpoints.up('md')]: {
    fontSize: '0.8125rem',
  },
}));

export const SuccessMessage = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: '0.75rem',
  backgroundColor: `${theme.palette.success.main}20`,
  border: `1px solid ${theme.palette.success.main}40`,
  color: theme.palette.success.light,
  fontSize: '0.875rem',
  textAlign: 'center',
  fontWeight: 600,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
    padding: theme.spacing(2.5),
  },
}));

export const ErrorMessage = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: '0.75rem',
  backgroundColor: `${theme.palette.error.main}20`,
  border: `1px solid ${theme.palette.error.main}40`,
  color: theme.palette.error.light,
  fontSize: '0.875rem',
  textAlign: 'center',
  fontWeight: 600,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
    padding: theme.spacing(2.5),
  },
}));

export const FormRow = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2.5),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing(3),
  },
}));

export const DateRow = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1.5fr',
  gap: theme.spacing(1.5),
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(2),
  },
}));

export const StyledSelect = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: 600,
    fontSize: '0.875rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-root': {
    color: theme.palette.common.white,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '0.75rem',
    fontSize: '0.875rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
     '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: '2px',
    },
  },
  '& .MuiSelect-icon': {
    color: 'rgba(255, 255, 255, 0.6)',
  },
  '& .MuiFormHelperText-root': {
    color: theme.palette.primary.main,
    fontSize: '0.8125rem',
    fontWeight: 600,
    marginTop: theme.spacing(1),
  },
  '& .MuiMenu-paper': {
    backgroundColor: theme.palette.background.paper,
  },
}));

export const ImageUploadBox = styled(Box)(({ theme }) => ({
  border: `2px dashed rgba(255, 255, 255, 0.2)`,
  borderRadius: '1rem',
  padding: theme.spacing(3),
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
}));

export const ImageUploadLabel = styled('label')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  width: '100%',
  minHeight: '160px',
});

export const ImagePreview = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '300px',
  height: 'auto',
  maxHeight: '300px',
  objectFit: 'cover',
  borderRadius: '0.75rem',
  border: `2px solid ${theme.palette.primary.main}`,
}));

export const RemoveImageButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  backgroundColor: theme.palette.error.main,
  color: theme.palette.common.white,
  padding: theme.spacing(0.5),
  '&:hover': {
    backgroundColor: theme.palette.error.dark,
  },
  '&:disabled': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'rgba(255, 255, 255, 0.3)',
  },
}));

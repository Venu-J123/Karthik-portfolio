import { styled } from '@mui/material/styles';
import { Box, Dialog, DialogContent, TextField, Button, IconButton } from '@mui/material';
import { motion } from 'motion/react';

// ==================== FLOATING BUTTON ====================
export const FloatingWhatsAppButton = styled(motion.button)(({ theme }) => ({
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
  border: 'none',
  boxShadow: '0 8px 32px rgba(37, 211, 102, 0.4)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 12px 40px rgba(37, 211, 102, 0.6)',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '2rem',
    color: theme.palette.common.white,
  },
  [theme.breakpoints.down('md')]: {
    bottom: '1.5rem',
    right: '1.5rem',
    width: '56px',
    height: '56px',
    '& .MuiSvgIcon-root': {
      fontSize: '1.75rem',
    },
  },
}));

export const PulseRing = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  border: '3px solid #25D366',
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(1.5)',
      opacity: 0,
    },
  },
});

// ==================== MENU DIALOG ====================
export const MenuDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: 'rgba(17, 34, 64, 0.98)',
    backdropFilter: 'blur(20px)',
    borderRadius: '1.5rem',
    border: '1px solid rgba(212, 175, 55, 0.2)',
    maxWidth: '440px',
    width: '100%',
    margin: '1rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    [theme.breakpoints.up('md')]: {
      borderRadius: '2rem',
      margin: '2rem',
    },
  },
  '& .MuiBackdrop-root': {
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
}));

export const MenuContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
}));

export const MenuHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  textAlign: 'center',
}));

export const MenuTitle = styled('h2')(({ theme }) => ({
  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
  fontFamily: '"Bebas Neue", sans-serif',
  fontWeight: 900,
  background: 'linear-gradient(to right, #25D366, #128C7E)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: theme.spacing(1),
  lineHeight: 1.2,
}));

export const MenuDescription = styled(Box)(({ theme }) => ({
  fontSize: '0.875rem',
  color: 'rgba(255, 255, 255, 0.7)',
  lineHeight: 1.6,
}));

export const MenuOptions = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
}));

export const MenuOption = styled(motion.button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  background: 'linear-gradient(135deg, rgba(10, 29, 44, 0.5), rgba(17, 34, 64, 0.5))',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '1rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  textAlign: 'left',
  color: theme.palette.common.white,
  '&:hover': {
    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(244, 208, 63, 0.15))',
    borderColor: theme.palette.primary.main,
    transform: 'translateX(8px)',
  },
}));

export const OptionIcon = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(244, 208, 63, 0.2))',
  border: '1px solid rgba(212, 175, 55, 0.3)',
  flexShrink: 0,
  '& .MuiSvgIcon-root': {
    fontSize: '1.5rem',
    color: theme.palette.primary.main,
  },
}));

export const OptionContent = styled(Box)({
  flex: 1,
});

export const OptionTitle = styled('h3')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 700,
  color: theme.palette.common.white,
  marginBottom: '0.25rem',
}));

export const OptionSubtitle = styled('p')(({ theme }) => ({
  fontSize: '0.75rem',
  color: 'rgba(255, 255, 255, 0.6)',
  lineHeight: 1.4,
}));

export const CloseMenuButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1),
  top: theme.spacing(1),
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover': {
    color: theme.palette.common.white,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

// ==================== INLINE MENU ====================
export const MenuContainer = styled(motion.div)(({ theme }) => ({
  position: 'fixed',
  bottom: '6rem',
  right: '2rem',
  zIndex: 9998,
  width: '320px',
  maxHeight: 'calc(100vh - 10rem)',
  overflowY: 'auto',
  [theme.breakpoints.down('md')]: {
    bottom: '5rem',
    right: '1.5rem',
    width: '280px',
  },
  // Custom scrollbar
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'rgba(212, 175, 55, 0.3)',
    borderRadius: '3px',
    '&:hover': {
      background: 'rgba(212, 175, 55, 0.5)',
    },
  },
}));

export const MenuCard = styled(Box)(({ theme }) => ({
  background: 'rgba(17, 34, 64, 0.98)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(212, 175, 55, 0.2)',
  borderRadius: '1.5rem',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
  overflow: 'hidden',
}));

export const MenuHeaderInline = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5, 2.5, 2),
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
}));

export const MenuTitleInline = styled('h3')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 800,
  background: 'linear-gradient(to right, #25D366, #128C7E)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const MenuDescriptionInline = styled('p')(({ theme }) => ({
  fontSize: '0.75rem',
  color: 'rgba(255, 255, 255, 0.6)',
  lineHeight: 1.4,
}));

export const MenuOptionsInline = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

export const MenuOptionInline = styled(motion.button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.5),
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '0.75rem',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  textAlign: 'left',
  color: theme.palette.common.white,
  '&:hover': {
    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(244, 208, 63, 0.1))',
    borderColor: 'rgba(212, 175, 55, 0.4)',
    transform: 'translateX(4px)',
  },
}));

export const OptionIconInline = styled(Box)(({ theme }) => ({
  width: '40px',
  height: '40px',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(244, 208, 63, 0.15))',
  border: '1px solid rgba(212, 175, 55, 0.25)',
  flexShrink: 0,
  '& .MuiSvgIcon-root': {
    fontSize: '1.25rem',
    color: theme.palette.primary.main,
  },
}));

export const OptionContentInline = styled(Box)({
  flex: 1,
  minWidth: 0,
});

export const OptionTitleInline = styled('h4')(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 700,
  color: theme.palette.common.white,
  marginBottom: '0.125rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));
export const OptionSubtitleInline = styled('p')(({ theme }) => ({
  fontSize: '0.6875rem',
  color: 'rgba(255, 255, 255, 0.5)',
  lineHeight: 1.3,
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}));

// ==================== MENU DIALOG (Keep for backward compatibility) ====================
export const FormDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: 'rgba(17, 34, 64, 0.98)',
    backdropFilter: 'blur(20px)',
    borderRadius: '1.5rem',
    border: '1px solid rgba(212, 175, 55, 0.2)',
    maxWidth: '600px',
    width: '100%',
    margin: '1rem',
    maxHeight: 'calc(100vh - 2rem)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    [theme.breakpoints.up('md')]: {
      borderRadius: '2rem',
      margin: '2rem',
    },
  },
  '& .MuiBackdrop-root': {
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
}));

export const FormDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
}));

export const FormHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const FormTitle = styled('h2')(({ theme }) => ({
  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
  fontFamily: '"Bebas Neue", sans-serif',
  fontWeight: 900,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(1),
  lineHeight: 1.2,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
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
}));

export const FormRow = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: '1fr 1fr',
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: 600,
    fontSize: '0.875rem',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-root': {
    color: theme.palette.common.white,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '0.75rem',
    fontSize: '0.875rem',
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
  '& .MuiInputAdornment-root .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
    fontSize: '1.25rem',
  },
}));

export const StyledSelect = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: 600,
    fontSize: '0.875rem',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-root': {
    color: theme.palette.common.white,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '0.75rem',
    fontSize: '0.875rem',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.1)',
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
    color: theme.palette.primary.main,
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2),
  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
  color: theme.palette.common.white,
  fontWeight: 800,
  fontSize: '1rem',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  borderRadius: '1rem',
  boxShadow: '0 8px 24px rgba(37, 211, 102, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #128C7E 0%, #25D366 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 32px rgba(37, 211, 102, 0.5)',
  },
  '&:disabled': {
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'rgba(255, 255, 255, 0.4)',
    boxShadow: 'none',
  },
}));

export const SafetyNoticeBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  background: 'rgba(239, 68, 68, 0.1)',
  border: '1px solid rgba(239, 68, 68, 0.3)',
  borderRadius: '0.75rem',
  display: 'flex',
  gap: theme.spacing(1.5),
  alignItems: 'flex-start',
}));

export const SafetyIcon = styled(Box)(({ theme }) => ({
  color: '#ef4444',
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
}));

export const SafetyContent = styled(Box)({
  flex: 1,
});

export const SafetyTitle = styled('h4')(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 700,
  color: '#ef4444',
  marginBottom: '0.25rem',
}));

export const SafetyText = styled('div')(({ theme }) => ({
  fontSize: '0.75rem',
  color: 'rgba(255, 255, 255, 0.7)',
  lineHeight: 1.5,
  '& ul': {
    margin: '0.5rem 0 0 1rem',
    paddingLeft: 0,
  },
  '& li': {
    marginBottom: '0.25rem',
  },
}));

export const SuccessMessage = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(2),
  background: 'rgba(16, 185, 129, 0.1)',
  border: '1px solid rgba(16, 185, 129, 0.3)',
  borderRadius: '0.75rem',
  color: '#10b981',
  fontWeight: 600,
  fontSize: '0.875rem',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(2),
}));

export const ErrorMessage = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  background: 'rgba(239, 68, 68, 0.1)',
  border: '1px solid rgba(239, 68, 68, 0.3)',
  borderRadius: '0.75rem',
  color: '#ef4444',
  fontWeight: 600,
  fontSize: '0.875rem',
  marginBottom: theme.spacing(2),
}));

export const CloseFormButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1),
  top: theme.spacing(1),
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover': {
    color: theme.palette.common.white,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

// ==================== GYM MEMBERSHIP STYLES ====================
export const PlanCard = styled(motion.div)<{ selected?: boolean }>(({ theme, selected }) => ({
  padding: theme.spacing(2),
  background: selected 
    ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(244, 208, 63, 0.15))'
    : 'rgba(255, 255, 255, 0.05)',
  border: selected 
    ? `2px solid ${theme.palette.primary.main}`
    : '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '0.75rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    transform: 'translateY(-2px)',
  },
}));

export const PlanTitle = styled('h4')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 700,
  color: theme.palette.common.white,
  marginBottom: '0.25rem',
}));

export const PlanPrice = styled('p')(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 800,
  color: theme.palette.primary.main,
  marginBottom: '0.5rem',
}));

export const PlanFeatures = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  fontSize: '0.75rem',
  color: 'rgba(255, 255, 255, 0.7)',
  '& li': {
    marginBottom: '0.25rem',
    paddingLeft: '1.25rem',
    position: 'relative',
    '&:before': {
      content: '"✓"',
      position: 'absolute',
      left: 0,
      color: theme.palette.success.main,
      fontWeight: 700,
    },
  },
}));
// ==================== LOCATION BUTTON STYLES ====================
export const LocationButton = styled(motion.button)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1.5),
  background: 'linear-gradient(135deg, #10b981, #059669)',
  border: 'none',
  borderRadius: '0.75rem',
  color: theme.palette.common.white,
  fontSize: '0.875rem',
  fontWeight: 700,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  transition: 'all 0.3s ease',
  marginTop: theme.spacing(1.5),
  '&:hover:not(:disabled)': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 20px rgba(16, 185, 129, 0.3)',
  },
  '&:disabled': {
    opacity: 0.6,
    cursor: 'wait',
  },
}));
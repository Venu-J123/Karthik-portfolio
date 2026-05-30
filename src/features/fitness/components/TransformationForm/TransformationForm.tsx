import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import PublicIcon from '@mui/icons-material/Public';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import WcIcon from '@mui/icons-material/Wc';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HeightIcon from '@mui/icons-material/Height';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { InputAdornment, MenuItem, Box } from '@mui/material';
import {
  StyledDialog,
  StyledDialogContent,
  FormHeader,
  CloseButton,
  FormTitle,
  FormDescription,
  FormFields,
  FormRow,
  DateRow,
  StyledTextField,
  StyledSelect,
  SubmitButton,
  PrivacyNote,
  SuccessMessage,
  ErrorMessage,
} from './TransformationForm.style';

interface TransformationFormProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber: string;
}

interface FormData {
  name: string;
  birthDate: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  country: string;
  city: string;
  gender: string;
  weight: string;
  height: string;
  favFood: string;
  instagram: string;
  whatsapp: string;
  maritalStatus: string;
  reason: string;
}

export const TransformationForm = ({ isOpen, onClose, whatsappNumber }: TransformationFormProps) => {
  const months = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => (currentYear - i).toString());

  const [formData, setFormData] = useState<FormData>({
    name: '',
    birthDate: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    country: '',
    city: '',
    gender: '',
    weight: '',
    height: '',
    favFood: '',
    instagram: '',
    whatsapp: '',
    maritalStatus: '',
    reason: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [field]: event.target.value });
    // Clear status when user starts typing again
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleDateChange = (field: 'birthDay' | 'birthMonth' | 'birthYear') => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = event.target.value;
    const updatedData = { ...formData, [field]: newValue };
    
    // Construct birthDate string if all three fields are filled
    const { birthDay, birthMonth, birthYear } = updatedData;
    if (birthDay && birthMonth && birthYear) {
      updatedData.birthDate = `${birthYear}-${birthMonth.padStart(2, '0')}-${birthDay.padStart(2, '0')}`;
    } else {
      updatedData.birthDate = '';
    }
    
    setFormData(updatedData);
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };



  const calculateAge = (birthDate: string): number => {
    if (!birthDate) return 0;
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Validate form
      if (!formData.name || !formData.birthDate || !formData.gender || !formData.weight || 
          !formData.height || !formData.whatsapp || !formData.reason) {
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      const age = calculateAge(formData.birthDate);

      // Create WhatsApp message
      const message = `
🏋️ *Fitness Transformation Request*

📋 *Personal Details*
👤 Name: ${formData.name}
🎂 Age: ${age} years
⚥ Gender: ${formData.gender}
💍 Marital Status: ${formData.maritalStatus || 'Not specified'}

📍 *Location*
🌍 Country: ${formData.country || 'Not provided'}
🏙️ City: ${formData.city || 'Not provided'}

📊 *Physical Stats*
⚖️ Weight: ${formData.weight} kg
📏 Height: ${formData.height} cm

📱 *Contact*
📞 WhatsApp: ${formData.whatsapp}
📸 Instagram: ${formData.instagram || 'Not provided'}

🍽️ *Preferences*
Favorite Food: ${formData.favFood || 'Not specified'}

🎯 *Transformation Goal*
${formData.reason}

📷 *Next Step*: Please send your current body photo in the next message

---
Sent from Fitness Portal
      `.trim();

      // Open WhatsApp with pre-filled message
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      // Show success message
      setSubmitStatus('success');
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          birthDate: '',
          birthDay: '',
          birthMonth: '',
          birthYear: '',
          country: '',
          city: '',
          gender: '',
          weight: '',
          height: '',
          favFood: '',
          instagram: '',
          whatsapp: '',
          maritalStatus: '',
          reason: '',
        });
        setSubmitStatus('idle');
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({
        name: '',
        birthDate: '',
        birthDay: '',
        birthMonth: '',
        birthYear: '',
        country: '',
        city: '',
        gender: '',
        weight: '',
        height: '',
        favFood: '',
        instagram: '',
        whatsapp: '',
        maritalStatus: '',
        reason: '',
      });
      setSubmitStatus('idle');
      onClose();
    }
  };

  return (
    <StyledDialog
      open={isOpen}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <StyledDialogContent>
        <CloseButton
          onClick={handleClose}
          aria-label="close"
          disabled={isSubmitting}
        >
          <CloseIcon />
        </CloseButton>

        <FormHeader>
          <FormTitle>Start Your Transformation</FormTitle>
          <FormDescription>
            Fill in your details and we'll get back to you via WhatsApp with a personalized fitness plan.
          </FormDescription>
        </FormHeader>
          <AnimatePresence mode="wait">
          {submitStatus === 'success' && (
            <SuccessMessage
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              ✅ Success! Redirecting you to WhatsApp...
            </SuccessMessage>
          )}

          {submitStatus === 'error' && (
            <ErrorMessage
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              ❌ Please fill in all required fields (Name, Birth Date, Gender, Weight, Height, WhatsApp, Reason)
            </ErrorMessage>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit}>
          <FormFields>
            {/* Personal Information */}
            <FormRow>
              <StyledTextField
                label="Full Name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange('name')}
                required
                fullWidth
                disabled={isSubmitting}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </FormRow>

            {/* Birth Date Row */}
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                <CakeIcon sx={{ color: 'rgba(255,255,255,0.5)', fontSize: 20 }} />
                <Box sx={{ color: 'rgba(255, 255, 255, 0.6)', fontWeight: 600, fontSize: '0.875rem' }}>
                  Birth Date *
                </Box>
              </Box>
              <DateRow>
                <StyledSelect
                  label="Month"
                  value={formData.birthMonth}
                  onChange={handleDateChange('birthMonth')}
                  required
                  fullWidth
                  disabled={isSubmitting}
                  select
                  SelectProps={{
                    MenuProps: {
                      PaperProps: {
                        sx: {
                          bgcolor: '#0a1d2c',
                          maxHeight: 300,
                          '& .MuiMenuItem-root': {
                            color: '#ffffff',
                            '&:hover': {
                              bgcolor: 'rgba(212, 175, 55, 0.15)',
                            },
                            '&.Mui-selected': {
                              bgcolor: 'rgba(212, 175, 55, 0.25)',
                              '&:hover': {
                                bgcolor: 'rgba(212, 175, 55, 0.35)',
                              },
                            },
                          },
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value="">Select Month</MenuItem>
                  {months.map((month) => (
                    <MenuItem key={month.value} value={month.value}>
                      {month.label}
                    </MenuItem>
                  ))}
                </StyledSelect>
                <StyledSelect
                  label="Day"
                  value={formData.birthDay}
                  onChange={handleDateChange('birthDay')}
                  required
                  fullWidth
                  disabled={isSubmitting}
                  select
                  SelectProps={{
                    MenuProps: {
                      PaperProps: {
                        sx: {
                          bgcolor: '#0a1d2c',
                          maxHeight: 300,
                          '& .MuiMenuItem-root': {
                            color: '#ffffff',
                            '&:hover': {
                              bgcolor: 'rgba(212, 175, 55, 0.15)',
                            },
                            '&.Mui-selected': {
                              bgcolor: 'rgba(212, 175, 55, 0.25)',
                              '&:hover': {
                                bgcolor: 'rgba(212, 175, 55, 0.35)',
                              },
                            },
                          },
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value="">Day</MenuItem>
                  {days.map((day) => (
                    <MenuItem key={day} value={day}>
                      {day}
                    </MenuItem>
                  ))}
                </StyledSelect>
                <StyledSelect
                  label="Year"
                  value={formData.birthYear}
                  onChange={handleDateChange('birthYear')}
                  required
                  fullWidth
                  disabled={isSubmitting}
                  select
                  SelectProps={{
                    MenuProps: {
                      PaperProps: {
                        sx: {
                          bgcolor: '#0a1d2c',
                          maxHeight: 300,
                          '& .MuiMenuItem-root': {
                            color: '#ffffff',
                            '&:hover': {
                              bgcolor: 'rgba(212, 175, 55, 0.15)',
                            },
                            '&.Mui-selected': {
                              bgcolor: 'rgba(212, 175, 55, 0.25)',
                              '&:hover': {
                                bgcolor: 'rgba(212, 175, 55, 0.35)',
                              },
                            },
                          },
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value="">Year</MenuItem>
                  {years.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </StyledSelect>
              </DateRow>
              {formData.birthDate && (
                <Box sx={{ mt: 1, color: '#D4AF37', fontSize: '0.8125rem', fontWeight: 600 }}>
                  Age: {calculateAge(formData.birthDate)} years
                </Box>
              )}
            </Box>

            <FormRow>
              <StyledSelect
                label="Gender"
                value={formData.gender}
                onChange={handleInputChange('gender')}
                required
                fullWidth
                disabled={isSubmitting}
                select
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <WcIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                    </InputAdornment>
                  ),
                }}
                SelectProps={{
                  MenuProps: {
                    PaperProps: {
                      sx: {
                        bgcolor: '#0a1d2c',
                        '& .MuiMenuItem-root': {
                          color: '#ffffff',
                          '&:hover': {
                            bgcolor: 'rgba(212, 175, 55, 0.15)',
                          },
                          '&.Mui-selected': {
                            bgcolor: 'rgba(212, 175, 55, 0.25)',
                            '&:hover': {
                              bgcolor: 'rgba(212, 175, 55, 0.35)',
                            },
                          },
                        },
                      },
                    },
                  },
                }}
              >
                 <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </StyledSelect>
              <StyledSelect
                label="Marital Status"
                value={formData.maritalStatus}
                onChange={handleInputChange('maritalStatus')}
                fullWidth
                disabled={isSubmitting}
                select
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FavoriteIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                    </InputAdornment>
                  ),
                }}
                SelectProps={{
                  MenuProps: {
                    PaperProps: {
                      sx: {
                        bgcolor: '#0a1d2c',
                        '& .MuiMenuItem-root': {
                          color: '#ffffff',
                          '&:hover': {
                            bgcolor: 'rgba(212, 175, 55, 0.15)',
                          },
                          '&.Mui-selected': {
                            bgcolor: 'rgba(212, 175, 55, 0.25)',
                            '&:hover': {
                              bgcolor: 'rgba(212, 175, 55, 0.35)',
                            },
                          },
                        },
                      },
                    },
                  },
                }}
              >
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Married">Married</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </StyledSelect>
            </FormRow>

            {/* Location */}
            <FormRow>
              <StyledTextField
                label="Country"
                placeholder="Your country"
                value={formData.country}
                onChange={handleInputChange('country')}
                fullWidth
                disabled={isSubmitting}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PublicIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                    </InputAdornment>
                  ),
                }}
              />
              <StyledTextField
                label="City"
                placeholder="Your city"
                value={formData.city}
                onChange={handleInputChange('city')}
                fullWidth
                disabled={isSubmitting}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationCityIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </FormRow>

            {/* Physical Stats */}
            <FormRow>
              <StyledTextField
                label="Weight (kg)"
                type="number"
                placeholder="Weight in kg"
                value={formData.weight}
                onChange={handleInputChange('weight')}
                required
                fullWidth
                disabled={isSubmitting}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FitnessCenterIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                    </InputAdornment>
                  ),
                }}
              />
              <StyledTextField
                label="Height (cm)"
                type="number"
                placeholder="Height in cm"
                value={formData.height}
                onChange={handleInputChange('height')}
                required
                fullWidth
                disabled={isSubmitting}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HeightIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </FormRow>

            {/* Contact Information */}
            <FormRow>
              <StyledTextField
                label="Instagram"
                placeholder="@username"
                value={formData.instagram}
                onChange={handleInputChange('instagram')}
                fullWidth
                disabled={isSubmitting}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <InstagramIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                    </InputAdornment>
                  ),
                }}
              />
              <StyledTextField
                label="WhatsApp Number"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.whatsapp}
                onChange={handleInputChange('whatsapp')}
                required
                fullWidth
                disabled={isSubmitting}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <WhatsAppIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </FormRow>

            {/* Preferences */}
            <StyledTextField
              label="Favorite Food"
              placeholder="What's your favorite food?"
              value={formData.favFood}
              onChange={handleInputChange('favFood')}
              fullWidth
              disabled={isSubmitting}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <RestaurantIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* Transformation Goal */}
            <StyledTextField
              label="Reason for Transformation"
              placeholder="Tell us about your fitness goals and motivation..."
              value={formData.reason}
              onChange={handleInputChange('reason')}
              required
              multiline
              rows={4}
              fullWidth
              disabled={isSubmitting}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1 }}>
                    <EmojiEventsIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                  </InputAdornment>
                ),
              }}
            />
               {/* Body Image Note */}
            <Box sx={{ 
              padding: '1.5rem',
              bgcolor: 'rgba(212, 175, 55, 0.1)',
              borderRadius: '12px',
              border: '1px dashed #D4AF37',
              textAlign: 'center'
            }}>
              <CameraAltIcon sx={{ fontSize: 40, color: '#D4AF37', mb: 1 }} />
              <Box sx={{ color: '#ffffff', fontSize: '1rem', fontWeight: 600, mb: 0.5 }}>
                📷 Body Photo Required
              </Box>
              <Box sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                After submitting this form, please send your current body photo 
                as the first message in WhatsApp. This helps us create a personalized 
                fitness plan for you.
              </Box>
            </Box>
          </FormFields>

          <FormRow>
            <SubmitButton
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
              variant="outlined"
            >
              Cancel
            </SubmitButton>
            <SubmitButton
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
            >
              {isSubmitting ? 'Submitting...' : submitStatus === 'success' ? 'Success!' : 'Get Started Now'}
            </SubmitButton>
          </FormRow>

          <PrivacyNote>
            🔒 Your information is secure. We'll contact you via WhatsApp to discuss your fitness goals.
          </PrivacyNote>
        </form>
      </StyledDialogContent>
      </motion.div>
    </StyledDialog>
  );
};

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import {
  Close,
  Person,
  Phone,
  LocationOn,
  Warning,
  CheckCircle,
  MyLocation,
  LocalHospital,
} from '@mui/icons-material';
import { InputAdornment, Box } from '@mui/material';
import {
  FormDialog,
  FormDialogContent,
  FormHeader,
  FormTitle,
  FormDescription,
  FormFields,
  FormRow,
  StyledTextField,
  SubmitButton,
  SafetyNoticeBox,
  SafetyIcon,
  SafetyContent,
  SafetyTitle,
  SafetyText,
  SuccessMessage,
  ErrorMessage,
  CloseFormButton,
  LocationButton,
} from './GlobalWhatsApp.style';
import { useWhatsApp } from '../../hooks/useWhatsApp';

interface SnakeRescueFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  contact: string;
  location: string;
}

export const SnakeRescueForm = ({ isOpen, onClose }: SnakeRescueFormProps) => {
  const { openChat } = useWhatsApp();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contact: '',
    location: '',
  });
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [field]: event.target.value });
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const fetchCurrentLocation = async () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }

    setIsFetchingLocation(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          
          // Store coordinates for Google Maps URL
          setCoordinates({ lat: latitude, lng: longitude });
          
          // Use reverse geocoding to get address
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          
          const address = data.display_name || `Lat: ${latitude.toFixed(6)}, Lng: ${longitude.toFixed(6)}`;
          setFormData({ ...formData, location: address });
        } catch (error) {
          // Fallback to coordinates
          const { latitude, longitude } = position.coords;
          setCoordinates({ lat: latitude, lng: longitude });
          const coords = `Lat: ${latitude.toFixed(6)}, Lng: ${longitude.toFixed(6)}`;
          setFormData({ ...formData, location: coords });
        } finally {
          setIsFetchingLocation(false);
        }
      },
      (error) => {
        console.error('Error getting location:', error);
        alert('Unable to fetch location. Please enter manually.');
        setIsFetchingLocation(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Validate form
      if (!formData.name || !formData.contact || !formData.location) {
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      // Construct WhatsApp message
      const mapsUrl = coordinates 
        ? `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`
        : null;
      
      const message = `
🚨 *SNAKE RESCUE EMERGENCY* 🚨

👤 *Name:* ${formData.name}
📞 *Contact:* ${formData.contact}
📍 *Location:* ${formData.location}${mapsUrl ? `\n🗺️ *Map Link:* ${mapsUrl}` : ''}

⚠️ *Status:* Awaiting immediate assistance
🕒 *Time:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`;

      // Small delay for UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setSubmitStatus('success');
      setIsSubmitting(false);

      // Open WhatsApp after 1.5 seconds
      setTimeout(() => {
        openChat(message.trim());
        // Reset form and close
        setTimeout(() => {
          setFormData({ name: '', contact: '', location: '' });
          setCoordinates(null);
          setSubmitStatus('idle');
          onClose();
        }, 500);
      }, 1500);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({ name: '', contact: '', location: '' });
    setCoordinates(null);
    setSubmitStatus('idle');
    onClose();
  };

  return (
    <FormDialog open={isOpen} onClose={handleClose} maxWidth="sm" fullWidth>
      <FormDialogContent>
        <CloseFormButton onClick={handleClose} aria-label="Close">
          <Close />
        </CloseFormButton>

        <FormHeader>
          <FormTitle>
            <LocalHospital sx={{ fontSize: 32, color: '#ef4444', marginRight: 1 }} />
            Emergency Snake Rescue
          </FormTitle>
          <FormDescription>
            Fill out this form for immediate assistance. Our expert will contact you within minutes.
          </FormDescription>
        </FormHeader>

        {submitStatus === 'success' && (
          <SuccessMessage
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <CheckCircle />
            <span>Redirecting to WhatsApp...</span>
          </SuccessMessage>
        )}

        {submitStatus === 'error' && (
          <ErrorMessage>
            ⚠️ Please fill in all required fields
          </ErrorMessage>
        )}

        <form onSubmit={handleSubmit}>
          <FormFields>
            <StyledTextField
              label="Your Name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange('name')}
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
            />

            <StyledTextField
              label="Contact Number"
              placeholder="+91 98765 43210"
              value={formData.contact}
              onChange={handleInputChange('contact')}
              required
              fullWidth
              type="tel"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone />
                  </InputAdornment>
                ),
              }}
            />

            <StyledTextField
              label="Current Location"
              placeholder="Full address with landmarks"
              value={formData.location}
              onChange={handleInputChange('location')}
              required
              fullWidth
              multiline
              rows={2}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn />
                  </InputAdornment>
                ),
              }}
            />

            <LocationButton
              type="button"
              onClick={fetchCurrentLocation}
              disabled={isFetchingLocation}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MyLocation sx={{ fontSize: 18 }} />
              {isFetchingLocation ? 'Fetching Location...' : 'Use My Current Location'}
            </LocationButton>
          </FormFields>

          <SafetyNoticeBox>
             <SafetyIcon>
              <Warning sx={{ fontSize: 20 }} />
            </SafetyIcon>
            <SafetyContent>
              <SafetyTitle>Safety Instructions</SafetyTitle>
              <SafetyText>
                <ul>
                  <li>🚫 DO NOT approach or disturb the snake</li>
                  <li>👥 Keep children and pets away from the area</li>
                  <li>🚪 Close doors to isolate the snake if possible</li>
                  <li>📸 Take photos from safe distance if possible</li>
                  <li>⏰ Stay on standby for our call</li>
                </ul>
              </SafetyText>
            </SafetyContent>
          </SafetyNoticeBox>

          <SubmitButton
            type="submit"
            fullWidth
            disabled={isSubmitting}
            sx={{ marginTop: 3 }}
          >
            {isSubmitting ? 'Sending Request...' : 'Request Emergency Rescue'}
          </SubmitButton>
        </form>
      </FormDialogContent>
    </FormDialog>
  );
};

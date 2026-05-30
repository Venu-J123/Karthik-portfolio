/**
 * WhatsApp utility functions
 */
import { GLOBAL_CONFIG } from '../../config/global.config';

export const WHATSAPP_NUMBER = process.env.REACT_APP_WHATSAPP_NUMBER || '919876543210';

export interface WhatsAppMessageData {
  firstName: string;
  lastName: string;
  email?: string;
  phone: string;
  service: string;
  message: string;
}

/**
 * Constructs a professional WhatsApp message from form data
 * Format: Structured bullets with service highlighted
 */
export const constructWhatsAppMessage = (data: WhatsAppMessageData): string => {
  const { firstName, lastName, email, phone, service, message } = data;
  
  return `🔗 Service Inquiry | ${service}

📝 Details:
• Name: ${firstName} ${lastName}
• Phone: ${phone}${email ? `\n• Email: ${email}` : ''}

💬 Message:
${message}`;
};

/**
 * Opens WhatsApp with a pre-filled message using GLOBAL_CONFIG phone number
 */
export const openWhatsApp = (message?: string) => {
  const phoneNumber = GLOBAL_CONFIG.contact.phoneWhatsApp;
  const encodedMessage = encodeURIComponent(message || 'Hi! I would like to connect with you.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

/**
 * Generates a WhatsApp link using GLOBAL_CONFIG phone number
 */
export const getWhatsAppLink = (message?: string): string => {
  const phoneNumber = GLOBAL_CONFIG.contact.phoneWhatsApp;
  const encodedMessage = encodeURIComponent(message || 'Hi! I would like to connect with you.');
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

/**
 * Custom hook for WhatsApp functionality
 */

import { useCallback } from 'react';
import { openWhatsApp, getWhatsAppLink } from '../utils/whatsapp.utils';

export const useWhatsApp = () => {
  const openChat = useCallback((message?: string) => {
    openWhatsApp(message);
  }, []);

  const getLink = useCallback((message?: string) => {
    return getWhatsAppLink(message);
  }, []);

  return { openChat, getLink };
};

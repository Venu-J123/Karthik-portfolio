// ==================== GLOBAL CONFIGURATION ====================
// Centralized configuration for common data used across all pages

export const GLOBAL_CONFIG = {
  // Personal Information
  personal: {
    firstName: 'KARTHIK',
    middleName: 'SHEKAR',
    lastName: 'ACHARYA',
    fullName: 'KARTHIK SHEKAR ACHARYA',
    fullNameSpaced: 'Karthik Shekar Acharya',
  },

  // Contact Information
  contact: {
    phone: '+918867300889',
    phoneDisplay: '+91 88673 00889',
    phoneWhatsApp: '918867300889', // Without + for WhatsApp API
    email: 'training@karthikpro.com',
    address: {
      short: 'Sarjapur Rd, Bengaluru, Karnataka',
      full: 'Ambalipura - Sarjapur Rd, Dommasandra, Bengaluru, Karnataka 562125',
      city: 'Bengaluru',
      state: 'Karnataka',
    },
  },

  // Social Media
  social: {
    youtube: {
      channelHandle: '@Ksacharya6',
      channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
      channelUrl: 'https://youtube.com/@Ksacharya6',
      apiKey: import.meta.env.VITE_YOUTUBE_API_KEY || '',
    },
    instagram: {
      handle: '@karthik_shekar_acharya',
      url: 'https://instagram.com/karthik_shekar_acharya',
      followers: '90K+',
    },
    twitter: {
      handle: '@karthikacharya',
      url: 'https://twitter.com/karthikacharya',
    },
  },

  // Business Information
  business: {
    gym: {
      name: 'Powerhouse gym',
      location: 'Dommasandra - Sarjapur Rd, Bengaluru',
      fullAddress: 'Powerhouse gym, Ambalipura - Sarjapur Rd, opposite D.m.m. High School, Dommasandra, Bengaluru, Karnataka 562125',
      hours: {
        weekdays: 'Mon-Sat: 5am-10pm',
        weekend: 'Sun: 8am-12pm',
        full: 'Mon-Sat: 5am-10pm | Sun: 5am-10am',
      },
    },
  },

  // Professional Titles
  titles: {
    main: 'Actor • Fitness Trainer • Wildlife Rescuer',
    acting: 'Professional Actor',
    fitness: 'Elite Gym Trainer',
    bodybuilding: 'National Level Bodybuilder',
    wildlife: 'Expert Snake Rescue Specialist',
  },

  // Emergency Services (Wildlife)
  emergency: {
    available24x7: true,
    responseTime: '24/7 Emergency Response',
  },
} as const;

// Export individual sections for convenience
export const PERSONAL_INFO = GLOBAL_CONFIG.personal;
export const CONTACT_INFO = GLOBAL_CONFIG.contact;
export const SOCIAL_MEDIA = GLOBAL_CONFIG.social;
export const BUSINESS_INFO = GLOBAL_CONFIG.business;
export const PROFESSIONAL_TITLES = GLOBAL_CONFIG.titles;

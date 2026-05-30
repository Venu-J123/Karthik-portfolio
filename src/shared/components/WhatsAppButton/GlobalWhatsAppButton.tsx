import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'motion/react';
import {
  WhatsApp,
  Close,
  FitnessCenter,
  CardMembership,
  Movie,
  Pets,
  HelpOutline,
} from '@mui/icons-material';
import {
  FloatingWhatsAppButton,
  PulseRing,
  MenuContainer,
  MenuCard,
  MenuHeaderInline,
  MenuTitleInline,
  MenuDescriptionInline,
  MenuOptionsInline,
  MenuOptionInline,
  OptionIconInline,
  OptionContentInline,
  OptionTitleInline,
  OptionSubtitleInline,
} from './GlobalWhatsApp.style';
import { SnakeRescueForm } from './SnakeRescueForm';
import { TransformationForm } from '../../../features/fitness/components/TransformationForm';
import { PlanSubscriptionForm } from '../../../features/fitness/components/PlanSubscriptionForm';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import { GLOBAL_CONFIG } from '../../../config/global.config';

const monthlyPackages = [
  {
    duration: '1 Month',
    price: '₹3,000',
    perMonth: '₹3,000',
    highlighted: false,
  },
  {
    duration: '3 Months',
    price: '₹7,500',
    perMonth: '₹2,500',
    highlighted: true,
  },
  {
    duration: '6 Months',
    price: '₹12,000',
    perMonth: '₹2,000',
    highlighted: false,
  },
  {
    duration: '12 Months',
    price: '₹20,000',
    perMonth: '₹1,667',
    highlighted: false,
  },
];

export const GlobalWhatsAppButton = () => {
  const { openChat } = useWhatsApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransformationFormOpen, setIsTransformationFormOpen] = useState(false);
  const [isPlanFormOpen, setIsPlanFormOpen] = useState(false);
  const [isSnakeRescueFormOpen, setIsSnakeRescueFormOpen] = useState(false);
  const [selectedPlanData, setSelectedPlanData] = useState(monthlyPackages[1]);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const whatsappNumber = GLOBAL_CONFIG.contact.phoneWhatsApp;

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMenuOpen]);

  const menuOptions = [
    {
      id: 'personal-training',
      icon: FitnessCenter,
      title: 'Personal Training',
      subtitle: 'Transform your body',
      action: () => {
        setIsMenuOpen(false);
        setTimeout(() => setIsTransformationFormOpen(true), 200);
      },
    },
    {
      id: 'gym-membership',
      icon: CardMembership,
      title: 'Gym Membership',
      subtitle: 'Join now & save',
      action: () => {
        setIsMenuOpen(false);
        setSelectedPlanData(monthlyPackages[1]); // Default to 3 months
        setTimeout(() => setIsPlanFormOpen(true), 200);
      },
    },
    {
      id: 'casting',
      icon: Movie,
      title: 'For Casting',
      subtitle: 'Acting projects',
      action: () => {
        setIsMenuOpen(false);
        const message = `🎬 *CASTING INQUIRY*\n\nHi! I'm interested in discussing casting opportunities and acting projects.\n\nPlease share available roles and project details.`;
        setTimeout(() => openChat(message), 200);
      },
    },
    {
      id: 'snake-rescue',
      icon: Pets,
      title: 'Snake Rescue 🚨',
      subtitle: '24/7 emergency',
      action: () => {
        setIsMenuOpen(false);
        setTimeout(() => setIsSnakeRescueFormOpen(true), 200);
      },
    },
    {
      id: 'general',
      icon: HelpOutline,
      title: 'General Enquiry',
      subtitle: 'Any questions',
      action: () => {
        setIsMenuOpen(false);
        const message = `👋 Hi! I have a general enquiry.\n\n*Query:* [Please describe your question here]`;
        setTimeout(() => openChat(message), 200);
      },
    },
  ];

  return (
    <>
      {/* Floating WhatsApp Button */}
      <FloatingWhatsAppButton
        ref={buttonRef}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open WhatsApp menu"
      >
        <PulseRing />
        {isMenuOpen ? <Close /> : <WhatsApp />}
      </FloatingWhatsAppButton>

      {/* Inline Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <MenuContainer
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <MenuCard>
              <MenuHeaderInline>
                <MenuTitleInline>
                  <WhatsApp sx={{ fontSize: 20 }} />
                  How Can We Help?
                </MenuTitleInline>
                <MenuDescriptionInline>
                  Choose a service below
                </MenuDescriptionInline>
              </MenuHeaderInline>

              <MenuOptionsInline>
                {menuOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <MenuOptionInline
                      key={option.id}
                      onClick={option.action}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <OptionIconInline>
                        <Icon />
                      </OptionIconInline>
                      <OptionContentInline>
                        <OptionTitleInline>{option.title}</OptionTitleInline>
                        <OptionSubtitleInline>{option.subtitle}</OptionSubtitleInline>
                      </OptionContentInline>
                    </MenuOptionInline>
                  );
                })}
              </MenuOptionsInline>
            </MenuCard>
          </MenuContainer>
        )}
      </AnimatePresence>

      {/* Forms */}
      <TransformationForm
        isOpen={isTransformationFormOpen}
        onClose={() => setIsTransformationFormOpen(false)}
        whatsappNumber={whatsappNumber}
      />

      <PlanSubscriptionForm
        isOpen={isPlanFormOpen}
        onClose={() => setIsPlanFormOpen(false)}
        whatsappNumber={whatsappNumber}
        initialPlan={selectedPlanData}
        availablePlans={monthlyPackages}
      />

      <SnakeRescueForm
        isOpen={isSnakeRescueFormOpen}
        onClose={() => setIsSnakeRescueFormOpen(false)}
      />
    </>
  );
};


import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Box, Checkbox, MenuItem, Alert } from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Send,
  AccessTime,
  FitnessCenter,
  VideoCameraFront,
  EmojiNature,
  EmojiEvents,
  Adjust,
  ArrowOutward,
  Instagram,
  YouTube,
} from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { GLOBAL_CONFIG } from '../../config/global.config';
import { FadeIn, SlideIn, Stagger, ScaleIn } from '../../shared/components';
import { constructWhatsAppMessage, openWhatsApp } from '../../shared/utils';
import * as Styles from './Contact.style';

const MAX_CHARS = 500;

// ==================== CONTACT CONTENT ====================
const CONTACT_CONTENT = {
  hero: {
    badges: ['Available for Collaborations', 'Open for Training & Events'],
    heading: { line1: "Let's", line2: 'Connect' },
    description:
      'Multi-talented professional in acting, wildlife rescue, and fitness training. Open to collaborations, coaching, casting, and conservation initiatives.',
  },

  contactInfo: [
    { icon: LocationOn, label: 'Location', value: GLOBAL_CONFIG.contact.address.short },
    { icon: Email,      label: 'Email',    value: GLOBAL_CONFIG.contact.email },
    { icon: Phone,      label: 'Phone',    value: GLOBAL_CONFIG.contact.phoneDisplay },
    { icon: AccessTime, label: 'Hours',    value: GLOBAL_CONFIG.business.gym.hours.full },
  ],

  form: {
    fields: {
      firstName: { label: 'First Name',       placeholder: 'Enter first name' },
      lastName:  { label: 'Last Name',        placeholder: 'Enter last name' },
      email:     { label: 'Email (optional)',  placeholder: 'Enter your email' },
      phone:     { label: 'Phone Number',     placeholder: '+91 Enter phone number' },
      service:   { label: 'Service Interest', placeholder: 'Select a service...' },
      message:   { label: 'Your Message',     placeholder: 'Tell me about your project, inquiry, or how I can help...' },
    },
    submitButton: {
      idle:       "Let's Work Together",
      submitting: 'Sending...',
    },
  },

  services: [
    { icon: FitnessCenter,    title: 'Personal Training', desc: '1-on-1 Custom Programs' },
    { icon: FitnessCenter,    title: 'Group Classes',     desc: 'Dynamic Team Sessions' },
    { icon: VideoCameraFront, title: 'Film Projects',     desc: 'Acting Collaborations' },
    { icon: EmojiNature,      title: 'Wildlife Rescue',   desc: 'Snake & Animal Emergency' },
    { icon: EmojiEvents,      title: 'Brand Deals',       desc: 'Partnerships & Sponsorships' },
    { icon: Adjust,           title: 'Events',            desc: 'Appearances & Shows' },
  ],

  why: [
    { icon: '⚡', text: 'Typically responds within 2 hours' },
    { icon: '🎯', text: 'Tailored solutions for your goals' },
    { icon: '🤝', text: 'Trusted by 2,000+ clients' },
    { icon: '🌟', text: '18+ years of multi-domain experience' },
  ],

  success: {
    title: 'Message Sent!',
    text: "Thank you for reaching out! I'll get back to you within 24 hours.",
    resetButton: 'Send Another Message →',
  },
};

// Legacy exports for backward compatibility
const services    = CONTACT_CONTENT.services;
const contactInfo = CONTACT_CONTENT.contactInfo;

export const Contact = () => {
  // ── form state ──────────────────────────────────────────────────
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [selectedService, setSelectedService] = useState('');
  const [messageLength,   setMessageLength]   = useState(0);
  const [agreed,          setAgreed]          = useState(false);
  const [validationError, setValidationError] = useState('');

  // ── form refs for value capture ──────────────────────────────────
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  /**
   * Auto-select service from URL query parameter (e.g., ?service=Film Projects)
   */
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setSelectedService(serviceParam);
      // Clear the query param from URL history for cleaner state
      window.history.replaceState({}, document.title, window.location.pathname + window.location.hash.split('?')[0]);
    }
  }, []);

  /**
   * Validates required fields and constructs message for WhatsApp
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    // Capture values from refs
    const firstName = firstNameRef.current?.value.trim() || '';
    const lastName = lastNameRef.current?.value.trim() || '';
    const email = emailRef.current?.value.trim() || '';
    const phone = phoneRef.current?.value.trim() || '';
    const message = messageRef.current?.value.trim() || '';

    // Validation
    if (!firstName || !lastName) {
      setValidationError('First and Last Name are required.');
      return;
    }
    if (!phone) {
      setValidationError('Phone Number is required.');
      return;
    }
    if (!message) {
      setValidationError('Message is required.');
      return;
    }
    if (!selectedService) {
      setValidationError('Please select a service.');
      return;
    }

    // All validations passed
    setFormState('submitting');

    // Construct the professional WhatsApp message
    const whatsappMessage = constructWhatsAppMessage({
      firstName,
      lastName,
      email,
      phone,
      service: selectedService,
      message,
    });

    // Brief delay for UX feedback, then open WhatsApp and reset
    setTimeout(() => {
      openWhatsApp(whatsappMessage);
      resetForm();
    }, 300);
  };

  const resetForm = () => {
    setFormState('idle');
    setSelectedService('');
    setMessageLength(0);
    setAgreed(false);
    setValidationError('');
    
    // Reset form fields
    if (firstNameRef.current) firstNameRef.current.value = '';
    if (lastNameRef.current) lastNameRef.current.value = '';
    if (emailRef.current) emailRef.current.value = '';
    if (phoneRef.current) phoneRef.current.value = '';
    if (messageRef.current) messageRef.current.value = '';
  };

  return (
    <Styles.ContactWrapper>
      {/* Ambient glow orbs */}
      <Styles.GlowOrb
        sx={{ top: '5%', left: '-5%', width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)' }}
      />
      <Styles.GlowOrb
        sx={{ bottom: '10%', right: '-5%', width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(14,165,233,0.04) 0%, transparent 70%)' }}
      />

      <Styles.ContentWrapper>

        {/* ═══════════════ HERO ═══════════════ */}
        <Styles.HeroSection>
          <FadeIn>
            <Styles.HeroBadgeRow>
              {CONTACT_CONTENT.hero.badges.map((badge, i) => (
                <Styles.StatusBadge key={i}>
                  <Styles.BadgeDot sx={i === 1 ? { bgcolor: '#34d399' } : {}} />
                  {badge}
                </Styles.StatusBadge>
              ))}
            </Styles.HeroBadgeRow>
          </FadeIn>

          <ScaleIn delay={0.15}>
            <Styles.HeroHeading>
              {CONTACT_CONTENT.hero.heading.line1}{' '}
              <span className="highlight">{CONTACT_CONTENT.hero.heading.line2}</span>
            </Styles.HeroHeading>
          </ScaleIn>

          <SlideIn direction="up" delay={0.25}>
            <Styles.HeroDescription>
              {CONTACT_CONTENT.hero.description}
            </Styles.HeroDescription>
          </SlideIn>
        </Styles.HeroSection>

        {/* ═══════════════ MAIN CONTENT ═══════════════ */}
        <Styles.ContentSection>
          <Styles.ContentGrid>

            {/* ── LEFT: Form ── */}
            <SlideIn direction="left" delay={0.2}>
              <Styles.FormCard>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Styles.FormCardHeader>
                    <Styles.FormCardTitle>Send a Message</Styles.FormCardTitle>
                    <Styles.FormCardSubtitle>
                      Fill in the details below and I'll get back to you
                    </Styles.FormCardSubtitle>
                  </Styles.FormCardHeader>

                      {/* Service selection cards */}
                      <Box sx={{ mb: 3 }}>
                        <Styles.FormLabel as="p">
                          {CONTACT_CONTENT.form.fields.service.label}
                        </Styles.FormLabel>
                        <Styles.ServiceGrid>
                          {CONTACT_CONTENT.services.map((svc, i) => {
                            const isSelected = selectedService === svc.title;
                            return (
                              <Styles.ServiceCardBtn
                                key={i}
                                selected={isSelected}
                                onClick={() => setSelectedService(svc.title)}
                                type="button"
                                aria-pressed={isSelected}
                              >
                                {/* Index + checkmark row */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mb: 0.75 }}>
                                  <Box sx={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em', opacity: isSelected ? 0.9 : 0.3, fontFamily: '"Bebas Neue", sans-serif', lineHeight: 1 }}>
                                    {String(i + 1).padStart(2, '0')}
                                  </Box>
                                  {isSelected && (
                                    <Box sx={{ width: 14, height: 14, borderRadius: '50%', bgcolor: 'rgba(212,175,55,0.2)', border: '1px solid rgba(212,175,55,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.5rem', color: '#D4AF37', lineHeight: 1 }}>
                                      ✓
                                    </Box>
                                  )}
                                </Box>
                                {/* Title */}
                                <Box sx={{ fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.01em', lineHeight: 1.3, mb: 0.35 }}>
                                  {svc.title}
                                </Box>
                                {/* Desc */}
                                <Box sx={{ fontSize: '0.58rem', opacity: 0.45, lineHeight: 1.3, letterSpacing: '0.02em' }}>
                                  {svc.desc}
                                </Box>
                              </Styles.ServiceCardBtn>
                            );
                          })}
                        </Styles.ServiceGrid>
                      </Box>

                      {/* Form fields */}
                      <Styles.FormContainer onSubmit={handleSubmit}>
                        {/* Validation Error Alert */}
                        {validationError && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                          >
                            <Alert
                              severity="error"
                              sx={{
                                mb: 2,
                                bgcolor: 'rgba(244, 67, 54, 0.1)',
                                border: '1px solid rgba(244, 67, 54, 0.3)',
                                color: '#f44336',
                                '& .MuiAlert-icon': { color: '#f44336' },
                              }}
                            >
                              {validationError}
                            </Alert>
                          </motion.div>
                        )}

                        {/* Honeypot – anti-spam */}
                        <input
                          type="text"
                          name="_honeypot"
                          style={{ display: 'none' }}
                          tabIndex={-1}
                          autoComplete="off"
                        />
                        {/* Hidden service value */}
                        <input type="hidden" name="service" value={selectedService} />

                        <Styles.FormRow>
                          <Styles.FormGroup>
                            <Styles.FormLabel htmlFor="firstName">
                              {CONTACT_CONTENT.form.fields.firstName.label}{' '}
                              <span style={{ color: '#D4AF37' }}>*</span>
                            </Styles.FormLabel>
                            <Styles.StyledTextField
                              id="firstName"
                              inputRef={firstNameRef}
                              type="text"
                              placeholder={CONTACT_CONTENT.form.fields.firstName.placeholder}
                              variant="outlined"
                            />
                          </Styles.FormGroup>

                          <Styles.FormGroup>
                            <Styles.FormLabel htmlFor="lastName">
                              {CONTACT_CONTENT.form.fields.lastName.label}{' '}
                              <span style={{ color: '#D4AF37' }}>*</span>
                            </Styles.FormLabel>
                            <Styles.StyledTextField
                              id="lastName"
                              inputRef={lastNameRef}
                              type="text"
                              placeholder={CONTACT_CONTENT.form.fields.lastName.placeholder}
                              variant="outlined"
                            />
                          </Styles.FormGroup>
                        </Styles.FormRow>

                        <Styles.FormRow>
                          <Styles.FormGroup>
                            <Styles.FormLabel htmlFor="email">
                              {CONTACT_CONTENT.form.fields.email.label}
                            </Styles.FormLabel>
                            <Styles.StyledTextField
                              id="email"
                              inputRef={emailRef}
                              type="email"
                              placeholder={CONTACT_CONTENT.form.fields.email.placeholder}
                              variant="outlined"
                            />
                          </Styles.FormGroup>

                          <Styles.FormGroup>
                            <Styles.FormLabel htmlFor="phone">
                              {CONTACT_CONTENT.form.fields.phone.label}{' '}
                              <span style={{ color: '#D4AF37' }}>*</span>
                            </Styles.FormLabel>
                            <Styles.StyledTextField
                              id="phone"
                              inputRef={phoneRef}
                              type="tel"
                              placeholder={CONTACT_CONTENT.form.fields.phone.placeholder}
                              variant="outlined"
                            />
                          </Styles.FormGroup>
                        </Styles.FormRow>

                        <Styles.FormGroup>
                          <Styles.FormLabel htmlFor="message">
                            {CONTACT_CONTENT.form.fields.message.label}{' '}
                            <span style={{ color: '#D4AF37' }}>*</span>
                          </Styles.FormLabel>
                          <Styles.StyledTextArea
                            id="message"
                            inputRef={messageRef}
                            multiline
                            rows={4}
                            placeholder={CONTACT_CONTENT.form.fields.message.placeholder}
                            variant="outlined"
                            inputProps={{ maxLength: MAX_CHARS }}
                            onChange={(e) => setMessageLength(e.target.value.length)}
                          />
                          <Styles.CharCountRow>
                            <Styles.CharCount over={messageLength > MAX_CHARS * 0.85}>
                              {messageLength}/{MAX_CHARS}
                            </Styles.CharCount>
                          </Styles.CharCountRow>
                        </Styles.FormGroup>

                        <Styles.ConsentRow>
                          <Checkbox
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            size="small"
                            sx={{
                              p: 0.5,
                              color: 'rgba(255,255,255,0.25)',
                              '&.Mui-checked': { color: '#D4AF37' },
                            }}
                          />
                          <Styles.ConsentText>
                            I agree to be contacted regarding my inquiry
                          </Styles.ConsentText>
                        </Styles.ConsentRow>

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                          <Styles.SubmitButton
                            type="submit"
                            disabled={formState === 'submitting'}
                          >
                            {formState === 'submitting' ? (
                              <>
                                <Styles.LoadingSpinner
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                />
                                {CONTACT_CONTENT.form.submitButton.submitting}
                              </>
                            ) : (
                              <>
                                {CONTACT_CONTENT.form.submitButton.idle}
                                <ArrowOutward sx={{ fontSize: 16 }} />
                              </>
                            )}
                          </Styles.SubmitButton>
                        </motion.div>
                      </Styles.FormContainer>
                    </motion.div>
              </Styles.FormCard>
            </SlideIn>

            {/* ── RIGHT: Info Panel ── */}
            <SlideIn direction="right" delay={0.3}>
              <Styles.InfoPanel>

                {/* Contact Details */}
                <Styles.InfoSection>
                  <Styles.InfoSectionTitle>Contact Details</Styles.InfoSectionTitle>
                  {contactInfo.map((info, i) => {
                    const Icon = info.icon;
                    return (
                      <Styles.InfoRow key={i}>
                        <Styles.InfoIcon>
                          <Icon sx={{ fontSize: 15 }} />
                        </Styles.InfoIcon>
                        <Box>
                          <Styles.InfoLabel>{info.label}</Styles.InfoLabel>
                          <Styles.InfoValue>{info.value}</Styles.InfoValue>
                        </Box>
                      </Styles.InfoRow>
                    );
                  })}
                  <Styles.ResponseBadge>
                    <span style={{ color: '#34d399', marginRight: 6 }}>●</span>
                    Typically responds within 2 hours
                  </Styles.ResponseBadge>
                </Styles.InfoSection>

                <Styles.Divider />

                {/* Social Links */}
                <Styles.InfoSection>
                  <Styles.InfoSectionTitle>Follow Along</Styles.InfoSectionTitle>
                  <Styles.SocialRow>
                    <Styles.SocialLink
                      href={GLOBAL_CONFIG.social.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <Instagram sx={{ fontSize: 19 }} />
                    </Styles.SocialLink>
                    <Styles.SocialLink
                      href={GLOBAL_CONFIG.social.youtube.channelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                    >
                      <YouTube sx={{ fontSize: 19 }} />
                    </Styles.SocialLink>
                    <Styles.SocialLink
                      href={`https://wa.me/${GLOBAL_CONFIG.contact.phoneWhatsApp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                    >
                      <WhatsAppIcon sx={{ fontSize: 19 }} />
                    </Styles.SocialLink>
                  </Styles.SocialRow>
                </Styles.InfoSection>

                <Styles.Divider />

                {/* Why reach out */}
                <Styles.InfoSection>
                  <Styles.InfoSectionTitle>Why Reach Out?</Styles.InfoSectionTitle>
                  {CONTACT_CONTENT.why.map((item, i) => (
                    <Styles.WhyRow key={i}>
                      <span style={{ fontSize: '1rem', lineHeight: 1 }}>{item.icon}</span>
                      <Styles.WhyText>{item.text}</Styles.WhyText>
                    </Styles.WhyRow>
                  ))}
                </Styles.InfoSection>

              </Styles.InfoPanel>
            </SlideIn>

          </Styles.ContentGrid>
        </Styles.ContentSection>

      </Styles.ContentWrapper>
    </Styles.ContactWrapper>
  );
};

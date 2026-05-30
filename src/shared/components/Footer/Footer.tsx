import { Mail, Instagram, X, YouTube, LocationOn, NorthEast } from '@mui/icons-material';
import { Box } from '@mui/material';
import * as Styles from './Footer.style';
import { PageType } from '../../../config/constants';
import { GLOBAL_CONFIG } from '../../../config/global.config';

interface FooterProps {
  setPage: (page: PageType) => void;
}

export const Footer = ({ setPage }: FooterProps) => {
  const mainLinks: { label: string; value: PageType }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Journey', value: 'journey' },
    { label: 'Contact', value: 'contact' },
  ];

  const servicesLinks: { label: string; value: PageType }[] = [
    { label: 'Fitness & Training', value: 'fitness' },
    { label: 'Acting Portfolio', value: 'acting' },
    { label: 'Wildlife Rescue', value: 'wildlife' },
  ];

  return (
    <Styles.FooterWrapper>
      <Styles.FooterContainer maxWidth="lg">
        <Styles.FooterGrid>
          {/* ═══════════════════════════════════════════════════════════════════════════════ */}
          {/* BRAND SECTION - Left (4 columns) */}
          {/* ═══════════════════════════════════════════════════════════════════════════════ */}
          <Styles.BrandSection>
            <Styles.BrandHeader>
              <Styles.BrandNameSmall>{GLOBAL_CONFIG.personal.firstName} {GLOBAL_CONFIG.personal.middleName}</Styles.BrandNameSmall>
              <Styles.BrandNameLarge>{GLOBAL_CONFIG.personal.lastName}</Styles.BrandNameLarge>
              <Styles.BrandSubtitle>{GLOBAL_CONFIG.titles.main.toUpperCase()}</Styles.BrandSubtitle>
            </Styles.BrandHeader>

            <Styles.BrandDescription>
              Professional bodybuilder, actor, and licensed wildlife rescuer dedicated to fitness excellence, entertainment, and wildlife conservation.
            </Styles.BrandDescription>

            {/* Social Links */}
            <Box>
              <Styles.SocialLabel>Connect</Styles.SocialLabel>
              <Styles.SocialLinks>
                {/* Email */}
                <Styles.SocialIcon
                  href={`mailto:${GLOBAL_CONFIG.contact.email}`}
                  aria-label="Email"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: 'linear-gradient(to bottom right, #3b5bdb, #1c47e9)',
                    boxShadow: '0 8px 20px rgba(28, 71, 233, 0.3)',
                  }}
                >
                  <Mail sx={{ fontSize: 16 }} />
                </Styles.SocialIcon>

                {/* Instagram */}
                <Styles.SocialIcon
                  href={GLOBAL_CONFIG.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: 'linear-gradient(to bottom right, #ec4899, #a855f7, #f97316)',
                    boxShadow: '0 8px 20px rgba(236, 72, 153, 0.3)',
                  }}
                >
                  <Instagram sx={{ fontSize: 16 }} />
                </Styles.SocialIcon>

                {/* X (Twitter) */}
                <Styles.SocialIcon
                  href={GLOBAL_CONFIG.social.twitter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: '#000000',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <X sx={{ fontSize: 16 }} />
                </Styles.SocialIcon>

                {/* YouTube */}
                <Styles.SocialIcon
                  href={GLOBAL_CONFIG.social.youtube.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: '#dc2626',
                    boxShadow: '0 8px 20px rgba(220, 38, 38, 0.3)',
                  }}
                >
                  <YouTube sx={{ fontSize: 16 }} />
                </Styles.SocialIcon>
              </Styles.SocialLinks>
            </Box>

            {/* Contact Information */}
            <Styles.ContactSectionDivider>
              <Styles.ContactContent>
                <Box sx={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
                  <strong>Call:</strong> {GLOBAL_CONFIG.contact.phoneDisplay}
                </Box>
              </Styles.ContactContent>
            </Styles.ContactSectionDivider>
          </Styles.BrandSection>

          {/* ═══════════════════════════════════════════════════════════════════════════════ */}
          {/* NAVIGATION SECTION - Middle (5 columns) */}
          {/* ═══════════════════════════════════════════════════════════════════════════════ */}
          <Styles.NavSection>
            {/* Main Pages */}
            <Styles.NavColumn>
              <Styles.NavColumnHeader>
                <div className="divider" />
                <h3>Main Pages</h3>
              </Styles.NavColumnHeader>
              {mainLinks.map((link) => (
                <Styles.FooterLink
                  key={link.value}
                  onClick={() => setPage(link.value)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </Styles.FooterLink>
              ))}
            </Styles.NavColumn>

            {/* Services */}
            <Styles.NavColumn>
              <Styles.NavColumnHeader>
                <div className="divider" />
                <h3>Services</h3>
              </Styles.NavColumnHeader>
              {servicesLinks.map((link) => (
                <Styles.FooterLink
                  key={link.value}
                  onClick={() => setPage(link.value)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </Styles.FooterLink>
              ))}
            </Styles.NavColumn>
          </Styles.NavSection>

          {/* ═══════════════════════════════════════════════════════════════════════════════ */}
          {/* LOCATION SECTION - Right (3 columns) */}
          {/* ═══════════════════════════════════════════════════════════════════════════════ */}
          <Styles.LocationSection>
            <Styles.LocationHeader>
              <div className="divider" />
              <h3>Visit Us</h3>
            </Styles.LocationHeader>

            {/* Map */}
            <Styles.MapContainer>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d830.0955179129519!2d77.7532885565265!3d12.88094700662556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae72ac51bb1b79%3A0xae54dbfdbc9de93!2sPower%20house%20Gym!5e0!3m2!1sen!2sin!4v1772377453178!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Power House Gym Location"
              />
            </Styles.MapContainer>

            {/* Address */}
            <Styles.LocationInfo>
              <LocationOn sx={{ fontSize: 14 }} />
              <div>
                <p>{GLOBAL_CONFIG.business.gym.name}</p>
                <p>{GLOBAL_CONFIG.contact.address.city}, {GLOBAL_CONFIG.contact.address.state}, India</p>
              </div>
            </Styles.LocationInfo>

            {/* Get Directions Button */}
            <Styles.DirectionsButton
            href="https://www.google.com/maps/dir//Power+house+Gym/@12.8809582,77.7532886,20z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae72ac51bb1b79:0xae54dbfdbc9de93!2m2!1d77.7538691!2d12.8809582"              
            target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Directions
              <NorthEast sx={{ fontSize: 12 }} />
            </Styles.DirectionsButton>
          </Styles.LocationSection>
        </Styles.FooterGrid>

        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        {/* BOTTOM BAR */}
        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        <Styles.FooterBottom>
          <Styles.Copyright>
            © {new Date().getFullYear()} KARTHIK SHEKAR ACHARYA. ALL RIGHTS RESERVED.
          </Styles.Copyright>
          <Styles.FooterLinks>
            <Styles.FooterBottomLink
              onClick={() => setPage('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Privacy Policy
            </Styles.FooterBottomLink>
            <Styles.FooterBottomLink
              onClick={() => setPage('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Terms of Service
            </Styles.FooterBottomLink>
            <Styles.FooterBottomLink
              onClick={() => setPage('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sitemap
            </Styles.FooterBottomLink>
          </Styles.FooterLinks>
        </Styles.FooterBottom>
      </Styles.FooterContainer>
    </Styles.FooterWrapper>
  );
};

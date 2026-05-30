import { motion } from 'motion/react';
import { Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { PageType, PAGES } from '../../config/constants';
import { GLOBAL_CONFIG } from '../../config/global.config';
import { FadeIn, SlideIn, Stagger, ScaleIn, ZoomIn } from '../../shared/components';
import { ShowreelStack, ActingBits, PressReviews } from './components';

import {

  ActingWrapper,
  HeroStickyWrapper,
  EditorialAboutSection,
  EditorialAboutContainer,
  EditorialAboutLabel,
  EditorialAboutGrid,
  EditorialAboutImageWrapper,
  EditorialAboutImage,
  EditorialAboutImageOverlay,
  EditorialAboutContent,
  EditorialAboutTitle,
  EditorialAboutTextBlock,
  EditorialAboutParagraph,
  EditorialSignature,
  EditorialAmbientGlow,
  ActingBitsBridgeSection,
  GallerySection,
  GalleryContainer,
  GalleryHeader,
  GalleryGrid,
  GalleryItem,
  GalleryItemOverlay,
  GalleryItemBorder,
  GalleryItemCorner,
  GalleryItemScanLine,
  CinematicHeroSection,
  CinematicHeroGrid,
  CinematicHeroContent,
  CinematicHeroLabel,
  CinematicHeroTitle,
  CinematicHeroSubtitle,
  CinematicHeroButtons,
  CinematicPrimaryButton,
  CinematicSecondaryButton,
  CinematicHeroImageWrapper,
  CinematicHeroImage,
  CinematicHeroImageOverlay,
  CinematicHeroStats,
  CinematicHeroStat,
  CinematicHeroStatValue,
  CinematicHeroStatLabel,
  KeyFeaturesSection,
  KeyFeaturesMainRow,
  KeyFeatureItem,
  KeyFeaturesContainer,
  KeyFeaturesGrid,
  KeyFeatureBody,
  KeyFeatureItemTitle,
  KeyFeatureSubtitle,
  KeyFeatureIconBox,
  KeyFeaturesTopRow,
  KeyFeaturesTitle,
  KeyFeaturesLabel,
  InstaPromoBox,
  InstaAvatar,
  InstaPromoTitle,
  InstaPromoHandle,
  InstaPromoSubtext,
  KeyFeaturesDividerRule,
  KeyFeaturesImageWrapper,
  KeyFeaturesVideo,
  KeyFeatureItemDivider,
} from './Acting.style';
import { useRef } from 'react';

interface ActingProps {
  setPage?: (page: PageType) => void;
}

// ==================== CONTENT DATA ====================
const ACTING_CONTENT = {
  hero: {
    badge: 'TV, Film, and Theater Actress',
    title: {
      line1: GLOBAL_CONFIG.personal.firstName,
      line2: GLOBAL_CONFIG.personal.middleName,
      line3: GLOBAL_CONFIG.personal.lastName,
      highlightLine: 2, // Which line to highlight (0-based index)
    },
    subtitle: 'Action Specialist • Character Actor • Kannada Cinema',
    description: {
      text: 'Bringing raw intensity and authentic depth to every role. With 8+ years of experience in action and dramatic cinema, I deliver performances that resonate beyond the screen.',
      highlights: ['raw intensity', 'authentic depth'], // Words to make bold
    },
    stats: [
      {
        label: 'Experience',
        value: '08',
        description: 'Feature Films',
      },
      {
        label: 'Language',
        value: 'KANNADA',
        description: '(Native Speaker)',
        span: { xs: 1, md: 1 }, // Grid column span
      },
    ],
    buttons: {
      primary: 'AVAILABLE FOR CASTING',
      secondary: 'WATCH SHOWREEL',
    },
  },
  biography: {
    title: 'Acting Biography',
    titleHighlight: 'Acting', // Word to highlight
    leadText: 'A presence that commands the frame and a depth that lingers long after the credits roll.',
    paragraphs: [
      'With over eight years of experience across independent cinema and mainstream productions, Karthik has carved a niche as a transformative performer. His unique value lies in the intersection of raw, visceral intensity and quiet, calculated vulnerability.',
      'Whether portraying a weathered antagonist or a complex action lead, Karthik brings an authenticity that anchors every scene — making him a preferred collaborator for directors seeking truth in every frame.',
    ],
    buttons: {
      primary: 'Full CV / Credits',
      secondary: 'Download Headshots',
    },
  },
  gallery: {
    title: 'The Gallery',
    titleHighlight: 'Gallery', // Word to highlight
    subtitle: 'Audition Frames & On-Set Captures',
  },
  cta: {
    title: {
      line1: 'Collaborate',
      line2: 'with Karthik',
    },
    description: 'For inquiries regarding new projects, theatrical representation, or commercial bookings, reach out directly.',
    button: 'Contact Me',
  },
};

const reels = [
  {
    title: 'Acting Reel 2025',
    subtitle: 'Action, Drama & Commercial Highlights',
    duration: '03:45',
    label: 'Official Reel',
    youtubeId: '',
    videoSrc: '',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop',
  },
  {
    title: 'Action Showcase',
    subtitle: 'High-Intensity Fight & Stunt Sequences',
    duration: '02:10',
    label: 'Action Cut',
    youtubeId: '',
    videoSrc: '',
    thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop',
  },
  {
    title: 'Drama Highlights',
    subtitle: 'Character Depth & Emotional Range',
    duration: '04:20',
    label: 'Drama Cut',
    youtubeId: '',
    videoSrc: '',
    thumbnail: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop',
  },
];

const galleryImages = [
  { src: 'Acting/Anger.webp', span: 'col-span-1 md:col-span-2 row-span-2' },
  { src: 'Posters/gajarama2.webp', span: 'col-span-1 row-span-1' },
  { src: 'Posters/Ambarisha1.webp', span: 'col-span-1 row-span-1' },
  { src: 'Posters/onPaper2.webp', span: 'col-span-1 row-span-1' },
  { src: 'Gym/Homehero1.webp', span: 'col-span-1 md:col-span-2 row-span-1' },
  { src: 'Acting/Prabas.webp', span: 'col-span-1 row-span-2' },
  { src: 'Posters/onStage.webp', span: 'col-span-1 row-span-1' },
  { src: 'Posters/KamalSri1.webp', span: 'col-span-1 row-span-1' },
  { src: 'Acting/shared image (1).webp', span: 'col-span-1 md:col-span-2 row-span-2' },
  { src: 'Posters/onPaper.webp', span: 'col-span-1 row-span-1' },
  { src: 'Gym/shared image (3).webp', span: 'col-span-1 row-span-1' },
  { src: 'Posters/onPaper3.webp', span: 'col-span-1 row-span-1' },
  { src: 'Gym/shared image (4).webp', span: 'col-span-1 row-span-1' },
  { src: 'Posters/KamalSri2.webp', span: 'col-span-1 row-span-1' },
  { src: 'Posters/Ambarisha.webp', span: 'col-span-1 row-span-1' },
  { src: 'Posters/cutout.webp', span: 'col-span-1 md:col-span-2 row-span-1' },
  { src: 'Acting/Tiger_prabrakar.webp', span: 'col-span-1 row-span-1' },
];

export const Acting = ({ setPage }: ActingProps) => {
  const handlePageChange = (page: string) => {
    if (setPage) {
      setPage(page as PageType);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleContactWithService = () => {
    if (setPage) {
      setPage('contact' as PageType);
      // Pre-select Film Projects service by adding query param
      window.location.hash = '#/contact?service=Film Projects';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const galleryRef = useRef<HTMLDivElement>(null);


  return (
    <ActingWrapper>
      {/* ==================== HERO SECTION ==================== */}
      <HeroStickyWrapper>
        <CinematicHeroSection>
          <CinematicHeroGrid>

            {/* LEFT CONTENT */}

            <CinematicHeroContent>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <CinematicHeroLabel>
                  | KARTHIK SHEKAR ACHARYA |
                </CinematicHeroLabel>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
              >
                <CinematicHeroTitle>
                  TV, Film,
                  <br />
                  and Theater
                  <br />
                  Actor
                </CinematicHeroTitle>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <CinematicHeroSubtitle>
                  Available for feature films,
                  OTT originals, commercial campaigns,
                  and action performances worldwide.
                </CinematicHeroSubtitle>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <CinematicHeroButtons>

                  <CinematicPrimaryButton
                    onClick={() => galleryRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Watch Gallery
                  </CinematicPrimaryButton>

                  <CinematicSecondaryButton onClick={handleContactWithService}>
                    Contact Me
                  </CinematicSecondaryButton>

                </CinematicHeroButtons>
              </motion.div>

            </CinematicHeroContent>

            {/* IMAGE */}

            <CinematicHeroImageWrapper>

              <CinematicHeroImage
                src="/assets/Acting/acting.webp"
                alt="Karthik Shekar Acharya"
              />

              <CinematicHeroImageOverlay />

            </CinematicHeroImageWrapper>

            {/* STATS */}

            <CinematicHeroStats>

              <CinematicHeroStat>
                <CinematicHeroStatValue>
                  10+
                </CinematicHeroStatValue>

                <CinematicHeroStatLabel>
                  years of acting
                </CinematicHeroStatLabel>
              </CinematicHeroStat>

              <CinematicHeroStat>
                <CinematicHeroStatValue>
                  12
                </CinematicHeroStatValue>

                <CinematicHeroStatLabel>
                  film projects
                </CinematicHeroStatLabel>
              </CinematicHeroStat>

            </CinematicHeroStats>

          </CinematicHeroGrid>
        </CinematicHeroSection>
      </HeroStickyWrapper>


      {/* ==================== ACTING BITS ==================== */}
      <ActingBitsBridgeSection>

        <ActingBits />

      </ActingBitsBridgeSection>

      {/* ==================== BIOGRAPHY SECTION ==================== */}
      <EditorialAboutSection>

        <EditorialAmbientGlow
          sx={{
            top: '-10%',
            left: '-10%',
          }}
        />

        <EditorialAmbientGlow
          sx={{
            bottom: '-20%',
            right: '-10%',
          }}
        />

        <EditorialAboutContainer>

          <FadeIn delay={0.15}>

            <EditorialAboutLabel>
              | ABOUT |
            </EditorialAboutLabel>

          </FadeIn>

          <EditorialAboutGrid>

            {/* IMAGE SIDE */}

            <SlideIn direction="left" delay={0.2}>

              <EditorialAboutImageWrapper>

                <EditorialAboutImage
                  src={`${import.meta.env.BASE_URL}assets/Acting/Anger.webp`}
                  alt="Karthik Shekar Acharya"
                />

                <EditorialAboutImageOverlay />

              </EditorialAboutImageWrapper>

            </SlideIn>

            {/* CONTENT SIDE */}

            <SlideIn direction="right" delay={0.3}>

              <EditorialAboutContent>

                <EditorialAboutTitle>
                  The Art of
                  <br />
                  <span className="highlight">
                    Performance
                  </span>
                </EditorialAboutTitle>

                <EditorialAboutTextBlock>

                  <EditorialAboutParagraph>
                    Karthik Shekar Acharya brings a rare balance
                    of intensity, discipline, and emotional depth
                    to every performance. With experience across
                    action cinema, dramatic storytelling, and
                    character-driven roles, his screen presence
                    is built on authenticity rather than spectacle.
                  </EditorialAboutParagraph>

                  <EditorialAboutParagraph>
                    His approach to acting is rooted in realism —
                    understanding not only the character’s dialogue,
                    but the silence, tension, and humanity that exist
                    beneath every frame. Whether portraying a grounded
                    protagonist or a layered antagonist, Karthik
                    delivers performances that feel lived-in and cinematic.
                  </EditorialAboutParagraph>

                  <EditorialAboutParagraph>
                    Beyond film, he continues to evolve through
                    physical performance training, theatrical study,
                    and collaborative storytelling — constantly refining
                    his craft for projects that demand emotional truth
                    and visual impact.
                  </EditorialAboutParagraph>

                </EditorialAboutTextBlock>

                <EditorialSignature>
                  — Karthik Shekar Acharya
                </EditorialSignature>

              </EditorialAboutContent>

            </SlideIn>

          </EditorialAboutGrid>

        </EditorialAboutContainer>

      </EditorialAboutSection>

      {/* ==================== PRESS & REVIEWS ==================== */}



      {/* ==================== KEY FEATURES SECTION ==================== */}
      <KeyFeaturesSection>
        <KeyFeaturesContainer>

          {/* ── TOP ROW: label + title | instagram promo ── */}
          <FadeIn delay={0.1}>
            <KeyFeaturesTopRow>

              {/* Left */}
              <Box>
                <KeyFeaturesLabel>| FEATURES |</KeyFeaturesLabel>
                <KeyFeaturesTitle>
                  Highlighting{' '}
                  <span className="highlight">Key</span>
                  {' '}Aspects
                </KeyFeaturesTitle>
              </Box>

              {/* Right — Instagram promo */}
              <InstaPromoBox
              >
                <InstaAvatar
                  src={new URL('/assets/Acting/acting.webp', import.meta.url).href}
                  alt="Karthik Shekar"
                />
                <Box>
                  <InstaPromoTitle>Follow my Instagram</InstaPromoTitle>
                  <InstaPromoSubtext>
                    Behind-the-scenes, reels and updates at{' '}
                    <InstaPromoHandle
                      onClick={() => window.open(`${GLOBAL_CONFIG.social.instagram.url}`, '_blank', 'noopener,noreferrer')}
                sx={{ cursor: 'pointer' }}
                role="button"
                tabIndex={0}
                aria-label="Follow my Instagram"
                onKeyPress={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    window.open(`${GLOBAL_CONFIG.social.instagram.url}`, '_blank', 'noopener,noreferrer');
                  }
                }}>{GLOBAL_CONFIG.social.instagram.handle}</InstaPromoHandle>
                  </InstaPromoSubtext>
                </Box>
              </InstaPromoBox>

            </KeyFeaturesTopRow>
          </FadeIn>

          {/* Full-width rule */}
          <KeyFeaturesDividerRule />

          {/* ── MAIN ROW: portrait | 2×2 grid ── */}
          <KeyFeaturesMainRow>

            {/* LEFT — tall portrait */}
            <SlideIn direction="left" delay={0.2}>
              <KeyFeaturesImageWrapper>
                <KeyFeaturesVideo
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source
                    src={`${import.meta.env.BASE_URL}assets/Acting/reel/backgroung.mp4`}
                    type="video/mp4"
                  />
                </KeyFeaturesVideo>
              </KeyFeaturesImageWrapper>
            </SlideIn>
            {/* RIGHT — 2×2 feature grid */}
            <SlideIn direction="right" delay={0.3}>
              <KeyFeaturesGrid>

                {/* 1 — Dedication to Craft */}
                <KeyFeatureItem>
                  <KeyFeatureIconBox>
                    {/* Candle / stage spotlight icon */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2c0 0-2 2-2 4s2 2 2 2 2 0 2-2-2-4-2-4z" />
                      <path d="M8 20h8" />
                      <path d="M9 20V10h6v10" />
                      <path d="M7 10h10" />
                      <path d="M5 20h14" />
                    </svg>
                  </KeyFeatureIconBox>
                  <KeyFeatureItemTitle>Dedication to Craft</KeyFeatureItemTitle>
                  <KeyFeatureItemDivider />
                  <KeyFeatureSubtitle>Making my roles impactful</KeyFeatureSubtitle>
                  <KeyFeatureBody>
                    Rigorous preparation and total commitment to every role — extensive research and training to ensure each performance is deeply believable.
                  </KeyFeatureBody>
                </KeyFeatureItem>

                {/* 2 — Strong Stage Presence */}
                <KeyFeatureItem>
                  <KeyFeatureIconBox>
                    {/* Director's chair icon */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 7h16" />
                      <path d="M6 7l-2 13" />
                      <path d="M18 7l2 13" />
                      <path d="M8 13h8" />
                      <path d="M10 20l2-4 2 4" />
                    </svg>
                  </KeyFeatureIconBox>
                  <KeyFeatureItemTitle>Strong Stage Presence</KeyFeatureItemTitle>
                  <KeyFeatureItemDivider />
                  <KeyFeatureSubtitle>Transitioning between film and theater</KeyFeatureSubtitle>
                  <KeyFeatureBody>
                    A commanding presence on both stage and screen that captivates audiences and draws them fully into the story, leaving a lasting impression.
                  </KeyFeatureBody>
                </KeyFeatureItem>

                {/* 3 — Versatile Acting Range */}
                <KeyFeatureItem>
                  <KeyFeatureIconBox>
                    {/* Star / multi-point icon */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l2.8 6 6.2.9-4.5 4.4 1.1 6.2L12 16.4l-5.6 3.1 1.1-6.2L3 8.9l6.2-.9L12 2z" />
                    </svg>
                  </KeyFeatureIconBox>
                  <KeyFeatureItemTitle>Versatile Acting Range</KeyFeatureItemTitle>
                  <KeyFeatureItemDivider />
                  <KeyFeatureSubtitle>Harmonious in all genres</KeyFeatureSubtitle>
                  <KeyFeatureBody>
                    Seamlessly shifting between dramatic intensity and nuanced restraint — embodying any character across every genre with full authenticity.
                  </KeyFeatureBody>
                </KeyFeatureItem>

                {/* 4 — Emotional Depth */}
                <KeyFeatureItem>
                  <KeyFeatureIconBox>
                    {/* Drama masks icon */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 8c0 4 2.5 7 6 7s6-3 6-7V5H2v3z" />
                      <path d="M10 8c0 4 2.5 7 6 7s6-3 6-7V5h-4" />
                      <path d="M5 9.5c.5 0 1 .5 2 .5s1.5-.5 2-.5" />
                      <path d="M13 9.5c.5 0 1 .5 2 .5s1.5-.5 2-.5" />
                      <path d="M5 13c1 1.5 4 1.5 5 0" />
                      <path d="M14 11c.5 1 2.5 2 4 1" />
                    </svg>
                  </KeyFeatureIconBox>
                  <KeyFeatureItemTitle>Emotional Depth</KeyFeatureItemTitle>
                  <KeyFeatureItemDivider />
                  <KeyFeatureSubtitle>I don't just act — I live the role</KeyFeatureSubtitle>
                  <KeyFeatureBody>
                    Conveying complex feelings and inner turmoil with subtlety and nuance — performances that resonate long after the final frame.
                  </KeyFeatureBody>
                </KeyFeatureItem>

              </KeyFeaturesGrid>
            </SlideIn>

          </KeyFeaturesMainRow>

        </KeyFeaturesContainer>
      </KeyFeaturesSection>
      {/* ==================== PHOTO GALLERY ==================== */}
      <GallerySection ref={galleryRef}>
        <GalleryContainer>
          <FadeIn delay={0.2}>
            <GalleryHeader>
              <Box component="h2" sx={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 'clamp(3.75rem, 8vw, 6rem)',
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '0.025em',
                '& .highlight': {
                  color: '#C9A84C',
                  fontStyle: 'italic',
                },
              }}>
                {ACTING_CONTENT.gallery.title.replace(ACTING_CONTENT.gallery.titleHighlight, '')} <span className="highlight">{ACTING_CONTENT.gallery.titleHighlight}</span>
              </Box>
              <Box sx={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: '0.875rem',
                fontFamily: '"Inter", sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                mt: 1.5,
              }}>
                {ACTING_CONTENT.gallery.subtitle}
              </Box>
            </GalleryHeader>
          </FadeIn>

          <Stagger staggerDelay={0.04}>
            <GalleryGrid>
              {galleryImages.map((item, i) => (
                <GalleryItem
                  key={i}
                  className="GalleryItem"
                  sx={{
                    gridColumn: item.span.split(' ')[0].replace('col-span-', 'span '),
                    gridRow: item.span.split(' ').find(s => s.includes('row-span'))?.replace('row-span-', 'span ') || 'span 1',
                  }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}assets/${item.src}`}
                    alt=""
                  />
                  <GalleryItemOverlay />
                  <GalleryItemBorder />
                  <GalleryItemCorner />
                  <GalleryItemScanLine />
                </GalleryItem>
              ))}
            </GalleryGrid>
          </Stagger>
        </GalleryContainer>
      </GallerySection>
    </ActingWrapper>
  );
};

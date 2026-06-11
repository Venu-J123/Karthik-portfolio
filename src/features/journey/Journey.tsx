import { motion } from 'motion/react';
import {
  FitnessCenter,
  EmojiEvents,
  Psychology,
  Movie,
  Star,
  TrendingUp,
  Favorite,
  Visibility,
  LocalFireDepartment,
  ChevronLeft,
  ChevronRight,
  PlayArrow,
} from '@mui/icons-material';
import { Box, SvgIconProps } from '@mui/material';
import { ElementType } from 'react';
import { PageType } from '../../config/constants';
import { GLOBAL_CONFIG } from '../../config/global.config';
import {
  JourneyWrapper,
  GrainOverlay,
  Scanlines,
  PageInner,
  HeaderBadge,
  PageTitle,
  PageSubtitle,
  BentoGrid,
  BentoCard,
  OverlayBottom,
  OverlayLeft,
  OverlayFull,
  YearWatermark,
  YearWatermarkBlue,
  CardBottom,
  CardFull,
  CardInner,
  CardCenter,
  CardLabel,
  CardTitle,
  CardTitleXL,
  CardText,
  BigStat,
  SmallLabel,
  CategoryPill,
  InlineStats,
  TrailerBtn,
  PlayBadge,
  HRule,
  GridFooter,
  FooterQuote,
  FooterSource,
  NavBtns,
  CircleBtn,
  CTASection,
  CTAContainer,
  CTATitle,
  CTADescription,
  CTAButtons,
  CTAButton,
  CTASecondaryButton,
} from './Journey.style';

interface JourneyProps {
  setPage?: (page: PageType) => void;
}

interface Milestone {
  id: number;
  year: string;
  age: string;
  category: string;
  icon: ElementType<SvgIconProps>;
  iconColor: string;
  title: string;
  description: string;
  type: 'video' | 'images';
  videoId?: string;
  images?: string[];
  stats: { icon: ElementType<SvgIconProps>; label: string }[];
  link: string;
}

const BASE = import.meta.env.BASE_URL;

// Background images for each milestone card (by index)
const BG = [
  `${BASE}assets/Gym/single_prabakar.webp`,
  `${BASE}assets/Gym/IMG-20260413-WA0047.webp`,
  `${BASE}assets/Gym/IMG-20260413-WA0079.webp`,
  `${BASE}assets/Gym/heroImage2.webp`,
  `${BASE}assets/Gym/IMG-20260413-WA0083.webp`,
  `${BASE}assets/Acting/IMG-20260413-WA0016.webp`,
  `${BASE}assets/Acting/IMG-20260413-WA0059.webp`,
  `${BASE}assets/Style/towardsCameraB&W.webp`,
];

// Explicit grid positions per milestone (lg = 12-col, md = 4-col)
const GRID = [
  { lgCol: '1 / span 7',  lgRow: '1 / span 2', mdCol: '1 / span 4', mdRow: '1 / span 2' },  // M1
  { lgCol: '8 / span 5',  lgRow: '1 / span 2', mdCol: '1 / span 4', mdRow: '3 / span 2' },  // M2
  { lgCol: '1 / span 4',  lgRow: '3 / span 3', mdCol: '1 / span 2', mdRow: '5 / span 3' },  // M3
  { lgCol: '5 / span 8',  lgRow: '3 / span 2', mdCol: '3 / span 2', mdRow: '5 / span 2' },  // M4
  { lgCol: '5 / span 8',  lgRow: '5 / span 1', mdCol: '1 / span 4', mdRow: '8 / span 1' },  // M5
  { lgCol: '1 / span 6',  lgRow: '6 / span 2', mdCol: '1 / span 2', mdRow: '9 / span 2' },  // M6
  { lgCol: '7 / span 6',  lgRow: '6 / span 2', mdCol: '3 / span 2', mdRow: '9 / span 2' },  // M7
  { lgCol: '1 / span 12', lgRow: '8 / span 2', mdCol: '1 / span 4', mdRow: '11 / span 2' }, // M8
];

const MILESTONES: Milestone[] = [
  {
    id: 1,
    year: '2015',
    age: '18',
    category: 'FITNESS',
    icon: FitnessCenter,
    iconColor: '#8b5cf6',
    title: 'Fitness Journey Begins',
    description: 'Started my fitness transformation journey at age 18, discovering my passion for bodybuilding and healthy living. Joined my first gym and began learning the fundamentals of strength training.',
    type: 'images',
    images: [],
    stats: [
      { icon: TrendingUp, label: 'First Year' },
      { icon: FitnessCenter, label: 'Training Began' },
    ],
    link: '#',
  },
  {
    id: 2,
    year: '2018',
    age: '21',
    category: 'FITNESS',
    icon: EmojiEvents,
    iconColor: '#10b981',
    title: 'First Competition Entry',
    description: "Competed in my first regional bodybuilding competition. Though I didn't win, the experience ignited my competitive spirit and taught me invaluable lessons about discipline and preparation.",
    type: 'video',
    videoId: 'oKSWfiVqqXM',
    stats: [
      { icon: Star, label: 'Top 5 Finish' },
      { icon: TrendingUp, label: 'Learning Phase' },
    ],
    link: GLOBAL_CONFIG.social.youtube.channelUrl,
  },
  {
    id: 3,
    year: '2020',
    age: '23',
    category: 'FITNESS',
    icon: Psychology,
    iconColor: '#D4AF37',
    title: 'Certified Fitness & Nutrition Coach',
    description: 'Obtained international ISSA certification in fitness training and nutrition coaching. This marked my transition from athlete to educator, combining scientific knowledge with practical experience.',
    type: 'images',
    images: [],
    stats: [
      { icon: EmojiEvents, label: 'ISSA Certified' },
      { icon: Psychology, label: 'Nutrition Expert' },
    ],
    link: '#',
  },
  {
    id: 4,
    year: '2021',
    age: '24',
    category: 'FITNESS',
    icon: LocalFireDepartment,
    iconColor: '#ef4444',
    title: 'State Level Championship Victory',
    description: "Won the State Level Men's Physique Championship, earning my Pro Card. This victory validated years of hard work and marked my arrival in competitive fitness.",
    type: 'video',
    videoId: 'oKSWfiVqqXM',
    stats: [
      { icon: EmojiEvents, label: '1st Place' },
      { icon: Star, label: 'Pro Card Earned' },
    ],
    link: GLOBAL_CONFIG.social.youtube.channelUrl,
  },
  {
    id: 5,
    year: '2022',
    age: '25',
    category: 'FITNESS',
    icon: TrendingUp,
    iconColor: '#10b981',
    title: 'Online Transformation Program Launch',
    description: 'Launched my exclusive online fitness transformation program, combining personalized coaching with nutrition guidance. Successfully helped 500+ clients achieve their dream physiques.',
    type: 'video',
    videoId: '51sY3B8Rbnc',
    stats: [
      { icon: TrendingUp, label: '500+ Clients' },
      { icon: Favorite, label: '95% Success Rate' },
    ],
    link: GLOBAL_CONFIG.social.youtube.channelUrl,
  },
  {
    id: 6,
    year: '2023',
    age: '26',
    category: 'ACTING',
    icon: Movie,
    iconColor: '#ec4899',
    title: 'Acting Debut — "The Journey Begins"',
    description: 'Made my acting debut in a critically acclaimed regional film. Received praise for delivering a powerful performance that showcased my versatility beyond the fitness world.',
    type: 'images',
    images: [],
    stats: [
      { icon: Star, label: '4.5/5 Rating' },
      { icon: Movie, label: 'Best Debut Nominee' },
    ],
    link: 'https://imdb.com',
  },
  {
    id: 7,
    year: '2023',
    age: '26',
    category: 'ACTING',
    icon: Star,
    iconColor: '#f59e0b',
    title: "Lead Role — \"Warrior's Path\"",
    description: 'Secured the lead role in action thriller "Warrior\'s Path". Combined my fitness expertise with acting skills to deliver an authentic and physically demanding performance.',
    type: 'video',
    videoId: 'Thy0fpXXlSU',
    stats: [
      { icon: Visibility, label: '1.2M Views' },
      { icon: Star, label: 'Box Office Success' },
    ],
    link: 'https://imdb.com',
  },
  {
    id: 8,
    year: '2024',
    age: '27',
    category: 'FITNESS',
    icon: EmojiEvents,
    iconColor: '#dc2626',
    title: 'Mr. India Bodybuilding Champion',
    description: 'Achieved the pinnacle of my fitness career by winning 1st place at the prestigious Mr. India Bodybuilding Championship. Years of dedication, discipline, and sacrifice culminated in this moment.',
    type: 'video',
    videoId: 'bnpPF_H70SM',
    stats: [
      { icon: EmojiEvents, label: 'National Champion' },
      { icon: Visibility, label: '750K Views' },
    ],
    link: GLOBAL_CONFIG.social.youtube.channelUrl,
  },
];

export const Journey = ({ setPage }: JourneyProps) => {
  return (
    <JourneyWrapper>
      <GrainOverlay />
      <Scanlines />

      {/* Advanced Journey Timeline Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <svg
          style={{
            position: 'ab solute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          viewBox="0 0 1400 3000"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Gradient definitions */}
            <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Shimmer animation */}
            <style>
              {`
                @keyframes shimmer {
                  0% { strokeDashoffset: 1000; }
                  100% { strokeDashoffset: 0; }
                }
                @keyframes pulse {
                  0%, 100% { r: 8; opacity: 0.6; }
                  50% { r: 12; opacity: 1; }
                }
                .timeline-path {
                  animation: shimmer 6s ease-in-out infinite;
                }
                .milestone-pulse {
                  animation: pulse 2s ease-in-out infinite;
                }
              `}
            </style>
          </defs>

          {/* Background grid pattern */}
          <g opacity="0.08" stroke="#D4AF37" strokeWidth="1">
            <line x1="0" y1="0" x2="0" y2="3000" />
            <line x1="350" y1="0" x2="350" y2="3000" />
            <line x1="700" y1="0" x2="700" y2="3000" />
            <line x1="1050" y1="0" x2="1050" y2="3000" />
            <line x1="1400" y1="0" x2="1400" y2="3000" />
          </g>

          {/* Main flowing timeline path */}
          <path
            className="timeline-path"
            d="M 700,100 L 700,500 Q 700,600 650,700 L 650,1200 Q 700,1300 700,1400 L 700,1900 Q 650,2000 700,2100 L 700,2600 Q 750,2700 700,2800"
            stroke="url(#pathGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="1000"
            opacity="0.7"
          />

          {/* Milestone connection nodes with glow */}
          <g filter="url(#glow)">
            {/* Checkpoint 1 - 2005 Wildlife */}
            <circle className="milestone-pulse" cx="700" cy="300" r="8" fill="#f59e0b" />
            <circle cx="700" cy="300" r="15" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.3" />

            {/* Checkpoint 2 - 2007 Fitness */}
            <circle className="milestone-pulse" cx="700" cy="700" r="8" fill="#3b82f6" />
            <circle cx="700" cy="700" r="15" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />

            {/* Checkpoint 3 - 2009 Professional */}
            <circle className="milestone-pulse" cx="700" cy="1100" r="8" fill="#10b981" />
            <circle cx="700" cy="1100" r="15" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.3" />

            {/* Checkpoint 4 - 2010 Acting */}
            <circle className="milestone-pulse" cx="700" cy="1500" r="8" fill="#ec4899" />
            <circle cx="700" cy="1500" r="15" fill="none" stroke="#ec4899" strokeWidth="1" opacity="0.3" />

            {/* Checkpoint 5 - 2012 Championship */}
            <circle className="milestone-pulse" cx="700" cy="1900" r="8" fill="#D4AF37" />
            <circle cx="700" cy="1900" r="15" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.3" />

            {/* Checkpoint 6 - Present */}
            <circle className="milestone-pulse" cx="700" cy="2450" r="8" fill="#06b6d4" />
            <circle cx="700" cy="2450" r="15" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.3" />
          </g>

          {/* Connecting branch lines to cards */}
          <g stroke="url(#journeyGradient)" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="5,5">
            {/* Left branches */}
            <path d="M 700,300 L 250,300" />
            <path d="M 700,700 L 250,700" />
            <path d="M 700,1100 L 250,1100" />

            {/* Right branches */}
            <path d="M 700,1500 L 1150,1500" />
            <path d="M 700,1900 L 1150,1900" />
            <path d="M 700,2450 L 1150,2450" />
          </g>

          {/* Decorative spiral elements */}
          <g opacity="0.15" stroke="url(#journeyGradient)" strokeWidth="1" fill="none">
            <circle cx="200" cy="300" r="30" />
            <circle cx="200" cy="300" r="50" />
            <circle cx="1200" cy="1500" r="40" />
            <circle cx="1200" cy="1500" r="60" />
          </g>

          {/* Progress flow particles */}
          <g opacity="0.3">
            <circle cx="700" cy="150" r="3" fill="#D4AF37">
              <animate attributeName="cy" from="150" to="2500" dur="8s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.6" to="0" dur="8s" repeatCount="indefinite" />
            </circle>
            <circle cx="680" cy="200" r="2.5" fill="#f59e0b">
              <animate attributeName="cy" from="200" to="2550" dur="10s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.5" to="0" dur="10s" repeatCount="indefinite" />
            </circle>
            <circle cx="720" cy="100" r="2" fill="#ec4899">
              <animate attributeName="cy" from="100" to="2600" dur="12s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.4" to="0" dur="12s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>

        {/* Radial glow overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            background:
              'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
      </Box>

      <PageInner>
        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <HeaderBadge>
            <span>Biographical Exhibition</span>
          </HeaderBadge>

          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            THE NON-LINEAR
            <br />
            <span className="gradient-text">EVOLUTION</span>
          </PageTitle>

          <PageSubtitle>
            A curated journey through a life defined by physical discipline, cinematic
            performance, and the relentless pursuit of excellence — from 2015 to today.
          </PageSubtitle>
        </motion.div>

        {/* ── BENTO GRID ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <BentoGrid>
            {MILESTONES.map((m, i) => {
              const g = GRID[i];
              const isWide = i === 7; // M8: full-width climax
              const isTall = i === 2; // M3: tall 4×3
              const isCompact = i === 4; // M5: single-row wide

              return (
                <BentoCard
                  key={m.id}
                  sx={{
                    gridColumn: { xs: 'span 1', md: g.mdCol, lg: g.lgCol },
                    gridRow: { xs: 'auto', md: g.mdRow, lg: g.lgRow },
                  }}
                >
                  {/* Background image */}
                  <img
                    className={isWide ? 'card-img' : 'card-img-zoom'}
                    src={BG[i]}
                    alt={m.title}
                  />

                  {/* Overlay */}
                  {isWide ? <OverlayFull /> : i % 3 === 1 ? <OverlayLeft /> : <OverlayBottom />}

                  {/* Year watermark */}
                  {isWide ? (
                    <YearWatermarkBlue
                      style={{
                        top: '50%',
                        right: '2rem',
                        left: 'auto',
                        transform: 'translateY(-50%)',
                        fontSize: 'clamp(8rem, 18vw, 16rem)',
                      }}
                    >
                      {m.year}
                    </YearWatermarkBlue>
                  ) : (
                    <YearWatermark>{m.year}</YearWatermark>
                  )}

                  {/* Card content */}
                  {isWide ? (
                    // M8: Full-width climax — centered layout
                    <CardCenter sx={{ display: { xs: 'none', md: 'flex' } }}>
                      <div style={{ textAlign: 'center' }}>
                        <CategoryPill accent={m.iconColor} sx={{ justifyContent: 'center' }}>
                          <m.icon />
                          <span>{m.category} · AGE {m.age}</span>
                        </CategoryPill>
                        <CardTitleXL style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1rem' }}>
                          {m.title}
                        </CardTitleXL>
                        <CardText style={{ maxWidth: '44rem', margin: '0 auto 1.5rem' }}>
                          {m.description}
                        </CardText>
                        <InlineStats sx={{ justifyContent: 'center', borderTop: 'none', paddingTop: 0, marginTop: 0, gap: '3rem' }}>
                          {m.stats.map((s, si) => (
                            <div key={si} style={{ textAlign: 'center' }}>
                              <BigStat style={{ fontSize: '1.25rem' }}>{s.label}</BigStat>
                            </div>
                          ))}
                        </InlineStats>
                      </div>
                    </CardCenter>
                  ) : isTall ? (
                    // M3: Tall card — full content + CTA button
                    <CardFull sx={{ display: { xs: 'none', md: 'flex' } }}>
                      {m.type === 'video' && (
                        <PlayBadge>
                          <PlayArrow />
                          <span>Video</span>
                        </PlayBadge>
                      )}
                      <CardLabel style={{ marginBottom: '0.75rem' }}>
                        {m.category} · {m.year}
                      </CardLabel>
                      <CardTitleXL style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '0.75rem' }}>
                        {m.title}
                      </CardTitleXL>
                      <CardText style={{ marginBottom: '1.5rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {m.description}
                      </CardText>
                      <InlineStats>
                        {m.stats.map((s, si) => (
                          <div key={si}>
                            <SmallLabel style={{ marginBottom: '0.2rem' }}>{s.label}</SmallLabel>
                          </div>
                        ))}
                      </InlineStats>
                      {m.link !== '#' && (
                        <TrailerBtn
                          style={{ marginTop: '1.25rem' }}
                          onClick={() => window.open(m.link, '_blank', 'noopener,noreferrer')}
                        >
                          {m.type === 'video' ? 'Watch Now' : 'View Details'}
                          <PlayArrow />
                        </TrailerBtn>
                      )}
                    </CardFull>
                  ) : isCompact ? (
                    // M5: Single-row — horizontal compact layout
                    <CardInner sx={{ flexDirection: 'row', alignItems: 'center', gap: '2rem' }}>
                      <div style={{ flexShrink: 0 }}>
                        <CardLabel>{m.category}</CardLabel>
                        <YearWatermark style={{ position: 'static', display: 'block', fontSize: '3rem', opacity: 0.15 }}>
                          {m.year}
                        </YearWatermark>
                      </div>
                      <div style={{ flex: 1 }}>
                        <CardTitle style={{ marginBottom: '0.25rem' }}>{m.title}</CardTitle>
                        <CardText style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', fontSize: '0.8rem' }}>
                          {m.description}
                        </CardText>
                      </div>
                      <InlineStats sx={{ flexDirection: 'column', gap: '0.75rem', border: 'none', paddingTop: 0, flexShrink: 0 }}>
                        {m.stats.map((s, si) => (
                          <div key={si} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <s.icon sx={{ fontSize: '0.875rem', color: m.iconColor }} />
                            <SmallLabel>{s.label}</SmallLabel>
                          </div>
                        ))}
                      </InlineStats>
                    </CardInner>
                  ) : (
                    // Default: bottom-anchored content
                    <CardBottom>
                      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1, mb: 0.75, flexWrap: 'wrap' }}>
                        <CategoryPill accent={m.iconColor}>
                          <m.icon />
                          <span>{m.category}</span>
                        </CategoryPill>
                        {m.type === 'video' && (
                          <PlayBadge>
                            <PlayArrow />
                            <span>Video</span>
                          </PlayBadge>
                        )}
                      </Box>
                      <CardTitle>{m.title}</CardTitle>
                      <CardText style={{
                        marginBottom: '0.75rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}>
                        {m.description}
                      </CardText>
                      <InlineStats>
                        {m.stats.map((s, si) => (
                          <div key={si} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <s.icon sx={{ fontSize: '0.875rem', color: m.iconColor }} />
                            <SmallLabel>{s.label}</SmallLabel>
                          </div>
                        ))}
                      </InlineStats>
                    </CardBottom>
                  )}
                </BentoCard>
              );
            })}
          </BentoGrid>
        </motion.div>

        {/* ── FOOTER ── */}
        <GridFooter>
          <div style={{ maxWidth: '32rem' }}>
            <FooterQuote>
              "A performance is not just a scene; it's the culmination of every mile
              walked in silence."
            </FooterQuote>
            <FooterSource>— On the intersection of Discipline and Art</FooterSource>
          </div>
          <NavBtns sx={{ display: { xs: 'none', md: 'flex' } }}>
            <CircleBtn onClick={() => setPage?.('fitness')}>
              <ChevronLeft />
            </CircleBtn>
            <CircleBtn $primary onClick={() => setPage?.('contact')}>
              <ChevronRight />
            </CircleBtn>
          </NavBtns>
        </GridFooter>
      </PageInner>

      {/* ── CTA ── */}
      <CTASection>
        <CTAContainer>
          <CTATitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Create <span className="highlight">Something Amazing</span>
          </CTATitle>
          <CTADescription>
            Whether it's fitness transformation, acting collaboration, or brand
            partnerships — let's connect and make it happen.
          </CTADescription>
          <CTAButtons>
            <CTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPage?.('contact')}
            >
              Get In Touch
            </CTAButton>
            <CTASecondaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPage?.('fitness')}
            >
              View Fitness
            </CTASecondaryButton>
          </CTAButtons>
        </CTAContainer>
      </CTASection>
    </JourneyWrapper>
  );
};

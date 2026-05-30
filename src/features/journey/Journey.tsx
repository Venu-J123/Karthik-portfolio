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
  `${BASE}assets/Gym/single_prabakar.jpg`,
  `${BASE}assets/Gym/IMG-20260413-WA0047.jpg`,
  `${BASE}assets/Gym/IMG-20260413-WA0079.jpg`,
  `${BASE}assets/Gym/heroImage2.png`,
  `${BASE}assets/Gym/IMG-20260413-WA0083.jpg`,
  `${BASE}assets/Acting/IMG-20260413-WA0016.jpg`,
  `${BASE}assets/Acting/IMG-20260413-WA0059.jpg`,
  `${BASE}assets/Style/towardsCameraB&W.jpg`,
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
                    <CardCenter>
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
                    <CardFull>
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
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.75, flexWrap: 'wrap' }}>
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
          <NavBtns>
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

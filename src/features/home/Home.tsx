import { useState, useEffect, useRef } from 'react';
import { Box, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'motion/react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import MovieIcon from '@mui/icons-material/Movie';
import PetsIcon from '@mui/icons-material/Pets';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShieldIcon from '@mui/icons-material/Shield';
import Star from '@mui/icons-material/Star';

import { PAGES, PageType } from '../../config/constants';
import { GLOBAL_CONFIG } from '../../config/global.config';
import { StatCard, FadeIn, SlideIn, Stagger, ScaleIn, Bounce } from '../../shared/components';
import { useInfiniteScroll } from '../../shared/hooks';
import { JOURNEY_MILESTONES } from './journeyData';
import {
  HomeWrapper,
  HeroSection,
  HeroImageMobile,
  HeroImage,
  HeroOverlay,
  HeroBlobs,
  HeroMainLayout,
  HeroLeftPanel,
  HeroNameBlock,
  HeroTitle,
  HeroSubtitle,
  HeroThirdLine,
  HeroBackgroundTypography,
  BackgroundText,
  HeroQuoteContainer,
  QuoteText,
  QuoteAuthor,
  CredentialBadge,
  CredentialIcon,
  CredentialText,
  HeroCinematicGlow,
  PremiumCinematicOverlay,
  CarouselContainer,
  CarouselFade,
  CarouselScrollTrack,
  CarouselStrip,
  ThumbnailCard,
  ThumbnailImage,
  ThumbnailOverlay,
  ThumbnailTag,
  StatsSection,
  StatsBgImage,
  StatsOverlay,
  StatsGrid,
  SocialSection,
  SocialHeader,
  SocialStats,
  StatBox,
  StatIcon,
  StatContent,
  StatValue,
  StatLabel,
  VideoGrid,
  VideoCard,
  VideoImage,
  VideoOverlay,
  VideoPlayButton,
  PlayIcon,
  VideoContent,
  VideoTag,
  VideoTitle,
  ViewAllButton,
  MarqueeSection,
  MarqueeStrip,
  MarqueeItem,
  SectionHeadingContainer,
  SectionSubtitle,
  SectionTitle,
  JourneySection,
  JourneyBackground,
  JourneyContainer,
  TimelineScroll,
  TimelineWrapper,
  TimelineItem,
  TimelineLine,
  TimelineDot,
  CategoryBadge,
  TimelineCard,
  MilestoneIconWrapper,
  YearBadge,
  MilestoneTitle,
  MilestoneDescription,
  JourneyCTAButton,
  TimelineFadeLeft,
  TimelineFadeRight,
} from './Home.style';
import { PlayBadge } from '../journey/Journey.style';

interface HomeProps {
  setPage?: (page: PageType) => void;
}

// ==================== YOUTUBE API CONFIGURATION ====================

const YOUTUBE_CONFIG = {
  ...GLOBAL_CONFIG.social.youtube,
  maxResults: 5,
};

interface ChannelStats {
  subscribers: string;
  totalViews: string;
  totalVideos: string;
}

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  videoId: string;
  tag: string;
}

// Format large numbers
const formatCount = (count: number): string => {
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
  return count.toString();
};

// Fetch YouTube Channel Statistics
const fetchYouTubeChannelStats = async (): Promise<ChannelStats | null> => {
  if (!YOUTUBE_CONFIG.apiKey) {
    console.warn('YouTube API key not configured');
    return null;
  }

  try {
    // Try with channel handle first
    let response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&forHandle=${YOUTUBE_CONFIG.channelHandle.replace('@', '')}&key=${YOUTUBE_CONFIG.apiKey}`
    );

    // Fallback to channel ID
    if (!response.ok) {
      response = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YOUTUBE_CONFIG.channelId}&key=${YOUTUBE_CONFIG.apiKey}`
      );
    }

    if (!response.ok) throw new Error('Failed to fetch channel stats');

    const data = await response.json();
    const stats = data.items?.[0]?.statistics;

    if (!stats) throw new Error('No statistics found');

    return {
      subscribers: formatCount(parseInt(stats.subscriberCount || '0')),
      totalViews: formatCount(parseInt(stats.viewCount || '0')),
      totalVideos: stats.videoCount || '0',
    };
  } catch (error) {
    console.error('Error fetching YouTube stats:', error);
    return null;
  }
};

// Fetch Featured YouTube Videos (3 latest)
const fetchFeaturedYouTubeVideos = async (): Promise<YouTubeVideo[]> => {
  if (!YOUTUBE_CONFIG.apiKey) {
    console.warn('YouTube API key not configured. Using fallback videos.');
    return [
      {
        id: '1',
        title: 'How to build massive shoulders in 4 weeks',
        tag: 'Bodybuilding Tips',
        thumbnail: 'https://picsum.photos/seed/vikram-yt-1/800/450',
        videoId: 'dQw4w9WgXcQ',
      },
      {
        id: '2',
        title: 'Snake Rescue Mission',
        tag: 'Wildlife Rescue',
        thumbnail: 'https://picsum.photos/seed/vikram-yt-2/800/450',
        videoId: 'dQw4w9WgXcQ',
      },
      {
        id: '3',
        title: 'Action Sequence Training',
        tag: 'Behind The Scenes',
        thumbnail: 'https://picsum.photos/seed/vikram-yt-3/800/450',
        videoId: 'dQw4w9WgXcQ',
      },
    ];
  }

  try {
    // Fetch channel to get uploads playlist
    let channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${YOUTUBE_CONFIG.channelHandle.replace('@', '')}&key=${YOUTUBE_CONFIG.apiKey}`
    );

    if (!channelResponse.ok) {
      channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${YOUTUBE_CONFIG.channelId}&key=${YOUTUBE_CONFIG.apiKey}`
      );
    }

    if (!channelResponse.ok) throw new Error('Failed to fetch channel data');

    const channelData = await channelResponse.json();
    const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

    if (!uploadsPlaylistId) throw new Error('Uploads playlist not found');

    // Fetch latest 3 videos
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=3&key=${YOUTUBE_CONFIG.apiKey}`
    );

    if (!videosResponse.ok) throw new Error('Failed to fetch videos');
    const videosData = await videosResponse.json();

    const formattedVideos: YouTubeVideo[] = videosData.items.map((item: any, index: number) => {
      const videoId = item.snippet.resourceId.videoId;
      const title = item.snippet.title;
      
      // Determine tag based on title keywords
      let tag = 'YouTube Content';
      if (title.toLowerCase().includes('snake') || title.toLowerCase().includes('rescue')) {
        tag = 'Wildlife Rescue';
      } else if (title.toLowerCase().includes('gym') || title.toLowerCase().includes('workout') || title.toLowerCase().includes('fitness')) {
        tag = 'Fitness Training';
      } else if (title.toLowerCase().includes('action') || title.toLowerCase().includes('movie')) {
        tag = 'Behind The Scenes';
      }

      return {
        id: String(index + 1),
        title: title,
        tag: tag,
        thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || '',
        videoId: videoId,
      };
    });

    return formattedVideos;
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [
      {
        id: '1',
        title: 'How to build massive shoulders in 4 weeks',
        tag: 'Bodybuilding Tips',
        thumbnail: 'https://picsum.photos/seed/vikram-yt-1/800/450',
        videoId: 'dQw4w9WgXcQ',
      },
      {
        id: '2',
        title: 'Snake Rescue Mission',
        tag: 'Wildlife Rescue',
            thumbnail: 'https://picsum.photos/seed/vikram-yt-2/800/450',
        videoId: 'dQw4w9WgXcQ',
      },
      {
        id: '3',
        title: 'Action Sequence Training',
        tag: 'Behind The Scenes',
        thumbnail: 'https://picsum.photos/seed/vikram-yt-3/800/450',
        videoId: 'dQw4w9WgXcQ',
      },
    ];
  }
};

// ==================== HOME CONTENT ====================

const HOME_CONTENT = {
  hero: {
    name: {
      first: GLOBAL_CONFIG.personal.firstName,
      middle: GLOBAL_CONFIG.personal.middleName,
      last: GLOBAL_CONFIG.personal.lastName,
    },
    buttons: {
      primary: 'Explore Journey',
      secondary: 'Book a Session',
    },
    quote: {
      text: 'Excellence is not a destination, it is a commitment to continuous transformation',
      author: 'Karthik Shekar Acharya',
    },
    credentials: [
      { label: 'Elite Trainer', accent: '#D4AF37' },
      { label: 'Action Actor', accent: '#059669' },
    ],
    backgroundTypography: 'PERFORM',
  },
  
  taglines: [
    { text: 'National Level Bodybuilder', icon: <EmojiEventsIcon />, color: '#D4AF37' },
    { text: 'Professional Actor', icon: <MovieIcon />, color: '#059669' },
    { text: 'Elite Gym Trainer', icon: <GroupsIcon />, color: '#ef4444' },
    { text: 'Wildlife Rescuer', icon: <PetsIcon />, color: '#f59e0b' },
  ],
  
  thumbnails: [],
  
  marquee: [
    'National Bodybuilder',
    'Action Actor',
    'Elite Trainer',
    'Wildlife Rescuer',
    'National Champion',
  ],
  
  stats: {
    subtitle: 'Achievements & Impact',
    title: 'Success',
    titleHighlight: 'By Numbers',
    items: [
      { label: 'Clients Transformed', value: '2000+', icon: <GroupsIcon /> },
      { label: 'Movies & Projects', value: '12+', icon: <MovieIcon /> },
      { label: 'YouTube Views', value: '491.3K', icon: <YouTubeIcon /> },
      { label: 'WildLife Rescued', value: '10,000+', icon: <PetsIcon /> },
      { label: 'Years Experience', value: '18+', icon: <AccessTimeIcon /> },
    ],
  },
  
  journey: {
    subtitle: 'One Year At A Glance',
    title: 'My',
    titleHighlight: 'Journey',
    button: 'Explore Full Journey',
    milestones: [
      {
        year: '2014',
        title: 'Fitness Journey Begins',
        description: 'Started bodybuilding and personal training, transforming lives through fitness',
        icon: <EmojiEventsIcon />,
        color: '#ef4444',
      },
      {
        year: '2016',
        title: 'National Bodybuilding Champion',
        description: 'Won first national championship, establishing presence in competitive bodybuilding',
        icon: <EmojiEventsIcon />,
        color: '#D4AF37',
      },
      {
        year: '2018',
        title: 'Acting Debut',
        description: 'Entered the film industry with breakthrough performance in action cinema',
        icon: <MovieIcon />,
        color: '#059669',
      },
      {
        year: '2020',
        title: 'Wildlife Conservation',
        description: 'Began snake rescue operations, saving over 850+ lives while protecting wildlife',
        icon: <PetsIcon />,
        color: '#f59e0b',
      },
      {
        year: '2022',
        title: 'Elite Training Academy',
        description: 'Established premium fitness training center, mentoring 1000+ clients',
        icon: <GroupsIcon />,
        color: '#3b82f6',
      },
      {
        year: '2024',
        title: 'Multi-Domain Excellence',
        description: 'Recognized as a versatile professional excelling in fitness, acting, and conservation',
        icon: <Star />,
        color: '#D4AF37',
      },
    ],
  },
  social: {
    subtitle: 'Social Presence',
    title: 'Real-Time Impact',
    stats: {
      youtube: {
        label: 'YouTube Subscribers',
        fallback: '250K+',
        loading: 'Loading...',
        viewsLabel: 'total views',
      },
      instagram: {
        label: 'Instagram Followers',
        value: '89K+',
        subtitle: 'Daily fitness content',
      },
      videos: {
        label: 'Total Videos',
        subtitle: 'Educational content',
      },
    },
    loading: 'Loading featured videos...',
    viewAllButton: 'View All Content on YouTube',
  },
};

// Legacy exports for backward compatibility
const TAGLINES = HOME_CONTENT.taglines;
const MARQUEE_ITEMS = HOME_CONTENT.marquee;

// Gallery carousel — images + reels from all asset folders
const _BASE = import.meta.env.BASE_URL;

type CarouselItem = { src: string; category: string; type: 'image' | 'video' };

const CAROUSEL_IMAGES: CarouselItem[] = [
  { src: `${_BASE}assets/Acting/reel/reelItem.mp4`,            category: 'Reel',     type: 'video' },
  { src: `${_BASE}assets/Gym/heroImage4.webp`,                 category: 'Fitness',   type: 'image' },
  { src: `${_BASE}assets/Style/IMG-20260413-WA0063.webp`,       category: 'Style',    type: 'image' },
  { src: `${_BASE}assets/Gym/speed.webp`,                      category: 'Fitness',  type: 'image' },
  { src: `${_BASE}assets/Posters/KamalSri1.webp`,              category: 'Cinema',   type: 'image' },
  { src: `${_BASE}assets/Acting/reel/reelItem2.mp4`,           category: 'Reel',     type: 'video' },
  { src: `${_BASE}assets/Gym/endurence.webp`,                   category: 'Fitness',  type: 'image' },
  { src: `${_BASE}assets/Acting/smoke_background1.webp`,       category: 'Cinema',   type: 'image' },
  { src: `${_BASE}assets/wildlife/Hero-Background.webp`,       category: 'Wildlife',   type: 'image' },
  { src: `${_BASE}assets/Style/IMG-20260413-WA0053.webp`,       category: 'Style',    type: 'image' },
  { src: `${_BASE}assets/Acting/Prabas.webp`,                  category: 'Acting',  type: 'image' },
  { src: `${_BASE}assets/Acting/dubbing.webp`,                 category: 'Acting',   type: 'image' },
  { src: `${_BASE}assets/Acting/Anger.webp`,                    category: 'Acting',   type: 'image' },   
];

export const Home = (_props: HomeProps) => {
  const theme = useTheme();
  // Lightbox state
  const [lightboxItem, setLightboxItem] = useState<CarouselItem | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightboxItem(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // State for tagline cycling
  const [taglineIndex, setTaglineIndex] = useState(0);
  
  // State for YouTube stats
  const [youtubeStats, setYoutubeStats] = useState<ChannelStats | null>(null);
  const [isLoadingStats, setIsLoadingStats] = useState(true);
  
  // State for featured videos
  const [featuredVideos, setFeaturedVideos] = useState<YouTubeVideo[]>([]);
  const [isLoadingVideos, setIsLoadingVideos] = useState(true);

  // Fetch YouTube stats on mount
  useEffect(() => {
    const loadStats = async () => {
      setIsLoadingStats(true);
      const stats = await fetchYouTubeChannelStats();
      setYoutubeStats(stats);
      setIsLoadingStats(false);
    };
    loadStats();
  }, []);
  
  // Fetch featured videos on mount
  useEffect(() => {
    const loadVideos = async () => {
      setIsLoadingVideos(true);
      const videos = await fetchFeaturedYouTubeVideos();
      setFeaturedVideos(videos);
      setIsLoadingVideos(false);
    };
    loadVideos();
  }, []);

  // Auto-cycle taglines every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % TAGLINES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Carousel auto-scroll + drag
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const SPEED = 0.6;
    let animId: number;
    let isPaused = false;
    let isDragging = false;
    let hasDragged = false;
    let startX = 0;
    let startScrollLeft = 0;

    const tick = () => {
      if (!isPaused && !isDragging) {
        el.scrollLeft += SPEED;
      }
      animId = requestAnimationFrame(tick);
    };

    // Seamless infinite loop: when past the first copy, jump back
    const onScroll = () => {
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft -= el.scrollWidth / 2;
      }
    };

    const onMouseEnter = () => { isPaused = true; };
    const onMouseLeave = () => {
      isPaused = false;
      isDragging = false;
      el.style.cursor = 'grab';
    };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      hasDragged = false;
      startX = e.pageX;
      startScrollLeft = el.scrollLeft;
      el.style.cursor = 'grabbing';
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 5) {
        hasDragged = true;
        el.scrollLeft = startScrollLeft - dx;
      }
    };

    const onMouseUp = () => {
      isDragging = false;
      el.style.cursor = 'grab';
    };

    // Prevent card clicks firing after a drag
    const onClickCapture = (e: MouseEvent) => {
      if (hasDragged) {
        e.stopPropagation();
        hasDragged = false;
      }
    };

    const onTouchStart = () => { isPaused = true; };
    const onTouchEnd = () => { setTimeout(() => { isPaused = false; }, 1500); };

    el.addEventListener('scroll', onScroll);
    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mouseleave', onMouseLeave);
    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseup', onMouseUp);
    el.addEventListener('click', onClickCapture, true);
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd);

    animId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(animId);
      el.removeEventListener('scroll', onScroll);
      el.removeEventListener('mouseenter', onMouseEnter);
      el.removeEventListener('mouseleave', onMouseLeave);
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseup', onMouseUp);
      el.removeEventListener('click', onClickCapture, true);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  // Infinite horizontal scrollable timeline
  const timelineScrollRef = useRef<HTMLDivElement>(null);
  useInfiniteScroll(timelineScrollRef, { speed: 0.6, pauseOnHover: true });


  return (
    <HomeWrapper>
        {/* ================================================================= */}
        {/* HERO SECTION - 100svh Fullscreen */}
        {/* ================================================================= */}
       <HeroSection>
      {/* Mobile hero image */}
     
        <HeroImageMobile
          src={`${import.meta.env.BASE_URL}assets/Style/IMG_6223.webp`}
          alt="Karthik Shekar Acharya"
        />
   
     

      {/* Desktop hero image */}

        <HeroImage
          src={`${import.meta.env.BASE_URL}assets/Style/IMG_6247.webp`}
          alt="Karthik Shekar Acharya"
        />
 


      <HeroBlobs>
        <div />
        <div />
        <div />
      </HeroBlobs>

      <FadeIn direction="up" delay={0.5} duration={0.8}>
        <HeroQuoteContainer>
          <QuoteText>"{HOME_CONTENT.hero.quote.text}"</QuoteText>
          <QuoteAuthor>— {HOME_CONTENT.hero.quote.author}</QuoteAuthor>
        </HeroQuoteContainer>
      </FadeIn>
 
      <HeroMainLayout>
        <HeroLeftPanel>
          <HeroNameBlock>
            <Stagger direction="left" staggerDelay={0.2} initialDelay={0.8}>
              <HeroTitle>{HOME_CONTENT.hero.name.first}</HeroTitle>
              <HeroSubtitle>{HOME_CONTENT.hero.name.middle}</HeroSubtitle>
              <HeroThirdLine>{HOME_CONTENT.hero.name.last}</HeroThirdLine>
            </Stagger>
          </HeroNameBlock>
        </HeroLeftPanel>
      </HeroMainLayout>

    
        <CarouselContainer>
          <CarouselFade className="left" />
          <CarouselFade className="right" />

          <CarouselScrollTrack ref={carouselRef}>
            <CarouselStrip>
              {[...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES].map((item, index) => (
                <ThumbnailCard
                  key={index}
                  onClick={() => setLightboxItem(item)}
                >
                  {item.type === 'video' ? (
                    <>
                      <video
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                      <PlayBadge>
                        <PlayArrowIcon sx={{ fontSize: '1.4rem', color: '#fff' }} />
                      </PlayBadge>
                    </>
                  ) : (
                    <ThumbnailImage src={item.src} alt={item.category} />
                  )}
                  <ThumbnailOverlay />
                </ThumbnailCard>
              ))}
            </CarouselStrip>
          </CarouselScrollTrack>
        </CarouselContainer>
    
      </HeroSection>

      {/* ================================================================= */}
      {/* MARQUEE SECTION */}
      {/* ================================================================= */}
      <Box>
        <MarqueeSection>
          <MarqueeStrip>
            {MARQUEE_ITEMS.map((item, index) => (
              <MarqueeItem key={index}>
                <span style={{ position: 'relative' }}>{item}</span>
              </MarqueeItem>
            ))}
            {/* Duplicate for seamless loop */}
            {MARQUEE_ITEMS.map((item, index) => (
              <MarqueeItem key={`dup-${index}`}>
                <span style={{ position: 'relative' }}>{item}</span>
              </MarqueeItem>
            ))}
          </MarqueeStrip>
        </MarqueeSection>
      </Box>
       {/* ================================================================= */}
      {/* STATS SECTION */}
      {/* ================================================================= */}
      <StatsSection>
        <StatsBgImage
          src={`${import.meta.env.BASE_URL}assets/Style/towardsCameraB&W.webp`}
          alt=""
        />
        <StatsOverlay />
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <Box>
            <SectionHeadingContainer>
              <SectionSubtitle>{HOME_CONTENT.stats.subtitle}</SectionSubtitle>
              <SectionTitle>
                {HOME_CONTENT.stats.title} <span className="highlight" style={{ color: '#D4AF37' }}>{HOME_CONTENT.stats.titleHighlight}</span>
              </SectionTitle>
            </SectionHeadingContainer>
          </Box>

          <Box>
            <StatsGrid>
              {HOME_CONTENT.stats.items.map((stat, index) => (
                <StatCard
                  key={index}
                  label={stat.label}
                  value={stat.value}
                  icon={stat.icon}
                />
              ))}
            </StatsGrid>
          </Box>
        </Box>
      </StatsSection>
      {/* ================================================================= */}
      {/* JOURNEY MAP SECTION */}
      {/* ================================================================= */}
      <JourneySection>
        <JourneyBackground />

        {/* Mountain Climbing Journey Visualization */}
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
              position: 'absolute',
              width: '100%',
              height: '100%',
              opacity: 0.25,
            }}
            viewBox="0 0 1200 1000"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Night sky gradient */}
              <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1a3a52" />
                <stop offset="40%" stopColor="#2c5aa0" />
                <stop offset="100%" stopColor="#5a4a2a" />
              </linearGradient>

              {/* Moon glow */}
              <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fffacd" stopOpacity="1" />
                <stop offset="60%" stopColor="#ffd700" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ffa500" stopOpacity="0" />
              </radialGradient>

              {/* Animations */}
              <style>
                {`
                  @keyframes twinkle {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 1; }
                  }
                  @keyframes shootingStar {
                    0% { transform: translate(-200px, -200px); opacity: 1; }
                    100% { transform: translate(400px, 400px); opacity: 0; }
                  }
                  @keyframes moonPulse {
                    0%, 100% { r: 120; }
                    50% { r: 125; }
                  }
                  .star {
                    animation: twinkle 3s ease-in-out infinite;
                  }
                  .shooting-star {
                    animation: shootingStar 3s ease-in-out infinite;
                  }
                  .moon-circle {
                    animation: moonPulse 4s ease-in-out infinite;
                  }
                `}
              </style>
            </defs>

            {/* Night sky background */}
            <rect width="1200" height="1000" fill="url(#skyGradient)" />

            {/* Starfield */}
            <g opacity="0.8">
              <circle className="star" cx="150" cy="80" r="1.5" fill="#fff" style={{ animationDelay: '0s' }} />
              <circle className="star" cx="280" cy="120" r="1" fill="#fff" style={{ animationDelay: '0.5s' }} />
              <circle className="star" cx="420" cy="60" r="1.5" fill="#fff" style={{ animationDelay: '1s' }} />
              <circle className="star" cx="550" cy="100" r="1" fill="#fff" style={{ animationDelay: '1.5s' }} />
              <circle className="star" cx="700" cy="70" r="1.5" fill="#fff" style={{ animationDelay: '2s' }} />
              <circle className="star" cx="850" cy="110" r="1" fill="#fff" style={{ animationDelay: '0.7s' }} />
              <circle className="star" cx="950" cy="80" r="1.5" fill="#fff" style={{ animationDelay: '1.2s' }} />
              <circle className="star" cx="1050" cy="90" r="1" fill="#fff" style={{ animationDelay: '1.8s' }} />
              <circle className="star" cx="200" cy="200" r="1" fill="#fff" style={{ animationDelay: '0.3s' }} />
              <circle className="star" cx="380" cy="180" r="1.5" fill="#fff" style={{ animationDelay: '1.1s' }} />
              <circle className="star" cx="600" cy="220" r="1" fill="#fff" style={{ animationDelay: '0.9s' }} />
              <circle className="star" cx="800" cy="190" r="1.5" fill="#fff" style={{ animationDelay: '1.6s' }} />
              <circle className="star" cx="1000" cy="210" r="1" fill="#fff" style={{ animationDelay: '0.4s' }} />
              <circle className="star" cx="100" cy="150" r="1.5" fill="#fff" style={{ animationDelay: '2.1s' }} />
              <circle className="star" cx="1100" cy="140" r="1" fill="#fff" style={{ animationDelay: '0.8s' }} />
            </g>

            {/* Shooting star */}
            <g className="shooting-star" style={{ animationDelay: '0s' }}>
              <line x1="0" y1="0" x2="60" y2="60" stroke="#fff" strokeWidth="2" opacity="1" />
              <line x1="0" y1="0" x2="120" y2="120" stroke="#fff" strokeWidth="1" opacity="0.5" />
            </g>

            {/* Additional shooting star with delay */}
            <g className="shooting-star" style={{ animationDelay: '2.5s' }}>
              <line x1="0" y1="0" x2="50" y2="50" stroke="#fffacd" strokeWidth="2" opacity="0.8" />
              <line x1="0" y1="0" x2="100" y2="100" stroke="#fffacd" strokeWidth="1" opacity="0.4" />
            </g>

            {/* Large glowing moon */}
            <circle cx="850" cy="200" r="120" fill="url(#moonGlow)" opacity="0.9" />
            <circle className="moon-circle" cx="850" cy="200" r="120" fill="none" stroke="#ffd700" strokeWidth="2" opacity="0.3" />

            {/* Moon surface details */}
            <circle cx="820" cy="180" r="8" fill="#e6b800" opacity="0.4" />
            <circle cx="870" cy="210" r="6" fill="#e6b800" opacity="0.35" />
            <circle cx="840" cy="240" r="7" fill="#e6b800" opacity="0.38" />

            {/* Mountain silhouettes */}
            <polygon
              points="0,600 300,250 450,400 600,180 800,350 1000,200 1200,450 1200,1000 0,1000"
              fill="#0a1929"
              opacity="0.95"
            />

            {/* Secondary mountain layer */}
            <polygon
              points="100,700 250,400 500,550 700,380 950,480 1100,350 1200,600 1200,1000 0,1000"
              fill="#152238"
              opacity="0.7"
            />


          </svg>
        </Box>

        {/* Section heading */}
        <JourneyContainer>
          <Box>
            <SectionHeadingContainer>
              <SectionSubtitle>{HOME_CONTENT.journey.subtitle}</SectionSubtitle>
              <SectionTitle>
                <span className="highlight">{HOME_CONTENT.journey.title}</span> <span className="highlight">{HOME_CONTENT.journey.titleHighlight}</span>
              </SectionTitle>
            </SectionHeadingContainer>
          </Box>
        </JourneyContainer>

        {/* Infinite timeline with fade edges */}
        <Box sx={{ position: 'relative', width: '100%', overflow: 'visible', mt: { xs: 4, md: 6 } }}>
          <TimelineFadeLeft />
          <TimelineFadeRight />
          
          <TimelineScroll ref={timelineScrollRef}>
            <TimelineWrapper>
              <TimelineLine />
              
              {/* Render 3 copies of milestones for seamless looping */}
              {[...JOURNEY_MILESTONES, ...JOURNEY_MILESTONES, ...JOURNEY_MILESTONES].map((milestone, index) => {
                const itemColor = milestone.color;
                const IconComponent = milestone.icon;
                
                return (
                  <TimelineItem key={`${milestone.id}-${index}`}>
                    <TimelineCard>
                      <CategoryBadge categorycolor={itemColor}>
                        {milestone.category}
                      </CategoryBadge>
                      
                      <MilestoneIconWrapper iconcolor={itemColor}>
                        <IconComponent />
                      </MilestoneIconWrapper>
                      
                      <YearBadge>{milestone.year}</YearBadge>
                      <MilestoneTitle>{milestone.title}</MilestoneTitle>
                      <MilestoneDescription>{milestone.description}</MilestoneDescription>
                    </TimelineCard>
                    
                    <TimelineDot dotcolor={itemColor} />
                  </TimelineItem>
                );
              })}
            </TimelineWrapper>
          </TimelineScroll>
        </Box>


        {/* CTA Button */}
        <JourneyContainer>
          <Box sx={{ textAlign: 'center', marginTop: theme.spacing(5) }}>
            {/* <JourneyCTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePageChange(PAGES.JOURNEY)}
            >
              {HOME_CONTENT.journey.button}
              <ChevronRightIcon />
            </JourneyCTAButton> */}
          </Box>
        </JourneyContainer>
      </JourneySection>
      
      {/* ================================================================= */}
      {/* ENHANCED SOCIAL DASHBOARD SECTION */}
      {/* ================================================================= */}
      <SocialSection>
        <SocialHeader>
          <Box>
            <Box>
              <SectionHeadingContainer className="align-left" sx={{ marginBottom: 0 }}>
                <SectionSubtitle>{HOME_CONTENT.social.subtitle}</SectionSubtitle>
                <SectionTitle>{HOME_CONTENT.social.title}</SectionTitle>
              </SectionHeadingContainer>
            </Box>
          </Box>

          <Stagger staggerDelay={0.1}>
            <SocialStats>
              {/* YouTube Stats - Live Data */}
              <StatBox
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 360, damping: 22 } }}
                style={{
                  background: 'linear-gradient(140deg, rgba(6,55,130,0.10) 0%, rgba(220,0,0,0.08) 100%)',
                  borderColor: 'rgba(255, 90, 90, 0.28)',
                }}
              >
                <StatIcon>
                  <YouTubeIcon sx={{ fontSize: '2rem', color: '#FF0000' }} />
                </StatIcon>
                <StatContent>
                  {isLoadingStats ? (
                    <StatValue style={{ fontSize: '1.5rem', opacity: 0.5 }}>
                      {HOME_CONTENT.social.stats.youtube.loading}
                    </StatValue>
                  ) : (
                    <>
                      <StatValue style={{ fontSize: '2rem', fontWeight: 700 }}>
                        {youtubeStats?.subscribers || HOME_CONTENT.social.stats.youtube.fallback}
                      </StatValue>
                      <StatLabel>{HOME_CONTENT.social.stats.youtube.label}</StatLabel>
                      {youtubeStats?.totalViews && (
                        <Box sx={{ mt: 0.5, fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
                          {youtubeStats.totalViews} {HOME_CONTENT.social.stats.youtube.viewsLabel}
                        </Box>
                      )}
                    </>
                  )}
                </StatContent>
              </StatBox>

              {/* Instagram Stats */}
              <StatBox
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 360, damping: 22 } }}
                style={{
                  background: 'linear-gradient(140deg, rgba(6,55,130,0.10) 0%, rgba(200,40,110,0.08) 100%)',
                  borderColor: 'rgba(225, 80, 150, 0.28)',
                }}
              >
                <StatIcon>
                  <InstagramIcon sx={{ fontSize: '2rem', color: '#E1306C' }} />
                </StatIcon>
                <StatContent>
                  <StatValue style={{ fontSize: '2rem', fontWeight: 700 }}>
                    {HOME_CONTENT.social.stats.instagram.value}
                  </StatValue>
                  <StatLabel>{HOME_CONTENT.social.stats.instagram.label}</StatLabel>
                  <Box sx={{ mt: 0.5, fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
                    {HOME_CONTENT.social.stats.instagram.subtitle}
                  </Box>
                </StatContent>
              </StatBox>

              {/* Total Videos */}
              {youtubeStats?.totalVideos && (
                <StatBox
                  whileHover={{ y: -6, transition: { type: 'spring', stiffness: 360, damping: 22 } }}
                  style={{
                    background: 'linear-gradient(140deg, rgba(6,55,130,0.10) 0%, rgba(180,130,0,0.08) 100%)',
                    borderColor: 'rgba(212, 175, 55, 0.30)',
                  }}
                >
                  <StatIcon>
                    <MovieIcon sx={{ fontSize: '2rem', color: '#D4AF37' }} />
                  </StatIcon>
                  <StatContent>
                    <StatValue style={{ fontSize: '2rem', fontWeight: 700 }}>
                      {youtubeStats.totalVideos}
                    </StatValue>
                    <StatLabel>{HOME_CONTENT.social.stats.videos.label}</StatLabel>
                    <Box sx={{ mt: 0.5, fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
                      {HOME_CONTENT.social.stats.videos.subtitle}
                    </Box>
                  </StatContent>
                </StatBox>
            )}
          </SocialStats>
          </Stagger>
        </SocialHeader>

        {/* Featured Videos Grid */}
        {isLoadingVideos ? (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '300px',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '1rem'
          }}>
            {HOME_CONTENT.social.loading}
          </Box>
        ) : (
          <Stagger staggerDelay={0.1}>
            <VideoGrid>
              {featuredVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${video.videoId}`, '_blank')}
                  style={{ cursor: 'pointer' }}
                >
                  <VideoImage 
                    src={video.thumbnail || `https://img.youtube.com/vi/${video.videoId}/hqdefault.webp`} 
                    alt={video.title} 
                  />
                  <VideoOverlay />

                  <VideoPlayButton
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PlayIcon>
                      <PlayArrowIcon sx={{ fontSize: '1.5rem' }} />
                    </PlayIcon>
                  </VideoPlayButton>

                  <VideoContent>
                    <VideoTag>{video.tag}</VideoTag>
                    <VideoTitle>{video.title}</VideoTitle>
                  </VideoContent>
                </VideoCard>
              ))}
            </VideoGrid>
          </Stagger>
        )}

        <ViewAllButton 
          whileHover={{ scale: 1.05, x: 5 }} 
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open(YOUTUBE_CONFIG.channelUrl, '_blank')}
        >
          {HOME_CONTENT.social.viewAllButton}
          <ChevronRightIcon sx={{ fontSize: '1rem' }} />
        </ViewAllButton>
      </SocialSection>

      {/* ================================================================= */}
      {/* FULLSCREEN LIGHTBOX */}
      {/* ================================================================= */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightboxItem(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'rgba(0,0,0,0.90)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            {/* Close button */}
            <Box
              onClick={() => setLightboxItem(null)}
              sx={{
                position: 'absolute', top: 20, right: 24,
                width: 40, height: 40, borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', fontSize: '1.2rem', color: '#fff',
                '&:hover': { background: 'rgba(255,255,255,0.22)' },
              }}
            >
              ✕
            </Box>

            {/* Content — stop propagation so clicking media doesn't close */}
            <motion.div
              key="lightbox-content"
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1,    opacity: 1 }}
              exit={{ scale: 0.88,    opacity: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              onClick={e => e.stopPropagation()}
              style={{ maxWidth: '95vw', maxHeight: '95vh', display: 'flex' }}
            >
              {lightboxItem.type === 'video' ? (
                <video
                  src={lightboxItem.src}
                  controls
                  autoPlay
                  style={{
                    maxWidth: '95vw', maxHeight: '90vh',
                    borderRadius: 16, outline: 'none',
                  }}
                />
              ) : (
                <img
                  src={lightboxItem.src}
                  alt={lightboxItem.category}
                  style={{
                    maxWidth: '95vw', maxHeight: '90vh',
                    borderRadius: 16, objectFit: 'contain',
                  }}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </HomeWrapper>
  );
};
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import {
  Shield,
  PlayArrow,
  Phone,
  Warning,
  EmojiEvents,
  People,
  LocationOn,
  YouTube,
  OpenInNew,
  Public,
  Bolt,
  TrendingUp,
  Favorite,
  AccessTime,
  CheckCircle,
  KeyboardArrowDown,
  Star,
  ChatBubble,
  Share,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Pets,
  Nature,
  Info,
  VerifiedUser,
  Handshake,
  DangerousSharp,
  Done,
} from '@mui/icons-material';
import { PageType } from '../../config/constants';
import { GLOBAL_CONFIG } from '../../config/global.config';
import { FadeIn, SlideIn, Stagger, ScaleIn, Bounce } from '../../shared/components';
import {
  WildlifeWrapper,
  HeroSection,
  HeroBackground,
  HeroBackgroundImage,
  HeroBackgroundOverlay,
  HeroCinematicOverlay,
  HeroContent,
  HeroBadge,
  HeroTitle,
  HeroDescription,
  HeroButtonGroup,
  EmergencyButton,
  SecondaryButton,
  StatsGrid,
  StatCard,
  StatIconWrapper,
  StatLabel,
  StatValue,
  ScrollIndicator,
  Section,
  SectionBackground,
  SectionContainer,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  VideoPlayerContainer,
  LoadingState,
  Spinner,
  VideoFrame,
  VideoStats,
  VideoStatBadge,
  VideoGrid,
  VideoThumbnail,
  ThumbnailImage,
  ThumbnailOverlay,
  ThumbnailStats,
  ThumbnailTitle,
  VideoMetadataCard,
  VideoMetadataHeader,
  VideoMetadataTitle,
  VideoMetadataLocation,
  VideoMetadataActions,
  ShareButton,
  NavigationButton,
  ChannelButton,
  SubscribeContainer,
  YouTubeSubscribeButton,
  SubscribeButtonGroup,
  SubscribeBenefits,
  BenefitsGrid,
  BenefitCard,
  SpeciesGrid,
  SpeciesCard,
  DangerBar,
  SpeciesImage,
  SpeciesImageOverlay,
  SpeciesContent,
  SpeciesHeader,
  SpeciesInfo,
  SpeciesName,
  SpeciesScientific,
  DangerIcon,
  SpeciesFooter,
  CategoryBadge,
  RiskLabel,
  TestimonialsGrid,
  TestimonialCard,
  TestimonialRating,
  TestimonialQuote,
  TestimonialAuthor,
  AuthorAvatar,
  AuthorInfo,
  AuthorName,
  AuthorLocation,
  TestimonialRescueBadge,
  StepsGrid,
  StepCard,
  StepCardInner,
  StepIconWrapper,
  StepNumber,
  StepTitle,
  StepDescription,
  StepConnector,
  CTAContainer,
  CTAContent,
  CTAButton,
  SafetyNotice,
  SafetyHeader,
  SafetyText,
  WarningContainer,
  WarningTitle,
  WarningContent,
  WarningSection,
  WarningHighlight,
  WarningFooter,
  StickyEmergencyButton,
} from './Wildlife.style';

// ==================== TYPES & INTERFACES ====================

interface Video {
  title: string;
  location: string;
  views: string;
  likes: string;
  videoId: string;
  badge: string | null;
  thumbnail: string;
  publishedAt: string;
}

interface Species {
  name: string;
  scientific: string;
  category: 'Venomous' | 'Non-Venomous';
  danger: 'High' | 'Low';
  color: 'red' | 'green';
  image: string;
  objectPosition?: string;
}

interface Testimonial {
  name: string;
  initial: string;
  location: string;
  rating: number;
  text: string;
  rescue: string;
  avatar?: string;
}

interface Stat {
  value: number | string;
  suffix?: string;
  label: string;
  icon: typeof EmojiEvents;
  color?: string;
}

interface WildlifeProps {
  setPage?: (page: PageType) => void;
}

// ==================== CONFIGURATION ====================

const CONFIG = {
  youtube: {
    ...GLOBAL_CONFIG.social.youtube,
    maxResults: 5,
  },
  contact: GLOBAL_CONFIG.contact,
  hero: {
    name: GLOBAL_CONFIG.personal.firstName,
    surname: `${GLOBAL_CONFIG.personal.middleName} ${GLOBAL_CONFIG.personal.lastName}`,
    tagline: GLOBAL_CONFIG.titles.wildlife,
    description: '10000+ Lives Saved | 20+ Years Experience | 24/7 Emergency Response',
    badge: 'Certified Wildlife Rescuer',
  },
};

// ==================== WILDLIFE CONTENT ====================

const WILDLIFE_CONTENT = {
  hero: {
    scrollText: 'Scroll to explore',
  },
  
  featuredRescues: {
    title: 'Watch',
    titleHighlight: 'Rescue Operations',
    description: 'Live snake rescue operations from the field',
    loading: 'Loading rescue videos...',
  },
  
  expertise: {
    title: 'Species',
    titleHighlight: 'Expertise',
    description: 'Expert handling of venomous and non-venomous species',
    badges: {
          venomous: '🐍 Venomous',
      safe: '✓ Safe',
    },
    riskLabel: 'Risk',
  },
  
  testimonials: {
    title: 'Client',
    titleHighlight: 'Reviews',
    description: 'Trusted by families and organizations across India',
  },
  
  howItWorks: {
    title: 'How It',
    titleHighlight: 'Works',
    description: 'Simple 4-step process for safe rescue',
    steps: [
      {
        number: '01',
        title: 'Emergency Call',
        description: 'Reach out 24/7 with location and snake details for immediate assistance',
        icon: Phone,
        gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      },
      {
        number: '02',
        title: 'Risk Assessment',
        description: 'Expert evaluation of species and safety protocols setup',
        icon: Shield,
        gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      },
      {
        number: '03',
        title: 'Safe Rescue',
        description: 'Professional extraction ensuring zero harm to humans and wildlife',
        icon: Favorite,
        gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      },
      {
        number: '04',
        title: 'Relocation',
        description: 'Safe release to appropriate natural wildlife habitat',
        icon: Public,
        gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      },
    ],
  },
  
  cta: {
    title: {
      line1: 'Emergency?',
      line2: "We're Here 24/7",
    },
    description: "Don't panic. Professional rescue is just a call away. Rapid response, safe outcome.",
    button: 'Call',
    safetyNotice: {
      title: 'Safety Notice',
      text: 'Professional training required. Content for educational purposes only. For emergencies, contact',
    },
  },
};

// ==================== ENHANCED STATS DATA ====================

const IMPACT_STATS: Stat[] = [
  { value: 10000, suffix: '+', label: 'Successful Rescues', icon: Favorite, color: 'from-red-500 to-pink-500' },
  { value: 100, suffix: '%', label: 'Safe Release Rate', icon: CheckCircle, color: 'from-green-500 to-emerald-500' },
  { value: 20, suffix: '+', label: 'Years Experience', icon: TrendingUp, color: 'from-primary to-cyan-500' },
  { value: 24, suffix: '/7', label: 'Emergency Response', icon: AccessTime, color: 'from-orange-500 to-red-500' },
];

const FALLBACK_VIDEOS: Video[] = [
  { title: 'Live Cobra Rescue from Residential Area', location: 'Bangalore', views: '1.2M', likes: '45K', videoId: 'Thy0fpXXlSU', badge: 'Featured', thumbnail: '', publishedAt: '' },
  { title: "Russell's Viper Rescue", location: 'Mysuru', views: '850K', likes: '32K', videoId: 'oKSWfiVqqXM', badge: null, thumbnail: '', publishedAt: '' },
  { title: 'Python Relocation Operation', location: 'Bangalore', views: '1.1M', likes: '38K', videoId: '51sY3B8Rbnc', badge: null, thumbnail: '', publishedAt: '' },
  { title: 'Rat Snake from Warehouse', location: 'Goa', views: '620K', likes: '28K', videoId: 'TRSBYX3Xtso', badge: null, thumbnail: '', publishedAt: '' },
  { title: 'Snake Relocation - Safe & Secure', location: 'Bangalore', views: '750K', likes: '35K', videoId: 'bnpPF_H70SM', badge: null, thumbnail: '', publishedAt: '' },
];

const SPECIES_DATA: Species[] = [
  {
    name: 'Spectacled Cobra',
    scientific: 'Naja naja',
    category: 'Venomous',
    danger: 'High',
    color: 'red',
    image: `${import.meta.env.BASE_URL}assets/wildlife/SpecCobra.webp`
  },
  {
    name: "Russell's Viper",
    scientific: 'Daboia russelii',
    category: 'Venomous',
    danger: 'High',
    color: 'red',
    image: `${import.meta.env.BASE_URL}assets/wildlife/RussellsViper.webp`
  },
  {
    name: 'Indian Rock Python',
    scientific: 'Python molurus',
    category: 'Non-Venomous',
    danger: 'Low',
    color: 'green',
    image: `${import.meta.env.BASE_URL}assets/wildlife/RockPython.webp`
  },
  {
    name: 'Common Krait',
    scientific: 'Bungarus caeruleus',
    category: 'Venomous',
    danger: 'High',
    color: 'red',
    image: `${import.meta.env.BASE_URL}assets/wildlife/common_krait.webp`
  },
  {
    name: 'Rat Snake',
    scientific: 'Ptyas mucosa',
    category: 'Non-Venomous',
    danger: 'Low',
    color: 'green',
    image: `${import.meta.env.BASE_URL}assets/wildlife/ratSnake.webp`
  },
  {
    name: 'Indian King Cobra',
    scientific: 'Ophiophagus hannah',
    category: 'Venomous',
    danger: 'High',
    color: 'red',
    image: `${import.meta.env.BASE_URL}assets/wildlife/12_-_The_Mystical_King_Cobra_and_Coffee_Forests.webp`,
    objectPosition: 'center 15%',
  },

  // Newly Added Species

  {
    name: 'Malabar Pit Viper',
    scientific: 'Craspedocephalus malabaricus',
    category: 'Venomous',
    danger: 'High',
    color: 'red',
    image: `${import.meta.env.BASE_URL}assets/wildlife/Malabar_pit_viper.webp`,
    objectPosition: 'center'
  },

  {
    name: 'Wolf Snake',
    scientific: 'Lycodon aulicus',
    category: 'Non-Venomous',
    danger: 'Low',
    color: 'green',
    image: `${import.meta.env.BASE_URL}assets/wildlife/Wolf_snake.webp`,
    objectPosition: 'center'
  },

  {
    name: 'Checkered Keelback',
    scientific: 'Fowlea piscator',
    category: 'Non-Venomous',
    danger: 'Low',
    color: 'green',
    image: `${import.meta.env.BASE_URL}assets/wildlife/Checkered_Keelback_Xenochrophis_piscator_Schneider,_1799_Assam_by_Dr_Raju_Kasambe_DSC_0477_(2).webp`,
    objectPosition: 'center'
  },


  {
    name: 'Buff-striped Keelback',
    scientific: 'Amphiesma stolatum',
    category: 'Non-Venomous',
    danger: 'Low',
    color: 'green',
    image: `${import.meta.env.BASE_URL}assets/wildlife/Buff_striped_keelback_David_Raju_(cropped).webp`,
    objectPosition: 'center'
  },

  {
    name: 'Brown-backed Tree Snake',
    scientific: 'Dendrelaphis tristis',
    category: 'Non-Venomous',
    danger: 'Low',
    color: 'green',
    image: `${import.meta.env.BASE_URL}assets/wildlife/Bronze_back_tree_snake_at_Mysore_zoo.webp`,
    objectPosition: 'center'
  },

  {
    name: 'Green Vine Snake',
    scientific: 'Ahaetulla nasuta',
    category: 'Venomous',
    danger: 'High',
    color: 'red',
    image: `${import.meta.env.BASE_URL}assets/wildlife/green-wine-snake.webp`,
    objectPosition: 'center'
  },
];

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: 'Priya Malhotra',
    initial: 'PM',
    location: 'Whitefield, Bangalore',
    rating: 5,
    text: 'Arrived within 12 minutes and handled the situation with complete professionalism. He saved the snake and kept our family safe.',
    rescue: 'Spectacled Cobra',
  },
  {
    name: 'Rajesh Agarwal',
    initial: 'RA',
    location: 'Mysuru, Karnataka',
    rating: 5,
    text: 'Outstanding expertise and dedication to wildlife conservation. He educated us on coexistence while safely relocating the python.',
    rescue: 'Indian Rock Python',
  },
  {
    name: 'Sneha Kumar',
    initial: 'SK',
    location: 'HSR Layout, Bangalore',
    rating: 5,
    text: 'Called at 2 AM with a viper in our bedroom. His rapid response and calm demeanor prevented a potential tragedy.',
    rescue: "Russell's Viper",
  },
  {
    name: 'Vikram Nair',
    initial: 'VN',
    location: 'Koramangala, Bangalore',
    rating: 5,
    text: 'Best decision to call for professional help. He handled a highly dangerous krait with precision and zero risk to anyone.',
    rescue: 'Common Krait',
  },
  {
    name: 'Anjali Sharma',
    initial: 'AS',
    location: 'Sarjapur Road, Bangalore',
    rating: 5,
    text: 'Not only rescued the snake from our warehouse but also gave valuable tips to prevent future encounters. Truly professional!',
    rescue: 'Rat Snake',
  },
  {
    name: 'Suresh Reddy',
    initial: 'SR',
    location: 'Mangaluru, Karnataka',
    rating: 5,
    text: 'Exceptional knowledge of local snake species. He responded within the hour and relocated the cobra safely into the forest. Highly recommended.',
    rescue: 'Spectacled Cobra',
  },
];

// ==================== API SERVICES ====================

const fetchYouTubeVideos = async (): Promise<Video[]> => {
  if (!CONFIG.youtube.apiKey) {
    console.warn('YouTube API key not configured. Using fallback videos.');
    return FALLBACK_VIDEOS;
  }

  try {
    // Try fetching with channel handle first
    let channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${CONFIG.youtube.channelHandle.replace('@', '')}&key=${CONFIG.youtube.apiKey}`
    );

    // If handle fails, try with channel ID
    if (!channelResponse.ok) {
      channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CONFIG.youtube.channelId}&key=${CONFIG.youtube.apiKey}`
      );
       }

    if (!channelResponse.ok) throw new Error('Failed to fetch channel data');

    const channelData = await channelResponse.json();
    const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

    if (!uploadsPlaylistId) throw new Error('Uploads playlist not found');

    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${CONFIG.youtube.maxResults}&key=${CONFIG.youtube.apiKey}`
    );

    if (!videosResponse.ok) throw new Error('Failed to fetch videos');
    const videosData = await videosResponse.json();

    const videoIds = videosData.items.map((item: any) => item.snippet.resourceId.videoId).join(',');
    const statsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${CONFIG.youtube.apiKey}`
    );

    if (!statsResponse.ok) throw new Error('Failed to fetch video statistics');
    const statsData = await statsResponse.json();

    const formattedVideos: Video[] = videosData.items.map((item: any, index: number) => {
      const videoId = item.snippet.resourceId.videoId;
      const stats = statsData.items.find((stat: any) => stat.id === videoId);
      const viewCount = parseInt(stats?.statistics?.viewCount || '0');
      const likeCount = parseInt(stats?.statistics?.likeCount || '0');

      return {
        title: item.snippet.title,
        location: item.snippet.channelTitle,
        views: formatViews(viewCount),
        likes: formatViews(likeCount),
        videoId: videoId,
        badge: index === 0 ? 'Featured' : null,
        thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || '',
        publishedAt: item.snippet.publishedAt,
      };
    });

    return formattedVideos;
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return FALLBACK_VIDEOS;
  }
};

// ==================== UTILITY FUNCTIONS ====================

const formatViews = (count: number): string => {
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(0)}K`;
  return count.toString();
};

// ==================== ANIMATED COUNTER ====================

const AnimatedCounter = ({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return <div ref={ref}>{count}{suffix}</div>;
};

// ==================== HERO SECTION ====================

const HeroSectionComponent = () => (
  <HeroSection>
    {/* Nature/Ecosystem SVG Background */}
    <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1, overflow: 'hidden', display: 'flex' }}>
      <svg viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.1, width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="natureGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0a4d2e" />
            <stop offset="50%" stopColor="#0f6b44" />
            <stop offset="100%" stopColor="#1b4d3e" />
          </linearGradient>
          <style>{`
            @keyframes waterFlow { 0% { transform: translateY(0px); } 50% { transform: translateY(-4px); } 100% { transform: translateY(0px); } }
            @keyframes leafSway { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(1.5deg); } 75% { transform: rotate(-1.5deg); } }
            @keyframes foliageDrift { 0% { transform: translateX(0px) translateY(0px); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateX(30px) translateY(-50px); opacity: 0; } }
            @keyframes animalStep { 0%, 100% { opacity: 0.3; transform: translateX(0px); } 50% { opacity: 0.6; transform: translateX(8px); } }
            .water-wave { animation: waterFlow 3s ease-in-out infinite; }
            .leaf-sway { animation: leafSway 4s ease-in-out infinite; }
            .foliage-drift { animation: foliageDrift 5s ease-in infinite; }
            .animal-step { animation: animalStep 3s ease-in-out infinite; }
          `}</style>
        </defs>
        <rect width="1400" height="900" fill="url(#natureGradient)" />
        
        {/* Water Stream - Flowing bottom */}
        <g className="water-wave" style={{ animationDelay: '0s' }}>
          <path d="M 0,750 Q 350,700 700,750 T 1400,750 L 1400,900 L 0,900 Z" fill="#0f8f5c" opacity="0.2" />
        </g>
        <g className="water-wave" style={{ animationDelay: '0.5s' }}>
          <path d="M 0,770 Q 350,730 700,770 T 1400,770 L 1400,900 L 0,900 Z" fill="#0f8f5c" opacity="0.15" />
        </g>
        
        {/* Tree/Branch Silhouettes - Left */}
        <g opacity="0.35" className="leaf-sway" style={{ animationDelay: '0s', transformOrigin: '100px 300px' }}>
          <path d="M 100,300 L 120,200 L 115,400 L 95,500" stroke="#0a4d2e" strokeWidth="3" fill="none" />
          {Array.from({ length: 8 }).map((_, i) => (
            <circle key={i} cx={100 + Math.cos(i * 0.785) * (40 + i * 8)} cy={300 - i * 30} r={20 - i * 2} fill="#0f6b44" opacity={0.4 - i * 0.04} />
          ))}
        </g>
        
        {/* Tree/Branch Silhouettes - Right */}
        <g opacity="0.3" className="leaf-sway" style={{ animationDelay: '1s', transformOrigin: '1300px 280px' }}>
          <path d="M 1300,280 L 1280,150 L 1290,380 L 1310,500" stroke="#0a4d2e" strokeWidth="3" fill="none" />
          {Array.from({ length: 7 }).map((_, i) => (
            <circle key={i} cx={1300 - Math.cos(i * 0.785) * (35 + i * 7)} cy={280 - i * 35} r={18 - i * 2} fill="#0f6b44" opacity={0.3 - i * 0.04} />
          ))}
        </g>
        
        {/* Central Large Tree */}
        <g opacity="0.25" className="leaf-sway" style={{ animationDelay: '2s', transformOrigin: '700px 200px' }}>
          <path d="M 700,200 L 750,50 L 700,400 L 650,550" stroke="#0a4d2e" strokeWidth="4" fill="none" />
          {Array.from({ length: 10 }).map((_, i) => (
            <circle key={i} cx={700 + Math.sin(i * 0.628) * (60 + i * 10)} cy={200 - i * 35} r={25 - i * 2.2} fill="#0f6b44" opacity={0.35 - i * 0.035} />
          ))}
        </g>
        
        {/* Drifting Foliage Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={i} className="foliage-drift" style={{ animationDelay: `${i * 0.6}s` }}>
            <ellipse cx={200 + i * 140} cy={150 + i * 30} rx="4" ry="8" fill="#0f8f5c" />
          </g>
        ))}
        
        {/* Animal Footprint Trail Fading - Snake Path */}
        <g opacity="0.2" className="animal-step" style={{ animationDelay: '0s' }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <g key={i}>
              <path d={`M ${300 + i * 150},600 Q ${310 + i * 150},590 ${320 + i * 150},600`} stroke="#0f8f5c" strokeWidth="2" fill="none" />
              <circle cx={320 + i * 150} cy="600" r="3" fill="#0f8f5c" opacity="0.4" />
            </g>
          ))}
        </g>
        
        {/* Grass Blade Details */}
        {Array.from({ length: 30 }).map((_, i) => (
          <line
            key={i}
            x1={50 + (i % 15) * 90}
            y1="700"
            x2={55 + (i % 15) * 90}
            y2={680 - Math.random() * 40}
            stroke="#0f6b44"
            strokeWidth="1"
            opacity="0.25"
          />
        ))}
      </svg>
    </Box>

    {/* ── Background layers ── */}
    <HeroBackground>
      <HeroBackgroundImage
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/wildlife/Hero-Background.webp)` }}
        initial={{ scale: 1.06 }}
        animate={{ scale: [1.06, 1.0, 1.04, 1.0] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'easeInOut' }}
      />
      <HeroBackgroundOverlay />
      <HeroCinematicOverlay />
    </HeroBackground>

    {/* ── Main content ── */}
    <HeroContent>
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      >
        <HeroBadge>
          <span className="badge-dot" />
          <Shield fontSize="small" />
          <span>{CONFIG.hero.badge}</span>
        </HeroBadge>
      </motion.div>

      {/* Name + tagline */}
      <HeroTitle
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h1>
          <motion.span
            className="name"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            {CONFIG.hero.name}
          </motion.span>
          <motion.span
            className="surname"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            {CONFIG.hero.surname}
          </motion.span>
        </h1>
        <motion.p
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {CONFIG.hero.tagline}
        </motion.p>
      </HeroTitle>

      {/* Description */}
      <HeroDescription
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.55 }}
      >
        {CONFIG.hero.description}
      </HeroDescription>

      {/* CTA Buttons */}
      <HeroButtonGroup
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65 }}
      >
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <EmergencyButton href={`tel:${CONFIG.contact.phone}`}>
            <div className="shine" />
            <Phone sx={{ fontSize: 18 }} />
            <span>Emergency Hotline</span>
            <Bolt sx={{ fontSize: 16 }} />
          </EmergencyButton>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <SecondaryButton href={CONFIG.youtube.channelUrl} target="_blank" rel="noopener noreferrer">
            <YouTube sx={{ fontSize: 18 }} />
            <span>Watch Rescues</span>
          </SecondaryButton>
        </motion.div>
      </HeroButtonGroup>

   {/* =========================
    STATS SECTION
========================= */}

<StatsGrid
  initial={{ y: 40, filter: 'blur(10px)' }}
  animate={{ y: 0, filter: 'blur(0px)' }}
  transition={{ duration: 1, delay: 0.75 }}
>
  <Stagger staggerDelay={0.08} style={{ display: 'contents' }}>
    {IMPACT_STATS.map((stat, index) => {
      const Icon = stat.icon;

      const gradientColors =
        stat.color === 'from-red-500 to-pink-500'
          ? 'linear-gradient(135deg, rgba(239,68,68,0.92) 0%, rgba(236,72,153,0.92) 100%)'
          : stat.color === 'from-green-500 to-emerald-500'
          ? 'linear-gradient(135deg, rgba(16,185,129,0.92) 0%, rgba(5,150,105,0.92) 100%)'
          : stat.color === 'from-primary to-cyan-500'
          ? 'linear-gradient(135deg, rgba(212,175,55,0.92) 0%, rgba(184,148,31,0.92) 100%)'
          : 'linear-gradient(135deg, rgba(249,115,22,0.92) 0%, rgba(239,68,68,0.92) 100%)';

      return (
        <StatCard
          key={index}
          whileHover={{
            y: -8,
            transition: {
              duration: 0.25,
            },
          }}
        >
          <StatIconWrapper
            sx={{
              background: gradientColors,
            }}
          >
            <Icon />
          </StatIconWrapper>

          <StatValue>
            <AnimatedCounter
              end={typeof stat.value === 'string' ? 24 : stat.value}
              suffix={stat.suffix || ''}
            />
          </StatValue>

          <StatLabel>{stat.label}</StatLabel>
        </StatCard>
      );
    })}
  </Stagger>
</StatsGrid>
    </HeroContent>

    {/* ── Scroll indicator ── */}
    <ScrollIndicator
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.2, duration: 1 }}
    >
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}
      >
        <div className="mouse">
          <motion.div
            className="mouse-dot"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <span>{WILDLIFE_CONTENT.hero.scrollText}</span>
      </motion.div>
    </ScrollIndicator>
  </HeroSection>
);

// ==================== FEATURED RESCUES SECTION ====================

const FeaturedRescuesSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [rescueVideos, setRescueVideos] = useState<Video[]>([]);
  const [isLoadingVideos, setIsLoadingVideos] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      setIsLoadingVideos(true);
      const videos = await fetchYouTubeVideos();
      setRescueVideos(videos);
      setIsLoadingVideos(false);
    };
    loadVideos();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (rescueVideos.length === 0) return;
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentVideoIndex((prev) => (prev > 0 ? prev - 1 : rescueVideos.length - 1));
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentVideoIndex((prev) => (prev < rescueVideos.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [rescueVideos.length]);

  const handleShare = async () => {
    const video = rescueVideos[currentVideoIndex];
    const shareUrl = `https://www.youtube.com/watch?v=${video.videoId}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: video.title,
          text: `Watch this rescue: ${video.title}`,
          url: shareUrl,
        });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error('Error sharing:', err);
        }
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    }
  };

  const goToPrevious = () => {
    setCurrentVideoIndex((prev) => (prev > 0 ? prev - 1 : rescueVideos.length - 1));
  };

  const goToNext = () => {
    setCurrentVideoIndex((prev) => (prev < rescueVideos.length - 1 ? prev + 1 : 0));
  };

  return (
    <Section>
      <SectionBackground />
      <SectionContainer>
        <SectionHeader
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>
            Watch <span className="highlight">Rescue Operations</span>
          </SectionTitle>
          <SectionDescription>Live snake rescue operations from the field</SectionDescription>
        </SectionHeader>

        <VideoPlayerContainer
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {isLoadingVideos ? (
            <LoadingState>
              <div className="text-center">
                <Spinner />
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontWeight: 600 }}>{WILDLIFE_CONTENT.featuredRescues.loading}</p>
              </div>
            </LoadingState>
          ) : rescueVideos.length > 0 ? (
            <AnimatePresence mode="wait">
              <VideoFrame
                key={currentVideoIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${rescueVideos[currentVideoIndex].videoId}?rel=0&modestbranding=1`}
                  title={rescueVideos[currentVideoIndex].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
                <VideoStats>
                  <VideoStatBadge>
                    👁️ {rescueVideos[currentVideoIndex].views}
                  </VideoStatBadge>
                  <VideoStatBadge>
                    ❤️ {rescueVideos[currentVideoIndex].likes}
                  </VideoStatBadge>
                </VideoStats>

                {/* Navigation Buttons */}
                <NavigationButton
                  direction="left"
                  onClick={goToPrevious}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous video"
                >
                  <KeyboardArrowLeft />
                </NavigationButton>

                <NavigationButton
                  direction="right"
                  onClick={goToNext}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next video"
                >
                  <KeyboardArrowRight />
                </NavigationButton>
              </VideoFrame>
            </AnimatePresence>
          ) : null}
        </VideoPlayerContainer>

        {/* Video Metadata Card */}
        {!isLoadingVideos && rescueVideos.length > 0 && (
          <VideoMetadataCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <VideoMetadataHeader>
              <div>
                <VideoMetadataTitle>{rescueVideos[currentVideoIndex].title}</VideoMetadataTitle>
                <VideoMetadataLocation>
                  <LocationOn sx={{ fontSize: 16 }} />
                  {rescueVideos[currentVideoIndex].location}
                </VideoMetadataLocation>
              </div>
              <VideoMetadataActions>
                <ShareButton
                  onClick={handleShare}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Share video"
                >
                  <Share sx={{ fontSize: 20 }} />
                  <span>Share</span>
                </ShareButton>
              </VideoMetadataActions>
            </VideoMetadataHeader>
          </VideoMetadataCard>
        )}

        {!isLoadingVideos && rescueVideos.length > 0 && (
          <Stagger staggerDelay={0.03}>
            <VideoGrid>
                    {rescueVideos.slice(0, 5).map((video, i) => (
                <VideoThumbnail
                  key={i}
                  onClick={() => setCurrentVideoIndex(i)}
                  whileHover={{ scale: 1.05, y: -5 }}
                  active={currentVideoIndex === i}
                aria-label={`Play ${video.title}`}
                title={video.title}
              >
                <ThumbnailImage>
                  <img
                    src={video.thumbnail || `https://img.youtube.com/vi/${video.videoId}/hqdefault.webp`}
                    alt={video.title}
                    loading="lazy"
                  />
                </ThumbnailImage>

                <ThumbnailOverlay>
                  <PlayArrow sx={{ color: 'white', fontSize: 28 }} />
                </ThumbnailOverlay>

                <ThumbnailTitle>
                  <span>{video.title}</span>
                </ThumbnailTitle>

                <ThumbnailStats>
                  <p>👁️ {video.views} | ❤️ {video.likes}</p>
                </ThumbnailStats>
              </VideoThumbnail>
            ))}
          </VideoGrid>
          </Stagger>
        )}

        <FadeIn delay={0.3}>
          <div style={{ textAlign: 'center' }}>
            <ChannelButton
              href={CONFIG.youtube.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTube sx={{ fontSize: 28 }} />
              <span>View All on YouTube</span>
              <OpenInNew fontSize="small" />
            </ChannelButton>
          </div>
        </FadeIn>
      </SectionContainer>
    </Section>
  );
};



// ==================== EXPERTISE SECTION ====================

const ExpertiseSection = () => (
  <Section>
    <SectionContainer>
      <FadeIn>
        <SectionHeader>
          <SectionTitle>
            {WILDLIFE_CONTENT.expertise.title} <span className="highlight">{WILDLIFE_CONTENT.expertise.titleHighlight}</span>
          </SectionTitle>
          <SectionDescription>{WILDLIFE_CONTENT.expertise.description}</SectionDescription>
        </SectionHeader>
      </FadeIn>

      <Stagger staggerDelay={0.03}>
        <SpeciesGrid>
          {SPECIES_DATA.map((species, index) => (
            <SpeciesCard key={index}>
            <SpeciesImage>
              <img
                src={species.image}
                alt={species.name}
                loading="lazy"
                style={species.objectPosition ? { objectPosition: species.objectPosition } : undefined}
              />
              <SpeciesImageOverlay />
            </SpeciesImage>

            <SpeciesContent>
              <SpeciesHeader>
                <SpeciesName>{species.name}</SpeciesName>
                <SpeciesScientific>{species.scientific}</SpeciesScientific>
              </SpeciesHeader>

              <SpeciesFooter>
                <CategoryBadge category={species.category}>
                  {species.category === 'Venomous' ? (
                    <>
                      <Pets sx={{ fontSize: '0.875rem' }} />
                      <span>Venomous</span>
                    </>
                  ) : (
                    <>
                      <Done sx={{ fontSize: '0.875rem' }} />
                      <span>Safe</span>
                    </>
                  )}
                </CategoryBadge>
                <RiskLabel danger={species.danger}>{species.danger}</RiskLabel>
              </SpeciesFooter>
            </SpeciesContent>
          </SpeciesCard>
        ))}
      </SpeciesGrid>
      </Stagger>
    </SectionContainer>
  </Section>
);

// ==================== TESTIMONIALS ====================

const TestimonialsSection = () => {
  return (
    <Section>
      <SectionBackground />
      <SectionContainer>
        <FadeIn>
          <SectionHeader>
            <SectionTitle>
              {WILDLIFE_CONTENT.testimonials.title} <span className="highlight">{WILDLIFE_CONTENT.testimonials.titleHighlight}</span>
            </SectionTitle>
            <SectionDescription>{WILDLIFE_CONTENT.testimonials.description}</SectionDescription>
          </SectionHeader>
        </FadeIn>

        <Stagger staggerDelay={0.05}>
          <TestimonialsGrid>
            {TESTIMONIALS_DATA.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ duration: 0.3 }}
              >
              <TestimonialRating>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} sx={{ fontSize: 14, color: '#facc15', fill: '#facc15' }} />
                ))}
              </TestimonialRating>

              <TestimonialQuote>"{testimonial.text}"</TestimonialQuote>

              <TestimonialAuthor>
                <AuthorAvatar>
                  <span>{testimonial.initial}</span>
                </AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>{testimonial.name}</AuthorName>
                  <AuthorLocation>
                    <LocationOn sx={{ fontSize: 10 }} />
                    {testimonial.location}
                  </AuthorLocation>
                </AuthorInfo>
              </TestimonialAuthor>

              <TestimonialRescueBadge>
                <div className="badge">
                  <CheckCircle sx={{ fontSize: 12, color: '#10b981' }} />
                  <span>{testimonial.rescue}</span>
                </div>
              </TestimonialRescueBadge>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
        </Stagger>
      </SectionContainer>
    </Section>
  );
};

// ==================== HOW IT WORKS ====================

// const HowItWorksSection = () => {
//   return (
//     <Section sx={{ background: 'linear-gradient(to bottom, #0a1d2c, rgba(59, 130, 246, 0.05), #0a1d2c)' }}>
//       <SectionBackground />
//       <SectionContainer>
//         <FadeIn>
//           <SectionHeader>
//             <SectionTitle>
//               {WILDLIFE_CONTENT.howItWorks.title} <span className="highlight">{WILDLIFE_CONTENT.howItWorks.titleHighlight}</span>
//             </SectionTitle>
//             <SectionDescription>{WILDLIFE_CONTENT.howItWorks.description}</SectionDescription>
//           </SectionHeader>
//         </FadeIn>

//         <Stagger staggerDelay={0.1}>
//           <StepsGrid>
//             {WILDLIFE_CONTENT.howItWorks.steps.map((step, index) => {
//               const Icon = step.icon;
//               return (
//                 <StepCard key={index}>
//                 <StepCardInner>
//                   <StepNumber>{step.number}</StepNumber>

//                   <StepIconWrapper
//                     sx={{
//                       background: step.gradient,
//                     }}
//                   >
//                     <Icon />
//                   </StepIconWrapper>

//                   <StepTitle>{step.title}</StepTitle>
//                   <StepDescription>{step.description}</StepDescription>
//                 </StepCardInner>

//                 {index < WILDLIFE_CONTENT.howItWorks.steps.length - 1 && <StepConnector />}
//               </StepCard>
//                 );
//           })}
//         </StepsGrid>
//         </Stagger>
//       </SectionContainer>
//     </Section>
//   );
// };
// ==================== WARNING MESSAGE SECTION ====================

const WarningMessageSection = () => (
  <Section>
    <SectionBackground sx={{ background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.05), transparent, rgba(245, 158, 11, 0.05))' }} />
    <WarningContainer
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <WarningTitle
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Warning sx={{ color: '#fbbf24' }} />
        Warning & Safety Notice
        <Warning sx={{ color: '#fbbf24' }} />
      </WarningTitle>

      <WarningContent
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <WarningSection>
          <Pets sx={{ color: '#10b981', fontSize: '1.5rem' }} />
          <p><strong>Save Animals</strong></p>
          <Nature sx={{ color: '#10b981', fontSize: '1.5rem' }} />
          <p><strong>Save Environment</strong></p>
        </WarningSection>

        <WarningSection>
          <Info sx={{ color: '#3b82f6' }} />
          <p>
            <strong>Snake rescue operations</strong> are performed only by trained professionals with years of experience and expertise.
          </p>
        </WarningSection>

        <WarningSection>
          <VerifiedUser sx={{ color: '#8b5cf6' }} />
          <p>
            This video is shared strictly for <WarningHighlight>educational and awareness purposes</WarningHighlight>. It does not promote stunts, risky behavior, or animal handling for entertainment.
          </p>
        </WarningSection>

        <WarningSection>
          <Warning sx={{ color: '#ef4444' }} />
          <p>
            Please <strong>do not attempt</strong> to handle or rescue any wild animal by taking inspiration from this video. <strong>Improper handling can be extremely dangerous</strong> and may result in serious injury or loss of life.
          </p>
        </WarningSection>

        <WarningSection>
          <Handshake sx={{ color: '#10b981' }} />
          <p>
            Always contact <WarningHighlight>authorized wildlife rescue professionals</WarningHighlight> for assistance.
          </p>
        </WarningSection>

        <WarningFooter>
          <CheckCircle sx={{ color: '#10b981', fontSize: '1.25rem' }} />
          <span>Stay safe. Respect wildlife.</span>
        </WarningFooter>
      </WarningContent>
    </WarningContainer>
  </Section>
);

// ==================== CTA SECTION ====================

const CTASection = () => WarningMessageSection();

// ==================== MAIN COMPONENT ====================

export const Wildlife = ({ setPage }: WildlifeProps) => {
  return (
    <WildlifeWrapper>
      {/* Sticky Emergency Button */}
      <StickyEmergencyButton
        href={`tel:${CONFIG.contact.phone}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Emergency Snake Rescue - Call Now"
      >
        <Phone sx={{ fontSize: 28 }} />
        <span className="indicator-ping" />
        <span className="indicator" />
      </StickyEmergencyButton>

      {/* Sections */}
      <HeroSectionComponent />
      <FeaturedRescuesSection />
      <ExpertiseSection />
      <TestimonialsSection />
      {/* <HowItWorksSection /> */}
      <CTASection />
    </WildlifeWrapper>
  );
};

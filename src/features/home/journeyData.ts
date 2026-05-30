import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MovieIcon from '@mui/icons-material/Movie';
import PetsIcon from '@mui/icons-material/Pets';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import StarIcon from '@mui/icons-material/Star';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

// ============================================================================
// JOURNEY TIMELINE — DATA MODEL
// ============================================================================

export type JourneyCategory = 'wildlife' | 'fitness' | 'acting' | 'multi';

export interface JourneyMilestone {
  id: number;
  year: string;
  title: string;
  description: string;
  category: JourneyCategory;
  icon: React.ComponentType<any>;
  color: string;
}

// Category accent colours — consistent with the site palette
export const CATEGORY_COLORS: Record<JourneyCategory, string> = {
  wildlife: '#f59e0b',
  fitness: '#3b82f6',
  acting: '#059669',
  multi: '#D4AF37',
};

// ============================================================================
// MILESTONES — sourced exclusively from the provided PDFs
// (Karthik journey ep1.pdf  &  Karthik_ep2.pdf)
// ============================================================================

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: 1,
    year: 'Childhood',
    title: 'Wildlife Passion Begins',
    description:
      'Grew up watching National Geographic & Animal Planet. On the very first day of school, spotted a snake on the way and brought it home — sparking a lifelong passion for wildlife rescue.',
    category: 'wildlife',
    icon: PetsIcon,
    color: CATEGORY_COLORS.wildlife,
  },
  {
    id: 2,
    year: '~2007',
    title: 'Bodybuilding Inspiration',
    description:
      "Inspired by father's exercise routine and international bodybuilder Karibasappa in the newspaper. Joined the gym with brother \"Seena anna\" and began learning the fundamentals of strength training.",
    category: 'fitness',
    icon: FitnessCenterIcon,
    color: CATEGORY_COLORS.fitness,
  },
  {
    id: 3,
    year: '2009',
    title: 'Professional Bodybuilding Begins',
    description:
      'Took bodybuilding professionally and entered the competitive scene. Started with Mr. Bangalore — a local competition — and completed Mr. Mahadevapura, winning the title twice.',
    category: 'fitness',
    icon: EmojiEventsIcon,
    color: CATEGORY_COLORS.fitness,
  },
  {
    id: 4,
    year: '2010',
    title: 'Short Film Debut — "Kuchu Koo"',
    description:
      'Made a short film called "Kuchu Koo" in 2010 — the very first step into the world of cinema and storytelling. This opened the door to future movie opportunities.',
    category: 'acting',
    icon: TheaterComedyIcon,
    color: CATEGORY_COLORS.acting,
  },
  {
    id: 5,
    year: '~2012',
    title: 'Mr. Karnataka Champion',
    description:
      "Dominated the state-level circuit: Mr. Karnataka Men's Physique overall, Silver twice, and Gold twice. Selected for the national-level competition.",
    category: 'fitness',
    icon: EmojiEventsIcon,
    color: CATEGORY_COLORS.fitness,
  },
  {
    id: 6,
    year: '2014',
    title: 'Movie Debut — "Ambarisha" with D Boss',
    description:
      'Made his movie debut in "Ambarisha" alongside legendary actor Mr. Darshan (D Boss), playing a police character. Directors at bodybuilding competitions noticed him and offered the role.',
    category: 'acting',
    icon: MovieIcon,
    color: CATEGORY_COLORS.acting,
  },
  {
    id: 7,
    year: '~2014',
    title: 'Mr. India Champion',
    description:
      'Reached the pinnacle of national bodybuilding — won Mr. India Bronze once and Mr. India Gold once. Selected as an international competitor, cementing elite status.',
    category: 'fitness',
    icon: EmojiEventsIcon,
    color: CATEGORY_COLORS.fitness,
  },
  {
    id: 8,
    year: '2015',
    title: 'Own Gym Established',
    description:
      'Opened a professional gym as owner and proprietor. Running successfully for over 10 years alongside personal training and acting career.',
    category: 'fitness',
    icon: StorefrontIcon,
    color: CATEGORY_COLORS.fitness,
  },
  {
    id: 9,
    year: '2015+',
    title: 'Wildlife Rescue Professional',
    description:
      'Completed a professional course in Bannerghatta forest. Member of Wildlife Quick Animal Rescue Team and WRRC for 15–20 years. Rescued thousands of snakes around Anekal area.',
    category: 'wildlife',
    icon: VolunteerActivismIcon,
    color: CATEGORY_COLORS.wildlife,
  },
  {
    id: 10,
    year: 'Present',
    title: 'Multi-Domain Excellence',
    description:
      'Powerlifting comeback with Mr. India Gold in bench press and deadlift. Continues excelling across fitness, cinema, gym ownership, and wildlife conservation simultaneously.',
    category: 'multi',
    icon: StarIcon,
    color: CATEGORY_COLORS.multi,
  },
];

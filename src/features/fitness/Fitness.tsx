import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faMapPin,
  faClock,
  faUsers,
  faStar,
  faCheck,
  faDollarSign,
  faBolt,
  faChartLine,
  faDumbbell,
  faAward,
  faAppleAlt,
} from '@fortawesome/free-solid-svg-icons';

import { PageType, PAGES } from '../../config/constants';
import { GLOBAL_CONFIG } from '../../config/global.config';
import { FadeIn, SlideIn, Stagger, ScaleIn, BlurIn, Bounce } from '../../shared/components';
import { TransformationForm } from './components/TransformationForm/TransformationForm';
import { PlanSubscriptionForm } from './components/PlanSubscriptionForm';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import {
  FitnessWrapper,
  HeroSection,
  HeroBackgroundImage,
  HeroOverlay,
  HeroContent,
  HeroTextContainer,
  StatsBadge,
  StatsAvatarGroup,
  StatsAvatar,
  StatsBadgeText,
  HeroDescription,
  HeroTitle,
  HeroButtonGroup,
  HeroPrimaryButton,
  HeroSecondaryButton,
  Section,
  SectionContainer,
  SectionHeader,
  SectionLabel,
  SectionTitle,
  SectionDescription,
  ExperienceGrid,
  ExperienceCard,
  ExperienceImageContainer,
  ExperienceImageOverlay,
  ExperienceMetricBadge,
  MetricValue,
  MetricLabel,
  ExperienceCardContent,
  ExperienceCardTitle,
  ExperienceCardDescription,
  ExperienceButton,
  MethodsGrid,
  MethodCard,
  MethodImageContainer,
  MethodImageOverlay,
  MethodBadge,
  MethodCardContent,
  MethodCardTitle,
  MethodCardDescription,
  FeaturesCardContainer,
  FeaturesInnerGrid,
  FeatureItemsGrid,
  FeatureItem,
  FeatureIconWrapper,
  FeatureLabel,
  FeatureImageContainer,
  FeatureImage,
  FeatureImageOverlay,
  PricingGrid,
  PricingCard,
  PopularBadge,
  OfferBadge,
  OriginalPrice,
  SavingsBadge,
  PricingDuration,
  PricingPrice,
  PricingPerMonth,
  PricingFeaturesList,
  PricingFeatureItem,
  PricingButton,
  TestimonialsGrid,
  TestimonialCard,
  TestimonialImages,
  TestimonialImagesGrid,
  TestimonialImageWrapper,
  TestimonialBadge,
  TestimonialContent,
  TestimonialRating,
  TestimonialResult,
  TestimonialName,
  TestimonialText,
  TestimonialComment,
  SupplementsSection,
  SupplementsContainer,
  SupplementsBrandStripWrapper,
  SupplementsBrandStrip,
  BrandPill,
  SupplementBenefitsGrid,
  SupplementBenefitCard,
  SupplementBenefitIcon,
  SupplementBenefitTitle,
  SupplementBenefitText,
  SupplementCategoriesGrid,
  SupplementCategoryCard,
  SupplementCategoryEmoji,
  SupplementCategoryName,
  SupplementCategoryDesc,
  SupplementCTABox,
  SupplementOrderButton,
  FacilityGrid,
  FacilityImage,
  FacilityInfo,
  FacilityInfoList,
  FacilityInfoItem,
  FacilityIcon,
  FacilityInfoContent,
  FacilityInfoLabel,
  FacilityInfoText,
  FitnessHeroImageMobile,
  FacilityButton,
  CTASection,
  CTABlob,
  CTAContent,
  CTAButtonGroup,
  CTAPrimaryButton,
  CTASecondaryButton,
} from './Fitness.style';

interface FitnessProps {
  setPage?: (page: PageType) => void;
}

// ==================== FITNESS CONTENT ====================

const FITNESS_CONTENT = {
  hero: {
    statsBadge: 'Clients achieved their fitness goals',
    description: 'Personalized training programs designed to boost your strength, endurance, and speed.',
    title: {
      line1: 'Redefine',
      line2: 'Your',
      line3: 'Limits.',
    },
    buttons: {
      primary: 'Start Training',
      secondary: 'See Results',
    },
  },

  experience: {
    label: 'Experience',
    title: 'Fitness Like',
    titleHighlight: 'Never Before',
    description: 'Transform The Way You Train With Innovative Workouts And Expert Guidance',
    readMore: 'Read More',
    items: [
      {
        title: 'Endurance Evolution',
        description: 'Boost Your Stamina And Resilience With Tailored Cardio And Endurance Workouts Designed To Keep You Moving Stronger For Longer',
        metric: '95',
        metricLabel: 'BPM',
        image: `${import.meta.env.BASE_URL}assets/Gym/endurence.webp`,
      },
      {
        title: 'Speed Surge',
        description: 'Boost Your Agility And Explosiveness With High-Intensity Sprint And Movement Drills. Speed Surge Is Designed To Take Your Performance To The Next Level',
        metric: '1024',
        metricLabel: 'STEPS',
        image: `${import.meta.env.BASE_URL}assets/Gym/speed2.webp`,
      },
    ],
  },

  methods: {
    label: 'Methods',
    title: 'Train Smarter',
    titleHighlight: 'Unleash Your Potential',
    items: [
      {
        title: 'Personal Training',
        desc: 'One-on-one coaching with expert trainers',
        image: '',
        videoSrc: `${import.meta.env.BASE_URL}assets/Gym/Videos/personal_training.mp4`,
      },
      {
        title: 'Competition Preparation',
        desc: 'Expert guidance for bodybuilding, fitness, and athletic competitions. Tailored plans for peak performance and stage readiness.',
        image: '',
        videoSrc: `${import.meta.env.BASE_URL}assets/Gym/Videos/Compitation_prep_video.mp4`,
      },
    ],
  },

  whyUs: {
    label: 'Why Us',
    title: 'Inspired to',
    titleHighlight: 'Inspire Your Best Self',
    description: "We're Your Partner in Achieving A Healthier, Stronger, And More Confident You.",
    features: [
      { label: 'State-of-the-art equipment', icon: faDumbbell },
      { label: 'Expert certified trainers', icon: faAward },
      { label: '24/7 facility access', icon: faClock },
      { label: 'Nutrition consultation', icon: faAppleAlt },
      { label: 'Progress tracking system', icon: faChartLine },
      { label: 'Community support', icon: faUsers },
    ],
  },

pricing: {
  label: 'Plans',
  title: 'Membership',
  titleHighlight: 'Plans',
  description: 'Choose the perfect plan for your fitness journey',
  popularBadge: 'MOST POPULAR',
  button: 'Choose Plan',
  sections: [
    {
      title: 'Monthly Gym',
      plans: [
        {
          duration: '1 Month',
          price: '₹2,000',
          perMonth: '₹2,000',
          highlighted: false,
          features: [
            'Full gym access',
            'Basic equipment',
            'Open hours',
            '5 free classes',
          ],
        },
        {
          duration: '3 Months',
          price: '₹3,800',
          perMonth: '₹1,267',
          originalPrice: '₹4,800',
          highlighted: false,
          features: [
            'Full gym access',
            'All equipment',
            'Extended hours',
            'Unlimited classes',
          ],
        },
        {
          duration: '6 Months',
          price: '₹4,800',
          perMonth: '₹800',
          originalPrice: '₹6,000',
          savingsLabel: 'Save ₹1,200',
          highlighted: true,
          features: [
            'Full gym access',
            'Premium equipment',
            '24/7 access',
            'Unlimited classes',
            'Nutrition guide',
          ],
        },
        {
          duration: '12 Months',
          price: '₹7,999',
          perMonth: '₹667',
          originalPrice: '₹8,999',
          savingsLabel: 'Save ₹1,000',
          highlighted: false,
          features: [
            'Everything included',
            'Priority booking',
            'Guest passes',
            'Exclusive community',
          ],
        },
      ],
    },
    {
      title: 'Personal Training',
      plans: [
        {
          duration: '12 Sessions — Single',
          price: '₹15,000',
          originalPrice: '₹18,000',
          savingsLabel: 'Save ₹3,000',
          highlighted: false,
          features: [
            '12 one-on-one sessions',
            'Custom workout plan',
            'Progress tracking',
            'Nutrition guidance',
          ],
        },
        {
          duration: '12 Sessions — Couples',
          price: '₹25,000',
          originalPrice: '₹30,000',
          savingsLabel: 'Save ₹5,000',
          highlighted: true,
          features: [
            '12 sessions for 2',
            'Partner workout plans',
            'Progress tracking',
            'Nutrition guidance',
          ],
        },
      ],
    },
    {
      title: 'Personal Training in Power House Gym',
      plans: [
        {
          duration: '12 Sessions',
          price: '₹10,000',
          originalPrice: '₹15,000',
          savingsLabel: 'Save ₹5,000',
          highlighted: true,
          features: [
            'Gym access included',
            'Dedicated trainer',
            'Custom workout plan',
            'Nutrition consultation',
            'Progress tracking',
          ],
        },
      ],
    },
  ],
},

  facility: {
    label: 'Facility',
    title: GLOBAL_CONFIG.business.gym.name,
    titleHighlight: 'Your Space to Thrive',
    location: {
      label: 'Location',
      text: `${GLOBAL_CONFIG.business.gym.location} - Easily accessible`,
      full: GLOBAL_CONFIG.business.gym.fullAddress,
    },
    hours: {
      label: 'Hours',
      text: GLOBAL_CONFIG.business.gym.hours.full,
    },
    facilities: {
      label: 'Facilities',
      text: 'Heavy Weights, Cardio, Classes, Steam Room',
    },
    button: 'Get Directions',
  },

  supplements: {
    label: 'Supplements',
    title: 'Premium Supplements',
    titleHighlight: 'Best Price Guaranteed',
    description: 'We deal in authentic supplements from all major national & international brands — sourced directly from authorized distributors so you always get the real deal at the lowest price.',
    brands: [
      'Optimum Nutrition', 'MuscleBlaze', 'MyProtein', 'GNC', 'Dymatize',
      'MuscleTech', 'BSN', 'Scitron', 'Bigmuscles', 'Avvatar', 'Nakpro', 'HealthKart',
      'Isopure', 'Universal Nutrition', 'BPI Sports', 'ProSupps',
    ],
    benefits: [
      { icon: faAward, title: '100% Authentic', text: 'Verified genuine products from authorized distributors only' },
      { icon: faDollarSign, title: 'Lowest Price', text: 'Beat any competitor price — guaranteed best deal' },
      { icon: faDumbbell, title: 'All Top Brands', text: 'Wide range across every leading national & international brand' },
      { icon: faUsers, title: 'Expert Advice', text: 'Certified trainers guide you to the right supplement stack' },
    ],
    categories: [
      {
        emoji: '💪', name: 'Whey Protein', desc: 'Fast-absorbing muscle builder', products: [
          { name: 'ON Gold Standard Whey', desc: 'The #1 selling whey protein globally. 24g protein per serving — ideal for lean muscle.', image: 'https://www.optimumnutrition.co.in/cdn/shop/files/748927065725_1_e4cd4d22-bde2-4538-9b43-c261ab1b24c8.jpg?v=1773663774&width=200' },
          { name: 'MuscleBlaze Biozyme Whey', desc: 'BioZyme enzyme blend for superior absorption. 25g protein per serving.', image: 'https://img8.hkrtcdn.com/cdn-cgi/image/width=200,height=200,dpr=1/39078/prd_3907787-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_o.jpg' },
          { name: 'MyProtein Impact Whey', desc: 'Budget-friendly with 21g protein per serving and 50+ flavours.', image: 'https://static.thcdn.com/productimg/original/10530943-2175262135686325.jpg' },
          { name: 'Dymatize ISO100', desc: 'Hydrolyzed whey isolate — 25g protein, 0g sugar, ultra-fast digestion for post-workout recovery.', image: 'https://m.media-amazon.com/images/I/81dCh2H3dZL._SL1500_.jpg' },
          { name: 'Scitron Advance Whey', desc: '24g protein per serving with digestive enzymes. Made for Indian athletes and climate.', image: 'https://scitron.com/cdn/shop/files/Scitron_Listing_18_1800x1800.jpg?v=1763521503' },
          { name: 'GNC Pro Performance Whey', desc: 'Clean whey blend with 24g protein and a complete amino acid profile for everyday training.', image: 'https://www.guardian.in/cdn/shop/files/4lbs_chocolatge_fudge_4_b6abbe11-d9f7-4ebd-a072-e16bee675582.jpg?v=1775562665&width=800' },
        ]
      },
      {
        emoji: '🏋️', name: 'Mass Gainer', desc: 'High-calorie bulk-up formula', products: [
          { name: 'ON Serious Mass', desc: '1,250 calories and 50g protein per serving — perfect for serious bulking.', image: 'https://www.optimumnutrition.co.in/cdn/shop/files/1110152_1_43efaf6f-3293-4107-ba6b-f12d32faae8d.webp?v=1752258610&width=200' },
          { name: 'MuscleBlaze Super Mass Gainer', desc: '178g carbs and 31g protein with complex carb blend for sustained size gains.', image: 'https://img6.hkrtcdn.com/cdn-cgi/image/width=200,height=200,dpr=1/37800/prd_3779965-MuscleBlaze-Super-Gainer-XXL-Weight-Gainer-6.6-lb-Chocolate_o.jpg' },
          { name: 'Dymatize Super Mass Gainer', desc: '1,280 calories per serving with added BCAAs and creatine for hardgainers.', image: 'https://dymatize.imgix.net/production/products/SUPER_MASS_GAINER_GOURMET_VANILLA_Product_Thumbnail_Product_Detail_Page_540x678.jpg?w=200&h=200&fit=crop&auto=format' },
          { name: 'MuscleTech Mass Tech', desc: '2,000+ calories and 63g protein with a multi-stage carb formula for maximum mass.', image: 'https://www.muscletech.in/wp-content/uploads/2022/07/Extreme.webp' },
          { name: 'Scitron Mass Gainer', desc: '81g carbs and 30g protein per serving with creatine for rapid size and strength.', image: 'https://scitron.com/cdn/shop/files/HyperMassGainer_1_800x.png?v=1755083384' },
          { name: 'Bigmuscles Real Mass', desc: 'High-protein mass gainer with digestive enzymes and low fat — trusted Indian brand.', image: 'https://www.bigmusclesnutrition.com/cdn/shop/files/Front_eae82c74-689a-42b6-9182-ef1e15517f6f.jpg?v=1753096698' },
        ]
      },
      {
        emoji: '⚡', name: 'Pre-Workout', desc: 'Energy, focus & pump booster', products: [
          { name: 'C4 Original (Cellucor)', desc: "150mg caffeine, beta-alanine, and creatine nitrate for energy and pumps.", image: 'https://cellucor.com/cdn/shop/files/C4AN_1002_Brand_C4YellowLabel_Transition_C4Original_CoreFlavors_BasicPDPs-OG-IBR-Hero-Grey.png?v=1773235672' },
          { name: 'ON Gold Standard Pre-Workout', desc: '175mg caffeine with creatine and beta-alanine for clean focused energy.', image: 'https://www.optimumnutrition.co.in/cdn/shop/files/748927068900_1_6a4cfdd7-dd35-42eb-a43f-41438aef3738.jpg?v=1772714230&width=200' },
          { name: 'MuscleBlaze Pre Workout 300', desc: '300mg caffeine plus citrulline and beta-alanine for extreme endurance.', image: 'https://img8.hkrtcdn.com/cdn-cgi/image/width=200,height=200,dpr=1/30066/prd_3006517-MuscleBlaze-PRE-Workout-300-0.55-lb-Fruit-Punch_o.jpg' },
          { name: 'Ghost Legend V3', desc: 'Fully transparent label with 250mg natural caffeine, L-citrulline, and nootropics for next-level focus.', image: 'https://supplemart.in/cdn/shop/files/pixelcut-export-2025-06-03T205004.783.png?v=1748964660' },
          { name: 'Scitron Nitro Pre-Workout', desc: '200mg caffeine and 3g beta-alanine for explosive training sessions.', image: 'https://scitron.com/cdn/shop/files/Lemon_Lime150_R4_1080x1080.jpg?v=1753183396' },
          { name: 'MyProtein THE Pre-Workout', desc: 'Science-backed formula with citrulline malate, beta-alanine, and caffeine for peak output.', image: 'https://www.myprotein.co.in/images?url=https://static.thcdn.com/productimg/original/14610671-2185205094928766.jpg&format=webp&auto=avif&crop=1100,1200,smart' },
        ]
      },
      {
        emoji: '🔬', name: 'Creatine', desc: 'Strength & power enhancer', products: [
          { name: 'ON Micronized Creatine', desc: 'Pure creatine monohydrate — 5g per serving, unflavored, proven for strength.', image: 'https://www.optimumnutrition.co.in/cdn/shop/files/748927066623_1.jpg?v=1773302233&width=200' },
          { name: 'MuscleTech Platinum Creatine', desc: 'Ultra-pure creatine monohydrate, lab-tested for potency with no fillers.', image: 'https://www.muscletech.com/cdn/shop/files/platinum-creatine-grape-freeze.jpg?v=1766074513&width=200' },
          { name: 'MuscleBlaze Creatine', desc: 'Micronized creatine with absorption complex for faster uptake and results.', image: 'https://img8.hkrtcdn.com/cdn-cgi/image/width=200,height=200,dpr=1/35711/prd_3571057-MuscleBlaze-Creatine-Monohydrate-CreAMP-0.22-lb-Unflavoured_o.jpg' },
          { name: 'Dymatize Creatine', desc: 'Micronized creatine monohydrate with Creapure® certification for maximum purity.', image: 'https://distausa.com/cdn/shop/files/712YgTvcVhL_0245863d-0ef4-430f-9aaa-80b4e3e21934_1024x.jpg?v=1773662906' },
          { name: 'Scitron Creatine Mono', desc: '100% Creapure creatine monohydrate — zero additives, zero fillers.', image: 'https://scitron.com/cdn/shop/files/r3_53e90611-14f0-4f10-b6d1-91ee0115a3cc_1800x1800.jpg?v=1757592794' },
          { name: 'GNC Pro Creatine', desc: 'Pharmaceutical-grade creatine monohydrate for reliable daily strength support.', image: 'https://www.guardian.in/cdn/shop/files/Artboard_1_copy.png?v=1760097193&width=800' },
        ]
      },
      {
        emoji: '🌿', name: 'BCAAs', desc: 'Recovery & endurance support', products: [
          { name: 'Scivation Xtend', desc: 'The #1 BCAA brand — 7g BCAAs in 2:1:1 ratio with electrolytes for hydration.', image: 'https://cellucor.com/cdn/shop/files/XTEND_1144_Digital_Relabel_FlowThrough_Assets_PDPs_OnGreyBackground-XTEND-OG30-BRI.png?v=1771552623' },
          { name: 'ON BCAA 5000', desc: '5g BCAAs per serving, no sugar — ideal intra-workout fuel to reduce breakdown.', image: 'https://www.optimumnutrition.co.in/cdn/shop/files/748927068573_1.jpg?v=1772711768&width=200' },
          { name: 'MusclePharm BCAA', desc: '3:1:2 ratio with added glutamine for enhanced recovery and muscle preservation.', image: 'https://musclepharm.com/cdn/shop/files/BCAA_Fruit_Punch.jpg?v=1754064987&width=200' },
          { name: 'MyProtein THE BCAA', desc: 'Essential amino acid complex with 6g BCAAs and electrolytes in every scoop.', image: 'https://www.myprotein.co.in/images?url=https://static.thcdn.com/productimg/original/15418482-1175266793949609.jpg&format=webp&auto=avif&crop=1100,1200,smart' },
          { name: 'MuscleBlaze BCAA Pro', desc: 'Advanced BCAA with glutamine and citrulline for complete recovery support.', image: 'https://cdn01.pharmeasy.in/dam/products_otc/B46791/muscleblaze-bcaa-pro-powerful-intra-workout-5g-vegan-bcaas-500-mg-electrolytes-litchi-240-g-2-1741767413.jpg' },
          { name: 'BSN Amino X', desc: '10g of amino acids including EAAs and BCAAs — effervescent, caffeine-free formula.', image: 'https://www.gobsn.com/cdn/shop/files/bsn-1047896_Image_01.png?v=1761233898&width=800' },
        ]
      },
      {
        emoji: '💊', name: 'Multivitamins', desc: 'Complete daily micronutrition', products: [
          { name: 'ON Opti-Men', desc: '75+ active ingredients across 4 blends optimized for active men.', image: 'https://www.optimumnutrition.co.in/cdn/shop/files/1156608_1_bd16ce60-fa01-42b4-872a-fd291f8fb5ad.png?v=1773300765&width=200' },
          { name: 'Animal Pak (Universal)', desc: 'The original sports multivitamin — 44 nutrients plus amino acids in one pack.', image: 'https://www.animalpak.com/cdn/shop/files/Pak_30packs_1200x1200_c93173e6-ae7a-4bb2-af16-26ff14b86cd1.jpg?v=1770220089' },
          { name: 'MuscleBlaze MB-Vite', desc: 'Complete multivitamin with immunity blend formulated for Indian athletes.', image: 'https://img2.hkrtcdn.com/cdn-cgi/image/width=200,height=200,dpr=1/39689/prd_3968831-MuscleBlaze-MBVITE-Daily-Multivitamin-for-Enhanced-Energy-Stamina-Gut-Health-60-tablets-Unflavoured_o.jpg' },
          { name: 'GNC Mega Men Sport', desc: 'Sport-specific multi with antioxidants, B-vitamins, and metabolic support.', image: 'https://www.guardian.in/cdn/shop/files/90200084-1_c57c6b2f-fd51-472a-ae45-c0e6ab0b3b7c.jpg?v=1694086378&width=800' },
          { name: 'HealthKart HK Vitals', desc: 'Daily essentials for energy, immunity and overall wellness — affordable and effective.', image: 'https://img4.hkrtcdn.com/39982/prd_3998193-HK-Vitals-Multivitamin-Plus-Men-60-tablets-Unflavoured_o.jpg' },
          { name: 'truebasics', desc: 'TrueBasics Advanced Multivitamin For Sports is a high-precision formulation for fitness enthusiasts', image: 'https://img8.hkrtcdn.com/cdn-cgi/image/width=800,height=800,dpr=1.5/30838/prd_3083727-TrueBasics-Advanced-Multivitamin-for-Sports-with-Amino-Acids-Energy-Immunity-Blends-90-tablets_o.jpg' },
        ]
        
      },
      {
        emoji: '🔥', name: 'Fat Burner', desc: 'Metabolism & fat-loss support', products: [
          { name: 'Hydroxycut Hardcore Elite', desc: "America's #1 weight loss brand — caffeine, C. canephora robusta, and L-theanine.", image: 'https://www.hydroxycut.com/cdn/shop/files/hydroxycut-hardcore.png?v=1720482764' },
          { name: 'MuscleTech Hydroxycut Hardcore', desc: 'Intense thermogenic with caffeine and key weight-loss compounds from clinical studies.', image: 'https://www.muscletech.com/cdn/shop/files/mt-hydroxycut-hardcore-elite.png?v=1742823172' },
          { name: 'MuscleBlaze Fat Burner PRO', desc: 'Green tea, CLA, and caffeine for sustained thermogenic metabolism support.', image: 'https://img2.hkrtcdn.com/cdn-cgi/image/width=200,height=200,dpr=1/40259/prd_4025891-MuscleBlaze-MB-Fat-Burner-PRO-60-tablets-Unflavoured_o.jpg' },
          { name: 'GNC Total Lean Burn 60', desc: 'Stimulant-based thermogenic with CLA and L-carnitine for lean body composition.', image: 'https://cdn11.bigcommerce.com/s-ilgxsy4t82/images/stencil/960w/products/218440/517186/61Qqc9Sm5uL__42717.1683198584.jpg?c=1' },
          { name: 'Scitron Fat Burner', desc: 'Green coffee bean extract and garcinia cambogia for appetite control and fat oxidation.', image: 'https://scitron.com/cdn/shop/files/HydroleanX_1_800x.jpg?v=1712581971' },
          { name: 'MyProtein Thermopure', desc: 'Clean thermogenic with caffeine, green tea, and tyrosine for energy and fat metabolism.', image: 'https://cdn11.bigcommerce.com/s-ilgxsy4t82/images/stencil/960w/products/170604/427150/51XFSux3foS._AC_SL1446___43981.1673328130.jpg?c=1' },
        ]
      },
      {
        emoji: '🐟', name: 'Omega-3', desc: 'Joint, heart & brain health', products: [
          { name: 'ON Fish Oil', desc: '300mg EPA + DHA per softgel from deep-water fish for heart and joint health.', image: 'https://www.optimumnutrition.co.in/cdn/shop/files/748927070439_1.jpg?v=1773300765&width=200' },
          { name: 'MuscleTech Platinum Omega-3', desc: 'Triple-strength fish oil — 465mg EPA and 375mg DHA per serving.', image: 'https://m.media-amazon.com/images/I/51bf-hroYUL._SX679_.jpg' },
          { name: 'MuscleBlaze Fish Oil', desc: 'Cold-processed omega-3 with enteric coating to prevent fishy aftertaste.', image: 'http://img8.hkrtcdn.com/39777/prd_3977697-MuscleBlaze-Omega-3-Fish-Oil-1000-mg-with-180mg-EPA-and-120mg-DHA-60-capsules_c_l.jpg' },
          { name: 'GNC Triple Strength Fish Oil', desc: 'High-potency 900mg EPA+DHA per serving — one softgel does the work of three.', image: 'https://www.guardian.in/cdn/shop/files/TSFO_60N-1_3b2015ef-c6df-4c1a-8fa1-7b61c15ad946.png?v=1764220157&width=800' },
          { name: 'MyProtein Omega 3', desc: 'Molecularly distilled fish oil — 750mg EPA+DHA per serving, pure and odourless.', image: 'https://www.myprotein.co.in/images?url=https://static.thcdn.com/productimg/original/15591735-1935250497272416.jpg&format=webp&auto=avif&crop=1100,1200,smart' },
          { name: 'Scitron Omega-3 Fish Oil', desc: 'Pharmaceutical-grade fish oil with enteric coating for optimal bioavailability.', image: 'https://scitron.com/cdn/shop/files/OMEGA-3FISHOILR1_800x.jpg?v=1714029191' },
        ]
      },
    ],
    cta: {
      title: 'Ready to Stack Up?',
      titleHighlight: 'Order Today',
      text: "Message us on WhatsApp with what you need — we'll give you the best price, verify authenticity, and arrange delivery straight to you.",
      button: 'Order via WhatsApp',
    },
  },

  cta: {
    label: 'Ready',
    title: 'Be Next to',
    titleHighlight: 'Change Transformation',
    description: 'Join hundreds of transformed clients. Your journey to the best version of yourself starts today.',
    buttons: {
      primary: 'Start Your Transformation',
      secondary: 'Check My Journey',
    },
  },
};

// Lazy video preview — plays muted in viewport, click opens fullscreen
const LazyVideoPreview = ({ src, onClick }: { src: string; onClick: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const v = videoRef.current;
        if (!v) return;
        if (entry.isIntersecting) v.play().catch(() => { });
        else v.pause();
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box ref={wrapRef} onClick={onClick} sx={{ position: 'absolute', inset: 0, cursor: 'pointer' }}>
      <Box
        component="video"
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      {/* Subtle "play" hint centred over the preview */}
      <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <Box sx={{ px: 2.5, py: 0.8, borderRadius: '9999px', bgcolor: 'rgba(212,175,55,0.18)', border: '1px solid rgba(212,175,55,0.45)', backdropFilter: 'blur(8px)', color: '#D4AF37', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          ▶ Watch Full Video
        </Box>
      </Box>
    </Box>
  );
};

// Legacy exports for backward compatibility
const experiences = FITNESS_CONTENT.experience.items;
const trainMethods = FITNESS_CONTENT.methods.items;
const features = FITNESS_CONTENT.whyUs.features;

// Testimonials data (kept separate as it's used by carousel component)
const BASE = import.meta.env.BASE_URL;
const testimonials = [
  { name: 'Rajesh Kumar', results: 'Lost 28kg in 6 months', image: `${BASE}assets/Transformations/IMG-20260413-WA0022.webp` },

  { name: 'Priya Singh', results: 'Gained 12kg muscle', image: `${BASE}assets/Transformations/IMG-20260413-WA0024.webp` },

  { name: 'Arjun Patel', results: 'Won competition', image: `${BASE}assets/Transformations/IMG-20260413-WA0025.webp` },

  { name: 'Sneha Reddy', results: 'Lost 15kg in 4 months', image: `${BASE}assets/Transformations/IMG-20260413-WA0049.webp` },

  { name: 'Vikram Malhotra', results: 'Increased strength 200%', image: `${BASE}assets/Transformations/IMG-20260413-WA0051.webp` },

  { name: 'Ananya Sharma', results: 'Body fat 32% to 18%', image: `${BASE}assets/Transformations/IMG-20260413-WA0075.webp` },

  { name: 'Rohit Desai', results: 'Marathon ready in 5 months', image: `${BASE}assets/Transformations/IMG-20260413-WA0077.webp` },

  { name: 'Kavya Menon', results: 'Gained 8kg lean muscle', image: `${BASE}assets/Transformations/IMG-20260413-WA0103.webp` },

  { name: 'Aditya Iyer', results: 'Lost 35kg in 8 months', image: `${BASE}assets/Transformations/IMG-20260413-WA0104.webp` },

  { name: 'Meera Nair', results: 'Complete body transformation', image: `${BASE}assets/Transformations/IMG-20260413-WA0105.webp` },

  // already non-jpg formats (kept as is)
  { name: 'Aditya Iyer', results: 'Lost 35kg in 8 months', image: `${BASE}assets/Transformations/TF1.webp` },
  { name: 'Aditya Iyer', results: 'Lost 35kg in 8 months', image: `${BASE}assets/Transformations/TF2.webp` },
  { name: 'Aditya Iyer', results: 'Lost 35kg in 8 months', image: `${BASE}assets/Transformations/TF3.webp` },
  { name: 'Aditya Iyer', results: 'Lost 35kg in 8 months', image: `${BASE}assets/Transformations/TF4.webp` },
  { name: 'Aditya Iyer', results: 'Lost 35kg in 8 months', image: `${BASE}assets/Transformations/TF5.webp` },
  { name: 'Aditya Iyer', results: 'Lost 35kg in 8 months', image: `${BASE}assets/Transformations/TF7.webp` },
];

export const Fitness = ({ setPage }: FitnessProps) => {
  const [selectedPlan, setSelectedPlan] = useState(2);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isPlanFormOpen, setIsPlanFormOpen] = useState(false);
  const [selectedPlanData, setSelectedPlanData] = useState<any>(FITNESS_CONTENT.pricing.sections[0].plans[0]);
  const [supplementCategory, setSupplementCategory] = useState<typeof FITNESS_CONTENT.supplements.categories[0] | null>(FITNESS_CONTENT.supplements.categories[0]);
  const [activeMethodVideo, setActiveMethodVideo] = useState<string | null>(null);
  const supplementScrollRef = useRef<HTMLDivElement>(null);
  const supplementScrollFrame = useRef<number>(0);
  const supplementScrollPaused = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const el = supplementScrollRef.current;
      if (!el) return;
      cancelAnimationFrame(supplementScrollFrame.current);
      const tick = () => {
        if (!supplementScrollPaused.current) {
          el.scrollLeft += 0.7;
          if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
        }
        supplementScrollFrame.current = requestAnimationFrame(tick);
      };
      supplementScrollFrame.current = requestAnimationFrame(tick);
    }, 280);
    return () => { clearTimeout(timer); cancelAnimationFrame(supplementScrollFrame.current); };
  }, [supplementCategory]);

  const handlePageChange = (page: string) => {
    if (setPage) {
      setPage(page as PageType);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <FitnessWrapper>
      {/* ==================== HERO SECTION ==================== */}
      <HeroSection>
        {/* Energy Wave SVG Background */}
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1, overflow: 'hidden', display: 'flex' }}>
          <svg viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.15, width: '100%', height: '100%' }}>
            <defs>
              <linearGradient id="energyGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#1a1a2e" />
                <stop offset="50%" stopColor="#2d3561" />
                <stop offset="100%" stopColor="#3b5998" />
              </linearGradient>
              <radialGradient id="pulseGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ff6f00" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ff6f00" stopOpacity="0" />
              </radialGradient>
              <style>{`
                @keyframes energyPulse { 0%, 100% { r: 80; opacity: 0.4; } 50% { r: 120; opacity: 0.1; } }
                @keyframes waveFlow { 0% { transform: translateY(0px); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0px); } }
                @keyframes riseBar { 0%, 100% { transform: scaleY(0.5); } 50% { transform: scaleY(1); } }
                @keyframes powerGlow { 0%, 100% { filter: drop-shadow(0 0 5px #ff6f00); opacity: 0.3; } 50% { filter: drop-shadow(0 0 20px #ff6f00); opacity: 0.8; } }
                .energy-pulse { animation: energyPulse 2.5s ease-in-out infinite; }
                .wave-flow { animation: waveFlow 4s ease-in-out infinite; }
                .rise-bar { animation: riseBar 2s ease-in-out infinite; transform-origin: bottom; }
                .power-glow { animation: powerGlow 3s ease-in-out infinite; }
              `}</style>
            </defs>
            <rect width="1400" height="800" fill="url(#energyGradient)" />
            
            {/* Central Pulsing Energy Core */}
            <circle className="energy-pulse" cx="700" cy="400" r="80" fill="url(#pulseGlow)" style={{ animationDelay: '0s' }} />
            <circle className="energy-pulse" cx="700" cy="400" r="80" fill="url(#pulseGlow)" style={{ animationDelay: '0.8s' }} />
            <circle className="energy-pulse" cx="700" cy="400" r="80" fill="url(#pulseGlow)" style={{ animationDelay: '1.6s' }} />
            
            {/* Energy Wave Layers */}
            <g className="wave-flow" style={{ animationDelay: '0s' }}>
              <path d="M 0,350 Q 350,300 700,350 T 1400,350" stroke="#ff9800" strokeWidth="3" fill="none" opacity="0.4" />
            </g>
            <g className="wave-flow" style={{ animationDelay: '0.5s' }}>
              <path d="M 0,400 Q 350,350 700,400 T 1400,400" stroke="#ff6f00" strokeWidth="2" fill="none" opacity="0.5" />
            </g>
            <g className="wave-flow" style={{ animationDelay: '1s' }}>
              <path d="M 0,450 Q 350,400 700,450 T 1400,450" stroke="#ff9800" strokeWidth="2" fill="none" opacity="0.3" />
            </g>
            
            {/* Rising Power Bars */}
            <g>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <g key={i} className="rise-bar" style={{ animationDelay: `${i * 0.2}s` }}>
                  <rect x={150 + i * 130} y="600" width="80" height="150" fill="#ff6f00" opacity="0.3" rx="4" />
                  <rect x={155 + i * 130} y="605" width="70" height="140" fill="none" stroke="#ff9800" strokeWidth="2" opacity="0.5" rx="3" />
                </g>
              ))}
            </g>
            
            {/* Side Energy Beams */}
            <g className="power-glow" style={{ animationDelay: '0s' }}>
              <polygon points="0,250 100,300 100,500 0,450" fill="#ff6f00" opacity="0.2" />
            </g>
            <g className="power-glow" style={{ animationDelay: '1s' }}>
              <polygon points="1400,250 1300,300 1300,500 1400,450" fill="#ff6f00" opacity="0.2" />
            </g>
            
            {/* Muscle Fiber Strands */}
            {Array.from({ length: 5 }).map((_, i) => (
              <path
                key={i}
                d={`M ${100 + i * 250},150 Q ${200 + i * 250},250 ${300 + i * 250},350 T ${400 + i * 250},550`}
                stroke="#ff9800"
                strokeWidth="1"
                fill="none"
                opacity="0.25"
                style={{ animation: `waveFlow 5s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </svg>
        </Box>

        {/* Mobile hero image — shown only below md */}
        <FitnessHeroImageMobile
          src={`${import.meta.env.BASE_URL}assets/Gym/Filtness_home.webp`}
          alt="Fitness Hero"
        />

        {/* Desktop hero image — shown only from md upward */}
        <HeroBackgroundImage>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%', height: '100%' }}
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/Gym/IMG-20260413-WA0083.webp`}
              alt="Fitness Hero"
              loading="eager"
            />
          </motion.div>
        </HeroBackgroundImage>

        {/* Overlay — covers both mobile and desktop images */}
        <HeroOverlay />

        <HeroContent>
          <HeroTextContainer>
            {/* Stats Badge */}
            {/* <StatsBadge
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <StatsAvatarGroup>
                <StatsAvatar sx={{ bgcolor: 'primary.main' }}>95%</StatsAvatar>
                <StatsAvatar sx={{ bgcolor: 'primary.main', opacity: 0.8 }} />
                <StatsAvatar sx={{ bgcolor: 'primary.main', opacity: 0.6 }} />
                <StatsAvatar sx={{ bgcolor: 'primary.main', opacity: 0.4 }}>100+</StatsAvatar>
              </StatsAvatarGroup>
              <StatsBadgeText>{FITNESS_CONTENT.hero.statsBadge}</StatsBadgeText>
            </StatsBadge> */}

            {/* Description */}
            {/* <HeroDescription>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                style={{ margin: 0 }}
              >
                {FITNESS_CONTENT.hero.description}
              </motion.p>
            </HeroDescription> */}

            {/* Main Heading */}
            <HeroTitle
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {FITNESS_CONTENT.hero.title.line1}<br />
              {FITNESS_CONTENT.hero.title.line2} <span className="highlight">{FITNESS_CONTENT.hero.title.line3}</span>
            </HeroTitle>

            {/* CTA Buttons */}
            <HeroButtonGroup
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <HeroPrimaryButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsFormOpen(true)}
              >
                {FITNESS_CONTENT.hero.buttons.primary}
                <FontAwesomeIcon icon={faArrowRight} />
              </HeroPrimaryButton>
              {/* <HeroSecondaryButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePageChange(PAGES.JOURNEY)}
              >
                {FITNESS_CONTENT.hero.buttons.secondary}
                <FontAwesomeIcon icon={faArrowRight} />
              </HeroSecondaryButton> */}
            </HeroButtonGroup>
          </HeroTextContainer>
        </HeroContent>

        {/* Transformation Stories Carousel — bottom of hero, same as Home */}
        <Box sx={{ mt: { xs: 10, sm: 14, md: 20 } }}>
          <SlideIn direction="up" delay={0.2}>
            <TestimonialCarousel testimonials={testimonials} />
          </SlideIn>
        </Box>
      </HeroSection>

      {/* ==================== EXPERIENCE SECTION ==================== */}
      <Section sx={{ bgcolor: 'background.default' }}>
        <SectionContainer>
          <FadeIn>
            <SectionHeader>
              <SectionLabel>{FITNESS_CONTENT.experience.label}</SectionLabel>
              <SectionTitle>
                {FITNESS_CONTENT.experience.title}<br />
                <span className="highlight">{FITNESS_CONTENT.experience.titleHighlight}</span>
              </SectionTitle>
              <SectionDescription>
                {FITNESS_CONTENT.experience.description}
              </SectionDescription>
            </SectionHeader>
          </FadeIn>

          <Stagger staggerDelay={0.15}>
            <ExperienceGrid>
              {experiences.map((exp, i) => (
                <ExperienceCard key={i}>
                  <ExperienceImageContainer>
                    <img src={exp.image} alt={exp.title} referrerPolicy="no-referrer" />
                    <ExperienceImageOverlay />

                    {/* Metric Badge */}
                    {/* <ScaleIn delay={0.3}>
                      <ExperienceMetricBadge>
                        <MetricValue>{exp.metric}</MetricValue>
                        <MetricLabel>{exp.metricLabel}</MetricLabel>
                      </ExperienceMetricBadge>
                    </ScaleIn> */}
                  </ExperienceImageContainer>

                  <ExperienceCardContent>
                    <ExperienceCardTitle>{exp.title}</ExperienceCardTitle>
                    <ExperienceCardDescription>{exp.description}</ExperienceCardDescription>
                    {/* <ExperienceButton>{FITNESS_CONTENT.experience.readMore}</ExperienceButton> */}
                  </ExperienceCardContent>
                </ExperienceCard>
              ))}
            </ExperienceGrid>
          </Stagger>
        </SectionContainer>
      </Section>
      {/* ==================== TRAINING METHODS ==================== */}
      <Section sx={{ background: 'linear-gradient(to bottom, #0a1d2c, #112240)' }}>
        <SectionContainer>
          <FadeIn>
            <SectionHeader>
              <SectionLabel>{FITNESS_CONTENT.methods.label}</SectionLabel>
              <SectionTitle>
                {FITNESS_CONTENT.methods.title}<br />
                <span className="highlight">{FITNESS_CONTENT.methods.titleHighlight}</span>
              </SectionTitle>
            </SectionHeader>
          </FadeIn>

          <Stagger staggerDelay={0.15}>
            <MethodsGrid sx={{ gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' } }}>
              {trainMethods.map((method, i) => (
                <MethodCard key={i}>
                  <MethodImageContainer sx={{ position: 'relative' }}>
                    {(method as any).videoSrc ? (
                      <LazyVideoPreview
                        src={(method as any).videoSrc}
                        onClick={() => setActiveMethodVideo((method as any).videoSrc)}
                      />
                    ) : (
                      <img
                        src={method.image || [
                          'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?q=80&w=600&auto=format&fit=crop',
                          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop',
                          'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop',
                        ][i % 3]}
                        alt={method.title}
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <MethodImageOverlay sx={{ pointerEvents: 'none' }} />
                    <MethodBadge>{method.title}</MethodBadge>
                  </MethodImageContainer>

                  <MethodCardContent>
                    <MethodCardTitle>{method.title}</MethodCardTitle>
                    <MethodCardDescription>{method.desc}</MethodCardDescription>
                  </MethodCardContent>
                </MethodCard>
              ))}
            </MethodsGrid>
          </Stagger>
        </SectionContainer>
      </Section>


      {/* ==================== MEMBERSHIP PLANS ==================== */}
      <Section sx={{ bgcolor: 'background.default' }}>
        <SectionContainer>
          <FadeIn>
            <SectionHeader>
              <SectionLabel>{FITNESS_CONTENT.pricing.label}</SectionLabel>
              <SectionTitle>
                {FITNESS_CONTENT.pricing.title} <span className="highlight">{FITNESS_CONTENT.pricing.titleHighlight}</span>
              </SectionTitle>
              <SectionDescription>
                {FITNESS_CONTENT.pricing.description}
              </SectionDescription>
            </SectionHeader>
          </FadeIn>

          {/* ── Monthly Gym ── */}
          {(() => {
            const section = FITNESS_CONTENT.pricing.sections[0];
            return (
              <Box sx={{ mb: { xs: 4, md: 6 } }}>
                <FadeIn>
                  <Box sx={{ fontSize: '0.8rem', fontWeight: 700, color: '#D4AF37', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 2.5, pb: 1, borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
                    {section.title}
                  </Box>
                </FadeIn>
                <Stagger staggerDelay={0.1}>
                  <PricingGrid>
                    {section.plans.map((pkg, i) => {
                      const planId = i;
                      return (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.03, y: -6 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                          <PricingCard onClick={() => setSelectedPlan(planId)} selected={selectedPlan === planId} sx={pkg.highlighted ? { pt: { xs: '2.2rem', md: '2.5rem' } } : {}}>
                            {pkg.highlighted && <PopularBadge />}
                            <Box sx={{ mb: 2 }}>
                              <PricingDuration>{pkg.duration}</PricingDuration>
                              {(pkg as any).originalPrice && <OriginalPrice>{(pkg as any).originalPrice}</OriginalPrice>}
                              <PricingPrice>{pkg.price}</PricingPrice>
                              {(pkg as any).savingsLabel && <SavingsBadge>{(pkg as any).savingsLabel}</SavingsBadge>}
                              {(pkg as any).perMonth && <PricingPerMonth sx={{ mt: 0.5 }}>({(pkg as any).perMonth}/month)</PricingPerMonth>}
                            </Box>
                            <PricingFeaturesList>
                              {pkg.features.map((f, j) => <PricingFeatureItem key={j}><FontAwesomeIcon icon={faCheck} /><span>{f}</span></PricingFeatureItem>)}
                            </PricingFeaturesList>
                            <PricingButton selected={selectedPlan === planId} onClick={(e) => { e.stopPropagation(); setSelectedPlanData(pkg); setIsPlanFormOpen(true); }}>{FITNESS_CONTENT.pricing.button}</PricingButton>
                          </PricingCard>
                        </motion.div>
                      );
                    })}
                  </PricingGrid>
                </Stagger>
              </Box>
            );
          })()}

          {/* ── Personal Training + PT in Gym — side by side ── */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 5 }, mt: { xs: 5, md: 7 }, alignItems: 'stretch' }}>
            {[1, 2].map((si) => {
              const section = FITNESS_CONTENT.pricing.sections[si];
              return (
                <Box key={si} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <FadeIn>
                    <Box sx={{ fontSize: '0.8rem', fontWeight: 700, color: '#D4AF37', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 2.5, pb: 1, borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
                      {section.title}
                    </Box>
                  </FadeIn>
                  <Stagger staggerDelay={0.1}>
                    <PricingGrid sx={{ flex: 1, gridTemplateColumns: { xs: '1fr', sm: `repeat(${section.plans.length}, 1fr)` }, alignContent: 'start' }}>
                      {section.plans.map((pkg, i) => {
                        const planId = si * 100 + i;
                        return (
                          <PricingCard key={i} onClick={() => setSelectedPlan(planId)} selected={selectedPlan === planId} sx={{ ...(pkg.highlighted ? { pt: { xs: '2.2rem', md: '2.5rem' } } : {}), height: section.plans.length === 1 ? '100%' : 'auto' }}>
                            {pkg.highlighted && <PopularBadge />}
                            <Box sx={{ mb: 2 }}>
                              <PricingDuration>{pkg.duration}</PricingDuration>
                              {(pkg as any).originalPrice && <OriginalPrice>{(pkg as any).originalPrice}</OriginalPrice>}
                              <PricingPrice>{pkg.price}</PricingPrice>
                              {(pkg as any).savingsLabel && <SavingsBadge>{(pkg as any).savingsLabel}</SavingsBadge>}
                            </Box>
                            <PricingFeaturesList>
                              {pkg.features.map((f, j) => <PricingFeatureItem key={j}><FontAwesomeIcon icon={faCheck} /><span>{f}</span></PricingFeatureItem>)}
                            </PricingFeaturesList>
                            <PricingButton selected={selectedPlan === planId} onClick={(e) => { e.stopPropagation(); setSelectedPlanData(pkg); setIsPlanFormOpen(true); }}>{FITNESS_CONTENT.pricing.button}</PricingButton>
                          </PricingCard>
                        );
                      })}
                    </PricingGrid>
                  </Stagger>
                </Box>
              );
            })}
          </Box>
        </SectionContainer>
      </Section>

      {/* ==================== SUPPLEMENTS SECTION ==================== */}
      <SupplementsSection>
        <SupplementsContainer>
          <FadeIn>
            <SectionHeader>
              <SectionLabel>{FITNESS_CONTENT.supplements.label}</SectionLabel>
              <SectionTitle>
                {FITNESS_CONTENT.supplements.title}<br />
                <span className="highlight">{FITNESS_CONTENT.supplements.titleHighlight}</span>
              </SectionTitle>
              <SectionDescription sx={{ maxWidth: '720px', mx: 'auto' }}>
                {FITNESS_CONTENT.supplements.description}
              </SectionDescription>
            </SectionHeader>
          </FadeIn>

          {/* Scrolling brand strip */}
          <SupplementsBrandStripWrapper>
            <SupplementsBrandStrip>
              {[...FITNESS_CONTENT.supplements.brands, ...FITNESS_CONTENT.supplements.brands].map((brand, i) => (
                <BrandPill key={i}>⭐ {brand}</BrandPill>
              ))}
            </SupplementsBrandStrip>
          </SupplementsBrandStripWrapper>

          {/* Why buy from us */}
          <Stagger staggerDelay={0.1}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)' }, gap: { xs: 2, md: 3 } }}>
              {FITNESS_CONTENT.supplements.benefits.map((b, i) => (
               <motion.div
  key={i}
  whileHover={{
    y: -9,
    scale: 1.025,
    backgroundColor: 'transparent',
    borderColor: 'rgba(255, 255, 255, 0.34)',
    boxShadow: [
      'inset 0 2px 0 rgba(255, 255, 255, 0.34)',
      'inset 0 -1px 0 rgba(255, 255, 255, 0.09)',
      'inset 1px 0 0 rgba(255, 255, 255, 0.12)',
      '0 16px 44px rgba(0, 0, 0, 0.18)',
      '0 4px 12px rgba(0, 0, 0, 0.10)',
      '0 0 0 1px rgba(255, 255, 255, 0.10)',
    ].join(', '),
    transition: {
      type: 'spring',
      stiffness: 380,
      damping: 22,
    },
  }}
  style={{
    background: 'rgba(255, 255, 255, 0.10)',
    backdropFilter: 'none',
    WebkitBackdropFilter: 'none',
    border: '1px solid rgba(255, 255, 255, 0.20)',
    borderRadius: '6px',
    padding: '1.75rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    boxShadow: [
      'inset 0 1.5px 0 rgba(255, 255, 255, 0.28)',
      'inset 0 -1px 0 rgba(255, 255, 255, 0.06)',
      'inset 1px 0 0 rgba(255, 255, 255, 0.08)',
      '0 8px 32px rgba(0, 0, 0, 0.14)',
      '0 2px 8px rgba(0, 0, 0, 0.08)',
    ].join(', '),
    cursor: 'default',
    transition:
      'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
  }}
>
                  <Box sx={{ fontSize: '1.8rem', color: '#D4AF37', mb: 0.5 }}>
                    <FontAwesomeIcon icon={b.icon} />
                  </Box>
                  <Box sx={{ fontWeight: 700, fontSize: '1.1rem', color: '#fff', lineHeight: 1.3 }}>
                    {b.title}
                  </Box>
                  <Box sx={{ fontSize: '0.85rem', opacity: 0.72, lineHeight: 1.5, color: 'rgba(255,255,255,0.72)' }}>
                    {b.text}
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Stagger>

          {/* Category filter pills */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }, gap: { xs: 1.5, md: 2 }, justifyContent: 'center', mb: { xs: 3, md: 4 }, mt: { xs: 2, md: 3 } }}>
            {FITNESS_CONTENT.supplements.categories.map((cat, i) => {
              const isActive = supplementCategory?.name === cat.name;
              return (
                <Box
                  key={i}
                  onClick={() => setSupplementCategory(cat)}
                  sx={{
                    p: { xs: 1.5, md: 2 },
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: isActive ? 'rgba(212,175,55,0.6)' : 'rgba(255,255,255,0.12)',
                    bgcolor: isActive ? 'rgba(212,175,55,0.12)' : 'rgba(255,255,255,0.02)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    userSelect: 'none',
                    position: 'relative',
                    '&:hover': {
                      borderColor: 'rgba(212,175,55,0.4)',
                      bgcolor: isActive ? 'rgba(212,175,55,0.12)' : 'rgba(255,255,255,0.05)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {/* Index + Checkmark Row */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mb: 1 }}>
                    <Box sx={{ fontSize: { xs: '0.55rem', md: '0.65rem' }, fontWeight: 800, letterSpacing: '0.12em', opacity: isActive ? 0.9 : 0.3, fontFamily: '"Bebas Neue", sans-serif', lineHeight: 1, color: '#D4AF37' }}>
                      {String(i + 1).padStart(2, '0')}
                    </Box>
                    {isActive && (
                      <Box sx={{ width: 16, height: 16, borderRadius: '50%', bgcolor: 'rgba(212,175,55,0.2)', border: '1px solid rgba(212,175,55,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.55rem', color: '#D4AF37', lineHeight: 1 }}>
                        ✓
                      </Box>
                    )}
                  </Box>

                  {/* Title */}
                  <Box sx={{ fontWeight: 700, fontSize: { xs: '0.68rem', md: '0.78rem' }, letterSpacing: '0.01em', lineHeight: 1.3, mb: 0.5, color: isActive ? '#D4AF37' : 'rgba(255,255,255,0.9)' }}>
                    {cat.name}
                  </Box>

                  {/* Description */}
                  <Box sx={{ fontSize: { xs: '0.55rem', md: '0.65rem' }, opacity: 0.5, lineHeight: 1.3, letterSpacing: '0.02em', color: 'rgba(255,255,255,0.7)' }}>
                    {cat.desc}
                  </Box>
                </Box>
              );
            })}
          </Box>

          {/* Inline product grid */}
          <AnimatePresence mode="wait">
            {supplementCategory && (
              <motion.div
                key={supplementCategory.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
              >
                <Box sx={{ textAlign: 'center', mb: { xs: 2.5, md: 3 } }}>
                  <Box sx={{ fontSize: '0.72rem', color: 'rgba(212,175,55,0.65)', letterSpacing: '0.09em', textTransform: 'uppercase', fontWeight: 700 }}>
                    {supplementCategory.desc}
                  </Box>
                </Box>
                <Box
                  ref={supplementScrollRef}
                  onMouseEnter={() => { supplementScrollPaused.current = true; }}
                  onMouseLeave={() => { supplementScrollPaused.current = false; }}
                  onTouchStart={() => { supplementScrollPaused.current = true; }}
                  onTouchEnd={() => { setTimeout(() => { supplementScrollPaused.current = false; }, 800); }}
                  sx={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    gap: 1,
                    overflowX: 'auto',
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': { display: 'none' },
                    cursor: 'grab',
                    '&:active': { cursor: 'grabbing' },
                    userSelect: 'none',
                    pb: 0.5,
                  }}
                >
                  {[...supplementCategory.products, ...supplementCategory.products].map((p, i) => (
                    <Box
                      key={i}
                      sx={{
                        flexShrink: 0,
                        width: { xs: '90px', sm: '108px', md: '120px' },
                        display: 'flex', flexDirection: 'column',
                        borderRadius: '8px', overflow: 'hidden',
                        bgcolor: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        transition: 'all 0.22s ease',
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.07)',
                          borderColor: 'rgba(212,175,55,0.22)',
                          transform: 'translateY(-3px)',
                          boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={p.image}
                        alt={p.name}
                        referrerPolicy="no-referrer"
                        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                          const img = e.currentTarget as HTMLImageElement;
                          img.onerror = null;
                          img.src = `https://placehold.co/200x200/0d1f30/D4AF37?text=${encodeURIComponent(p.name.split(' ').slice(0, 2).join(' '))}`;
                        }}
                        sx={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', bgcolor: 'rgba(255,255,255,0.06)', display: 'block', pointerEvents: 'none' }}
                      />
                      <Box sx={{ p: 0.75, flex: 1 }}>
                        <Box sx={{ fontSize: '0.6rem', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>{p.name}</Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Order CTA */}
          <FadeIn delay={0.2}>
            <SupplementCTABox>
              <SectionLabel>{FITNESS_CONTENT.supplements.cta.title}</SectionLabel>
              <SectionTitle>
                <span className="highlight">{FITNESS_CONTENT.supplements.cta.titleHighlight}</span>
              </SectionTitle>
              {/* <SectionDescription sx={{ maxWidth: '600px', mx: 'auto' }}>
                {FITNESS_CONTENT.supplements.cta.text}
              </SectionDescription> */}
              <SupplementOrderButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const supplementName = supplementCategory?.name || 'Supplements';
                  const message = `Hi, I am reaching out for ${supplementName}. Please let me know the brands and prices available.`;
                  const encodedMessage = encodeURIComponent(message);
                  window.open(`https://wa.me/${GLOBAL_CONFIG.contact.phoneWhatsApp}?text=${encodedMessage}`, '_blank');
                }}
              >
                <FontAwesomeIcon icon={faArrowRight} />
                {FITNESS_CONTENT.supplements.cta.button}
              </SupplementOrderButton>
            </SupplementCTABox>
          </FadeIn>
        </SupplementsContainer>
      </SupplementsSection>

      {/* ==================== WHY WE'RE THE BEST ==================== */}
      <Section sx={{ bgcolor: 'background.default' }}>
        <SectionContainer>
          <FadeIn>
            <SectionHeader>
              <SectionLabel>{FITNESS_CONTENT.whyUs.label}</SectionLabel>
              <SectionTitle>
                {FITNESS_CONTENT.whyUs.title}<br />
                <span className="highlight">{FITNESS_CONTENT.whyUs.titleHighlight}</span>
              </SectionTitle>
              <SectionDescription>
                {FITNESS_CONTENT.whyUs.description}
              </SectionDescription>
            </SectionHeader>
          </FadeIn>

          <SlideIn direction="up" delay={0.2}>
            <FeaturesCardContainer>
              <FeaturesInnerGrid>
                {/* Features Grid */}
                <Stagger staggerDelay={0.1}>
                  <FeatureItemsGrid>
                    {features.map((feature, i) => (
                      <FeatureItem key={i}>
                        <FeatureIconWrapper>
                          <FontAwesomeIcon icon={feature.icon} />
                        </FeatureIconWrapper>
                        <FeatureLabel>{feature.label}</FeatureLabel>
                      </FeatureItem>
                    ))}
                  </FeatureItemsGrid>
                </Stagger>

                {/* Right Side Image */}
                {/* <ScaleIn delay={0.4}>
                  <FeatureImageContainer>
                    <FeatureImage sx={{ position: 'relative', aspectRatio: '25/16', height: 'auto' }}>
                      <LazyVideoPreview
                        src={`${import.meta.env.BASE_URL}assets/Gym/Videos/Gym_view.mp4`}
                        onClick={() => setActiveMethodVideo(`${import.meta.env.BASE_URL}assets/Gym/Videos/Gym_view.mp4`)}
                      />
                      <FeatureImageOverlay sx={{ pointerEvents: 'none' }} />
                    </FeatureImage>
                  </FeatureImageContainer>
                </ScaleIn> */}
                {/* <FacilityImage>
                  <img
                    src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop"
                    alt="Gym Facility"
                    referrerPolicy="no-referrer"
                  />
                </FacilityImage> */}
              </FeaturesInnerGrid>
            </FeaturesCardContainer>
          </SlideIn>
        </SectionContainer>
      </Section>

      {/* ==================== GYM FACILITY ==================== */}
      <Section sx={{ bgcolor: 'background.default' }}>
        <SectionContainer>
          <FacilityGrid>
            <SlideIn direction="left">
              <ScaleIn delay={0.4}>
                <FeatureImageContainer>
                  <FeatureImage sx={{ position: 'relative', aspectRatio: '25/16', height: 'auto' }}>
                    <LazyVideoPreview
                      src={`${import.meta.env.BASE_URL}assets/Gym/Videos/Gym_view.mp4`}
                      onClick={() => setActiveMethodVideo(`${import.meta.env.BASE_URL}assets/Gym/Videos/Gym_view.mp4`)}
                    />
                    <FeatureImageOverlay sx={{ pointerEvents: 'none' }} />
                  </FeatureImage>
                </FeatureImageContainer>
              </ScaleIn>
            </SlideIn>

            <SlideIn direction="right">
              <FacilityInfo>
                <SectionLabel>{FITNESS_CONTENT.facility.label}</SectionLabel>
                <SectionTitle>
                  {FITNESS_CONTENT.facility.title}<br />
                  <span className="highlight">{FITNESS_CONTENT.facility.titleHighlight}</span>
                </SectionTitle>

                <FacilityInfoList>
                  <FacilityInfoItem>
                    <FacilityIcon>
                      <FontAwesomeIcon icon={faMapPin} />
                    </FacilityIcon>
                    <FacilityInfoContent>
                      <FacilityInfoLabel>{FITNESS_CONTENT.facility.location.label}</FacilityInfoLabel>
                      <FacilityInfoText>{FITNESS_CONTENT.facility.location.text}</FacilityInfoText>
                    </FacilityInfoContent>
                  </FacilityInfoItem>

                  <FacilityInfoItem>
                    <FacilityIcon>
                      <FontAwesomeIcon icon={faClock} />
                    </FacilityIcon>
                    <FacilityInfoContent>
                      <FacilityInfoLabel>{FITNESS_CONTENT.facility.hours.label}</FacilityInfoLabel>
                      <FacilityInfoText>{FITNESS_CONTENT.facility.hours.text}</FacilityInfoText>
                    </FacilityInfoContent>
                  </FacilityInfoItem>

                  <FacilityInfoItem>
                    <FacilityIcon>
                      <FontAwesomeIcon icon={faUsers} />
                    </FacilityIcon>
                    <FacilityInfoContent>
                      <FacilityInfoLabel>{FITNESS_CONTENT.facility.facilities.label}</FacilityInfoLabel>
                      <FacilityInfoText>{FITNESS_CONTENT.facility.facilities.text}</FacilityInfoText>
                    </FacilityInfoContent>
                  </FacilityInfoItem>
                </FacilityInfoList>

                <FacilityButton
                  onClick={() => {
                    const gymLocation = FITNESS_CONTENT.facility.location.full;
                    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(gymLocation)}`;
                    window.open(mapsUrl, '_blank');
                  }}
                >
                  {FITNESS_CONTENT.facility.button}
                  <FontAwesomeIcon icon={faArrowRight} />
                </FacilityButton>
              </FacilityInfo>
            </SlideIn>
          </FacilityGrid>
        </SectionContainer>
      </Section>

      {/* ==================== FINAL CTA ==================== */}
      <CTASection>
        <CTABlob
          animate={{ y: [0, 100, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <FadeIn delay={0.2}>
          <CTAContent>
            <SectionLabel>{FITNESS_CONTENT.cta.label}</SectionLabel>
            <SectionTitle>
              {FITNESS_CONTENT.cta.title}<br />
              <span className="highlight">{FITNESS_CONTENT.cta.titleHighlight}</span>
            </SectionTitle>
            <SectionDescription sx={{ margin: '0 auto', mb: { xs: 4, md: 6 } }}>
              {FITNESS_CONTENT.cta.description}
            </SectionDescription>

            <Bounce delay={0.5}>
              <CTAButtonGroup>
                <CTAPrimaryButton
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setIsFormOpen(true)}
                >
                  {FITNESS_CONTENT.cta.buttons.primary}
                  <FontAwesomeIcon icon={faArrowRight} />
                </CTAPrimaryButton>
                {/* <CTASecondaryButton
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handlePageChange(PAGES.JOURNEY)}
                >
                  {FITNESS_CONTENT.cta.buttons.secondary}
                  <FontAwesomeIcon icon={faArrowRight} />
                </CTASecondaryButton> */}
              </CTAButtonGroup>
            </Bounce>
          </CTAContent>
        </FadeIn>
      </CTASection>

      {/* Method Video Fullscreen Modal */}
      <AnimatePresence>
        {activeMethodVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveMethodVideo(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'rgba(0,0,0,0.93)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{ position: 'relative', width: '100%', maxWidth: '960px', aspectRatio: '16/9' }}
            >
              <IconButton
                onClick={() => setActiveMethodVideo(null)}
                size="small"
                sx={{ position: 'absolute', top: -44, right: 0, color: 'rgba(255,255,255,0.7)', bgcolor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', '&:hover': { color: '#D4AF37', bgcolor: 'rgba(212,175,55,0.15)' } }}
              >
                <CloseIcon />
              </IconButton>
              <Box
                component="video"
                src={activeMethodVideo}
                autoPlay
                controls
                playsInline
                sx={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '12px', display: 'block', outline: 'none' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transformation Form Modal */}
      <TransformationForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        whatsappNumber={GLOBAL_CONFIG.contact.phoneWhatsApp}
      />

      {/* Plan Subscription Form Modal */}
      <PlanSubscriptionForm
        isOpen={isPlanFormOpen}
        onClose={() => setIsPlanFormOpen(false)}
        whatsappNumber={GLOBAL_CONFIG.contact.phoneWhatsApp}
        initialPlan={selectedPlanData}
        availablePlans={FITNESS_CONTENT.pricing.sections.flatMap(s =>
          s.plans.map(p => ({ ...p, sectionTitle: s.title }))
        )}
      />
    </FitnessWrapper>
  );
};
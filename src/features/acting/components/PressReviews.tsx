import { useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
  CarouselSection,
  CarouselHeader,
  CarouselTitle,
  CarouselContainer,
  CarouselFade,
  CarouselTrack,
  ReviewCard,
  ReviewAmbientGlow,
} from '../Acting.style';

interface Review {
  publication: string;
  abbr: string;
  tag: string;
  reviewer: string;
  date: string;
  rating: number;
  snippet: string;
}

const pressReviews: Review[] = [
  {
    publication: 'Variety',
    abbr: 'Va',
    tag: 'Film Review',
    reviewer: 'Ananya Krishnan',
    date: 'Mar 2024',
    rating: 5,
    snippet: 'Karthik delivers a commanding performance that anchors the film — a raw, magnetic presence that holds the screen with effortless authority.'
  },
  {
    publication: 'Film Companion',
    abbr: 'FC',
    tag: 'Feature',
    reviewer: 'Rahul Desai',
    date: 'Jan 2024',
    rating: 5,
    snippet: 'Every scene he inhabits crackles with tension. His instincts are impeccable — he knows exactly when to hold back and when to unleash.'
  },
  {
    publication: 'The Hindu',
    abbr: 'TH',
    tag: 'Review',
    reviewer: 'Sudhir Krishnaswamy',
    date: 'Nov 2023',
    rating: 4,
    snippet: 'A breakthrough performance. Shekar brings a rare emotional intelligence to his role, balancing menace and vulnerability in equal measure.'
  },
  {
    publication: 'Filmfare',
    abbr: 'Ff',
    tag: 'Cover Story',
    reviewer: 'Priya Nair',
    date: 'Sep 2023',
    rating: 5,
    snippet: 'There is something deeply compelling about the way Karthik occupies the frame — a cinematic gravity that few actors possess.'
  },
  {
    publication: 'NDTV',
    abbr: 'ND',
    tag: 'Review',
    reviewer: 'Saibal Chatterjee',
    date: 'Jun 2023',
    rating: 4,
    snippet: 'A performance of remarkable subtlety. He communicates entire worlds through a glance, a pause — the hallmark of a truly gifted actor.'
  },
  {
    publication: 'Deccan Herald',
    abbr: 'DH',
    tag: 'Feature',
    reviewer: 'Kavitha Rao',
    date: 'Apr 2023',
    rating: 5,
    snippet: 'Karthik Shekar Acharya is the real discovery of this film — every moment he is on screen, you simply cannot look away.'
  },
];

export const PressReviews = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const SPEED = 0.4;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    posRef.current = 0;
    
    const tick = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        const half = track.scrollWidth / 2;
        if (posRef.current >= half) posRef.current = 0;
        track.style.transform = `translateX(${posRef.current - half}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <CarouselSection
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <CarouselHeader>
        <CarouselTitle>
          Press <span className="highlight">&</span> Reviews
        </CarouselTitle>
      </CarouselHeader>

      <CarouselContainer>
        <CarouselFade side="left" />
        <CarouselFade side="right" />

        <CarouselTrack ref={trackRef} sx={{ pb: 1 }}>
          {[...pressReviews, ...pressReviews].map((r, i) => (
            <ReviewCard key={i} className="ReviewCard">
              <ReviewAmbientGlow />

              {/* Publication row */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                  <Box
                    sx={{
                      width: '2.25rem',
                      height: '2.25rem',
                      borderRadius: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: '"Bebas Neue", sans-serif',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      color: 'black',
                      background: 'linear-gradient(135deg, #C9A84C, rgba(201,168,76,0.70))',
                      flexShrink: 0,
                    }}
                  >
                    {r.abbr}
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      fontFamily: '"Bebas Neue", sans-serif',
                      fontSize: '1rem',
                      color: 'white',
                      textTransform: 'uppercase',
                      letterSpacing: '0.025em',
                      lineHeight: 1,
                    }}
                  >
                    {r.publication}
                  </Box>
                </Box>
                <Box
                  component="span"
                  sx={{
                    fontSize: '0.5rem',
                    fontFamily: '"Inter", sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: 'rgba(201,168,76,0.7)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    padding: '0.125rem 0.5rem',
                    borderRadius: '9999px',
                    flexShrink: 0,
                  }}
                >
                  {r.tag}
                </Box>
              </Box>

              {/* Star rating */}
              <Box sx={{ display: 'flex', gap: 0.25 }}>
                {Array.from({ length: 5 }).map((_, si) => (
                  <FontAwesomeIcon
                    key={si}
                    icon={faStar}
                    style={{
                      fontSize: '0.625rem',
                      color: si < r.rating ? '#C9A84C' : 'rgba(255,255,255,0.15)',
                    }}
                  />
                ))}
              </Box>

              {/* Decorative quote mark */}
              <Box
                sx={{
                  display: { xs: 'none', md: 'block' },
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: '3.75rem',
                  color: 'rgba(201,168,76,0.15)',
                  lineHeight: 1,
                  marginBottom: '-1.25rem',
                  userSelect: 'none',
                }}
              >
                "
              </Box>

              {/* Snippet */}
              <Box
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: { xs: '0.75rem', md: '0.875rem' },
                  fontFamily: '"Inter", sans-serif',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  flex: 1,
                }}
              >
                {r.snippet}
              </Box>

              {/* Divider */}
              <Box
                sx={{
                  height: '1px',
                  background: 'linear-gradient(to right, rgba(201,168,76,0.3), rgba(255,255,255,0.08), transparent)',
                }}
              />

              {/* Reviewer + date */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box
                  component="span"
                  sx={{
                    color: 'rgba(255,255,255,0.45)',
                    fontSize: '0.75rem',
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  — {r.reviewer}
                </Box>
                <Box
                  component="span"
                  sx={{
                    color: 'rgba(255,255,255,0.25)',
      fontSize: '0.625rem',
                    fontFamily: 'monospace',
                    tabularNums: 'tabular-nums',
                  }}
                >
                  {r.date}
                </Box>
              </Box>
            </ReviewCard>
          ))}
        </CarouselTrack>
      </CarouselContainer>
    </CarouselSection>
  );
};

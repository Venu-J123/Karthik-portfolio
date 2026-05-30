import { useState, useRef, useEffect } from 'react';
import { motion, useTransform, useMotionValue, useSpring, MotionValue } from 'motion/react';
import { Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import {
  ShowreelStackContainer,
  ReelCardWrapper,
  ReelCardInner,
  ReelThumbnail,
  ReelVignetteTop,
  ReelVignetteBottom,
  ReelScanLine,
  ReelCornerAccent,
  ReelTopRow,
  ReelLabelBadge,
  ReelDuration,
  ReelWatermark,
  ReelPlayButton,
  ReelBottomInfo,
  ReelTitle,
  ReelSubtitle,
  ReelProgressBar,
  ReelCloseButton,
  ReelPlaceholder,
} from '../Acting.style';

interface Reel {
  title: string;
  subtitle: string;
  duration: string;
  label: string;
  youtubeId: string;
  videoSrc: string;
  thumbnail: string;
}

interface ReelCardProps {
  reel: Reel;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const ReelCard = ({ reel, index, total, progress }: ReelCardProps) => {
  const [playing, setPlaying] = useState(false);

  const N = total;
  const seg = 1 / N;

  const enterA = Math.max(0, index * seg - seg * 0.22);
  const enterB = Math.min(1, index * seg + seg * 0.12);
  const exitA = Math.max(0, (index + 1) * seg - seg * 0.22);
  const exitB = Math.min(0.99, (index + 1) * seg + seg * 0.12);

  const peekPct = index === 0 ? 0 : 78 + (index - 1) * 6;

  const yInput = index === 0 ? [0, 1] : [0, enterA, enterB, 1];
  const yOutput = index === 0 ? ['0%', '0%'] : [`${peekPct}%`, `${peekPct}%`, '0%', '0%'];

  const scaleInput = index === N - 1 ? [0, 1] : [0, exitA, exitB, 1];
  const scaleOutput = index === N - 1 ? [1, 1] : [1, 1, 0.88, 0.88];

  const opInput = index === N - 1 ? [0, 1] : [0, exitA, exitB, 1];
  const opOutput = index === N - 1 ? [1, 1] : [1, 1, 0.55, 0.55];

  const y = useTransform(progress, yInput, yOutput);
  const scale = useTransform(progress, scaleInput, scaleOutput);
  const opacity = useTransform(progress, opInput, opOutput);

  const blurAmount = useTransform(scale, [1, 0.88], [0, 6]);
  const filter = useTransform(blurAmount, (v: number) => `blur(${v}px)`);

  const embedSrc = reel.youtubeId
    ? `https://www.youtube.com/embed/${reel.youtubeId}?autoplay=1&rel=0&modestbranding=1`
    : null;

  return (
    <ReelCardWrapper
      component={motion.div}
      style={{ position: 'absolute', inset: 0, zIndex: index + 1 }}
    >
      <motion.div style={{ y, scale, opacity, filter, height: '100%' }}>
        <motion.div
          whileHover={playing ? {} : { scale: 1.012 }}
          style={{ height: '100%' }}
        >
          <ReelCardInner
            onClick={() => !playing && setPlaying(true)}
            className="group"
            sx={{
              boxShadow: playing
                ? '0 0 0 1px rgba(201,168,76,0.5), 0 24px 80px rgba(0,0,0,0.8)'
                : '0 0 60px 0 rgba(201,168,76,0.10), 0 24px 60px rgba(0,0,0,0.7)',
              border: playing ? '1px solid rgba(201,168,76,0.35)' : '1px solid rgba(201,168,76,0.15)',
              transition: 'box-shadow 0.4s, border-color 0.4s',
            }}
          >
        {/* PLAYING STATE */}
        {playing && (
          <>
            {embedSrc ? (
              <Box
                component="iframe"
                src={embedSrc}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : reel.videoSrc ? (
              <Box
                component="video"
                src={reel.videoSrc}
                autoPlay
                controls
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  bgcolor: 'black',
                }}
              />
            ) : (
              <ReelPlaceholder>
                <Box
                  sx={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    border: '1px solid rgba(201,168,76,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FontAwesomeIcon icon={faPlay} style={{ color: 'rgba(201,168,76,0.5)', marginLeft: '0.25rem' }} />
                </Box>
                <Box sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.875rem', fontFamily: '"Inter", sans-serif', letterSpacing: '0.05em' }}>
                  Video coming soon
                </Box>
                <Box sx={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.625rem', fontFamily: '"Inter", sans-serif' }}>
                  Set <Box component="code" sx={{ color: 'rgba(201,168,76,0.4)' }}>youtubeId</Box> or <Box component="code" sx={{ color: 'rgba(201,168,76,0.4)' }}>videoSrc</Box> in the reels array
                </Box>
              </ReelPlaceholder>
            )}

            <ReelCloseButton onClick={(e) => { e.stopPropagation(); setPlaying(false); }}>
              ✕
            </ReelCloseButton>
          </>
        )}

        {/* THUMBNAIL STATE */}
        {!playing && (
          <>
            <ReelThumbnail src={reel.thumbnail} alt={reel.title} referrerPolicy="no-referrer" />
            <ReelVignetteTop />
            <ReelVignetteBottom />
            <ReelScanLine />

            <ReelCornerAccent corner="top-left" />
            <ReelCornerAccent corner="top-right" />
            <ReelCornerAccent corner="bottom-left" />
            <ReelCornerAccent corner="bottom-right" />

            <ReelTopRow>
              <ReelLabelBadge>
                <FontAwesomeIcon icon={faStar} style={{ fontSize: '0.5rem', color: '#C9A84C' }} />
                <Box component="span" sx={{ color: '#C9A84C', fontSize: '0.5625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em' }}>
                  {reel.label}
                </Box>
              </ReelLabelBadge>
              <ReelDuration>{reel.duration}</ReelDuration>
            </ReelTopRow>

            <ReelWatermark>{String(index + 1).padStart(2, '0')}</ReelWatermark>

            <ReelPlayButton>
              <Box className="play-circle">
                <Box className="ping" />
                <FontAwesomeIcon icon={faPlay} size="lg" style={{ marginLeft: '0.25rem' }} />
              </Box>
            </ReelPlayButton>

            <ReelBottomInfo>
              <ReelTitle className="group-hover">{reel.title}</ReelTitle>
              <ReelSubtitle>{reel.subtitle}</ReelSubtitle>
              <ReelProgressBar>
                <Box className="fill" />
              </ReelProgressBar>
            </ReelBottomInfo>
          </>
        )}
      </ReelCardInner>
        </motion.div>
      </motion.div>
    </ReelCardWrapper>
  );
};

interface ShowreelStackProps {
  reels: Reel[];
}

export const ShowreelStack = ({ reels }: ShowreelStackProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressMV = useMotionValue(0);
  const springProgress = useSpring(progressMV, { stiffness: 320, damping: 38, mass: 0.2 });
  const progressRef = useRef(0);
  const lockedRef = useRef(false);

  useEffect(() => {
    const TOTAL_DELTA = 600;

    const onWheel = (e: WheelEvent) => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.15;
if (!lockedRef.current) {
        if (isVisible && ((e.deltaY > 0 && progressRef.current < 1) || (e.deltaY < 0 && progressRef.current > 0))) {
          lockedRef.current = true;
        } else {
          return;
        }
      }

      const next = Math.max(0, Math.min(1, progressRef.current + e.deltaY / TOTAL_DELTA));

      if ((e.deltaY > 0 && progressRef.current < 1) || (e.deltaY < 0 && progressRef.current > 0)) {
        e.preventDefault();
        progressRef.current = next;
        progressMV.set(next);
      } else {
        lockedRef.current = false;
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [progressMV]);

  return (
    <ShowreelStackContainer ref={sectionRef}>
      {reels.map((reel, i) => (
        <ReelCard key={i} reel={reel} index={i} total={reels.length} progress={springProgress} />
      ))}
    </ShowreelStackContainer>
  );
};

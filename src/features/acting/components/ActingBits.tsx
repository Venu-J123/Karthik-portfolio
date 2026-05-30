import { useState, useEffect, useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AnimatePresence, motion } from 'motion/react';
import {
  CarouselSection,
  CarouselContainer,
  CarouselFade,
  CarouselTrack,
  ClipCard,
} from '../Acting.style';

interface Clip {
  title: string;
  label: string;
  videoSrc: string;
}

const getYouTubeId = (url: string): string | null => {
  const match = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
  return match && match[2].length === 11 ? match[2] : null;
};

const VideoLightbox = ({ clip, onClose }: { clip: Clip; onClose: () => void }) => {
  const isYouTube = clip.videoSrc.includes('youtube.com') || clip.videoSrc.includes('youtu.be');
  const youtubeId = isYouTube ? getYouTubeId(clip.videoSrc) : null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0,0,0,0.92)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative', width: '100%', maxWidth: '960px', aspectRatio: '16/9' }}
      >
        {/* Close button */}
        <IconButton
          onClick={onClose}
          size="small"
          sx={{
            position: 'absolute',
            top: -44,
            right: 0,
            color: 'rgba(255,255,255,0.7)',
            bgcolor: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            '&:hover': { color: '#C9A84C', bgcolor: 'rgba(201,168,76,0.15)' },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Title */}
        {/* <Box sx={{ position: 'absolute', top: -40, left: 0, fontFamily: '"Bebas Neue", sans-serif', fontSize: '1.1rem', letterSpacing: '0.05em', color: '#C9A84C' }}>
          {clip.title}
        </Box> */}

        {/* Regular video */}
        {!isYouTube && (
          <Box
            component="video"
            src={clip.videoSrc}
            autoPlay
            controls
            playsInline
            sx={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '12px', display: 'block' }}
          />
        )}

        {/* YouTube */}
        {youtubeId && (
          <Box
            component="iframe"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=1&modestbranding=1&rel=0`}
            sx={{ width: '100%', height: '100%', border: 'none', borderRadius: '12px', display: 'block' }}
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
          />
        )}
      </motion.div>
    </motion.div>
  );
};

const ClipCardComponent = ({ clip, onHoverChange, onOpen }: { clip: Clip; onHoverChange: (h: boolean) => void; onOpen: () => void }) => {
  const [hovered, setHovered] = useState(false);

  const isYouTube = clip.videoSrc.includes('youtube.com') || clip.videoSrc.includes('youtu.be');
  const isHoverDevice = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const youtubeId = isYouTube ? getYouTubeId(clip.videoSrc) : null;

  const enter = () => { setHovered(true);  if (isHoverDevice) onHoverChange(true); };
  const leave = () => { setHovered(false); if (isHoverDevice) onHoverChange(false); };

  return (
    <ClipCard
      className="clip-card"
      onMouseEnter={enter}
      onMouseLeave={leave}
      onClick={onOpen}
      sx={{ cursor: 'pointer' }}
    >
      {/* Regular video */}
      {!isYouTube && (
        <Box
          component="video"
          src={clip.videoSrc}
          autoPlay
          muted
          loop
          playsInline
          sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}

      {/* YouTube embed (muted background preview) */}
      {youtubeId && (
        <Box
          component="iframe"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&playsinline=1&playlist=${youtubeId}`}
          sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', pointerEvents: 'none' }}
          allow="autoplay; fullscreen; encrypted-media"
          allowFullScreen
        />
      )}

      {/* Gradient */}
      <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,29,44,0.9), rgba(10,29,44,0.2), transparent)' }} />

      {/* Label */}
      {/* <Box sx={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
        <Box component="span" sx={{ fontSize: '0.5625rem', fontFamily: '"Inter", sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', padding: '0.25rem 0.625rem', borderRadius: '9999px', bgcolor: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.25)', color: '#C9A84C', backdropFilter: 'blur(10px)' }}>
          {clip.label}
        </Box>
      </Box> */}

      {/* Fullscreen hint on hover */}
      {hovered && (
        <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <Box sx={{ px: 2, py: 0.75, borderRadius: '9999px', bgcolor: 'rgba(201,168,76,0.2)', border: '1px solid rgba(201,168,76,0.4)', backdropFilter: 'blur(10px)', color: '#C9A84C', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Watch
          </Box>
        </Box>
      )}

      {/* Title */}
      {/* <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 2 }}>
        <Box sx={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '1.125rem', letterSpacing: '-0.01em', transition: 'color 0.3s ease', color: hovered ? '#C9A84C' : 'white' }}>
          {clip.title}
        </Box>
      </Box> */}

      {/* Gold border on hover */}
      <Box sx={{ position: 'absolute', inset: 0, borderRadius: '1rem', border: hovered ? '1px solid rgba(201,168,76,0.4)' : '1px solid rgba(255,255,255,0.08)', pointerEvents: 'none', transition: 'all 0.3s ease' }} />
    </ClipCard>
  );
};

export const ActingBits = () => {
  const testVideo = `${import.meta.env.BASE_URL}assets/video/hero.mp4`;
  const [pauseAnimation, setPauseAnimation] = useState(false);
  const [activeClip, setActiveClip] = useState<Clip | null>(null);

  // Drag-to-scroll state
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
    if (containerRef.current) {
      containerRef.current.style.scrollSnapType = 'none';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2; // multiply scroll-speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.scrollSnapType = 'x mandatory';
    }
  };

  const clips: Clip[] = [
    { title: 'Shadow Protocol',    label: 'Thriller', videoSrc: `${import.meta.env.BASE_URL}assets/Acting/reel/reelItem.mp4` },
    { title: 'City of Gold',       label: 'Crime',    videoSrc: `${import.meta.env.BASE_URL}assets/Acting/reel/reelItem2.mp4` },
    { title: 'The Last Stand',     label: 'Action',   videoSrc: `${import.meta.env.BASE_URL}assets/Acting/reel/reelItem3.mp4` },
    { title: 'Midnight Chase',     label: 'Thriller', videoSrc: `${import.meta.env.BASE_URL}assets/Acting/reel/reelItem4.mp4` },
    { title: 'Midnight Chase',     label: 'Thriller', videoSrc: `${import.meta.env.BASE_URL}assets/Acting/reel/reelItem5.mp4` },
    { title: 'Midnight Chase',     label: 'Thriller', videoSrc: `${import.meta.env.BASE_URL}assets/Acting/reel/reelItem6.mp4` },
     { title: 'Midnight Chase',     label: 'Thriller', videoSrc: `${import.meta.env.BASE_URL}assets/Acting/reel/COMEDY.mp4` },
      { title: 'Midnight Chase',     label: 'Thriller', videoSrc: `${import.meta.env.BASE_URL}assets/Acting/reel/MAHADEV.mp4` },
      { title: 'Midnight Chase',     label: 'Thriller', videoSrc: `${import.meta.env.BASE_URL}assets/Acting/reel/IMG_5908.mp4` }
  ];

  return (
    <>
      <CarouselSection>
        <CarouselContainer
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          sx={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <CarouselFade side="left" />
          <CarouselFade side="right" />
          <CarouselTrack paused={pauseAnimation || !!activeClip}>
            {clips.map((clip, i) => (
              <ClipCardComponent key={i} clip={clip} onHoverChange={setPauseAnimation} onOpen={() => setActiveClip(clip)} />
            ))}
            {clips.map((clip, i) => (
              <ClipCardComponent key={`dup-${i}`} clip={clip} onHoverChange={setPauseAnimation} onOpen={() => setActiveClip(clip)} />
            ))}
          </CarouselTrack>
        </CarouselContainer>
      </CarouselSection>

      <AnimatePresence>
        {activeClip && (
          <VideoLightbox clip={activeClip} onClose={() => setActiveClip(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

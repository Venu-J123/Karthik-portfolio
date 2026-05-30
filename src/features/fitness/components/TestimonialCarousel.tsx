import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  CarouselContainer,
  CarouselFade,
  CarouselScrollTrack,
} from '../../home/Home.style';

interface Testimonial {
  name: string;
  results: string;
  image: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

// SVG tile for sprocket holes — white rounded rectangle on transparent background
const SPROCKET_SIZE = 20;
const sprocketSvg = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${SPROCKET_SIZE}" height="${SPROCKET_SIZE}">` +
  `<rect x="4" y="5" width="12" height="10" rx="2" fill="rgba(212,175,55,0.18)"/>` +
  `</svg>`
)}`;

const SprocketRow = () => (
  <Box
    sx={{
      height: `${SPROCKET_SIZE}px`,
      alignSelf: 'stretch',
      background: '#071525',
      backgroundImage: `url("${sprocketSvg}")`,
      backgroundRepeat: 'repeat-x',
      backgroundSize: `${SPROCKET_SIZE}px ${SPROCKET_SIZE}px`,
      backgroundPosition: '0 0',
      flexShrink: 0,
    }}
  />
);

export const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const rafId = useRef<number>(0);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const tick = () => {
      if (!isPaused.current && !isDragging.current) {
        el.scrollLeft += 0.6;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft -= el.scrollWidth / 2;
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      hasDragged.current = false;
      dragStartX.current = e.pageX - el.offsetLeft;
      dragScrollLeft.current = el.scrollLeft;
      el.style.cursor = 'grabbing';
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const walk = (e.pageX - el.offsetLeft) - dragStartX.current;
      if (Math.abs(walk) > 5) hasDragged.current = true;
      el.scrollLeft = dragScrollLeft.current - walk;
    };

    const onMouseUp = () => {
      isDragging.current = false;
      el.style.cursor = 'grab';
    };

    const onClickCapture = (e: MouseEvent) => {
      if (hasDragged.current) e.stopPropagation();
    };

    const onTouchStart = () => { isPaused.current = true; };
    const onTouchEnd = () => { isPaused.current = false; };

    el.addEventListener('scroll', onScroll);
    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseup', onMouseUp);
    el.addEventListener('mouseleave', onMouseUp);
    el.addEventListener('click', onClickCapture, true);
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });

    rafId.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId.current);
      el.removeEventListener('scroll', onScroll);
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseup', onMouseUp);
      el.removeEventListener('mouseleave', onMouseUp);
      el.removeEventListener('click', onClickCapture, true);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setExpandedImage(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleCardClick = (image: string) => {
    if (!hasDragged.current) setExpandedImage(image);
  };

  const renderFrames = (disabled: boolean) =>
    testimonials.map((t, index) => (
      <Box
        key={disabled ? `dup-${index}` : index}
        component={motion.div}
        whileHover={!disabled ? { scale: 1.03, zIndex: 2 } : {}}
        onClick={() => !disabled && handleCardClick(t.image)}
        sx={{
          width: { xs: '160px', sm: '210px', md: '260px' },
          flexShrink: 0,
          cursor: disabled ? 'default' : 'pointer',
          border: '3px solid #0d2035',
          outline: '1px solid rgba(255,255,255,0.08)',
          overflow: 'hidden',
          position: 'relative',
          transition: 'border-color 0.2s',
          '&:hover': !disabled ? { borderColor: 'rgba(212,175,55,0.6)' } : {},
        }}
      >
        <img
          src={t.image}
          alt={t.name}
          style={{
            width: '100%',
            aspectRatio: '3/4',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />
        {/* Frame number overlay */}
        {!disabled && (
          <Box sx={{
            position: 'absolute',
            bottom: 4,
            right: 6,
            fontSize: '9px',
            color: 'rgba(255,255,255,0.3)',
            fontFamily: 'monospace',
            letterSpacing: '0.1em',
          }}>
            {String(index + 1).padStart(2, '0')}A
          </Box>
        )}
      </Box>
    ));

  return (
    <>
      <CarouselContainer sx={{
        height: { xs: '340px', sm: '420px', md: '500px' },
        transform: { xs: 'translateY(5rem)', sm: 'translateY(4rem)', md: 'translateY(4rem)' },
      }}>
        <CarouselFade className="left" />
        <CarouselFade className="right" />

        <CarouselScrollTrack ref={trackRef}>
          {/* Film strip */}
          <Box sx={{
            display: 'inline-flex',
            flexDirection: 'column',
            minWidth: 'max-content',
            background: '#071525',
            boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
          }}>
            {/* Top sprocket holes */}
            <SprocketRow />

            {/* Thin separator line */}
            <Box sx={{ height: '3px', background: 'rgba(212,175,55,0.15)', alignSelf: 'stretch', flexShrink: 0 }} />

            {/* Image frames */}
            <Box sx={{
              display: 'flex',
              gap: '6px',
              px: '6px',
              py: '6px',
              background: '#071525',
              alignItems: 'stretch',
            }}>
              {renderFrames(false)}
              {renderFrames(true)}
            </Box>

            {/* Thin separator line */}
            <Box sx={{ height: '3px', background: 'rgba(212,175,55,0.15)', alignSelf: 'stretch', flexShrink: 0 }} />

            {/* Bottom sprocket holes */}
            <SprocketRow />
          </Box>
        </CarouselScrollTrack>
      </CarouselContainer>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setExpandedImage(null)}
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
            <Box
              onClick={(e) => { e.stopPropagation(); setExpandedImage(null); }}
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
              }}
            >
              <CloseIcon sx={{ color: 'white', fontSize: 20 }} />
            </Box>

            <motion.img
              src={expandedImage}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '12px',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

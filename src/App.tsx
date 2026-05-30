import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './config/theme.config';
import { PAGES, PageType } from './config/constants';
import { Navigation } from './shared/components/Navigation';
import { Footer } from './shared/components/Footer';
import { Layout } from './shared/components/Layout';
import { GlobalWhatsAppButton } from './shared/components/WhatsAppButton';
import { Home } from './features/home/Home';
import { Fitness } from './features/fitness/Fitness';
import { Acting } from './features/acting/Acting';
import { Wildlife } from './features/wildlife/Wildlife';
import { Journey } from './features/journey/Journey';
import { Contact } from './features/contact/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(PAGES.HOME as PageType);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case PAGES.HOME:
        return <Home setPage={setCurrentPage} />;
      case PAGES.FITNESS:
        return <Fitness setPage={setCurrentPage} />;
      case PAGES.ACTING:
        return <Acting setPage={setCurrentPage} />;
      case PAGES.WILDLIFE:
        return <Wildlife setPage={setCurrentPage} />;
      case PAGES.JOURNEY:
        return <Journey setPage={setCurrentPage} />;
      case PAGES.CONTACT:
        return <Contact />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Navigation currentPage={currentPage} setPage={setCurrentPage} />
        <Box
          sx={{
            flex: 1,
            width: '100%',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </Box>
        <Footer setPage={setCurrentPage} />
        <GlobalWhatsAppButton />
        
      </Layout>
    </ThemeProvider>
  );
}

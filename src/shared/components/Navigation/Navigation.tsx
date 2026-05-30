import { useState, useEffect, memo, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, Close } from '@mui/icons-material';
import { Box } from '@mui/material';
import * as Styles from './Navigation.style';
import { PageType, NAV_ITEMS } from '../../../config/constants';
import { useOptimizedScroll } from '../../hooks';

interface NavigationProps {
  currentPage: PageType;
  setPage: (page: PageType) => void;
}

const NavigationComponent = ({ currentPage, setPage }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled, scrollProgress } = useOptimizedScroll({ offset: 50, throttleMs: 100 });

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNav = useCallback((page: PageType) => {
    setPage(page);
    setIsMobileMenuOpen(false);
  }, [setPage]);

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <>
      <Styles.NavBar className={isScrolled ? 'scrolled' : ''}>
        <Styles.NavContainer>
          {/* Brand Button */}
          <Styles.BrandButton
            onClick={() => handleNav('home')}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <div className="brand-logo">K</div>
            <div className="brand-text">
              <p className="brand-name">KARTHIK</p>
              <p className="brand-sub">ACHARYA</p>
            </div>
          </Styles.BrandButton>

          {/* Spacer */}
          <Styles.Spacer />

          {/* Desktop Navigation */}
          <Styles.DesktopNav>
            {NAV_ITEMS.map((item, i) => (
              <Styles.NavLink
                key={item.id}
                className={currentPage === item.id ? 'active' : ''}
                onClick={() => handleNav(item.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
              >
                {item.label}
              </Styles.NavLink>
            ))}
          </Styles.DesktopNav>

          {/* Mobile Menu Button */}
          <Styles.MobileMenuButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu sx={{ fontSize: 24 }} />
          </Styles.MobileMenuButton>

          {/* Scroll Progress Bar */}
          <Styles.ScrollProgressBar style={{ width: `${scrollProgress}%` }} />
        </Styles.NavContainer>
      </Styles.NavBar>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <Styles.MobileMenuBackdrop
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <Styles.MobileDrawer
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Header */}
              <Styles.DrawerHeader>
                <Styles.DrawerTitle>
                  <div className="drawer-logo">K</div>
                  <div className="drawer-text">
                    <div className="drawer-name">KARTHIK</div>
                    <div className="drawer-sub">ACHARYA</div>
                  </div>
                </Styles.DrawerTitle>
                <Styles.DrawerCloseButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Close sx={{ fontSize: 24 }} />
                </Styles.DrawerCloseButton>
              </Styles.DrawerHeader>

              {/* Navigation Links */}
              <Styles.DrawerNav>
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Styles.DrawerNavLink
                      className={currentPage === item.id ? 'active' : ''}
                      onClick={() => handleNav(item.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </Styles.DrawerNavLink>
                  </motion.div>
                ))}
              </Styles.DrawerNav>
            </Styles.MobileDrawer>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export const Navigation = memo(NavigationComponent);
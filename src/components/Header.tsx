'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { navigation } from '@/lib/constants';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.inner} container`}>
        <Link href="/" className={styles.logo}>
          <motion.span
            className={styles.logoText}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            KV
          </motion.span>
          <span className={styles.logoDot} />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
            >
              {item.name}
              {pathname === item.href && (
                <motion.span
                  className={styles.activeIndicator}
                  layoutId="navIndicator"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className={`${styles.mobileToggle} ${mobileOpen ? styles.open : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              className={styles.mobileNav}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {navigation.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`${styles.mobileNavLink} ${pathname === item.href ? styles.active : ''}`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

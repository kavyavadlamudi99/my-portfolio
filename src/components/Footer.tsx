'use client';

import React from 'react';
import Link from 'next/link';
import { personalInfo, navigation } from '@/lib/constants';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} />
      <div className={`${styles.inner} container`}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <span className={styles.logo}>KV<span className={styles.logoDot}>.</span></span>
            <p className={styles.tagline}>{personalInfo.tagline}</p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Pages</h4>
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className={styles.link}>
                  {item.name}
                </Link>
              ))}
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Connect</h4>
              <a href={`mailto:${personalInfo.email}`} className={styles.link}>Email</a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} {personalInfo.name}
          </p>
          <p className={styles.builtWith}>
            Built with Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

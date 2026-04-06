'use client';

import { personalInfo } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { GlowCard } from '@/components/animations/GlowCard';
import { TextReveal } from '@/components/animations/TextReveal';
import { ParticleNetwork } from '@/components/animations/ParticleNetwork';
import { EnvelopeIcon, PhoneIcon, BriefcaseIcon, MonitorIcon, EarthIcon, OfficeBuildingIcon, AirplaneIcon } from '@/components/icons';
import { motion } from 'framer-motion';
import styles from './page.module.css';

const contactMethods = [
  {
    icon: EnvelopeIcon,
    title: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: '#3b82f6',
  },
  {
    icon: PhoneIcon,
    title: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/[^0-9]/g, '')}`,
    color: '#10b981',
  },
  {
    icon: BriefcaseIcon,
    title: 'LinkedIn',
    value: 'View Profile',
    href: personalInfo.linkedin,
    external: true,
    color: '#0077b5',
  },
  {
    icon: MonitorIcon,
    title: 'GitHub',
    value: 'View Code',
    href: personalInfo.github,
    external: true,
    color: '#8b5cf6',
  },
];

const availabilityTags = [
  { label: 'Full-time', icon: BriefcaseIcon },
  { label: 'Remote', icon: EarthIcon },
  { label: 'On-site', icon: OfficeBuildingIcon },
  { label: 'Relocation', icon: AirplaneIcon },
];

export default function Contact() {
  return (
    <div className={styles.contact}>
      {/* Hero */}
      <section className={styles.hero}>
        <ParticleNetwork
          className={styles.particles}
          particleCount={40}
          particleColor="59, 130, 246"
          lineColor="59, 130, 246"
          speed={0.2}
        />
        <div className={styles.heroGlow} />

        <div className="container">
          <div className={styles.heroContent}>
            <ScrollReveal>
              <span className="section-label">Contact</span>
            </ScrollReveal>
            <TextReveal
              text="Let's build something great"
              as="h1"
              className={styles.heroTitle}
              gradient
              delay={0.2}
            />
            <ScrollReveal delay={0.5}>
              <p className={styles.heroDesc}>
                Looking for a full stack developer who can architect scalable systems,
                migrate legacy codebases, or build high-performance APIs? Let&apos;s connect.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className={styles.methodsSection}>
        <div className="container">
          <div className={styles.methodsGrid}>
            {contactMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <a
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                    className={styles.methodLink}
                  >
                    <GlowCard
                      className={styles.methodCard}
                      glowColor={`${method.color}22`}
                    >
                      <span className={styles.methodIcon}>
                        <Icon size={28} />
                      </span>
                      <div className={styles.methodInfo}>
                        <span className={styles.methodTitle}>{method.title}</span>
                        <span className={styles.methodValue}>{method.value}</span>
                      </div>
                      <span className={styles.methodArrow}>→</span>
                    </GlowCard>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>

          {/* CTA */}
          <ScrollReveal delay={0.3}>
            <div className={styles.ctaCard}>
              <div className={styles.ctaGlow} />
              <h2 className={styles.ctaTitle}>Ready to get started?</h2>
              <p className={styles.ctaText}>
                Drop me an email and I&apos;ll get back to you as soon as possible.
              </p>
              <a href={`mailto:${personalInfo.email}`}>
                <Button variant="primary" size="lg">Send an Email</Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Availability */}
      <section className={styles.availability}>
        <div className="container">
          <ScrollReveal>
            <GlowCard className={styles.availabilityCard}>
              <div className={styles.availabilityBadge}>
                <motion.span
                  className={styles.statusDot}
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>Open to Opportunities</span>
              </div>

              <h2 className={styles.availabilityTitle}>
                Available for New Roles
              </h2>
              <p className={styles.availabilityText}>
                Based in the United States. Interested in roles involving backend architecture,
                system modernization, and building high-scale distributed systems.
              </p>

              <div className={styles.tags}>
                {availabilityTags.map((tag, i) => {
                  const Icon = tag.icon;
                  return (
                    <motion.span
                      key={i}
                      className={styles.tag}
                      whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.3)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <span><Icon size={16} /></span>
                      <span>{tag.label}</span>
                    </motion.span>
                  );
                })}
              </div>
            </GlowCard>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

'use client';

import { about, skills, education, experience } from '@/lib/constants';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';
import { GlowCard } from '@/components/animations/GlowCard';
import { TextReveal } from '@/components/animations/TextReveal';
import { AnimatedCounter } from '@/components/animations/AnimatedCounter';
import { BoltIcon, CloudIcon, BuildingIcon, UsersIcon, DiamondIcon, GraduationCapIcon, LocationIcon, CalendarIcon, StarIcon } from '@/components/icons';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './page.module.css';

const expertiseIcons: Record<string, React.ComponentType<any>> = {
  'Backend Engineering': BoltIcon,
  'Cloud & Infrastructure': CloudIcon,
  'Domain Experience': BuildingIcon,
  'Technical Leadership': UsersIcon,
};

const skillCategories = [
  { title: 'Languages', items: skills.languages, color: '#3b82f6' },
  { title: 'Backend & APIs', items: skills.backend, color: '#8b5cf6' },
  { title: 'Frontend', items: skills.frontend, color: '#06b6d4' },
  { title: 'Databases', items: skills.databases, color: '#10b981' },
  { title: 'Cloud & DevOps', items: skills.cloud, color: '#f59e0b' },
  { title: 'Specializations', items: skills.specializations, color: '#f43f5e' },
];

function TimelineDot() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className={styles.timelineDot}
      initial={{ scale: 0 }}
      animate={isInView ? { scale: 1 } : undefined}
      transition={{ duration: 0.5, type: 'spring' }}
    />
  );
}

export default function About() {
  return (
    <div className={styles.about}>
      {/* Hero Introduction */}
      <section className={styles.intro}>
        <div className={styles.introGlow} />
        <div className="container">
          <ScrollReveal>
            <span className="section-label">About Me</span>
          </ScrollReveal>
          <TextReveal
            text="Building systems that scale"
            as="h1"
            className={styles.pageTitle}
            gradient
            delay={0.2}
          />

          <div className={styles.introContent}>
            <div className={styles.introText}>
              <ScrollReveal delay={0.3}>
                <p className={styles.introParagraph}>{about.introduction}</p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p className={styles.introParagraph}>{about.approach}</p>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <p className={styles.introParagraph}>{about.current}</p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.5} direction="right">
              <div className={styles.introHighlights}>
                <div className={styles.highlight}>
                  <AnimatedCounter value="5+" className={styles.highlightNumber} />
                  <span className={styles.highlightLabel}>Years Building Enterprise Systems</span>
                </div>
                <div className={styles.highlight}>
                  <AnimatedCounter value="10M+" className={styles.highlightNumber} />
                  <span className={styles.highlightLabel}>Daily Transactions Handled</span>
                </div>
                <div className={styles.highlight}>
                  <AnimatedCounter value="3.8" className={styles.highlightNumber} />
                  <span className={styles.highlightLabel}>GPA - Master&apos;s in CS</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className={styles.expertiseSection}>
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Expertise</span>
            <h2 className="section-title">Core Competencies</h2>
          </ScrollReveal>

          <StaggerContainer className={styles.expertiseGrid}>
            {about.expertise.map((item, index) => {
              const Icon = expertiseIcons[item.area] || DiamondIcon;
              return (
                <StaggerItem key={index}>
                  <GlowCard className={styles.expertiseCard}>
                    <span className={styles.expertiseIcon}>
                      <Icon size={28} />
                    </span>
                    <h3 className={styles.expertiseArea}>{item.area}</h3>
                    <p className={styles.expertiseDescription}>{item.description}</p>
                  </GlowCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Technical Skills - Visual */}
      <section className={styles.skillsSection}>
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Tech Stack</span>
            <h2 className="section-title">Technical Skills</h2>
          </ScrollReveal>

          <StaggerContainer className={styles.skillsGrid}>
            {skillCategories.map((category, index) => (
              <StaggerItem key={index}>
                <div className={styles.skillCategory}>
                  <div className={styles.categoryHeader}>
                    <div
                      className={styles.categoryDot}
                      style={{ background: category.color }}
                    />
                    <h3 className={styles.categoryTitle}>{category.title}</h3>
                  </div>
                  <div className={styles.skillTags}>
                    {category.items.map((skill, i) => (
                      <motion.span
                        key={i}
                        className={styles.skillTag}
                        whileHover={{
                          borderColor: category.color,
                          color: category.color,
                          boxShadow: `0 0 20px ${category.color}20`,
                          scale: 1.05,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className={styles.timelineSection}>
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Journey</span>
            <h2 className="section-title">Experience</h2>
          </ScrollReveal>

          <div className={styles.timeline}>
            {experience.map((job, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineLine}>
                    <TimelineDot />
                  </div>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelinePeriod}>{job.period}</span>
                    <span className={styles.timelineLocation}>{job.location}</span>
                  </div>
                  <GlowCard className={styles.timelineCard}>
                    <h3 className={styles.timelineRole}>{job.role}</h3>
                    <p className={styles.timelineCompany}>{job.company}</p>
                    <ul className={styles.achievementsList}>
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>
                          <span className={styles.achievementIcon}>→</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </GlowCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className={styles.educationSection}>
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Education</span>
            <h2 className="section-title">Academic Background</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <GlowCard className={styles.educationCard}>
              <div className={styles.educationIcon}>
                <GraduationCapIcon size={32} />
              </div>
              <div className={styles.educationContent}>
                <h3 className={styles.degree}>{education.degree}</h3>
                <p className={styles.institution}>{education.institution}</p>
                <div className={styles.educationMeta}>
                  <span className={styles.educationDetail}>
                    <LocationIcon size={16} /> {education.location}
                  </span>
                  <span className={styles.educationDetail}>
                    <CalendarIcon size={16} /> {education.period}
                  </span>
                  <span className={styles.educationDetail}>
                    <StarIcon size={16} /> GPA: {education.gpa}
                  </span>
                </div>
              </div>
            </GlowCard>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

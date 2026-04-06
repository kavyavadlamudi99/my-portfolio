'use client';

import Link from 'next/link';
import { personalInfo, experience, skills, projects } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';
import { ParticleNetwork } from '@/components/animations/ParticleNetwork';
import { GlowCard } from '@/components/animations/GlowCard';
import { AnimatedCounter } from '@/components/animations/AnimatedCounter';
import { TextReveal, LineReveal } from '@/components/animations/TextReveal';
import { FloatingShapes } from '@/components/animations/FloatingShapes';
import { BoltIcon, CloudIcon, BuildingIcon, CalendarIcon, RocketIcon, GlobeIcon, ChartDownIcon } from '@/components/icons';
import { ConstellationViz } from '@/components/ConstellationViz';
import { motion } from 'framer-motion';
import styles from './page.module.css';

const expertiseAreas = [
  {
    icon: BoltIcon,
    title: 'Backend Systems',
    description: 'Microservices architecture with Spring Boot, event-driven systems using Kafka, and high-performance APIs handling millions of requests.',
    techs: skills.backend.slice(0, 4),
    gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
  },
  {
    icon: CloudIcon,
    title: 'Cloud & DevOps',
    description: 'Deploying scalable applications on AWS and Azure with Docker and Kubernetes, automated CI/CD pipelines for rapid delivery.',
    techs: skills.cloud.slice(0, 4),
    gradient: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
  },
  {
    icon: BuildingIcon,
    title: 'Domain Knowledge',
    description: 'Deep experience in financial services, healthcare, and insurance with understanding of compliance, security, and industry standards.',
    techs: skills.specializations.slice(0, 4),
    gradient: 'linear-gradient(135deg, #06b6d4, #10b981)',
  },
];

const stats = [
  { value: '5+', label: 'Years Experience', icon: CalendarIcon },
  { value: '10M+', label: 'Requests/Day', icon: RocketIcon },
  { value: '3', label: 'Industry Domains', icon: GlobeIcon },
  { value: '60%', label: 'Cost Reduction', icon: ChartDownIcon },
];

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <ParticleNetwork className={styles.particles} />
        <FloatingShapes />
        <div className={styles.heroGlow} />

        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={styles.greeting}
              >
                <span className={styles.greetingLine} />
                <span>Hi, I&apos;m</span>
              </motion.div>

              <TextReveal
                text={personalInfo.name}
                as="h1"
                className={styles.name}
                gradient
                delay={0.4}
              />

              <LineReveal delay={0.8}>
                <h2 className={styles.title}>{personalInfo.title}</h2>
              </LineReveal>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className={styles.tagline}
              >
                {personalInfo.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className={styles.cta}
              >
                <Link href="/projects">
                  <Button variant="primary" size="lg">View Projects</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary" size="lg">Get in Touch</Button>
                </Link>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className={styles.statsGrid}
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className={styles.stat}>
                    <span className={styles.statIcon}>
                      <Icon size={28} />
                    </span>
                    <AnimatedCounter value={stat.value} className={styles.statNumber} />
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                );
              })}
            </motion.div>

            {/* Constellation Viz */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.6, ease: [0.25, 0.4, 0, 1] }}
              className={styles.constellationWrap}
            >
              <div className={styles.constellationLabel}>
                <span className={styles.constellationLabelLine} />
                <span>Tech Constellation</span>
              </div>
              <ConstellationViz className={styles.constellation} />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className={styles.scrollIndicator}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className={styles.scrollLine} />
        </motion.div>
      </section>

      {/* Expertise Section */}
      <section className={styles.expertise}>
        <div className={styles.expertiseGlow} />
        <div className="container">
          <ScrollReveal>
            <span className="section-label">What I Do</span>
            <h2 className="section-title">Technical Expertise</h2>
          </ScrollReveal>

          <StaggerContainer className={styles.expertiseGrid}>
            {expertiseAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <StaggerItem key={i}>
                  <GlowCard className={styles.expertiseCard}>
                    <div className={styles.cardIcon} style={{ background: area.gradient }}>
                      <Icon size={32} />
                    </div>
                    <h3 className={styles.expertiseTitle}>{area.title}</h3>
                    <p className={styles.expertiseDesc}>{area.description}</p>
                    <div className={styles.techList}>
                      {area.techs.map((tech, j) => (
                        <span key={j} className={styles.techItem}>{tech}</span>
                      ))}
                    </div>
                  </GlowCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={`${styles.featured} section`}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <div>
                <span className="section-label">Selected Work</span>
                <h2 className="section-title">Featured Projects</h2>
              </div>
              <Link href="/projects" className={styles.viewAll}>
                <Button variant="ghost" size="md">View all projects →</Button>
              </Link>
            </div>
          </ScrollReveal>

          <div className={styles.projectsShowcase}>
            {projects.slice(0, 3).map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.15}>
                <GlowCard className={styles.projectCard}>
                  <div className={styles.projectNumber}>0{i + 1}</div>
                  <div className={styles.projectCardContent}>
                    <span className={styles.projectCategory}>{project.category}</span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDesc}>{project.description}</p>
                    <div className={styles.projectImpact}>
                      {project.impact.slice(0, 2).map((item, j) => (
                        <div key={j} className={styles.impactItem}>
                          <span className={styles.impactIcon}>✦</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className={styles.projectTechs}>
                      {project.technologies.slice(0, 5).map((tech, j) => (
                        <span key={j} className={styles.projectTech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className={styles.experienceSection}>
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Career</span>
            <h2 className="section-title">Recent Experience</h2>
          </ScrollReveal>

          <div className={styles.experienceGrid}>
            {experience.slice(0, 2).map((job, i) => (
              <ScrollReveal key={i} delay={i * 0.2}>
                <GlowCard className={styles.experienceCard}>
                  <div className={styles.expHeader}>
                    <span className={styles.expPeriod}>{job.period}</span>
                    <span className={styles.expLocation}>{job.location}</span>
                  </div>
                  <h3 className={styles.expRole}>{job.role}</h3>
                  <p className={styles.expCompany}>{job.company}</p>
                  <ul className={styles.expAchievements}>
                    {job.achievements.slice(0, 3).map((achievement, j) => (
                      <li key={j}>
                        <span className={styles.achievementArrow}>→</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className="container">
          <ScrollReveal>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Ready to build something <span className="gradient-text">extraordinary</span>?
              </h2>
              <p className={styles.ctaText}>
                I&apos;m open to new opportunities where I can make a meaningful technical impact on enterprise systems.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact">
                  <Button variant="primary" size="lg">Let&apos;s Talk</Button>
                </Link>
                <Link href="/about">
                  <Button variant="secondary" size="lg">Learn More About Me</Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

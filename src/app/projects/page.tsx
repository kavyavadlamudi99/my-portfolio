'use client';

import { useState } from 'react';
import { projects } from '@/lib/constants';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';
import { GlowCard } from '@/components/animations/GlowCard';
import { TextReveal } from '@/components/animations/TextReveal';
import { TargetIcon, LightbulbIcon } from '@/components/icons';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './page.module.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  const selected = selectedProject !== null
    ? projects.find(p => p.id === selectedProject)
    : null;

  return (
    <div className={styles.projects}>
      {/* Header */}
      <section className={styles.header}>
        <div className={styles.headerGlow} />
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Portfolio</span>
          </ScrollReveal>
          <TextReveal
            text="Impact-driven projects"
            as="h1"
            className={styles.pageTitle}
            gradient
            delay={0.2}
          />
          <ScrollReveal delay={0.4}>
            <p className={styles.pageDescription}>
              Each project solved real business challenges with measurable outcomes across
              financial services, healthcare, and enterprise systems.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className={styles.filters}>
        <div className="container">
          <div className={styles.filterButtons}>
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`${styles.filterBtn} ${filter === category ? styles.active : ''}`}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                layout
              >
                {filter === category && (
                  <motion.div
                    className={styles.filterActiveBackground}
                    layoutId="activeFilter"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className={styles.filterText}>{category}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={styles.gridSection}>
        <div className="container">
          <motion.div className={styles.projectsGrid} layout>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <GlowCard
                    className={styles.projectCard}
                    onClick={() => setSelectedProject(project.id)}
                  >
                    <div className={styles.cardTop}>
                      <span className={styles.cardCategory}>{project.category}</span>
                      <span className={styles.cardArrow}>↗</span>
                    </div>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.cardDesc}>{project.description}</p>

                    <div className={styles.cardImpact}>
                      {project.impact.slice(0, 2).map((item, j) => (
                        <div key={j} className={styles.cardImpactItem}>
                          <span className={styles.cardImpactDot} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className={styles.cardTechs}>
                      {project.technologies.slice(0, 4).map((tech, j) => (
                        <span key={j} className={styles.cardTech}>{tech}</span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className={styles.cardTech}>+{project.technologies.length - 4}</span>
                      )}
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeBtn}
                onClick={() => setSelectedProject(null)}
              >
                <span>✕</span>
              </button>

              <div className={styles.modalInner}>
                {/* Header */}
                <div className={styles.modalHeader}>
                  <span className={styles.modalCategory}>{selected.category}</span>
                  <h2 className={styles.modalTitle}>{selected.title}</h2>
                  <p className={styles.modalDesc}>{selected.description}</p>
                </div>

                {/* Content Grid */}
                <div className={styles.modalGrid}>
                  <div className={styles.modalSection}>
                    <div className={styles.modalSectionIcon}>
                      <TargetIcon size={24} />
                    </div>
                    <h3 className={styles.modalSectionTitle}>Challenge</h3>
                    <p className={styles.modalSectionContent}>{selected.challenge}</p>
                  </div>

                  <div className={styles.modalSection}>
                    <div className={styles.modalSectionIcon}>
                      <LightbulbIcon size={24} />
                    </div>
                    <h3 className={styles.modalSectionTitle}>Solution</h3>
                    <p className={styles.modalSectionContent}>{selected.solution}</p>
                  </div>
                </div>

                {/* Impact */}
                <div className={styles.modalImpact}>
                  <h3 className={styles.modalSectionTitle}>Impact & Results</h3>
                  <div className={styles.impactCards}>
                    {selected.impact.map((item, i) => (
                      <div key={i} className={styles.impactCard}>
                        <span className={styles.impactCheck}>✦</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className={styles.modalFeatures}>
                  <h3 className={styles.modalSectionTitle}>Key Features</h3>
                  <div className={styles.featureGrid}>
                    {selected.keyFeatures.map((feature, i) => (
                      <div key={i} className={styles.featureItem}>
                        <span className={styles.featureArrow}>→</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className={styles.modalTech}>
                  <h3 className={styles.modalSectionTitle}>Technologies Used</h3>
                  <div className={styles.modalTechTags}>
                    {selected.technologies.map((tech, i) => (
                      <span key={i} className={styles.modalTechTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

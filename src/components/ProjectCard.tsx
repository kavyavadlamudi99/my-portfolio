import React from 'react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  impact: string[];
  onClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  technologies,
  impact,
  onClick
}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.header}>
        <span className={styles.category}>{category}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      
      <div className={styles.impact}>
        <h4 className={styles.impactTitle}>Impact</h4>
        <ul className={styles.impactList}>
          {impact.slice(0, 2).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
      <div className={styles.technologies}>
        {technologies.slice(0, 4).map((tech, index) => (
          <span key={index} className={styles.tech}>{tech}</span>
        ))}
        {technologies.length > 4 && (
          <span className={styles.tech}>+{technologies.length - 4}</span>
        )}
      </div>
    </div>
  );
};

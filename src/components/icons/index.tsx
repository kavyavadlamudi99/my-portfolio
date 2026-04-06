// SVG Icon Components
// These replace emoji icons throughout the portfolio

export interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export const BoltIcon = ({ size = 24, className = '', color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.2"/>
    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CloudIcon = ({ size = 24, className = '', color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.2"/>
    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BuildingIcon = ({ size = 24, className = '', color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CalendarIcon = ({ size = 24, className = '', color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="6" width="18" height="15" rx="2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.1"/>
    <path d="M16 2v4M8 2v4M3 10h18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const RocketIcon = ({ size = 24, className = '', color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M9 11l3 3L22 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20.24 4.46a10 10 0 01-13.78 13.78m0 0l-2.12 2.12a1 1 0 01-1.42 0l-2.83-2.83a1 1 0 010-1.42l2.12-2.12m4.25 4.25L4 20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.1"/>
    <circle cx="14.5" cy="9.5" r="2.5" stroke={color} strokeWidth="2"/>
  </svg>
);

export const GlobeIcon = ({ size = 24, className = '', color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChartDownIcon = ({ size = 24, className = '', color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 3v18h18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 17l-5-5-4 4-4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 13v4h-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.2"/>
  </svg>
);

export const UsersIcon = ({ size = 24, className = '', color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="7" r="4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.2"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const DiamondIcon = ({ size = 24, className = '', color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L2 12l10 10 10-10L12 2z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.2"/>
  </svg>
);

export const GraduationCapIcon = ({ size = 24, className = '', color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M22 10l-10-5-10 5 10 5 10-5z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.2"/>
    <path d="M6 12v5l6 3 6-3v-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LocationIcon = ({ size = 24, className = '', color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.1"/>
    <circle cx="12" cy="10" r="3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.2"/>
  </svg>
);

export const StarIcon = ({ size = 24, className = '', color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.3"/>
  </svg>
);

export const TargetIcon = ({ size = 24, className = '', color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.1"/>
    <circle cx="12" cy="12" r="2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.3"/>
  </svg>
);

export const LightbulbIcon = ({ size = 24, className = '', color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M9 18h6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 22h4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 2.5a6 6 0 00-6 6c0 2 .6 3.4 1.5 4.5.9 1.1 1.5 2 1.5 3.5h4c0-1.5.6-2.4 1.5-3.5.9-1.1 1.5-2.5 1.5-4.5a6 6 0 00-4-5.66" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.2"/>
  </svg>
);

export const EnvelopeIcon = ({ size = 24, className = '', color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.1"/>
    <path d="M22 7l-10 7L2 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PhoneIcon = ({ size = 24, className = '', color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="5" y="2" width="14" height="20" rx="2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.1"/>
    <path d="M12 18h.01" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BriefcaseIcon = ({ size = 24, className = '', color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="7" width="20" height="14" rx="2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.1"/>
    <path d="M16 7V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v3M8 12h8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MonitorIcon = ({ size = 24, className = '', color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="3" width="20" height="14" rx="2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.1"/>
    <path d="M8 21h8M12 17v4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const EarthIcon = ({ size = 24, className = '', color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.1"/>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12h20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 16h20M2 8h20" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
  </svg>
);

export const OfficeBuildingIcon = ({ size = 24, className = '', color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="4" y="2" width="16" height="20" rx="2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.1"/>
    <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const AirplaneIcon = ({ size = 24, className = '', color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M21 8l-8-4L3 8l10 4 8-4z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.2"/>
    <path d="M11 12L3 16l8 4 10-4-10-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

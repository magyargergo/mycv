'use server';

import { getResumeData } from './data';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
  Image,
  Svg,
  Path,
} from '@react-pdf/renderer';
import React from 'react';

// Type definitions for react-pdf components
type ReactPDFElement = React.ReactElement<any, any>;
type CreateElement = typeof React.createElement;

// Style interfaces
interface Styles {
  [key: string]: any;
}

// Data type interfaces
interface Role {
  title: string;
  duration: string;
  responsibilities: string[];
}

interface Company {
  name: string;
  totalDuration: string;
  roles: Role[];
}

interface ExperienceData {
  companies: Company[];
}

interface AboutData {
  content: string[];
}

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
}

interface EducationData {
  items: EducationItem[];
}

interface CertificationItem {
  name: string;
  issuer: string;
  issued?: string;
  verificationUrl?: string;
}

interface CertificationData {
  items: CertificationItem[];
}

interface Skill {
  name: string;
  level: string;
  keywords: string[];
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

interface SkillsData {
  title: string;
  categories: SkillCategory[];
  certifications: string[];
  businessSkills: string[];
}

interface ResumeData {
  about: AboutData;
  experience: ExperienceData;
  education: EducationData;
  certifications: CertificationData;
  skills: SkillsData;
}

// Component prop interfaces
interface ContactItemProps {
  type: keyof typeof iconPaths;
  text: string;
  url?: string;
}

interface StatItemProps {
  number: string;
  label: string;
}

interface AchievementItemProps {
  number: string;
  text: string;
}

interface SectionTitleProps {
  title: string;
}

// Component factory type definitions
type IconComponent = (type: keyof typeof iconPaths) => ReactPDFElement;
type ContactItemComponent = (props: ContactItemProps) => ReactPDFElement;
type StatItemComponent = (props: StatItemProps) => ReactPDFElement;
type AchievementItemComponent = (props: AchievementItemProps) => ReactPDFElement;
type SectionTitleComponent = (props: SectionTitleProps) => ReactPDFElement;
type MainSectionTitleComponent = (props: SectionTitleProps) => ReactPDFElement;
type SectionComponent = () => ReactPDFElement;

// React-PDF component types
type ViewComponent = typeof View;
type TextComponent = typeof Text;
type LinkComponent = typeof Link;
type ImageComponent = typeof Image;
type SvgComponent = typeof Svg;
type PathComponent = typeof Path;

// Icon paths configuration
const iconPaths = {
  email:
    'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
  phone:
    'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z',
  location:
    'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
  website:
    'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
  linkedin:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  github:
    'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
} as const;

// Unified Design System
const designSystem = {
  // Spacing scale (8px base unit - industry standard)
  space: {
    xs: 4, // 0.5 unit
    sm: 8, // 1 unit
    md: 12, // 1.5 units
    lg: 16, // 2 units
    xl: 24, // 3 units
    xxl: 32, // 4 units
    xxxl: 48, // 6 units
  },

  // Typography scale
  typography: {
    // Font sizes
    sizes: {
      xs: 7,
      sm: 9,
      base: 10,
      md: 11,
      lg: 12,
      xl: 14,
      xxl: 18, // Increased for better hierarchy
      xxxl: 22, // Increased for better hierarchy
    },
    // Line heights for readability
    lineHeights: {
      tight: 1.25,
      normal: 1.4,
      relaxed: 1.6,
    },
    // Font weights
    weights: {
      normal: 'normal',
      bold: 'bold',
    },
    // Letter spacing for clarity
    letterSpacing: {
      tight: -0.2,
      normal: 0,
      wide: 0.5,
      wider: 1,
    },
  },

  // Color palette
  colors: {
    // Primary colors
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
    },
    // Accent palette for vibrant highlights
    accent: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
    },
    // Neutral colors
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    // Semantic colors
    white: '#ffffff',
    black: '#000000',
  },

  // Border radius
  radius: {
    none: 0,
    sm: 2,
    base: 4,
    md: 6,
    lg: 8,
    xl: 12,
    full: 9999,
  },

  // Shadows and effects
  effects: {
    borderWidth: {
      thin: 1,
      medium: 2,
      thick: 3,
    },
  },
};

// Component factory functions
const createIcon =
  (el: CreateElement, Svg: SvgComponent, Path: PathComponent) => (type: keyof typeof iconPaths) =>
    el(
      Svg,
      { width: 14, height: 14, viewBox: '0 0 24 24' },
      el(Path, { d: iconPaths[type], fill: designSystem.colors.accent[600] })
    );

const createContactItem =
  (
    el: CreateElement,
    View: ViewComponent,
    Text: TextComponent,
    Link: LinkComponent,
    Icon: IconComponent,
    styles: Styles
  ) =>
  ({ type, text, url }: ContactItemProps) =>
    el(View, { style: styles.contactItem }, [
      el(View, { style: styles.contactIconContainer, key: 'icon' }, Icon(type)),
      url
        ? el(Link, { src: url, style: styles.contactText, key: 'text' }, text)
        : el(Text, { style: styles.contactText, key: 'text' }, text),
    ]);

const createStatItem =
  (el: CreateElement, View: ViewComponent, Text: TextComponent, styles: Styles) =>
  ({ number, label }: StatItemProps) =>
    el(View, { style: styles.bannerStat }, [
      el(Text, { style: styles.bannerStatNumber, key: 'num' }, number),
      el(Text, { style: styles.bannerStatText, key: 'text' }, label),
    ]);

const createAchievementItem =
  (el: CreateElement, View: ViewComponent, Text: TextComponent, styles: Styles) =>
  ({ number, text }: AchievementItemProps) =>
    el(View, { style: styles.achievementItem }, [
      el(Text, { style: styles.achievementNumber, key: 'num' }, number),
      el(Text, { style: styles.achievementText, key: 'text' }, text),
    ]);

const createSectionTitle =
  (el: CreateElement, Text: TextComponent, styles: Styles) =>
  ({ title }: SectionTitleProps) =>
    el(Text, { style: styles.sectionTitle }, title);

const createMainSectionTitle =
  (el: CreateElement, Text: TextComponent, styles: Styles) =>
  ({ title }: SectionTitleProps) =>
    el(Text, { style: styles.mainSectionTitle }, title);

// Main component sections
const createProfileSection =
  (
    el: CreateElement,
    View: ViewComponent,
    Image: ImageComponent,
    Text: TextComponent,
    styles: Styles,
    profileImagePath: string
  ) =>
  () =>
    el(View, { style: styles.profileSection }, [
      el(Image, { style: styles.profileImage, src: profileImagePath, key: 'avatar' }),
      el(Text, { style: styles.name, key: 'name' }, 'Gary Magyar'),
      el(Text, { style: styles.title, key: 'title' }, 'AWS Certified Senior Software Engineer'),
    ]);

const createContactSection =
  (
    el: CreateElement,
    View: ViewComponent,
    SectionTitle: SectionTitleComponent,
    ContactItem: ContactItemComponent
  ) =>
  () =>
    el(View, { style: { marginBottom: designSystem.space.xxl } }, [
      SectionTitle({ title: 'Contact' }),
      ContactItem({ type: 'email', text: 'gergomagyar@icloud.com' }),
      ContactItem({ type: 'phone', text: '+44 7951 225614' }),
      ContactItem({ type: 'location', text: 'Woking, UK' }),
      ContactItem({
        type: 'website',
        text: 'mycv.gergomagyar.com',
        url: 'https://mycv.gergomagyar.com',
      }),
      ContactItem({
        type: 'linkedin',
        text: 'linkedin.com/in/gergomagyar',
        url: 'https://linkedin.com/in/gergomagyar',
      }),
      ContactItem({
        type: 'github',
        text: 'github.com/magyargergo',
        url: 'https://github.com/magyargergo',
      }),
    ]);

const createAchievementsSection =
  (
    el: CreateElement,
    View: ViewComponent,
    SectionTitle: SectionTitleComponent,
    AchievementItem: AchievementItemComponent,
    styles: Styles
  ) =>
  () =>
    el(View, { style: styles.achievementsSection }, [
      SectionTitle({ title: 'Key Achievements' }),
      AchievementItem({ number: '25%', text: 'Reduction in Critical Incidents' }),
      AchievementItem({ number: '30%', text: 'Faster Deployment Times' }),
      AchievementItem({ number: '15%', text: 'Operational Cost Savings' }),
    ]);

const createHeaderBanner =
  (
    el: CreateElement,
    View: ViewComponent,
    Text: TextComponent,
    StatItem: StatItemComponent,
    styles: Styles
  ) =>
  () =>
    el(View, { style: styles.headerBanner }, [
      el(
        Text,
        { style: styles.bannerTagline, key: 'tagline' },
        'Delivering Technology Excellence • Business Impact'
      ),
      el(View, { style: styles.bannerStats, key: 'stats' }, [
        StatItem({ number: '9+', label: 'YEARS' }),
        StatItem({ number: '2', label: 'AWS CERTS' }),
        StatItem({ number: '25%', label: 'LESS INCIDENTS' }),
      ]),
    ]);

const createSidebar =
  (
    el: CreateElement,
    View: ViewComponent,
    ProfileSection: SectionComponent,
    ContactSection: SectionComponent,
    AchievementsSection: SectionComponent,
    SkillsSection: SectionComponent,
    styles: Styles
  ) =>
  () =>
    el(View, { style: styles.sidebar }, [
      ProfileSection(),
      ContactSection(),
      AchievementsSection(),
      SkillsSection(),
    ]);

const createProfessionalSummarySection =
  (
    el: CreateElement,
    View: ViewComponent,
    Text: TextComponent,
    MainSectionTitle: MainSectionTitleComponent,
    styles: Styles,
    data: ResumeData
  ) =>
  () =>
    el(View, { style: styles.mainSection }, [
      MainSectionTitle({ title: 'Professional Summary' }),
      ...data.about.content.map((paragraph: string, index: number) =>
        el(Text, { key: `para-${index}`, style: styles.aboutText }, paragraph)
      ),
    ]);

const createExperienceSection =
  (
    el: CreateElement,
    View: ViewComponent,
    Text: TextComponent,
    MainSectionTitle: MainSectionTitleComponent,
    styles: Styles,
    data: ExperienceData
  ) =>
  () =>
    el(View, { style: styles.mainSection }, [
      MainSectionTitle({ title: 'Professional Experience' }),
      ...data.companies.map((company: Company, companyIndex: number) =>
        el(View, { key: `company-${companyIndex}`, style: styles.experienceItem }, [
          el(View, { style: styles.companyHeader, key: 'header' }, [
            el(Text, { style: styles.companyName, key: 'name' }, company.name),
            el(Text, { style: styles.companyDuration, key: 'duration' }, company.totalDuration),
          ]),
          ...company.roles.map((role: Role, roleIndex: number) =>
            el(
              View,
              { key: `role-${roleIndex}`, style: { marginBottom: designSystem.space.sm + 4 } },
              [
                // Professional standard at 12px - optimal role separation
                el(
                  Text,
                  {
                    style:
                      roleIndex === 0
                        ? { ...styles.roleTitle, marginTop: designSystem.space.xs + 2 } // First role gets professional spacing (6px)
                        : styles.roleTitle,
                    key: 'title',
                  },
                  role.title
                ),
                el(Text, { style: styles.roleDuration, key: 'duration' }, role.duration),
                ...role.responsibilities.map((responsibility: string, respIndex: number) =>
                  el(
                    View,
                    { key: `resp-${respIndex}`, wrap: false },
                    el(
                      Text,
                      {
                        style:
                          respIndex === role.responsibilities.length - 1
                            ? styles.lastResponsibility
                            : styles.responsibility,
                      },
                      `• ${responsibility}`
                    )
                  )
                ),
              ]
            )
          ),
        ])
      ),
    ]);

const createEducationSection =
  (
    el: CreateElement,
    View: ViewComponent,
    Text: TextComponent,
    MainSectionTitle: MainSectionTitleComponent,
    styles: Styles,
    data: EducationData
  ) =>
  () =>
    el(View, { style: styles.mainSection }, [
      MainSectionTitle({ title: 'Education' }),
      ...data.items.map((item: EducationItem, index: number) =>
        el(View, { key: `edu-${index}`, style: styles.educationItem }, [
          el(Text, { style: styles.institution, key: 'institution' }, item.institution),
          el(Text, { style: styles.degree, key: 'degree' }, item.degree),
          el(Text, { style: styles.duration, key: 'duration' }, item.duration),
        ])
      ),
    ]);

const createCertificationsSection =
  (
    el: CreateElement,
    View: ViewComponent,
    Text: TextComponent,
    Link: LinkComponent,
    MainSectionTitle: MainSectionTitleComponent,
    styles: Styles,
    data: CertificationData
  ) =>
  () =>
    el(View, { style: styles.mainSection }, [
      MainSectionTitle({ title: 'Certifications' }),
      ...data.items.map((cert: CertificationItem, index: number) =>
        el(View, { key: `cert-${index}`, style: styles.certificationItem }, [
          el(Text, { style: styles.certificationName, key: 'name' }, cert.name),
          el(
            Text,
            { style: styles.certificationDetails, key: 'details' },
            `${cert.issuer}${cert.issued ? ` • ${cert.issued}` : ''}`
          ),
          ...(cert.verificationUrl
            ? [
                el(
                  Link,
                  { src: cert.verificationUrl, style: styles.link, key: 'link' },
                  'View Certificate'
                ),
              ]
            : []),
        ])
      ),
    ]);

const createSkillsSection =
  (
    el: CreateElement,
    View: ViewComponent,
    Text: TextComponent,
    SectionTitle: SectionTitleComponent,
    styles: Styles,
    data: SkillsData
  ) =>
  () =>
    el(View, { style: { marginBottom: designSystem.space.xxl } }, [
      SectionTitle({ title: 'Technical Skills' }),
      ...data.categories
        .slice(0, 4)
        .map((category: SkillCategory, categoryIndex: number) =>
          el(View, { key: `category-${categoryIndex}`, style: styles.sidebarSkillCategory }, [
            el(Text, { style: styles.sidebarSkillCategoryTitle, key: 'title' }, category.category),
            ...category.skills
              .slice(0, 4)
              .map((skill: Skill, skillIndex: number) =>
                el(View, { key: `skill-${skillIndex}`, style: styles.sidebarSkillItem }, [
                  el(Text, { style: styles.sidebarSkillName, key: 'name' }, skill.name),
                  el(Text, { style: styles.sidebarSkillLevel, key: 'level' }, skill.level),
                ])
              ),
          ])
        ),
      // Add condensed business skills
      el(View, { style: styles.sidebarBusinessSkillsSection, key: 'business-skills' }, [
        el(Text, { style: styles.sidebarSkillCategoryTitle, key: 'title' }, 'Leadership'),
        ...data.businessSkills
          .slice(0, 4)
          .map((skill: string, index: number) =>
            el(
              Text,
              { key: `business-skill-${index}`, style: styles.sidebarBusinessSkillItem },
              `• ${skill}`
            )
          ),
      ]),
    ]);

const createMainContent =
  (
    el: CreateElement,
    View: ViewComponent,
    ProfessionalSummarySection: SectionComponent,
    ExperienceSection: SectionComponent,
    EducationSection: SectionComponent,
    CertificationsSection: SectionComponent,
    styles: Styles
  ) =>
  () =>
    el(View, { style: styles.mainContent }, [
      ProfessionalSummarySection(),
      ExperienceSection(),
      EducationSection(),
      CertificationsSection(),
    ]);

export async function generateCVPDF(): Promise<Buffer> {
  try {
    const { renderToBuffer } = await import('@react-pdf/renderer');
    const React = await import('react');
    const pathModule = await import('path');
    const fs = await import('fs');

    const el = React.createElement;

    const styles = StyleSheet.create({
      // Page layout
      page: {
        paddingTop: designSystem.space.xxxl,
        paddingBottom: designSystem.space.xxxl,
        paddingLeft: 0,
        paddingRight: 0,
        fontFamily: 'Helvetica',
        fontSize: designSystem.typography.sizes.sm,
        lineHeight: designSystem.typography.lineHeights.normal,
        color: designSystem.colors.neutral[700],
        backgroundColor: designSystem.colors.neutral[50],
      },

      // Layout containers
      container: {
        flexDirection: 'row',
        flexGrow: 1,
      },
      sidebar: {
        width: 200,
        backgroundColor: designSystem.colors.neutral[800],
        padding: designSystem.space.xl,
        color: designSystem.colors.white,
      },
      mainContent: {
        flex: 1,
        padding: designSystem.space.xxl,
        paddingTop: designSystem.space.xl,
      },

      // Header banner
      headerBanner: {
        width: '100%',
        height: 60,
        backgroundColor: designSystem.colors.neutral[900],
        marginBottom: 0,
        marginTop: -designSystem.space.xxxl,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: designSystem.space.xxl,
      },
      bannerTagline: {
        fontSize: designSystem.typography.sizes.lg,
        fontStyle: 'italic',
        color: designSystem.colors.neutral[300],
        fontWeight: designSystem.typography.weights.normal,
      },
      bannerStats: {
        flexDirection: 'row',
        gap: designSystem.space.xl,
      },
      bannerStat: {
        alignItems: 'center',
      },
      bannerStatNumber: {
        fontSize: designSystem.typography.sizes.xxl,
        fontWeight: designSystem.typography.weights.bold,
        color: designSystem.colors.accent[500],
        marginBottom: designSystem.space.sm,
      },
      bannerStatText: {
        fontSize: designSystem.typography.sizes.xs,
        color: designSystem.colors.neutral[300],
        letterSpacing: designSystem.typography.letterSpacing.wide,
      },

      // Profile section
      profileSection: {
        marginBottom: designSystem.space.xxl,
        alignItems: 'center',
      },
      profileImage: {
        width: 80,
        height: 80,
        borderRadius: designSystem.radius.full,
        marginBottom: designSystem.space.lg,
        objectFit: 'cover',
        objectPosition: 'center 25%',
      },
      name: {
        fontSize: designSystem.typography.sizes.xxxl,
        fontWeight: designSystem.typography.weights.bold,
        color: designSystem.colors.white,
        marginBottom: designSystem.space.sm,
        textAlign: 'center',
        lineHeight: designSystem.typography.lineHeights.tight,
      },
      title: {
        fontSize: designSystem.typography.sizes.md,
        color: designSystem.colors.neutral[400],
        marginBottom: designSystem.space.xl,
        textAlign: 'center',
        fontWeight: designSystem.typography.weights.normal,
        lineHeight: designSystem.typography.lineHeights.normal,
      },

      // Section titles
      sectionTitle: {
        fontSize: designSystem.typography.sizes.base,
        fontWeight: designSystem.typography.weights.bold,
        color: designSystem.colors.accent[600],
        marginBottom: designSystem.space.lg,
        textTransform: 'uppercase',
        letterSpacing: designSystem.typography.letterSpacing.wide,
      },
      mainSectionTitle: {
        fontSize: designSystem.typography.sizes.xxl,
        fontWeight: designSystem.typography.weights.bold,
        color: designSystem.colors.neutral[800],
        marginBottom: designSystem.space.lg, // Reduced from xl (24px) to lg (16px)
        paddingBottom: designSystem.space.sm,
        borderBottomWidth: designSystem.effects.borderWidth.medium,
        borderBottomColor: designSystem.colors.primary[500],
        textTransform: 'uppercase',
        letterSpacing: designSystem.typography.letterSpacing.wider,
      },
      mainSection: {
        marginBottom: designSystem.space.lg, // Further reduced to lg (16px) for two-page layout
      },

      // Contact section
      contactSection: {
        marginBottom: designSystem.space.xxl,
      },
      contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: designSystem.space.md,
      },
      contactIconContainer: {
        width: 14,
        height: 14,
        marginRight: designSystem.space.lg,
        alignItems: 'center',
        justifyContent: 'center',
      },
      contactText: {
        fontSize: designSystem.typography.sizes.sm,
        color: designSystem.colors.neutral[300],
        flex: 1,
        lineHeight: designSystem.typography.lineHeights.normal,
      },

      // Achievements section
      achievementsSection: {
        marginBottom: designSystem.space.xxl,
      },
      achievementItem: {
        backgroundColor: designSystem.colors.neutral[900],
        padding: designSystem.space.lg,
        borderRadius: designSystem.radius.base,
        marginBottom: designSystem.space.md,
        borderLeftWidth: designSystem.effects.borderWidth.thick,
        borderLeftColor: designSystem.colors.primary[500],
      },
      achievementNumber: {
        fontSize: designSystem.typography.sizes.xxl,
        fontWeight: designSystem.typography.weights.bold,
        color: designSystem.colors.primary[500],
        marginBottom: designSystem.space.xs,
        lineHeight: designSystem.typography.lineHeights.tight,
      },
      achievementText: {
        fontSize: designSystem.typography.sizes.sm,
        color: designSystem.colors.neutral[300],
        lineHeight: designSystem.typography.lineHeights.normal,
      },

      // Experience section - Two-page optimized spacing
      experienceItem: {
        marginBottom: designSystem.space.md + 2, // 14px - compact for two-page layout
      },
      companyHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: designSystem.space.sm + 2, // 10px - balanced header-to-content spacing
      },
      companyName: {
        fontSize: designSystem.typography.sizes.lg,
        fontWeight: designSystem.typography.weights.bold,
        color: designSystem.colors.neutral[800],
        lineHeight: designSystem.typography.lineHeights.tight,
      },
      companyDuration: {
        fontSize: designSystem.typography.sizes.sm,
        color: designSystem.colors.accent[700],
        backgroundColor: designSystem.colors.accent[50],
        padding: `${designSystem.space.xs} ${designSystem.space.sm}`,
        borderRadius: designSystem.radius.xl,
      },
      roleTitle: {
        fontSize: designSystem.typography.sizes.base,
        fontWeight: designSystem.typography.weights.bold,
        color: designSystem.colors.primary[600],
        marginBottom: designSystem.space.xs, // Reduced to make room for duration
        marginTop: designSystem.space.sm + 2, // 10px - consistent role spacing
        lineHeight: designSystem.typography.lineHeights.tight,
      },
      roleDuration: {
        fontSize: designSystem.typography.sizes.sm,
        color: designSystem.colors.neutral[600],
        marginBottom: designSystem.space.sm + 2, // 10px - clear role-to-content separation
        fontStyle: 'italic',
        lineHeight: designSystem.typography.lineHeights.tight,
      },
      responsibility: {
        fontSize: designSystem.typography.sizes.sm,
        color: designSystem.colors.neutral[600],
        marginBottom: designSystem.space.xs + 2, // 6px - optimal bullet point spacing
        lineHeight: designSystem.typography.lineHeights.normal,
        paddingLeft: designSystem.space.lg,
      },
      lastResponsibility: {
        fontSize: designSystem.typography.sizes.sm,
        color: designSystem.colors.neutral[600],
        marginBottom: 0, // Clean section endings
        lineHeight: designSystem.typography.lineHeights.normal,
        paddingLeft: designSystem.space.lg,
      },

      // Education section
      educationItem: {
        marginBottom: designSystem.space.xl,
      },
      institution: {
        fontSize: designSystem.typography.sizes.md,
        fontWeight: designSystem.typography.weights.bold,
        color: designSystem.colors.neutral[800],
        marginBottom: designSystem.space.xs,
        lineHeight: designSystem.typography.lineHeights.tight,
      },
      degree: {
        fontSize: designSystem.typography.sizes.base,
        color: designSystem.colors.neutral[600],
        marginBottom: designSystem.space.xs,
        lineHeight: designSystem.typography.lineHeights.normal,
      },
      duration: {
        fontSize: designSystem.typography.sizes.sm,
        color: designSystem.colors.neutral[500],
        lineHeight: designSystem.typography.lineHeights.normal,
      },

      // Certification section
      certificationItem: {
        marginBottom: designSystem.space.xl,
      },
      certificationName: {
        fontSize: designSystem.typography.sizes.md,
        fontWeight: designSystem.typography.weights.bold,
        color: designSystem.colors.neutral[800],
        marginBottom: designSystem.space.xs,
        lineHeight: designSystem.typography.lineHeights.tight,
      },
      certificationDetails: {
        fontSize: designSystem.typography.sizes.base,
        color: designSystem.colors.neutral[600],
        marginBottom: designSystem.space.xs,
        lineHeight: designSystem.typography.lineHeights.normal,
      },

      // Text styles
      aboutText: {
        fontSize: designSystem.typography.sizes.base,
        lineHeight: designSystem.typography.lineHeights.normal, // Keep normal for readability
        marginBottom: designSystem.space.md, // Increased from sm (8px) to md (12px)
        color: designSystem.colors.neutral[600],
      },
      link: {
        color: designSystem.colors.primary[600],
        textDecoration: 'none',
        fontSize: designSystem.typography.sizes.base,
      },

      // Sidebar Skills section styles
      sidebarSkillCategory: {
        marginBottom: designSystem.space.lg,
      },
      sidebarSkillCategoryTitle: {
        fontSize: designSystem.typography.sizes.sm,
        fontWeight: designSystem.typography.weights.bold,
        color: designSystem.colors.primary[500],
        marginBottom: designSystem.space.sm,
        textTransform: 'uppercase',
        letterSpacing: designSystem.typography.letterSpacing.wide,
      },
      sidebarSkillItem: {
        backgroundColor: designSystem.colors.neutral[900],
        padding: designSystem.space.sm,
        borderRadius: designSystem.radius.base,
        marginBottom: designSystem.space.xs,
        borderLeftWidth: designSystem.effects.borderWidth.medium,
        borderLeftColor: designSystem.colors.accent[500],
      },
      sidebarSkillName: {
        fontSize: designSystem.typography.sizes.xs,
        fontWeight: designSystem.typography.weights.bold,
        color: designSystem.colors.white,
        marginBottom: designSystem.space.xs,
        lineHeight: designSystem.typography.lineHeights.tight,
      },
      sidebarSkillLevel: {
        fontSize: designSystem.typography.sizes.xs,
        color: designSystem.colors.primary[500],
        fontWeight: designSystem.typography.weights.bold,
        lineHeight: designSystem.typography.lineHeights.tight,
      },
      sidebarBusinessSkillsSection: {
        marginTop: designSystem.space.lg,
      },
      sidebarBusinessSkillItem: {
        fontSize: designSystem.typography.sizes.xs,
        color: designSystem.colors.neutral[300],
        marginBottom: designSystem.space.xs,
        lineHeight: designSystem.typography.lineHeights.tight,
      },

      // Background elements
      sidebarBackground: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: 200,
        backgroundColor: designSystem.colors.neutral[800],
      },
    });

    const data = await getResumeData();
    const profileImagePath = pathModule.join(process.cwd(), 'public', 'avatars', 'me.jpeg');

    const Icon = createIcon(el, Svg, Path);
    const ContactItem = createContactItem(el, View, Text, Link, Icon, styles);
    const StatItem = createStatItem(el, View, Text, styles);
    const AchievementItem = createAchievementItem(el, View, Text, styles);
    const SectionTitle = createSectionTitle(el, Text, styles);
    const MainSectionTitle = createMainSectionTitle(el, Text, styles);
    const ProfileSection = createProfileSection(el, View, Image, Text, styles, profileImagePath);
    const ContactSection = createContactSection(el, View, SectionTitle, ContactItem);
    const AchievementsSection = createAchievementsSection(
      el,
      View,
      SectionTitle,
      AchievementItem,
      styles
    );
    const HeaderBanner = createHeaderBanner(el, View, Text, StatItem, styles);
    const SkillsSection = createSkillsSection(el, View, Text, SectionTitle, styles, data.skills);
    const Sidebar = createSidebar(
      el,
      View,
      ProfileSection,
      ContactSection,
      AchievementsSection,
      SkillsSection,
      styles
    );
    const ProfessionalSummarySection = createProfessionalSummarySection(
      el,
      View,
      Text,
      MainSectionTitle,
      styles,
      data
    );
    const ExperienceSection = createExperienceSection(
      el,
      View,
      Text,
      MainSectionTitle,
      styles,
      data.experience
    );
    const EducationSection = createEducationSection(
      el,
      View,
      Text,
      MainSectionTitle,
      styles,
      data.education
    );
    const CertificationsSection = createCertificationsSection(
      el,
      View,
      Text,
      Link,
      MainSectionTitle,
      styles,
      data.certifications
    );
    const MainContent = createMainContent(
      el,
      View,
      ProfessionalSummarySection,
      ExperienceSection,
      EducationSection,
      CertificationsSection,
      styles
    );

    const CVDocument = el(
      Document,
      {},
      el(Page, { size: 'A4', style: styles.page }, [
        el(View, { style: styles.sidebarBackground, fixed: true }),
        HeaderBanner(),
        el(View, { style: styles.container }, [Sidebar(), MainContent()]),
      ])
    );

    return await renderToBuffer(CVDocument);
  } catch (error) {
    console.error(`PDF rendering error: ${error instanceof Error ? error.message : String(error)}`);
    throw error;
  }
}

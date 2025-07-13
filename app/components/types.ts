interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
}

export interface Role {
  title: string;
  duration: string;
  responsibilities: string[];
}

export interface Company {
  name: string;
  totalDuration: string;
  roles: Role[];
}

interface CertificationItem {
  name: string;
  issuer: string;
  image: string;
  issued?: string;
  verificationUrl?: string;
}

export type SectionType = 'about' | 'education' | 'experience' | 'certifications' | 'skills';

export interface AboutSectionData {
  title: string;
  content: string[];
}

export interface EducationSectionData {
  title: string;
  items: EducationItem[];
}

export interface ExperienceSectionData {
  title: string;
  companies: Company[];
}

export interface CertificationSectionData {
  title: string;
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

export interface SkillsSectionData {
  title: string;
  categories: SkillCategory[];
  certifications: string[];
  businessSkills: string[];
}

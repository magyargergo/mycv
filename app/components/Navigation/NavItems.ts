import { FaUser, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { SectionType } from '@/components/types';

export const NAV_ITEMS = [
  {
    label: 'About',
    icon: FaUser,
    section: 'about' as SectionType,
    description: 'Personal information',
  },
  {
    label: 'Experience',
    icon: FaBriefcase,
    section: 'experience' as SectionType,
    description: 'Work history',
  },
  {
    label: 'Education',
    icon: FaGraduationCap,
    section: 'education' as SectionType,
    description: 'Academic background',
  },
];

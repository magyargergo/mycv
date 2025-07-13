import { Suspense } from 'react';
import ClientWrapper from '@/components/ClientWrapper';
import {
  AboutSectionData,
  EducationSectionData,
  ExperienceSectionData,
  CertificationSectionData,
  SkillsSectionData,
  SectionType,
} from '@/components/types';
import { getResumeData } from '@/lib/data';
import Loading from './loading';

export interface SectionData {
  about: AboutSectionData;
  education: EducationSectionData;
  experience: ExperienceSectionData;
  certifications: CertificationSectionData;
  skills: SkillsSectionData;
}

// Helper to validate section type
const isValidSection = (section: string): section is SectionType => {
  return ['about', 'experience', 'education', 'certifications'].includes(section);
};

// Accept searchParams prop with proper typing
export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const pageData = await getResumeData();

  // Determine initial section from searchParams, default to 'about'
  let initialSection: SectionType = 'about';
  const sectionParam = searchParams?.section;
  if (typeof sectionParam === 'string' && isValidSection(sectionParam)) {
    initialSection = sectionParam;
  }

  return (
    <Suspense fallback={<Loading />}>
      <ClientWrapper initialData={pageData} initialSection={initialSection} />
    </Suspense>
  );
}

import { Suspense } from 'react';
import ClientWrapper from '@/components/ClientWrapper';
import {
    AboutSectionData,
    EducationSectionData,
    ExperienceSectionData,
    SectionType
} from "@/components/types";
import { getResumeData } from "@/lib/data";
import Loading from "./loading";

export interface SectionData {
    about: AboutSectionData;
    education: EducationSectionData;
    experience: ExperienceSectionData;
}

// Helper to validate section type
const isValidSection = (section: any): section is SectionType => {
    return ['about', 'experience', 'education'].includes(section);
};

// Accept searchParams prop
export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined }}) {
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
import { Suspense } from 'react';
import ClientWrapper from '@/components/ClientWrapper';
import {
    AboutSectionData,
    EducationSectionData,
    ExperienceSectionData
} from "@/components/types";
import { getResumeData } from "../lib/data";
import Loading from "@/loading";


export interface SectionData {
    about: AboutSectionData;
    education: EducationSectionData;
    experience: ExperienceSectionData;
}

export default async function Home() {
    const pageData = await getResumeData();

    return (
        <Suspense fallback={<Loading />}>
            <ClientWrapper initialData={pageData} />
        </Suspense>
    );
}
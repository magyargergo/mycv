import { Suspense } from 'react';
import ClientWrapper from '@/components/ClientWrapper';
import { AboutContent } from "@/components/About/types";
import { EducationContent} from "@/components/Education/types";
import { ExperienceContent } from "@/components/Experience/types";
import { getResumeData } from "../lib/data";
import Loading from "@/loading";

export interface SectionData {
    about: AboutContent;
    education: EducationContent;
    experience: ExperienceContent;
}

export default async function Home() {
    const pageData = await getResumeData();

    return (
        <Suspense fallback={<Loading />}>
            <ClientWrapper initialData={pageData} />
        </Suspense>
    );
}
import { Suspense } from 'react';
import ClientWrapper from '@/components/ClientWrapper';
import { title as aboutTitle, content as aboutContent } from "./data/about.json";
import { title as educationTitle, items as educationItems } from "./data/education.json";
import { title as experienceTitle, companies as experienceCompanies } from "./data/experience.json";
import { AboutContent } from "@/components/About/types";
import { EducationContent} from "@/components/Education/types";
import { ExperienceContent } from "@/components/Experience/types";

export interface SectionData {
    about: AboutContent;
    education: EducationContent;
    experience: ExperienceContent;
}

export default function Home() {
    const pageData: SectionData = {
        about: { title: aboutTitle, content: aboutContent },
        education: { title: educationTitle, items: educationItems },
        experience: { title: experienceTitle, companies: experienceCompanies }
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ClientWrapper initialData={pageData} />
        </Suspense>
    );
}
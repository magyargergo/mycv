interface EducationItem {
    institution: string;
    degree: string;
    duration: string;
}

export interface Role {
    title: string;
    responsibilities: string[];
}

export interface Company {
    name: string;
    totalDuration: string;
    roles: Role[];
}

export type SectionType = 'about' | 'education' | 'experience';

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
export interface Education {
    institution: string;
    degree: string;
    duration: string;
}

export interface EducationContent {
    title: string;
    items: Education[];
}
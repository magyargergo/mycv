export interface Role {
    title: string;
    responsibilities: string[];
}

export interface Company {
    name: string;
    totalDuration: string;
    roles: Role[];
}

export interface ExperienceContent {
    title: string;
    companies: Company[];
}
import { cache } from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import { SectionData } from "@/page";

export const getResumeData = cache(async (): Promise<SectionData> => {
    try {
        // Read all JSON files in parallel for better performance
        const [aboutJson, educationJson, experienceJson] = await Promise.all([
            fs.readFile(path.join(process.cwd(), 'app/data/about.json'), 'utf8'),
            fs.readFile(path.join(process.cwd(), 'app/data/education.json'), 'utf8'),
            fs.readFile(path.join(process.cwd(), 'app/data/experience.json'), 'utf8'),
        ]);

        // Parse JSON data
        const about = JSON.parse(aboutJson);
        const education = JSON.parse(educationJson);
        const experience = JSON.parse(experienceJson);

        // Return typed data structure
        return {
            about: {
                title: about.title,
                content: about.content,
            },
            education: {
                title: education.title,
                items: education.items,
            },
            experience: {
                title: experience.title,
                companies: experience.companies,
            },
        };
    } catch (error) {
        console.error('Error loading resume data:', error);
        throw new Error('Failed to load resume data');
    }
});

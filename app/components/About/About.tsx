"use client";

import React from 'react';
import { FaUser } from 'react-icons/fa';
import { title, content } from "../../data/about.json";
import { SectionLayout } from "../shared/SectionLayout/SectionLayout";
import { IAboutContent } from "./types";
import AboutContent from "./AboutContent";


const About: React.FC = () => {
    const aboutData: IAboutContent = { title, content };

    return (
        <SectionLayout
            id="about"
            icon={<FaUser />}
            title={aboutData.title}
        >
            <AboutContent paragraphs={aboutData.content} />
        </SectionLayout>
    );
};

export default About;

"use client";

import React from 'react';
import { FaUser } from 'react-icons/fa';
import { SectionLayout } from "../shared/SectionLayout/SectionLayout";
import { AboutContent } from "./types";
import AboutContentDisplay from "./AboutContentDisplay";

interface AboutSectionProps {
    readonly data: AboutContent;
}

const About: React.FC<AboutSectionProps> = ({ data }) => {
    return (
        <SectionLayout
            id="about"
            icon={<FaUser />}
            title={data.title}
        >
            <AboutContentDisplay paragraphs={data.content} />
        </SectionLayout>
    );
};

export default About;

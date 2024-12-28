"use client";

import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { SectionLayout} from "../shared/SectionLayout/SectionLayout";
import { Timeline } from "../shared/Timeline/Timeline";
import { TimelineItem } from "../shared/Timeline/TimelineItem";
import { title, items } from "../../data/education.json";
import { EducationContent } from "./types";
import EducationItemContent from "./EducationItemContent";

const Education: React.FC = () => {
    const educationData: EducationContent = { title, items };

    return (
        <SectionLayout
            id="education"
            icon={<FaGraduationCap />}
            title={educationData.title}
        >
            <Timeline className="max-h-[calc(100vh-200px)]">
                {educationData.items.map((education, index) => (
                    <TimelineItem key={index}>
                        <EducationItemContent education={education} />
                    </TimelineItem>
                ))}
            </Timeline>
        </SectionLayout>
    );
};

export default Education;

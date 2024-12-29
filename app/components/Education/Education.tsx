"use client";

import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { SectionLayout} from "../shared/SectionLayout/SectionLayout";
import { Timeline } from "../shared/Timeline/Timeline";
import { TimelineItem } from "../shared/Timeline/TimelineItem";
import { EducationContent } from "./types";
import EducationItemContent from "./EducationItemContent";

interface EducationSectionProps {
    data: EducationContent;
}

const Education: React.FC<EducationSectionProps> = ({ data }) => {
    return (
        <SectionLayout
            id="education"
            icon={<FaGraduationCap />}
            title={data.title}
        >
            <Timeline className="max-h-[calc(100vh-200px)]">
                {data.items.map((education, index) => (
                    <TimelineItem key={index}>
                        <EducationItemContent education={education} />
                    </TimelineItem>
                ))}
            </Timeline>
        </SectionLayout>
    );
};

export default Education;

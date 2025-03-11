'use client';

import React from 'react';
import { FaUser } from 'react-icons/fa';
import SectionHeader from '../SectionHeader';
import { AboutSectionData } from "@/components/types";

interface AboutSectionProps {
    readonly data: AboutSectionData;
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
    return (
        <div className="flex flex-col w-full">
            <SectionHeader icon={<FaUser />} title={data.title} />

            <div>
                {data.content.map((paragraph, index) => (
                    <div key={index} className="mb-4">
                        {index === 0 ? (
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                <span className="text-blue-600 font-bold text-xl sm:text-2xl float-left mr-1.5 sm:mr-2 mt-0.5 sm:mt-1">A</span>
                                {paragraph.substring(1)}
                            </p>
                        ) : (
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                {paragraph}
                            </p>
                        )}
                        {index === 0 && <hr className="my-3 sm:my-4 border-gray-200" />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutSection;
'use client';

import React from 'react';
import { FaUser } from 'react-icons/fa';
import SectionHeader from '../SectionHeader';
import { AboutSectionData } from '@/components/types';

interface AboutSectionProps {
  readonly data: AboutSectionData;
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  return (
    <div className="flex flex-col w-full animate-fadeIn">
      <SectionHeader icon={<FaUser />} title={data.title} />

      <div>
        {data.content.map((paragraph, index) => (
          <div key={index} className="mb-3 md:mb-3.5 lg:mb-4">
            <p className="text-foreground leading-relaxed text-sm md:text-[15px] lg:text-base text-wrap-balance text-break-word">
              {paragraph}
            </p>
            {index === 0 && <hr className="my-3 md:my-3.5 lg:my-4" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;

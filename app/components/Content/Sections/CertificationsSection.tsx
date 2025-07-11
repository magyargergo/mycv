'use client';

import React from 'react';
import SectionHeader from '../SectionHeader';
import { CertificationSectionData } from '@/components/types';
import { FaCertificate } from 'react-icons/fa';
import Image from 'next/image';

interface CertificationsSectionProps {
  readonly data: CertificationSectionData;
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ data }) => {
  return (
    <div className="flex flex-col w-full animate-fadeIn">
      <SectionHeader icon={<FaCertificate />} title={data.title} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {data.items.map((cert, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image src={cert.image} alt={cert.name} fill className="object-contain" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-sm md:text-base lg:text-lg text-break-word">
                {cert.name}
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground text-break-word">
                {cert.issuer}
              </p>
              {cert.issued && (
                <p className="text-xs md:text-sm text-muted-foreground text-break-word">
                  Issued {cert.issued}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;

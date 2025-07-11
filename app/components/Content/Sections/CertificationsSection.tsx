'use client';

import React from 'react';
import { Timeline, Badge } from 'flowbite-react';
import { FaMedal, FaCloud, FaRobot, FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeader from '../SectionHeader';
import { CertificationSectionData } from '@/components/types';
import Image from 'next/image';

interface CertificationsSectionProps {
  readonly data: CertificationSectionData;
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ data }) => {
  const getIconForCertification = (certName: string) => {
    if (certName.toLowerCase().includes('ai')) {
      return FaRobot;
    } else if (certName.toLowerCase().includes('cloud')) {
      return FaCloud;
    }
    return FaMedal; // fallback icon
  };

  return (
    <div className="flex flex-col w-full animate-fadeIn">
      <SectionHeader icon={<FaMedal />} title={data.title} />

      <Timeline className="border-l border-border/70">
        {data.items.map((cert, index) => {
          const IconComponent = getIconForCertification(cert.name);
          
          const cardContent = (
            <div className={`
              flex items-start gap-3 
              p-3 md:p-4 
              rounded-lg bg-secondary/30 
              transition-all duration-300 hover:shadow-md 
              ${cert.verificationUrl ? 'hover:bg-secondary/50 cursor-pointer active:scale-[0.99] sm:hover:scale-[1.01]' : 'hover:bg-secondary/40'}
              touch-manipulation
              w-full
            `}>
              {/* Image Container */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0 rounded-md overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-1.5 sm:p-2 shadow-sm border border-gray-200 dark:border-gray-600">
                <Image 
                  src={cert.image} 
                  alt={cert.name} 
                  fill 
                  className="object-contain"
                  priority={index < 2}
                />
              </div>
              
              {/* Content Container */}
              <div className="flex-grow min-w-0 overflow-hidden">
                {/* Certification Name */}
                <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1.5 leading-tight break-words">
                  {cert.name}
                </h4>
                
                {/* Badges Row */}
                <div className="flex flex-wrap items-center gap-1.5 mb-2">
                  <Badge
                    color="info"
                    size="xs"
                    className="text-xs px-2 py-0.5 font-medium flex-shrink-0"
                  >
                    Foundational
                  </Badge>
                  {cert.issued && (
                    <Badge
                      color="gray"
                      size="xs"
                      className="text-xs px-2 py-0.5 flex-shrink-0"
                    >
                      {cert.issued}
                    </Badge>
                  )}
                </div>
                
                {/* Issuer and Verify */}
                <div className="flex items-center justify-between">
                  <p className="text-xs sm:text-sm text-muted-foreground truncate mr-2">
                    {cert.issuer}
                  </p>
                  {cert.verificationUrl && (
                    <div className="flex items-center text-primary opacity-70 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0">
                      <FaExternalLinkAlt className="w-3 h-3" />
                      <span className="ml-1 text-xs font-medium hidden sm:inline">Verify</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
          
          return (
            <Timeline.Item
              key={index}
              className="mb-3 sm:mb-4 last:mb-0"
            >
              <Timeline.Point 
                icon={IconComponent} 
                className="bg-secondary text-primary shadow-sm" 
              />
              <Timeline.Content className="ml-2 sm:ml-4 w-full overflow-hidden">
                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg w-full"
                    title={`Verify ${cert.name} certification`}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div className="block w-full">
                    {cardContent}
                  </div>
                )}
              </Timeline.Content>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </div>
  );
};

export default CertificationsSection;

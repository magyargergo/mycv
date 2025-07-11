'use client';

import React from 'react';
import { Button, Badge, Card } from 'flowbite-react';
import {
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaUserGraduate,
  FaDownload,
  FaEnvelope,
} from 'react-icons/fa';
import Image from 'next/image';
import SocialLink from './SocialLink';

const ProfileSection: React.FC = () => {
  const handleDownload = () => {
    const pdfUrl = '/assets/documents/Gergo_Magyar_CV.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Gergo_Magyar_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Professional gradient background with improved padding */}
      <div className="group flex items-center p-3 mobile-landscape:p-2 tablet-landscape:p-3 md:p-5 sm:p-6 bg-gradient-to-r from-primary to-primary/90 -m-6 mb-0 rounded-t-lg overflow-hidden">
        {/* Enhanced profile picture with better border and shadow */}
        <div className="relative w-16 h-16 mobile-landscape:w-12 mobile-landscape:h-12 tablet-landscape:w-16 tablet-landscape:h-16 md:w-20 md:h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/90 shadow-md flex-shrink-0">
          {/* Improved transition effects */}
          <Image
            src="/avatars/me.jpeg"
            alt="Gary Magyar"
            fill
            sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
            className="object-cover object-[center_25%] transition-all duration-300 ease-out group-hover:scale-110"
            priority
          />
        </div>
        {/* Improved text spacing and hierarchy */}
        <div className="ml-3 mobile-landscape:ml-2 tablet-landscape:ml-3 md:ml-4 sm:ml-5 text-primary-foreground overflow-hidden">
          <h1 className="text-lg mobile-landscape:text-sm tablet-landscape:text-base md:text-xl sm:text-2xl font-bold text-break-word truncate tracking-tight">
            Gary Magyar
          </h1>
          {/* Better contrast and spacing */}
          <div className="flex items-center text-primary-foreground/90 text-xs md:text-sm mt-0.5">
            <FaBriefcase className="mr-1.5 mobile-landscape:mr-1 flex-shrink-0" size={12} />
            <span className="text-break-word truncate font-medium">Senior Software Engineer</span>
          </div>
          {/* Improved layout with better spacing */}
          <div className="flex flex-col mobile-landscape:flex-row mobile-landscape:gap-1.5 tablet-landscape:flex-row tablet-landscape:gap-2 md:flex-row md:gap-3 sm:flex-row sm:gap-4 mt-1.5 mobile-landscape:mt-1 tablet-landscape:mt-1.5 md:mt-2 sm:mt-2.5">
            <div className="flex items-center text-primary-foreground/85 text-xs mobile-landscape:text-[10px] tablet-landscape:text-xs">
              <FaMapMarkerAlt className="mr-1.5 mobile-landscape:mr-1 flex-shrink-0" size={10} />
              <span className="text-break-word truncate">Woking, UK</span>
            </div>
            <div className="flex items-center text-primary-foreground/85 text-xs mobile-landscape:text-[10px] tablet-landscape:text-xs">
              <FaUserGraduate className="mr-1.5 mobile-landscape:mr-1 flex-shrink-0" size={10} />
              <span className="text-break-word truncate">Computer Science</span>
            </div>
          </div>
        </div>
      </div>

      {/* Improved body spacing and organization */}
      <div className="p-3 mobile-landscape:p-2 tablet-landscape:p-3 md:p-5 space-y-3 mobile-landscape:space-y-2 tablet-landscape:space-y-3 md:space-y-5 sm:p-6 sm:space-y-6 card-body-padding">
        {/* Enhanced badge layout with better spacing and hover effects */}
        <div className="flex flex-wrap gap-2 mobile-landscape:gap-1 tablet-landscape:gap-1.5">
          {/* Full Stack badges */}
          <Badge
            color="info"
            size="xs"
            className="mobile-landscape:text-[10px] mobile-landscape:py-0.5 mobile-landscape:px-1.5 md:hidden text-break-word truncate transition-all duration-200 hover:shadow-sm"
          >
            Full Stack
          </Badge>
          <Badge
            color="info"
            size="sm"
            className="hidden md:inline-flex lg:hidden text-break-word truncate transition-all duration-200 hover:shadow-sm tablet-landscape:text-xs"
          >
            Full Stack
          </Badge>
          <Badge
            color="info"
            size="sm"
            className="hidden lg:inline-flex text-break-word truncate transition-all duration-200 hover:shadow-sm"
          >
            Full Stack Development
          </Badge>

          {/* Experience badges */}
          <Badge
            color="info"
            size="xs"
            className="mobile-landscape:text-[10px] mobile-landscape:py-0.5 mobile-landscape:px-1.5 md:hidden text-break-word truncate transition-all duration-200 hover:shadow-sm"
          >
            9+ Years Exp.
          </Badge>
          <Badge
            color="info"
            size="sm"
            className="hidden md:inline-flex lg:hidden text-break-word truncate transition-all duration-200 hover:shadow-sm tablet-landscape:text-xs"
          >
            9+ Years Exp.
          </Badge>
          <Badge
            color="info"
            size="sm"
            className="hidden lg:inline-flex text-break-word truncate transition-all duration-200 hover:shadow-sm"
          >
            9+ Years Experience
          </Badge>

          {/* UK Resident badges */}
          <Badge
            color="info"
            size="xs"
            className="mobile-landscape:text-[10px] mobile-landscape:py-0.5 mobile-landscape:px-1.5 md:hidden text-break-word truncate transition-all duration-200 hover:shadow-sm"
          >
            UK Resident
          </Badge>
          <Badge
            color="info"
            size="sm"
            className="hidden md:inline-flex lg:hidden text-break-word truncate transition-all duration-200 hover:shadow-sm tablet-landscape:text-xs"
          >
            UK Resident
          </Badge>
          <Badge
            color="info"
            size="sm"
            className="hidden lg:inline-flex text-break-word truncate transition-all duration-200 hover:shadow-sm"
          >
            Permanent UK Resident
          </Badge>

          {/* Employment badges - hidden in mobile landscape to save space */}
          <Badge
            color="info"
            size="xs"
            className="mobile-landscape:hidden md:hidden text-break-word truncate transition-all duration-200 hover:shadow-sm"
          >
            Full-time Employee
          </Badge>
          <Badge
            color="info"
            size="sm"
            className="hidden md:inline-flex text-break-word truncate transition-all duration-200 hover:shadow-sm tablet-landscape:text-xs"
          >
            Full-time Employee
          </Badge>
        </div>

        {/* Enhanced button and social links */}
        <div className="pt-2 mobile-landscape:pt-1 tablet-landscape:pt-1.5 md:pt-3 sm:pt-4 reduced-margin-landscape">
          <Button
            color="blue"
            size="sm"
            onClick={handleDownload}
            className="w-full mb-3 mobile-landscape:mb-1.5 tablet-landscape:mb-2 md:mb-4 sm:mb-5 overflow-hidden shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 mobile-landscape:py-1 mobile-landscape:text-xs"
          >
            <FaDownload
              className="mr-2 mobile-landscape:mr-1 tablet-landscape:mr-1.5 md:mr-2.5 flex-shrink-0"
              size={14}
            />
            <span className="text-break-word truncate font-medium">
              <span className="mobile-landscape:hidden">Download CV</span>
              <span className="hidden mobile-landscape:inline">Download</span>
            </span>
          </Button>
          <div className="flex justify-evenly pt-1.5 mobile-landscape:pt-1 tablet-landscape:pt-1 md:pt-2">
            <SocialLink
              href="https://linkedin.com/in/gergomagyar"
              icon={<FaLinkedin className="text-primary mobile-landscape:scale-90" />}
              label="LinkedIn Profile"
            />
            <SocialLink
              href="https://github.com/magyargergo"
              icon={<FaGithub className="text-foreground mobile-landscape:scale-90" />}
              label="GitHub Profile"
            />
            <SocialLink
              href="mailto:gergomagyar@icloud.com"
              icon={<FaEnvelope className="text-primary mobile-landscape:scale-90" />}
              label="Email Me"
            />
            <SocialLink
              href="tel:+447951225614"
              icon={<FaPhone className="text-primary mobile-landscape:scale-90" />}
              label="Call Me"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileSection;

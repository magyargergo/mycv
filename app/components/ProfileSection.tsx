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
  const handleDownload = async () => {
    try {
      const response = await fetch('/api/generate-cv');
      if (!response.ok) {
        throw new Error('Failed to generate CV');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Gary_Magyar_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback to static PDF if API fails
      const pdfUrl = '/assets/documents/Gergo_Magyar_CV.pdf';
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'Gergo_Magyar_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Professional gradient background with improved padding */}
      <header className="group flex items-center p-3 mobile-landscape:p-2 tablet-landscape:p-3 md:p-5 sm:p-6 bg-gradient-to-r from-primary to-primary/90 -m-6 mb-0 rounded-t-lg overflow-hidden">
        {/* Enhanced profile picture with better border and shadow */}
        <div className="relative w-16 h-16 mobile-landscape:w-12 mobile-landscape:h-12 tablet-landscape:w-16 tablet-landscape:h-16 md:w-20 md:h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/90 shadow-md flex-shrink-0">
          {/* Improved transition effects */}
          <Image
            src="/avatars/me.jpeg"
            alt="Gary Magyar - Senior Software Engineer"
            fill
            sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
            className="object-cover object-[center_25%] transition-all duration-300 ease-out group-hover:scale-110"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
        {/* Improved text spacing and hierarchy */}
        <div className="ml-3 mobile-landscape:ml-2 tablet-landscape:ml-3 md:ml-4 sm:ml-5 text-primary-foreground overflow-hidden">
          <h1 className="text-lg mobile-landscape:text-sm tablet-landscape:text-base md:text-xl sm:text-2xl font-bold text-break-word truncate tracking-tight">
            Gary Magyar
          </h1>
          {/* Better contrast and spacing */}
          <div
            className="flex items-center text-primary-foreground/90 text-xs md:text-sm mt-0.5"
            role="text"
            aria-label="Professional title"
          >
            <FaBriefcase
              className="mr-1.5 mobile-landscape:mr-1 flex-shrink-0"
              size={12}
              aria-hidden="true"
            />
            <span className="text-break-word truncate font-medium">
              <span className="mobile-landscape:hidden">
                AWS Certified Senior Software Engineer
              </span>
              <span className="hidden mobile-landscape:inline">Senior Software Engineer</span>
            </span>
          </div>
          {/* Improved layout with better spacing */}
          <div className="flex flex-col mobile-landscape:flex-row mobile-landscape:gap-1.5 tablet-landscape:flex-row tablet-landscape:gap-2 md:flex-row md:gap-3 sm:flex-row sm:gap-4 mt-1.5 mobile-landscape:mt-1 tablet-landscape:mt-1.5 md:mt-2 sm:mt-2.5">
            <div
              className="flex items-center text-primary-foreground/85 text-xs mobile-landscape:text-[10px] tablet-landscape:text-xs"
              role="text"
              aria-label="Location"
            >
              <FaMapMarkerAlt
                className="mr-1.5 mobile-landscape:mr-1 flex-shrink-0"
                size={10}
                aria-hidden="true"
              />
              <span className="text-break-word truncate">Woking, UK</span>
            </div>
            <div
              className="flex items-center text-primary-foreground/85 text-xs mobile-landscape:text-[10px] tablet-landscape:text-xs"
              role="text"
              aria-label="Education"
            >
              <FaUserGraduate
                className="mr-1.5 mobile-landscape:mr-1 flex-shrink-0"
                size={10}
                aria-hidden="true"
              />
              <span className="text-break-word truncate">Computer Science</span>
            </div>
          </div>
        </div>
      </header>

      {/* Improved body spacing and organization */}
      <section
        className="p-3 mobile-landscape:p-2 tablet-landscape:p-3 md:p-4 lg:p-5 xl:p-6 space-y-3 mobile-landscape:space-y-2 tablet-landscape:space-y-3 md:space-y-4 lg:space-y-5 card-body-padding"
        aria-label="Professional highlights"
      >
        {/* Key Highlights - What HR needs to see FIRST */}
        <div className="space-y-2 mobile-landscape:space-y-1.5 tablet-landscape:space-y-2 md:space-y-2.5 lg:space-y-3">
          {/* AWS Certification - TOP PRIORITY */}
          <div className="flex justify-center" role="region" aria-label="AWS Certification">
            <Badge
              color="success"
              size="sm"
              className="text-xs mobile-landscape:text-[10px] tablet-landscape:text-sm md:text-sm lg:text-base px-2 mobile-landscape:px-1.5 tablet-landscape:px-2.5 md:px-3 lg:px-4 py-1 mobile-landscape:py-0.5 tablet-landscape:py-1 md:py-1.5 lg:py-2 font-bold text-center transition-all duration-200 hover:shadow-md focus-ring"
              tabIndex={0}
              aria-label="AWS Certified Professional badge"
            >
              🏆 AWS Certified Professional
            </Badge>
          </div>

          {/* Key Achievements Row */}
          <div
            className="flex flex-wrap justify-center gap-1 mobile-landscape:gap-0.5 tablet-landscape:gap-1 md:gap-1.5 lg:gap-2"
            role="region"
            aria-label="Key achievements"
          >
            <Badge
              color="warning"
              size="xs"
              className="text-[10px] mobile-landscape:text-[9px] tablet-landscape:text-[10px] md:text-xs lg:text-sm px-1.5 mobile-landscape:px-1 tablet-landscape:px-1.5 md:px-2 lg:px-2.5 py-0.5 mobile-landscape:py-0.5 tablet-landscape:py-0.5 md:py-1 lg:py-1 font-medium transition-all duration-200 hover:shadow-sm focus-ring"
              tabIndex={0}
              aria-label="25% reduction in incidents achievement"
            >
              ⚡ 25% Less Incidents
            </Badge>
            <Badge
              color="warning"
              size="xs"
              className="text-[10px] mobile-landscape:text-[9px] tablet-landscape:text-[10px] md:text-xs lg:text-sm px-1.5 mobile-landscape:px-1 tablet-landscape:px-1.5 md:px-2 lg:px-2.5 py-0.5 mobile-landscape:py-0.5 tablet-landscape:py-0.5 md:py-1 lg:py-1 font-medium transition-all duration-200 hover:shadow-sm focus-ring"
              tabIndex={0}
              aria-label="30% faster deployments achievement"
            >
              🚀 30% Faster Deployments
            </Badge>
          </div>

          {/* Core Qualifications - Stack on mobile, inline on larger screens */}
          <div
            className="flex flex-col mobile-landscape:flex-row tablet-landscape:flex-row md:flex-row lg:flex-row items-center justify-center gap-1 mobile-landscape:gap-0.5 tablet-landscape:gap-1 md:gap-1.5 lg:gap-2"
            role="region"
            aria-label="Core qualifications"
          >
            <Badge
              color="info"
              size="xs"
              className="text-[10px] mobile-landscape:text-[9px] tablet-landscape:text-[10px] md:text-xs lg:text-sm px-1.5 mobile-landscape:px-1 tablet-landscape:px-1.5 md:px-2 lg:px-2.5 py-0.5 mobile-landscape:py-0.5 tablet-landscape:py-0.5 md:py-1 lg:py-1 font-medium transition-all duration-200 hover:shadow-sm focus-ring"
              tabIndex={0}
              aria-label="Nine plus years of experience"
            >
              💼 9+ Years Experience
            </Badge>
            <Badge
              color="info"
              size="xs"
              className="text-[10px] mobile-landscape:text-[9px] tablet-landscape:text-[10px] md:text-xs lg:text-sm px-1.5 mobile-landscape:px-1 tablet-landscape:px-1.5 md:px-2 lg:px-2.5 py-0.5 mobile-landscape:py-0.5 tablet-landscape:py-0.5 md:py-1 lg:py-1 font-medium transition-all duration-200 hover:shadow-sm focus-ring"
              tabIndex={0}
              aria-label="UK resident status"
            >
              🌍 UK Resident
            </Badge>
            <Badge
              color="info"
              size="xs"
              className="text-[10px] mobile-landscape:text-[9px] tablet-landscape:text-[10px] md:text-xs lg:text-sm px-1.5 mobile-landscape:px-1 tablet-landscape:px-1.5 md:px-2 lg:px-2.5 py-0.5 mobile-landscape:py-0.5 tablet-landscape:py-0.5 md:py-1 lg:py-1 font-medium transition-all duration-200 hover:shadow-sm focus-ring"
              tabIndex={0}
              aria-label="Economics and technology background"
            >
              🎓 Economics + Tech
            </Badge>
          </div>

          {/* Value Proposition - Responsive text sizing */}
          <div
            className="text-center pt-1 mobile-landscape:pt-0.5 tablet-landscape:pt-1 md:pt-1.5 lg:pt-2"
            role="region"
            aria-label="Value proposition"
          >
            <p className="text-[10px] mobile-landscape:text-[9px] tablet-landscape:text-[10px] md:text-xs lg:text-sm text-muted-foreground italic leading-tight">
              &ldquo;Delivering measurable business impact through technology&rdquo;
            </p>
          </div>
        </div>

        {/* Enhanced button and social links */}
        <nav
          className="pt-2 mobile-landscape:pt-1 tablet-landscape:pt-1.5 md:pt-2 lg:pt-3 xl:pt-4 reduced-margin-landscape"
          aria-label="Contact and social links"
        >
          <Button
            color="blue"
            size="sm"
            onClick={handleDownload}
            className="w-full mb-3 mobile-landscape:mb-1.5 tablet-landscape:mb-2 md:mb-3 lg:mb-4 xl:mb-5 overflow-hidden shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 text-xs mobile-landscape:text-[10px] tablet-landscape:text-sm md:text-sm lg:text-base py-1.5 mobile-landscape:py-1 tablet-landscape:py-1.5 md:py-2 lg:py-2.5 focus-ring flex items-center justify-center gap-2"
            aria-label="Download Gary Magyar's complete CV as PDF"
          >
            <FaDownload
              className="flex-shrink-0 mr-2 mobile-landscape:mr-1 tablet-landscape:mr-1.5 md:mr-2 lg:mr-2.5"
              size={14}
              aria-hidden="true"
            />
            <span className="text-break-word truncate font-medium leading-none">
              <span className="mobile-landscape:hidden tablet-landscape:inline md:inline lg:inline">
                Download Full CV
              </span>
              <span className="mobile-landscape:inline tablet-landscape:hidden md:hidden lg:hidden">
                Get CV
              </span>
            </span>
          </Button>
          <div
            className="flex justify-evenly pt-1.5 mobile-landscape:pt-1 tablet-landscape:pt-1.5 md:pt-2 lg:pt-2.5"
            role="list"
            aria-label="Social media and contact links"
          >
            <SocialLink
              href="https://linkedin.com/in/gergomagyar"
              icon={
                <FaLinkedin
                  className="text-primary mobile-landscape:scale-75 tablet-landscape:scale-90 md:scale-100 lg:scale-110"
                  aria-hidden="true"
                />
              }
              label="LinkedIn Profile"
            />
            <SocialLink
              href="https://github.com/magyargergo"
              icon={
                <FaGithub
                  className="text-foreground mobile-landscape:scale-75 tablet-landscape:scale-90 md:scale-100 lg:scale-110"
                  aria-hidden="true"
                />
              }
              label="GitHub Profile"
            />
            <SocialLink
              href="mailto:gergomagyar@icloud.com"
              icon={
                <FaEnvelope
                  className="text-primary mobile-landscape:scale-75 tablet-landscape:scale-90 md:scale-100 lg:scale-110"
                  aria-hidden="true"
                />
              }
              label="Email Me"
            />
            <SocialLink
              href="tel:+447951225614"
              icon={
                <FaPhone
                  className="text-primary mobile-landscape:scale-75 tablet-landscape:scale-90 md:scale-100 lg:scale-110"
                  aria-hidden="true"
                />
              }
              label="Call Me"
            />
          </div>
        </nav>
      </section>
    </Card>
  );
};

export default ProfileSection;

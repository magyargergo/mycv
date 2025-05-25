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
import ContactInfoItem from './ContactInfoItem';
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
    <Card>
      {/* Use primary background gradient with increased padding */}
      <div className="group flex items-center p-4 sm:p-6 bg-gradient-to-r from-primary to-primary/90 -m-6 mb-0 rounded-t-lg">
        {/* Larger profile picture with responsive sizing */}
        <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white flex-shrink-0">
          {/* Add transition and group-hover scale effect */}
          <Image
            src="/avatars/me.jpeg"
            alt="Gergo Magyar"
            fill
            sizes="(max-width: 640px) 64px, 96px"
            className="object-cover object-[center_25%] transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        {/* Smaller margin/text on mobile */}
        <div className="ml-2 sm:ml-4 text-primary-foreground">
          <h1 className="text-lg sm:text-2xl font-bold">Gergo Magyar</h1>
          {/* Use lighter blue text */}
          <div className="flex items-center text-primary-foreground/80 text-xs">
            <FaBriefcase className="mr-1.5" size={12} />
            Senior Software Engineer
          </div>
        </div>
      </div>

      {/* Increased body padding/spacing */}
      <div className="p-4 space-y-4 sm:p-6 sm:space-y-6">
        {/* Improved badge layout with better spacing */}
        <div className="flex flex-wrap gap-2">
          <Badge color="info" size="xs" className="sm:hidden">
            Full Stack
          </Badge>
          <Badge color="info" size="sm" className="hidden sm:inline-flex">
            Full Stack Development
          </Badge>
          <Badge color="info" size="xs" className="sm:hidden">
            9+ Years Exp.
          </Badge>
          <Badge color="info" size="sm" className="hidden sm:inline-flex">
            9+ Years Experience
          </Badge>
          <Badge color="info" size="xs" className="sm:hidden">
            UK Resident
          </Badge>
          <Badge color="info" size="sm" className="hidden sm:inline-flex">
            Permanent UK Resident
          </Badge>
          <Badge color="info" size="xs" className="sm:hidden">
            Full-time Employee
          </Badge>
          <Badge color="info" size="sm" className="hidden sm:inline-flex">
            Full-time Employee
          </Badge>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 sm:pt-4">
          <ContactInfoItem icon={<FaMapMarkerAlt />} text="Woking, UK" />
          <ContactInfoItem icon={<FaUserGraduate />} text="Computer Science" />
        </div>

        {/* Buttons and Social Links */}
        <div className="pt-2 sm:pt-4">
          <Button color="blue" size="sm" onClick={handleDownload} className="w-full mb-3 sm:mb-4">
            <FaDownload className="mr-2" size={14} />
            Download CV
          </Button>
          <div className="flex justify-evenly pt-2">
            <SocialLink
              href="https://linkedin.com/in/gergomagyar"
              icon={<FaLinkedin className="text-primary" />}
              label="LinkedIn Profile"
            />
            <SocialLink
              href="https://github.com/magyargergo"
              icon={<FaGithub className="text-foreground" />}
              label="GitHub Profile"
            />
            <SocialLink
              href="mailto:gergomagyar@icloud.com"
              icon={<FaEnvelope className="text-primary" />}
              label="Email Me"
            />
            <SocialLink
              href="tel:+447951225614"
              icon={<FaPhone className="text-primary" />}
              label="Call Me"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileSection;

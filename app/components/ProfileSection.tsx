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
    FaEnvelope
} from 'react-icons/fa';
import Image from "next/image";

const ProfileSection: React.FC = () => {
    const handleDownload = () => {
        const pdfUrl = "/assets/documents/Gergo_Magyar_CV.pdf";
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = "Gergo_Magyar_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Card className="overflow-hidden border-0 shadow-md">
            {/* Unified header style with gradient background */}
            <div className="flex items-center p-5 bg-gradient-to-r from-blue-600 to-blue-500">
                {/* Profile picture */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white flex-shrink-0">
                    <Image
                        src="/avatars/me.jpeg"
                        alt="Gergo Magyar"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center 25%"
                    />
                </div>

                {/* Name and title */}
                <div className="ml-4 text-white">
                    <h1 className="text-xl sm:text-2xl font-bold">Gergo Magyar</h1>
                    <div className="flex items-center text-blue-50 text-sm">
                        <FaBriefcase className="mr-2" size={14} />
                        Senior Software Engineer
                    </div>
                </div>
            </div>

            <div className="p-5 space-y-4">
                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                    <Badge color="info" size="sm" className="px-3 py-1.5">Full Stack Development</Badge>
                    <Badge color="info" size="sm" className="px-3 py-1.5">9+ Years Experience</Badge>
                    <Badge color="info" size="sm" className="px-3 py-1.5">Permanent UK Resident</Badge>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center text-gray-700">
                        <div className="bg-blue-50 p-2 rounded-full mr-3">
                            <FaMapMarkerAlt className="text-blue-600" size={14} />
                        </div>
                        <span className="text-sm">Woking, UK</span>
                    </div>

                    <div className="flex items-center text-gray-700">
                        <div className="bg-blue-50 p-2 rounded-full mr-3">
                            <FaUserGraduate className="text-blue-600" size={14} />
                        </div>
                        <span className="text-sm">Computer Science</span>
                    </div>
                </div>

                {/* Buttons and Social Links */}
                <div className="pt-2">
                    {/* Download Button */}
                    <Button
                        color="blue"
                        size="sm"
                        onClick={handleDownload}
                        className="w-full shadow-sm mb-4"
                    >
                        <FaDownload className="mr-2" size={14} />
                        Download CV
                    </Button>

                    {/* Social Icons */}
                    <div className="flex justify-evenly">
                        <a
                            href="https://linkedin.com/in/gergomagyar"
                            className="p-3 rounded-full bg-gray-100 hover:bg-blue-50 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                        >
                            <FaLinkedin size={18} className="text-blue-600" />
                        </a>
                        <a
                            href="https://github.com/magyargergo"
                            className="p-3 rounded-full bg-gray-100 hover:bg-blue-50 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                        >
                            <FaGithub size={18} className="text-gray-700" />
                        </a>
                        <a
                            href="mailto:gergomagyar@icloud.com"
                            className="p-3 rounded-full bg-gray-100 hover:bg-blue-50 transition-colors"
                            aria-label="Email Me"
                        >
                            <FaEnvelope size={18} className="text-blue-600" />
                        </a>
                        <a
                            href="tel:+447951225614"
                            className="p-3 rounded-full bg-gray-100 hover:bg-blue-50 transition-colors"
                            aria-label="Call Me"
                        >
                            <FaPhone size={18} className="text-blue-600" />
                        </a>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ProfileSection;
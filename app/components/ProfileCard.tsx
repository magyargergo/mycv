"use client";

import React from 'react';
import {FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt, FaBriefcase, FaUserGraduate} from 'react-icons/fa';
import Image from "next/image";
import {FaAt} from "react-icons/fa6";

const ProfileCard: React.FC = () => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
        {/* Image Section */}
        <div className="relative w-full pt-[75%]">
            <Image
                src="/avatars/me.jpeg"
                alt="Gergo Magyar"
                layout="fill"
                objectFit="cover"
                objectPosition="center 30%"
                className="absolute top-0 left-0 w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">Gergo Magyar</h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-white flex items-center">
                    <FaBriefcase className="mr-2" />
                    Senior Software Engineer
                </p>
            </div>
        </div>

        {/* Details Section */}
        <div className="p-4 sm:p-6 lg:p-8 flex-grow flex flex-col justify-between">
            <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6">
                    <a href="mailto:gergomagyar@icloud.com"
                       className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <FaAt className="mr-3 text-blue-600 flex-shrink-0 text-xl"/>
                        <span className="text-sm sm:text-base lg:text-lg break-all">me</span>
                    </a>
                    <a href="tel:07951225614"
                       className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <FaPhone className="mr-3 text-blue-600 flex-shrink-0 text-xl"/>
                        <span className="text-sm sm:text-base lg:text-lg">07951225614</span>
                    </a>
                    <div className="flex items-center text-gray-600">
                        <FaMapMarkerAlt className="mr-3 text-blue-600 flex-shrink-0 text-xl"/>
                        <span className="text-sm sm:text-base lg:text-lg">Woking, UK</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <FaUserGraduate className="mr-3 text-blue-600 flex-shrink-0 text-xl"/>
                        <span className="text-sm sm:text-base lg:text-lg">MSc in Accountancy</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                    <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm lg:text-base font-medium px-3 py-1 rounded-full">Full Stack Development</span>
                    <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm lg:text-base font-medium px-3 py-1 rounded-full">9+ Years Experience</span>
                    <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm lg:text-base font-medium px-3 py-1 rounded-full">Permanent UK Resident</span>
                </div>

                <div className="flex justify-center space-x-6 sm:space-x-8">
                    <a href="https://linkedin.com/in/gergomagyar" className="text-blue-600 hover:text-blue-800 transition-colors" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-8 h-8 sm:w-10 sm:h-10" />
                    </a>
                    <a href="https://github.com/magyargergo" className="text-blue-600 hover:text-blue-800 transition-colors" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-8 h-8 sm:w-10 sm:h-10" />
                    </a>
                </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                <button className="bg-blue-600 text-white px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base lg:text-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Download CV
                </button>
                <button className="bg-green-600 text-white px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base lg:text-lg font-medium hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" onClick={() => window.location.href = 'mailto:gergomagyar@icloud.com'}>
                    Contact Me
                </button>
            </div>
        </div>
    </div>
);

export default ProfileCard;

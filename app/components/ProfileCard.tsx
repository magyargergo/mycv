"use client";

import React from 'react';
import {FaLinkedin, FaGithub, FaEnvelope, FaPhone} from 'react-icons/fa';
import Image from "next/image";

const ProfileCard: React.FC = () => (
    <div className="bg-white relative w-full h-full">
        {/* Image Section */}
        <div className="relative h-3/4 mb-5">
            <Image
                src="/avatars/me.jpeg"
                alt="Gergo Magyar"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
            />
            {/* Overlay with Name, Job Title, and Icons */}
            <div className="absolute grid grid-cols-2 gap-4 bottom-0 left-0 right-0 p-4 bg-opacity-75 bg-white">
                <div>
                    <h1 className="text-4xl font-bold text-blue-700">Gergo Magyar</h1>
                    <p className="text-md text-gray-600 mb-3">Senior Software Engineer</p>
                    <div className="flex space-x-4 text-blue-500">
                        <a href="https://linkedin.com/in/gergomagyar" className="hover:text-blue-700" target="_blank">
                            <FaLinkedin size={20}/>
                        </a>
                        <a href="https://github.com/magyargergo" className="hover:text-blue-700" target="_blank">
                            <FaGithub size={20}/>
                        </a>

                    </div>
                </div>
                <div className="text-blue-700">
                    <a href="mailto:gergomagyar@icloud.com" className="flex items-center hover:text-blue-500 text-xl font-bold mt-2 mb-2">
                        <FaEnvelope size={20} className="mr-3"/>
                        <span>gergomagyar@icloud.com</span>
                    </a>
                    <a href="tel:07951225614" className="flex items-center hover:text-blue-500 font-bold text-xl">
                        <FaPhone size={20} className="mr-3"/>
                        <span>07951225614</span>
                    </a>
                </div>
            </div>
        </div>

        <div className="flex flex-wrap space-x-4 w-full justify-center">
            <span className="bg-blue-100 text-blue-700 py-2 px-4 rounded-full mb-2">
                Experience: 9+ years
            </span>
            <span className="bg-blue-100 text-blue-700 py-2 px-4 rounded-full mb-2">
                Location: Woking, UK
            </span>
            <span className="bg-blue-100 text-blue-700 py-2 px-4 rounded-full mb-2">
                Specialization: Full Stack Development
            </span>
            <span className="bg-blue-100 text-blue-700 py-2 px-4 rounded-full mb-2">
                Permanent UK Resident
            </span>
        </div>

        {/* CTA Buttons */}
        <div className="absolute bottom-0 grid grid-cols-2 gap-2 w-full p-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700">
                Download CV
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700" onClick={() => window.location.href = 'mailto:gergomagyar@icloud.com'}>
                Contact Me
            </button>
        </div>
    </div>
);

export default ProfileCard;

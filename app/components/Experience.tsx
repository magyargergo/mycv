"use client";

import { motion } from 'framer-motion';
import React, {useEffect, useRef} from 'react';
import { FaBriefcase, FaCircle, FaClock } from 'react-icons/fa';
import { title, companies } from "../data/experience.json";

const Experience: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <motion.div
            ref={ref}
            id="experience"
            className="flex flex-1 flex-col pt-6 sm:pt-8 md:pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="px-4 sm:px-6 flex items-center mb-4 sm:mb-6">
                <FaBriefcase className="text-blue-700 mr-2 sm:mr-3 text-2xl sm:text-3xl md:text-4xl" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-700">{title}</h2>
            </div>
            <div className="px-4 sm:px-6 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-300 overflow-y-auto">
                <div className="border-l-2 sm:border-l-4 border-blue-200 ml-3 sm:ml-4">
                    {companies.map((company, companyIndex) => (
                        <div key={companyIndex} className="mb-6 sm:mb-8 relative">
                            {/* Icon */}
                            <div className="absolute -left-[13px] sm:-left-[18px] translate-y-0.5 w-6 h-6 sm:w-8 sm:h-8 bg-gray-50 rounded-full flex items-center justify-center">
                                <div className="w-4 h-4 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center">
                                    <FaCircle className="text-white text-[8px] sm:text-xs" />
                                </div>
                            </div>
                            {/* Company Header */}
                            <div className="flex flex-col justify-center ml-4 sm:ml-6">
                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">
                                    {company.name}
                                </h3>
                                <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full w-auto">
                                    <FaClock className="mr-2 text-sm" />
                                    <span className="text-sm font-medium whitespace-nowrap">
                                        Total Duration: {company.totalDuration}
                                    </span>
                                </div>
                            </div>

                            {/* Job Role */}
                            {company.roles.map((role, roleIndex) => (
                                <div key={roleIndex} className="mt-4 mb-4 sm:mb-6 ml-4 sm:ml-6">
                                    <h4 className="text-lg sm:text-xl font-semibold text-blue-700">{role.title}</h4>
                                    <ul className="list-disc ml-4 sm:ml-6 text-gray-700 text-sm sm:text-base text-justify">
                                        {role.responsibilities.map((responsibility, rIndex) => (
                                            <li key={rIndex}>{responsibility}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Experience;

"use client";

import React, { useEffect, useRef } from 'react';
import { FaCircle, FaGraduationCap } from 'react-icons/fa';
import { motion } from "framer-motion";
import { title, items } from "../data/education.json";

const Education: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <motion.div
            ref={ref}
            id="education"
            className="flex flex-1 flex-col pt-6 sm:pt-8 md:pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="px-4 sm:px-6 flex items-center mb-4 sm:mb-6">
                <FaGraduationCap className="text-blue-700 mr-2 sm:mr-3 text-2xl sm:text-3xl md:text-4xl" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-700">{title}</h2>
            </div>
            <div className="px-4 sm:px-6 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-300 overflow-y-auto max-h-[calc(100vh-200px)]">
                <div className="border-l-2 sm:border-l-4 border-blue-200 ml-3 sm:ml-4">
                    {items.map((education, index) => (
                        <div key={index} className="mb-6 sm:mb-8 relative">
                            {/* Icon */}
                            <div className="absolute -left-[13px] sm:-left-[18px] translate-y-0.5 w-6 h-6 sm:w-8 sm:h-8 bg-gray-50 rounded-full flex items-center justify-center">
                                <div className="w-4 h-4 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center">
                                    <FaCircle className="text-white text-[8px] sm:text-xs" />
                                </div>
                            </div>
                            {/* Institution Header */}
                            <div className="ml-4 sm:ml-6">
                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                                    {education.institution}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600">{education.degree}</p>
                                <p className="text-sm sm:text-base text-gray-600">{education.duration}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Education;

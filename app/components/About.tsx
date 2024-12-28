"use client";

import { motion } from 'framer-motion';
import React, {useEffect, useRef} from 'react';
import { FaUser } from 'react-icons/fa';
import { title, content } from "../data/about.json";

const About: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <motion.div
            ref={ref}
            id="about"
            className="flex flex-1 flex-col pt-6 sm:pt-8 md:pt-12"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, ease: 'easeOut'}}
        >
            <div className="px-4 sm:px-6 flex items-center mb-4 sm:mb-6">
                <FaUser className="text-blue-700 mr-2 sm:mr-3 text-2xl sm:text-3xl md:text-4xl"/>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-700">{title}</h2>
            </div>
            <div
                className="px-4 sm:px-6 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-300 overflow-y-auto">
                {content.map((paragraph, index) => (
                    <p key={index}
                       className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-justify">
                        {paragraph}
                    </p>
                ))}
            </div>
        </motion.div>
    );
};

export default About;

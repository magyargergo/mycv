"use client";

import React from 'react';
import { motion } from 'framer-motion';
import About from './About';
import Education from './Education';
import Experience from './Experience';

interface SectionProps {
    selectedSection: string;
}

const Section: React.FC<SectionProps> = ({ selectedSection }) => {
    const renderSection = () => {
        switch (selectedSection) {
            case 'about':
                return <About />;
            case 'education':
                return <Education />;
            case 'experience':
                return <Experience />;
            default:
                return <About />; // Default to About if no match
        }
    };

    return (
        <motion.div
            key={selectedSection}
            initial={{opacity: 0, x: 20}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -20}}
            transition={{duration: 0.3}}
        >
            {renderSection()}
        </motion.div>
    );
};

export default Section;
"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SectionLayoutProps } from "./types";

export const SectionLayout: React.FC<SectionLayoutProps> = ({
    id,
    icon,
    title,
    children
}) => {
    // Create a ref for the scroll-into-view functionality
    const ref = useRef<HTMLDivElement>(null);

    // Scroll the section into view when it mounts
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <motion.div
            ref={ref}
            id={id}
            className="flex flex-1 flex-col pt-6 sm:pt-8 md:pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            {/* Section header with icon and title */}
            <div className="px-4 sm:px-6 flex items-center mb-4 sm:mb-6">
                {React.cloneElement(icon as React.ReactElement, {
                    className: "text-blue-700 mr-2 sm:mr-3 text-2xl sm:text-3xl md:text-4xl"
                })}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-700">
                    {title}
                </h2>
            </div>
            {/* Section content */}
            {children}
        </motion.div>
    );
};
'use client';

import { useEffect, useState } from 'react';
import Sidebar from './Navigation/Sidebar';
import ProfileSection from './ProfileSection';
import ContentSection from './Content/ContentSection';
import MobileNavBar from './Navigation/MobileNavBar';
import { SectionData } from "@/page";
import { Flowbite } from "flowbite-react";
import { customTheme } from "@/theme";
import { SectionType } from "@/components/types";

export default function ClientWrapper({ initialData }: { initialData: SectionData }) {
    const [selectedSection, setSelectedSection] = useState<SectionType>('about');

    // Add scroll management to prevent layout shift
    useEffect(() => {
        // Save scroll position before section change
        let scrollPosition = 0;

        const handleSectionChange = () => {
            // Save current scroll position
            scrollPosition = window.scrollY;
        };

        // Restore scroll position after section change
        const restoreScroll = () => {
            setTimeout(() => {
                window.scrollTo(0, scrollPosition);
            }, 10);
        };

        // Listen for section changes
        window.addEventListener('sectionChange', handleSectionChange);
        window.addEventListener('sectionChanged', restoreScroll);

        // Fix for mobile viewport
        const setMobileHeight = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        setMobileHeight();
        window.addEventListener('resize', setMobileHeight);
        window.addEventListener('orientationchange', setMobileHeight);

        return () => {
            window.removeEventListener('sectionChange', handleSectionChange);
            window.removeEventListener('sectionChanged', restoreScroll);
            window.removeEventListener('resize', setMobileHeight);
            window.removeEventListener('orientationchange', setMobileHeight);
        };
    }, []);

    // Handle section change with event dispatch
    const handleSectionChange = (section: SectionType) => {
        // Dispatch event before changing section
        window.dispatchEvent(new Event('sectionChange'));

        // Change section
        setSelectedSection(section);

        // Dispatch event after changing section
        setTimeout(() => {
            window.dispatchEvent(new Event('sectionChanged'));
        }, 50);
    };

    return (
        <Flowbite theme={{ theme: customTheme }}>
            <div className="bg-gray-50 min-h-screen overflow-x-hidden">
                {/* Desktop Sidebar */}
                <Sidebar
                    onSelectSection={handleSectionChange}
                    selectedSection={selectedSection}
                />

                {/* Main Content */}
                <main className="sm:ml-[60px] transition-all pb-16 sm:pb-6">
                    <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Profile Section */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-6">
                                    <ProfileSection />
                                </div>
                            </div>

                            {/* Content Section - Adapts to content height */}
                            <div className="lg:col-span-2">
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <ContentSection
                                        key={selectedSection} // Force fresh render on section change
                                        selectedSection={selectedSection}
                                        initialData={initialData}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <MobileNavBar
                        onSelectSection={handleSectionChange}
                        selectedSection={selectedSection}
                    />
                </main>
            </div>
        </Flowbite>
    );
}
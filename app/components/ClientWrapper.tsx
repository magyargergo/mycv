'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AppSidebar from './Navigation/Sidebar';
import ProfileSection from './ProfileSection';
import ContentSection from './Content/ContentSection';
import MobileNavBar from './Navigation/MobileNavBar';
import { SectionData } from "@/site/page";
import { Flowbite, Card } from "flowbite-react";
import { customTheme } from "@/theme/config";
import { SectionType } from "@/components/types";
import { ThemeProvider } from "@/theme/provider";

// Define props for ClientWrapper
interface ClientWrapperProps {
    initialData: SectionData;
    initialSection: SectionType;
}

export default function ClientWrapper({ initialData, initialSection }: ClientWrapperProps) {
    const router = useRouter();
    const [selectedSection, setSelectedSection] = useState<SectionType>(initialSection);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleSectionChange = (section: SectionType) => {
        if (section === selectedSection) return;
        setScrollPosition(window.scrollY);
        setSelectedSection(section);
        router.push(`?section=${section}`);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            window.scrollTo({ top: scrollPosition, behavior: 'auto' });
        }, 10);
        return () => clearTimeout(timer);
    }, [selectedSection, scrollPosition]);

    // Mobile Viewport Height Fix (keep as is)
    useEffect(() => {
        const setMobileHeight = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
        setMobileHeight();
        window.addEventListener('resize', setMobileHeight);
        window.addEventListener('orientationchange', setMobileHeight);
        return () => {
            window.removeEventListener('resize', setMobileHeight);
            window.removeEventListener('orientationchange', setMobileHeight);
        };
    }, []);

    return (
        <ThemeProvider defaultTheme="system" storageKey="resume-theme">
            <Flowbite theme={{ theme: customTheme }}>
                <div className="bg-background min-h-screen overflow-x-hidden">
                    <AppSidebar
                        onSelectSection={handleSectionChange}
                        selectedSection={selectedSection}
                    />
                    <main className="sm:ml-[60px] transition-all pb-16 sm:pb-6">
                        <div className="max-w-6xl mx-auto p-6 md:p-8 lg:p-10">
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                                <div className="lg:col-span-2">
                                    <div className="sticky top-6">
                                        <ProfileSection />
                                    </div>
                                </div>
                                <div className="lg:col-span-3">
                                    <Card>
                                        <ContentSection
                                            selectedSection={selectedSection}
                                            initialData={initialData}
                                        />
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <MobileNavBar
                            onSelectSection={handleSectionChange}
                            selectedSection={selectedSection}
                        />
                    </main>
                </div>
            </Flowbite>
        </ThemeProvider>
    );
}
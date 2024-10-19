"use client";

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import ProfileCard from './components/ProfileCard';
import Section from './components/Section';
import MobileNavBar from './components/MobileNavBar';

export default function Home() {
    const [selectedSection, setSelectedSection] = useState('about');

    return (
        <div className="flex bg-gray-100 min-h-screen">
            {/* Sidebar - hidden on mobile, visible from sm breakpoint */}
            <Sidebar onSelectSection={setSelectedSection} selectedSection={selectedSection} />

            <main className="flex flex-col flex-grow w-full sm:ml-16 md:ml-48 lg:ml-64 xl:ml-72 transition-all duration-300 ease-in-out">
                <div className="flex flex-col flex-grow p-4 sm:p-6 md:p-8 lg:p-10 lg:flex-row lg:space-x-8 mb-16 sm:mb-0 md:h-screen">
                    {/* Profile Card */}
                    <section className="flex flex-col h-full w-full lg:w-[45%] xl:w-[40%] bg-gray-50 rounded-xl shadow-lg mb-6 lg:mb-0">
                        <ProfileCard />
                    </section>

                    {/* Main Section Content */}
                    <section className="flex flex-1 w-full lg:w-[55%] xl:w-[60%] bg-gray-50 rounded-xl shadow-lg p-4 sm:p-6">
                        <Section selectedSection={selectedSection} />
                    </section>
                </div>

                {/* Mobile Navigation - visible on mobile, hidden from sm breakpoint */}
                <div className="sm:hidden mt-auto">
                    <MobileNavBar onSelectSection={setSelectedSection} selectedSection={selectedSection} />
                </div>
            </main>
        </div>
    );
}
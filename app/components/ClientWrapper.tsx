'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import ProfileCard from './ProfileCard';
import Section, {SectionType} from './Section';
import MobileNavBar from './MobileNavBar';
import { SectionData } from "@/page";

export default function ClientWrapper({ initialData }: { initialData: SectionData }) {
    const [selectedSection, setSelectedSection] = useState<SectionType>('about');

    return (
        <div className="flex bg-gray-100 min-h-screen">
            <Sidebar
                onSelectSection={setSelectedSection}
                selectedSection={selectedSection}
            />

            <main className="flex flex-col flex-grow w-full sm:ml-16 md:ml-48 lg:ml-64 xl:ml-72 transition-all duration-300 ease-in-out">
                <div className="flex flex-col flex-grow p-4 sm:p-6 md:p-8 lg:p-10 lg:flex-row lg:space-x-8 mb-16 sm:mb-0 md:h-screen">
                    <section className="flex flex-col h-full w-full lg:w-[45%] xl:w-[40%] bg-gray-50 rounded-xl shadow-lg mb-6 lg:mb-0">
                        <ProfileCard />
                    </section>

                    <section className="flex flex-1 w-full lg:w-[55%] xl:w-[60%] bg-gray-50 rounded-xl shadow-lg p-4 sm:p-6">
                        <Section
                            selectedSection={selectedSection}
                            initialData={initialData}
                        />
                    </section>
                </div>

                <div className="sm:hidden mt-auto">
                    <MobileNavBar
                        onSelectSection={setSelectedSection}
                        selectedSection={selectedSection}
                    />
                </div>
            </main>
        </div>
    );
}
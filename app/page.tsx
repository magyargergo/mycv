"use client";

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import ProfileCard from './components/ProfileCard';
import Section from './components/Section';

export default function Home() {
    const [selectedSection, setSelectedSection] = useState('about'); // Default to 'about'

    return (
        <div className="flex bg-gray-100 h-screen">
            <Sidebar onSelectSection={setSelectedSection} selectedSection={selectedSection} />

            <main className="flex flex-1 ml-40 p-10 space-x-8 max-w-[90%]">
                <section className="w-[45%] bg-white rounded-xl shadow-lg">
                    <ProfileCard />
                </section>

                <section className="flex flex-1 w-[50%] bg-white rounded-xl shadow-lg p-8">
                    <Section selectedSection={selectedSection} />
                </section>
            </main>
        </div>
    );
}
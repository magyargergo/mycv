'use client';

import React from 'react';
import { Sidebar } from 'flowbite-react';
import { NAV_ITEMS } from './NavItems';
import { SectionType } from '../types';

interface SidebarProps {
    onSelectSection: (section: SectionType) => void;
    selectedSection: SectionType;
}

const AppSidebar: React.FC<SidebarProps> = ({ onSelectSection, selectedSection }) => {
    const logoSrc = "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgNDAgNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM2MzY2ZjEiLz4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJJbnRlciwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNmZmZmZmYiPkdNPC90ZXh0Pgo8L3N2Zz4K";

    return (
        <div className="fixed top-0 left-0 h-screen w-[60px] z-50">
            <Sidebar
                aria-label="Main navigation sidebar"
                collapsed={true}
                className="h-full"
            >
                <Sidebar.Logo href="#" img={logoSrc} />

                <Sidebar.Items className="flex-grow">
                    <Sidebar.ItemGroup>
                        {NAV_ITEMS.map((item) => (
                            <Sidebar.Item
                                key={item.section}
                                as="button"
                                onClick={() => onSelectSection(item.section)}
                                icon={item.icon}
                                aria-label={item.label}
                                active={selectedSection === item.section}
                            >
                                {item.label}
                            </Sidebar.Item>
                        ))}
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
};

export default AppSidebar;

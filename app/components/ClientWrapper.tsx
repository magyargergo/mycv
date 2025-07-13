'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AppSidebar from './Navigation/Sidebar';
import ProfileSection from './ProfileSection';
import ContentSection from './Content/ContentSection';
import MobileNavBar from './Navigation/MobileNavBar';
import { SectionData } from '@/site/page';
import { Flowbite, Card } from 'flowbite-react';
import { customTheme } from '@/theme/config';
import { SectionType } from '@/components/types';
import { ThemeProvider } from '@/theme/provider';

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
        <div className="bg-background min-h-screen overflow-x-hidden bg-gradient-to-br from-background to-background/95">
          <AppSidebar onSelectSection={handleSectionChange} selectedSection={selectedSection} />
          <main className="sm:ml-[60px] md:ml-[70px] transition-all pb-16 sm:pb-6">
            <div className="max-w-[95%] mobile-landscape:max-w-[98%] tablet-landscape:max-w-[95%] 2xl:max-w-[80%] mx-auto p-4 mobile-landscape:p-3 tablet:p-6 md:p-8 lg:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4 mobile-landscape:gap-3 tablet:gap-5 md:gap-8 lg:gap-10">
                <div className="sm:col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2">
                  <div className="sticky top-3 mobile-landscape:top-2 tablet:top-4 md:top-6">
                    <ProfileSection />
                  </div>
                </div>
                <div className="sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-5">
                  <Card className="shadow-md hover:shadow-lg transition-all duration-300">
                    <ContentSection selectedSection={selectedSection} initialData={initialData} />
                  </Card>
                </div>
              </div>
            </div>
            <MobileNavBar onSelectSection={handleSectionChange} selectedSection={selectedSection} />
          </main>
        </div>
      </Flowbite>
    </ThemeProvider>
  );
}

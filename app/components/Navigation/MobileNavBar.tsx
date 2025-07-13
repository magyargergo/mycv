'use client';

import React, { useState } from 'react';
import { NAV_ITEMS } from './NavItems';
import { SectionType } from '../types';
import { ThemeToggle } from '@/theme/toggle';
import { customComponents } from '@/theme/config';
import { downloadCV } from '@/lib/downloadService';
import {
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaDownload,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

interface MobileNavBarProps {
  onSelectSection: (section: SectionType) => void;
  selectedSection: SectionType;
}

const MobileNavBar: React.FC<MobileNavBarProps> = ({ onSelectSection, selectedSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    {
      icon: <FaDownload size={18} />,
      label: 'Download CV',
      action: () => {
        downloadCV();
        setIsMenuOpen(false);
      },
      href: undefined,
      primary: true,
    },
    {
      icon: <FaLinkedin size={18} />,
      label: 'LinkedIn',
      action: () => setIsMenuOpen(false),
      href: 'https://linkedin.com/in/gergomagyar',
      primary: false,
    },
    {
      icon: <FaGithub size={18} />,
      label: 'GitHub',
      action: () => setIsMenuOpen(false),
      href: 'https://github.com/magyargergo',
      primary: false,
    },
    {
      icon: <FaEnvelope size={18} />,
      label: 'Email',
      action: () => setIsMenuOpen(false),
      href: 'mailto:gergomagyar@icloud.com',
      primary: false,
    },
    {
      icon: <FaPhone size={18} />,
      label: 'Call',
      action: () => setIsMenuOpen(false),
      href: 'tel:+447951225614',
      primary: false,
    },
  ];

  return (
    <>
      {/* Theme toggle with scrollbar-aware positioning */}
      <div className={customComponents.themeToggleContainer}>
        <ThemeToggle />
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 sm:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Floating Menu Items */}
      {isMenuOpen && (
        <div className="fixed bottom-28 left-1/2 transform -translate-x-1/2 z-50 sm:hidden">
          <div className="flex flex-col-reverse items-center space-y-reverse space-y-6 pointer-events-none">
            {menuItems.map((item, index) => (
              <div
                key={item.label}
                className={`transform transition-all duration-300 ease-out pointer-events-auto ${
                  isMenuOpen
                    ? 'translate-y-0 opacity-100 scale-100'
                    : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  zIndex: 60 + index, // Ensure proper stacking order
                }}
              >
                <div className="flex items-center space-x-4">
                  {/* Label */}
                  <div className="bg-card text-card-foreground px-3 py-2 rounded-lg text-xs font-medium shadow-lg border border-border whitespace-nowrap min-w-max backdrop-blur-sm">
                    {item.label}
                  </div>

                  {/* Action Button */}
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onClick={item.action}
                      className={`p-2 sm:p-3 rounded-full transition-all duration-200 hover:-translate-y-1 group focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-ring shadow-sm hover:shadow ${
                        item.primary
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                          : 'bg-secondary hover:bg-accent text-foreground'
                      }`}
                      style={{ zIndex: 70 + index }}
                      aria-label={item.label}
                    >
                      {React.cloneElement(item.icon, { size: 16 })}
                    </a>
                  ) : (
                    <button
                      onClick={item.action}
                      className={`p-2 sm:p-3 rounded-full transition-all duration-200 hover:-translate-y-1 group focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-ring shadow-sm hover:shadow ${
                        item.primary
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                          : 'bg-secondary hover:bg-accent text-foreground'
                      }`}
                      style={{ zIndex: 70 + index }}
                      aria-label={item.label}
                    >
                      {React.cloneElement(item.icon, { size: 16 })}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile bottom navigation with proper spacing for circular button */}
      <nav className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground shadow-lg sm:hidden z-50 pb-safe">
        {/* Circular Menu Button */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-8">
          <button
            onClick={toggleMenu}
            className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring border-4 border-background shadow-sm hover:shadow ${
              isMenuOpen
                ? 'bg-destructive hover:bg-destructive/90 text-destructive-foreground scale-105'
                : 'bg-primary hover:bg-primary/90 text-primary-foreground scale-100 hover:scale-105'
            }`}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {/* Icon */}
            <div
              className={`transform transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`}
            >
              {isMenuOpen ? (
                <FaTimes className="text-current" size={22} />
              ) : (
                <FaBars className="text-current" size={22} />
              )}
            </div>
          </button>
        </div>

        {/* Navigation items with proper spacing */}
        <div className="grid grid-cols-4 h-16">
          {/* Left navigation items */}
          {NAV_ITEMS.slice(0, 2).map((item, index) => {
            const Icon = item.icon;
            const isActive = selectedSection === item.section;

            return (
              <button
                key={item.section}
                onClick={() => onSelectSection(item.section)}
                className={`
                  flex flex-col items-center justify-center h-full transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring
                  ${
                    isActive
                      ? 'bg-primary/90 text-primary-foreground'
                      : 'hover:bg-primary/80 text-primary-foreground/90 hover:text-primary-foreground'
                  }
                  ${index === 1 ? 'mr-10' : ''}
                `}
                aria-label={item.label}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <Icon
                  className={`mb-1 transition-all duration-200 ${isActive ? 'text-primary-foreground' : ''}`}
                  size={20}
                />
                <span
                  className={`text-xs font-medium transition-all duration-200 ${isActive ? 'font-semibold' : ''}`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* Right navigation items */}
          {NAV_ITEMS.slice(2).map((item, index) => {
            const Icon = item.icon;
            const isActive = selectedSection === item.section;

            return (
              <button
                key={item.section}
                onClick={() => onSelectSection(item.section)}
                className={`
                  flex flex-col items-center justify-center h-full transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring
                  ${
                    isActive
                      ? 'bg-primary/90 text-primary-foreground'
                      : 'hover:bg-primary/80 text-primary-foreground/90 hover:text-primary-foreground'
                  }
                  ${index === 0 ? 'ml-10' : ''}
                `}
                aria-label={item.label}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <Icon
                  className={`mb-1 transition-all duration-200 ${isActive ? 'text-primary-foreground' : ''}`}
                  size={20}
                />
                <span
                  className={`text-xs font-medium transition-all duration-200 ${isActive ? 'font-semibold' : ''}`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default MobileNavBar;

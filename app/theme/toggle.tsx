'use client';

import { useTheme } from './provider';
import { Button } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Render placeholder with same dimensions to prevent layout shift
  if (!mounted) {
    return (
      <div className="flex items-center justify-center invisible" aria-hidden="true">
        <div className="h-[30px] w-[30px]"></div>
      </div>
    );
  }

  return (
    <Button
      color="light"
      size="xs"
      pill
      onClick={toggleTheme}
      className="p-1.5 flex items-center justify-center bg-transparent hover:bg-background/20 border-0 select-none"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <FaSun className="h-5 w-5 select-none pointer-events-none" />
      ) : (
        <FaMoon className="h-5 w-5 select-none pointer-events-none" />
      )}
      <span className="sr-only">
        {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
    </Button>
  );
}

import type { CustomFlowbiteTheme } from 'flowbite-react';

// CSS Variable theme colors - to be used in globals.css
export const themeColors = {
  light: {
    background: '210 33% 99%', // very light blue-gray for subtle sophistication
    foreground: '220 35% 15%', // deep blue-gray for better readability
    card: '0 0% 100%', // pure white for cards
    cardForeground: '220 35% 15%',
    popover: '0 0% 100%',
    popoverForeground: '220 35% 15%',
    primary: '215 60% 45%', // professional blue, slightly deeper
    primaryForeground: '0 0% 100%', // white
    secondary: '210 30% 97%', // subtle light blue-gray
    secondaryForeground: '220 35% 15%',
    muted: '210 30% 97%',
    mutedForeground: '215 25% 45%', // balanced muted text
    accent: '215 25% 94%', // subtle accent
    accentForeground: '220 35% 15%',
    destructive: '0 84% 60%',
    destructiveForeground: '0 0% 100%',
    border: '214 32% 91%',
    input: '214 32% 91%',
    ring: '215 60% 45%', // focus ring - matches primary
  },
  dark: {
    background: '222 20% 14%', // rich dark blue-gray
    foreground: '210 15% 90%', // softer white text for better readability
    card: '223 18% 18%', // subtle difference from background
    cardForeground: '210 15% 90%',
    popover: '223 18% 18%',
    popoverForeground: '210 15% 90%',
    primary: '215 55% 50%', // vibrant but professional blue
    primaryForeground: '0 0% 100%',
    secondary: '222 16% 22%', // subtle secondary
    secondaryForeground: '210 15% 90%',
    muted: '222 14% 20%',
    mutedForeground: '215 12% 65%', // balanced muted text
    accent: '223 15% 24%', // subtle accent
    accentForeground: '210 15% 90%',
    destructive: '0 50% 40%', // muted red
    destructiveForeground: '210 15% 90%',
    border: '223 18% 25%', // subtle border
    input: '223 18% 25%',
    ring: '215 55% 50%', // focus ring - matches primary
  },
};

// Flowbite custom theme configuration
export const customTheme: CustomFlowbiteTheme = {
  // Global theme
  button: {
    base: 'group flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300',
    color: {
      blue: 'text-primary-foreground bg-primary hover:bg-primary/90 border-0 active:bg-primary/80 shadow-sm hover:shadow',
      green:
        'text-white bg-teal-500 hover:bg-teal-600 border-0 active:bg-teal-700 shadow-sm hover:shadow',
      light:
        'text-foreground bg-background/70 border border-border hover:bg-accent hover:text-accent-foreground shadow-sm hover:shadow',
    },
    size: {
      xs: 'text-xs px-2 py-1 rounded-sm',
      sm: 'text-sm px-3 py-2 rounded-md',
      md: 'text-sm px-4 py-2.5 rounded-md',
      lg: 'text-base px-5 py-2.5 rounded-lg',
      xl: 'text-base px-6 py-3 rounded-lg',
    },
  },

  card: {
    root: {
      base: 'flex rounded-lg border bg-card text-card-foreground shadow-md transition-all duration-300',
      children: 'flex h-full flex-col p-6',
      horizontal: {
        off: 'flex-col',
        on: 'flex-col md:flex-row',
      },
    },
  },

  badge: {
    root: {
      base: 'flex h-fit items-center gap-2 font-medium transition-all duration-200 rounded-full',
      color: {
        info: 'bg-gradient-to-r from-primary/20 to-primary/10 text-primary border border-primary/30 shadow-sm hover:shadow hover:-translate-y-px dark:from-primary/30 dark:to-primary/20 dark:text-primary-foreground dark:border-primary/40 dark:font-medium',
        gray: 'bg-secondary text-secondary-foreground border',
        success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
        purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
      },
      size: {
        xs: 'px-2 py-1 text-xs',
        sm: 'px-3 py-1.5 text-xs',
      },
    },
  },

  tooltip: {
    base: 'absolute inline-block z-50 rounded-md py-2 px-3 text-sm font-medium shadow-md',
    style: {
      light: 'border bg-popover text-popover-foreground',
    },
    animation: 'transition-opacity',
  },

  // Add Sidebar theme
  sidebar: {
    root: {
      base: 'h-full hidden sm:flex',
      inner:
        'h-full overflow-y-auto overflow-x-hidden rounded-none bg-primary py-4 px-3 shadow-lg text-primary-foreground',
    },
    logo: {
      base: 'mb-2 flex items-center justify-center h-16 border-b border-primary-foreground/10 p-0',
      img: '',
    },
    items: {
      base: 'pt-4',
    },
    itemGroup: {
      base: 'space-y-2 border-t-0 pt-0 first:mt-0 first:border-t-0 first:pt-0',
    },
    item: {
      base: 'flex items-center justify-center rounded-md p-3 text-base font-normal text-primary-foreground transition-colors duration-150 hover:bg-primary/80 [&>span]:hidden',
      active: 'bg-primary/90 text-primary-foreground',
      icon: {
        base: 'h-5 w-5 flex-shrink-0 text-primary-foreground transition duration-75',
        active: 'text-primary-foreground',
      },
    },
  },
} as const;

// Define custom CSS component classes
export const customComponents = {
  // Theme toggle positioning - scrollbar-aware
  themeToggleContainer:
    'fixed top-3 z-50 bg-background/10 backdrop-blur-sm rounded-full shadow-sm p-0.5 right-0 mr-3 sm:mr-6 md:mr-10',

  // Education degree badges
  educationBadge:
    'dark:bg-primary/30 dark:text-primary-foreground/95 dark:border-primary/40 dark:font-medium dark:shadow-sm',
};

// Create a configuration object
const themeConfig = {
  themeColors,
  customTheme,
  customComponents,
  themeStorageKey: 'resume-theme',
};

// Export the config
export default themeConfig;

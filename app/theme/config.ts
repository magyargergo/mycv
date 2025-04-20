import type { CustomFlowbiteTheme } from 'flowbite-react';

// CSS Variable theme colors - to be used in globals.css
export const themeColors = {
  light: {
    background: '0 0% 100%', // white
    foreground: '222 47% 11%', // dark gray/blue
    card: '0 0% 100%', // white
    cardForeground: '222 47% 11%',
    popover: '0 0% 100%',
    popoverForeground: '222 47% 11%',
    primary: '210 64% 49%', // More subtle blue
    primaryForeground: '0 0% 100%', // white
    secondary: '210 40% 96%', // gray-100
    secondaryForeground: '222 47% 11%',
    muted: '210 40% 96%', // gray-100
    mutedForeground: '215 20% 65%', // gray-500
    accent: '210 40% 96%', // gray-100
    accentForeground: '222 47% 11%',
    destructive: '0 84% 60%',
    destructiveForeground: '0 0% 100%',
    border: '214 32% 91%', // gray-200
    input: '214 32% 91%',
    ring: '210 64% 49%', // focus ring - blue
  },
  dark: {
    background: '220 15% 16%', // neutral dark gray with hint of warmth
    foreground: '210 10% 80%', // softer, slightly warm white text
    card: '216 14% 20%', // subtle difference from background
    cardForeground: '210 10% 80%',
    popover: '216 14% 20%',
    popoverForeground: '210 10% 80%',
    primary: '208 55% 52%', // slightly desaturated, warmer blue
    primaryForeground: '0 0% 95%',
    secondary: '215 14% 25%', // subtle secondary
    secondaryForeground: '210 10% 80%',
    muted: '215 12% 22%',
    mutedForeground: '215 10% 60%', // balanced muted text
    accent: '213 12% 26%', // subtle accent with reduced saturation
    accentForeground: '210 10% 80%',
    destructive: '0 50% 40%', // muted red
    destructiveForeground: '210 10% 80%',
    border: '216 15% 28%', // subtle border
    input: '216 15% 28%',
    ring: '208 55% 52%', // focus ring - matches primary
  }
};

// Flowbite custom theme configuration
export const customTheme: CustomFlowbiteTheme = {
  // Global theme
  button: {
    base: "group flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300",
    color: {
      blue: "text-primary-foreground bg-primary hover:bg-primary/90 border-0 active:bg-primary/80 shadow-sm hover:shadow",
      green: "text-white bg-teal-500 hover:bg-teal-600 border-0 active:bg-teal-700 shadow-sm hover:shadow",
      light: "text-foreground bg-background/70 border border-border hover:bg-accent hover:text-accent-foreground shadow-sm hover:shadow"
    },
    size: {
      xs: "text-xs px-2 py-1 rounded-sm",
      sm: "text-sm px-3 py-2 rounded-md",
      md: "text-sm px-4 py-2.5 rounded-md",
      lg: "text-base px-5 py-2.5 rounded-lg",
      xl: "text-base px-6 py-3 rounded-lg"
    }
  },

  card: {
    root: {
      base: "flex rounded-lg border bg-card text-card-foreground shadow-md transition-all duration-300",
      children: "flex h-full flex-col p-6",
      horizontal: {
        off: "flex-col",
        on: "flex-col md:flex-row"
      }
    }
  },

  badge: {
    root: {
      base: "flex h-fit items-center gap-2 font-medium transition-colors rounded-sm",
      color: {
        info: "bg-primary/10 text-primary border border-primary/20 dark:bg-primary/20 dark:text-primary-foreground dark:border-primary/30 dark:font-medium",
        gray: "bg-secondary text-secondary-foreground border",
        success: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
        purple: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
      },
      size: {
        xs: "p-1 text-xs rounded-sm",
        sm: "px-3 py-1.5 text-xs rounded-md"
      }
    }
  },

  tooltip: {
    base: "absolute inline-block z-50 rounded-md py-2 px-3 text-sm font-medium shadow-md",
    style: {
      light: "border bg-popover text-popover-foreground",
    },
    animation: "transition-opacity"
  },

  // Add Sidebar theme
  sidebar: {
    root: {
      base: "h-full hidden sm:flex",
      inner: "h-full overflow-y-auto overflow-x-hidden rounded-none bg-primary py-4 px-3 shadow-lg text-primary-foreground"
    },
    logo: {
      base: "mb-2 flex items-center justify-center h-16 border-b border-primary-foreground/10 p-0",
      img: "",
    },
    items: {
      base: "pt-4",
    },
    itemGroup: {
      base: "space-y-2 border-t-0 pt-0 first:mt-0 first:border-t-0 first:pt-0",
    },
    item: {
      base: "flex items-center justify-center rounded-md p-3 text-base font-normal text-primary-foreground transition-colors duration-150 hover:bg-primary/80 [&>span]:hidden",
      active: "bg-primary/90 text-primary-foreground",
      icon: {
        base: "h-5 w-5 flex-shrink-0 text-primary-foreground transition duration-75",
        active: "text-primary-foreground",
      },
    }
  }
} as const;

// Define custom CSS component classes
export const customComponents = {
  // Theme toggle positioning - scrollbar-aware
  themeToggleContainer: "fixed top-3 z-50 bg-background/10 backdrop-blur-sm rounded-full shadow-sm p-0.5 right-0 mr-3 sm:mr-6 md:mr-10",
  
  // Education degree badges
  educationBadge: "dark:bg-primary/30 dark:text-primary-foreground/95 dark:border-primary/40 dark:font-medium dark:shadow-sm",
};

// Export everything from a single location
export default {
  themeColors,
  customTheme,
  customComponents,
  themeStorageKey: 'resume-theme',
}; 
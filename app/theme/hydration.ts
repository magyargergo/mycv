// Theme hydration script
// This script runs before the page renders to set the correct theme
export const themeScript = `
(function() {
  try {
    const STORAGE_KEY = 'resume-theme';
    const storedTheme = localStorage.getItem(STORAGE_KEY);
    
    // Clear existing theme classes
    document.documentElement.classList.remove('light', 'dark');
    
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (storedTheme === 'light') {
      document.documentElement.classList.add('light');
    } else if (storedTheme === 'system' || !storedTheme) {
      // Check system preference if theme is set to system or no preference saved
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.add(systemPrefersDark ? 'dark' : 'light');
      
      // If no preference was set, default to system and save it
      if (!storedTheme) {
        localStorage.setItem(STORAGE_KEY, 'system');
      }
    }
  } catch (e) {
    // If localStorage is not available, default to light theme
    document.documentElement.classList.add('light');
  }
})();
`;

export default themeScript;

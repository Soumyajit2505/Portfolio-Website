import { useEffect } from "react";

export const ThemeToggle = () => {
  useEffect(() => {
    // Force dark mode permanently
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  // No toggle button rendered — dark mode only
  return null;
};

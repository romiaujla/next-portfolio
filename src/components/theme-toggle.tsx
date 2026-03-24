"use client";

import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const toggleTheme = () => {
    if (theme === "system") {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setTheme(systemDark ? "light" : "dark");
      return;
    }

    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-(--muted) transition-colors hover:text-(--foreground)"
      aria-label="Toggle theme"
    >
      {!mounted ? null : resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}

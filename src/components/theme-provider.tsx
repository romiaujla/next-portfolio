"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
};

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = "portfolio-theme";

function subscribeToSystemTheme(callback: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getSystemThemeSnapshot(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function resolveDarkMode(theme: Theme): boolean {
  if (theme === "dark") return true;
  if (theme === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme(theme: Theme) {
  const isDark = resolveDarkMode(theme);
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
}: ThemeProviderProps) {
  const systemTheme = useSyncExternalStore<ResolvedTheme>(
    subscribeToSystemTheme,
    getSystemThemeSnapshot,
    (): ResolvedTheme => "light",
  );

  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme;
    const storedTheme = window.localStorage.getItem(
      STORAGE_KEY,
    ) as Theme | null;
    return storedTheme ?? defaultTheme;
  });

  const resolvedTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    applyTheme(resolvedTheme);
  }, [resolvedTheme]);

  const setTheme = useCallback((nextTheme: Theme) => {
    setThemeState(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  }, []);

  const contextValue = useMemo(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme, setTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}

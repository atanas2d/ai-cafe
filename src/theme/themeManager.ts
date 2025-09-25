import lightThemeHref from 'primereact/resources/themes/lara-light-blue/theme.css?url';
import darkThemeHref from 'primereact/resources/themes/lara-dark-blue/theme.css?url';

const THEME_LINK_ID = 'prime-react-theme';

export type ThemeMode = 'light' | 'dark';

const themeHrefByMode: Record<ThemeMode, string> = {
  light: lightThemeHref,
  dark: darkThemeHref
};

export const applyTheme = (mode: ThemeMode): void => {
  const href = themeHrefByMode[mode];
  let link = document.getElementById(THEME_LINK_ID) as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement('link');
    link.id = THEME_LINK_ID;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    document.head.appendChild(link);
  }

  if (!link.href.endsWith(href)) {
    link.href = href;
  }

  document.documentElement.dataset.theme = mode;
  document.body.dataset.theme = mode;
};

export const getStoredTheme = (): ThemeMode | null => {
  if (typeof window === 'undefined') return null;
  const stored = window.localStorage.getItem('ai-cafe-theme') as ThemeMode | null;
  return stored ?? null;
};

export const persistTheme = (mode: ThemeMode): void => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem('ai-cafe-theme', mode);
};

export const initializeTheme = (): ThemeMode => {
  const stored = getStoredTheme();
  if (stored) {
    applyTheme(stored);
    return stored;
  }

  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const mode: ThemeMode = prefersDark ? 'dark' : 'light';
  applyTheme(mode);
  return mode;
};

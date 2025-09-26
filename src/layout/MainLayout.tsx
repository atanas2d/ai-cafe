import { useMemo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import type { MenuItem } from 'primereact/menuitem';
import { SelectButton } from 'primereact/selectbutton';
import type { ThemeMode } from '../theme/themeManager';

const logoUrl = new URL('../assets/images/ai-cafe-logo.svg', import.meta.url).href;

interface MainLayoutProps {
  onThemeChange?: (mode: ThemeMode) => void;
  themeMode?: ThemeMode;
}

const themeOptions = [
  {
    label: 'Classic',
    value: 'light',
    icon: 'pi pi-sun',
    description: 'Balanced light theme with Trane blues.',
    swatch: 'linear-gradient(135deg, #1d4ed8, #9333ea)'
  },
  {
    label: 'Midnight',
    value: 'dark',
    icon: 'pi pi-moon',
    description: 'Low-light experience for late sessions.',
    swatch: 'linear-gradient(135deg, #0ea5e9, #312e81)'
  },
  {
    label: 'Vibrant',
    value: 'vibrant',
    icon: 'pi pi-star',
    description: 'Playful gradient accents and indigo focus.',
    swatch: 'linear-gradient(135deg, #f97316, #ec4899, #6366f1)'
  }
];

type ThemeOption = (typeof themeOptions)[number];

export const MainLayout = ({ onThemeChange, themeMode = 'light' }: MainLayoutProps): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const items = useMemo<MenuItem[]>(() => {
    const navItems = [
      { label: 'Home', path: '/' },
      { label: 'Meetings', path: '/meetings' },
      { label: 'Tools', path: '/tools' },
      { label: 'Resources', path: '/resources' },
      { label: 'AI News', path: '/news' },
      { label: 'Animations', path: '/animations' }
    ];

    return navItems.map((item) => ({
      label: item.label,
      command: () => navigate(item.path),
      className: location.pathname === item.path ? 'menubar-item-active' : undefined
    }));
  }, [navigate, location.pathname]);

  const start = (
    <a
      className="flex align-items-center gap-2"
      onClick={(event) => {
        event.preventDefault();
        navigate('/');
      }}
      href="/"
    >
      <img src={logoUrl} alt="AI Cafe logo" width={38} height={38} />
      <span className="font-semibold text-xl">AI Cafe</span>
    </a>
  );

  const end = (
    <div className="flex align-items-center gap-3">
      <span className="text-sm text-500 hidden md:block">
        {location.pathname === '/' ? 'Learning Community' : 'AI Cafe Platform'}
      </span>
      <SelectButton
        value={themeMode}
        options={themeOptions as unknown as Array<Record<string, unknown>>}
        onChange={(event) => {
          const nextTheme = event.value as ThemeMode | null;
          if (nextTheme && nextTheme !== themeMode) {
            onThemeChange?.(nextTheme);
          }
        }}
        allowEmpty={false}
        aria-label="Theme selector"
        itemTemplate={(option) => (
          <div className="flex flex-column align-items-start">
            <span className="flex align-items-center gap-2 font-medium">
              <span
                className="theme-option-swatch"
                aria-hidden
                style={{ backgroundImage: (option as ThemeOption).swatch }}
              />
              <i className={(option as ThemeOption).icon} aria-hidden />
              {(option as ThemeOption).label}
            </span>
            <span className="text-xs text-500 hidden xl:block" style={{ maxWidth: '12rem', lineHeight: 1.3 }}>
              {(option as ThemeOption).description}
            </span>
          </div>
        )}
        className="theme-select-button"
      />
    </div>
  );

  return (
    <div className="min-h-screen surface-ground flex flex-column">
      <header className="shadow-1 surface-card sticky top-0 z-5">
        <Menubar model={items} start={start} end={end} className="surface-card" />
      </header>
      <main className="flex-auto">
        <Outlet />
      </main>
      <footer className="surface-section py-5">
        <div className="px-4 md:px-6 lg:px-8 flex flex-column md:flex-row md:align-items-center md:justify-content-between gap-3">
          <div>
            <span className="font-semibold">AI Cafe</span>
            <span className="text-500 ml-2">Nuvolo & Trane Technologies AI Learning Initiative</span>
          </div>
          <div className="flex align-items-center gap-3 text-500">
            <span>© {new Date().getFullYear()} AI Cafe Community</span>
            <a
              href="https://github.com/atanas2d/ai-cafe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500"
            >
              View source
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

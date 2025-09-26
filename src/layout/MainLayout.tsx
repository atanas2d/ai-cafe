import { useMemo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import type { MenuItem } from 'primereact/menuitem';
import type { ThemeMode } from '../theme/themeManager';
import { ThemeToggle } from '../components/ThemeToggle';

interface MainLayoutProps {
  onThemeChange?: (mode: ThemeMode) => void;
  themeMode?: ThemeMode;
}

export const MainLayout = ({ onThemeChange, themeMode = 'classic' }: MainLayoutProps): JSX.Element => {
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
      className="flex align-items-center"
      onClick={(event) => {
        event.preventDefault();
        navigate('/');
      }}
      href="/"
    >
      <span className="app-brand">
        <span className="app-brand__bean" aria-hidden="true" />
        <span className="app-brand__text">
          <span>AI</span>
          <span>Cafe</span>
        </span>
      </span>
    </a>
  );

  const end = (
    <div className="flex align-items-center gap-3">
      <span className="text-sm text-500 hidden lg:block">
        {location.pathname === '/' ? 'Learning Community' : 'AI Cafe Platform'}
      </span>
      <ThemeToggle
        value={themeMode}
        onChange={(nextTheme) => {
          if (nextTheme !== themeMode) {
            onThemeChange?.(nextTheme);
          }
        }}
      />
    </div>
  );

  return (
    <div className="min-h-screen surface-ground flex flex-column">
      <header className="app-header sticky top-0 z-5">
        <div className="app-header__inner px-3 md:px-4 lg:px-6">
          <Menubar model={items} start={start} end={end} className="app-menubar" />
        </div>
      </header>
      <main className="flex-auto">
        <Outlet />
      </main>
      <footer className="surface-section py-5">
        <div className="px-4 md:px-6 lg:px-8 section-container flex flex-column md:flex-row md:align-items-center md:justify-content-between gap-3">
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

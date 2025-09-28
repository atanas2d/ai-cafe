import { useMemo, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import type { MenuItem } from 'primereact/menuitem';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import type { ThemeMode } from '../theme/themeManager';
import { ThemeToggle } from '../components/ThemeToggle';

interface MainLayoutProps {
  onThemeChange?: (mode: ThemeMode) => void;
  themeMode?: ThemeMode;
}

export const MainLayout = ({ onThemeChange, themeMode = 'classic' }: MainLayoutProps): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const items = useMemo<MenuItem[]>(() => {
    const navItems = [
      { label: 'Home', path: '/' },
      { label: 'Meetings', path: '/meetings' },
      { label: 'Tools', path: '/tools' },
      { label: 'Resources', path: '/resources' },
      { label: 'AI News', path: '/news' },
      { label: 'About', path: '/about' }
    ];

    const navigationItems: MenuItem[] = navItems.map((item) => ({
      label: item.label,
      command: () => {
        navigate(item.path);
        setIsMobileMenuVisible(false);
      },
      className: location.pathname === item.path ? 'menubar-item-active' : ''
    }));

    // Add theme switcher as last menu item for desktop only with separator
    navigationItems.push({
      template: (
        <div className="hidden lg:flex theme-menu-item-wrapper">
          <div className="theme-separator"></div>
          <div className="theme-menu-item">
            <ThemeToggle
              value={themeMode}
              onChange={(nextTheme) => {
                if (nextTheme !== themeMode) {
                  onThemeChange?.(nextTheme);
                }
              }}
            />
          </div>
        </div>
      )
    });

    return navigationItems;
  }, [navigate, location.pathname, themeMode, onThemeChange]);

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
      <div className="lg:hidden">
        <ThemeToggle
          value={themeMode}
          onChange={(nextTheme) => {
            if (nextTheme !== themeMode) {
              onThemeChange?.(nextTheme);
            }
          }}
        />
      </div>
      <Button
        icon="pi pi-bars"
        className="p-button-text lg:hidden"
        onClick={() => setIsMobileMenuVisible(true)}
        aria-label="Open navigation menu"
      />
    </div>
  );

  return (
    <div className="min-h-screen surface-ground flex flex-column">
      <header className="app-header sticky top-0 z-5">
        <div className="app-header__inner px-3 md:px-4 lg:px-6">
          <Menubar model={items} start={start} end={end} className="app-menubar lg:flex hidden" />
          <div className="flex justify-content-between align-items-center py-2 lg:hidden">
            {start}
            {end}
          </div>
        </div>
      </header>
      <main className="flex-auto">
        <Outlet />
      </main>
      <footer className="surface-section py-4 md:py-5">
        <div className="px-4 md:px-6 lg:px-8 section-container flex flex-column md:flex-row md:align-items-center md:justify-content-between gap-3">
          <div className="text-center md:text-left">
            <span className="font-semibold">AI Cafe</span>
            <span className="text-500 ml-2 block sm:inline">Nuvolo & Trane Technologies AI Learning Initiative</span>
          </div>
          <div className="flex flex-column sm:flex-row align-items-center gap-2 sm:gap-3 text-500 text-center">
            <span className="text-sm">© {new Date().getFullYear()} AI Cafe Community</span>
            <a
              href="https://github.com/atanas2d/ai-cafe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 text-sm"
            >
              View source
            </a>
          </div>
        </div>
      </footer>
      <Sidebar
        visible={isMobileMenuVisible}
        onHide={() => setIsMobileMenuVisible(false)}
        position="right"
        className="w-18rem"
      >
        <nav className="mobile-nav">
          <h3 className="mobile-nav__title mb-3 text-lg font-semibold">Navigation</h3>
          <ul className="mobile-nav__list list-none p-0 m-0">
            {[
              { label: 'Home', path: '/' },
              { label: 'Meetings', path: '/meetings' },
              { label: 'Tools', path: '/tools' },
              { label: 'Resources', path: '/resources' },
              { label: 'AI News', path: '/news' },
              { label: 'About', path: '/about' }
            ].map((item) => (
              <li key={item.path} className="mobile-nav__item">
                <button
                  className={`mobile-nav__link w-full text-left p-3 border-none bg-transparent cursor-pointer transition-colors ${
                    location.pathname === item.path ? 'mobile-nav__link--active' : ''
                  }`}
                  onClick={() => {
                    navigate(item.path);
                    setIsMobileMenuVisible(false);
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </Sidebar>
    </div>
  );
};

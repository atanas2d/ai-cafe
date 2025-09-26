import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { HomePage } from './pages/Home/HomePage';
import { MeetingsPage } from './pages/Meetings/MeetingsPage';
import { ToolsPage } from './pages/Tools/ToolsPage';
import { ResourcesPage } from './pages/Resources/ResourcesPage';
import { NewsPage } from './pages/News/NewsPage';
import { AnimationsPage } from './pages/Animations/AnimationsPage';
import { ProgressBar } from 'primereact/progressbar';
import { Suspense } from 'react';
import type { ThemeMode } from './theme/themeManager';
import { applyTheme, initializeTheme, persistTheme } from './theme/themeManager';

const LoadingFallback = () => (
  <div className="p-6">
    <ProgressBar mode="indeterminate" style={{ height: '4px' }} />
  </div>
);

const App = (): JSX.Element => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }
    return initializeTheme();
  });

  useEffect(() => {
    applyTheme(themeMode);
    persistTheme(themeMode);
  }, [themeMode]);

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route
          element={<MainLayout themeMode={themeMode} onThemeChange={setThemeMode} />}
        >
          <Route index element={<HomePage />} />
          <Route path="meetings" element={<MeetingsPage />} />
          <Route path="tools" element={<ToolsPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="animations" element={<AnimationsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;

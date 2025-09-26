import { InputSwitch } from 'primereact/inputswitch';
import type { ThemeMode } from '@/theme/themeManager';

interface ThemeToggleProps {
  value: ThemeMode;
  onChange?: (mode: ThemeMode) => void;
}

export const ThemeToggle = ({ value, onChange }: ThemeToggleProps): JSX.Element => {
  const isMidnight = value === 'midnight';

  return (
    <div className="theme-toggle" role="group" aria-label="Theme toggle">
      <i className={`pi pi-sun ${isMidnight ? 'text-400' : 'text-primary-500'}`} aria-hidden />
      <InputSwitch
        checked={isMidnight}
        onChange={(event) => onChange?.(event.value ? 'midnight' : 'classic')}
        aria-label={isMidnight ? 'Switch to classic theme' : 'Switch to midnight theme'}
      />
      <i className={`pi pi-moon ${isMidnight ? 'text-primary-500' : 'text-400'}`} aria-hidden />
    </div>
  );
};

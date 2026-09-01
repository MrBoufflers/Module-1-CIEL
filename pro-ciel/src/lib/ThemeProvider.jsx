import { useState, useEffect, useCallback } from 'react';
import { ThemeContext } from './useTheme';

export default function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() =>
    localStorage.getItem('theme') || 'dark'
  );
  const [dys, setDysState] = useState(() =>
    localStorage.getItem('dys') === 'on'
  );
  const [mode, setModeState] = useState('course');

  useEffect(() => {
    document.body.dataset.theme = theme;
    document.body.dataset.dys = dys ? 'on' : 'off';
    document.body.dataset.mode = mode;
  }, [theme, dys, mode]);

  const setTheme = useCallback((t) => {
    setThemeState(t);
    localStorage.setItem('theme', t);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  const toggleDys = useCallback(() => {
    const next = !dys;
    setDysState(next);
    localStorage.setItem('dys', next ? 'on' : 'off');
  }, [dys]);

  const setMode = useCallback((m) => {
    setModeState(m);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, dys, mode, setTheme, toggleTheme, toggleDys, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

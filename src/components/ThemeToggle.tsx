'use client';

import React, { useSyncExternalStore } from 'react';
import { ToggleButton, useTheme } from '@once-ui-system/core';

// The resolved theme lives on <html data-theme>, set by the init script and ThemeProvider.
const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
};
const getTheme = () => document.documentElement.getAttribute('data-theme') || 'light';
const getServerTheme = () => 'light';

export const ThemeToggle: React.FC = () => {
  const { setTheme } = useTheme();
  const currentTheme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  const icon = currentTheme === 'dark' ? 'light' : 'dark';
  const nextTheme = currentTheme === 'light' ? 'dark' : 'light';

  return (
    <ToggleButton
      prefixIcon={icon}
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} mode`}
    />
  );
};

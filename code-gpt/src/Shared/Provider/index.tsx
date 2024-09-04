// Provider.tsx
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './style';
import { Reset } from '../Components/Reset';

interface ProviderProps {
  children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      {children}
    </ThemeProvider>
  );
};

export default Provider;

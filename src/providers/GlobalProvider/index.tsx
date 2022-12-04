import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'theme';

interface GlobalProviderProps {
  children: React.ReactNode;
}
export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

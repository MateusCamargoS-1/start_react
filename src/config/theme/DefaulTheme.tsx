import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#333',
    secondary: '#eee',
  },
};

interface DefaultThemeProps {
  children: React.ReactNode;
}

const DefaultTheme = ({ children }: DefaultThemeProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default DefaultTheme;

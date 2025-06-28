import { Outlet } from '@tanstack/react-router';
import { ThemeProvider } from './contexts/ThemeContext';

function IndexApp() {
  return (
    <ThemeProvider>
       <Outlet />
    </ThemeProvider>
  );
}

export default IndexApp;
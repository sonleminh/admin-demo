import { useRoutes } from 'react-router-dom';
import routes from './routers';
import { ThemeProvider } from '@mui/material';
import { theme } from './themes/theme';
import { AuthContextProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

function App() {
  const content = useRoutes(routes);
  return (
    <ThemeProvider theme={theme()}>
      <AuthContextProvider>
        {content}
        <ToastContainer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;

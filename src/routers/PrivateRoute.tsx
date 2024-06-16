import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { useEffect } from 'react';
import LoadingBackdrop from '../components/LoadingBackdrop';

const PrivateRoute = () => {
  const navigate = useNavigate();
  const auth = useAuthContext();
  useEffect(() => {
    const session = localStorage.getItem('session');
    if (session) {
      auth?.signIn({ name: session });
    } else {
      navigate('/login');
    }
  }, []);
  return auth?.user ? <Outlet></Outlet> : <LoadingBackdrop />;
};

export default PrivateRoute;

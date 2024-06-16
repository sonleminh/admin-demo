import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { useEffect } from 'react';
import LoadingBackdrop from '../components/LoadingBackdrop';
const PublicRoute = () => {
  const navigate = useNavigate();
  const auth = useAuthContext();
  useEffect(() => {
    const session = localStorage.getItem('session');
    if (session) {
      navigate('article');
    }
  }, []);

  return !auth?.user ? <Outlet /> : <LoadingBackdrop />;
};

export default PublicRoute;

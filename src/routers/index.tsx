import { Navigate } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import BaseLayout from '../layouts/BaseLayout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { Suspense, lazy } from 'react';
import SuspenseLoader from '../components/SuspenseLoader';

const Loader =
  <P extends object>(Component: React.ComponentType<P>): React.FC<P> =>
  (props: P) =>
    (
      <Suspense fallback={<SuspenseLoader />}>
        <Component {...props} />
      </Suspense>
    );

const Login = Loader(lazy(() => import('../pages/Login')));
const Product = Loader(lazy(() => import('../pages/Product')));

const routes = [
  {
    element: <PublicRoute />,
    children: [
      {
        element: <BaseLayout />,
        children: [
          {
            path: 'login',
            element: <Login />,
          },
        ],
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          {
            path: '/',
            element: <Navigate to={'/product'} replace />,
          },

          {
            path: 'product/*',
            element: <Product />,
          },
        ],
      },
    ],
  },
];

export default routes;

import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
// import MinimalLayout from 'layout/MinimalLayout';
// import LoginPage from 'pages/loginPage/index';

// render - login
const LoginPage = Loadable(lazy(() => import('pages/loginPage/index')));
// const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: <LoginPage />
  // children: [
  //   {
  //     path: '/login',
  //     element: <LoginPage />
  //   }
  // ]
};

export default LoginRoutes;

import React from 'react';
import InfoPage from '../pages/InfoPage';
import LoginPage from '../pages/LoginPage';
import SingUpPage from '../pages/SingUpPage';
import signUp from './signUp';

export default [
  {
    path: '/',
    component: <InfoPage />,
  },
  {
    path: '/login',
    component: <LoginPage />,
  },
  {
    path: '/sign-up/*',
    component: <SingUpPage steps={signUp} />,
    routes: signUp,
  },
];

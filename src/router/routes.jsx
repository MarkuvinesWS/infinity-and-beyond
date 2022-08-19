import React from 'react';
import InfoPage from '../pages/InfoPage';
import LoginPage from '../pages/LoginPage';

export default [
  {
    path: '/',
    component: <InfoPage />,
  },
  {
    path: '/login',
    component: <LoginPage />,
  },
];

import React from 'react';
import InfoPage from '../../pages/InfoPage';
import LoginPage from '../../pages/LoginPage';
import SingUpPage from '../../pages/SingUpPage';
import config from '../../config';
import Step1 from '../../components/signUpSteps/Step1';
import Step2 from '../../components/signUpSteps/Step2';
import Step3 from '../../components/signUpSteps/Step3';
import ProfilePage from '../../pages/ProfilePage';

export default [
  {
    path: '/',
    element: <InfoPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'sign-up/',
    element: <SingUpPage steps={config.registerSteps} />,
    children: [
      {
        path: 'step1',
        element: <Step1 />,
      },
      {
        path: 'step2',
        element: <Step2 />,
      },
      {
        path: 'step3',
        element: <Step3 />,
      },
    ],
  },
  {
    path: 'profile',
    element: <ProfilePage />,
  },
];

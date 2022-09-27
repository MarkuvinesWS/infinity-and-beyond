import React from 'react';
import Step1 from '../components/signUpSteps/Step1';
import Step2 from '../components/signUpSteps/Step2';
import Step3 from '../components/signUpSteps/Step3';

export default [
  {
    path: '/step1',
    component: <Step1 />,
  },
  {
    path: '/step2',
    component: <Step2 />,
  },
  {
    path: '/step3',
    component: <Step3 />,
  },
];

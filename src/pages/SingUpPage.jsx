import React from 'react';
import { Outlet } from 'react-router-dom';
import SingUpLayout from '../layouts/SingUpLayout';

function SingUpPage() {
  return (
    <SingUpLayout>
      <Outlet />
    </SingUpLayout>
  );
}
export default SingUpPage;

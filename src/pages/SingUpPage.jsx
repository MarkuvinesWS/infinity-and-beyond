import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import SingUpLayout from '../layouts/SingUpLayout';

function SingUpPage({ steps }) {
  return (
    <SingUpLayout>
      <Routes>
        {steps.map(({ path, component }) => <Route path={path} element={component} />)}
      </Routes>
    </SingUpLayout>
  );
}
SingUpPage.propTypes = {
  // eslint-disable-next-line max-len
  steps: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.element]))).isRequired,
};
export default SingUpPage;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ButtonSignUp({ stepHandler, children }) {
  return (
    <StyledButtonDefault onClick={stepHandler} type="button">
      {children}
    </StyledButtonDefault>
  );
}

ButtonSignUp.defaultProps = {
  stepHandler: () => {},
};

ButtonSignUp.propTypes = {
  children: PropTypes.element.isRequired,
  stepHandler: PropTypes.func,
};

export default ButtonSignUp;

const StyledButtonDefault = styled.button`
  padding: 12px 40px;
  outline: none;
  border: none;
  border-radius: 124px;
  color: var(--color-black-10);
  background: var(--color-roxo-100);
  cursor: pointer;
`;

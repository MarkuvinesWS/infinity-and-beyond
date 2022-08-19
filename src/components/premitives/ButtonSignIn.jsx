import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ButtonSignIn({ children }) {
  return (
    <StyledButtonDefault className="text-style-raleway-title-01" type="button">
      {children}
    </StyledButtonDefault>
  );
}

ButtonSignIn.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ButtonSignIn;

const StyledButtonDefault = styled.button`
  padding: 16px 34px;
  outline: none;
  border: none;
  border-radius: 123px;
  color: var(--color-black-10);
  background: var(--color-roxo-100);
  cursor: pointer;
  &:hover {
    background: var(--color-roxo-45);
  }
  &:active {
    background: var(--color-roxo-100);
  }
`;

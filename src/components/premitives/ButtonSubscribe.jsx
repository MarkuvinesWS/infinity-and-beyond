import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ButtonSubscribe({ children }) {
  return (
    <StyledButton
      className="text-style-raleway-title-01"
      type="button"
    >
      {children}
    </StyledButton>
  );
}

ButtonSubscribe.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ButtonSubscribe;

const StyledButton = styled.div`
  padding: 14px 36px;
  width: fit-content;
  height: fit-content;
  background: var(--color-black-10);
  border-radius: 63px;
  color:var(--color-roxo-100);
  cursor: pointer;
  transition: all .3s ease-out;
  &:hover {
    transition: all .3s ease-out;
    background-color: var(--color-roxo-20);
  }
  &:active {
    transition-delay: 2ms;
    background: var(--color-roxo-70);
    color: var(--color-black-10);
  }
`;

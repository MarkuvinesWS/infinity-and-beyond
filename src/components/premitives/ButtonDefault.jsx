import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ButtonDefault({ children }) {
  return (
    <StyledButtonDefault type="button">
      {children}
    </StyledButtonDefault>
  );
}

ButtonDefault.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ButtonDefault;

const StyledButtonDefault = styled.button`
  padding: 12px 40px;
  outline: none;
  border: 1px solid var(--color-black-10);
  border-radius: 124px;
  color: var(--color-black-10);
  background: transparent;
  cursor: pointer;
`;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Input({
  placeholder,
  border,
  borderFocus,
  type,
}) {
  return (
    <StyledInput
      border={border}
      borderFocus={borderFocus}
      placeholder={placeholder}
      className="text-style-raleway-20-px-regular"
      type={type}
    />
  );
}

Input.defaultProps = {
  border: null,
  borderFocus: null,
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  border: PropTypes.string,
  borderFocus: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default Input;

const StyledInput = styled.input`
  margin: 2px;
  padding: 16px 28px;
  width: 100%;
  border-radius: 63px;
  border: ${({ border }) => (border ? `1px solid var(${border})` : 'none')};
  color: var(--color-black-10);
  background-color: rgba(26, 26, 26, 0.3);
  outline: none;

  &:focus {
    outline: 2px solid var(--color-roxo-45);
    outline:  ${({ borderFocus }) => (borderFocus ? `2px solid var(${borderFocus})` : 'none')} ;
  }

  &:placeholder-shown {
    color: var(--color-black-40);
  }
`;

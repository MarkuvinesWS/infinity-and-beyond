import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from './Input';

function PasswordInput({
  className,
  placeholder,
  action,
  setPasswordCallback,
}) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <StyledInputContainer>
      <Input setPasswordCallback={setPasswordCallback} action={action} className={className} type={isVisible ? 'text' : 'password'} border="--color-black-65" borderFocus="--color-black-10" placeholder={placeholder} />
      <button type="button" onClick={() => setIsVisible((prev) => !prev)} className="input-container-img input-container-img_visible">
        {isVisible ? <img src="/icons/pass-visible.svg" alt="visible" /> : <img src="/icons/pass-invisible.svg" alt="invisible" />}
      </button>
    </StyledInputContainer>
  );
}

PasswordInput.defaultProps = {
  className: '',
  action: undefined,
};

PasswordInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  action: PropTypes.func,
  setPasswordCallback: PropTypes.func.isRequired,
};

export default PasswordInput;

const StyledInputContainer = styled.div`
  width: 100%;
  position: relative;
  .input-container-img {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    &_visible {
      width: 20px;
      height: auto;
    }
    &_invisible {
      width: 22px;
      height: 12px;
    }
  }
`;

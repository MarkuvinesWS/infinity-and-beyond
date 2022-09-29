import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonSignUp from './ButtonSignUp';

function SignUpBlock({ stepHandler, blockText, buttonText }) {
  return (
    <StyledSignupBlock className="sign-up-block">
      <p className="sign-up-block-text" dangerouslySetInnerHTML={{ __html: blockText }} />
      <ButtonSignUp stepHandler={stepHandler}>
        <span className="sign-up-block-btn-text">{buttonText}</span>
      </ButtonSignUp>
    </StyledSignupBlock>
  );
}

SignUpBlock.propTypes = {
  stepHandler: PropTypes.func.isRequired,
  blockText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default SignUpBlock;

const StyledSignupBlock = styled.div`
  padding: 24px 38px;
  max-width: 818px;
  text-align: center;
  background-color: rgba(166, 102, 255, 0.1);
  border-radius: 20px;
  .sign-up-block-text {
    margin: 0 0 24px 0;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: var(--color-black-10);
    a {
      color: inherit;
      font-weight: bold;
    }
  }
  .sign-up-block-btn-text {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;
    color: var(--color-black-10);
  }
`;

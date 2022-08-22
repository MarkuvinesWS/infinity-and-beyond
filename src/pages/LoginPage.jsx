import React from 'react';
import styled from 'styled-components';
import Input from '../components/premitives/Input';
import PasswordInput from '../components/premitives/PasswordInput';
import ButtonSignIn from '../components/premitives/ButtonSignIn';
import DefaultLayout from '../layouts/DefaultLayout';

function LoginPage() {
  return (
    <DefaultLayout>
      <StyledLoginPage className="landing_container login-page-container">
        <h2 className="text-style-raleway-title-03 login-page-title">Sign In</h2>
        <p className="text-style-raleway-20-px-regular login-page-subtitle">
          Hello, where have you been?
          <br />
          We are so happy to have you back.
        </p>
        <form className="login-page-form" action="">
          <div className="login-page-inputs-block">
            <Input placeholder="E-mail" border="--color-black-65" borderFocus="--color-black-10" />
            <PasswordInput placeholder="Password" border="--color-black-65" borderFocus="--color-black-10" />
            <a className="login-page-forgot-pass-link form-link-text" href="/">Forgot password?</a>
          </div>
          <div className="login-page__sign-in-btn">
            <ButtonSignIn>
              sign in and start watching
            </ButtonSignIn>
          </div>
          <label className="login-page-checkbox-label" htmlFor="remember">
            <input className="login-page-checkbox" id="remember" type="checkbox" />
            <div className="login-page-custom-checkbox" />
            <span className="login-page-checkbox-text text-style-raleway-16-px-regular">Remember me</span>
          </label>
        </form>
        <span className="login-page-signup-offer text-style-raleway-16-px-regular">
          New to Infinity & Beyond?&nbsp;
          <a href="/" className="login-page-signup-offer-link form-link-text">Sign Up Here!</a>
        </span>
      </StyledLoginPage>
    </DefaultLayout>
  );
}

export default LoginPage;

const StyledLoginPage = styled.div`
  padding: 136px 0 96px 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  .login-page-title {
    margin: 0 0 24px 0;
    text-transform: uppercase;
    color: var(--color-black-10);
  }
  .login-page-subtitle {
    margin: 0 0 64px 0;
    text-align: center;
    text-transform: unset;
    color: var(--color-black-25);
  }
  .login-page-form {
    margin: 0 0 96px 0;
    width: 100%;
    display: flex;
    flex-flow: nowrap column;
    gap: 16px;
  }
  .login-page-forgot-pass-link {
    color: var(--color-black-65);
    &:hover {
     color: var(--color-black-10); 
    }
  }
  .login-page-checkbox-label {
    margin: 0 0 72px 0;
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
  }
  .login-page-custom-checkbox {
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 2px solid var(--color-black-65);
  }
  .login-page__sign-in-btn {
    margin: 0 0 32px 0;
  }
  .login-page-checkbox {
    appearance: none;
    &:checked {
      &+.login-page-custom-checkbox {
        border-color: var(--color-black-10);
       background-color: var(--color-black-10);
        &+.login-page-checkbox-text {
          color: var(--color-black-10);
        }
      }
    }
  }
  .login-page-checkbox-text {
    color: var(--color-black-65);
  }
  .login-page-signup-offer {
    text-align: center;
    color: var(--color-black-65);
  }
  .login-page-signup-offer-link {
    color: var(--color-roxo-70);
    :hover {
      color: var(--color-black-10);
    }
  }
  .login-page-inputs-block {
    margin: 0 0 56px 0;
    display: flex;
    flex-flow: column nowrap;
    gap: 16px;
  }
  .login-page-site-map {
    margin: 0 0 24px 0;
    display: flex;
    gap: 80px;
  }
  .login-page-footer {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0.5;
      background: var(--color-black-95);
    }
  }
  .login-page-footer-container {
    position: relative;
    z-index: 1;
    padding: 16px 0 28px 0;
    max-width: 820px;
    margin: 0 auto;
  }
  .login-page-footer-copyright {
    color: var(--color-black-40);
    text-align: center;
  }
  .login-page-footer-link {
    color: var(--color-black-40);
    :hover {
      color: var(--color-black-10);
    }
  }
`;

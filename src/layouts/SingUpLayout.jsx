import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DefaultLayout from './DefaultLayout';
import StepsToggle from '../components/premitives/StepsToggle';

function SingUpLayout({ children }) {
  return (
    <DefaultLayout>
      <StyledSignUpLayout>
        <h2 className="text-style-raleway-titles-02 sign-up-title">Be part of Infinity & Beyond family</h2>
        <p className="text-style-raleway-texts sign-up-subtitle">Get access to our wonderful content library.</p>
        <StepsToggle className="sign-up-steps-toggle" />
        {children}
        <p className="text-style-raleway-16-px-regular sign-up-if-member">
          Already a member?&nbsp;
          <Link className="form-link-text sign-up-if-member-link" to="/">Sign In</Link>
        </p>
      </StyledSignUpLayout>
    </DefaultLayout>
  );
}

SingUpLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SingUpLayout;

const StyledSignUpLayout = styled.div`
  padding: 72px 0 0 0;
  .sign-up-title {
    margin: 0 0 16px 0;
    text-transform: unset;
    color: var(--color-black-10);
    text-align: center;
  }
  .sign-up-subtitle {
    margin: 0 0 66px 0;
    text-align: center; 
    color: var(--color-black-25);
  }
  .sign-up-steps-toggle {
    margin: 0 auto 40px auto;
  }
  .sign-up-if-member {
    text-align: center;
    margin: 24px 0 0 0;
    color: var(--color-black-65);
  }
  .sign-up-if-member-link {
    color: var(--color-roxo-70);
    &:hover {
      color: var(--color-black-10);
    }
  }
`;

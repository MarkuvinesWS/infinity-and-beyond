import React from 'react';
import styled from 'styled-components';
import Input from '../premitives/Input';
import PasswordInput from '../premitives/PasswordInput';

function Step2() {
  return (
    <StyledStep2Container>
      <h2 className="text-style-raleway-shows-title step2-title">Join the family, enter your details and create your account</h2>
      <p className="text-style-raleway-16-px-regular step2-subtitle">
        We&apos;re glad to see you here,
        you&apos;re just steps away from a wonderful world of amazing content!
      </p>
      <form className="step2-form" action="">
        <Input className="step2-first-name" placeholder="First Name" type="text" border="--color-black-65" borderFocus="--color-black-10" />
        <Input className="step2-last-name" placeholder="Last Name" type="text" border="--color-black-65" borderFocus="--color-black-10" />
        <Input className="step2-email" placeholder="E-mail" type="email" border="--color-black-65" borderFocus="--color-black-10" />
        <PasswordInput className="step2-pass" placeholder="Password" border="--color-black-65" borderFocus="--color-black-10" />
        <PasswordInput className="step2-pass-conf" placeholder="Confirm Password" border="--color-black-65" borderFocus="--color-black-10" />
      </form>
    </StyledStep2Container>
  );
}

export default Step2;

const StyledStep2Container = styled.div`
  .step2-title {
    margin: 0 0 16px 0;
    text-align: center;
    color: var(--color-black-10);
  }
  .step2-subtitle {
    margin: 0 0 56px 0;
    text-align: center;
    color: var(--color-black-10);
  }
 .step2-form {
   min-width: 819px;
   display: grid;
   grid-template: repeat(3, 1fr) / repeat(2, 1fr);
   gap: 20px;
 }
  .step2-first-name {
    grid-row: 1;
    grid-column: 1;
  }
  .step2-email {
    grid-row: 2;
    grid-column: 1 / 3;
  }
`;

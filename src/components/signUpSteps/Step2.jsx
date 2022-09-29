import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Input from '../premitives/Input';
import PasswordInput from '../premitives/PasswordInput';
import {
  setEmail,
  setFirstName,
  setLastName,
  setPassword,
} from '../../store/signUpForm';
import { setActiveStep } from '../../store/signUpSteps';
import SignUpBlock from '../premitives/SignUpBlock';

const buttonText = 'sign up and be part of the family!';
const blockText = ' By clicking Create Account, you confirm that you are at least 18 years old, that you agree to the <a href="/">Terms of Use</a> and that you have read our <a href="/">Privacy Policy.</a> You also confirm that you agree to receive advertising, promotions and other offers via email, social media and other channels.';
function Step2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firstPassword, setFirstPassword] = useState();
  const [secondPassword, setSecondPassword] = useState();
  const comparePasswords = useCallback(() => {
    if (firstPassword !== secondPassword) {
      console.log('Passwords not eqval');
      return;
    }
    dispatch(setActiveStep(3));
    navigate('/sign-up/step3');
  }, [firstPassword, secondPassword, navigate, dispatch]);
  return (
    <StyledStep2Container>
      <h2 className="text-style-raleway-shows-title step2-title">Join the family, enter your details and create your account</h2>
      <p className="text-style-raleway-16-px-regular step2-subtitle">
        We&apos;re glad to see you here,
        you&apos;re just steps away from a wonderful world of amazing content!
      </p>
      <form className="step2-form" action="">
        <Input action={setFirstName} className="step2-first-name" placeholder="First Name" type="text" border="--color-black-65" borderFocus="--color-black-10" />
        <Input action={setLastName} className="step2-last-name" placeholder="Last Name" type="text" border="--color-black-65" borderFocus="--color-black-10" />
        <Input action={setEmail} className="step2-email" placeholder="E-mail" type="email" border="--color-black-65" borderFocus="--color-black-10" />
        <PasswordInput setPasswordCallback={setFirstPassword} action={setPassword} className="step2-pass" placeholder="Password" border="--color-black-65" borderFocus="--color-black-10" />
        <PasswordInput setPasswordCallback={setSecondPassword} className="step2-pass-conf" placeholder="Confirm Password" border="--color-black-65" borderFocus="--color-black-10" />
      </form>
      <p className="text-style-raleway-16-px-regular step2-password-notation">*The password must be at least 8 characters long and include a number or special character.</p>
      {/* <button type="button" >Next</button> */}
      <SignUpBlock blockText={blockText} buttonText={buttonText} stepHandler={comparePasswords} />
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
   margin: 0 0 8px 0;
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
  .step2-password-notation {
    margin: 0 0 56px 0;
    text-align: center;
    color: var(--color-black-40);
  }
`;

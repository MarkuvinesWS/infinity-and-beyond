import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../premitives/Input';
import SignUpBlock from '../premitives/SignUpBlock';
import {
  setCardHolderName,
  setCardNumber, setCPF,
  setCVV,
  setExpirationDate,
} from '../../store/signUpForm';

const blockText = 'At the beginning of your subscription we will charge you $19.90, and the subscription will automatically renew on a recurring basis each month at the then-current price, unless you cancel prior to the auto-renewal. Price includes applicable taxes. To cancel or prevent your subscription from automatically renewing, go to your profile settings and choose Subscription.';
const buttonText = 'sign up and ENJOY OUR CONTENT!';
function Step3() {
  const navigate = useNavigate();
  function stepHandler() {
    navigate('/profile');
  }
  return (
    <StyledStep2Container>
      <h2 className="text-style-raleway-shows-title step3-title">Add Credit Card Information</h2>
      <p className="text-style-raleway-16-px-regular step3-subtitle">
        Add your payment method and access our content immediately!
      </p>
      <form className="step3-form" action="">
        <Input action={setCardHolderName} className="step3-card-holder-name" placeholder="Name of card holder" type="text" border="--color-black-65" borderFocus="--color-black-10" />
        <Input action={setCardNumber} className="step3-card-number" placeholder="Card Number" type="text" border="--color-black-65" borderFocus="--color-black-10" />
        <Input action={setExpirationDate} className="step3-expiration-date" placeholder="Expiration date" type="text" border="--color-black-65" borderFocus="--color-black-10" />
        <Input action={setCVV} className="step3-cvv" placeholder="CVV" type="text" border="--color-black-65" borderFocus="--color-black-10" />
        <Input action={setCPF} className="step3-cpf" placeholder="CPF" type="text" border="--color-black-65" borderFocus="--color-black-10" />
      </form>
      <p className="text-style-raleway-16-px-regular promo-code-text">
        Do you have a promo code??
        {' '}
        <Link className="form-link-text promo-code-link" to="/">Click Here</Link>
      </p>
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <SignUpBlock stepHandler={stepHandler} blockText={blockText} buttonText={buttonText} />
    </StyledStep2Container>
  );
}

export default Step3;

const StyledStep2Container = styled.div`
  .step3-title {
    margin: 0 0 16px 0;
    text-align: center;
    color: var(--color-black-10);
  }
  .step3-subtitle {
    margin: 0 0 56px 0;
    text-align: center;
    color: var(--color-black-10);
  }
 .step3-form {
   margin: 0 0 40px 0;
   min-width: 819px;
   display: grid;
   grid-template: repeat(4, 1fr) / repeat(2, 1fr);
   gap: 20px;
 }
  .step3-card-holder-name {
    grid-row: 1;
    grid-column: 1 / 3;
  }
  .step3-card-number {
    grid-row: 2;
    grid-column: 1 / 3;
  }
  .step3-expiration-date {
    grid-row: 3;
    grid-column: 1 / 2;
  }
  .step3-cvv {
    grid-row: 3;
  }
  .step3-cpf {
    grid-row: 4;
    grid-column: 1 / 3;
  }
  .promo-code-text {
    margin: 0 0 40px 0;
    color: var(--color-black-25);
  }
  .promo-code-link {
    color: var(--color-roxo-70);
    &:hover {
      color: var(--color-black-10);
    }
  }
`;

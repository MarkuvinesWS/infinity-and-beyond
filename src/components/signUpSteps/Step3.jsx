import React from 'react';
import styled from 'styled-components';
import Input from '../premitives/Input';

function Step3() {
  return (
    <StyledStep2Container>
      <h2 className="text-style-raleway-shows-title step3-title">Add Credit Card Information</h2>
      <p className="text-style-raleway-16-px-regular step3-subtitle">
        Add your payment method and access our content immediately!
      </p>
      <form className="step3-form" action="">
        <Input className="step3-card-holder-name" placeholder="Name of card holder" type="text" border="--color-black-65" borderFocus="--color-black-10" />
        <Input className="step3-card-number" placeholder="Card Number" type="text" border="--color-black-65" borderFocus="--color-black-10" />
        <Input className="step3-expiration-date" placeholder="Expiration date" type="text" border="--color-black-65" borderFocus="--color-black-10" />
        <Input className="step3-cvv" placeholder="CVV" type="text" border="--color-black-65" borderFocus="--color-black-10" />
        <Input className="step3-cpf" placeholder="CPF" type="text" border="--color-black-65" borderFocus="--color-black-10" />
      </form>
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
`;

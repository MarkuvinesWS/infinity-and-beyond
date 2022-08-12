import React from 'react';
import styled from 'styled-components';
import Input from './premitives/Input';
import ButtonSubscribe from './premitives/ButtonSubscribe';

function Subscription() {
  return (
    <StyledSubscription>
      <div className="subscription__header text-style-raleway-shows-title">
        <span>Sign Up</span>
        and watch this documentary and other titles!
      </div>
      <div className="subscription__main">
        <Input placeholder="example@email.com" />
        <ButtonSubscribe>
          Sign&nbsp;Up&nbsp;Now!
        </ButtonSubscribe>
      </div>
      <div className="subscription__footer text-style-raleway-16-px-regular">
        Ready to watch? Enter your email and enjoy the best of our content.
      </div>
    </StyledSubscription>
  );
}

export default Subscription;

const StyledSubscription = styled.div`
  padding: 24px 48px;
  width: 850px;
  border-radius: 20px;
  background-color: var(--color-roxo-100);

  .subscription__header {
    margin: 0 0 24px 0;
    text-align: center;
    color: var(--color-black-10);
  }
  .subscription__main {
    margin: 0 0 24px 0;
    display: flex;
    gap: 24px;
    justify-content: space-between;
    align-items: center;
  }
  .subscription__footer {
    text-align: center;
    color: var(--color-black-10);
  }
`;

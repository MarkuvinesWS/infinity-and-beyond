import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TariffCard from '../TariffCard';

function Step1() {
  const { tariffsList } = useSelector((state) => state.tariffs);
  return (
    <>
      <StyledStep1Container>
        <h2 className="text-style-raleway-shows-title step1-title">Choose your plan</h2>
        <p className="text-style-raleway-16-px-regular step1-subtitle">Discover our plans and choose the best option for you to enjoy our content.</p>
        <div className="step1-cards-container">
          {tariffsList.map((
            {
              id,
              name,
              text,
              price,
              isRecommend,
              list,
            },
          ) => (
            <TariffCard
              isRecommend={isRecommend}
              description={text}
              index={id}
              tariff={price}
              title={name}
              list={list}
            />
          ))}
        </div>
      </StyledStep1Container>
      <p className="text-style-raleway-16-px-regular step1-bottom-text">
        *See more information about payment plans&nbsp;
        <Link className="text-style-raleway-16-px-regular step1-bottom-text-link" to="/">clicking here.</Link>
      </p>
    </>
  );
}

export default Step1;

const StyledStep1Container = styled.div`
  .step1-title {
    margin: 0 0 16px 0;
    text-align: center;
    color: var(--color-black-10);
  }
  .step1-subtitle {
    margin: 0 0 16px 0;
    text-align: center;
    color: var(--color-black-10);
  }
  .step1-cards-container {
    padding: 12px 24px 16px 24px;
    display: flex;
    gap: 32px;
  }
  & + .step1-bottom-text {
    text-align: center;
    color: var(--color-black-10);
    .step1-bottom-text-link {
      color: inherit;
      text-decoration: underline;
    }
  }
`;

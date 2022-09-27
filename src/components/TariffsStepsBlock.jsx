import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import TariffCard from './TariffCard';
import StepsToggle from './premitives/StepsToggle';

function TariffsStepsBlock() {
  const { tariffsList } = useSelector((state) => state.tariffs);
  return (
    <StyledTariffsStepsBlock>
      <StepsToggle />
      <StyledCardsContainer>
        {tariffsList.map((
          {
            id,
            name,
            text,
            price,
            isRecommend,
            list,
          },
          index,
        ) => (
          <TariffCard
            index={index}
            key={id}
            isRecommend={isRecommend}
            description={text}
            tariff={price}
            title={name}
            list={list}
          />
        ))}
      </StyledCardsContainer>
    </StyledTariffsStepsBlock>
  );
}

export default TariffsStepsBlock;

const StyledTariffsStepsBlock = styled.div`
  padding: 0 24px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 86px;
`;
const StyledCardsContainer = styled.div`
  display: flex;
  gap: 32px;
`;

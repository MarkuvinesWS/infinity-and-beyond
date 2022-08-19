import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TariffToggle from './TariffToggle';
import TariffCard from './TariffCard';

function TariffsBlock({ tariffs, activeTariff, setActiveTariff }) {
  return (
    <StyledTariffsBlock>
      <TariffToggle
        setActiveTariff={setActiveTariff}
        activeTariff={activeTariff}
        tariffs={tariffs}
      />
      <StyledCardsContainer>
        {tariffs.map((
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
            setActiveTariff={setActiveTariff}
            activeTariff={activeTariff}
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
    </StyledTariffsBlock>
  );
}

TariffsBlock.propTypes = {
  tariffs: PropTypes
    .arrayOf(PropTypes.objectOf(PropTypes
      .oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes
        .arrayOf(PropTypes.string)]))).isRequired,
  activeTariff: PropTypes.number.isRequired,
  setActiveTariff: PropTypes.func.isRequired,
};

export default TariffsBlock;

const StyledTariffsBlock = styled.div`
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

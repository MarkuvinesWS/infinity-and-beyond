import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TariffTogglePoint from './premitives/TariffTogglePoint';

function TariffToggle({
  tariffs,
  activeTariff,
  setActiveTariff,
}) {
  return (
    <StyledTariffToggle>
      <div className="tariffs-container">
        {tariffs.map(({ id, name, isRecommend }, index) => (
          <TariffTogglePoint
            key={id}
            isRecommend={isRecommend}
            onClick={setActiveTariff}
            index={index}
            activeTariff={activeTariff}
            className="tariff text-style-raleway-20-px-regular"
          >
            {name}
          </TariffTogglePoint>
        ))}
      </div>
    </StyledTariffToggle>
  );
}

TariffToggle.propTypes = {
  tariffs: PropTypes.arrayOf(PropTypes.objectOf(PropTypes
    .oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])))
    .isRequired,
  activeTariff: PropTypes.number.isRequired,
  setActiveTariff: PropTypes.func.isRequired,
};

export default TariffToggle;

const StyledTariffToggle = styled.div`
  position: relative;
  max-width: fit-content;
  background-color: var(--color-black-95-06);
  border-radius: 69px;
  .tariffs-container {
    width: 670px;
    display: flex;
    flex-flow: row nowrap;
  }
`;
